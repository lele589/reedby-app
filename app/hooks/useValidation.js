import React, { useState, useEffect } from 'react';

export default function useValidation(initialState, validationRules, submitFunc) {

    const[formData, setFormData] = useState(initialState);  // values => lo que el usuario coloca en los diferentes inputs
    const[errors, setErrors] = useState({});
    const[submitForm, setSubmitForm] = useState(false); // este hook esperará a que el state esté a true para ejecutar la funcion de submit en cada caso

    useEffect(() => {
        if(submitForm) {
            const noErrors = Object.values(errors).every(item => item === '');
            if(noErrors) {
                submitFunc(); // Función que se ejecuta en el componente al hacer submit
            }
            setSubmitForm(false); // Volver a poner a false para que no se ejecute el useEffect constantemente
        }
    }, [submitForm]);

    // Función que se ejecuta cuando el usuario escribe algo
    const handleChange = (e, type) => {
        setFormData({
            ...formData,
           [type]: e.nativeEvent.text
        })
    };

    // Función que se ejecuta cuando el usuario hace submit
    const handleSubmit = e => {
        e.preventDefault();
        const validationErrors = validationRules(formData); // Cogemos las reglas de validación y le pasamos los values que el usuario está escribiendo
        setErrors(validationErrors);
        setSubmitForm(true); // Esto hará que se vuelva a ejecutar el useEffect
    };

    return { formData, errors, handleChange, handleSubmit }
};