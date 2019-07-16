import {auth} from './firebase';

// Sign Up w/ error handling
export const doCreateUserWithEmailAndPassword = (email, password) => auth
    .createUserWithEmailAndPassword(email, password)
    .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/weak-password') {
            alert('The password is too weak.');
        } else if (errorCode === 'auth/invalid-email') {
            alert('The given email address was invalid');
        } else if (errorCode === 'auth/email-already-in-user') {
            alert('An account already exists with the given email address.');
        } else {
            alert(errorCode + ' ' + errorMessage);
        }
        console.log(error);
    });

// Sign In w/ error handling
export const doSignInWithEmailAndPassword = (email, password) => auth
    .signInWithEmailAndPassword(email, password)
    .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password' || errorCode === 'auth/user-not-found') {
            alert('The email or password was incorrect');
        } else if (errorCode === 'auth/invalid-email') {
            alert('The given email address was invalid');
        } else if (errorCode === 'auth/user-disabled') {
            alert('This account was disabled');
        } else {
            alert(errorCode + ' ' + errorMessage);
        }
        console.log(error);
    });

// Sign out
export const doSignOut = () => auth.signOut();

// Password Reset
export const doPasswordReset = (email) => auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = (password) => auth
    .currentUser
    .updatePassword(password);