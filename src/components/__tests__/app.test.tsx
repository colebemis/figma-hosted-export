import {render} from '@testing-library/react'
import React from 'react'
import App from '../app'

declare global {
  namespace NodeJS {
    interface Global {
      onmessage: any
    }
  }
}

test('renders without crashing', async () => {
  global.onmessage = null
  render(<App />)
})
