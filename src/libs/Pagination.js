import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class Pagination extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div className='pagination'>
				<nav aria-label='Page navigation example'>
				<ul className='pagination justify-content-end'>
					<li className='page-item disabled'>
						<a className='page-link' tabIndex='-1'>Previous</a>
					</li>
					<li className='page-item'><a className='page-link'>1</a></li>
					<li className='page-item'><a className='page-link'>2</a></li>
					<li className='page-item'><a className='page-link'>3</a></li>
					<li className='page-item'>
						<a className='page-link'>Next</a>
					</li>
				</ul>
			</nav>
		</div>
		);
	}
}

export default withRouter(Pagination)