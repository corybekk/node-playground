
// async function will always return a promise
const doWork = async () => {
   return 'success' //promise fufilled
   throw new Error ('failed') // this is how we reject the promise in a async function
}

//returns a promise

console.log(doWork()) 

// implement doWork as a promise

doWork().then((result) => {
    console.log('doWork result:', result)
}).catch((e) => {
    console.log(e)
})

// add was copied in so we can use it in our test below
const add = (a, b) => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject('numbers must be positive')
            }
            resolve(a + b)
        }, 2000)
    })
}

// create a async function and then use the await feature.

const doWork2 = async () => {
    const sum = await add(1, 99) // we use the await operator when working with a promise. This is still runs asynch
    const sum2 = await add(1, sum)
    const sum3 = await add(1, sum2)
    return sum3 // this makes it easier to read! We also have access to all 3 sum variables in the same scope! unclike promise chaining
}

doWork2().then((result) => {
    console.log('doWork2 result:', result)
}).catch((e) => {
    console.log(e)
})