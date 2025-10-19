import { Navigate, useSearchParams } from "react-router";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="font-mono font-bold space-y-5 w-screen h-screen bg-slate-950 justify-center p-6 py-5">
      <div className="flex items-center mb-12">
        <button
          onClick={() => navigate(-1)}
          className="bg-yellow-300 rounded-md p-3 mr-5"
        >
          <ChevronLeft />
        </button>
        <h1 className="underline text-3xl text-slate-100 font-bold text-center">
          Detalhes da Tarefa
        </h1>
      </div>
      <div className="flex">
        <p className="text-2xl text-zinc-50">
          Título: <p className="text-2xl text-yellow-500">{title}</p>
        </p>
      </div>
      <div className="flex">
        <p className="text-2xl text-zinc-50">
          Descrição: <p className="text-2xl text-yellow-500">{description}</p>
        </p>
      </div>
    </div>
  );
}
export default TaskPage;
