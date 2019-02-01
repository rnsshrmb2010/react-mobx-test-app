import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Container, Footer } from "mdbreact";

@inject('store')
@observer
class FooterPage extends Component {
	render() {
		return (
			<Footer color="blue" className="font-small mt-4">
				<div className="footer-copyright text-center py-3">
					<Container fluid>
						&copy; {new Date().getFullYear()} Copyright:{" "}
						<a href="/">Siddalinga.com </a>
					</Container>
				</div>
			</Footer>
		)
	}
}

export default withRouter(FooterPage);