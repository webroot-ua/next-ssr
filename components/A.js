import Link from "next/link"
import styles from '../styles/A.module.css'

export default function ({href, text}) {
  return (
    <Link href={href} legacyBehavior>
      <a className={styles.link}>{text}</a>
    </Link>
  )
}