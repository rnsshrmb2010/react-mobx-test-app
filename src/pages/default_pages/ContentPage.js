import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { HomePage, LoginPage } from './../../pages/default_pages'

@inject('store')
@observer
class ContentPage extends Component {
	render() {
		let page = this.props.location.pathname;
		let pageContent = '';
		switch (page) {
			case '/':
				pageContent = <HomePage />;
				break;
			case '/login':
				pageContent = <LoginPage />;
				break;
			default:
				pageContent = '';
				break; 
		}

		return (
			<main style={{ marginTop: "4rem" }}>
				{pageContent}
			</main>
		)
	}
}

export default withRouter(ContentPage)