const TodoData = (props) => {
    const {name, age, data} = props;
    console.log("check props: ",props)
    
    return (
        <div className='todo-data'>
            <div>My FAMYLY</div>
            <div> HELLO</div>
            <div> HI</div>
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    )
}
export default TodoData;