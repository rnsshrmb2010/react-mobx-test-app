import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import {
	Col,
	Row
} from "mdbreact";


import {
	CardBody,
	Card,
	CardTitle,
	Button
} from "mdbreact";

@inject('store')
@observer
class UserMgntPage extends Component {

	render() {
		return (
			<div className='container-fluid'>
				<Row>
					<Col sm="12" md="6" lg="4" xl="3" className="mb-3 mt-3">
						<Card border="primary text-center">
							<CardBody>
								<CardTitle>UI Elements</CardTitle>
								<Button size="sm" color="primary">open module</Button>
							</CardBody>
						</Card>
					</Col>
					<Col sm="12" md="6" lg="4" xl="3" className="mb-3 mt-3">
						<Card border="primary text-center">
							<CardBody>
								<CardTitle>UI Elements</CardTitle>
								<Button size="sm" color="primary">open module</Button>
							</CardBody>
						</Card>
					</Col>
					<Col sm="12" md="6" lg="4" xl="3" className="mb-3 mt-3">
						<Card border="primary text-center">
							<CardBody>
								<CardTitle>UI Elements</CardTitle>
								<Button size="sm" color="primary">open module</Button>
							</CardBody>
						</Card>
					</Col>
					<Col sm="12" md="6" lg="4" xl="3" className="mb-3 mt-3">
						<Card border="primary text-center">
							<CardBody>
								<CardTitle>UI Elements</CardTitle>
								<Button size="sm" color="primary">open module</Button>
							</CardBody>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col md="12">
						<Col md="4">
							Left Text
						</Col>
						<Col md="8">
							Right Text
						</Col>
					</Col>
					<Col className="table-1 table-responsive-sm table-responsive-md table-responsive-lg table-responsive-lx table-grid">
						<table className="table">
						  <thead>
						    <tr>
						      <th scope="col">#</th>
						      <th scope="col">First</th>
						      <th scope="col">Last</th>
						      <th scope="col">Handle</th>
						    </tr>
						  </thead>
						  <tbody>
						    <tr><td>1</td><td>Mark</td><td>Otto</td><td>@mdo</td></tr>
						    <tr><td>1</td><td>Mark</td><td>Otto</td><td>@mdo</td></tr>
						    <tr><td>1</td><td>Mark</td><td>Otto</td><td>@mdo</td></tr>
						    <tr><td>1</td><td>Mark</td><td>Otto</td><td>@mdo</td></tr>
						    <tr><td>1</td><td>Mark</td><td>Otto</td><td>@mdo</td></tr>
						    <tr><td>1</td><td>Mark</td><td>Otto</td><td>@mdo</td></tr>
						    <tr><td>1</td><td>Mark</td><td>Otto</td><td>@mdo</td></tr>
						    <tr><td>1</td><td>Mark</td><td>Otto</td><td>@mdo</td></tr>
						    <tr><td>1</td><td>Mark</td><td>Otto</td><td>@mdo</td></tr>
						    <tr><td>1</td><td>Mark</td><td>Otto</td><td>@mdo</td></tr>
						    <tr><td>1</td><td>Mark</td><td>Otto</td><td>@mdo</td></tr>
						    <tr><td>1</td><td>Mark</td><td>Otto</td><td>@mdo</td></tr>
						    <tr><td>1</td><td>Mark</td><td>Otto</td><td>@mdo</td></tr>
						    <tr><td>1</td><td>Mark</td><td>Otto</td><td>@mdo</td></tr>
						    <tr><td>1</td><td>Mark</td><td>Otto</td><td>@mdo</td></tr>
						    <tr><td>1</td><td>Mark</td><td>Otto</td><td>@mdo</td></tr>
						    <tr><td>1</td><td>Mark</td><td>Otto</td><td>@mdo</td></tr>
						    <tr><td>1</td><td>Mark</td><td>Otto</td><td>@mdo</td></tr>
						    <tr><td>1</td><td>Mark</td><td>Otto</td><td>@mdo</td></tr>
						    <tr><td>1</td><td>Mark</td><td>Otto</td><td>@mdo</td></tr>
						    <tr><td>1</td><td>Mark</td><td>Otto</td><td>@mdo</td></tr>
						    <tr><td>1</td><td>Mark</td><td>Otto</td><td>@mdo</td></tr>
						    <tr><td>1</td><td>Mark</td><td>Otto</td><td>@mdo</td></tr>
						    <tr><td>1</td><td>Mark</td><td>Otto</td><td>@mdo</td></tr>
						    <tr><td>1</td><td>Mark</td><td>Otto</td><td>@mdo</td></tr>
						    <tr><td>1</td><td>Mark</td><td>Otto</td><td>@mdo</td></tr>
						    <tr><td>1</td><td>Mark</td><td>Otto</td><td>@mdo</td></tr>
						    <tr><td>1</td><td>Mark</td><td>Otto</td><td>@mdo</td></tr>
						  </tbody>
						</table>
					</Col>
				</Row>
			</div>
		)
	}
}

export default withRouter(UserMgntPage)