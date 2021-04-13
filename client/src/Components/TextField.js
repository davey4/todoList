import React from "react";

const TextField = (props) => {
  return (
    <section>
      <form onSubmit={props.onSubmit}>
        <input type="text" onChange={props.onChange} value={props.value} />
        <button type="submit">Add Todo</button>
      </form>
    </section>
  );
};

export default TextField;
