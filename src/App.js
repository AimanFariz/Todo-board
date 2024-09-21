import Board from './components/Board';
import Input from './components/Input';
import { useState } from 'react';

function App() {
  const [TaskList, setTaskList] = useState([])

  return (
    <>
    <div className='flex flex-col items-center justify-center py-8 gap-4'>
      <h1 className='text-xl font-semibold'>To-Do</h1>
      <Input taskList={TaskList} setTaskList={setTaskList}/>
      <div className='max-w-xl flex flex-col gap-5 sm:grid sm:grid-cols-3 '>
        {TaskList.map((task,index)=>
          <Board
          key={index}
          index={index}
          task={task}
          taskList={TaskList}
          setTaskList={setTaskList}
          />
        )}
      </div>
    </div>
    </>
    
  );
}

export default App;
