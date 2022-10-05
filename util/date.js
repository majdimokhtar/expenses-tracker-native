export function getFormatingDate (date){
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
}

export function getDateMinusDay (date,days){
    return new Date(date.getFullYear(),date.getMonth(),date.getDate() - days)
}