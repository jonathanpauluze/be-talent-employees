import { Typography } from './'

export default {
  title: 'Design System/Typography',
  component: Typography,
  tags: ['autodocs']
}

export const Heading1 = () => <Typography as="h1">Heading 1</Typography>

export const Heading2 = () => <Typography as="h2">Heading 2</Typography>

export const Heading3 = () => <Typography as="h3">Heading 3</Typography>

export const HeadingWithCustomClass = () => (
  <>
    <style>
      {`
        .custom {
          color: green;
          font-style: italic;
          background-color: #ccc;
        }
      `}
    </style>
    <Typography as="h3" className="custom">
      Heading with custom class
    </Typography>
  </>
)
