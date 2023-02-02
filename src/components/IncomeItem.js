import React from "react";

function IncomeItem({ income, index, removeIncome }) {
  let date = new Date(income.date);
  let day = date.getDate();
  let month = date.getMonth() + 1; //배열이고 12개월이면 11개이다 0 ~ 11
  let year = date.getFullYear();

  const removeHandle = (item) => {
    removeIncome(item);
  };

  return (
    <div className="income-item">
      <button className="remove-item" onClick={() => removeHandle(index)}>
        X
      </button>
      <div className="desc">{income.desc}</div>
      <div className="price">{income.price}</div>
      <div className="date">{year + "/" + month + "/" + day}</div>
    </div>
  );
}

export default IncomeItem;
