import {useState} from "react"
import { View, StyleSheet, Text } from "react-native"
import Button from "../ui/Button";
import Input from "./Input"

const ExpenseForm = ({onCancel,onSubmit,submitBtnLabel}) => {

  const [inputValues, setInputValues] = useState({
   amount : "",
   date : "",
   description : ""
  });
  function submitHandler (){
    const expenseData = {
      // convert into number +
      amount : +inputValues.amount,
      date : new Date (inputValues.date),
      description : inputValues.description
    }
    onSubmit(expenseData)
    }
  function inputChangeHandler( inputIdentifier,entredValue) {
    setInputValues((prev)=>{
      return {...prev,[inputIdentifier]:entredValue}
    })
  }
  return (
    <View style={styles.form}>
      <Text style={styles.text} >Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this,"amount"),
            value : inputValues.amount  // input.amount
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            keyboardType: "decimal-pad",
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this,"date"),
            value :inputValues["date"]
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          //   autoCapitalize : "none"
          //   auto correct
          // autoCorrect : false
          onChangeText: inputChangeHandler.bind(this,"description"),
          value :inputValues["description"]
        }}
      />
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
    marginVertical :24,
    textAlign : "center"
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
})

export default ExpenseForm
