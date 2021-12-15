import './App.css';
import Task1 from "./Component/Task1";
import Task2 from "./Component/Task2";
import Todo from "./Component/Task3/Todo";
function App() {
  return (
    <div className="App">
        <Task1/>
        <hr/>
        <Task2/>
        <hr/>
        <Todo/>
    </div>
  );
}

export default App;
