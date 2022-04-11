import { View } from 'react-native'
import ExpenseList from './ExpensesList'
import ExpenseSummary from './ExpenseSummary'

const DUMMY_EXPENSE = [
  {
    id: 'a1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2022-04-20'),
  },
  {
    id: 'a2',
    description: 'A pair of trousers',
    amount: 99.99,
    date: new Date('2022-04-10'),
  },
  {
    id: 'a3',
    description: 'A pair of pants',
    amount: 89.99,
    date: new Date('2022-04-5'),
  },
  {
    id: 'a4',
    description: 'A pair of books',
    amount: 22.99,
    date: new Date('2022-04-1'),
  },
]

function ExpensesOutput({ expensePeriod }) {
  return (
    <View>
      <ExpenseSummary periodName={expensePeriod} expenses={DUMMY_EXPENSE} />
      <ExpenseList expenses={DUMMY_EXPENSE} />
    </View>
  )
}

export default ExpensesOutput
