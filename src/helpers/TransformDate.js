export const transformDate = (date) => {
    const day = date.toLocaleString('en-us',{day: '2-digit'})
    const month = date.toLocaleString('en-us',{month:'short'})
    const year = date.toLocaleString('en-us',{year: 'numeric'})
    return `${month}%20${day}%20${year}%20GMT-0300`
}