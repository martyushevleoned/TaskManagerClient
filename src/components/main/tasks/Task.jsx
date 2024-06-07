import React, {useState} from 'react';

function Task({id, text, jwt, updateTasks}) {

  const delay = (delayInms) => {return new Promise(resolve => setTimeout(resolve, delayInms));};
  const [exit, setExit] = useState('')
  const deleteTask = (event) => {
    event.preventDefault();

    console.log(event.target.tid.value);
    fetch("http://localhost:8080/deleteTaskById", {
      method: 'POST',
      headers: {
         Authorization: `Bearer ${jwt}`
      }, 
      body: event.target.tid.value
    })
        .then(response => {
            if (response.ok) {
              setExit('exit');
              delay(700).then(()=>updateTasks());
            } else {
              alert("Ошибка удаления задачи");
            }
        });
  }


  return(
    <div className={exit + ' border blur task'}>
      <form onSubmit={deleteTask}>
        <input type="hidden" name="tid" value={id}/>
        <div className="task-input">{text}</div>
        <div className="center"><button className="border button" type="submit">close</button></div>
      </form>
    </div>
  );
}

export default Task;
