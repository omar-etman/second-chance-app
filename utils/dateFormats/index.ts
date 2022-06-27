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
    
    //declare format strings
    const dayFormatString  = "dd"
    const monthFormatString = "mm"
    const yearFormatString = "yyyy"

    //replace the month
    format = format.replace(monthFormatString, month.toString().padStart(2,"0"));        

    //replace the year
    if (format.indexOf(yearFormatString) > -1) {
        format = format.replace(yearFormatString, year.toString());
    }

    //replace the day
    format = format.replace(dayFormatString, day.toString().padStart(2,"0"));

    return format;
}


