let newDiv = document.getElementById("resultDiv")

function primeCheck(num) {
    if (num <= 1) return false

    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}
function showMessage(num, original_num) {

    if (num === true) {
        newDiv.textContent = `${original_num} is a Prime Number`
    } else {
        newDiv.textContent = `${original_num} is not a Prime Number`
    }
}

function edgeCases(num) {

    if (!num) {
        alert("Please enter a number!")
        return null
    }
    else if (num <= 0) {
        alert("Number can't be negative or zero! Retry")
        return null //improved
    } else if (num > 100) {
        alert("Number must be less than 100! Retry")
        return null
    } else {
        return num
    }
}

document.querySelector(".check-btn").addEventListener("click", () => {
    let val = document.querySelector(".input").value
    let validNum = edgeCases(val)
    if (validNum === null) {
        return
    } else {
        let result = primeCheck(validNum)
        showMessage(result, validNum)
    }
})
