import { Logo } from './'

export default {
  title: 'Design System/Logo',
  component: Logo
}

export const Default = () => <Logo />

export const WithCustomClass = () => (
  <>
    <style>
      {`
        .custom {
          witdh: 500px;
          height: 500px;
          object-fit: contain;
          background-color: #FFF;
        }
      `}
    </style>

    <Logo className="custom" />
  </>
)
