 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB0k4eexLb1P0Arx1uR4ec3gQ4Y9wpiXEc",
    authDomain: "trainwk7.firebaseapp.com",
    databaseURL: "https://trainwk7.firebaseio.com",
    storageBucket: "trainwk7.appspot.com",
    messagingSenderId: "27904870458"
  };
  firebase.initializeApp(config);

  // var "database" easier than lengthy "firebase.database().ref();"
  var database = firebase.database().ref();

  //when submitButton clicked, run this fctn?:
  // is submitUser calling the submitUser function after it's clicked?
	$('#submitButton').on('click', submitUser );

	function submitUser(){
	//prevent default button behavior
	event.preventDefault();
	//set temp variables from user input
	console.log("test");

	//sets temp variables that hold user input
	var userObj = {
		train: $("#trainInput").val().trim(),
		destination: $("#destinationInput").val().trim(),
		firstTrain: $("#firstTrain").val().trim(), //(HH:mm-military time)
		frequency: parseInt($("#frequencyInput").val().trim() ) //date as mm/dd/yyyy
				  }

	console.log("test 2");
	console.log("sld be train: " + userObj.train);
	console.log("sld be destination: " + userObj.destination);
	console.log("sld be firstTrain: " + userObj.firstTrain);
	console.log("sld be freq: " + userObj.frequency);


	//do nothing if any field is blank
	// does this  function stop form from submission if btn pressed?
	if (userObj.name === '' || userObj.role === '' || userObj.startDate === '' || userObj.rate ===''){ 
		}  

	else { //otherwise, convert the #id input to strings and... 
		$("#trainInput").val('');
		$("#destinationInput").val('');
		$("#firstTrain").val('');
		$("#frequencyInput").val('');

		//console.log($("#trainInput").val(''));
		// $("#destinationInput").val('');
		// $("#firstTrain").val('');
		// $("#frequencyInput").val('');

		// push object (containing form input) to firebase
		database.push( userObj );

		//addUser( userObj );		
	}
		console.log(userObj);
		console.log(userObj.train );
		console.log(userObj.destination );
		console.log(userObj.firstTrain );
		console.log(userObj.frequency );

		//Alert
		alert("Train added");

		//Clear form input
		$("#trainInput").val('');
		$("#destinationInput").val('');
		$("#firstTrain").val('');
		$("#frequencyInput").val('');

		// #
}; //close of click function
//		create firebase event for adding trains and 
// 3. Create Firebase event for ??adding???  to the database and a row in the html when a user adds an entry
	database.on("child_added", function(childSnapshot, prevChildKey) {

 		console.log(childSnapshot.val().train);
 		console.log(childSnapshot.val().destination);
 		console.log(childSnapshot.val().firstTrain);
 		console.log(childSnapshot.val().frequency);

  	//storing everything in variable
 	  var displayTrain = childSnapshot.val().train;
	  var displayDestination = childSnapshot.val().destination;
	  var displayFirstTrain = childSnapshot.val().firstTrain;
	  var displayFrequency = childSnapshot.val().frequency;

	  	console.log(displayTrain);
 		console.log(displayDestination);
 		console.log(displayFirstTrain);
 		console.log(displayFrequency);

 	// set var and start calculating
 	//     // Minute Until Train
    var tMinutesTillTrain = displayFrequency - ((moment().diff(moment(moment(displayFirstTrain, "hh:mm").subtract(1, "years")), "minutes")) % displayFrequency);
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    

// create vars: displayNextArrival	displayMinutesAway

 	// add train data into table


//#edit the following.. .. .. .. ..  .. .. .. .. .. .. .. .. 
// Add each train's data into the table
  $("#displayInfo").append("<tr><td>" + displayTrain + "</td><td>" + displayDestination + "</td><td>" +
  displayFrequency + "</td><td>" + "#displayNextArrival" + "</td><td>" + "#displayMinutesAway" + "</td></tr>");
 

 });//close of database function

 
// ...................
// 	var tFrequency = displayFrequency;
// // Minute Until Train
//     var tMinutesTillTrain = tFrequency - tRemainder;
//     console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

// Time apart (remainder)
//how do i get the diffTime?
//     var tRemainder = diffTime % tFrequency;
//     console.log(tRemainder);

// // Next Train
//     var nextTrain = moment().add(tMinutesTillTrain, "minutes");
//     console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

// function nextArrivalCalculation( startDate ) {
	// .............

	//return moment().diff(startDate, 'months');

	
// }




// 	var tFrequency = 3;

//     // Time is 3:30 AM
//     var firstTime = "03:30";

//     // First Time (pushed back 1 year to make sure it comes before current time)
//     var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");
//     console.log(firstTimeConverted);

//     // Current Time
//     var currentTime = moment();
//     console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

//     // Difference between the times
//     var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
//     console.log("DIFFERENCE IN TIME: " + diffTime);

//     // Time apart (remainder)
//     var tRemainder = diffTime % tFrequency;
//     console.log(tRemainder);

//     // Minute Until Train
//     var tMinutesTillTrain = tFrequency - tRemainder;
//     console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

//     // Next Train
//     var nextTrain = moment().add(tMinutesTillTrain, "minutes");
//     console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));



/*-------practice------------practice---------practice--------------practice-------------*/
/*trying it*/
//     // Minute Until Train
//     var tMinutesTillTrain = displayFrequency - ((moment().diff(moment(moment(displayFirstTrain, "hh:mm").subtract(1, "years")), "minutes")) % displayFrequency);
//     console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

//     // Next Train
//     var nextTrain = moment().add(tMinutesTillTrain, "minutes");
//     console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

var tRemainder = diffTime % tFrequency;