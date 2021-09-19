import './App.css';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';



function App() {
  return (
    <div className="App m-5">
      <h3 className="mb-3 ml-3">ToDoList-App</h3>
      <ToDoInput />
      <ToDoList />
    </div>
  );
};

export default App;
