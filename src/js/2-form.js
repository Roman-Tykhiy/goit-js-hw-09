
let formData = {
    email: "",
    message: "",
}

const form = document.querySelector(".feedback-form");
const input = document.querySelector(".form-input");
const textarea = document.querySelector(".form-textarea")


form.addEventListener("input", formInput);

function formInput(event) {
   
    if (event.target.classList.contains("form-input")) {
         formData.email = event.target.value;
    } else if (event.target.classList.contains("form-textarea")) {
        formData.message = event.target.value;
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function beakText() {
    const textStorage = JSON.parse(localStorage.getItem("feedback-form-state"));
   
    
    if (textStorage) {
        input.value = textStorage.email;
        textarea.value = textStorage.message;
        formData.email = textStorage.email;
        formData.message = textStorage.message;
    }   
}
beakText();

form.addEventListener("submit", handSabmit);
function handSabmit(event) {
    event.preventDefault();
    if (input.value.length === 0 || textarea.value.length === 0) {
         alert("Fill please all fields")
        return
    }
   
    console.log(formData);
    form.reset();
    localStorage.removeItem("feedback-form-state");
    return

}













