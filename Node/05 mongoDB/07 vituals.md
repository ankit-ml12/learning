#### mongoose vituals

- we use mongoose vituals because let suppose if i want review i can easily get which user give this review and on which product and reviews are created after the product and user
- so we can attach using schema
- but let suppose i want review assosiated with a perticular product then i need to thinck about other way

- we just add this line in product schema

```js
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
)

ProductSchema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'product',
  justOne: false,
  // match: {rating: 5}
})
```

> another approch we can find all product which has a perticular product id

- like this

```js
const getSingleProductReviews = async (req, res) => {
  const { id: productId } = req.params
  const reviews = await Review.find({ product: productId })
  res.status(StatusCodes.OK).json({ count: reviews.length, reviews })
}
```
