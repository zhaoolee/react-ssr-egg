import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Routes from '../components/Routes.js';
import { Provider } from 'react-redux'
import { getClientStore } from '../store/index.js'

const store = getClientStore();
const App=()=>{
  return(<Provider store={store}>
      <BrowserRouter>
        <Switch>
          {Routes.map((route, route_index)=>{
            return <Route {...route}/>}
          )}
        </Switch>
      </BrowserRouter>
    </Provider>)}
ReactDom.hydrate(<App />, document.getElementById('root'));