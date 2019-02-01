import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import {
	Container,
	Col,
	Row,
	CardBody,
	Card,
	CardTitle,
	Button
} from "mdbreact";

@inject('store')
@observer
class HomePage extends Component {
	render() {
		return (
			<Container>
				<Row className="pt-3 d-sm-none d-md-none d-lg-block d-xl-block"></Row>
				<Row>
					<Col sm="12" md="6" lg="4" xl="3" className="mb-3 mt-3">
						<Card border="primary text-center">
							<CardBody>
								<CardTitle>UI Elements</CardTitle>
								<Button
									size="sm"
									color="primary"
									onClick={(e)=>this.props.history.push('ui-elements')}
								>
									open module
								</Button>
							</CardBody>
						</Card>
					</Col>
					<Col sm="12" md="6" lg="4" xl="3" className="mb-3 mt-3">
						<Card border="primary text-center">
							<CardBody>
								<CardTitle>User Management</CardTitle>
								<Button
									size="sm"
									color="primary"
									onClick={(e)=>this.props.history.push('user-management')}
								>
									open module
								</Button>
							</CardBody>
						</Card>
					</Col>
					<Col sm="12" md="6" lg="4" xl="3" className="mb-3 mt-3">
						<Card border="primary text-center">
							<CardBody>
								<CardTitle>Testing Module</CardTitle>
								<Button size="sm" color="primary">open module</Button>
							</CardBody>
						</Card>
					</Col>
					<Col sm="12" md="6" lg="4" xl="3" className="mb-3 mt-3">
						<Card border="primary text-center">
							<CardBody>
								<CardTitle>Testing Module</CardTitle>
								<Button size="sm" color="primary">open module</Button>
							</CardBody>
						</Card>
					</Col>
					<Col sm="12" md="6" lg="4" xl="3" className="mb-3 mt-3">
						<Card border="primary text-center">
							<CardBody>
								<CardTitle>Testing Module</CardTitle>
								<Button size="sm" color="primary">open module</Button>
							</CardBody>
						</Card>
					</Col>
					<Col sm="12" md="6" lg="4" xl="3" className="mb-3 mt-3">
						<Card border="primary text-center">
							<CardBody>
								<CardTitle>Testing Module</CardTitle>
								<Button size="sm" color="primary">open module</Button>
							</CardBody>
						</Card>
					</Col>
					<Col sm="12" md="6" lg="4" xl="3" className="mb-3 mt-3">
						<Card border="primary text-center">
							<CardBody>
								<CardTitle>Testing Module</CardTitle>
								<Button size="sm" color="primary">open module</Button>
							</CardBody>
						</Card>
					</Col>
					<Col sm="12" md="6" lg="4" xl="3" className="mb-3 mt-3">
						<Card border="primary text-center">
							<CardBody>
								<CardTitle>Testing Module</CardTitle>
								<Button size="sm" color="primary">open module</Button>
							</CardBody>
						</Card>
					</Col>
					<Col sm="12" md="6" lg="4" xl="3" className="mb-3 mt-3">
						<Card border="primary text-center">
							<CardBody>
								<CardTitle>Testing Module</CardTitle>
								<Button size="sm" color="primary">open module</Button>
							</CardBody>
						</Card>
					</Col>
					<Col sm="12" md="6" lg="4" xl="3" className="mb-3 mt-3">
						<Card border="primary text-center">
							<CardBody>
								<CardTitle>Testing Module</CardTitle>
								<Button size="sm" color="primary">open module</Button>
							</CardBody>
						</Card>
					</Col>
					<Col sm="12" md="6" lg="4" xl="3" className="mb-3 mt-3">
						<Card border="primary text-center">
							<CardBody>
								<CardTitle>Testing Module</CardTitle>
								<Button size="sm" color="primary">open module</Button>
							</CardBody>
						</Card>
					</Col>
					<Col sm="12" md="6" lg="4" xl="3" className="mb-3 mt-3">
						<Card border="primary text-center">
							<CardBody>
								<CardTitle>Testing Module</CardTitle>
								<Button size="sm" color="primary">open module</Button>
							</CardBody>
						</Card>
					</Col>
					<Col sm="12" md="6" lg="4" xl="3" className="mb-3 mt-3">
						<Card border="primary text-center">
							<CardBody>
								<CardTitle>Testing Module</CardTitle>
								<Button size="sm" color="primary">open module</Button>
							</CardBody>
						</Card>
					</Col>
					<Col sm="12" md="6" lg="4" xl="3" className="mb-3 mt-3">
						<Card border="primary text-center">
							<CardBody>
								<CardTitle>Testing Module</CardTitle>
								<Button size="sm" color="primary">open module</Button>
							</CardBody>
						</Card>
					</Col>
					<Col sm="12" md="6" lg="4" xl="3" className="mb-3 mt-3">
						<Card border="primary text-center">
							<CardBody>
								<CardTitle>Testing Module</CardTitle>
								<Button size="sm" color="primary">open module</Button>
							</CardBody>
						</Card>
					</Col>
					<Col sm="12" md="6" lg="4" xl="3" className="mb-3 mt-3">
						<Card border="primary text-center">
							<CardBody>
								<CardTitle>Testing Module</CardTitle>
								<Button size="sm" color="primary">open module</Button>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default withRouter(HomePage)