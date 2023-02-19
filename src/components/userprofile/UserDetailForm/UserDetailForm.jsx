import "./UserDetailsForm.css";
import { FaPlus } from "react-icons/fa";
import { InputType2 } from "../../inputType1/InputType2";
import { profileUpdateInput } from "../content/profileUpdateInput";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../../Firebase-config";
import { useState } from "react";

export const UserDetailForm = (props) => {
  const [valuesReg, setValuesReg] = useState({
    fullname: "",
    title: "",
    email: "",
    mobile: "",
    username: "",
    password: "",
  }); //to hold register user data

  // console.log(valuesReg)
  const handleOnChange = (e) => {
    // e.preventDefault()
    //debug
    // console.log("e target.name",e.target.name)
    // console.log("e target.value",e.target.name)
    setValuesReg({ ...valuesReg, [e.target.name]: e.target.value });
  };
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(db, "users", props.userId), {
        userId: props.userId,
        fullname: valuesReg.fullname,
        title: valuesReg.title,
        email: valuesReg.email,
        mobile: valuesReg.mobile,
        username: valuesReg.username,
        password: valuesReg.password,
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
    // console.log(valuesReg, props.userId);
  };

  return (
    <div className="UDformContainer">
      <div className="UDformTitleContainer">
        <div className="UDformText">Michael Sephton-Poultney</div>
        <div className="UDIcon">
          <FaPlus />
        </div>
      </div>
      <div>
        <div className="UDFormWrapper">
          <div className="UDProfileImg"></div>
          <form className="UDform">
            <div className="UDUserInputs">
              {profileUpdateInput.map((FormInput) => {
                return (
                  <div className="Udinputwrapper" key={FormInput.id}>
                    <InputType2
                      key={FormInput.id}
                      {...FormInput} //input array propperties passed as props
                      value={valuesReg[FormInput.name]}
                      handleOnChange={handleOnChange}
                      editmode={"true"}
                    />
                  </div>
                );
              })}
            </div>
            <button className="UDsubmitbtn" onClick={handleSubmitForm}>
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
