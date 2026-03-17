console.log("Hello, World!")

let inc = document.body.querySelector(".incre")
let res = document.body.querySelector(".reset")
let dec = document.body.querySelector(".decre")

let counter = 0

let right = document.body.querySelector(".updateInc")
let left = document.body.querySelector(".updateDec")

function increment() {
    inc.addEventListener("click", () => {
        counter = counter + 1
        right.innerHTML = `<p class="clicks updateInc">Clicks On Increment: ${counter} </p>`
    })

    // inc.innerHTML = `<p class="clicks">Clicks On Increment: ${counter} </p>`
}
increment()

function reset() {
    res.addEventListener("click", () => {
        counter = 0
        right.innerHTML = `<p class="clicks updateInc">Clicks On Increment: ${counter} </p>`
        left.innerHTML = `<p class="clicks">Clicks On Decrement: ${counter}</p>`
    })
}
reset()

function decrement() {
    dec.addEventListener("click", () => {
        counter = counter - 1
        left.innerHTML = `<p class="clicks">Clicks On Decrement: ${counter}</p>`
    })

    // `<p class="clicks">Clicks On Decrement: ${counter}</p>`
}
decrement()
