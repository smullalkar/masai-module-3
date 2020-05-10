import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import AuthReducer from "./Authreducers";
import Reducer from './Reducer'

const rootReducer = combineReducers({app: Reducer, auth: AuthReducer})

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    rootReducer, 
    createComposer(
        applyMiddleware(
            thunk,
        )
    )
)