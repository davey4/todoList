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
  };

  const removeTodo = (i) => {
    setList((prevState) => [...list.filter((el, index) => index !== i)]);
  };

  return (
    <section>
      <TextField onChange={onChange} onSubmit={onSubmit} value={todo} />
      <div className="list">
        {list.length > 0 ? (
          <ul>
            {list.map((el, i) => (
              <List todo={el} key={i} removeTodo={removeTodo} index={i} />
            ))}
          </ul>
        ) : (
          <div>No Todos</div>
        )}
      </div>
    </section>
  );
};

export default TodoList;
