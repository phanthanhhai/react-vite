import { useState } from "react";

const TodoNew = (props) => {
  // useState hook (getter/setter) 
  //const valueInput = "hello world"
  const [valueInput, setValueInput] = useState("PhanHai")

  // console.log("check props: ", props)
  const { addNewTodo } = props;
  const handClick = () => {
    console.log("check value input: ", valueInput)
  }
  const hendleOnChange = (name) => {
   
    setValueInput(name)
  }
  return (
    <div className='todo-new'>
      <input type="text" 
      onChange={(event) => hendleOnChange(event.target.value)}
    />
      <button style={{ cursor: "pointer" }}
        onClick={handClick}
        >Add</button>
        <div> My text input is = {valueInput}  
        </div>
    </div>
  )
}
export default TodoNew;