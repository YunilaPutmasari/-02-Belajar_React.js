import { useState } from "react";

const TodoItem = ({ task, onDelete }) => {
  return (
    <li className="flex justify-between items-center bg-gray-100 p-2 rounded shadow">
      <span>{task}</span>
      <button
        onClick={onDelete}
        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
      >
        Hapus
      </button>
    </li>
  );
};

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Todo List</h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-1 border p-2 rounded"
          placeholder="Tambahkan tugas..."
        />
        <button
          onClick={addTask}
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Tambah
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            onDelete={() => deleteTask(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
