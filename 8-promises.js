//promises have dedicated functions for failer and success instead of using callback argument patterns
const doWorkPromises = new Promise ((resolve, reject) => {
    setTimeout(() => {
        //resolve('success')
        reject('fail')
    },1000)
})

//we can use then (success) and catch (failur) functions for each response type instead of checking wether a specific callback object exists
doWorkPromises.then((result) =>{
    console.log(result)
}).catch((error) =>{
    console.log(error)
})

// --------------------------------

//basic callback pattern
//callbacks rely on argument position to determine if there was and error or result.
const doWorkCallBack = (callback) => {
    setTimeout(() => {
        //callback('this is my error', undefined)
        callback(undefined, [1, 2, 3])
    }, 2000)
}

doWorkCallBack((error,result) => {
    if (error){
        return console.log(error)
    }
    console.log(result)
})

// --------------- Promise chaining tutorial ---------------

// create a promise
const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

// nested promises (promise calling another promise)
add(1,1).then((sum) => {
    console.log(sum)

    add(1,sum).then(sum2 => {
        console.log(sum2)

    }).catch((e) => {
        console.log(e)
    })
}).catch((e) => {
    console.log(e)
})

// alternative to the nested promise (messy) is using promise chaining
// return our promise to the next callback
// **** Promise Chaining ****
add(2,2).then((sum) => {
    console.log(sum)
    return add(sum, 2) // <-- 2nd promise
}).then((sum2) => { 
    console.log(sum2) //< -- 2nd promise body
}).catch((e) => {
    console.log(e)
})
