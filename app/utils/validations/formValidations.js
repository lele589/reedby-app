import { size , isEmpty} from "lodash";

export const emailValidation = (email) => {
    let error = '';
    const validateEmail = (email) => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    };

    if(isEmpty(email)) {
        error = "El email es obligatorio"
    } else if (!validateEmail(email)) {
        error = 'El email no tiene un formato correcto';
    }
    return error;
};

export const passValidation = (pass) => {
    let error = '';
    if (isEmpty(pass)) {
        error = "La contraseña es obligatoria"
    } else if (size(pass) < 6) {
        error = 'La contraseña debe tener mínimo 6 caracteres';
    }
    return error;
};

export const newPassValidation = (pass, newPass) => {
    let error = '';
    if (isEmpty(newPass)) {
        error = "La contraseña es obligatoria"
    } else if (pass === newPass) {
        error = 'La contraseña debe ser diferente a la actual';
    } else if (size(newPass) < 6) {
        error = 'La contraseña debe tener mínimo 6 caracteres';
    }
    return error;
};

export const repeatPassValidation = (pass, repeatPass) => {
    let error = '';
    if (isEmpty(repeatPass)) {
        error = "La contraseña es obligatoria"
    } else if (pass !== repeatPass) {
        error = 'Las contraseñas tienen que ser iguales';
    }
    return error;
};