import './components/todo/todo.css'
import TodoData from './components/todo/todoData';
import TodoNew from './components/todo/todonew'
import reactLogo from './assets/react.svg';
import { useState } from 'react';
const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, name: "HELLO" },
    { id: 2, name: "HI" }
  ])

  const phanhai = " Phan Hai";
  const age = 21;
  const data = {
    address: "Nghe An",
    phone: "0967627873"
  }

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name
    }
    setTodoList([...todoList, newTodo])

  }
  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
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
        todoList={todoList}

      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' />
      </div>
    </div>
  )
}
export default App
