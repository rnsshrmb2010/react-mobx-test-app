import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import {
	ItemListComponent,
	SearchComponent,
	LoaderComponent,
	PageLoaderComponent
} from './../test-components';

@inject('store')
@observer
class DefaultLayout extends Component {

	componentWillMount() {
		this.props.store.preLoadData();
	}

	render() {
		let { actionType } = this.props.store;
		if(actionType === 'pageLoading') {
			return(
				<PageLoaderComponent />
			)
		} else if(actionType === 'searchingData') {
			return (
				<div className={'main-content mt-5'}>
					<SearchComponent />
					<br />
					<LoaderComponent />
				</div>
			)
		} else {
			return (
				<div className={'main-content mt-5'}>
					<SearchComponent />
					<br />
					<ItemListComponent />
				</div>
			);
		}
	}
}

export default withRouter(DefaultLayout)