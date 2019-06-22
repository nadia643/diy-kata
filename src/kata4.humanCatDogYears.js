const humanCatDogYears = (number) => {
    if (number === 1) {
        const humanYears = number;
        const catYears = 15
        const dogYears = 15;
        return [humanYears, catYears, dogYears];
    }
    if (number === 2){
        const humanYears = number;
        const catYears = 15 + 9;
        const dogYears = 15 + 15;
        return [humanYears, catYears, dogYears];
    }
    if (number > 2){
        const humanYears = number;
        const catYears = 15 + 9 + (4 * (number - 2));
        const dogYears = 15 + 9 + ( 5 * (number - 2));
        return [humanYears, catYears, dogYears];
}}
module.exports = humanCatDogYears;