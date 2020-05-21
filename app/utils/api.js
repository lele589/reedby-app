import * as firebase from "firebase";
import { Linking, Share, Platform } from 'react-native';

export const createNickName = (email) => {
    const regex = /@.*$/gm;
    return email.replace(regex, '');
};

export const reauthenticate = (pass) => {
    const user = firebase.auth().currentUser;
    const credentials = firebase.auth.EmailAuthProvider.credential(
        user.email,
        pass
    );
    return user.reauthenticateWithCredential(credentials);
};

export const sendMailTo = (data) => {
    const to = 'reedbyapp@gmail.com';
    const subject = data.subject;
    const body = data.body;
    return Linking.openURL(`mailto:${to}?subject=${subject}&body=${body}`);
};

export const onShare = async (content, options) => {
    try {
       await Share.share({
            message: content.message,
            url: content.url,
            title: content.title
        });
    } catch (error) {
        console.log(error.message);
    }
};

export const getAppLink = () => {
    //TODO: actualizar app links
    let url;
    if(Platform.OS === 'ios') {
        url = 'http://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=300136119&mt=8'
    } else if (Platform.OS === 'android') {
        url = 'https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en'
    }
    return url;
};