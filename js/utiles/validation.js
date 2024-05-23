export function validate(element, regex) {
    if (regex.test(element.value)) {
        element.classList.add('is-valid');
        element.classList.remove('is-invalid');
        element.nextElementSibling.classList.add('invisible');
        return true;
    }
    element.classList.add('is-invalid');
    element.classList.remove('is-valid');
    element.nextElementSibling.classList.remove('invisible');
    return false;
}

export const nameRegex = /^[A-Z]/
export const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
export const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/