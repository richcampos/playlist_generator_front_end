import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import { App } from './App'

ReactDOM.render(<App />, document.getElementById('app'))
