import React from 'react'
import TopBar from '../TopBar'
import Sidebar from '../Sidebar'
import styles from '@/components/FixedLayout/fixedLayout.module.scss'
function FixedLayout({children}) {
  return (
   <>
   <TopBar/>
   <Sidebar/>
    <div className={styles.fixedLayoutContainer}>
      {children}
    </div>
   </>
  )
}

export default FixedLayout