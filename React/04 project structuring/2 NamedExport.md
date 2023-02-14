#### Names export

- let suppose we create page folder to store all the componet relate to some thing
- and when we import every page in app.js then it mau create list of 100 file import line
- to avoid that we create index.jsx folder inside the page and then import all the component in this file
- and we only need to import pages now into the app.js instead of all the component

---

#### Project Structure - Named Exports

- only makes sense if you have quite a few files

- create Pages directory
- setup two components Home.jsx and About.jsx

- import both in the App.jxs

import Home from 'pathToFolder/Pages/Home';
import About from 'pathToFolder/Pages/About';

A lot of work/lines of code

- create index.jsx in pages

```js
import Home from './Home'
import About from './About'

export { Home, About }
```

in App.jsx

import {Home, About} from 'pathToFolder/Pages
