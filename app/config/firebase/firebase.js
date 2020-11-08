import app from "firebase/app";
import firebaseConfig from "./config";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
    }
    this.auth = app.auth();
    this.authCredentials = app.auth;
    this.storage = app.storage();
    this.db = app.firestore();
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
  }

  async updatePass(newPass) {
    return await this.auth.currentUser.updatePassword(newPass);
  }

  async updateProfile(update) {
    return await this.auth.currentUser.updateProfile(update);
  }

  async getDbSubjects(onlyMain, alphabetical) {
    const dbSubjects = [];
    return await firebase.db.collection("subjects")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach(function(doc) {
            let subject = doc.data();
            subject.id = doc.id;

            if ((onlyMain && subject.main) || !onlyMain) {
              dbSubjects.push(subject);
            }
          });

          if (alphabetical) {
            dbSubjects.sort(function(a, b) {
              return a.name.localeCompare(b.name);
            });
          }
          return dbSubjects;
        })
        .catch((error) => {
          console.log(error);
        });
  };
}

const firebase = new Firebase();
export default firebase;