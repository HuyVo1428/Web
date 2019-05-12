var arr = [0, 0, 0, 0];
var bt1 = document.getElementById("button1");
var bt2 = document.getElementById("button2");
var bt3 = document.getElementById("button3");
var bt4 = document.getElementById("button4");

bt1.onclick = function() {
    if (arr[0] == 1) {
        arr[0] = 0;
    } else {
        arr[0] = 1;
    }
    arr[1] = 0;
    arr[2] = 0;
    arr[3] = 0;

}

bt2.onclick = function() {
    if (arr[1] == 1) {
        arr[1] = 0;
    } else {
        arr[1] = 1;
    }
    arr[0] = 0;
    arr[2] = 0;
    arr[3] = 0;
}

bt3.onclick = function() {
    if (arr[2] == 1) {
        arr[2] = 0;
    } else {
        arr[2] = 1;
    }
    arr[0] = 0;
    arr[1] = 0;
    arr[3] = 0;
}

bt4.onclick = function() {
    if (arr[3] == 1) {
        arr[3] = 0;
    } else {
        arr[3] = 1;
    }
    arr[0] = 0;
    arr[1] = 0;
    arr[2] = 0;
}

$(document).ready(function() {
    $("#button1").click(function() {
        if (arr[0] == 0) {
            $("#demo").collapse('hide')
        } else {
            $("#demo").collapse('show')
            $("#demo1").collapse('hide')
            $("#demo2").collapse('hide')
            $("#demo3").collapse('hide')
        }
    });

    $("#button2").click(function() {
        if (arr[1] == 0) {
            $("#demo1").collapse('hide')
        } else {
            $("#demo").collapse('hide')
            $("#demo1").collapse('show')
            $("#demo2").collapse('hide')
            $("#demo3").collapse('hide')
        }
    });

    $("#button3").click(function() {
        if (arr[2] == 0) {
            $("#demo2").collapse('hide')
        } else {
            $("#demo").collapse('hide')
            $("#demo1").collapse('hide')
            $("#demo2").collapse('show')
            $("#demo3").collapse('hide')
        }
    });

    $("#button4").click(function() {
        if (arr[3] == 0) {
            $("#demo3").collapse('hide')
        } else {
            $("#demo").collapse('hide')
            $("#demo1").collapse('hide')
            $("#demo2").collapse('hide')
            $("#demo3").collapse('show')
        }
    });

});