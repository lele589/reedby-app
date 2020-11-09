import firebase from "../config/firebase";

export const getSubjectCover = async (setState, subjectQuery) => {
    await firebase.storage.ref(`subjects/${subjectQuery}.png`).getDownloadURL()
        .then(async (response) => {
            setState(response);
        })
        .catch((error) => {
            console.log(error);
        });
};