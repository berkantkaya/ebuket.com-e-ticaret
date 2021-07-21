import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk"
import { cardReducer } from "./reducers.js/cardReducer"
import { modalReducer } from "./reducers.js/modalReducer"
import { searchReducer } from "./reducers.js/searchReducer"


const initialState={

}

const reducer=combineReducers({
 termOut: searchReducer,
 card:cardReducer,
 modal:modalReducer
})
const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store=createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)))

export default store