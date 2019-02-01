import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class ItemListComponent extends Component {
	render() {
		let { filterData } = this.props.store;
		let itemList = (
				<tr><td colSpan="7" className="text-center">Sorry No Matches found</td></tr>
			)
		if(filterData.length > 0) {
			itemList = filterData.map(e => {
				return(
					<tr key={e._id}>
						<td>{e._id}</td>
						<td>{e.name}</td>
						<td>{e.gender}</td>
						<td>{e.company}</td>
						<td>{e.email}</td>
						<td>{e.phone}</td>
						<td>{e.address}</td>
					</tr>
				)
			});
		}
		return (
			<div className="container">
				<div className="row">
					<table className="table table-respondive table-bordered">
						<tbody>
							<tr>
								<th>ID</th>
								<th>Name</th>
								<th>Gender</th>
								<th>Company</th>
								<th>Email</th>
								<th>Phone Number</th>
								<th>Address</th>
							</tr>
						</tbody>
						<tbody>
							{itemList}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default withRouter(ItemListComponent)