import { useState } from "react";
import clasess from './Counter.module.scss'

const Counter = () => {
  const [state, setState] = useState(0);

  return (
    <>
      <h2 className={clasess.count}>{state}</h2>
      <button onClick={() => setState(state + 1)}>add</button>
    </>
  )
}

export default Counter;
