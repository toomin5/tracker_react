import React from "react";

function Header({ totalIncome }) {
  //totalIncome을 props로 받아온다
  return (
    <header>
      <h1>Income Trakcer</h1>
      <div className="total-income">{totalIncome}</div>
    </header>
  );
}

export default Header;
