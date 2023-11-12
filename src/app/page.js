import Image from 'next/image'
import styles from './page.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
     <div>
      <h1>Project Management</h1>
      <h3>Home Page</h3>
      <Link href="/Projects">Go to Projects</Link>
     </div>
    </main>
  )
}
