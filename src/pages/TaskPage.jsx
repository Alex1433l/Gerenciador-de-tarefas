import { Navigate, useSearchParams } from "react-router";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="font-mono font-bold space-y-5 w-screen h-screen bg-slate-950 justify-center p-10">
      <div className="flex">
        <button
          onClick={() => navigate(-1)}
          className="bg-yellow-300 rounded-md p-3 mr-5"
        >
          <ChevronLeft />
        </button>
        <h1 className=" underline text-3xl text-slate-100 font-bold text-center">
          Detalhes da Tarefa
        </h1>
      </div>
      <p className="text-2xl text-yellow-500">Título: {title}</p>
      <p className="text-2xl text-yellow-500">Descrição: {description}</p>
    </div>
  );
}
export default TaskPage;
