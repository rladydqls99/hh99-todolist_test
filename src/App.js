import "./App.css";
import { useState } from "react";

function App() {
  // 초기 값 ------------------------------------
  const [todos, setTodos] = useState([
    {
      id: 0,
      contents: "1234567",
    },
  ]);
  // -------------------------------------------

  // input 창의 값 가져오기 ------------------------
  const [contents, setContents] = useState("");

  const contentsChangeHandlder = (event) => {
    const { value } = event.target;
    return setContents(value);
  };
  // --------------------------------------------

  // button을 눌렀을 때 값 추가하기 -------------------
  const clickAddButtonHandler = () => {
    const newInput = {
      id: todos.length,
      contents,
    };
    setContents("");
    return setTodos([...todos, newInput]);
  };
  // --------------------------------------------

  return (
    <>
      <header className="headers">
        <div>
          <input value={contents} onChange={contentsChangeHandlder} />
          <button onClick={clickAddButtonHandler}>추가하기</button>
        </div>
        <h2>Todo List</h2>
      </header>
      <div className="todos">
        {todos.map((item) => {
          return (
            <div className="todo" key={item.id}>
              {item.contents}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
