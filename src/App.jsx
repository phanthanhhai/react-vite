import './components/todo/todo.css'
import TodoData from './components/todo/todoData';
import TodoNew from './components/todo/todonew'
import reactLogo from './assets/react.svg';
const App = () => {

  const phanhai = " Phan Hai";
  const age = 21;
  const data = {
    address: "Nghe An",
    phone: "0967627873"
  }

  const addNewTodo = (name) => {
    alert(`all me ${name}`) 
  }


  return (
    <div className="todo-container">
      <div className="todo-title">Hi Hai</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        name={phanhai}
        age={age}
        data={data}
        
      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' />
      </div>
    </div>
  )
}
export default App
