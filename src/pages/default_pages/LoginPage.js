import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import {
	EdgeHeader,
	FreeBird,
	Col,
	Row,
	CardBody,
	Input,
	Button,
	FormInline,
} from "mdbreact";

@inject('store')
@observer
class LoginPage extends Component {

	authenticateUser(event) {
		this.props.history.push('dashboard');
		event.preventDefault();
	}

	render() {
		return (
			<main style={{ marginTop: "4rem" }}>
				<EdgeHeader color="indigo darken-3" />
				<FreeBird>
					<Row>
						<Col md="12" className="mx-auto float-none white z-depth-1 py-2 px-2">
							<CardBody>
								<Col md="12">
									<Col md="12">
									<h2 className="h2 text-center mb-4">Sign in</h2>
									<div className="alert alert-danger" role="alert">
	                  A simple danger alert—check it out!
	                </div>
	                </Col>
									<FormInline onSubmit={(e)=>this.authenticateUser(e)}>
										<Col md="5">
											<Input
												label="Please type you email id here"
												icon="envelope"
												size="sm"
												type="email"
											/>
										</Col>
										<Col md="5">
											<Input
												label="Type your password"
												icon="lock"
												type="password"
												size="sm"
											/>
										</Col>
										<Col md="2">
											<Button type="submit" size="sm" color="purple" className="w-100">Login</Button>
										</Col>
									</FormInline>
								</Col>
							</CardBody>
						</Col>
					</Row>
				</FreeBird>
			</main>
		)
	}
}

export default withRouter(LoginPage)