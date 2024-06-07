function Task({id, text, jwt, updateTasks}) {

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
              updateTasks();
              alert("ок");
            } else {
              alert("Ошибка удаления задачи");
            }
        });
  }


  return(
    <div className='border blur task'>
      <form onSubmit={deleteTask}>
        <input type="hidden" name="tid" value={id}/>
        <div className="task-input">{text}</div>
        <div className="center"><button className="border button" type="submit">close</button></div>
      </form>
    </div>
  );
}

export default Task;
