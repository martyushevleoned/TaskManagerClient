import Task from "./Task";

function Tasks({getToken}) {

  const tasks = [
    {
      id: 1,
      text: "text"
    },
    {
      id: 2,
      text: "text"
    },
    {
      id: 3,
      text: "text"
    },
    {
      id: 3,
      text: "text"
    },
    {
      id: 3,
      text: "text"
    },
    {
      id: 3,
      text: "text"
    },
    {
      id: 3,
      text: "text"
    }
  ];


  return(
    <div className="border task-container">
      {tasks.map(task => <Task id={task.id} text={task.text} />)}
      
      <div className='border blur task'>
        <form>
          <div><input type="text" className="border task-input"/></div>
          <div className="center"><button className="border button">add task</button></div>
        </form>
      </div>
    </div>
  );
}

export default Tasks;
