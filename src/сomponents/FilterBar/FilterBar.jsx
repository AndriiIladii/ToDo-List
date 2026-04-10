import styles from "./FilterBar.module.scss";

function FilterBar({ changeFilter, filter, clearCompletedTasks, tasks }) {
  const filterButtons = (
    <>
      <button
        className={`${styles.filterBarBtn} ${filter === "all" ? styles.filterBarBtnActive : ""}`}
        onClick={() => changeFilter("all")}
      >
        All
      </button>
      <button
        className={`${styles.filterBarBtn} ${filter === "active" ? styles.filterBarBtnActive : ""}`}
        onClick={() => changeFilter("active")}
      >
        Active
      </button>
      <button
        className={`${styles.filterBarBtn} ${filter === "completed" ? styles.filterBarBtnActive : ""}`}
        onClick={() => changeFilter("completed")}
      >
        Completed
      </button>
    </>
  );

  return (
    <>
      <div className={styles.filterBody}>
        <span className={styles.filterTodoItemsLeft}>
          {tasks.filter((task) => !task.isDone).length} items left
        </span>

        <div className={styles.filterBarDesktop}>{filterButtons}</div>

        <button
          className={styles.filterBarClearBtn}
          onClick={clearCompletedTasks}
        >
          Clear Completed
        </button>
      </div>

      <div className={styles.filterBarFilters}>{filterButtons}</div>
    </>
  );
}

export default FilterBar;
