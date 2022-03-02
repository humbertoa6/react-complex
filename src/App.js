import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    { id: 1, title: 'Car insurance', amount: 653.2, date: new Date(2022, 2, 22) },
    { id: 2, title: 'Car insurance', amount: 986.9, date: new Date(2021, 8, 1) },
    { id: 3, title: 'Car insurance', amount: 525.5, date: new Date(2022, 2, 1) },
    { id: 4, title: 'Car insurance', amount: 125.0, date: new Date(2022, 1, 20) }
  ]

  return (
    <div>
      <NewExpense/>
      <Expenses items={expenses} />
    </div>
  )
}

export default App;
