import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ExpensesOutput from '../components/expensesOutput/ExpensesOutput';

const AllExpenses = () => {
    return (
        <ExpensesOutput expensesPeriod="Total" />
    );
}

const styles = StyleSheet.create({})

export default AllExpenses;
