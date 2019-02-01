import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class LoaderComponent extends Component {
	render() {
		return (
			<div>
				<h3>Fetching Results</h3>
			</div>
		);
	}
}

export default withRouter(LoaderComponent)