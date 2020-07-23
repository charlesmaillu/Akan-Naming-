var century, year, month, dayOfMonth, dayOfWeek, day;
//Get input
function getInput(){
  century = parseInt(document.getElementById("century").value);
  year = parseInt(document.getElementById("year").value);
  month = parseInt(document.getElementById("month").value);
  dayOfMonth = parseInt(document.getElementById("monthday").value);
  form = document.getElementById('form')
}
//Calculate func
function calculateDay(){
    getInput();
    dayOfWeek = ((((century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + dayOfMonth) % 7) -1;
    console.log(dayOfWeek); //Test the calculateDay function
    return (Math.floor(dayOfWeek));
}
//main caller func
 function checkDayOfWeek(){
     day = calculateDay();
      checkGender();
      console.log("The function runs");//Test chackDayOfWeek function
}
//arrays
let daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames =[" Akosua"," Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
//get selected radio button
function checkGender(){
  var gen = document.getElementsByName("rads");
  if(gen[0].checked == true && century !== "" &&  dayOfMonth !== "" &&  month !== "" && year !== "" && dayOfMonth > 0 && dayOfMonth <31 && month > 0 && month < 12 && year > 0 && year < 100){
        document.getElementById("result").innerHTML = `You were born on a ${daysOfWeek[day]} and your Akan name is ${maleNames[day]}`;
  }else if(gen[1].checked == true && century !== "" &&  dayOfMonth !== "" &&  month !== "" && year !== "" && dayOfMonth > 0 && dayOfMonth <31 && month > 0 && month < 12 && year > 0 && year < 100){
        document.getElementById("result").innerHTML = `You were born on a ${daysOfWeek[day]} and your Akan name is ${femaleNames[day]}`;
  }else if(gen[1].checked == true || gen[0].checked == true && century === "" &&  dayOfMonth !== "" &&  month !== "" && year !== "" && dayOfMonth > 0 && dayOfMonth <31 && month > 0 && month < 12 && year > 0 && year < 100){
        document.getElementById("result").innerHTML = `enter century data`;
        alert('enter century data')
  }else if(gen[1].checked == true || gen[0].checked == true && century !== "" &&  dayOfMonth == "" &&  month !== "" && year !== "" || dayOfMonth < 0 || dayOfMonth >31 && month > 0 && month < 12 && year > 0 && year < 100){
        document.getElementById("result").innerHTML = ` date`;
        alert('enter correct date')
  }else if(gen[1].checked == true || gen[0].checked == true && century !== "" &&  dayOfMonth !== "" &&  month !== "" && year == "" && dayOfMonth > 0 || dayOfMonth <31 && month > 0 && month < 12 || year < 0 || year > 100){
        document.getElementById("result").innerHTML = ` date`;
        alert('enter correct year')
  }else if(gen[0].checked == false || gen[1].checked == false){
        document.getElementById("result").innerHTML ='select gender'
        alert('select gender')
  }else{
      document.getElementById("result").innerHTML= `insert correct data`;
      alert('fill all fields')
  }
}