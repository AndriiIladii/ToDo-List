import { useState } from "react";

import styles from "../Todo/Todo.module.scss";

function addTaskForm({ addTask }) {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask(newTaskTitle);
    setNewTaskTitle("");
  };

  return (
    <form className={styles.TodoInputWrapper} onSubmit={handleSubmit}>
      <span className={styles.TodoCheckbox}></span>
      <input
        className={styles.TodoInput}
        type="text"
        placeholder="Create a new todo..."
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
      />
    </form>
  );
}

export default addTaskForm;
