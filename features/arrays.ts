const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const carMakers2: string[] = [];

const dates = [new Date(), new Date()];
const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

// Help with innference with extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incomatoble values
carMakers.push(10);

// Help with 'map', 'reduce', 'forEach'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2014-10-10');
importantDates.push(new Date());
importantDates.push(100);
