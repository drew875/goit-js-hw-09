import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const a=document.querySelector("form"),s="feedback-form-state";let e={email:"",message:""};const l=JSON.parse(localStorage.getItem(s));l&&(e=l,a.elements.email.value=e.email,a.elements.message.value=e.message);a.addEventListener("input",t=>{e.email=t.currentTarget.elements.email.value,e.message=t.currentTarget.elements.message.value,localStorage.setItem(s,JSON.stringify(e))});a.addEventListener("submit",t=>{if(t.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}localStorage.removeItem(s),e={email:"",message:""},a.reset()});
//# sourceMappingURL=2-form.js.map
