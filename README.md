# Train-Scheduler-
https://zwarnerdun.github.io/Train-Scheduler-/

Problem: I had issues getting my minutes away to calculate based on the frequency and time of arrival for the trains.


Solution: I had an extra moment, that needed to be deleted, captured for one of my variables I was storing to change the year for when the train comes for the current time. 


Technical approach: In my javascript, I had to go to my database that I referenced which is "childadded", database.ref().on("child_added", function(childSnapshot) {}. Within this function there was a variable called var=firstTrainNew that stored everytime a new train was entered it came back to address how far away the train is. I had the code originally as var firstTrainNew = moment(moment((childSnapshot.val().Train1, "hh:mm").subtract(1, "years");, however, I needed to remove the second moment next to the chidSnapshot in order for the mins away to work.

