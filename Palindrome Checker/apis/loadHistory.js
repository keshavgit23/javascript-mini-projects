
export async function loadHistory() {
    try {
        let res = await fetch("https://javascript-mini-projects-kwpq.onrender.com/api/history", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        let newDiv = document.querySelector(".inputs")

        const response = await res.json() // response is object
        // console.log(response)

        if (!res.ok) {
            const text = await res.text()
            throw Error(text || "Server Error!")
        }
        newDiv.innerHTML = ""

        let output = response.data // output is array
        // console.log(output)
        output.forEach(elem => {
            let appendDiv = document.createElement('div')
            // console.log(appendDiv)
            appendDiv.textContent = `${elem.text}`
            appendDiv.classList.add('recent-input')

            newDiv.appendChild(appendDiv)
        });


    } catch (err) {
        console.log("Server Error:", err)
    }

}