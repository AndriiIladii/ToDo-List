import { useState } from "react";

import styles from "./AddTaskForm.module.scss";

function addTaskForm({ addTask }) {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask(newTaskTitle);
    setNewTaskTitle("");
  };

  return (
    <form className={styles.addTaskFormWrapper} onSubmit={handleSubmit}>
      <input
        className={styles.addTaskInput}
        type="text"
        placeholder="Create a new todo..."
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
      />
    </form>
  );
}

export default addTaskForm;
