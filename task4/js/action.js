$(document).ready(function() {
    $(".nav-tabs a").click(function() {
        $(this).tab('show');
    });
});

document.getElementById("name").defaultValue = "Huy Vo";
document.getElementById("birthday").defaultValue = "1998-12-14";


document.body.style.backgroundImage = "url('img/pic1.jpg')";
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

    // var content = getMainContent1(sexmale, name);
    document.getElementById("main_content1").innerHTML = getMainContent1(sexmale, name);
    document.getElementById("main_content2").innerHTML = getMainContent2(sexmale, bd);
    var mct = getMainContent3(bd);
    document.getElementById("main_content4").innerHTML = getMainContent4();
    var bg = changeBackgroundImg();
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

function getThanhNgu() {
    var tn = Math.floor(Math.random() * 20) + 1;

    switch (tn) {
        case 1:
            return "Giáo dục nhằm dạy con người yêu thích điều phải, và học làm điều phải hơn là nhằm bắt con người làm điều phải.";
        case 2:
            return "Bạn sẽ khó mà có thể bắt đầu viết chương tiếp theo của cuộc đời mình khi mà bạn cứ đọc mãi những chương trước đó.";
        case 3:
            return "Đôi khi, bạn sẽ chẳng biết được những khoảnh khắc quý giá đến nhường nào cho đến khi chúng biến thành những kí ức đẹp";
        case 4:
            return "Hãy biến ngày hôm nay trở nên thật tuyệt vời đến nỗi ngày hôm qua cũng phải ghen tị";
        case 5:
            return "Hãy tự tặng cho mình vài cành hoa. Những bông hoa chẳng thể nào giải quyết được mọi vấn đề của bạn đâu, nhưng chúng sẽ cho bạn một sự khởi đầu tuyệt vời";
        case 6:
            return "Cuộc sống là thức dậy sớm hơn một giờ đồng hồ để được sống thêm một giờ đồng hồ nữa";
        case 7:
            return "Hãy thử trở thành tia hi vọng cho một người nào đó đang cảm thấy tuyệt vọng";
        case 8:
            return "Chúng ta không thể giúp đỡ tất cả mọi người được, nhưng tất cả mọi người có thể cùng nhau giúp đỡ một người";
        case 9:
            return "Dù cho bản tin thời tiết có dự báo điều gì đi nữa, thì ta hãy cứ sống vui vẻ như thể mùa xuân đã đến rồi";
        case 10:
            return "Căn bệnh lớn nhất của thời đại này đó là khi người ta cảm thấy mình không hề được yêu thương";
        case 11:
            return "Nếu bạn cảm thấy chán nản, khoan hãy tuyệt vọng. Hãy nhìn xem, mặt trời có phiên lặn vào mỗi đêm, nhưng sáng hôm sau nó lại quay trở lại đấy thôi";
        case 12:
            return "Tôi đã thất bại thật nhiều thật nhiều lần trong cuộc đời mình. Và đó cũng là động lực để cho tôi trở nên thành công như bây giờ";
        case 13:
            return "Bạn có sức mạnh lớn hơn những gì mà bạn nghĩ đấy. Và khi bạn tự tin là chính mình, bạn sẽ trở nên xinh đẹp hơn rất nhiều";
        case 14:
            return "Ta có thể tìm thấy hạnh phúc ngay cả trong giai đoạn đen tối nhất, chỉ cần ai đó hãy nhớ bật đèn lên";
        case 15:
            return "Không có mùa đông nào kéo dài mãi; và cũng chẳng có mùa xuân nào bỏ lượt của nó cả";
        case 16:
            return "Những điều xinh đẹp nhất trên thế giới này đều không thể nhìn thấy và thậm chí cũng không sờ thấy được – chúng chỉ có thể được cảm nhận bằng trái tim";
        case 17:
            return 'Không có gì là không thể. Bởi thế giới này chính nó đã nói rằng "Tôi có thể" mà';
        case 18:
            return "Có một sự nghịch lý là: khi bạn yêu thương đến mức chấp nhận mọi thương đau, thì bạn sẽ không còn cảm thấy đau đớn nữa, bạn sẽ chỉ thấy mình yêu thương nhiều hơn";
        case 19:
            return "Hãy tự tin rằng bạn có thể làm được, như vậy là bạn đã vượt qua một nửa con đường rồi đấy";
        default:
            return "Tôi tin rằng nếu cuộc đời cho bạn một quả chanh, thì bạn hãy pha một ly nước chanh… Và rồi thử tìm đến những người có một chai vodka đi, các bạn sẽ có một bữa tiệc mừng ra trò";
    }
}

function getMainContent4() {
    var result = getThanhNgu();
    return result;
}

function changeBackgroundImg() {

    var bk = Math.floor(Math.random() * 10) + 1;

    console.log(bk);

    document.body.style.backgroundColor = null;

    switch (bk) {
        case 1:
            document.body.style.backgroundImage = "url('img/pic1.jpg')";
            return;
        case 2:
            document.body.style.backgroundImage = "url('img/pic2.jpg')";
            return;
        case 3:
            document.body.style.backgroundImage = "url('img/pic3.jpg')";
            return;
        case 4:
            document.body.style.backgroundImage = "url('img/pic4.jpg')";
            return;
        case 5:
            document.body.style.backgroundImage = "url('img/pic5.jpg')";
            return;
        case 6:
            document.body.style.backgroundImage = "url('img/pic6.jpg')";
            return;
        case 7:
            document.body.style.backgroundImage = "url('img/pic7.jpg')";
            return;
        case 8:
            document.body.style.backgroundImage = "url('img/pic8.png')";
            return;
        case 9:
            document.body.style.backgroundImage = "url('img/pic9.png')";
            return;
        default:
            document.body.style.backgroundImage = "url('img/pic10.jpg')";
            return;
    }
}