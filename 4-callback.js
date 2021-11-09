
// this is a async callback function. it is added to the call back queue and wont exeucte until the call stack is empty
setTimeout(() => {
    console.log('two seconds are up')
}, 2000);

//this is a synchrones callback (forEach)
const names = ['a', 'b', 'c']
names.forEach((name)=> {
    console.log(name)
})

// call back pattern
const geoCode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitute: 0
        }
        callback(data)
    }, 2000);
}

geoCode('Las Vegas', (data) => {
    console.log(data)
})

// another example using async callback 
const add = (num1,num2,callback) =>{
    setTimeout(() =>{
        callback(num1 + num2)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})