declare module '*.png'
declare module '*.jpg'

declare module '*.json' {
  const value: any
  export default value
}

// declare module '*.svg' {
//   import { FC } from 'react'

//   import { SvgProps } from 'react-native-svg'

//   const content: FC<SvgProps>
//   export default content
// }
