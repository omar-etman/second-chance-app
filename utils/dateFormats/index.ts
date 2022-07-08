export const dateFormat = (inputDate: string | number | Date | null, format: string) => {
    //handle the null possibility
    if(inputDate === null){
        console.log('error')
        return 
    }
    //parse the input date
    const date = new Date(inputDate);

    //extract the parts of the date
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    //declare format strings
    const dayFormatString  = "dd" || "DD"
    const monthFormatString = "mm" || "MM"
    const yearFormatString = "yyyy" || "YYYY"
    const hoursFormatString = "hh" || "HH"
    const minutesFormatString = "mn" || "MN"
    const secondsFormatString = "ss" || "SS"


    //replace the month
    format = format.replace(monthFormatString, month.toString().padStart(2,"0"));        

    //replace the year
    if (format.indexOf(yearFormatString) > -1) {
        format = format.replace(yearFormatString, year.toString());
    }

    //replace the day
    format = format.replace(dayFormatString, day.toString().padStart(2,"0"));
    // replace hours
    format = format.replace(hoursFormatString, hours.toString().padStart(2,"0"));
    // replace minutes
    format = format.replace(minutesFormatString, minutes.toString().padStart(2,"0"));
    // replace seconds
    format = format.replace(secondsFormatString, seconds.toString().padStart(2,"0"));
    
    return format;
}


