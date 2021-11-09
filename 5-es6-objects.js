//object propety shorthand

const name = 'Cory'
const userAge = 31

const user = {
    //name: name,
    name, // <-- we dont have to put name:name if the property has the same name as the value name
    age: userAge,
    location: 'Santa Rosa California'
}

console.log(user)


//object destructuring 

const product = {
    label: 'red notebook',
    price: 3,
    stock: 201,
    salesPrice: undefined
}

// const label = product.label
// const stock = product.stock

const {label:productLabel, stock, rating = 5} = product // desctructuring. 3 examples.
console.log(productLabel) //<-- we can rename one of the properties by using semicolon "lable:productLabel"
console.log(stock)
console.log(rating) //not a property. will print undefined unless we assign a value like above.

//destructur a object in a function parameter 
const transaction = (type, {label, stock}) => {
    console.log(type, label, stock) 
}
transaction('food', product)

//set default value of oject when no object was passed

const transaction1 = (type, {label, stock = 0} = {}) => { //we can also set default values to the object
    console.log(type, label, stock)
}
transaction1('food')

