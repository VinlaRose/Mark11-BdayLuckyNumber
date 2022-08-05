const dateOfBirth = document.querySelector("#date-of-birth");
const favouriteNumber = document.querySelector("#favourite-number");
const checkButton = document.querySelector("#check-button");
const displayMessage = document.querySelector("#output");

   

checkButton.addEventListener("click" ,function match(){
    dob = dateOfBirth.value;
    dob = dob.replaceAll("-", "");
    console.log(dob);
    const sum = dob
    .toString()  //To split the digits, we use toString to convert it to a string.
    .split('')   //to split the value number into an array of digits.
    .map(Number)   // Then we call split with an empty string to split the string version of value into an array of digit strings.
    .reduce((a, b) => a + b, 0);  //And then we add the digits together with reduce.
  console.log(sum);

  console.log(favouriteNumber.value);

  const favNo = favouriteNumber.value;

  if(sum % favNo === 0){
    console.log("wow!! your favourite number is your lucky number as well");
    return showMessage(`Wow!! your favourite number ${favNo} is a lucky number!!  `);

  }
  else{
    console.log("oh no!! your favourite number is not your lucky number");
    return showMessage(`Oh no!! your favourite number ${favNo} is not your  lucky number!! `);



   

  }




})

const showMessage = (message) => {
    displayMessage.innerText = message;
    };

