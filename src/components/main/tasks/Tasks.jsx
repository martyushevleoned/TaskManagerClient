import Task from "./Task";
import React, {useState} from 'react';

function Tasks({jwt}) {

  const [tasks, setTasks] = useState([])
  const [state, setState] = useState(0)

  const updateTasks = () => {
    fetch("http://localhost:8080/getAllTasks", {
      method: 'GET',
      headers: {
         Authorization: `Bearer ${jwt}`
      }
    })
        .then(response => {
            if (response.ok) {
                response.json().then(json => {
                  console.log(json);
                  setTasks(json);
                });
            } else {
                alert("Ошибка получения списка задач");
            }
        })  
  }

  if (state === 0){
    updateTasks();
    setState(1);
  }    
 
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
              updateTasks();
            } else {
              alert("Ошибка добавления задачи");
            }
        })
      event.target.reset();  
    }

  return(
    <div className="border task-container">
      {tasks.map(task => <Task key={task.id} id={task.id} text={task.text} jwt={jwt} updateTasks={updateTasks}/>)}
      
      <div className='border blur task'>
        <form onSubmit={addTask}>
          <div><input type="text" placeholder="task text" name="text"  className="border task-input" required/></div>
          <div className="center"><button className="border button-create" type="submit">add task</button></div>
        </form>
      </div>
    </div>
  );
}

export default Tasks;
