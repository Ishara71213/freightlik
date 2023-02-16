import "./InputType1.css";
import { useState } from "react";

export const InputType1 = (props) => {
  const { label, id, handleOnChange, errorMessage, ...inputProps } = props;
  const [focused, setFocus] = useState(false); //to hold focus value state

  const handleFocus = () => {
    setFocus(true);
  };

  return (
    <div className="inputType1-container">
      {label && <label className="inputType1-text">{label}</label>}
      <input
        className="inputType1-text"
        {...inputProps}
        onChange={handleOnChange}
        onBlur={handleFocus} //to toggle on of error msg
        focused={focused.toString()}
        style={{ marginBottom: focused ? 0 : 24 }}
      />
      <span className="inputError">{errorMessage}</span>
    </div>
  );
};
