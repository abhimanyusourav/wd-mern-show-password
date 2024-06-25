
const myEyeClose = document.querySelector("#eye-close")
const myInput = document.querySelector("input")

let isEyeOpen = false

function openEye() {
    isEyeOpen = true
    myEyeClose.classList.replace("fa-eye-slash", "fa-eye")
    myInput.type = "text"
}

function closeEye() {
    isEyeOpen = false
    myEyeClose.classList.replace("fa-eye", "fa-eye-slash")
    myInput.type = "password"
}

myEyeClose.addEventListener("click", function () {
    if (isEyeOpen) {
        closeEye()
    } else {
        openEye()
    }
})