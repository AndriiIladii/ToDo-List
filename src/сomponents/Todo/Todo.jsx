import { useState } from "react";
import { closestCorners, DndContext } from "@dnd-kit/core";
import { useTheme } from "../../hooks/useTheme";
import { useTasks } from "../../hooks/useTasks";
import styles from "./Todo.module.scss";
import TodoList from "../TodoList/TodoList";
import AddTaskForm from "../AddTaskForm/AddTaskForm";
import Header from "../Header/Header";
import FilterBar from "../FilterBar/FilterBar";

function Todo() {
  const { darkMode, toggleTheme } = useTheme();
  const [filter, setFilter] = useState("all");
  const {
    tasks,
    setTasks,
    addTask,
    toggleTaskComplete,
    deleteTask,
    clearCompletedTasks,
    handleDragEnd,
    sensors,
  } = useTasks();
  const changeFilter = (newFilterValue) => {
    setFilter(newFilterValue);
  };

  return (
    <DndContext
      collisionDetection={closestCorners}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <div className={`${styles.TodoBody} ${darkMode ? styles.DarkTheme : ""}`}>
        <div className={styles.TodoHeader}>
          <div className={styles.TodoContainer}>
            <Header toggleTheme={toggleTheme} />
            <AddTaskForm addTask={addTask} />
          </div>
        </div>
        <div className={styles.TodoContainer}>
          <TodoList
            tasks={tasks}
            filter={filter}
            deleteTask={deleteTask}
            toggleTaskComplete={toggleTaskComplete}
            setTasks={setTasks}
          />
          <FilterBar
            tasks={tasks}
            filter={filter}
            changeFilter={changeFilter}
            clearCompletedTasks={clearCompletedTasks}
          />
        </div>
      </div>
    </DndContext>
  );
}

export default Todo;
