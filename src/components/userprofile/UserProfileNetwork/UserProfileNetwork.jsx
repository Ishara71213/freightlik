//contents
import { SideNavBarNetworkContent } from '../content/SideNavBarNetworkContent';


//components & styles
import {UserProfileHeader} from '../Header/UserProfileHeader'
import { UserProfileSideNav } from '../SideNav/UserProfileSideNav';
import styles from './UserProfileNetwork.module.css';
//hooks
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//firebase
import { onAuthStateChanged, signOut} from 'firebase/auth';
import {auth} from '../../../Firebase-config';


export const UserProfileNetwork= () => {
  
  const [user,setUser]=useState('nouser');
  const navigate=useNavigate();

//--------------------------data base functions------------------
  onAuthStateChanged(auth,(currentUser)=>{
  currentUser && setUser(currentUser.displayName);
})

const logout=async ()=>{
  try{
    await signOut(auth)
    navigate('/');
  }catch (error){
    console.log(error.message)
  }
  console.log("user Sign out")
};

//--------------------------------------------------------------
  return (
    <div className={styles.profileContainer}>
      <div className={styles.portalHeader}><UserProfileHeader  userName={user} logoName='Portal'/></div>
      <div className={styles.portalSideNav}><UserProfileSideNav  logoutFn={logout} navBarList={SideNavBarNetworkContent}/></div>
        
        {/* <UserProfileHeader userName={user} />
        <UserProfileSideNav logoutFn={logout} /> */}
        
    </div>
  )
}
