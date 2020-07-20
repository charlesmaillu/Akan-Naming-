
let outputDiv =document.getElementById('output');

function result() {

   event.preventDefault

   CC = parseInt(document.getElementById('century').value) ;
   YY = parseInt(document.getElementById('year').value) ;
   MM = parseInt(document.getElementById('month').value) ;
   DD = parseInt(document.getElementById('day').value) ;
   sex = document.getElementById('sex').value;

   maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
   femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

   let d = math.round((((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7);


    if (DD <= 0){
        outputDiv.innerHTML = 'insert correct day';
    }else if (DD > 31){
        outputDiv.innerHTML = 'insert correct day';
    }else if (MM > 12){
        outputDiv.innerHTML = 'insert correct month';
    }else if (MM <= 0){
        outputDiv.innerHTML = 'insert correct month';
    }else if (YY > 99){
        outputDiv.innerHTML = 'insert correct year';
    }else if (YY <= 0){
        outputDiv.innerHTML = 'insert correct year';
    }else if (CC > 99){
        outputDiv.innerHTML = 'insert correct century';
    }else if (CC <= 12){
        outputDiv.innerHTML = 'insert correct century';
    }else if (sex == male){
        outputDiv.innerHTML = `Your Akan name id ${maleNames[d]}`;
    }else if (sex == female){
        outputDiv.innerHTML = `Your Akan name id ${femaleNames[d]}`;
    }else{
        outputDiv.innerHTML =`enter data`
    }
} 
