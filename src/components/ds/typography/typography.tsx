import './typography.modules.scss'
import { classnames } from '@/utils/classnames'

interface TypographyProps {
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  children: React.ReactNode
  weight?: 'regular' | 'medium'
  className?: string
}

export const Typography = ({
  as = 'p',
  children,
  weight,
  className = ''
}: TypographyProps) => {
  const Tag = as
  return (
    <Tag
      className={classnames('typography', className, {
        [`typography--${as}`]: !!as,
        [`typography--${weight}`]: !!weight
      })}
    >
      {children}
    </Tag>
  )
}
