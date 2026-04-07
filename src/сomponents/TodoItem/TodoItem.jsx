import styles from "../Todo/Todo.module.scss";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function TodoItem({ deleteTask, toggleTaskComplete, task }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className={`${styles.TodoItem} ${task.isDone ? styles.TodoItemDone : ""}`}
    >
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={(event) => toggleTaskComplete(task.id, event.target.checked)}
        className={`${styles.TodoCheckbox} ${
          task.isDone ? styles.TodoCheckboxChecked : ""
        }`}
      />

      <p className={styles.TodoItemText}>{task.text}</p>
      <button
        className={styles.TodoDeleteBtn}
        aria-label="Delete"
        title="Delete"
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.6777 0.707107L16.9706 0L8.83883 8.13173L0.707107 0L0 0.707107L8.13173 8.83883L0 16.9706L0.707106 17.6777L8.83883 9.54594L16.9706 17.6777L17.6777 16.9706L9.54594 8.83883L17.6777 0.707107Z"
          />
        </svg>
      </button>
    </li>
  );
}

export default TodoItem;
