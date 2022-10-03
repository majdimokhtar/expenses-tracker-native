import React from "react"
import { View, Text, StyleSheet } from "react-native"
import {GlobalStyles} from "../../constants/styles"

const ExpensesSummary = ({ expenses, periodeName }) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount
  }, 0)
  return (
    <View style={styles.container}  >
      <Text style={styles.periodText}>{periodeName}</Text>
      <Text style={styles.sum}> {expensesSum.toFixed(2)} DT </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container :{
        padding : 8,
        backgroundColor : GlobalStyles.colors.primary50,
        borderRadius :6,
        flexDirection :"row",
        justifyContent :"space-between",
        alignItems : "center"
    },
    periodText :{
        fontSize : 12 ,
        color : GlobalStyles.colors.primary400
    },
    sum :{
        fontSize : 16,
        fontWeight : "bold",
        color :GlobalStyles.colors.primary500
    }
})

export default ExpensesSummary
