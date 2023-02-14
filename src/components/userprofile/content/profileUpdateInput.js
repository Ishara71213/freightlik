  //-------------------------properties values for input component--------------------------------
  export const profileUpdateInput=[
    {
        id:1,
        name:'fullname',// e.trget.name reffers to this
        type:'text',
        placeholder:'Michael Sephton-Poultney',
        errorMessage:'*User name Required',
        required: true,
        label:'Full Name'
    },
    {
        id:2,
        name:'title',// e.trget.name reffers to this
        type:'text',
        placeholder:'Managing Director',
        errorMessage:'*User name Required',
        required: true,
        label:'Title'
    },
    {
       id:3,
        name:'email',// e.trget.name reffers to this
        type:'email',
        placeholder:'michael@freightlink.com',
        errorMessage:'*Valid Email Required',
        required: true,
        label:'Email'
    },
    {
        id:4,
        name:'mobile',
        type:'text',
        placeholder:'+27 82 634 1038',
        errorMessage:'*Password not matching',
        required: true,
        label:'Mobile'
      },
      {
        id:5,
        name:'username',
        type:'text',
        placeholder:'michael@freightlink.com',
        errorMessage:'enter user name',
        required: true,
        label:'User Name'
      },
      {
        id:6,
        name:'password',
        type:'password',
        placeholder:'Password',
        errorMessage:'*Password should be 8-20 characters and contain numbers and letters',
        autoComplete:"on",
        required: true,
        pattern:"^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",
        label:'Password'
      }
  ]
 