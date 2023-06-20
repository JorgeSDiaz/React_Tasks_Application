import TaskList from "./components/taskList/TaskList";
import TaskForm from "./components/taskForm/TaskForm";

export default function App() {
  return (
    <main className="bg-zinc-800 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}
