import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class ActionProcessingLoder extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='action-processing'>
			  Processing ...
			</div>
		)
	}
}
export default withRouter(ActionProcessingLoder)