let clearBtn = document.querySelector(".clear")
let clearResult = document.querySelector(".clear-result")
export async function clearHistory() {
    try {

        let res = await fetch("https://javascript-mini-projects-kwpq.onrender.com/api/clear", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        document.querySelector(".inputs").innerHTML = ""
        const response = await res.json()
        console.log(response)

        if (!res.ok) {
            clearResult.style.color = "red"
            clearResult.textContent = "No data to clear!"
            return
        }
        clearResult.style.color = "green"
        clearResult.textContent = "Data cleared successfully"
    } catch (err) {
        console.log("Error: ", err)
    }
}
