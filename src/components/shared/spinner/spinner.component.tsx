import styles from './spinner.module.scss'

export function Spinner() {
  return (
    <div className={styles.spinner} role="status" aria-label="Carregando..." />
  )
}
