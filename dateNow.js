setInterval(dateNow,1000);
function dateNow(){
    let date = new Date();
    let d = date.getDay()+1;
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();
    let dateString = "", dayString = "", monthString = "";

    switch (d){
        case 1:
            dateString = "Sunday";  
            break;
        case 2:
            dateString = "Monday";
            break;    
        case 3:
            dateString = "Tuesday";
            break;     
        case 4:
            dateString = "Wednesday";
            break;  
        case 5:
            dateString = "Thursday";
            break;    
        case 6:
            dateString = "Friday";
            break;      
        case 7:
            dateString = "Saturday";
            break;   
    }

    for (var i = 1; i <= 31; i++)
    {
        if (dd == i){
            if (i % 10 == 1 && i != 11)
            {
                dayString = dd + "st";
            }
            else if(i % 10 == 2 && i != 12)
            {
                dayString = dd + "nd";
            }
            else if(i % 10 == 3 && i != 13)
            {
                dayString = dd + "rd";
            }
            else
            {
                dayString = dd + "th";
            }
            break;
        }
    }

    switch (mm){
        case 1:
            monthString = "January";  
            break;
        case 2:
            monthString = "February";
            break;    
        case 3:
            monthString = "March";
            break;     
        case 4:
            monthString = "April";
            break;  
        case 5:
            monthString = "May";
            break;    
        case 6:
            monthString = "June";
            break;      
        case 7:
            monthString = "July";
            break;  
        case 8:
            monthString = "August";  
            break;
        case 9:
            monthString = "September";
            break;    
        case 10:
            monthString = "October";
            break;     
        case 11:
            monthString = "November";
            break;  
        case 12:
            monthString = "December";
            break;  
    }
    dd = (dd < 10) ? "0" + dd : dd;
    mm = (mm < 10) ? "0" + mm : mm;

    let today = dateString + ", " + monthString + " " + dayString + ", " + yyyy;
    document.getElementById("dateDisplay").innerText = today;
    var dateToday = setTimeout(dateNow,1000);
}

dateNow();