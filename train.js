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

	//set temp variables from user input
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

		// console.log($("#trainInput").val(''));
		// $("#destinationInput").val('');
		// $("#firstTrain").val('');
		// $("#frequencyInput").val('');

		// push object (containing form input) to firebase
		database.push( userObj );

		//addUser( userObj );		
	}

	}