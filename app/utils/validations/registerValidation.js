import { emailValidation, passValidation, repeatPassValidation } from "./formValidations";

export const registerDefaultData = {
    email: '',
    pass: '',
    repeatPass: ''
};

export default function RegisterValidation(formData) {
    return {
        email: emailValidation(formData.email),
        pass: passValidation(formData.pass),
        repeatPass: repeatPassValidation(formData.pass, formData.repeatPass),
    };
};