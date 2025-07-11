import { Logo } from '@/components/ds/logo'
import styles from './header.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <Logo className={styles.logo} />
    </header>
  )
}
