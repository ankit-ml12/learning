### NPM

1. When we install node we automatically install NPM {node package manager}.
2. To start
3. Step by step use:- npm init
4. Or default use:- npm init -y
5. To install package globally use npm install -g <package name>
6. We use package.json file if our node module deleted
7. Then we just write npm install our node module automatically download required dependency from 8. package.json file
   Package.json

#### Three benefits of Node

1. Reuse our own code in other project
2. Use code written by other developer
3. Share our own solution with other developer

### Name

1. Packege
2. dependenct
3. Module

### Nodemon most used dependency

-It restart over code at every change it save us to write code(node filename) again and again

- To install
- Npm i nodemon -D
- Or
- Npm i nodemon –save-dev
- This extra tag is to add them in dev dependency
- And why we add :- because there is no use of there on server we are using them for normal purpose we don’t want to push them on the server

### script in package

- if you want to save your self from writing node package_name again and again
- just add script in packege.json like this
- "start" :'node app.js'
- now instead of node app.js you only need to write npm start (for dependecy)
- "dev" : nodemon app.js replace with npm run dev (for web dependency)

# more learn from here

https://nodesource.com/blog/the-basics-of-package-json
