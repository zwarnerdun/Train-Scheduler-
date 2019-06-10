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
        Train1 = $("#Train1").val().trim();
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

    database.ref().on("child_added", function(childSnapshot) {
        var minAway;
        // Change year so train 1 comes before now//
        var firstTrainNew = moment(childSnapshot.val().Train1, "hh:mm").subtract(1, "years");
        // Difference between the current and Train1//
        var diffTime = moment().diff(moment(firstTrainNew), "minutes");
        var remainder = diffTime % childSnapshot.val().frequency;
        // Minutes until next train
        var minAway = childSnapshot.val().frequency - remainder;
        // Next train time
        var nextTrain = moment().add(minAway, "minutes");
        nextTrain = moment(nextTrain).format("hh:mm");

        $("#add-row").append("<tr><td>" + childSnapshot.val().name +
            "</td><td>" + childSnapshot.val().destination +
            "</td><td>" + childSnapshot.val().Frequency +
            "</td><td>" + nextTrain + 
            "</td><td>" + minAway + "</td></tr>");

            // Handle the errors
        }, function(errorObject) {
            console.log("Errors handled: " + errorObject.code);
    });

    database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
        // Changes show on HTML
        $("#name").html(snapshot.val().name);
        $("#destination").html(snapshot.val().destination);
        $("#Train1").html(snapshot.val().Train1);
        $("#frequency").html(snapshot.val().frequency);
    });
});