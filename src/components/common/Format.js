import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class Format extends Component {
	constructor(props) {
		super(props);
  }

  render() {
  	return (
  		<div>Format</div>
  	)
  }
}

export default withRouter(Format)