#### link and outlet

```js
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="section">
        <Outlet />
      </section>
    </>
  )
}
export default Home
```

- if we use the substructure like nested routes then home is visible in everypage
- To avoid that we use
- we use link and outlet function
- where around the outlook is the content of this page and outlook is use for content of child route
