export default (state, action) =>{
    switch(action.type){
        //TO DELETE_TRANSACTION
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== 
                action.payload )
            }
            //TO ADD_TRANSACTION
            case 'ADD_TRANSACTION':
                return{
                    ...state,
                    transactions: [action.payload, ...state.transactions]
                }
        default: 
        return state;
    }
}
