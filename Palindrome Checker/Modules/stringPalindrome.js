// function stringPalindrome(str){
//     console.log(Array.from(str).reverse().joins(""))
// }

// let input_str = "racecar"
// let res = stringPalindrome(input_str)
// // console.log(res)

export function stringPalindrome(str){
   let rev_str = ""
   let original_str = str
    for(let i=str.length-1;i>=0;i--){
         rev_str+=str[i]
    }

    if(original_str===rev_str){
        return true
    }
}

// let input_str = "sys"
// let res = stringPalindrome(input_str)
// // console.log(re