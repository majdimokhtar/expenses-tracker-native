import React from "react"
import { useContext } from "react"
import { useLayoutEffect } from "react"
import { View, StyleSheet, Text } from "react-native"
import Button from "../components/ui/Button"
import IconBtn from "../components/ui/IconBtn"
import { GlobalStyles } from "../constants/styles"
import { ExpenseContext } from "../store/expense-context"

const ManageExpense = ({ route, navigation }) => {
  const expenseCtx = useContext(ExpenseContext)
  // if params is undefined ?
  const editexpenseId = route.params?.expenseId
  // convert into a boolean
  const isEditing = !!editexpenseId
  // to avoid flickring
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    })
  }, [navigation, isEditing])
  function deleteExpenseHandler() {
    expenseCtx.deleteExpense(editexpenseId)
    navigation.goBack()
  }
  function cancelHandler() {
    navigation.goBack()
  }
  function confirmHandler() {
    if (isEditing) {
      expenseCtx.updateExpense(editexpenseId, {
        description: "testiiiing!!!!",
        amount: 10,
        date: new Date("2022-01-01"),
      })
    } else {
      expenseCtx.addExpense({
        description: "test",
        amount: 19,
        date: new Date("2022-10-10"),
      })
    }
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconBtn
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
})

export default ManageExpense
