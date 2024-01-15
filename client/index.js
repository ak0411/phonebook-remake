import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import 'Assets/custom.scss'
import App from 'Components/App'
import ErrorBoundary from 'Components/ErrorBoundary'

import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')
const root = createRoot(container)

const refresh = () => root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </BrowserRouter>,
)

refresh()

if (module.hot) {
  module.hot.accept()
}
