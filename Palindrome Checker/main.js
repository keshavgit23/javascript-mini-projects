import { numberPalindrome } from "./Modules/numberPalindrome.js"
import { stringPalindrome } from "./Modules/stringPalindrome.js"
import { checkNumber, checkString } from "./Modules/checkPhrase.js"
import { openToggle } from "./Modules/sidebar.js"
import { loadHistory } from "./apis/loadHistory.js"
import { clearHistory } from "./apis/clearHistory.js"


openToggle()
window.onload = function () {
  loadHistory()
}
window.onload = function () {
  clearHistory()
}


let get_btn = document.querySelector(".btn")
console.log(get_btn)
let output = document.querySelector(".showResult")

get_btn.addEventListener("click", async () => {

  let val = document.querySelector(".input").value

  if (!val.trim()) {
    output.style.display = "block"
    output.style.color = "red"
    output.textContent = "Value can't be empty!"
    setTimeout(() => {
      output.style.display = "none"
    }, 3000)
  } else if (val < 0) {
    output.style.display = "block"
    output.style.color = "red"
    output.textContent = "Value cam't be negative!"
    setTimeout(() => {
      output.style.display = "none"
    }, 3000);
  } else {
    try {
      const res = await fetch("https://javascript-mini-projects-kwpq.onrender.com/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ input: val })
      })
      // const response = res.text()
      // console.log(response)
      const data = await res.json()
      //res.json() always returns object
      console.log(data)

      if (!res.ok) {
         console.log("Error: ", data)
        throw new Error("Server error!")
      }
      // const data = await res.json() //res.json() always returns object
      // console.log(data)

      const input = data.data.text //extract actual input value
      // console.log(input)

      if (!isNaN(input)) {
        let input_num = Number(input)
        let check_num = numberPalindrome(input_num)
        checkNumber(check_num, input_num)
      } else {
        let lower = input.toLowerCase()
        let check_str = stringPalindrome(lower)
        checkString(check_str, input)
      }
    } catch (err) {
      console.log("Error:", err)
    }
  }

  loadHistory()
})
