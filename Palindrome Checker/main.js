import { numberPalindrome } from "./Modules/numberPalindrome.js"
import { stringPalindrome } from "./Modules/stringPalindrome.js"
import { checkNumber, checkString } from "./Modules/checkPhrase.js"
import {openToggle} from "./Modules/sidebar.js"

let get_btn = document.querySelector(".btn")
let errDiv = document.querySelector(".showResult")

get_btn.addEventListener("click",function() {
  
    let val = document.querySelector(".input").value

    if(val===""){
        errDiv.textContent = `Enter a word please!`
        errDiv.style.display = "block"
        setTimeout(()=>{
            errDiv.style.display = "none"
        },3000)
    }else if(val<0){
        errDiv.textContent = "Value can't be negative"
        errDiv.style.display = "block"
        setTimeout(() => {
            errDiv.style.display = "none"
        }, 3000);
    }else if (!isNaN(val)) {
        let input_num = Number(val)
        let check_num = numberPalindrome(input_num)
        checkNumber(check_num, val)
    } else {
        const lower = val.toLowerCase()
        let check_str = stringPalindrome(lower)
        checkString(check_str, val)
 }
})