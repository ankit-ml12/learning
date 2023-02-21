#### Products Page

- this is how we impliment single product page using useParam
- Products.js

```js
import { Link } from 'react-router-dom'
import products from '../data'
const Products = () => {
  return (
    <section className="section">
      <h2>products</h2>
      <div className="products">
        {products.map((product) => {
          return (
            <article key={product.id}>
              <h5>{product.name}</h5>
              <Link to={`/products/${product.id}`}>more info</Link>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Products
```

#### Single Product

- SingleProduct.js

```js
import { Link, useParams } from 'react-router-dom'
import products from '../data'
const SingleProduct = () => {
  const { productId } = useParams()
  const product = products.find((product) => product.id === productId)
  const { image, name } = product

  return (
    <section className="section product">
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to="/products">back to products</Link>
    </section>
  )
}

export default SingleProduct
```
