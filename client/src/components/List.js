import React from "react";

const List = (props) => {
  return (
    <li>
      {props.todo}
      <button onClick={() => props.removeTodo(props.index)}>Remove Todo</button>
    </li>
  );
};

export default List;
