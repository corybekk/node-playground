// const square = function(x){
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x

// console.log(square(3))

const event = {
    name: 'bday',
    guestList: ['cory', 'zoe', 'bubba'],
    printGuestList () {
        console.log('guest list for ' + this.name)

        this.guestList.forEach((guest) => { // use arrow function when you dont want it to bind to its own 'this' value and instead want it to bind to the context of where it was created
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()