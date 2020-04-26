const functions = require('firebase-functions');
const admin = require("firebase-admin");
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


exports.addTimeslot = functions.https.onCall((data, context) => {
    const firestore = admin.firestore();
    const auth = admin.auth();


    var tutor_email = data.tutor_email;
    // var student_email = body.student_email;

    return auth.getUserByEmail(tutor_email).then(tutor_user => {
        var tutor_uid = tutor_user.uid;
        // auth.getUserByEmail(student_email).then(student_user => {
        //     var student_uid = student_user.uid;
        var status = "not_started";

        var start_date = Date.now();
        var end_date = new Date(start_date);
        end_date.setHours(end_date.getHours() + 1);

        var insertObject = {
            end_time: end_date,
            filled: false,
            status: status,
            // student_uid: student_uid,
            tutor_uid: tutor_uid,
            tutor_name: tutor_email,
            // student_name: student_email,
            start_time: start_date
        }

        return firebase.collection("schools").doc("demo").collection("timeslots").doc().set(insertObject).then((doc) => {
            console.log(doc)
            return ({ success: true })
        }).catch(err => {
            return ({ error: true, message: err.message })
        })




        // }).catch(err => response.status(500).send(err.message))
    }).catch(err => {
        return ({ error: true, message: err.message })
    })

})

exports.clearWhiteboard = functions.https.onCall((data, context) => {
    const firestore = admin.firestore();

    return firestore.collection("schools").doc("demo").collection("whiteboards").doc(data.whiteboard_id).collection("points").get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            doc.ref.delete()
        })
        return "success"
    }).catch(err => {
        console.error(err.message)
        return { error: err.message };
    })
})
