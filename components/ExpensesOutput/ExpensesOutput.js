import React from "react"
import { View, StyleSheet, Text, FlatList } from "react-native"
import { GlobalStyles } from "../../constants/styles"
import ExpensesList from "./ExpensesList"
import ExpensesSummary from "./ExpensesSummary"

const DUMMY_ExPENSES = [
    {
        id : "e1",
        description: "A pair of shoes",
        amount : 60,
        date : new Date("2021-12-09")
    },
    {
        id : "e2",
        description: "Pants",
        amount : 120,
        date : new Date("2022-09-01")
    },
    {
        id : "e3",
        description: "A Book",
        amount : 40,
        date : new Date("2022-08-01")
    },
    {
        id : "e4",
        description: "Another Book",
        amount : 50,
        date : new Date("2022-07-01")
    },
    {
        id : "e5",
        description: "PS5",
        amount : 5000,
        date : new Date("2022-05-01")
    },
]

const ExpensesOutput = ({ expenses,expensesPeriod }) => {
  return (
    <View style={styles.container} >
      <ExpensesSummary  expenses={DUMMY_ExPENSES} periodeName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_ExPENSES} />
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    flex : 1,
    padding : 24,
    backgroundColor : GlobalStyles.colors.primary700
  }
})

export default ExpensesOutput
