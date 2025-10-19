import { useState } from "react";
import Tasks from "./Tasks";

function AddTasks({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-3 p-6 bg-slate-700 rounded-md shadow">
      <input
        // Aqui estamos agregando o titulo da tarefa
        type="text"
        placeholder="Título da Tarefa"
        className="bg-slate-600 text-lg w-full p-2 rounded-md text-white"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <input
        // Aqui estamos agregando a descrição da tarefa
        type="text"
        placeholder="Descrição da Tarefa"
        className="bg-slate-600 text-lg w-full p-3 rounded-md text-white"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button
        className="w-full bg-yellow-500 text-slate-900 p-2 rounded-md font-bold hover:bg-yellow-600"
        // Aqui estamos agregando a função de adicionar a tarefa
        onClick={() => {
          // Aqui estamos criando uma condicional para não adicionar tarefas vazias
          if (!title.trim() || !description.trim()) {
            return alert("Por favor, preencha todos os campos da tarefa!");
          }

          onAddTaskSubmit(title, description);
          window.location.reload();
        }}
      >
        Adicionar Tarefa
      </button>
    </div>
  );
}

export default AddTasks;
