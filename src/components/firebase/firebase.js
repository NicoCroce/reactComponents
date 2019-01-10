import * as firebase from 'firebase';
//require("firebase/firestore");

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDO-fD1gnD34GMe9mxJ139l4MH_XQ63aL8",
    authDomain: "gestion-clinica.firebaseapp.com",
    databaseURL: "https://gestion-clinica.firebaseio.com",
    projectId: "gestion-clinica",
    storageBucket: "gestion-clinica.appspot.com",
    timestampsInSnapshots: true,
    messagingSenderId: "828448156766"
};

firebase.initializeApp(config);

const storage = firebase.storage();
const storageRef = storage.ref();


// Create a child reference
// imagesRef now points to 'images'


const sendFiles = (files, cb) => {
    files.forEach( (file, index) => {
        _executeSendFiles( file, index, cb);
    })
};

const _executeSendFiles = (file, index, cb) => {
    var uploadTask = storageRef.child('images/' + file.name).put(file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed', function (snapshot) {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        cb.loading( index, progress);
        switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
                //console.log('Upload is paused');
                break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
                //console.log('Upload is running');
                break;
        }
    }, function (error) {
        // Handle unsuccessful uploads
        cb.error( index, error );
    }, function () {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            //console.log('File available at', downloadURL);
            cb.success( index, downloadURL );
        });
    });
}


export default {
    sendFiles
};