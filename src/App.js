import './App.css';
import Birthday from "./Container/Birthday/Birthday"

function App() {
  return (
    <div className="app">
      <div>
        <Birthday hello={2425} />
      </div>
    </div>
  );
}

export default App;
