import styles from '@/styles/Home.module.scss'

import { blanketIcon } from '@/assets'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.app}>
      <Image src={blanketIcon} alt='' />
    </div>
  )
}
