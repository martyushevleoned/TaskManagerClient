import Task from "./Task";

function Tasks({jwt}) {

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

  const addTask = (event) => {

    event.preventDefault();

    fetch("http://localhost:8080/addTask", {
      method: 'POST',
      headers: {
         Authorization: `Bearer ${jwt}`
      }, 
      body: event.target.text.value
    })
        .then(response => {
            if (response.ok) {
                alert("ок");
            } else {
                alert("Ошибка добавления задачи");
            }
        })  
}

  return(
    <div className="border task-container">
      {tasks.map(task => <Task id={task.id} text={task.text} />)}
      
      <div className='border blur task'>
        <form onSubmit={addTask}>
          <div><input type="text" placeholder="task text" name="text"  className="border task-input" required/></div>
          <div className="center"><button className="border button" type="submit">add task</button></div>
        </form>
      </div>
    </div>
  );
}

export default Tasks;
