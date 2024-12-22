import React from "react";

const Input = ({ type, value, setValue, className, placeholder }) => {
  const styles = {
    padding: "12px 20px",
    margin: "8px",
    border: "1px solid",
    borderRadius: "10px",
    boxSizing: "border-box",
  };
  return (
    <input
      type={type}
      value={value}
      className={className}
      placeholder={placeholder}
      onChange={setValue}
      style={styles}
      required
    />
  );
};

export default Input;
