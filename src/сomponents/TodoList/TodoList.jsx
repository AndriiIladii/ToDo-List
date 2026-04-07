import styles from "../Todo/Todo.module.scss";
import TodoItem from "../TodoItem/TodoItem";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

function TodoList({ tasks, filter, deleteTask, toggleTaskComplete, setTasks }) {
  let filteredTasks = tasks;

  if (filter === "active") {
    filteredTasks = filteredTasks.filter((task) => !task.isDone);
  } else if (filter === "completed") {
    filteredTasks = filteredTasks.filter((task) => task.isDone);
  }

  return (
    <ul className={styles.TodoList}>
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {filteredTasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTaskComplete={toggleTaskComplete}
            tasks={tasks}
            setTasks={setTasks}
          />
        ))}
      </SortableContext>
    </ul>
  );
}

export default TodoList;
