import { useState, useEffect } from "react";
import {
  closestCorners,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensors,
  useSensor,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import styles from "./Todo.module.scss";
import TodoList from "../TodoList/TodoList";
import AddTaskForm from "../AddTaskForm/AddTaskForm";
import Header from "../Header/Header";
import FilterBar from "../FilterBar/FilterBar";

function Todo() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks
      ? JSON.parse(savedTasks)
      : [
          { id: 1, text: "Complete online JavaScript course", isDone: false },
          { id: 2, text: "Jog around the park 3x", isDone: false },
          { id: 3, text: "10 minutes meditation", isDone: false },
          { id: 4, text: "Read for 1 hour", isDone: false },
          { id: 5, text: "Pick up groceries", isDone: false },
          {
            id: 6,
            text: "Complete Todo App on Frontend Mentor",
            isDone: false,
          },
        ];
  });
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [filter, setFilter] = useState("all");
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme !== null) {
      return savedTheme === "dark" ? true : false;
    }

    return preference;
  });

  const changeFilter = (newFilterValue) => {
    setFilter(newFilterValue);
  };

  const addTask = (e) => {
    e.preventDefault();

    if (newTaskTitle.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: newTaskTitle,
      isDone: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
  };

  const toggleTaskComplete = (taskId, isDone) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isDone };
        }
        return task;
      }),
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const clearCompletedTasks = () => {
    setTasks(tasks.filter((task) => !task.isDone));
  };

  const toggleTheme = () => {
    return !darkMode ? setDarkMode(true) : setDarkMode(false);
  };

  const getTaskPos = (id) => {
    return tasks.findIndex((task) => task.id === id);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setTasks((tasks) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(tasks, originalPos, newPos);
    });
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

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
            <AddTaskForm
              addTask={addTask}
              newTaskTitle={newTaskTitle}
              setNewTaskTitle={setNewTaskTitle}
            />
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

          <div className={styles.TodoFooter}>
            <FilterBar
              tasks={tasks}
              filter={filter}
              changeFilter={changeFilter}
              clearCompletedTasks={clearCompletedTasks}
            />
          </div>

          <div className={styles.TodoFilters}>
            <FilterBar
              tasks={tasks}
              filter={filter}
              changeFilter={changeFilter}
              clearCompletedTasks={clearCompletedTasks}
            />
          </div>
        </div>
      </div>
    </DndContext>
  );
}

export default Todo;
