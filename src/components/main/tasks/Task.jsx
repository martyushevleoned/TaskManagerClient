
function Task({id, text}) {

  return(
    <div className='border blur task'>
      <form>
        <input type="hidden" value={id}/>
        <span>{text}</span>
      </form>
    </div>
  );
}

export default Task;
