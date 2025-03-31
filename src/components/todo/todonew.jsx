const TodoNew = (props) => {
  console.log("check props: ", props)
  const { addNewTodo } = props;
  const handClick = () => {
    alert("click me")
  }
  const hendleOnChange = (name) => {
    console.log("change",name)
  }
  return (
    <div className='todo-new'>
      <input type="text" 
      onChange={(event) => hendleOnChange(event.target.value)}
    />
      <button style={{ cursor: "pointer" }}
        onClick={handClick}
        >Add</button>
    </div>
  )
}
export default TodoNew;