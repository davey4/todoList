import React, { useState } from "react";
import TextField from "./TextField";
import List from "./List";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  const [formError, setFormError] = useState(false);

  const onChange = ({ target }) => {
    setTodo(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (todo) {
      setList([...list, todo]);
      setTodo("");
      setFormError(false);
    } else {
      setFormError(true);
    }
  };

  const removeTodo = (i) => {
    setList((prevState) => [...list.filter((el, index) => index !== i)]);
  };

  return (
    <section>
      <TextField onChange={onChange} onSubmit={onSubmit} value={todo} />
      {formError ? <div className="list">Please add a Todo</div> : null}
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
