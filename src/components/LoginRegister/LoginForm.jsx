//components and styles
import './styles/LoginForm.css';
import { InputType1 } from '../inputType1/InputType1';
//data files
import {InputsProps} from './content/InputProps';
import { RegisterProps } from './content/RegisterProps';
//react & hooks
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
//firebase
import {auth,db} from '../../Firebase-config';
import { setDoc,doc } from 'firebase/firestore';
import 
{signInWithEmailAndPassword,
 createUserWithEmailAndPassword,
 updateProfile
} from 'firebase/auth';


export const LoginForm = () => {

// -----------------------------------hooks-------------------------------------
  const [userOption, setUserOption]=useState('login');//to check user trying to login or register

  const [checked,setChecked]=useState(false);//to check remember me is checked or not
  const [values,setValues]=useState({
    email:'',
    password:''
  })//to hold sign in user data
  const [valuesReg,setValuesReg]=useState({
    username:'',
    email:'',
    password:'',
    confirmpassword:''
  })//to hold register user data

  const navigate=useNavigate();
  // const [user,setUser]=useState({})
//--------------------------------login,register functions----------------
const register= async (e)=>{
  e.preventDefault()
  try{
    const user = await createUserWithEmailAndPassword(auth,valuesReg.email,valuesReg.password);
    await updateProfile(auth.currentUser, {displayName: valuesReg.username});
    console.log(user)
       await setDoc(doc(db, "users",user.user.uid), {
          email:valuesReg.email,
          username:valuesReg.username,
          password:valuesReg.password
        });
    navigate('/userprofilenetwork');
  }catch (err){
    console.log(err.message)
  }
};

const login= async ()=>{
  try{
    const user = await signInWithEmailAndPassword(auth,values.email,values.password);
    console.log(user)
    if(user._tokenResponse.registered===true){
      console.log(user._tokenResponse.email,'User Logged in')
      navigate('/userprofilenetwork');
    }
  }catch (error){
    console.log(error.message)
  }
};


// -------------------------------handleFunctions------------------------------
  const handleUserOption=(e)=>{
    // e.preventDefault()
    if(e.target.id==='register'&&userOption==='login'){
      setUserOption('register');
      console.log('reg btn click now visible ',userOption)
    }
    else if(e.target.id==='login'&&userOption==='register'){
      setUserOption('login');
      console.log('login btn click now visible ',userOption)
    }else{
      console.log('no opt')
    }
    // console.log(e)
    // console.log(e.target.id)
    
  };

  const handleOnChange=(e)=>{
    // e.preventDefault()
    if(userOption==='login'){
      setValues({...values, [e.target.name]: e.target.value})
    }
    else if(userOption==='register'){
      setValuesReg({...valuesReg, [e.target.name]: e.target.value})
    }
    
  }
  const handleChecked=()=>{
    setChecked(!checked);
    // console.log('checked')
  }

  return (
    <div className='loginForm-container'>
      {/* <p>{user?.email}</p> */}
      <div className='loginForm-wrapper'>
        <div className='loginForm-inner'>
              <div className='LoginForm-title'>Log In to Freightlink</div>
              <form className='login-form-inputs'>
                 
                { userOption==='login'
                  ? InputsProps.map((input)=>
                      <InputType1
                        key={input.id} {...input}//input array propperties passed as props
                        value={values[input.name]}
                        handleOnChange={handleOnChange}  
                      />)
                  : RegisterProps.map((registerInput)=>
                      <InputType1
                        key={registerInput.id} {...registerInput}//input array propperties passed as props
                        value={valuesReg[registerInput.name]}
                        handleOnChange={handleOnChange}  
                      />)
                }
              </form>
              <div className='inputform-remMe-container'>
                <label className='inputform-remMe-text'>
                  <input className='inputform-remMe-checkbox'
                    type="checkbox"
                    checked={checked}
                    onChange={handleChecked}/>
                    Remember me 
                </label>
              </div>
              {
                userOption==='login' 
                ? <button className='loginForn-btn' onClick={login}>Log In</button>
                : <button className='loginForn-btn' onClick={ register}>Sign Up</button>
              }
              <div className='loginForm-forgetPassword'><span id='forgetPassword'  >Forget Password?</span></div>
              {
                userOption==='login' 
                ?<div className='loginForm-register'>Not a Member?
                  <span id='register' onClick={handleUserOption}> Register</span>
                </div>
                :<div className='loginForm-register'>Already a member?
                  <span id='login' onClick={handleUserOption}> Sign In</span>
                </div>
              }
        </div>
      </div>
    </div>
  )
}
