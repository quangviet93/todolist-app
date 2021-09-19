import React from 'react';
import { useSelector } from 'react-redux'
// import component;
import ToDoItem from './ToDoItem';




function ToDoList() {
  console.log('render List')

  const toDos = useSelector(state => state.taskReducer.toDoList);

  const listSearch = useSelector(state => state.taskReducer.listSearch);


  return (
    <div className='my-4'>
      <h2 className='mb-3 ml-3'>ListToDo</h2>
      <div>
        {toDos.map((todo, index) => {
          return <ToDoItem key={index} todo={todo} index={index} />
        })}
      </div>
      <h2 className='mb-3 ml-3'>ListSearch</h2>
      <div>
        {listSearch.map((todo, index) => {
          return <ToDoItem key={index} todo={todo} index={index} />
        })}
      </div>


    </div>
  )

};
export default ToDoList;
