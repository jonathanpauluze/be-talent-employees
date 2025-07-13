import type { ReactNode } from 'react'

export type TableColumn<T> = {
  key: keyof T
  label: string
  className?: string
  render?: (value: T[keyof T], row: T) => ReactNode
  mobileVisible?: boolean
  width?: string
}

export interface TableProps<T> {
  columns: TableColumn<T>[]
  data: T[]
  rowKey: (row: T) => string | number
  className?: string
}
