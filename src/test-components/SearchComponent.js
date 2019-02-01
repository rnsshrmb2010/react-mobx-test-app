import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class SearchComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			search: ''
		}
	}

	onSearchClick(event) {
		let { search } = this.state;
		this.props.store.searchItem(search);
		event.preventDefault();
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<form onSubmit={(e)=>this.onSearchClick(e)}>
						<input
							type="text"
							name="search"
							placeholder="Search Item"
							onChange={(e) => this.setState({search: e.target.value.toLowerCase()})}
						/>
						<input type="submit" value="Search Now" />
					</form>
				</div>
			</div>
		);
	}
}

export default withRouter(SearchComponent)