import { Header } from '@/ds/header'
import styles from './default-layout.module.scss'
import type { ReactNode } from 'react'

type DefaultLayoutProps = {
  children: ReactNode
}

export function DefaultLayout(props: Readonly<DefaultLayoutProps>) {
  const { children } = props

  return (
    <div className={styles.wrapper}>
      <Header />

      <main className={styles.container}>{children}</main>
    </div>
  )
}
