import styles from "../Todo/Todo.module.scss";

function FilterBar({
  changeFilter,
  filter,
  clearCompletedTasks,
  tasks,
}) {
  return (
    <>
      <span className={styles.TodoItemsLeft}>
        {tasks.filter((task) => !task.isDone).length} items left
      </span>
      <div className={styles.TodoFiltersDesktop}>
        <button
          className={`${styles.TodoFilterBtn} ${filter === "all" ? styles.TodoFilterBtnActive : ""}`}
          onClick={() => {
            changeFilter("all");
          }}
        >
          All
        </button>
        <button
          className={`${styles.TodoFilterBtn} ${filter === "active" ? styles.TodoFilterBtnActive : ""}`}
          onClick={() => {
            changeFilter("active");
          }}
        >
          Active
        </button>
        <button
          className={`${styles.TodoFilterBtn} ${filter === "completed" ? styles.TodoFilterBtnActive : ""}`}
          onClick={() => {
            changeFilter("completed");
          }}
        >
          Completed
        </button>
      </div>
      <button className={styles.TodoClearBtn} onClick={clearCompletedTasks}>
        Clear Completed
      </button>
    </>
  );
}

export default FilterBar;
