import { useState, useEffect } from 'react'
import { Icon } from '@/components/ds/icon'
import { classnames } from '@/utils/classnames'
import { useDebouncedValue } from '@/hooks/use-debounced-value'
import styles from './search.module.scss'

type SearchProps = {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
  debounceTime?: number
}

export const Search = ({
  value,
  onChange,
  placeholder = 'Pesquisar',
  className,
  debounceTime = 0
}: SearchProps) => {
  const [internalValue, setInternalValue] = useState(value)
  const debouncedValue = useDebouncedValue(internalValue, debounceTime)

  useEffect(() => {
    if (debounceTime) {
      onChange(debouncedValue)
    }
  }, [debouncedValue])

  useEffect(() => {
    setInternalValue(value)
  }, [value])

  const handleChange = (value: string) => {
    if (debounceTime) {
      setInternalValue(value)
    } else {
      onChange(value)
    }
  }

  return (
    <div className={classnames(styles.wrapper, className)}>
      <input
        type="text"
        value={internalValue}
        placeholder={placeholder}
        onChange={(event) => handleChange(event.target.value)}
        className={styles.input}
      />
      <Icon name="search" size="md" className={styles.icon} />
    </div>
  )
}
