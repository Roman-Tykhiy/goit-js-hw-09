
let formData = {
    email: "",
    message: "",
}

const form = document.querySelector(".feedback-form");
const input = document.querySelector(".form-input");
const textarea = document.querySelector(".form-textarea");
input.value.trim();
textarea.value.trim();


form.addEventListener("input", formInput);

function formInput(event) {
   
    if (event.target.classList.contains("form-input")) {
         formData.email = event.target.value.trim();
    } else if (event.target.classList.contains("form-textarea")) {
        formData.message = event.target.value.trim();
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function beakText() {
    const textStorage = JSON.parse(localStorage.getItem("feedback-form-state"));
   
    
    if (textStorage) {
        input.value = textStorage.email.trim();
        textarea.value = textStorage.message.trim();
        formData.email = textStorage.email.trim();
        formData.message = textStorage.message.trim();
    }   
}
beakText();

form.addEventListener("submit", handSabmit);
function handSabmit(event) {
    event.preventDefault();
    if (input.value.trim().length === 0 || textarea.value.trim().length === 0) {
         alert("Fill please all fields")
        return
    }
   
    console.log(formData);
    form.reset();
    localStorage.removeItem("feedback-form-state");
    return

}













