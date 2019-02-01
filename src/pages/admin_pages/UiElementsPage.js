import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import {
	Container,
	Col,
	Row
} from "mdbreact";

import { Navbar, NavbarNav, NavItem, NavLink } from "mdbreact";

@inject('store')
@observer
class FormsPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			menu: [
				{ id:1, name: 'Auto Complete', to: '#', class: 'pt-0 pm-0'},
				{ id:2, name: 'Checkbox', to: '#', class: 'pt-0 pm-0'},
				{ id:3, name: 'Date Picker', to: '#', class: 'pt-0 pm-0'},
				{ id:1, name: 'Inputs', to: '#', class: 'pt-0 pm-0'},
				{ id:4, name: 'Radio Button', to: '#', class: 'pt-0 pm-0'},
				{ id:4, name: 'Search', to: '#', class: 'pt-0 pm-0'},
				{ id:4, name: 'Select', to: '#', class: 'pt-0 pm-0'},
				{ id:4, name: 'Switch', to: '#', class: 'pt-0 pm-0'},
				{ id:4, name: 'Timer Picker', to: '#', class: 'pt-0 pm-0'},
				{ id:4, name: 'Validation', to: '#', class: 'pt-0 pm-0'},
			]
		};
	}

	render() {
		let { menu } = this.state;
		let menu_list = menu.map(e => {
			return <NavItem key={e.id}><NavLink className={e.class} to={e.to}>{e.name}</NavLink></NavItem>
		})
		return (
			<Container>
				<Row className="pt-3 d-sm-none d-md-none d-lg-block d-xl-block"></Row>
				<Row>
					<Col className="mb-3 mt-3 p-0 sub-nav-menu">
						<Navbar color="indigo" dark expand="md">
							<NavbarNav center={true.toString()}>
								{menu_list}
							</NavbarNav>
						</Navbar>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default withRouter(FormsPage)