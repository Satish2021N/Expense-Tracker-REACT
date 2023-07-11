import './ExpenseItem.css'
//Creating our own custom component
//A component in react is just a function that returns something
function ExpenseItem({date, title, amount}) {
  return (
    <div className="expense-item">
      <div> {date.toISOString()}</div>
      <div className="expense-item__description">
        <h2> {title}</h2>
        <div className="expense-item__price"> ${amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
