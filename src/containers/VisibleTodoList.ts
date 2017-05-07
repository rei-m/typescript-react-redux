import { connect, Dispatch } from 'react-redux';
import { toggleTodo, VisibilityFilter } from '../actions';
import TodoList from '../components/TodoList';
import { GlobalState, Todo } from '../reducers/index';

const getVisibleTodos = (todos: Todo[], filter: string) => {
  switch (filter) {
    case VisibilityFilter.SHOW_ALL:
      return todos;
    case VisibilityFilter.SHOW_COMPLETED:
      return todos.filter((t) => t.completed);
    case VisibilityFilter.SHOW_ACTIVE:
      return todos.filter((t) => !t.completed);
  }
};

const mapStateToProps = (state: GlobalState) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<GlobalState>) => {
  return {
    onTodoClick: (id: number) => {
      dispatch(toggleTodo(id));
    },
  };
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default VisibleTodoList;
