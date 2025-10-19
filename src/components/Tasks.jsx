import { ChevronRight } from "lucide-react";
import { Trash } from "lucide-react";
import { useNavigate } from "react-router";

function Tasks(props) {
  const navigate = useNavigate();

  // Função para navegar para a página de detalhes da tarefa
  function onSeeDetailsClick(task) {
    const queryParams = new URLSearchParams();
    queryParams.set("title", task.title);
    queryParams.set("description", task.description);
    navigate(`/tasks?${queryParams.toString()}`);
  }

  return (
    <div>
      <ul className=" space-y-2 p-6 bg-slate-700 rounded-md shadow">
        {props.tasks.map((task) => (
          <li key={task.id} className="flex space-x-4">
            <button // Botão de marcar tarefa como completa ou incompleta
              onClick={() => props.onTaskClick(task.id)}
              className={`font-bold text-xl bg-slate-600 w-full p-2 rounded-md ${
                task.isCompleted
                  ? " text-slate-400 line-through"
                  : "text-yellow-300"
              }`}
            >
              {task.title}
            </button>

            <button // Botão de ver detalhes da tarefa
              onClick={() => onSeeDetailsClick(task)}
              className="bg-yellow-300 rounded-md p-3"
            >
              <ChevronRight />
            </button>

            <button // Botão de deletar tarefa
              onClick={() => props.onDeleteTaskClick(task.id)}
              className="bg-yellow-300 rounded-md p-3 hover:bg-red-500"
            >
              <Trash />
            </button>
          </li>
        ))}
      </ul>
      */ /*
    </div>
  );
}

export default Tasks;
