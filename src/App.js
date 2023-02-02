import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import IncomeForm from "./components/IncomeForm";
import IncomeList from "./components/IncomeList";

function App() {
  //수입, 정한 수입 배열
  const [income, setIncome] = useState([]);
  //총수입
  const [totalIncome, setTotalIncome] = useState(0);

  //income의 변화가 있을때에만 useEffect를 실행하게된다
  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < income.length; i++) {
      temp += parseInt(income[i].price);
    }

    setTotalIncome(temp);
  }, [income]);

  return (
    <div className="App">
      <Header totalIncome={totalIncome} /> {/*총 수입을 전달*/}
      <IncomeForm income={income} setIncome={setIncome} />
      {/*수입과 수입설정함수로 전달*/}
      <IncomeList income={income} setIncome={setIncome} />
    </div>
  );
}

export default App;
