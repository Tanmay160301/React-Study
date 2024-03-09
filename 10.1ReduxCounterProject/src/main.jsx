// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux"
import { store } from './states/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* This means that the redux store is available for all the react components to use */}
    <App />
  </Provider>,
)
