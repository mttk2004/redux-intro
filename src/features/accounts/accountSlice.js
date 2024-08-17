/**
 *  Project: redux-intro
 *  File: accountSlice.js
 *  Created: 9:44 SA, 16/08/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
	balance    : 0,
	loan       : 0,
	loanPurpose: '',
	isLoading  : false
};

const accountSlice = createSlice({
																	 name    : 'account', initialState,
																	 reducers: {
																		 deposit(state, action) {
																		  state.balance += action.payload;
																		  state.isLoading = false;
																		 },
																		 withdraw(state, action) {
																			 if (state.balance >= action.payload) state.balance
																					 -= action.payload;
																		 },
																		 requestLoan: {
																			 prepare(loan, loanPurpose) {
																				 return {
																					 payload: {
																						 loan, loanPurpose
																					 }
																				 };
																			 },
																			 
																			 reducer(state, action) {
																				 if (state.loan > 0) return;
																				 
																				 state.loan = action.payload.loan;
																				 state.loanPurpose = action.payload.loanPurpose;
																				 state.balance += action.payload.loan;
																			 }
																		 },
																		 payLoan(state) {
																			 state.balance -= state.loan;
																			 state.loan = 0;
																			 state.loanPurpose = '';
																		 },
																		 convertingCurrency(state) {
																			 state.isLoading = true;
																		 }
																	 }
																 });

export const { withdraw, requestLoan, payLoan } = accountSlice.actions;

export const deposit = function (amount, currency) {
	if (currency === 'USD') return { type: 'account/deposit', payload: amount };
	
	return async function (dispatch, getState) {
		dispatch({ type: 'account/convertingCurrency' });
		
		const res = await fetch(
				`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`);
		const data = await res.json();
		const converted = data.rates.USD;
		
		dispatch({ type: 'account/deposit', payload: converted });
	};
};

export default accountSlice.reducer;


/*
 export default function accountReducer(state = initialState, action) {
 switch (action.type) {
 case 'account/deposit':
 return { ...state, balance: state.balance + action.payload, isLoading: false };
 case 'account/withdraw':
 return {
 ...state,
 balance: state.balance >= action.payload ? state.balance - action.payload : state.balance
 };
 case 'account/requestLoan':
 if (state.loan > 0) return state;
 return { ...state, balance: state.balance + action.payload.loan, ...action.payload };
 case 'account/payLoan':
 return { ...state, loan: 0, loanPurpose: '', balance: state.balance - state.loan };
 case 'account/convertingCurrency':
 return {...state, isLoading: true }
 default:
 console.log('Unknown action: ', action.type);
 return state;
 }
 };
 
 export const deposit = function (amount, currency) {
 if (currency === 'USD') return { type: 'account/deposit', payload: amount };
 
 return async function (dispatch, getState) {
 dispatch({ type: 'account/convertingCurrency' });
 
 const res = await fetch(
 `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`);
 const data = await res.json();
 const converted = data.rates.USD;
 
 dispatch({ type: 'account/deposit', payload: converted });
 };
 };
 
 export const withdraw = function (amount) {
 return { type: 'account/withdraw', payload: amount };
 };
 
 export const requestLoan = function (amount, purpose) {
 return { type: 'account/requestLoan', payload: { loan: amount, loanPurpose: purpose } };
 };
 
 export const payLoan = function () {
 return { type: 'account/payLoan' };
 };
 */
