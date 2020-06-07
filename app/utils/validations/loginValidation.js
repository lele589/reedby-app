import { emailValidation, passValidation } from "./formValidations";

export const loginDefaultData = {
    email: '',
    pass: ''
};

export default function loginValidation(formData) {
    return {
        email: emailValidation(formData.email),
        pass: passValidation(formData.pass),
    };
};