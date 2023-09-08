
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

import './Expenses.css';
import { useState } from "react";



function Expenses({expenses}){


    const [filterValue,setFilterValue] = useState('');
    const filteredYear = expenses.filter(item => item.date.getFullYear()===Number(filterValue))
    
    const changeHandler = value => {
        setFilterValue(value);
    };


    return (
        <li>
        <Card className='expenses'>
            <ExpensesFilter onChangeFilter={changeHandler} selected={filterValue}/>
            <ExpensesChart expenses={filteredYear}/>
            <ExpenseList arr={filteredYear}/>
        </Card>
        </li>
    )
};

export default Expenses;