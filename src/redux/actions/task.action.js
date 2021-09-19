export const addTaskAction = (params) => {
  console.log('params', params)
  return {
    type: 'ADD_TASK',
    payload: params,
  }
}

export const editTaskAction = (params) => {
  console.log(params)
  return {
    type: 'EDIT_TASK',
    payload: params,
  }
}

export const deleteTaskAction = (params) => {
  console.log('params', params)
  return {
    type: 'DELETE_TASK',
    payload: params,
  }
}

export const getTaskAction = (params) => {
  return {
    type: 'SEARCH_TASK',
    payload: params,
  }
}