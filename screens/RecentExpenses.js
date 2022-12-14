import React from "react"
import { useEffect,useState } from "react"
import { useContext } from "react"
import { View, StyleSheet, Text } from "react-native"
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput"
import { ExpenseContext } from "../store/expense-context"
import { getDateMinusDay } from "../util/date"
import { fetchExpenses } from "../util/http"

const RecentExpenses = () => {
    // const [fetchedExpenses,setFetchedExpenses] =useState([])
  const expenseCtx = useContext(ExpenseContext)
  useEffect(() => {
    async function getExpenses() {
      const expenses=await fetchExpenses()
      expenseCtx.setExpenses(expenses)
    }
    getExpenses()
  }, [])
  const recentExpenses = expenseCtx.expenses.filter((expense) => {
    const today = new Date()
    const dateSevenDaysAgo = getDateMinusDay(today, 7)
    return expense.date >= dateSevenDaysAgo && expense.date <= today
  })
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No expenses registred for the last 7 days"
    />
  )
}

const styles = StyleSheet.create({})

export default RecentExpenses
