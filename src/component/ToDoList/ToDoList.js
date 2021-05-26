import React from "react";

function ToDoList(props) {
  const { todos, onClickToDo } = props;
  var handleClick = (item) => {
      onClickToDo(item);
  }
  return (
    <ul>
      {todos.map((item) => (
        <li key={item.id} onClick={() => handleClick(item)}>{item.title}</li>
      ))}
    </ul>
  );
}
export default ToDoList;
