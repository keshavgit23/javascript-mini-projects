import { numberPalindrome } from "./Modules/numberPalindrome.js"
import { stringPalindrome } from "./Modules/stringPalindrome.js"
import { checkNumber, checkString } from "./Modules/checkPhrase.js"
import { openToggle } from "./Modules/sidebar.js"
import { loadHistory } from "./apis/loadHistory.js"
import { clearHistory } from "./apis/clearHistory.js"


export const API_BASE_URL = window.location.hostname === "localhost" ? "http://localhost:5000" : "https://javascript-mini-projects-kwpq.onrender.com"

openToggle()
window.onload = function () {
  loadHistory()
}

let clearBtn = document.querySelector(".clear")
if (clearBtn) {
  clearBtn.addEventListener("click", () => {
    // const container = document.querySelector(".history")
    // container.innerHTML = "Cleared!"
    try {
      clearHistory()
    } catch (err) {
      console.error("Error to clear history!", err.message)
      // container.innerHTML = "Error clearing history"
    }

  })
}
let get_btn = document.querySelector(".btn")
// console.log(get_btn)
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
    output.textContent = "Value can't be negative!"
    setTimeout(() => {
      output.style.display = "none"
    }, 3000);
  } else {
    try {
      const res = await fetch(`${API_BASE_URL}/api/data`, {
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
        console.error("Backend Error:", data)
        throw new Error(data.error || "Server error!")
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
  input.value = ""
  loadHistory()
})


