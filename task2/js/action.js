$(document).ready(function() {
    $(".nav-tabs a").click(function() {
        $(this).tab('show');
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

    month++;
    var result = year + " - " + month + " - " + day + "   " + hours + ":" + minutes + ":" + seconds + "   GMT+7";

    document.getElementById("question4_2").innerHTML = result;
    var t = setTimeout(startTime, 500);
}

function addRanNum() {
    var num1 = Math.floor(Math.random() * 100) + 1;
    var num2 = Math.floor(Math.random() * 100) + 1;

    var result = num1 + num2;

    document.getElementById("question4_3").innerHTML = num1 + " " + "+" + " " + num2 + " " + "=" + " " + result;

    var t = setTimeout(addRanNum, 5000);
}

var flagChangeBackgroundImg = 0;

function changeBackgroundImg() {
    document.body.style.backgroundColor = null;
    if (flagChangeBackgroundImg == 0) {
        document.body.style.backgroundImage = "url('img/img1.jpg')";
        flagChangeBackgroundImg = 1;
    } else {
        document.body.style.backgroundImage = "url('img/img2.jpg')";
        flagChangeBackgroundImg = 0;
    }
}

var flagChangeBackgroundColor = 0;

function changeColorBackground() {
    document.body.style.backgroundImage = null;
    if (flagChangeBackgroundColor == 0) {
        document.body.style.backgroundColor = "LightGray";
        flagChangeBackgroundColor = 1;
    } else {
        document.body.style.backgroundColor = "LightSteelBlue";
        flagChangeBackgroundColor = 0;
    }
}