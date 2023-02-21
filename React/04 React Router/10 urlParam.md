#### url param

- we use in order to show different different product under parent element
- its code look like this
- we use useParam from react to get the value of url from the website on this page
- so we can show the specific product according to url

```js
 <Route path="Products" element={<Products />} />
          <Route path="Products/:productId" element={<SingleProduct />} />


import { Link, useParams } from 'react-router-dom'

const SingleProduct = () => {

  return (
    <section className="section product">
      <h2>single product</h2>
    </section>
  )
}

export default SingleProduct
```
