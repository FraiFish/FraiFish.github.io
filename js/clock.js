setInterval(showTime, 1000);

function showTime() {
    let time = new Date();
    // if we want date we're gonna have to work with this -4 that I did to shift timezones
    let hour =
        time.getUTCHours() - 4;
    
    // DST logic
    // else if else if else if else if
    // didn't make this one statement cuz it's too cramped
    let mnth = time.getUTCMonth();
    let dte = time.getUTCDate();
    if (mnth === 10 && dte >= 3) {
        hour -= 1;
    }
    else if (mnth === 11 || dte < 3) {
        hour -= 1;
    }
    else if (mnth <= 1) {
        hour -= 1;
    }
    else if (mnth === 2 && dte <= 10) {
        hour -= 1;
    }
    
    if (hour < 0) {
        hour = 24 + hour;
    }
    let min =
        time.getMinutes();
    am_pm = "AM";

    if (hour >= 12) {
        if (hour > 12)
            hour -= 12;
        am_pm = "PM";
    } else if (hour === 0) {
        hr = 12;
        am_pm = "AM";
    }

    hour =
        hour < 10
            ? "0" + hour
            : hour;
    min =
        min < 10
            ? "0" + min
            : min;

    document.getElementById(
        "clock"
    ).innerHTML =
        hour +
        ":" +
        min +
        am_pm;
}