  //-------------------------properties values for input component--------------------------------
  export const InputsProps=[
    {
      id:1,
      name:'email',// e.trget.name reffers to this
      type:'text',
      placeholder:'Email',
      errorMessage:'*Email Required',
      required: true,
      // label:'Email'
    },
    {
      id:2,
      name:'password',
      type:'password',
      placeholder:'Password',
      errorMessage:'*Password should be 8-20 characters and contain numbers and letters',
      autoComplete:"on",
      required: true,
      pattern:"^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",
      // label:'Password'
    }
  ]
 