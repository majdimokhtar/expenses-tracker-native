import React from "react"
import { View, StyleSheet, FlatList, Text } from "react-native"
import ExpenseItem from "./ExpenseItem"

function renderExpenseItem(itemData) {
  return <ExpenseItem {...itemData.item} />
}
const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={expenses}
      renderItem={renderExpenseItem}
    />
  )
}

const styles = StyleSheet.create({})

export default ExpensesList
