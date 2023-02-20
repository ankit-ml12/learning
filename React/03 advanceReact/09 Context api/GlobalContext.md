#### Setup Global Context

final code in the repo under z-assets

- create new VITE project

```sh
npm create vite@latest global-context -- --template react
```

- install and start the project

```sh
npm install && npm run dev
```

-create context.jsx

- setup a global context - GlobalContext in context.jsx
- setup a component (AppContext) with one state value in context.jxs
- return GlobalContext.Provider from AppContext
- wrap then entire application (main.jsx) - children prop "gotcha"
- setup a custom hook
- access in App.jsx
- log result

---

- this is how all three file look like context, main, and App

```js
//context.jsx
import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)
const AppContext = (props) => {
  const [name, setName] = useState('peter')

  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {props.children}
    </GlobalContext.Provider>
  )
}
export default AppContext

// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AppContext from './context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </React.StrictMode>
)

// app.jsx
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useGlobalContext } from './context'

function App() {
  const [count, setCount] = useState(0)
  const { name } = useGlobalContext()
  console.log(name)
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App

```
