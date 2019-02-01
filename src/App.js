import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { DefaultLayout, AdminLayout } from './views'
import { store } from './stores';
import './App.scss'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={DefaultLayout} />
            <Route exact path='/login' component={DefaultLayout} />
            <Route exact path='/dashboard' component={AdminLayout} />
            <Route exact path='/ui-elements' component={AdminLayout} />
            <Route exact path='/user-management' component={AdminLayout} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
