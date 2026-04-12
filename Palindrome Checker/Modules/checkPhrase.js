let resDiv = document.querySelector(".showResult")

export function checkString(str,original_num){
    if(str===true){
        resDiv.style.color = "purple"
        resDiv.textContent = `"${original_num}" string is a Palindrome`
    }else{
        resDiv.style.color = "red"
        resDiv.textContent = `"${original_num}" string is not a Palindrome`
    }
}

export function checkNumber(num,original_str){
    if(num===true){
        resDiv.style.color = "purple"
        resDiv.textContent = `"${original_str}" is a Palindrome Number`
    }else{
        resDiv.style.color = "red"
        resDiv.textContent = `"${original_str}" is not a Palindrome Number`
    }
}