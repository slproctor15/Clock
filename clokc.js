// var d = new Date();
// document.getElementById("demo").innerHTML = d.getDate();

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("demo").innerHTML = h+ ":" + m + ":" + s;
    t = setTimeout(function(){ startTime() }, 500);
}

function checkTime(i) {
    if (i<10) {
        i = "0" + i;
    }
    return i;
}

function getLove(){
	alert("I <3 Mr. Ettlin. Please give Sabrina Proctor an A"); 
}