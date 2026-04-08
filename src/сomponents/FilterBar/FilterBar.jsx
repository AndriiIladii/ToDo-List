import styles from "../Todo/Todo.module.scss";

function FilterBar({
  changeFilter,
  filter,
  clearCompletedTasks,
  tasks,
}) {
  const filterButtons = (
    <>
      <button
        className={`${styles.TodoFilterBtn} ${filter === "all" ? styles.TodoFilterBtnActive : ""}`}
        onClick={() => changeFilter("all")}
      >
        All
      </button>
      <button
        className={`${styles.TodoFilterBtn} ${filter === "active" ? styles.TodoFilterBtnActive : ""}`}
        onClick={() => changeFilter("active")}
      >
        Active
      </button>
      <button
        className={`${styles.TodoFilterBtn} ${filter === "completed" ? styles.TodoFilterBtnActive : ""}`}
        onClick={() => changeFilter("completed")}
      >
        Completed
      </button>
    </>
  );

  return (
    <>
      <div className={styles.TodoFooter}>
        <span className={styles.TodoItemsLeft}>
          {tasks.filter((task) => !task.isDone).length} items left
        </span>

        <div className={styles.TodoFiltersDesktop}>
          {filterButtons}
        </div>

        <button className={styles.TodoClearBtn} onClick={clearCompletedTasks}>
          Clear Completed
        </button>
      </div>

      <div className={styles.TodoFilters}>
        {filterButtons}
      </div>
    </>
  );
}

export default FilterBar;
