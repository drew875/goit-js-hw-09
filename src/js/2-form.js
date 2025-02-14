const a = document.querySelector("form");
const localStorageKey = "feedback-form-state";
let formData = { email: "", message: "" };


a.elements.email.value = formData.email;
a.elements.message.value = formData.message;



a.addEventListener('input', e => {
    formData.email = e.currentTarget.elements.email.value;
    formData.message = e.currentTarget.elements.message.value;

    console.log(formData);

    localStorage.setItem(localStorageKey, JSON.stringify(formData));
    console.log(formData);



});



