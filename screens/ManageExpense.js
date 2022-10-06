import React from "react"
import { useContext } from "react"
import { useLayoutEffect } from "react"
import { View, StyleSheet, Text } from "react-native"
import ExpenseForm from "../components/ManageExpense/ExpenseForm"
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
  // editing expense 
  const selectedExpense = expenseCtx.expenses.find((expense)=>expense.id===editexpenseId)
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
  function confirmHandler(expenseData) {
    if (isEditing) {
      expenseCtx.updateExpense(editexpenseId, expenseData)
    } else {
      expenseCtx.addExpense(expenseData)
    }
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        submitBtnLabel={isEditing ? "Update" : "Add"}
        defaultValue = {selectedExpense}
      />

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
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
})

export default ManageExpense
