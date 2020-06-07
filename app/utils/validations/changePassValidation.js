import { passValidation, newPassValidation, repeatPassValidation } from "./formValidations";

export const changePassDefaultData = {
    pass: '',
    newPass: '',
    repeatNewPass: ''
};

export default function changePassValidation(formData) {
    return {
        pass: passValidation(formData.pass),
        newPass: newPassValidation(formData.pass, formData.newPass),
        repeatNewPass: repeatPassValidation(formData.newPass, formData.repeatNewPass),
    };
};