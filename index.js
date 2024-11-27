// Code your solution in this file!
const returnFirstTwoDrivers = function () {
    const allDrivers =  (['Antonia', 'Nuru', 'Amari', 'Mo']);
    return allDrivers.slice(0, 2); 
}

const returnLastTwoDrivers = function () {
    const allDrivers =  (['Antonia', 'Nuru', 'Amari', 'Mo']);
    return allDrivers.slice(2, 4); 
}

const selectingDrivers =  ([returnFirstTwoDrivers, returnLastTwoDrivers]);

function createFareMultiplier(multiplier) {
    return function (fare) {
        return fare * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, driverFunction) {
    return driverFunction(drivers);
}
