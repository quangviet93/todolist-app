const initialState = {
  toDoList: [

  ],
  listSearch: [],
};
console.log(initialState.toDoList)
function taskReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK': {
      return {
        ...state,
        toDoList: [
          ...state.toDoList,
          action.payload,
        ],
      };
    }
    case 'EDIT_TASK': {
      const { id, title } = action.payload;
      const newToDoList = state.toDoList;
      const updateToDo = newToDoList.find((todo) => {
        return todo.id === id;
      })
      updateToDo.title = title;
      return {
        ...state,
        toDoList: [
          ...newToDoList,
        ],
      };
    }
    case 'DELETE_TASK': {
      const { index } = action.payload;
      const newToDoList = state.toDoList;
      newToDoList.splice(index, 1);
      return {
        ...state,
        toDoList: [
          ...newToDoList,
        ],
      };
    }
    case 'SEARCH_TASK': {
      const { search } = action.payload;
      const listSearch = state.toDoList.filter((todo) => {
        return todo.title.indexOf(search) !== -1;
      });
      return {
        ...state,
        toDoList: [
          ...listSearch,
        ],
      };
    }

    default: {
      return state;
    }
  }
}

export default taskReducer;