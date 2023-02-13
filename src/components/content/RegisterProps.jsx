  //-------------------------properties values for input component--------------------------------
  export const RegisterProps=[
    {
        id:1,
        name:'username',// e.trget.name reffers to this
        type:'text',
        placeholder:'User Name',
        errorMessage:'*User name Required',
        required: true,
        // label:'Email'
    },
    {
        id:2,
        name:'email',// e.trget.name reffers to this
        type:'text',
        placeholder:'Email',
        errorMessage:'*Email Required',
        required: true,
        // label:'Email'
    },
    {
      id:3,
      name:'password',
      type:'password',
      placeholder:'Password',
      errorMessage:'*Password should be 8-20 characters and contain numbers and letters',
      autoComplete:"on",
      required: true,
      pattern:"^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",
      // label:'Password'
    },
    {
        id:4,
        name:'confirmpassword',
        type:'password',
        placeholder:'Confirm password',
        errorMessage:'*Password not matching',
        autoComplete:"on",
        required: true,
        pattern:"^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",
        // label:'Password'
      }
  ]
 