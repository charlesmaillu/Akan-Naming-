



function akanName(){

    var maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
    var femaleNames =['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']

    var CC = parseInt(document.getElementById("century"));
    var YY = parseInt(document.getElementById("year"));
    var MM = parseInt(document.getElementById("month"));
    var DD = parseInt(document.getElementById("day"));

    var d = math.round((((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD) %7)

    if(sex==male){
        document.getElementById('akan').innerHTML = `your Akan name is ${maleNames[d]}`
    }else{
        document.getElementById('akan').innerHTML =` Your Akan name is ${femaleNames[d]}`
    }
}