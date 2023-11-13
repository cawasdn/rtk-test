import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
  changetotrue,
} from './redux/counter'

import Trueorfalse from './components/Trueorfalse'

function App() {
  const count = useSelector((state) => state.counter.value)
  const ewan = useSelector((state) => state.counter.ewan)
  const bool = useSelector((state) => state.bool.ewan) //from child component
  const dispatch = useDispatch()

  return (
    <div>
      <h1>{count}</h1>
      <h1>{String(ewan)}</h1>
      <h1>{String(bool)}</h1>
      <button onClick={() => dispatch(decrement())}>Minus</button>
      <button onClick={() => dispatch(increment())}>Add</button>
      <button onClick={() => dispatch(incrementByAmount(22))}>By amount</button>
      <button onClick={() => dispatch(changetotrue())}>true of false</button>
      <p>parent</p>
      <hr />
      <Trueorfalse />
    </div>
  )
}

export default App
