import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import reducer from './reducer'

export default createStore(reducer, composeWithDevTools(
  applyMiddleware(ReduxThunk)
))
