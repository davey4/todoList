import React, { useState } from "react";
import TextField from "./TextField";
import List from "./List";

const TodoList = () => {
  const [todo, addTodo] = useState("");
  const [list, addList] = useState([]);

  const onChange = ({ target }) => {
    addTodo(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addList([...list, todo]);
    addTodo("");
    console.log("click");
  };

  const removeTodo = (i) => {
    addList((prevState) => [...list.filter((el, index) => index !== i)]);
  };

  return (
    <section>
      <TextField onChange={onChange} onSubmit={onSubmit} value={todo} />
      {list.length > 0 ? (
        list.map((el, i) => (
          <List todo={el} key={i} removeTodo={removeTodo} index={i} />
        ))
      ) : (
        <div>No Todos</div>
      )}
    </section>
  );
};

export default TodoList;
