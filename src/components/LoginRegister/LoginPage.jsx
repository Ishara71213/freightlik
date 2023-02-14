import './styles/LoginPage.css'
import {Logo} from '../Logo';
import { LoginForm } from './LoginForm';
import {FaLinkedin} from 'react-icons/fa'
import {LogoSet} from '../LogoSet';


export const LoginPage = () => {
  return (
    <div className='loginPage-container'>
      <div className='loginForm-Header'>
        <Logo subLine='Networks' color='#878F9A' width={200} dotColor='#61c4b4'/>
        <FaLinkedin size={40} color='#61c4b4'/>
      </div>
      <LoginForm/>
      <div className='loginPage-footer'>
          {
            LogoSet.map((item)=>{
              return <div className='loginPage-footer-logo' key={item.id}>
                 <Logo subLine={item.subLine} color={item.color} width={200} dotColor={item.dotColor}/>
              </div>
            })
          }
      </div>
      
      
    </div>
    
  )
}
