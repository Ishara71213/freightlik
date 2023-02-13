import {UserProfileHeader} from './UserProfileHeader'
import { UserProfileSideNav } from './UserProfileSideNav';
import styles from './UserProfile.module.css';

export const UserProfile = () => {
  return (
    <div className={styles.profileContainer}>
        <UserProfileHeader/>
        <UserProfileSideNav/>
    </div>
  )
}
