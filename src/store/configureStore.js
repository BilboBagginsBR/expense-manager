import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import fitersReducer from '../reducers/filters';



export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: fitersReducer
        }));
    return store;
}