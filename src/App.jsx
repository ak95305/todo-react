import { useDispatch, useSelector } from "react-redux";
import AppBox from "./components/AppBox"
import { decNum, incNum } from "./actions";


function App() {

  const myState = useSelector((state) => state.countUpd);
  const dispatch = useDispatch();

  return (
    <div className="app">

      <div>{myState}</div>
      <button className="countBtn" onClick={ () => dispatch(incNum()) }>+ADD</button>
      <button className="countBtn" onClick={ () => dispatch(decNum()) }>-SUB</button>

      <AppBox />
    </div>
  )
}

export default App
