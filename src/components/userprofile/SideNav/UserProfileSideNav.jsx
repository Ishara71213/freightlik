import styles from "./UserProfileSideNav.module.css";

import { NavLink } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

export const UserProfileSideNav = (props) => {
  return (
    <div className={styles.navContainer}>
      <nav className={styles.navigation}>
        {props.navBarList.map((item) => {
          return (
            <div className={styles.linkContainer} key={item.id}>
              <span className={styles.linkImgContainer}>{item.icon}</span>
              <NavLink className={styles.linkTextContainer} to={item.path}>
                {item.linkName}
              </NavLink>
            </div>
          );
        })}
        <div className={styles.linkContainer} onClick={props.logoutFn}>
          <span className={styles.linkImgContainer}>
            <FaSignOutAlt />
          </span>
          <span className={styles.linkTextContainer}>Log Out</span>
        </div>
      </nav>
    </div>
  );
};
