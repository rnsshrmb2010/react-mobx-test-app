import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { HeaderPage, FooterPage, ContentPage } from './../pages/admin_pages'
import './DefaultLayout.scss';

@inject('store')
@observer
class AdminLayout extends Component {
	constructor(props) {
    super(props);
    this.state ={
      isLeftOpen: false,
      isRightOpen: false
    };
  }
	handleToggleClickA = () => {
    this.setState({
      isLeftOpen: !this.state.isLeftOpen
    })
  }
  handleToggleClickB = () => {
    this.setState({
      isRightOpen: !this.state.isRightOpen
    })
  }
	render() {
		return (
			<div>
        <HeaderPage />
        <ContentPage />
        <FooterPage />
      </div>
		);
	}
}

export default withRouter(AdminLayout)