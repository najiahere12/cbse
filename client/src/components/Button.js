import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, onClick, variant = "primary", disabled = false }) => {
  const styles = {
    primary: {
      backgroundColor: "#007BFF",
      color: "#fff",
      border: "none",
      padding: "10px 20px",
      borderRadius: "5px",
      cursor: disabled ? "not-allowed" : "pointer",
    },
    secondary: {
      backgroundColor: "#6C757D",
      color: "#fff",
      border: "none",
      padding: "10px 20px",
      borderRadius: "5px",
      cursor: disabled ? "not-allowed" : "pointer",
    },
  };

  return (
    <button
      style={styles[variant]}
      onClick={disabled ? null : onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  disabled: PropTypes.bool,
};

export default Button;
