export const createNickName = (email) => {
    const regex = /@.*$/gm;
    return email.replace(regex, '');
};