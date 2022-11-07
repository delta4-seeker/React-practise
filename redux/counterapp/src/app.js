import react from "react";
import { useDispatch, useSelector } from "react-redux";
import { Incrementor, Decrementor } from "./redux/actions";

const App = () => {
  const counter = useSelector((state) => state.counterReducers.counter); // read data

  const dispatch = useDispatch(); // write data

  const handleIncrement = () => {
    dispatch(Incrementor(1));
  };

  const handleDecrement = () => {
    dispatch(Decrementor(1));
  };

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={handleIncrement}>Increament </button>
      <button onClick={handleDecrement}>Decreament </button>
    </div>
  );
};

export default App;
