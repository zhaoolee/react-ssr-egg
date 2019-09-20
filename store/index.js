import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {reducer as ListReducer} from '../components/List/store/index.js';



const reducer = combineReducers({
  list: ListReducer
})


export const getServerStore = () =>{
  return createStore(reducer, applyMiddleware(thunk))
}

export const getClientStore = () => {
  const defaultState = window.context.state;
  return createStore(reducer, defaultState ,applyMiddleware(thunk))

} 