import React from "react";
import IncomeItem from "./IncomeItem";

function IncomeList({ income, setIncome }) {
  //filter함수를 이용해 배열에서 != 인것을 찾아 삭제한다
  const removeIncome = (item) => {
    let temp = income.filter((v, index) => index != item);
    //삭제 후 배열 재정의
    setIncome(temp);
  };

  const sortByDate = (a, b) => {
    return a.date - b.date;
  };

  return (
    <div className="income-list">
      {
        //배열을 통해 매핑해 출력하게되면 키를 제공해야한다
        income.sort(sortByDate).map((value, index) => (
          <IncomeItem
            key={index}
            income={value}
            index={index}
            removeIncome={removeIncome}
          />
        ))
      }
    </div>
  );
}

export default IncomeList;
