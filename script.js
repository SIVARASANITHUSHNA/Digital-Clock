function showTime(){
var date = new Date();
var h = date.getHours();
var m= date.getMinutes();
var s=date.getSeconds();
sessione='AM',"PM";
if (h>=12){h=h-12;
sessione=h < 12 ? "PM" : "AM";
}
if (h<10){
h="0"+h;
}
if (m<10){
    m="0"+m;
    }
    if (s<10){
        s="0"+s;
        }
document.getElementById("digital clock").innerHTML=h+":"+m+":"+s+ sessione;
setTimeout(showTime,1000);
}
showTime();

