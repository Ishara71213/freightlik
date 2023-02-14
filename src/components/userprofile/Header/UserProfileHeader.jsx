import styles from './UserProfileHeader.module.css'
import {Logo} from '../../Logo';
import {TbSpeakerphone} from 'react-icons/tb'
import {FaUserCircle} from 'react-icons/fa'

export const UserProfileHeader = (props) => {

  return (
    <div className={styles.container}>
      <Logo subLine={props.logoName} color='#878F9A' width={200} dotColor='#61c4b4'/>
      <div className={styles.announcementWrapper}>
         <TbSpeakerphone  size={40}  color='#61c4b4'/>
         <div className={styles.announcement}> Join our Affiliate Program and earn a minimum of $500 per referral.
         <span> Learn More</span></div>
      </div>
      <div className={styles.userProfile}>
          <div className={styles.userName}> Welcome {props.userName}</div>
          <div className={styles.profileImgWrapper} ><FaUserCircle size={60} color='#61c4b4' /></div>
      </div>
    </div>
  )
}
