import"./assets/modulepreload-polyfill-B5Qt9EMX.js";let t={email:"",message:""};const a=document.querySelector(".feedback-form"),r=document.querySelector(".form-input"),m=document.querySelector(".form-textarea");r.value.trim();m.value.trim();a.addEventListener("input",i);function i(e){e.target.classList.contains("form-input")?t.email=e.target.value.trim():e.target.classList.contains("form-textarea")&&(t.message=e.target.value.trim()),localStorage.setItem("feedback-form-state",JSON.stringify(t))}function l(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(r.value=e.email.trim(),m.value=e.message.trim(),t.email=e.email.trim(),t.message=e.message.trim())}l();a.addEventListener("submit",o);function o(e){if(e.preventDefault(),r.value.trim().length===0||m.value.trim().length===0){alert("Fill please all fields");return}console.log(t),a.reset(),localStorage.removeItem("feedback-form-state")}
//# sourceMappingURL=2-form.js.map
