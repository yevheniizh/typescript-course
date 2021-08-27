import { ToDo, Action, ActionTypes } from '../actions';

export const todosReducer = (state: ToDo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter((todo: ToDo) => {
        return todo.id !== action.payload;
      });
    default:
      return state;
  }
};
