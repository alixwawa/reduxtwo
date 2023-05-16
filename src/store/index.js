import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth'

const store = configureStore({
	// multiple slices
	reducer: {
		counter: counterReducer,
		auth: authReducer,
	},
	// if you just had one slice
	// reducer: counterSlice.reducer,
});



export default store;
