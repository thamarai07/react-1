import React from "react";

export default function Card(props) {
  const { index, values, handleDeleteIndex, handleEditIndex } = props;

  return (
    <li className="card_item">
      <span className="card_text">{values}</span>
      <div className="card_buttons">
        <button
          onClick={() => handleEditIndex(index)}
          className="edit_button"
        >
          Edit
        </button>
        <button
          onClick={() => handleDeleteIndex(index)}
          className="delete_button"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
