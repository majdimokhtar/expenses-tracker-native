import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ExpensesOutput from '../components/expensesOutput/ExpensesOutput';

const RecentExpenses = () => {
    return (
        <ExpensesOutput  expensesPeriod="Last 7 Days"/>
    );
}

const styles = StyleSheet.create({})

export default RecentExpenses;

