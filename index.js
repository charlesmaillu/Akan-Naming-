var century, year, month, dayOfMonth, dayOfWeek, day;
//Get input
function getInput(){
  century = parseInt(document.getElementById("century").value);
  year = parseInt(document.getElementById("year").value);
  month = parseInt(document.getElementById("month").value);
  dayOfMonth = parseInt(document.getElementById("monthday").value);



}
//Calc func
function calculateDay(){
    getInput();
    dayOfWeek = ((((century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + dayOfMonth) % 7);
    console.log(dayOfWeek); //Test 
    return (Math.floor(dayOfWeek));
}

//main caller func
 function checkDayOfWeek(){
     day = calculateDay();
      checkGender();
      console.log("The function runs");//Test 
}

//arrays
let daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames =[" Akosua"," Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]


//get selected radio button
function checkGender(){
  var gen = document.getElementsByName("rads");
  if(gen[0].checked == true){
      var gender = "male";
      document.getElementById("result").innerHTML = `You were born on a ${daysOfWeek[day]} and your Akan name is ${maleNames[day]}`;
  }else if(gen[1].checked == true){
      var gender = "female";
      document.getElementById("result").innerHTML = `You were born on a ${daysOfWeek[day]} and your Akan name is ${femaleNames[day]}`;
  }else{
      document.getElementById("result").innerHTML= `select gender`;
  }
}
