import React from "react"
import { View, StyleSheet, FlatList, Text } from "react-native"

function renderExpenseItem(itemData) {
  return <Text>{itemData.item.description}</Text>
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
