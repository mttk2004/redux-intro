/**
 *  Project: redux-intro
 *  File: storeV1.js
 *  Created: 9:21 CH, 15/08/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import { applyMiddleware, combineReducers, createStore } from 'redux';
import customerReducer
																												 from './features/customers/customerSlice.js';
import accountReducer                                    from './features/accounts/accountSlice.js';
import { thunk }                                         from 'redux-thunk';
import { composeWithDevTools }                           from '@redux-devtools/extension';


const rootReducer = combineReducers({
																			account : accountReducer,
																			customer: customerReducer
																		});

const storeV1 = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk
)));

export default storeV1;
