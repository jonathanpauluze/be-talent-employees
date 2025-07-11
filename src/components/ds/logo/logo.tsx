import { classnames } from '@/utils/classnames'
import logo from '@/assets/logo.svg'

type LogoProps = {
  className?: string
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <img
      src={logo}
      data-testid="logo"
      className={classnames(className)}
      alt=""
    />
  )
}
