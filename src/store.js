/**
 *  Project: redux-intro
 *  File: store.js
 *  Created: 9:21 CH, 15/08/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import { combineReducers, createStore } from 'redux';
import customerReducer                  from './features/customers/customerSlice.js';
import accountReducer                   from './features/accounts/accountSlice.js';


const rootReducer = combineReducers({
																			account : accountReducer,
																			customer: customerReducer
																		});

const store = createStore(rootReducer);

export default store;
