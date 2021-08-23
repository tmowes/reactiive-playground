import React from 'react'

import AppSrc from './src'

import * as Sentry from '@sentry/react-native'

Sentry.init({
  dsn: 'https://0aa7320538eb490bbe68745d24daf873@o571707.ingest.sentry.io/5917951',
})

export default function App() {
  return <AppSrc />
}
