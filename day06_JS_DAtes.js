// That's my solution : a bit stupid
function getDayName(dateString) {
    let dayName;
    const date = new Date(dateString)
    const day = date.getDay()
    switch(day){
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = " Tuesday"
            break;
        case 3:
            dayName = "Wednesday"
            break;
        case 4:
            dayName = "Thursday"
            break;
        case 5:
            dayName = "Friday"
            break;
        case 6:
            dayName = "Saturday"
            break;
    }
    return dayName;
}


function main() {
    const d = +(readLine());

    for (let i = 0; i < d; i++) {
        const date = readLine();

        console.log(getDayName(date));
    }

}
// A cleaner solution
function getDayName(dateString){
    let dayName;
    let days ={
        0: "Sunday",
        1:"Monday",
        2:"Tuesday",
        3:"Wednesday",
        4:"Thursday",
        5:"Friday",
        6:"Saturday",
    }
    const date = new Date(dateString)
    const day = date.getDay()
    dayName = days[day]
    return dayName
}
day.se
/*
JavaScript Dates

How to create a new date (the current date)
    const day = new Date(You can put your date here if you want or let it empty )

Get methods:
    const year = day.getFullYear()
    const month = day.getMonth()
    const date = day.getDate() (day of the month)
    const day = day.getDay() ( day of the week starting with sunday=0)
    etc.... getHours , getMinutes , getSeconds

Set methods:
    const year = day.setFullYear(year)
    const month = day.setMonth(Month)
    etc ..... setDate() ,setDay() .....


You can also compare dates
 */