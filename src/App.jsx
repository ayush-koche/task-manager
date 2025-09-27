import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur shadow-xl rounded-2xl p-8 border border-gray-100">
        <h1 className="text-3xl font-extrabold text-center mb-6 pt-4 text-gray-700">
          Task Manager
        </h1>

        {/* Task Form */}
        <div className="mb-6">
          <TaskForm />
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-200" />

        {/* Task List */}
        <TaskList />
      </div>
    </div>
  );
}

export default App;
