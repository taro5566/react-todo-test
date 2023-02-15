import { useState } from "react";
import "./App.css";
import { InputList } from "./InputList";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="body">
      <header>
        <h1>ToDo app!</h1>
      </header>
      <div className="wrap">
        <div className="main">
          <InputList taskList={taskList} setTaskList={setTaskList} />
        </div>
      </div>
    </div>
  );
}

export default App;
