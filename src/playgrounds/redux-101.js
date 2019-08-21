import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = ({ 
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
} = {}) => ({ 
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE': 
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            })
        default: {
            return state
        };
    }
}

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const fitersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER': {
            return {
                ...state,
                text: action.text
            }
        }
        case 'SORT_BY_AMOUNT': {
            return {
                ...state,
                sortBy: 'amount'
            }
        }
        case 'SORT_BY_DATE': {
            return {
                ...state,
                sortBy: 'date'
            }
        }
        case 'SET_START_DATE': {
            return {
                ...state,
                startDate: action.startDate
            }
        }
        case 'SET_END_DATE': {
            return {
                ...state,
                endDate: action.endDate
            }
        }
        default: {
            return state
        };
    }
}

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else {
            return a.amount < b.amount ? 1 : -1;
        }
    })
}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: fitersReducer
}));

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 400, createdAt: -21000}));
const expenseTwo = store.dispatch(addExpense({ description: 'Kent', amount: 500, createdAt: -1000}));

// store.dispatch(removeExpense({ id: expenseOne.expense.id}))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 400 }));

// store.dispatch(setTextFilter('ent'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// // store.dispatch(setStartDate());
// // store.dispatch(setStartDate(125));
// store.dispatch(setEndDate(999));

const demoState = {
    expenses: [
        {
            id: 'as;ldkfjwoefji',
            description: 'January Rent',
            note: 'This is final rent',
            amount: 54500,
            createdAt: 0
        }
    ],
    filters: {
        text: 'Kent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}
































// import { createStore } from 'redux';

// const incrementCount = ({ incrementBy = 1 } = {}) => ({
//     type: 'INCREMENT',
//     incrementBy
// });

// const dicrementCount = ({ dicrementBy = 1 } = {}) => ({
//     type: 'DICREMENT',
//     dicrementBy
// });

// const resetCount = () => ({
//     type: 'RESET'
// });

// const setCount = ({ count = 1} = {}) => ({
//     type: 'SET',
//     count
// });

// const store = createStore((state = { count: 0}, action) => {
//     switch (action.type) {
//         case 'INCREMENT' :
//            return {
//                 count: state.count + action.incrementBy
//             };
//         case 'DICREMENT' :
//             return {
//                 count: state.count - action.dicrementBy
//             };
//         case 'SET' :
//             return {
//                 count: action.count
//             };
//         case 'RESET' :
//             return {
//                 count: 0
//             };
//         default: 
//             return state;
//     }
// })

// const unsubscribe = store.subscribe(() => {
//    console.log(store.getState()); 
// })




// store.dispatch(incrementCount({ incrementBy: 5 }));
// store.dispatch(incrementCount());

// store.dispatch(resetCount())
// // unsubscribe();
// store.dispatch(dicrementCount({ dicrementBy: 10 }));
// store.dispatch(dicrementCount());


// store.dispatch(setCount({count: 101}))