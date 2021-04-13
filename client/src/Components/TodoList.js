import React, { useState } from "react";
import TextField from "./TextField";
import List from "./List";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);

  const onChange = ({ target }) => {
    setTodo(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setList([...list, todo]);
    setTodo("");
    console.log("click");
  };

  const removeTodo = (i) => {
    setList((prevState) => [...list.filter((el, index) => index !== i)]);
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
