window.addEventListener('load', calculate_Time);
function calculate_Time() {
    let date = new Date();
    let monthnumber=date.getMonth();
    let daynumber = date.getDay()
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let sec=date.getSeconds();
    let ampm;
    
    if (hour >= 12)
        ampm = "PM";
    else
        ampm = "AM";
    let daynames = ["SUN", "MON", "TUE", "WED", "THU", "FRI"];
    let Monthnames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN","Jul","AUG","SEP","OCT","NOV","DEC"];

    hour = hour % 12;

    if (hour == 12)
        hour = 12;

    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    document.getElementById("day").innerHTML = daynames[daynumber];
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("ampm").innerHTML = ampm;
    document.getElementById("Month").innerHTML = Monthnames[monthnumber];

    setTimeout(calculate_Time, 200);
}

calculate_Time();