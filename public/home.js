let connectButton = document.getElementById("connectButton");
let nameInput = document.getElementById("inputName");

connectButton.addEventListener("click", ()=> {
    sessionStorage.setItem("name", nameInput.value);
    location.href = "/chat";
})