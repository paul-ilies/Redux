import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set } from "./actions";
export const SetCounter = () => {
  const initialCount = useSelector((state) => state.count);
  const [count, setCount] = useState(initialCount);
  const dispatch = useDispatch();

  useEffect(() => {
    setCount(initialCount);
  }, [initialCount]);
  return (
    <section className="controls">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(set(count));
        }}
      >
        <label htmlFor="set-to">Set Count</label>
        <input
          id="set-to"
          type="number"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value, 10))}
        />
        <input type="submit" />
      </form>
    </section>
  );
};
