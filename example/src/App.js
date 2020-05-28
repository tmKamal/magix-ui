import React from 'react'

import { MagixButton } from 'magix-ui'
import 'magix-ui/dist/index.css'

const App = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '200px' }}>
      <MagixButton round inverse>Round</MagixButton>
      <MagixButton round >Round</MagixButton>
      <MagixButton round disabled={true}>Round</MagixButton>
      <MagixButton  inverse>Submit</MagixButton>
      <MagixButton  >Submit</MagixButton>
      <MagixButton  disabled={true}>Submit</MagixButton>
      <MagixButton  circle>+</MagixButton>
      <MagixButton  circle inverse>+</MagixButton>
      <MagixButton  circle inverse disabled={true}>+</MagixButton>
    </div>
  )
}

export default App
