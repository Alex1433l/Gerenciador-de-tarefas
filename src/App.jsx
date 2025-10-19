import { useEffect, useState } from "react";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import { v4 } from "uuid";
/* import { data } from "react-router";
 */
function App() {
  //Almazenando as Tarefas
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  //Hook para salvar dados no navegador
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //Hook para importar dados de uma API externa
  /*   useEffect(() => {
    async function fetchTasks() {
      //Chamada para API externa
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5",
        {
          method: "GET",
        }
      );
      //Pegando os dados em formato JSON
      const data = await response.json();
      //Armazenando os dados no estado
      setTasks(data);
    }
    fetchTasks();
  }, []);
 */
  //Função que altera as Tarefas
  function onTaskClick(taskId) {
    const newTasks = tasks.map((tasks) => {
      if (tasks.id === taskId) {
        return { ...tasks, isCompleted: !tasks.isCompleted };
      }
      return tasks;
    });
    setTasks(newTasks);
  }
  //Função que deleta as Tarefas
  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }
  //Função que deleta todas as Tarefas
  function onDeleteAllTaskClick() {
    setTasks([]);
  }

  //Função que adiciona as Tarefas
  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div
      //Componente PAI
      className="font-mono font-bold space-y-5 w-screen h-screen bg-slate-950 justify-center p-10"
    >
      <div className="w-[600px] space-y-6 justify-center m-auto">
        <h1 className=" underline text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas 0.1
        </h1>
        <AddTasks //Componente Filho 1
          onAddTaskSubmit={onAddTaskSubmit}
          onDeleteAllTaskClick={onDeleteAllTaskClick}
        />
        <Tasks
          // Componente Filho 2
          /*Importamos os props aqui para utiliza-los em Tasks.jsx, tanto tasks
        para lista-las quanto onTaskClick para alterar o estado de cada tarefa*/
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
        <button
          onClick={() => onDeleteAllTaskClick()}
          className=" text-2xl w-full bg-red-500 text-slate-900 p-3 rounded-md font-bold hover:bg-yellow-600"
        >
          Deletar Todas as Tarefas
        </button>
      </div>
    </div>
  );
}

export default App;
