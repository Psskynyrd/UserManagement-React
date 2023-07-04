import { useState } from 'react'

import { CustomLayout } from '../components/CustomLayout'
import { UserManagement } from './user_management'

function App() {

  return (
    <>
      <div className="container">
        <UserManagement />
      </div>
    </>
  )
}

export default App
