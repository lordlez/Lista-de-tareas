import './App.css';
import freeCodeCampLogo from './images/freecodecamp-image.jpeg';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className='App'>
      <div className='freecodecamp-logo-container'>
        <img src={freeCodeCampLogo} className='freecodecamp-logo' alt='freeCodeCamp logo' />
      </div>
      <div className='tasks-main-list'>
        <h1>My tasks</h1>
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
