import { classnames } from '@/utils/classnames'
import logo from '@/assets/logo.svg'

type LogoProps = {
  width?: number
  height?: number
  alt?: string
  className?: string
}

export const Logo = ({
  className,
  width = 91,
  height = 34,
  alt = 'Logo da BeTalent'
}: LogoProps) => {
  return (
    <img
      src={logo}
      data-testid="logo"
      width={width}
      height={height}
      className={classnames(className)}
      alt={alt}
    />
  )
}
