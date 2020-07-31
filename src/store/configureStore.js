import {createStore,applyMiddleware} from 'redux'
import {persistCombineReducers,persistReducer,persistStore} from "redux-persist"
import storage from "redux-persist/lib/storage"
import {reducer as toastr} from "react-redux-toastr"
import thunk from "redux-thunk"
import {routerMiddleware} from "react-router-redux"
import items from "../reducer/index"

const rootPersistConfig = {
    key: "root",
    storage,
    list: ["items"]
}
const rootReducer = persistCombineReducers(rootPersistConfig,{
    items:persistReducer(
        {
        key: "items",
        storage,
        list : ["fetching","more"] 
        },
        items
    ), 
    toastr,
});

const store = createStore(rootReducer,applyMiddleware(thunk,routerMiddleware()))
persistStore(store)

export default store