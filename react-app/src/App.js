import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState();
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("i run all the time!");

  const iRunOnlyOnce = () => {
    console.log("CALL THE API....");
  };

  useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    console.log("SEARCH FOR", keyword);
  }, [keyword]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search here..."
        onChange={onChange}
        value={keyword}
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me!</button>
    </div>
  );
}

export default App;
