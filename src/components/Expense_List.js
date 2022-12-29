import './Expense_List.css';
import Expense_Item from './Expense_Item';

const Expense_List = (props) => {
    if(props.expense.length === 0)
    return <h2 className='expenses-list__fallback'>No Expense to Display.</h2>

    return (
       <ul className='expenses-list'>
        {props.expense.map((expense) => (
            <Expense_Item
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
       </ul>
    );
};

export default Expense_List;

