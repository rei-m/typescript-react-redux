import {
  ADD_TODO,
  AddTodoAction,
  TOGGLE_TODO,
  ToggleTodoAction,
} from '../actions';
import { Todo } from '../reducers/index';

const createTodo = (action: AddTodoAction): Todo => {
  return {
    completed: false,
    id: action.id,
    text: action.text,
  };
};

const toggleTodo = (state: Todo, action: ToggleTodoAction): Todo => {
  if (state.id !== action.id) {
    return state;
  }
  return Object.assign({}, state, {
    completed: !state.completed,
  });
};

const todos = (state: Todo[] = [], action: AddTodoAction | ToggleTodoAction) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        createTodo(action as AddTodoAction),
      ];
    case TOGGLE_TODO:
      return state.map((t) =>
        toggleTodo(t, action),
      );
    default:
      return state;
  }
};

export default todos;
