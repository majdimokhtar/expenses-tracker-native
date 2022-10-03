import React from 'react';
import {View,Text, StyleSheet} from 'react-native';

const ExpensesSummary = ({expenses,periodeName}) => {
    const expensesSum = expenses.reduce((sum,expense)=>{
        return sum+expense.amount
    },0)
    return (
        <View>
        <Text>{periodeName}</Text>
        <Text> {expensesSum.toFixed(2)} DT </Text>
    </View>
    );
}

const styles = StyleSheet.create({})

export default ExpensesSummary;
