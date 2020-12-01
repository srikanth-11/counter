
var div1=document.createElement("div")
var img=document.createElement("img")
    img.src="0.jpg"
div1.append(img)
document.body.append(div1)
var div2=document.createElement("div")
    div2.id="status"
    document.body.append(div2)
function display10(cb) { 
        setTimeout(function () {
            document.getElementById("status").innerHTML="<h2>please wait for 10 seconds<h2>";
            cb(display9)
        }, 1000)
    }
    
    function display9(cb) {
        setTimeout(function () {
            document.getElementById("status").innerHTML="<h2>please wait for 9 seconds<h2>";
            cb(display8)
        }, 1000)
    }
    
    function display8(cb) {
        setTimeout(function () {
            document.getElementById("status").innerHTML="<h2>please wait for 8 seconds<h2>";
            cb(display7)
        }, 1000)
    }
    
    function display7(cb) {
        setTimeout(function () {
            document.getElementById("status").innerHTML="<h2>please wait for 7 seconds<h2>";;
            cb(display6)
        }, 1000)
    }
    
    function display6(cb) {
        setTimeout(function () {
            document.getElementById("status").innerHTML="<h2>please wait for 6 seconds<h2>";;
            cb(display5)
        }, 1000)
    }
    
    function display5(cb) {
        setTimeout(function () {
            document.getElementById("status").innerHTML="<h2>please wait for 5 seconds<h2>";;
            cb(display4)
        }, 1000)
    }
    
    function display4(cb) {
        setTimeout(function () {
            document.getElementById("status").innerHTML="<h2>please wait for 4 seconds<h2>";
            cb(display3)
        }, 1000)
    }
    
    function display3(cb) {
        setTimeout(function () {
            document.getElementById("status").innerHTML="<h2>please wait for 3 seconds<h2>";
            cb(display2)
        }, 1000)
    }
    
    function display2(cb) {
        setTimeout(function () {
            document.getElementById("status").innerHTML="<h2>please wait for 2 seconds<h2>";
            cb(display1)
        }, 1000)
    }
    
    function display1(cb) {
        setTimeout(function () {
            document.getElementById("status").innerHTML="<h2>please wait for 1 second<h2>";
            cb(message)
        }, 1000)
    }
    
    function message() {
        setTimeout(function(){
            document.getElementById("status").innerHTML='<h1>Happy Independence Day!</h1>';
        },1000)    
    }
    
    display10(function (display9) {
        display9(function (display8) {
            display8(function (display7) {
                display7(function (display6) {
                    display6(function (display5) {
                        display5(function (display4) {
                            display4(function (display3) {
                                display3(function (display2) {
                                    display2(function (display1) {
                                        display1(function (message) {
                                            message()
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
