import React from 'react'
import './App.css'
import Main from './views/Main'
import { AppStorage } from './store/AppStorage'

const appStore = new AppStorage()

const App = () => {
  return (
    <div className="App">
      <Main store={appStore} />
    </div>
  )
}

export default App
