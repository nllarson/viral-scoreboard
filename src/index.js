import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import Reboot from 'material-ui/Reboot'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

import registerServiceWorker from './registerServiceWorker'

const theme = createMuiTheme()

const loadApp = Component => {
  return (
    <MuiThemeProvider theme={theme}>
      <Reboot />
      <Router>
        <Component />
      </Router>
    </MuiThemeProvider>
  )
}

ReactDOM.render(loadApp(App), document.getElementById('root'))
registerServiceWorker()
