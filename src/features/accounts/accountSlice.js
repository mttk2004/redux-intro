/**
 *  Project: redux-intro
 *  File: accountSlice.js
 *  Created: 9:44 SA, 16/08/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

const initialStateAccount = {
	balance    : 0,
	loan       : 0,
	loanPurpose: ''
};

export default function accountReducer(state = initialStateAccount, action) {
	switch (action.type) {
	case 'account/deposit':
		return { ...state, balance: state.balance + action.payload };
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
	default:
		console.log('Unknown action: ', action.type);
		return state;
	}
};

export const deposit = function (amount) {
	return { type: 'account/deposit', payload: amount };
};

export const withdraw = function (amount) {
	return { type: 'account/withdraw', payload: amount };
};

export const requestLoan = function (amount) {
	return { type: 'account/requestLoan', payload: amount };
};

export const payLoan = function () {
	return { type: 'account/payLoan' };
};
