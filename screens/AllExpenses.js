import React from "react"
import { useContext } from "react"
import { View, StyleSheet, Text } from "react-native"
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput"
import { ExpenseContext } from '../store/expense-context';

const AllExpenses = () => {
  const expenseCtx = useContext(ExpenseContext)
  return (
    <ExpensesOutput expenses={expenseCtx.expenses} expensesPeriod="Total" fallbackText="No registred expenses found" />
  )
}

const styles = StyleSheet.create({})

export default AllExpenses
