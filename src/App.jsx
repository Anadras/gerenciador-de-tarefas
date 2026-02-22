import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const fetchTasks = async () => {
      // Chamar a API para obter as tarefas
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        },
      );
      const data = await response.json();
      // Pegar as tarefas que ela retorna

      // Armazenar as tarefas no state
      setTasks(data);
    };
    // Se o localStorage tiver tarefas, use-as. Caso contrário, busque as tarefas da API
    // fetchTasks();
  }, []);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      // Se o id da tarefa for igual ao id da tarefa clicada, inverta o valor de isCompleted
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      // Caso contrário, retorne a tarefa sem alterações
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTask(taskId) {
    const deleteTask = tasks.filter((task) => task.id !== taskId);
    setTasks(deleteTask);
  }

  function onAddTask(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-gray-500 flex justify-center p-6">
      <div className="w-[500] space-y-6">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTasks onAddTask={onAddTask} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTask={onDeleteTask}
        />
      </div>
    </div>
  );
}

export default App;
