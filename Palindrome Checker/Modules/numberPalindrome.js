export function numberPalindrome(num) {

    let temp = num
    let rev = 0
    let digit = ""
    const original_num = num
    while (temp > 0) {
        digit = temp % 10
        rev = rev * 10 + digit
        temp = Math.floor(temp / 10)
    }

    if(original_num===rev){
        return true
    }
}
