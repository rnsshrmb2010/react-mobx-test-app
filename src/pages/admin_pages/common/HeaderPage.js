import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import {
	Navbar,
	NavbarBrand,
	NavbarNav,
	NavbarToggler,
	Collapse,
	NavItem,
	NavLink,
} from 'mdbreact';

@inject('store')
@observer
class HeaderPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collapseID: ""
		};
	}

	toggleCollapse = collapseID => () =>
	this.setState(prevState => ({
		collapseID: prevState.collapseID !== collapseID ? collapseID : ""
	}));

	closeCollapse = collapseID => () =>
	this.state.collapseID === collapseID && this.setState({ collapseID: "" });

	render() {
		return (
			<Navbar color="indigo" dark expand="md" fixed="top" scrolling>
				<NavbarBrand href="/dashboard">Brand Name</NavbarBrand>
				<NavbarToggler
				  onClick={this.toggleCollapse("mainNavbarCollapse")}
				/>
				<Collapse id="mainNavbarCollapse" isOpen={this.state.collapseID} navbar>
				  <NavbarNav right>
						<NavItem active>
						  <NavLink to="/dashboard" onClick={this.closeCollapse("mainNavbarCollapse")}>My Profile</NavLink>
						</NavItem>
				  </NavbarNav>
				</Collapse>
		  </Navbar>
		)
	}
}

export default withRouter(HeaderPage)