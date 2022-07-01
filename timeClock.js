setInterval(timeClock,1000);
function timeClock(){
    let date = new Date(); 
    let hH = date.getHours();
    let mM = date.getMinutes();

    hH = (hH < 10) ? "0" + hH : hH;
    mM = (mM < 10) ? "0" + mM : mM;
    
    let timeString = "hh : mm : ss";
    let curTime = hH + ":" + mM;

    
    document.getElementById("clockDisplay").innerText = curTime; 
    var currentTime = setTimeout(timeClock, 1000); 

    
    const podBackground = document.querySelector(".time");
    
    if(hH >= 5 && hH < 12)
    {
        podBackground.style.background = `linear-gradient(rgb(0,0,0,0.3), rgb(0,0,0,0.7)), url('./img/POD/morning.jpg')`;
        podBackground.style.backgroundSize = "100% 100%";
    }
    else if(hH >= 12 && hH < 17)
    {
        podBackground.style.background = `linear-gradient(rgb(0,0,0,0.3), rgb(0,0,0,0.7)), url('./img/POD/afternoon.jpg')`;
        podBackground.style.backgroundSize = "100% 100%";
    }
    else if(hH >= 17 && hH < 21)
    {
        podBackground.style.background = `linear-gradient(rgb(0,0,0,0.3), rgb(0,0,0,0.7)), url('./img/POD/evening.jpg')`;
        podBackground.style.backgroundSize = "100% 100%";
    }
    else
    {
        podBackground.style.background = `linear-gradient(rgb(0,0,0,0.3), rgb(0,0,0,0.7)), url('./img/POD/night.jpg')`;
        podBackground.style.backgroundSize = "100% 100%";
    }
}

timeClock();