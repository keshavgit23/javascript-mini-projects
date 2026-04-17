let sideBar = document.querySelector(".side-bar")
let toggleBtn = document.getElementById("toggle-btn")


    toggleBtn.addEventListener("click",()=>{
        console.log("clicked");
        sideBar.classList.toggle("close")
    })

export function openToggle(){
    toggleBtn.addEventListener("click",()=>{
        sideBar.classList.toggle("open")
    })
}

toggleBtn.addEventListener("click", () => {
    console.log(sideBar.classList);
});