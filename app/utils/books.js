import firebase from "../config/firebase";

export const getBookCover = async (setState, isbn, size = 'M') => {

    const url = `http://covers.openlibrary.org/b/isbn/${isbn}-${size}.jpg?default=false`;
    const imageResponse = await fetch(url);
    if (imageResponse.status !== 404) {
        setState(url);
    };
};

export const getSubjectCover = async (setState, subjectQuery) => {
    await firebase.storage.ref(`subjects/${subjectQuery}.png`).getDownloadURL()
        .then(async (response) => {
            setState(response);
        })
        .catch((error) => {
            console.log(error);
        });
};