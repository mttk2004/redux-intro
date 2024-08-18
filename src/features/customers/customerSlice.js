/**
 *  Project: redux-intro
 *  File: customerSlice.js
 *  Created: 9:47 SA, 16/08/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
	fullName  : '',
	createAt  : '',
	nationalId: ''
};

const customerSlice = createSlice({
																		name    : 'customer',
																		initialState,
																		reducers: {
																			createCustomer: {
																				prepare(fullName, nationalId) {
																					return {
																						payload: {
																							fullName,
																							nationalId,
																							createAt: new Date().toISOString()
																						}
																					};
																				},
																				reducer(state, action) {
																					state.fullName = action.payload.fullName;
																					state.nationalId = action.payload.nationalId;
																					state.createAt = action.payload.createAt;
																				}
																			},
																			updateName(state, action) {
																				state.fullName = action.payload;
																			}
																		}
																	});


export const { createCustomer, updateName } = customerSlice.actions;

export default customerSlice.reducer;

/*
 export default function customerReducer(state = initialState, action) {
 switch (action.type) {
 case 'customer/createCustomer':
 return { ...state, ...action.payload };
 case 'customer/updateName':
 return { ...state, fullName: action.payload };
 default:
 console.log('Unknown action: ', action.type);
 return state;
 }
 };
 
 export const createCustomer = function (fullName, nationalId) {
 return {
 type   : 'customer/createCustomer',
 payload: { fullName, nationalId, createAt: new Date().toISOString() }
 };
 };
 
 export const updateName = function (fullName) {
 return {
 type: 'customer/updateName', payload: fullName
 };
 };
 */
