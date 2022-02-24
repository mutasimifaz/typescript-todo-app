import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import uuid from "uuid-random";
export type AddTaskProps = {
  task: string;
};

type FormValues = {
  task: string;
};

const AddTask = ({ task }: AddTaskProps) => {
  const { register, handleSubmit } = useForm<FormValues>();
  var todoList = JSON.parse(localStorage.getItem("tasks") || "[]");

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    let task = { task: data.task, id: uuid(), isDone: false };
    todoList.push(task);
    localStorage.setItem("tasks", JSON.stringify(todoList));
    window.location.reload();
  };

  return (
    <form
      className="flex justify-between w-full mb-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="flex-1 rounded shadow p-2 text-black mr-2"
        {...register("task")}
        placeholder="Add to ToDo List"
      />
      <button type="submit" aria-label="Add todo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </form>
  );
};

export default AddTask;
