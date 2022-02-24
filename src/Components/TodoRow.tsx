type Todo = {
  id: string;
  task: string;
  isDone: boolean;
};

type TodoProps = {
  todo: Todo;
  handleDeleteTask: (id: string) => void;
  handleCheckTask: (id: string) => void;
};
const TodoRow = ({
  todo: { task, id, isDone },
  handleDeleteTask,
  handleCheckTask,
}: TodoProps) => {
  return (
    <div
      className={`
    flex w-full p-4 mb-2 justify-between items-center
   ${isDone ? "bg-gray-400 " : "bg-green-300"}
  `}
    >
      <p
        className={`
          ml-2 text-xl font-sans font-medium
          ${isDone ? "text-white line-through" : "text-gray-700"}
        `}
      >
        {task}
      </p>
      <div className="w-1/6 flex justify-evenly items-center ">
        <button
          aria-label="Delete Task"
          onClick={() => handleDeleteTask(id)}
          className="h-7 w-7 flex justify-center items-center bg-red-400 hover:bg-red-500 text-white font-bold  rounded"
        >
          X
        </button>
        <input
          className="form-checkbox h-7 w-7"
          type="checkbox"
          checked={isDone}
          onChange={() => handleCheckTask(id)}
        />
      </div>
    </div>
  );
};

export default TodoRow;
