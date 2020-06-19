import app from 'firebase/app';
import firebaseConfig from './config';
import 'firebase/auth';
import 'firebase/storage';

class Firebase {
    constructor() {
        if(!app.apps.length) {
            app.initializeApp(firebaseConfig)
        }
        this.auth = app.auth();
        this.authCredentials = app.auth;
        this.storage = app.storage();
    }

    async userRegister(email, pass) {
        return await this.auth.createUserWithEmailAndPassword(email, pass);
    }

    async userLogin(email, pass) {
        return await this.auth.signInWithEmailAndPassword(email, pass);
    }

    async signOut() {
        await this.auth.signOut();
    }

    async reauthenticate(pass) {
        const user = this.auth.currentUser;
        const credentials = this.authCredentials.EmailAuthProvider.credential(
            user.email,
            pass
        );
        return user.reauthenticateWithCredential(credentials);
    };

    async updatePass(newPass) {
        return await this.auth.currentUser.updatePassword(newPass);
    };

    async updateProfile(update) {
        return await this.auth.currentUser.updateProfile(update);
    };
}

const firebase = new Firebase();
export default firebase;