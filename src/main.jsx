import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/App'
import './index.css'
import { RecoilRoot } from 'recoil'

import { CustomLayout } from './components/CustomLayout'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <CustomLayout>
        <App />
      </CustomLayout>
    </RecoilRoot>
  </React.StrictMode>,
)
