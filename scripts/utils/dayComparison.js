export function isReturnDateAfterDeparture(departureStr, returnStr) {
    const departureDate = new Date(departureStr); //The Date constructor can parse strings in the format YYYY-MM-DD directly
    const returnDate = new Date(returnStr);
    //You compare the two dates using regular comparison operators: >, <, >=, <=.
    if (returnDate <= departureDate) {
        return false;
    }

    return true;
}