import { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { GlobalStyles } from '../../constants/styles'
import ExpenseList from './ExpensesList'
import ExpenseSummary from './ExpenseSummary'
import { ExpenseContext } from '../../store/expense-context'

function ExpensesOutput({ expensePeriod }) {
  const expenseCtx = useContext(ExpenseContext)
  return (
    <View style={styles.container}>
      <ExpenseSummary periodName={expensePeriod} expenses={expenseCtx.item} />
      <ExpenseList expenses={expenseCtx.item} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
})

export default ExpensesOutput
