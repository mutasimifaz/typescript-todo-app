import React, { FC, useEffect, useLayoutEffect, useState } from "react";
import AddTask from "./AddTask";
import TodoRow from "./TodoRow";
type Todo = {
  id: string;
  task: string;
  isDone: boolean;
};

const Tasks: FC = () => {
  const [task, setTask] = useState("");
  const [bli, setBli] = useState<Todo[]>([]);

  var lsTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

  useLayoutEffect(() => {
    setBli(lsTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(bli));
  }, [bli]);

  const deleteTask = (id: string) => {
    const updatedTasks = lsTasks.filter((todo: Todo) => todo.id !== id);
    setBli(updatedTasks);
    localStorage.setItem("tasks", updatedTasks);
  };

  const markTask = (id: string) => {
    const updatedTasks = bli.map((todo: Todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else return todo;
    });
    setBli(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(bli));
  };

  return (
    <section className="w-10/12 lg:w-1/2 max-w-2xl flex flex-col items-center">
      <AddTask task={task} />
      {bli.map((todo: Todo) => (
        <TodoRow
          key={todo.id}
          todo={todo}
          handleDeleteTask={deleteTask}
          handleCheckTask={markTask}
        />
      ))}
    </section>
  );
};

export default Tasks;
