import { useState, useEffect } from "react";
import {
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensors,
  useSensor,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

export const useTasks = () => {
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

  const addTask = (text) => {
    if (text.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: text,
      isDone: false,
    };

    setTasks([...tasks, newTask]);
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

  return {
    tasks,
    setTasks,
    addTask,
    toggleTaskComplete,
    deleteTask,
    clearCompletedTasks,
    handleDragEnd,
    sensors,
  };
};
