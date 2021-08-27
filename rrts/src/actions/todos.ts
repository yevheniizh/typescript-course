import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

export interface FetchTodosActions {
  type: ActionTypes.fetchTodos;
  payload: ToDo[];
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<ToDo[]>(url);

    dispatch<FetchTodosActions>({
      type: ActionTypes.fetchTodos,
      payload: response.data,
    });
  };
};

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id,
  };
};
