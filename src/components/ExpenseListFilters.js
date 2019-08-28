import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';



export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }

    onSortChange = (e) => {
        console.log(e.target.value)
        if (e.target.value == 'date') {
            this.props.sortByDate();
        } else {
            this.props.sortByAmount()
        }
    }

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }

    render() {
        return (
            <div>
            <input type='text' value={this.props.filters.text} onChange={this.onTextChange} />
            <select 
            value={this.props.filters.value}
            onChange={this.onSortChange}>
                <option value='date'>Date</option>
                <option value='amount'>Amount</option>
            </select>
            <DateRangePicker 
                startDate={this.props.filters.startDate}
                startDateId="your_unique_start_date_id"
                endDate={this.props.filters.endDate}
                endDateId="your_unique_end_date_id"
                onDatesChange={this.onDatesChange}
                showClearDates={true}
                focusedInput={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={() => false}
            />
        </div>
        );
    }
}


const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);