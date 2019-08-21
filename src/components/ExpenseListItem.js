import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => {
    return (
        <div>
        <p>Description: {description} amount: {amount} - {createdAt}</p>
        <button onClick={() => {
            dispatch(removeExpense({ id }));
        }}>Remove</button>
        </div>

    );

}


export default connect()(ExpenseListItem);