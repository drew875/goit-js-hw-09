const form = document.querySelector("form");
const LOCAL_STORAGE_KEY = "feedback-form-state";

let formData = { email: "", message: "" };

const saveData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

if (saveData) {
    formData = saveData;
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}



form.addEventListener('input', e => {
    formData.email = e.currentTarget.elements.email.value;
    formData.message = e.currentTarget.elements.message.value;

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
});


form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

    localStorage.removeItem(LOCAL_STORAGE_KAY);
    formData = { email: "", message: "" };
    form.reset();
});
