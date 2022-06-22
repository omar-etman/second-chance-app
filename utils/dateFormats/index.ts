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

    //replace the month
    format = format.replace("MM", month.toString().padStart(2,"0"));        

    //replace the year
    if (format.indexOf("yyyy") > -1) {
        format = format.replace("yyyy", year.toString());
    } else if (format.indexOf("yy") > -1) {
        format = format.replace("yy", year.toString().substr(2,2));
    }

    //replace the day
    format = format.replace("dd", day.toString().padStart(2,"0"));

    return format;
}

export const getMonthDifference = (startDate: { getMonth: () => number; getFullYear: () => number; }, endDate: { getMonth: () => number; getFullYear: () => number; }) => {
    return (
      endDate.getMonth() -
      startDate.getMonth() +
      12 * (endDate.getFullYear() - startDate.getFullYear())
    );
  }

export const ageDisplay = (startDate: { getFullYear: () => number; getMonth: () => number; }, endDate: { getFullYear: () => number; getMonth: () => number; }) => {
    if(startDate === undefined || null){
        return startDate = endDate
    }
    const yearsGap = endDate.getFullYear() - startDate.getFullYear()
    const monthsGap = endDate.getMonth() - startDate.getMonth()
    if(yearsGap === 0) {
        return (
            `${monthsGap} months`
        )
    } else if(yearsGap === 1) {
        return (
            `1 year & ${monthsGap} months`
        )
    } else {
        return (
            `${yearsGap} years & ${monthsGap} months`
        )
    }
}

