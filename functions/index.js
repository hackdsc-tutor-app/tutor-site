const functions = require('firebase-functions');
const admin = require("firebase-admin");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.addTimeslot = functions.https.onRequest((request, response) => {
    const firestore = admin.firestore();
    const auth = admin.auth();

    const body = request.body;

    var tutor_email = body.tutor_email;
    // var student_email = body.student_email;

    auth.getUserByEmail(tutor_email).then(tutor_user => {
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

        firebase.collection("schools").doc("demo").collection("timeslots").add(insertObject).then(() => {
            response.status(200).send();
        }).catch(err => {
            response.status(500).send(err.message);
        })




        // }).catch(err => response.status(500).send(err.message))
    }).catch(err => response.status(500).send(err.message))

})