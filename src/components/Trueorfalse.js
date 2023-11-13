import { useSelector, useDispatch } from 'react-redux'
import { changetotrue1 } from '../redux/bool' //from slice

const Trueorfalse = () => {
  const bool = useSelector((state) => state.bool.ewan) // state.name-from-storejs.name-of-initialstate-from-slice
  const dispatch = useDispatch()

  return (
    <div>
      <p>child</p>
      <h1>{String(bool)}</h1>
      <button onClick={() => dispatch(changetotrue1())}>Boolean Change</button>
    </div>
  )
}
export default Trueorfalse
