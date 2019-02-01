import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { HeaderPage, FooterPage, ContentPage } from './../pages/default_pages'

@inject('store')
@observer
class DefaultLayout extends Component {
	render() {
		return (
			<div className={'main-content'}>
				<HeaderPage />
				<ContentPage />
				<FooterPage />
			</div>
		);
	}
}

export default withRouter(DefaultLayout)