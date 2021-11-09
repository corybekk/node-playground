const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'Cory'
data.age = 31

fileJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json',fileJSON)


// const dataBuffer = fs.readFileSync('1-json.json') //read file
// const dataJSON = dataBuffer.toString() //turn buffer into string
// const data = JSON.parse(dataJSON) //turn string into js object
// console.log(data.title)

// const book = {
//     title: 'book1',
//     author: 'cory bekker'
// }

// const bookJSON = JSON.stringify(book) //turn js obj into JSON
// console.log(bookJSON)

// const bookPARSE = JSON.parse(bookJSON) //turn JSON into js object
// console.log(bookPARSE.author)

// fs.writeFileSync('1-json.json',bookJSON) //create and write to json file
