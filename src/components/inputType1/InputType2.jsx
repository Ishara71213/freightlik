import "./InputType2.css";
import { useState } from "react";

export const InputType2 = (props) => {
  const { label, id, handleOnChange, errorMessage, ...inputProps } = props;
  const [focused, setFocus] = useState(false); //to hold focus value state

  const handleFocus = () => {
    setFocus(true);
  };

  return (
    <div className="inputType2-container">
      {label && <label className="inputType2-label">{label}</label>}

      {props.editmode ? (
        <input
          className="inputType2-text"
          {...inputProps}
          onChange={handleOnChange}
          onBlur={handleFocus} //to toggle on of error msg
          focused={focused.toString()}
          style={{ marginBottom: focused ? 0 : 24 }}
        />
      ) : (
        <label className="inputType2-label">user name</label>
      )}
      <span className="input2Error">{errorMessage}</span>
    </div>
  );
};
