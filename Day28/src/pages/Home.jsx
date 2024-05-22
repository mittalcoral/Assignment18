import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Increment, Incrementby10, Decrement } from '../components/Counter'

function Home() {
  let  count = useSelector((state)=>state.counter.value)
  let dispatch=useDispatch()
  return (
    <div>
      <div style={{ backgroundColor:'lightgrey', fontWeight:'bold'}}>{count}</div><br /><br />
      <button onClick={()=>dispatch(Increment())}>Increment</button> <br /><br />
      <button onClick={()=>dispatch(Incrementby10(10))}>Incrementby10</button><br /><br />
      <button onClick={()=>dispatch(Decrement())}>Decrement</button>
    </div>
  )
}

export default Home
