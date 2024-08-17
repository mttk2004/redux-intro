import CreateCustomer    from './features/customers/CreateCustomer.jsx';
import Customer          from './features/customers/Customer.jsx';
import AccountOperations from './features/accounts/AccountOperations.jsx';
import BalanceDisplay    from './features/accounts/BalanceDisplay.jsx';
import './store-v1.js';
import { useSelector }   from 'react-redux';


function App() {
	const fullName = useSelector(store => store.customer.fullName);
	
	return (
			<div>
				<h1>🏦 The React-Redux Bank ⚛️</h1>
				{fullName === '' ? <CreateCustomer /> :
				 <>
					 <Customer />
					 <AccountOperations />
					 <BalanceDisplay />
				 </>}
			</div>
	);
}

export default App;
