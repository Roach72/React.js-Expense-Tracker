import './App.css';
import AddTransction from './components/AddTransction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';

import { GlobalProvider } from './contaxt/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransction />
      </div>
    </GlobalProvider>
  );
}

export default App;
