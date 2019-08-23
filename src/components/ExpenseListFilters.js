import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';



class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }

    render() {
        return (
            <div>
            <input type='text' value={this.props.filters.text} onChange={(e) => {
                this.props.dispatch(setTextFilter(e.target.value))
            }} />
            <select 
            value={this.props.filters.value}
            onChange={(e) => {
                console.log(e.target.value)
                const choise = e.target.value == 'date' ? sortByDate : sortByAmount;
                this.props.dispatch(choise())
    
            }}>
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


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);