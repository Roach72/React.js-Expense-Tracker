import React, {useContext} from 'react';
import { GlobalContext } from '../contaxt/GlobalState';

import Transaction from './Transaction';

const TransactionList = () => {

    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => ( <Transaction kay={transaction.id} transaction={transaction}/> ))}
            </ul>
        </>
    )
}

export default TransactionList
