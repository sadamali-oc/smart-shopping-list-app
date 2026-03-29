import React from "react";

function Input({
  value,
  onChange,
  placeholder,
  type = "text",
  className = "",
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`form-control ${className}`}
    />
  );
}

export default Input;
