import { useNavigation } from "@react-navigation/native"
import React from "react"
import { View, StyleSheet, Pressable, Text } from "react-native"
import { GlobalStyles } from "../../constants/styles"
import { getFormatingDate } from "../../util/date"

const ExpenseItem = ({ id, description, amount, date }) => {
  const navigation = useNavigation()
  function expensePressHandler() {
    navigation.navigate("ManageExpense",{
      expenseId : id
    })
  }
  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.item}>
        <View style={[styles.textBase, styles.description]}>
          <Text>{description}</Text>
          <Text>{getFormatingDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  item: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary400,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 3,
    borderRadius: 6,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    marginBottom: 4,
    fontWeight: "bold",
    fontSize: 16,
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
    textAlign: "center",
  },
})

export default ExpenseItem
