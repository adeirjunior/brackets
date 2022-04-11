import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../store/actions';

const Posts = () => {
  const counter = useSelector( state => state.counter );
  const isLogged = useSelector( state => state.logged );
  const dispatch = useDispatch();

  return (
    <>
      <Link href="/">Home</Link>
      <h3>Counter : {counter}</h3>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  )
}

export default Posts;