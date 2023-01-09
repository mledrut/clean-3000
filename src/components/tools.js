export const DisplayDate = (date) => {
    let toDate = new Date(date)
    let d =  Intl.DateTimeFormat('en-GB').format(toDate);
    return `${d}`
  }

export default DisplayDate
