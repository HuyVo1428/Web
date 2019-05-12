$(document).ready(function() {
    $(".nav-tabs a").click(function() {
        $(this).tab('show');
    });
});

var bt1 = document.getElementById("btsetting")
var flagButtonSetting = 0;

$(document).ready(function() {
    $("#btsetting").click(function() {
        if (flagButtonSetting == 0) {
            $("#settingcontent").collapse('hide')
            flagButtonSetting = 1;
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

    var result = year + " - " + month + " - " + day + "   " + hours + ":" + minutes + ":" + seconds + "   GMT+7";

    document.getElementById("main_content").innerHTML = result;
    var t = setTimeout(startTime, 500);
}
var bdy = document.getElementById("bdy");
bdy.onload = startTime();

var btdone = document.getElementById("btdone");
btdone.onclick = function() {
    var name = document.getElementById("name").value;
    var sexmale = document.getElementById("sex1").checked;
    var birthday = document.getElementById("birthday").value;

    document.getElementById("main_content").innerHTML = birthday;
}

function getB() {
    var asiaTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" });
    asiaTime = new Date(asiaTime);
    var hours = asiaTime.getHours();

    if (hours > 3 && hours < 11) {
        return 0;
    } else {
        if (hours > 11 && hours < 13) {
            return 1;
        } else {
            if (hours > 13 && hours < 18) {
                return 2;
            } else {
                return 3;
            }
        }
    }
}

function getSex(sexmale) {
    if (setmale == true) {
        return 0;
    } else {
        return 1;
    }
}

function getAge(date) {

}