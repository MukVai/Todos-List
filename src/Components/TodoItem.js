import React from "react";
import PropTypes from 'prop-types'


export const TodoItem = ({ todo, onDelete }) => {
  if (todo)
    return (
      <div>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className=" btn btn-sm btn-danger" onClick={() => { onDelete(todo) }}>Delete</button>
      </div>
    );
};
