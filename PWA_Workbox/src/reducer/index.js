import counterReduser from "./counter"
import loggerReducer from "./isLogged"
import items from "./landing"
import { combineReducers }  from 'redux'

const allReducer = combineReducers({
    counter: counterReduser,
    logged: loggerReducer,
    items: items,
})

export default allReducer 