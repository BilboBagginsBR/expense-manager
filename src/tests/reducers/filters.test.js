import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter value', () => {
    const state = filtersReducer(undefined, { type: '@@INIT '});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should sort by amount', () => {

    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount')
});

test('should sort by date', () => {
    const cunrrentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = { type: 'SORT_BY_DATE'};
    const state = filtersReducer(cunrrentState, action);
    expect(state.sortBy).toBe('date')
});

test('should sort by textFilter', () => {
    const text = 'This filter';
    const action = { type: 'SET_TEXT_FILTER', text};
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text)
});

test('should sort by startDate', () => {
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE',
        startDate
    }
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toBe(startDate);
});

test('should sort by endDate', () => {
    const endDate = moment();
    const action = {
        type: 'SET_END_DATE',
        endDate
    }
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toBe(endDate);
});

