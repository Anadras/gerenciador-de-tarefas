import { useState } from "react";

function AddTasks({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Digite o título da tarefa"
        className="w-full p-2 border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Digite a descrição da tarefa"
        className="w-full p-2 border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      />
      <button
        className="bg-slate-400 text-white p-2 rounded-md w-full"
        onClick={() => {
          // Verificar se o título e a descrição não estão vazios
          if (!title.trim() || !description.trim()) {
            alert("Por favor, preencha o título e a descrição da tarefa.");
            return;
          }
          onAddTask(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        Adicionar Tarefa
      </button>
    </div>
  );
}

export default AddTasks;
