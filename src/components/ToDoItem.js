import React from 'react';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTaskAction, editTaskAction } from '../redux/actions/index';


function ToDoItem(props) {

  console.log('render Item')
  const { todo, index } = props;
  const dispatch = useDispatch();
  const [editToDo, setEditToDo] = useState(false);
  const [title, setTitle] = useState(todo.title);
  return (
    <div>
      <div className="row mb-3">
        <div className="col-4">
        </div>
        <div className="col-8 d-flex">
          <div className="col">#{index + 1}</div>
          <div className="input-group">
            {editToDo ? <input
              className="form-control mx-3"
              type='text'
              onChange={(e) => setTitle(e.target.value)}
              value={title} /> : <h4>{todo.title}</h4>}</div>
          <button onClick={
            () => {
              if (editToDo) {
                dispatch(editTaskAction({
                  title: title,
                  id: todo.id
                }))
              }
              setEditToDo(!editToDo)
            }
          }
            className="btn btn-warning mx-3">{editToDo ? 'Update' : 'Edit'}</button>
          <button onClick={
            () => {
              dispatch(deleteTaskAction({ index: index }))
            }
          } className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  )
};

export default ToDoItem;
