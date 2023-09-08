import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpenseList = props => {

    let filteredYear = props.arr;



    if(filteredYear.length === 0){
        return <h2 className="expenses-list__fallback">Found no expenses</h2>;
    }


    return (
        <ul className="expenses-list">
            {filteredYear.map(item => <ExpenseItem data={item} key={item.id}/>)}
        </ul>
    )
};

export default ExpenseList;