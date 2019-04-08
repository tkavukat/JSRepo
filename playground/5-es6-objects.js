//Object property shothand

const name = 'Andrew'
const userAge = 27

const User={
    name,
    age: userAge,
    location: 'Odenton MD'
}

console.log(User)

// object destructuring
const product = {
    label: 'Red noebook',
    price: 3,
    stock: 203,
    salePrice: undefined,
    rating: 4.2
}

// const label = product.label
// const stock = product.stock

const {label: productLabel,stock, rating=3} = product // rename the variable at global scope, default value if there is no propert within the object

console.log(stock)
console.log(productLabel)
console.log(rating)

const transaction = (type,{ label, stock}) => {
    console.log(type, label, stock)
}
transaction('order',product)