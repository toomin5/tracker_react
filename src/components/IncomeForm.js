import React, { useRef } from "react";

function IncomeForm({ income, setIncome }) {
  const desc = useRef(null);
  //useRef는 current(초기값) 형태로 설정되어있다.
  //current.value = useRef의 값을 얻을 수 있음.
  const date = useRef(null);
  const price = useRef(null);

  const AddIncome = (evt) => {
    evt.preventDefault();

    let d = date.current.value.split("-");
    let newD = new Date(d[0], d[1], d[2]);

    setIncome([
      ...income,
      {
        desc: desc.current.value,
        price: price.current.value,
        date: newD.getTime(),
      },
    ]);
    desc.current.value = "";
    price.current.value = null;
    date.current.value = null;
  };
  return (
    <form className="income-form" onSubmit={AddIncome}>
      <div className="form-inner">
        <input
          type="text"
          name="desc"
          id="desc"
          placeholder="수입에 대한 설명.."
          ref={desc}
        />
        <input
          type="number"
          name="price"
          id="price"
          placeholder="금액"
          ref={price}
        />
        <input
          type="date"
          name="date"
          id="date"
          placeholder="수입 날짜"
          ref={date}
        />
        <input type="submit" value="Add" />
      </div>
    </form>
  );
}

export default IncomeForm;
