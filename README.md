### React, Node.js를 이용한 가계부 앱

---

### 주소 = https://toomin5.github.io/tracker_react/

App.js 에서 수입과,총수입을 useState로 설정한다.<br>

    //수입, 정한 수입 배열
    const [income, setIncome] = useState([]);
    //총수입
    const [totalIncome, setTotalIncome] = useState(0);

IncomeForm.js 로 income,setIncome 을 props로 보낸다<br>'
input태그 3개(설명,금액,날짜)를 만들고 useRef로 null값을 넣어주고 useRef의 초기값은 current.value로 찾을수있다.<br>
useRef로 설정한 값은 해당 값이 변경이되어도 페이지에 렌더가 일어나지 않으면 표시가 되지않는다.

    function IncomeForm({ income, setIncome }) {
      const desc = useRef(null); //설명, 수입, 날짜
      const price = useRef(null);
      const date = useRef(null);

이후 div태그를 감싼 form태그에 onSubmit(AddIncome)함수를 사용한다

    //설정한 날짜를 부여하기
    let d = date.current.value.split("-"); //['2023', '02', '08']임의로 설정한 값이 나온다
    let newD = new Date(d[0], d[1] - 1, d[2]); //d는 3길이의 배열로 되어있기에 하나씩 뽑아온다.

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

setIncome배열에 {[]} 값들이 저장이되고 input태그의 값을 초기화 시켜준다.
