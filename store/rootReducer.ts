import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "slices/auth.slice";
import { routingReducer } from "slices/routing.slice";

export const rootReducer = combineReducers({
	auth: authReducer,
	routing: routingReducer
});


export type RootState = ReturnType<typeof rootReducer>;
