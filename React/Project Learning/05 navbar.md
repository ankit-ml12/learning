### change height of navbar in mobile

-use following code to access height and update its value

````js
const linksHeight = linksRef.current.getBoundingClientRect().height
   console.log(linksHeight)
   if (showlink) {
     linksRef.current.style.height = `${linksHeight}`
     ```
````
