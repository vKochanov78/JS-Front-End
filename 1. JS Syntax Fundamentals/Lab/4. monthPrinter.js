function solve(month) {
    let day;
    switch (month) {
        case 1:
            day = "January"
            break;
        case 2:
            day = "February"
            break;
        case 3:
            day = "March"
            break;
        case 4:
            day = "April"
            break;
        case 5:
            day = "May"
            break;
        case 6:
            day = "June"
            break;
        case 7:
            day = "July"
            break;
        case 8:
            day = "August"
            break;
        case 9:
            day = "September"
            break;
        case 10:
            day = "October"
            break;
        case 11:
            day = "November"
            break;
        case 12:
            day = "December"
            break;
        
        default:
            day = "Error!"
            break;
    }

    console.log(day);

}

solve(2);
solve(13);