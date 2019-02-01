import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import Pagination from "react-js-pagination";
import { Alert } from './../components'

@inject('store')
@observer
class DataTableGrid extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			fields: [],
			sortColumn: {},
			activePage: 1,
			perPage: 10,
			totalItemsCount: 450,
			pageRangeDisplayed: 5
		}
		this.handlePageChange = this.handlePageChange.bind(this)
	}

	componentWillMount() {
		let start = (this.state.activePage - 1) * this.state.perPage
		let end = start + this.state.perPage
		let data = this.props.tableData.data.slice(start, end)
		let fields = this.props.tableData.fields
		let sortColumn = {}
		let coln = {label: '', sortType: ''}
		for(let key in this.props.tableData.fields) {
			sortColumn[key] = coln
			sortColumn[key].label = this.props.tableData.fields[key]
			sortColumn[key]['sortType'] = ''
		}
		let totalItemsCount = this.props.tableData.data.length
		this.setState({data,fields, sortColumn, totalItemsCount})
	}

	sortData(key) {
		if(key === 'action') {
			return;
		}
		let column = this.state.sortColumn[key]
		let tempData = []
		if(column.sortType === '') {
			column.sortType = 'asc'
			tempData = this.props.tableData.data.sort((a, b)=>{
				let x = a[key].toLowerCase();
				let y = b[key].toLowerCase();
				return x < y ? -1 : x > y ? 1 : 0;
			})
			let start = (this.state.activePage - 1) * this.state.perPage
			let end = start + this.state.perPage
			let data = tempData.slice(start, end)
			this.setState({data})
		} else {
			column.sortType = ''
			tempData = this.props.tableData.data.sort((a, b)=>{
				let x = b[key].toLowerCase();
				let y = a[key].toLowerCase();
				return x < y ? -1 : x > y ? 1 : 0;
			})
			let start = (this.state.activePage - 1) * this.state.perPage
			let end = start + this.state.perPage
			let data = tempData.slice(start, end)
			this.setState({data})
		}
		this.state.sortColumn[key] = column
	}

	onChangePerPage(perPage, event) {
		perPage = parseInt(perPage);
		let activePage = 1
		let start = (activePage - 1) * perPage
		let end = start + perPage
		let data = this.props.tableData.data.slice(start, end)
		this.setState((ps)=>({activePage, data, perPage}));
		event.preventDefault();
	}

	getTableHeader() {
		let list = []
		for(let key in this.state.fields) {
			let value = this.state.fields[key]
			list.push(<th key={'thred-'+key} onClick={()=>this.sortData(key)}>{value}</th>)
		}
		return <tr>{list}</tr>
	}

	getTableBody() {
		if(this.state.data.length === 0) {
			return <tr><td className='text-center' colSpan={this.props.tableData.colLength}>No Data Found</td></tr>
		}
		let imgTdChd = <img src='/assets/images/form-inputs/square-checked.svg' height = '18px' width = '18px' />
		let imgTdNtChd = <img src='/assets/images/form-inputs/square-unchecked.svg' height = '18px' width = '18px' />
		return this.state.data.map((item, i) => {
			let rows = []
			for(let key in this.state.fields) {
				let value = item[key]
				rows.push(<td key={'tbody-row-'+i+'-col-'+key} >{value}</td>)
			}
			return <tr key={i}>{rows}</tr>
		})
	}

	handlePageChange(pageNumber) {
		let activePage = parseInt(pageNumber)
		let start = (activePage - 1) * this.state.perPage
		let end = start + this.state.perPage
		let data = this.props.tableData.data.slice(start, end)
		this.setState((ps)=>({activePage, data}));
		this.forceUpdate();
	}

	render() {
		let length = Math.ceil(this.state.totalItemsCount / this.state.perPage)
		let { flashMessage } = this.props.store
		return (
			<div className='card pb-0'>
				<div className='card-body p-3'>
					{flashMessage.show && <Alert />}
					<div className='datatable-pagination'>
						<div className="d-flex justify-content-between bd-highlight  mb-2">
							<div className="bd-highlight input-group ml-1" style={{width: '155px', height: '33px'}}>
								<label htmlFor='filterByStatus'>Per Page:&nbsp;</label>
								<select
									className='form-control form-control-sm'
									onChange={(e)=>this.onChangePerPage(e.target.value, e)}
									value={this.state.perPage}
								>
									<option value='10'>10</option>
									<option value='25'>25</option>
									<option value='50'>50</option>
									<option value='100'>100</option>
									<option value='500'>500</option>
									<option value='1000'>1000</option>
								</select>
							</div>
							<div className="bd-highlight input-group" style={{width: '185px', height: '33px'}}>
								<label htmlFor='filterByStatus'>Current Page:&nbsp;</label>
								<select
									className='form-control form-control-sm'
									value={this.state.activePage}
									onChange={(e)=> this.handlePageChange(parseInt(e.target.value))}
								>
									{Array.apply(null, {length}).map((e, i)=> <option key={i} value={i+1}>{i+1}</option>)}
								</select>
							</div>
							<div className="bd-highlight right-content" style={{height: '33px'}}>
								<Pagination
									activePage={this.state.activePage}
									itemsCountPerPage={this.state.perPage}
									totalItemsCount={this.state.totalItemsCount}
									pageRangeDisplayed={this.state.pageRangeDisplayed}
									onChange={this.handlePageChange}
									innerClass={'pagination justify-content-end'}
									itemClass={'page-item'}
									linkClass={'btn btn-outline-primary btn-sm mr-1'}
									prevPageText={'Prev'}
									nextPageText={'Next'}
									firstPageText={'First'}
									lastPageText={'Last'}
									activeLinkClass={'page-link btn-outline-primary btn btn-sm mr-1'}
								/>
							</div>
						</div>
					</div>
					<div className='table-responsive-sm mr-1 ml-1'>
						<table className='table table-sm table-bordered datatable-grid'>
							<thead className='bg-primary text-white text-nowrap'>
								{this.getTableHeader()}
							</thead>
							<tbody>
								{this.getTableBody()}
							</tbody>
						</table>
					</div>
					<div className='datatable-pagination'>
						<div className="d-flex justify-content-between bd-highlight mb-3">
							<div className="bd-highlight input-group ml-1" style={{width: '155px', height: '33px'}}>
								<label htmlFor='filterByStatus'>Per Page:&nbsp;</label>
								<select
									className='form-control form-control-sm'
									onChange={(e)=>this.onChangePerPage(e.target.value, e)}
									value={this.state.perPage}
								>
									<option value='10'>10</option>
									<option value='25'>25</option>
									<option value='50'>50</option>
									<option value='100'>100</option>
									<option value='500'>500</option>
									<option value='1000'>1000</option>
								</select>
							</div>
							<div className="bd-highlight input-group" style={{width: '185px', height: '33px'}}>
								<label htmlFor='filterByStatus'>Current Page:&nbsp;</label>
								<select
									className='form-control form-control-sm'
									value={this.state.activePage}
									onChange={(e)=> this.handlePageChange(parseInt(e.target.value))}
								>
									{Array.apply(null, {length}).map((e, i)=> <option key={i} value={i+1}>{i+1}</option>)}
								</select>
							</div>
							<div className="bd-highlight right-content" style={{height: '33px'}}>
								<Pagination
									activePage={this.state.activePage}
									itemsCountPerPage={this.state.perPage}
									totalItemsCount={this.state.totalItemsCount}
									pageRangeDisplayed={this.state.pageRangeDisplayed}
									onChange={this.handlePageChange}
									innerClass={'pagination justify-content-end'}
									itemClass={'page-item'}
									linkClass={'btn btn-outline-primary btn-sm mr-1'}
									prevPageText={'Prev'}
									nextPageText={'Next'}
									firstPageText={'First'}
									lastPageText={'Last'}
									activeLinkClass={'page-link btn-outline-primary btn btn-sm mr-1'}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(DataTableGrid)