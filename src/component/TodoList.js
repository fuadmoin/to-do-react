import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({
  todosProps, handle, deleete, setUpdate,
}) => (
  <ul>
    {todosProps.map((todo) => (
      <TodoItem
        key={todo.id}
        itemProp={todo}
        handleChange={handle}
        delTodo={deleete}
        setUpdate={setUpdate}
      />
    ))}
  </ul>
);
TodoList.propTypes = {
  handle: PropTypes.func.isRequired,
  deleete: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
  todosProps: PropTypes.string.isRequired,
};
export default TodoList;
