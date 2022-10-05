import React from "react"
import { View, StyleSheet, Text } from "react-native"
import { GlobalStyles } from "../../constants/styles"
import ExpensesList from "./ExpensesList"
import ExpensesSummary from "./ExpensesSummary"

const ExpensesOutput = ({ expenses, expensesPeriod, fallbackText }) => {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>
  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />
  }
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodeName={expensesPeriod} />
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 22,
  },
})

export default ExpensesOutput
