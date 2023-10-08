console.log("Hello world!");
var name = document.getElementById("name").innerHTML;
console.log(name);

var num = 0;

function countFunction() {
    num = num + 1;
    
    document.getElementById("counter").innerHTML = "Count = " + num;
}

function headingFunction() {
    document.getElementById("heading").innerHTML = "Katelyn's website";
   
}

function hideFunction() {
    document.getElementById("heading").innerHTML = "";   
}