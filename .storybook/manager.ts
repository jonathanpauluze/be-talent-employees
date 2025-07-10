import { addons } from '@storybook/manager-api'
import { themes } from '@storybook/theming'

addons.setConfig({
  theme: {
    ...themes.dark,
    brandTitle: 'BeTalent',
    brandImage: '/logo.svg',
    brandUrl: 'https://betalent.tech/'
  }
})
