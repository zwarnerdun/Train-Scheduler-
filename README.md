# Train-Scheduler-
In this assignment, you'll create a train schedule application that incorporates Firebase to host arrival and departure data. Your app will retrieve and manipulate this information with Moment.js. This website will provide up-to-date information about various trains, naming their arrival times and how many minutes remain until they arrive at their station.

# Prerequeisites
Make sure to have your own firebase account in order to connect to your javascript to get live up-to-date information on the train's arrival in real time.

# Getting Started
Instructions
1. Enter any name of the train in the form
2. Enter the destination of where you would like to go 
3. Enter the time of the train
4. Enter the frequency of the train's duration 

# Deployment
Check out the link here: https://zwarnerdun.github.io/Train-Scheduler-/

# Overview
Problem: I had issues getting my minutes away to calculate based on the frequency and time of arrival for the trains.

Solution: I had an extra moment, that needed to be deleted, captured for one of my variables I was storing to change the year for when the train comes for the current time. 

Technical approach: In my javascript, I had to go to my database that I referenced which is "childadded", database.ref().on("child_added", function(childSnapshot) {}. Within this function there was a variable called var=firstTrainNew that stored everytime a new train was entered it came back to address how far away the train is. I had the code originally as var firstTrainNew = moment(moment((childSnapshot.val().Train1, "hh:mm").subtract(1, "years");, however, I needed to remove the second moment next to the chidSnapshot in order for the mins away to work.

# Built With
* JavaScript
* BootStrap
* HTML5
* CSS
* Moment.js
* FireBase app/database
