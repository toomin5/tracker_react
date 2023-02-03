import React from "react";

function Header({ totalIncome }) {
  //App.js -> props를 받아온다
  return (
    <div>
      <header>
        <h1>미니 가계부</h1>
        <div className="total-income">{totalIncome}원</div>
      </header>
    </div>
  );
}

export default Header;
