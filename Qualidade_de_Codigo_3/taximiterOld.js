const calculate = function (date, distance) {
    if (date.getHours() > 22 || date.getHours() < 6) {
        return distance * 3.9;
    } else {
        if (date.getDay() === 0) {
            return distance * 3;
        } else {
            return distance * 2;
        }
    }
};