# Tutor App
### Developed by German Felipe Sanchez Solano, Benjamin Thaw, Nicolas A. Serna, Jose Baca


***If you get rate limited by Firebase, send me a message on Discord @SpaceX#3897 and I'll upgrade the plan. Shouldn't be an issue though.***


Tutor-site is a web application that helps tutors to communicate with students that need help explaining real time problems allowing them to have a whiteboard that both can use.
**this is awesone**

## Using
Unfortantely, we did not have time to complete all the components of the project that we wanted to implement, so some are only partially completed.
The only *mostly* functioning feature that we have is the whiteboard interactivity.
To use that feature, follow the steps below:
1) Navigate to https://hackdsc-tutor-app-b6bbc.firebaseapp.com/SignIn and click the Log in. This will redirect you to a Google Sign-in Page.
2) After signing in, navigate to https://hackdsc-tutor-app-b6bbc.firebaseapp.com/JAUyNoXA4MK1OjdiCVJN to access the pre-created whiteboard\*.

\* Due to various issues with cloud functions and the limited time, we were unable to get a system that auto creaates a whiteboard. This is most certainly a planned feature (and we are close to getting there), which we will pick up and continue working on after judging.

The whiteboard feature utilizes Firebase Auth for authentication, Firestore for storing the points in real-time between clients, and Firebase Functions / Cloud Functions to handle clearing the whiteboard.

**NOTE: The clear whiteboard function is also a bit messed up, you may need to wait a few seconds (around 20 seconds) and then RELOAD**.

## Continuing Development
We hope to continue this project in the future, to implement a number of new features including:
- Live Video & Audio Conferencing with Agora
- A Live Chat to upload images (which will use Firestore for messages and Google Cloud Storage for images).
- A complete system to handle tutor creation, tutor session creation, tutor session sign up, etc.
- Allowing group tutoring.
- Integrating with services such as Discord to connect platforms.
- Potentially integrating with Learning Management Systems (Blackboard, Canvas, ...) to make the software more available to people.

We also hope to squash all the annoying bugs and improve connections with the database. 




## LocalHost Installation

installing homebrew
```bash
 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```
installing node

```bash
brew install node
```
create a clone
```bash
git clone "url of the project"
```
go to the folder you did the clone
```bash
cd path_of_the_folder_where_project_is
```
on the terminal go to the path of the project and run
```bash
npm install
```
then run:
``` bash
npm start
```
the program should open a browser with the program running. 

