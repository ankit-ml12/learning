#### no of way to import and export file

- we use this only and only for big projext not for small
- So we let suppose i wan't to break component navbar because it contain many files
- so we just create navabar main folder and another navabar.jsx inside it
- it will not good because when you import you have to write like this /navbar/navbar
- So to avoid this thing we will create index.jsx file and export this second navbar forlder from the index.jsx file
- now you it work with just /navbar

---

#### Project Structure - Default Export

There are more options

Normally somewhere in the src

/components/componentName.jsx
/screens/componentName.jsx

- create navbar folder

  - setup Navbar.jsx (component)
  - Navbar.css (styles)

- import in App.jsx

import Final from 'pathToFolder/Navbar/Navbar'

- first solution rename to index.jsx(entry point)

Works but eventually too many index tabs :):):)

- rename back to Navbar.jsx
- create index.jsx

```js
export { default } from './Navbar'
```
