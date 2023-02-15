import React from "react";

export const TodoList = ({ taskList, setTaskList }) => {
  // タスクをcompletedする
  const handleCompleted = (id) => {
    setTaskList(
      taskList.map((task) => {
        if (id === task.id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };

  // タスク削除
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return taskList.map((task, index) => (
    <div className="text-wrap" key={index}>
      <p className={` ${task.completed ? "completed" : ""}`}>{task.text}</p>
      <button className="button check" onClick={() => handleCompleted(task.id)}>
        <img src="./check.svg" alt="check" />
      </button>
      <button className="button delete" onClick={() => handleDelete(task.id)}>
        <img src="./trach.svg" alt="check" />
      </button>
    </div>
  ));
};
