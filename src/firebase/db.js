import {db, auth} from './firebase';

/*****************************************************
 *
 * CONTACT
 *
*****************************************************/
export const sendMessage = (first, last, email, phone, company, message) => db
    .collection("messages")
    .doc(email)
    .collection("emails")
    .doc()
    .set({
        name: first + " " + last,
        email: email,
        phone: phone,
        company: company,
        message: message
    })
    .then(function () {
        console.log("Document successfully written!");
    })
    .catch(function (error) {
        console.error("Error writing document: ", error);
    });

/*****************************************************
 *
 * SIGNUP/INTIALIZE CONTRACTOR
 *
*****************************************************/
export const doInitializeUser = (id, first_name, last_name, username, password, email, address_country, member_type) => {
    var today = new Date();
    var initializeUserBatch = db.batch();

    var newUserRef = db
        .collection('users')
        .doc(id);
    initializeUserBatch.set(newUserRef, {
        username: username,
        email: email,
        member_type: member_type,
        first_name: first_name,
        last_name: last_name,
        address_country: address_country,
        creation_date: today
    });
    // Commit the batch
    return initializeUserBatch.commit();
}

/*****************************************************
 *
 * DASHBOARD PROP
 *
*****************************************************/

export const getCurrentUser = () => db
    .collection("users")
    .doc(auth.currentUser.uid)
    .get();

/*****************************************************
 *
 * ADMIN
 *
*****************************************************/
/**
  * @desc gets all jobs that are not started
  * @return promise
*/

/**
  * @desc gets all contractors
  * @return promise
*/
export const getAllUsers = () => db.collection('users');


/**
  * @desc gets information about a contractor
  * @return promise
*/
export const getUserInfo = () => db
    .collection('users')
    .doc(auth.currentUser.uid);

/*****************************************************
 *
 * Users
 *
*****************************************************/

/**
  * @desc updates the user settings
  * @return promise
*/
export const doUpdateUserProfile = (current_user, first_name, last_name, email, address_country, username, exchange_coin) => {
    db.collection("users").doc(current_user).update({"first_name": first_name, 
                                                    "last_name": last_name, 
                                                    "email": email,
                                                    "address_country": address_country,
                                                    "username": username,
                                                    "exchange_coin": exchange_coin})
}
