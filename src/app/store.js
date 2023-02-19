import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import { categoryReducer } from "./reducers/categoryReducer"
import { hatsCatsReducer } from "./reducers/hatCatsReducer"

export const store = createStore(combineReducers({
    categories: categoryReducer,
    hats: hatsCatsReducer
}), {}, applyMiddleware(thunk))