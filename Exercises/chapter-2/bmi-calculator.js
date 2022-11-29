let weight = 263.8; // in lbs
let height = 72; // in inches

kilos = weight / 2.2046; // weight in kilos
cms = height * 2.54; // height in cm
meters = cms / 100; // cm to meters

console.log("weight: " + kilos + ", height: " + meters);

bmi = kilos / meters ** 2; // body mass index

console.log("BMI: " + bmi);
