$(document).ready(function(){
    //Intialize firebase configuration and app//
    var firebaseConfig = {
        apiKey: "AIzaSyAySGt-mGMIkcOG3Tb5e4GPVVo5St-16mo",
        authDomain: "train-scheduler-cddd4.firebaseapp.com",
        databaseURL: "https://train-scheduler-cddd4.firebaseio.com",
        projectId: "train-scheduler-cddd4",
        storageBucket: "train-scheduler-cddd4.appspot.com",
        messagingSenderId: "83850628772",
        appId: "1:83850628772:web:0ce90c4852557e03"
    };
      
    firebase.initializeApp(firebaseConfig);

    //to collect the data, reference the data//
    var database = firebase.database();

    //variables used for onclick events//
    var name;
    var Train1;
    var destination;
    var Frequency = 0;
    
    $("#add-train").on("click",function(){
        event.preventDefault();

        //storing and receiving different train data//
        name = $("#name").val().trim();
        Train1 = $("#Train-1").val().trim();
        destination = $("#destination").val().trim();
        Frequency = $("#frequency").val().trim();

        // Pushing to database//
        database.ref().push({
            name: name,
            destination: destination,
            Train1: Train1,
            Frequency: Frequency,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
        $("form")[0].reset();

    });

});