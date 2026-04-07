import styles from "../Todo/Todo.module.scss";

function addTaskForm({ addTask, newTaskTitle, setNewTaskTitle }) {
  return (
    <form className={styles.TodoInputWrapper} onSubmit={addTask}>
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
