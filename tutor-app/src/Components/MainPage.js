import React, { useState, useEffect, Component } from 'react'
import firebase from '../firebase/index'
// import M from "materialize-css";



function MainPage() {
    return (
        <div>
            <h1>Welcome to the Tutor App!</h1>
            <p>
                In the increasingly digital age and the rising threat of the coronavirus, many schools have decided to move to virtual classes.
                However, with the move to online classes, easy classes become harder and difficult classes become more difficult. To combat this,
                schools currently implementing tutoring programs need to adapt and make the move online. This software is designed to provide a full
                suite of features to make tutoring easy and effective.
            </p>

            <h2>Some of the features that we're working on:</h2>
            <p>
                <ul>
                    <li>- Live collaborative whiteboards <em>using Firebase Firestore</em></li>
                    <li>- Live Video Conferncing <em>Using Agora</em></li>
                    <li>- Live Chat <em>using Firestore</em> with image uploads <em>using Cloud Storage</em></li>
                </ul>
            Our software also utilizes the following software and platforms:
                <ul>
                    <li>- Firebase Authentication</li>
                    <li>- Firebase Functions</li>
                </ul>
            </p>

            <h2>The future</h2>
            <p>
                While the features listed above are our primary focus, we also hope to incorporate a number of other features to make virtual tutoring easier and more effective, including:
                <ul>
                    <li>- Integration with platforms such as Discord or Slack</li>
                    <li>- Integration with Student Information Systems to auto-populate students</li>
                    <li>- Integration with Learning Management Systems to provide greater availability and ease of use.</li>
                </ul>
            </p>
        </div>
    )
}

export default MainPage;