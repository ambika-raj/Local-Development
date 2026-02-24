import {configureStore} from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice"
//import appReducer from ""

export const store = configureStore({
    reducer:{
        app: appReducer,
    }
})
//redux store is the central state container  and we register reducer inside it