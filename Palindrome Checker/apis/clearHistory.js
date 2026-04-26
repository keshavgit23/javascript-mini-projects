let clearBtn = document.querySelector(".clear")
let clearResult = document.querySelector(".clear-result")
export async function clearHistory() {
    try {
        clearBtn.addEventListener("click", async () => {
            let res = await fetch("http://localhost:3000/api/clear", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })

            let deleteInputs = document.querySelector(".inputs")
            deleteInputs.innerHTML = ""

            const response = await res.json()
            console.log(response)

            if (!res.ok) {
                clearResult.style.color = "red"
                clearResult.textContent = "No data to clear!"
                return
            }
            clearResult.style.color = "green"
            clearResult.textContent = "Data cleared successfully"
        })

    } catch (err) {
        console.log("Error: ", err)
    }
}
