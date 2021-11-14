const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// 1.Using variables today and tomorrow for high temperatures. 
const { today, tomorrow } = HIGH_TEMPERATURES;

// 2. Using different variables for destructing.  
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

//3.nesting

const { today: { low: lowToday }, tomorrow: { high: highTom } } = LOCAL_FORECAST;
console.log(lowToday, highTom);

//4.Variables

let a = 8, b = 6;
[a,b] = [b,a];
