import React from "react"
import { useLayoutEffect } from "react"
import { View, StyleSheet, Text } from "react-native"
import IconBtn from "../components/ui/IconBtn"
import { GlobalStyles } from "../constants/styles"

const ManageExpense = ({ route, navigation }) => {
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
  function deleteExpenseHandler() {}
  return (
    <View style={styles.container} >
      {isEditing && (
        <View style={styles.deleteContainer} >
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
  container :{
    padding :24,
    flex :1,
    backgroundColor : GlobalStyles.colors.primary800
  },
  deleteContainer :{
    marginTop : 16,
    paddingTop : 8,
    borderTopWidth : 2,
    borderTopColor : GlobalStyles.colors.primary200,
    alignItems :"center"
  }
})

export default ManageExpense
