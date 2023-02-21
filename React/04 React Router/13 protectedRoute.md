#### Protected Route

- first of all try to put protected route like this and then modified your protectedRoute

```js
<Route
  path="dashboard"
  element={
    <ProtectedRoute user={user}>
      <Dashboard user={user} />
    </ProtectedRoute>
  }
/>
```

- App.js

```js
<Route
  path="dashboard"
  element={
    <ProtectedRoute user={user}>
      <Dashboard user={user} />
    </ProtectedRoute>
  }
/>
```

- ProtectedRoute.js

```js
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children, user }) => {
  if (!user) {
    return <Navigate to="/" />
  }
  return children
}

export default ProtectedRoute
```
