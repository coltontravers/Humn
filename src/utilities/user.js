export const getUserStoryColor = hours => {
    const hoursInMins = hours * 60;
    // User posted story within the last day
    if (hours <= 24) {
        if (hoursInMins <= 5) {
            return "yellow";
        } else if (hoursInMins <= 30) {
            return "blue";
        } else if (hours <= 2.5) {
            return "red";
        }
        return "green";
    }
    return "transparent";
};
