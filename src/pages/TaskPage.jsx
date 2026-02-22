import { useSearchParams } from "react-router-dom";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="w-screen h-screen bg-slate-500 p-6">
      <div>
        <div className="w-[500] space-y-6">
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Detalhes da Tarefa
          </h1>

          <div className="bg-slate-200 p-6 rounded-md shadow">
            <h2 className="text-2xl font-bold text-slate-600">{title}</h2>
            <p className="mt-4 text-slate-600">{description}</p>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => window.history.back()}
              className="bg-slate-400 text-white p-2 rounded-md hover:bg-slate-500 transition-colors text-center"
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
