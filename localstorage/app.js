const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log({event});
    const form =event.target;
    const formData = {
        key: form.key.value,
        value: form.value.value,
    };
    console.log({formData})
});
