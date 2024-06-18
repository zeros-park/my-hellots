const whatDate = (): Date => {
    return new Date()
}

/**
 * utils js test, copyright lol
 * @returns 
 */
const whatTime = (): string => {
    return whatDate().getTime().toString()
}

export {
    whatDate,
    whatTime
}