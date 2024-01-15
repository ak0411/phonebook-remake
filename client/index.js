import React from 'react'
import ReactDOM from 'react-dom/client'

import 'Assets/custom.scss'
import App from 'Components/App'

const refresh = () => ReactDOM.createRoot(document.getElementById('root')).render(<App />)

refresh()

if (module.hot) {
  module.hot.accept()
}
