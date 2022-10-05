import { useReducer } from "react"
import { createContext } from "react"

// dummy data
export const DUMMY_ExPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 60,
    date: new Date("2021-12-09"),
  },
  {
    id: "e2",
    description: "Pants",
    amount: 120,
    date: new Date("2022-01-10"),
  },
  {
    id: "e3",
    description: "A Book",
    amount: 40,
    date: new Date("2022-10-01"),
  },
  {
    id: "e4",
    description: "Another Book",
    amount: 50,
    date: new Date("2022-07-01"),
  },
  {
    id: "e5",
    description: "PS5",
    amount: 5000,
    date: new Date("2022-05-01"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 60,
    date: new Date("2021-12-09"),
  },
  {
    id: "e7",
    description: "Pants",
    amount: 120,
    date: new Date("2022-09-01"),
  },
  {
    id: "e8",
    description: "A Book",
    amount: 40,
    date: new Date("2022-08-01"),
  },
  {
    id: "e9",
    description: "Another Book",
    amount: 50,
    date: new Date("2022-07-01"),
  },
  {
    id: "e10",
    description: "PS5",
    amount: 5000,
    date: new Date("2022-05-01"),
  },
]

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ amount, description, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { amount, description, date }) => {},
})

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString()
      return [{ ...action.payload, id: id }, ...state]
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex((expense) => 
        expense.id === action.payload.id
      )
      const updatebleExpense = state[updatableExpenseIndex]
      const updatedItem = { ...updatebleExpense, ...action.payload.data }
      const updatedExpenses = [...state]
      updatedExpenses[updatableExpenseIndex] = updatedItem
      return updatedExpenses
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload)
    default:
      return state
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_ExPENSES)

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData })
  }
  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id })
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id:id, data: expenseData } })
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  }
  return <ExpenseContext.Provider value={value} >{children}</ExpenseContext.Provider>
}

export default ExpensesContextProvider
