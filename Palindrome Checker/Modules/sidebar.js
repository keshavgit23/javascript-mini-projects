
export function openToggle() {

    document.addEventListener("DOMContentLoaded", () => {

        let sideBar = document.querySelector(".side-bar")
        let toggleBtn = document.getElementById("toggle-btn")

        if (!toggleBtn || !sideBar) {
            console.log("Sidebar elements not found");
            return;
        }
        toggleBtn.addEventListener("click", () => {
            // console.log("clicked");
            sideBar.classList.toggle("close")
            // sideBar.classList.toggle("open")
        })

        // toggleBtn.addEventListener("click", () => {
        //     console.log(sideBar.classList);
        // });
    })

}