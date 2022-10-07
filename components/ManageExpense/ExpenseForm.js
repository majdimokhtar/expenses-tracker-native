import { useState } from "react"
import { View, StyleSheet, Text, Alert } from "react-native"
import Button from "../ui/Button"
import Input from "./Input"
import { getFormatingDate } from "../../util/date"
import { GlobalStyles } from "../../constants/styles"

const ExpenseForm = ({ onCancel, onSubmit, submitBtnLabel, defaultValue }) => {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValue ? defaultValue.amount.toString() : "",
      isValid: true, //defaultValue ? true : false,
    },
    date: {
      value: defaultValue ? getFormatingDate(defaultValue.date) : "",
      isValid: true,
    },
    description: {
      value: defaultValue ? defaultValue.description.toString() : "",
      isValid: true,
    },
  })
  function submitHandler() {
    const expenseData = {
      // convert into number +
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    }
    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0
    // regular js
    const dateIsValid = expenseData.date.toString() !== "Invalid Date"
    const descriptionIsValid = expenseData.description.trim().length > 0
    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      // show feedback
      // Alert.alert("invalid inputs", "Please Chekck your Input Values")
      setInputs((currInputs) => {
        return {
          amount: { value: currInputs.amount.value, isValid: amountIsValid },
          date: { value: currInputs.date.value, isValid: dateIsValid },
          description: {
            value: currInputs.description.value,
            isValid: descriptionIsValid,
          },
        }
      })
      return
    }
    onSubmit(expenseData)
  }
  function inputChangeHandler(inputIdentifier, entredValue) {
    setInputs((prev) => {
      return {
        ...prev,
        [inputIdentifier]: { value: entredValue, isValid: true },
      }
    })
  }
  const formIsValid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid
  return (
    <View style={styles.form}>
      <Text style={styles.text}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          inValid={!inputs.amount.isValid}
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputs.amount.value, // input.amount
          }}
        />
        <Input
          inValid={!inputs.date.isValid}
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            keyboardType: "decimal-pad",
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputs["date"].value,
          }}
        />
      </View>
      <Input
      inValid={!inputs.description.isValid}
        label="Description"
        textInputConfig={{
          multiline: true,
          //   autoCapitalize : "none"
          //   auto correct
          // autoCorrect : false
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputs["description"].value,
        }}
      />
      {formIsValid && (
        <Text style={styles.errorText}>
          Invalid inputs values please check enred data
        </Text>
      )}
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitBtnLabel}
          {/* {isEditing ? "Update" : "Add"} */}
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    marginTop: 80,
  },
  text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 24,
    marginVertical: 24,
    textAlign: "center",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
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
  errorText: {
    textAlign: "center",
    fontWeight: "bold",
    color: GlobalStyles.colors.error500,
    marginBottom: 20,
    fontSize: 16,
  },
})

export default ExpenseForm
