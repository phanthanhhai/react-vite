import './components/todo/todo.css'
import TodoData from './components/todo/todoData';
import TodoNew from './components/todo/todonew'
import reactLogo from './assets/react.svg';
const App = () => {

  return (
    <div className="todo-container">
      <div className="todo-title">Hi Hai</div>
      <TodoNew />
      <TodoData />
      <div className='todo-image'>
        <img src={reactLogo} className='logo'/>
      </div>
    </div>
  )
}
export default App
