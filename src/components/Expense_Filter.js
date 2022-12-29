import './Expense_Filter.css'

const Expense_Filter = (props) => {
      
    const filterChangeHandler  = (event) =>{
            props.onChangeFilter(event.target.value);
    }
            return (
                <div className='expenses-filter'>
                    <div className='expenses-filter__control'>
                    <lable>Filter by Year</lable>
                    <select value={props.selected} onChange={filterChangeHandler}>
                        <option value='2024'>2024</option>
                        <option value='2023'>2023</option>
                        <option value='2022'>2022</option>
                        <option value='2021'>2021</option>
                    </select>
                    </div>
                </div>
            )
};

export default Expense_Filter;