$(document).ready(function() {
    $(".nav-tabs a").click(function() {
        $(this).tab('show');
    });
});

document.getElementById("name").defaultValue = "Huy Vo";
document.getElementById("birthday").defaultValue = "1998-12-14";


var bt1 = document.getElementById("btsetting")
var flagButtonSetting = 1;

$(document).ready(function() {
    $("#btsetting").click(function() {
        if (flagButtonSetting == 0) {
            $("#settingcontent").collapse('hide')
            flagButtonSetting = 1;
            document.getElementById("btdone").click();
        } else {
            $("#settingcontent").collapse('show')
            flagButtonSetting = 0;
        }
    });
    $("#btdone").click(function() {
        $("#settingcontent").collapse('hide')
        flagButtonSetting = 1;
    });
});

function startTime() {
    var asiaTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" });
    asiaTime = new Date(asiaTime);
    var year = asiaTime.getFullYear();
    var month = asiaTime.getMonth();
    var day = asiaTime.getDate();
    var hours = asiaTime.getHours();
    var minutes = asiaTime.getMinutes();
    var seconds = asiaTime.getSeconds();
    month += 1;

    var result = year + " - " + month + " - " + day + "   " + hours + ":" + minutes + ":" + seconds + "   GMT+7";

    document.getElementById("main_content").innerHTML = result;
    var t = setTimeout(startTime, 500);
}
var bdy = document.getElementById("bdy");
var stime = startTime();

var btdone = document.getElementById("btdone");
btdone.onclick = function() {
    if (document.getElementById("name").value.replace(/\s/g, "") === "") {
        document.getElementById("name").value = "Huy Vo";
    }

    if (document.getElementById("birthday").value.replace(/\s/g, "") == "") {
        document.getElementById("birthday").value = "1998-12-14";
    }

    var name = document.getElementById("name").value;
    var sexmale = document.getElementById("sex1").checked;
    var birthday = document.getElementById("birthday").value;

    console.log(birthday);

    var asiaTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" });
    asiaTime = new Date(asiaTime);


    var bd = new Date(birthday);

    if (bd > asiaTime) {
        document.getElementById("birthday").value = "1998-12-14";
    }

    document.getElementById("main_content1").innerHTML = getMainContent1(sexmale, name);
    document.getElementById("main_content2").innerHTML = getMainContent2(sexmale, bd);
    var mct = getMainContent3(bd);
}

btdone.click();

function getB() {
    var asiaTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" });
    asiaTime = new Date(asiaTime);
    var hours = asiaTime.getHours();

    if (hours >= 3 && hours < 11) {
        return "buổi sáng";
    } else {
        if (hours >= 11 && hours < 13) {
            return "buổi trưa";
        } else {
            if (hours >= 13 && hours < 18) {
                return "buổi chiều";
            } else {
                return "buổi tối";
            }
        }
    }
}

function getSex(sexmale) {
    if (sexmale) {
        return "anh";
    } else {
        return "chị";
    }
}

function getAge(date) {
    var asiaTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" });
    asiaTime = new Date(asiaTime);
    var nyear = asiaTime.getFullYear();
    var nmonth = asiaTime.getMonth();
    var nday = asiaTime.getDate();

    var byear = date.getFullYear();
    var bmonth = date.getMonth();
    var bday = date.getDate();

    var result = nyear - byear;
    if (nmonth > bmonth) {
        result--;
    } else {
        if (nmonth == bmonth) {
            if (nday > bday) {
                result--;
            }
        }
    }
    return result;
}

function getDay(date) {
    var asiaTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" });
    asiaTime = new Date(asiaTime);

    var birthday = date;
    var result;

    if (asiaTime.getMonth() > birthday.getMonth()) {
        birthday.setFullYear(asiaTime.getFullYear() + 1);
        result = Math.round(Math.abs(asiaTime.getTime() - birthday.getTime()) / (60 * 60 * 24 * 1000));
    } else {
        if (asiaTime.getMonth() < birthday.getMonth()) {
            birthday.setFullYear(asiaTime.getFullYear());
            result = Math.round(Math.abs(birthday.getTime() - asiaTime.getTime()) / (60 * 60 * 24 * 1000));
        } else {
            if (asiaTime.getDate() > birthday.getDate()) {
                birthday.setFullYear(asiaTime.getFullYear() + 1);
                result = Math.round(Math.abs(asiaTime.getTime() - birthday.getTime()) / (60 * 60 * 24 * 1000));
            } else {
                if (asiaTime.getDate() < birthday.getDate()) {
                    birthday.setFullYear(asiaTime.getFullYear());
                    result = Math.round(Math.abs(birthday.getTime() - asiaTime.getTime()) / (60 * 60 * 24 * 1000));
                } else {
                    result = 0;
                }
            }
        }
    }
    return result;
}

function getMainContent1(sexmale, name) {
    var result = "Xin chào" + " " + getB() + " " + getSex(sexmale) + " " + name;
    return result;
}

function getMainContent2(sexmale, date) {
    var age = getAge(date);
    var result = getSex(sexmale).charAt(0).toUpperCase() + getSex(sexmale).slice(1) + " " + "đang ở tuổi" + " " + age + " " + "và còn" + " " + getDay(date) + " " + "ngày nữa sẽ đến sinh nhật thứ" + " " + (age + 1) + " " + "của" + " " + getSex(sexmale) + ".";
    return result;
}

function getMainContent3(date) {
    var asiaTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" });
    asiaTime = new Date(asiaTime);


    var birthday = date;
    if (asiaTime.getMonth() > birthday.getMonth()) {
        birthday.setFullYear(asiaTime.getFullYear() + 1);
    } else {
        if (asiaTime.getMonth() < birthday.getMonth()) {
            birthday.setFullYear(asiaTime.getFullYear());
        } else {
            if (asiaTime.getDate() > birthday.getDate()) {
                birthday.setFullYear(asiaTime.getFullYear() + 1);
            } else {
                birthday.setFullYear(asiaTime.getFullYear());
            }
        }
    }

    birthday.setHours(0);
    birthday.setMinutes(0);
    birthday.setSeconds(0);

    var cd = countDown(birthday);
}

function getTimeRemaining(endtime) {
    var now = new Date().toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" });
    now = new Date(now);

    var distance = endtime - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
        'total': distance,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function countDown(date) {
    var t1 = getTimeRemaining(date);

    var days = t1.days;
    var hours = t1.hours;
    var minutes = t1.minutes;
    var seconds = t1.seconds;

    function updateClock() {
        var t2 = getTimeRemaining(date);
        var days = (t2.days + " ").bold();
        var hours = (t2.hours + " ").bold();
        var minutes = (t2.minutes + " ").bold();
        var seconds = (t2.seconds + " ").bold();

        var result = days + " ngày " + hours + " giờ " +
            minutes + " phút " + seconds + " giây ";
        document.getElementById("main_content3").innerHTML = result;

        if (t2.total <= 0 || flagButtonSetting == 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}