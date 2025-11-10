import "./App.css";
import Jangpung from "./components/Jangpung";

function App() {
  return (
    <main className="flex flex-col p-10 gap-3 min-h-screen w-screen">
      <span className="text-8xl">
        <Jangpung />
      </span>
    </main>
  );
}

export default App;
