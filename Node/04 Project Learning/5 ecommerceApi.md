- [Morgan Package](https://www.npmjs.com/package/morgan)

- we use above path inorder to excess package.

- [validator] packege
- to write line to validate schema things

```js
 validate: {
      validator: validator.isEmail,
      message: 'please provide valid email',
},
```

- to update user we have two method one is by find one and update
- and antoher is using = method like this
  user.name = name
  user.email = email
  and user.save();

but remeber this user .save method create issue because is pass through the pre save password method and it again hash and update the password so my password will changes.
to remove this issue we need to check this condition and if does not change then return the method from the pre save password method
like this

```js
UserSchema.pre('save', async function () {
  // console.log(this.modifiedPaths());
  // console.log(this.isModified('name'));
  if (!this.isModified('password')) return
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})
```

```js
//to give 1 review by user per 1 product
ReviewSchema.index({ product: 1, user: 1 }, { unique: true })
```

populate method:- we use this method in order to get more information along with id

- for ex we are requesting for review and as we know along with review we also get product id and user id so i can request from the mongodb to get more information of the user id or product id like this way

```js
const getAllReviews = async (req, res) => {
  const reviews = await Review.find({}).populate({
    path: 'product',
    select: 'name company price',
  })

  res.status(StatusCodes.OK).json({ reviews, count: reviews.length })
}
```

### mongodb virtuals

- In MongoDB, virtuals are fields that are not actually stored in the database but are computed on the fly from other fields. They are called "virtual" because they do not exist as actual properties of the documents stored in the database.

- or you can think virtuas as a property which does not exist in databasee, it exist only logical

- Virtual fields can be used to compute derived values or to present data in a different format from how it is stored in the database. They are defined using virtual getters and setters in the schema definition of a MongoDB collection.

- For example, suppose you have a collection of products with a "price" field and you want to calculate the sales tax on each product. You can define a virtual field called "tax" that computes the sales tax based on the price field.

- another example of this let suppose you have ecomm website where you have connection of every review with user and the object using populate method but in case of the if you want all review of perticular product so such connection does not exist in that case we use mongoose virtuals

```js
 { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
```

- first you need to write this thing in the the breack of timestamp to except the virtuals
- and we add this in product model to get all review of perticular product

```js
productSchema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'product',
  justOne: false,
  match: { rating: 5 },
})
```

- we can also set another route for this where we pass the product id and use that product id and use find method on all the review that have that product id

### remove reviews

- let suppose if you are removing some product from the database that it is not worth it to not remove the review assosiated with it.
- so the movement we are removing the product we also need to remove all the review assosiated with it.
- so to deal with that we first remove all the review assosiate with that product and then delete the that product

```js
ProductSchema.pre('remove', async function (next) {
  await this.model('Review').deleteMany({ product: this._id })
})
```
