import { RouterState } from 'connected-react-router';
import { combineReducers } from 'redux';
import { HomePageReducer } from '../actions';



const rootReducer = combineReducers({
  HomePageReducer
})

export interface State {
  router: RouterState
}

export default rootReducer