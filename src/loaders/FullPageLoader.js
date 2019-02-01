import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class FullPageLoader extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="loader-overlay">
				<div className="loader-content">
					<div className="loader-index">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			</div>
		)
	}
}
export default withRouter(FullPageLoader)