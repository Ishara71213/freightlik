import './styles/LoginForm.css';
import { InputType1 } from './InputType1';
import { useState } from 'react';
import {InputsProps} from './content/InputProps';
import { RegisterProps } from './content/RegisterProps';
import {auth} from '../Firebase-config';
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth';

export const LoginForm = () => {

// -----------------------------------hooks-------------------------------------
  const [userOption, setUserOption]=useState('login');
  const [checked,setChecked]=useState(false);
  const [values,setValues]=useState({
    email:'',
    password:''
  })
  const [valuesReg,setValuesReg]=useState({
    username:'',
    email:'',
    password:'',
    confirmpassword:''
  })

  // const [user,setUser]=useState({})
//--------------------------------login,logout,register functions----------------
const register= async ()=>{
  try{
    const user = await createUserWithEmailAndPassword(auth,valuesReg.email,valuesReg.password,valuesReg.name);
    console.log(user)
  }catch (error){
    console.log(error.message)
  }
};

// onAuthStateChanged(auth,(currentUser)=>{
//   setUser(currentUser);
// })

const login= async ()=>{
  try{
    const user = await signInWithEmailAndPassword(auth,values.email,values.password);
    console.log(user)
  }catch (error){
    console.log(error.message)
  }
};
// const logout=async ()=>{};

// -------------------------------handleFunctions------------------------------
  const handleUserOption=(e)=>{
    if(e.target.id==='register'&&userOption==='login'){
      setUserOption('register');
      console.log('reg btn click now',userOption)
    }
    else if(e.target.id==='login'&&userOption==='register'){
      setUserOption('login');
      console.log('login btn click now',userOption)
    }else{
      console.log('nothinghappen')
    }
    // console.log(e)
    // console.log(e.target.id)
    
  };

  const handleOnChange=(e)=>{
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
              <form className='login-form-inputs' onSubmit={login}>

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
                :<button className='loginForn-btn' onClick={ register}>Sign Up</button>
              }
              <div className='loginForm-forgetPassword'><span id='forgetPassword' >Forget Password?</span></div>
              {
                userOption==='login' 
                ? <div className='loginForm-register'>Not a Member?
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
