
var div1=document.createElement("div")
var img=document.createElement("img")
    img.src="0.jpg"
div1.append(img)
document.body.append(div1)
var div2=document.createElement("div")
    div2.id="status"
    document.body.append(div2)
function countDown(secs,elem) {
    var element = document.getElementById(elem);
    element.innerHTML = "<h3>Please wait for "+secs+" seconds</h3>";
    if(secs < 1) {
        clearTimeout(timer);
        element.innerHTML = '<h1>HAPPY INDEPENDENCE DAY</h1>';
    }
    secs--;
    var timer = setTimeout('countDown('+secs+',"'+elem+'")',1000);
}

    countDown(10,"status");
