const a = document.querySelector("form");
const localStorageKey = "feedback-form-state";
let formData = JSON.parse(localStorage.getItem(localStorageKey)) || { email: "", message: "" };


a.elements.email.value = formData.email;
a.elements.message.value = formData.message;



a.addEventListener('input', e => {
    formData.email = e.currentTarget.elements.email.value;
    formData.message = e.currentTarget.elements.message.value;

    console.log(formData);

    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});


form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

    localStorage.removeItem(localStorageKey);
    formData = { email: "", message: "" };
    form.reset();
});
