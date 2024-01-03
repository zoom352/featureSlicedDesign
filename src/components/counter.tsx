import { useState } from "react";
import './Counter.scss'

const Counter = () => {
  const [state, setState] = useState(0);

  return (
    <>
      <h2>{state}</h2>
      <button onClick={() => setState(state + 1)}>add</button>
    </>
  )
}

export default Counter;
