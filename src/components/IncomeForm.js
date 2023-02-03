import React, { useRef } from "react";
//useRef는 함수 안에서 실행되어도 state와 달리 재실행되지않는다
//렌더를 따로 해주지않으면 변화된 값이 표시 되지않음

function IncomeForm({ income, setIncome }) {
  const desc = useRef(null); //설명, 수입, 날짜
  const price = useRef(null);
  const date = useRef(null);
  //초기값은 current에 저장되어있다

  const AddIncome = (evt) => {
    evt.preventDefault();

    //설정한 날짜를 부여하기
    let d = date.current.value.split("-"); //['2023', '02', '08']임의로 설정한 값이 나온다
    let newD = new Date(d[0], d[1] - 1, d[2]); //d는 3길이의 배열로 되어있기에 하나씩 뽑아온다.

    //setIncome배열에 {[]} 이전 값들이 저장된다.
    //date는 초단위로 저장됨
    setIncome([
      ...income,
      {
        desc: desc.current.value,
        price: price.current.value,
        date: newD.getTime(),
      },
    ]);

    //input태그 값 초기화
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
          placeholder="메모"
          ref={desc}
        />
        <input
          type="number"
          name="price"
          id="price"
          placeholder="금액"
          ref={price}
        />
        <input type="date" name="date" id="date" ref={date} />
        <input type="submit" value="Add Inc" />
      </div>
    </form>
  );
}

export default IncomeForm;
