import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import Hello from './Hello'

const Welcome = () => {
  return (
    <div className="container">
      <h1>Hello World Welcome to my Rails react app</h1>
      <Hello/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('welcome'))
root.render(
    <React.StrictMode>
        <Welcome/>
    </React.StrictMode>
    
)
export default Welcome
