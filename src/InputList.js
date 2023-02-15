import React, { useState } from "react";
import { TodoList } from "./TodoList";

export const InputList = ({ taskList, setTaskList }) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputText === "") {
      return;
    }

    setTaskList([
      ...taskList,
      { id: taskList.length, text: inputText, completed: false },
    ]);

    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputText} />
        <button className="button add">Add</button>
      </form>
      <TodoList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
};
