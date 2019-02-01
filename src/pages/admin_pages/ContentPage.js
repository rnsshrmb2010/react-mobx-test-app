import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { HomePage, UiElementsPage, UserMgntPage } from './../../pages/admin_pages'

@inject('store')
@observer
class ContentPage extends Component {
	render() {
		let page = this.props.location.pathname;
		let pageContent = '';
		switch (page) {
			case '/dashboard':
				pageContent = <HomePage />;
				break;
			case '/ui-elements':
				pageContent = <UiElementsPage />;
				break;
			case '/user-management':
				pageContent = <UserMgntPage />;
				break;
			default:
				pageContent = '';
				break; 
		}

		return (
			<main>
				{pageContent}
			</main>
		)
	}
}

export default withRouter(ContentPage)