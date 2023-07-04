import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/App'
import './index.css'
import store from './stores/store'
import { Provider } from 'react-redux'

import { CustomLayout } from './components/CustomLayout'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <CustomLayout>
        <App />
      </CustomLayout>
    </Provider>
  </React.StrictMode>,
)
