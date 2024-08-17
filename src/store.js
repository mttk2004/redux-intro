/**
 *  Project: redux-intro
 *  File: storeV1.js
 *  Created: 9:21 CH, 15/08/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import { configureStore } from '@reduxjs/toolkit';

import accountReducer     from './features/accounts/accountSlice.js';
import customerReducer    from './features/customers/customerSlice.js';


const store = configureStore({
	reducer: {
		account: accountReducer,
		customer: customerReducer
	}
														 })

export default store;
