import React from 'react'

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
    date: new Date('2022-04-05'),
  },
  {
    id: 'a4',
    description: 'A pair of books',
    amount: 22.99,
    date: new Date('2022-04-01'),
  },
]

export const ExpenseContext = React.createContext({
  item: [],
  addExpense: () => {},
  updateExpense: () => {},
  deleteExpense: () => {},
})

function expenseReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          ...action.payload,
          id: new Date().toString() + Math.random().toString(),
        },
      ]
    case 'DELETE':
      return state.filter((item) => item.id !== action.payload)
    default:
      return state
  }
}

function ExpenseContextProvider({ children }) {
  const [expensesState, dispatch] = React.useReducer(
    expenseReducer,
    DUMMY_EXPENSE
  )

  function addExpense(expense) {
    dispatch({
      type: 'ADD',
      payload: expense,
    })
  }

  function deleteExpense(expenseId) {
    dispatch({
      type: 'DELETE',
      payload: expenseId,
    })
  }

  return (
    <ExpenseContext.Provider
      value={{
        item: expensesState,
        addExpense,
        deleteExpense,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  )
}

export default ExpenseContextProvider
