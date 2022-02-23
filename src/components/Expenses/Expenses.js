import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = (props) => {
  const itemsList = props.items.map(item => ( 
    <ExpenseItem 
      title={item.title}
      amount={item.amount}
      date={item.date}
    />
  ));
  return(
    <Card className='expenses'>
      {itemsList}
    </Card>
  );
}

export default Expenses;