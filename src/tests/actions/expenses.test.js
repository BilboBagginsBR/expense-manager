import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('shoud setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test('shoud setup edit expense action object', () => {
    const action = editExpense('123abc', {note: '123abc'} );
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: '123abc'
        }
    })
});

test('shoud setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last months rent'
    };

    const actions = addExpense(expenseData);
    expect(actions).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('should setup add expese action object with default values', () => {
    const actions = addExpense();
    expect(actions).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }

    })
});