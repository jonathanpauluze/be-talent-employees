import { useState } from 'react'
import { Icon } from '../icon'
import { Typography } from '../typography'

import { useIsMobile } from '@/hooks/use-is-mobile'
import styles from './table.module.scss'
import type { TableProps } from './'

export function Table<T>({
  columns,
  data,
  rowKey,
  className = ''
}: Readonly<TableProps<T>>) {
  const [openRows, setOpenRows] = useState<Set<string | number>>(new Set())
  const isMobile = useIsMobile()

  const toggleRow = (key: string | number) => {
    setOpenRows((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(key)) {
        newSet.delete(key)
      } else {
        newSet.add(key)
      }
      return new Set(newSet)
    })
  }

  const handleToggleRow = (key: string | number) => {
    if (!hasHiddenColumns) return

    toggleRow(key)
  }

  const visibleMobileColumns = columns.filter(
    (col) => col.mobileVisible !== false
  )
  const hiddenMobileColumns = columns.filter(
    (col) => col.mobileVisible === false
  )

  const hasHiddenColumns = hiddenMobileColumns.length > 0

  if (!data.length) {
    return (
      <div className={styles.wrapper} data-testid="empty-state">
        <div className={styles.empty}>
          <Typography as="p">Nenhum dado encontrado.</Typography>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      {!isMobile ? (
        <div className={styles.desktopOnly}>
          <table className={`${styles.table} ${className}`}>
            <thead>
              <tr>
                {columns.map((col) => (
                  <th
                    key={String(col.key)}
                    className={col.className}
                    style={{ width: col.width }}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row) => {
                const key = rowKey(row)
                return (
                  <tr key={key}>
                    {columns.map((col) => (
                      <td
                        key={String(col.key)}
                        className={col.className}
                        style={{ width: col.width }}
                      >
                        {col.render
                          ? col.render(row[col.key], row)
                          : String(row[col.key])}
                      </td>
                    ))}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className={styles.mobileOnly}>
          <div className={styles.mobileHeader} role="row">
            {visibleMobileColumns.map((col) => (
              <div
                key={String(col.key)}
                className={styles.headerCell}
                role="columnheader"
                style={{ maxWidth: col.width }}
              >
                {col.label}
              </div>
            ))}
          </div>
          <div className={styles.mobileBody}>
            {data.map((row) => {
              const key = rowKey(row)
              const isOpen = openRows.has(key)

              return (
                <div key={key} className={styles.mobileRow}>
                  <button
                    type="button"
                    className={styles.mobileRowToggle}
                    data-testid="mobile-toggle"
                    onClick={() => handleToggleRow(key)}
                    aria-expanded={isOpen}
                    aria-controls={`mobile-details-${key}`}
                  >
                    <div className={styles.mobileSummary}>
                      {visibleMobileColumns.map((col) => (
                        <div
                          key={String(col.key)}
                          className={styles.cellContent}
                          style={{ maxWidth: col.width }}
                        >
                          {col.render
                            ? col.render(row[col.key], row)
                            : String(row[col.key])}
                        </div>
                      ))}

                      {hasHiddenColumns ? (
                        <Icon
                          name={isOpen ? 'chevron-up' : 'chevron-down'}
                          size="lg"
                        />
                      ) : null}
                    </div>
                  </button>
                  {isOpen && (
                    <div
                      id={`mobile-details-${key}`}
                      className={styles.mobileDetails}
                      data-testid="mobile-toggle-content"
                      role="region"
                      aria-labelledby={`mobile-toggle-${key}`}
                    >
                      {hiddenMobileColumns.map((col) => (
                        <div key={String(col.key)} className={styles.detailRow}>
                          <Typography as="p" className={styles.detailLabel}>
                            {col.label}
                          </Typography>
                          <Typography className={styles.detailValue}>
                            {col.render
                              ? col.render(row[col.key], row)
                              : String(row[col.key])}
                          </Typography>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
