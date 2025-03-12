import React, { useState } from "react";

// Komponen untuk menampilkan satu item tugas
function TodoItem({ task, onDelete }) {
  return (
    <li>
      {task}{" "}
      <button onClick={onDelete} style={{ marginLeft: "10px", color: "red" }}>
        Hapus
      </button>
    </li>
  );
}

// Komponen utama TodoList
function TodoList() {
  const [tasks, setTasks] = useState([]); // State daftar tugas
  const [newTask, setNewTask] = useState(""); // State input tugas baru

  // Menambahkan tugas baru ke daftar
  const addTask = () => {
    if (newTask.trim() === "") return; // Cegah input kosong
    setTasks([...tasks, newTask]); // Tambah ke state
    setNewTask(""); // Reset input
  };

  // Menghapus tugas dari daftar
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Tambah tugas..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Tambah</button>

      <ul>
        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} onDelete={() => deleteTask(index)} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
