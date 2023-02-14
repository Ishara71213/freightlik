//content
import {SideNavBarPortalContent} from '../content/SideNavBarPortalContent';
//components & styles
import {UserProfileHeader} from '../Header/UserProfileHeader'
import { UserProfileSideNav } from '../SideNav/UserProfileSideNav';
import { UserDetailForm } from '../UserDetailForm/UserDetailForm';
import styles from './UserProfilePortal.module.css'

//hooks
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//firebase
import { onAuthStateChanged, signOut} from 'firebase/auth';
import {auth} from '../../../Firebase-config';

export const UserProfilePortal = () => {

  const [user,setUser]=useState('nouser');
  const [userId,setUserId]=useState(null);

  const navigate=useNavigate();

//--------------------------data base functions------------------
  onAuthStateChanged(auth,(currentUser)=>{
  currentUser && setUser(currentUser.displayName);
  currentUser && setUserId(currentUser.uid);
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
        
        <div className={styles.profilePageBody}>
          <div className={styles.portalSideNav}><UserProfileSideNav  logoutFn={logout} navBarList={SideNavBarPortalContent}/></div>
          <div className={styles.sideScroll}><UserDetailForm userId={userId}/></div>
        </div>
        
      </div>
  )
}
