//content
import { SideNavBarPortalContent } from "../content/SideNavBarPortalContent";
//components & styles
import { UserProfileHeader } from "../Header/UserProfileHeader";
import { UserProfileSideNav } from "../SideNav/UserProfileSideNav";
import { UserDetailForm } from "../UserDetailForm/UserDetailForm";
import styles from "./UserProfilePortal.module.css";
import { UserSearch } from "../UserSearch/UserSearch";
//hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//firebase
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../Firebase-config";

export const UserProfilePortal = () => {
  const [user, setUser] = useState("nouser"); //current user
  const [userId, setUserId] = useState(null);

  const navigate = useNavigate();

  //--------------------------data base functions------------------
  //setting surrent user
  onAuthStateChanged(auth, (currentUser) => {
    currentUser && setUser(currentUser.displayName);
    currentUser && setUserId(currentUser.uid);
  });

  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
    console.log("user Sign out");
  };

  //--------------------------------------------------------------
  return (
    <div className={styles.profileContainer}>
      <div className={styles.portalHeader}>
        <UserProfileHeader userName={user} logoName="Portal" />
      </div>

      <div className={styles.profilePageBody}>
        <div className={styles.portalSideNav}>
          <UserProfileSideNav
            logoutFn={logout}
            navBarList={SideNavBarPortalContent}
          />
        </div>
        <div className={styles.sideScroll}>
          <div className={styles.userSearchContainer}>
            <UserSearch />
          </div>
          <div className={styles.userDetailFormContainer}></div>
          <UserDetailForm userId={userId} />
        </div>
      </div>
    </div>
  );
};
