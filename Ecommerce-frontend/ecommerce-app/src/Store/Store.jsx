import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartReducer from "./Addcart";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
import {persistStore} from "redux-persist";
import {FLUSH, REHYDRATE ,PAUSE ,PERSIST , PURGE , REGISTER } from "redux-persist"
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key:"root",
  storage,

};

const reducer = combineReducers({
  cart:cartReducer,
});

const persistedReducer = persistReducer(persistConfig,reducer);

const store = configureStore({
  reducer:persistedReducer,  
  middleware: (getDefaultMiddleware)=>
  getDefaultMiddleware({
    serializableCheck:{
      ignoreActions:[FLUSH, REHYDRATE ,PAUSE ,PERSIST , PURGE , REGISTER]
    },
  })
})
 export  const persistor = persistStore(store); 
export default store;