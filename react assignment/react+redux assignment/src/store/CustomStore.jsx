import{legacy_createStore as createstore,applyMiddleware} from 'redux';
import { composeWithDevTools  } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducer/index.jsx'
let initialState={}
let middleare=[thunk]
let store =createstore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleare))
)
export default store