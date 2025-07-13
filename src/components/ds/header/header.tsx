import { Logo } from '@/components/ds/logo'
import styles from './header.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Logo className={styles.logo} />
      </div>
    </header>
  )
}
