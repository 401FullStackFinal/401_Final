import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import mainReducer from "../reducer/main-reducer";
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(mainReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;