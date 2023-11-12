import React from 'react'
import styles from './topbar.module.scss'
function TopBar() {
  return (
    <div className={styles.topbarContainer}>
      <div className={styles.topbarLeft}>
        <span>Project Management Tool</span>
      </div>
      <div className={styles.topbarRight}>
      <button className="btn-secondary">Logout</button>
      </div>
    </div>
  )
}

export default TopBar