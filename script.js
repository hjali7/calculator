let buttons = document.querySelectorAll("span")
let body = document.querySelector("body")
let value = document.getElementById("value")
let toggle = document.querySelector(".toggle")

for(let i = 0 ; i < buttons.length ; i++) {
    buttons[i].addEventListener("click" , function () {
        if(this.innerHTML == "=") {
            value.innerHTML = eval(value.innerHTML)
        }else if(this.innerHTML == "clear") {
            value.innerHTML = ""
        }else {
            value.innerHTML += this.innerHTML
        }
    })
}

toggle.addEventListener("click" , function ( )  {

    body.classList.toggle("dark")
    
})