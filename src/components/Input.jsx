import React from "react";

export default function Input(props) {
  const { InputValue, handleClick, setInputValue } = props;

  return (
    <div className="input_wrap">
      <input
        type="text"
        placeholder="What's on your mind?"
        value={InputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="input_field"
      />
      <button onClick={() => handleClick(InputValue)} className="add_button">
        Add
      </button>
    </div>
  );
}
