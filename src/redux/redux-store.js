import {applyMiddleware, combineReducers, createStore} from "redux";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    usersBlock: usersReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;