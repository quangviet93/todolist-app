import React from 'react';
import { useState } from 'react';
import { addTaskAction, getTaskAction } from '../redux/actions/index';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';


function ToDoInput() {
  console.log('render Input')
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  return (
    <div>
      <div className="row">
        <div className="col-4">
          <div className="input-group">
            <input type="text" className="form-control mx-3" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button
              onClick={
                () => {
                  dispatch(
                    addTaskAction(
                      {
                        id: v4(),
                        title: title
                      }
                    )
                  )
                  setTitle('')
                }
              }
              className="btn btn-primary">Add</button>
          </div>
        </div>
        <div className="col-8">
          <div className="input-group">
            <input type="text" className="form-control mx-3" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." />
            <button
              onClick={() => {
                dispatch(
                  getTaskAction(
                    {
                      search: search
                    }
                  )
                )
              }}
              className="btn btn-primary">Search</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ToDoInput;
