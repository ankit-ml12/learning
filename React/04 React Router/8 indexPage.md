#### Index Routes

- Index routes render in the parent routes outlet at the parent route's path.
- Index routes match when a parent route matches but none of the other children match.
- Index routes are the default child route for a parent route.
- Index routes render when the user hasn't clicked one of the items in a navigation list yet.
- we use index page for home content

```js
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Error from './pages/Error'
import SharedLayout from './pages/SharedLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<SharedLayout />}>
          //this is how you have to give index
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Products" element={<Products />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
```
