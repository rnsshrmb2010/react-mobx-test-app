import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { Footer } from 'mdbreact';

@inject('store')
@observer
class Footer extends Component {
	constructor(props) {
		super(props);
  }

  render() {
  	return (
  		<Footer color="indigo">
				<p className="footer-copyright mb-0 py-3 text-center">
				  &copy; {new Date().getFullYear()} Copyright:{" "}
				  <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
				</p>
		  </Footer>
  	)
  }
}

export default withRouter(Footer)