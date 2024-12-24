// https://tc39.es/proposal-temporal/docs/index.html
// console.log(Temporal.Now.instant() );

// let myDate = new Date();
// // console.log(myDate);
// // console.log(typeof myDate);
// // console.log(typeof Date);
// // console.log(`toISOString :  ${myDate.toISOString()} `);
// // console.log(`toJSON : ${myDate.toJSON()}`);
// // console.log(`toDateString:  ${myDate.toDateString()}`);
// // console.log(`toLocaleDateString:  ${myDate.toLocaleDateString()}`);
// // console.log(`toLocaleTimeString:  ${myDate.toLocaleTimeString()}`);
// console.log(`toLocaleString : ${myDate.toLocaleString()}`);
// // console.log(`toLocaleDateString :  ${myDate.toLocaleDateString()}`);

// // console.log(`Date : ${myDate.toLocaleDateString()} || Time : ${myDate.toLocaleTimeString()} `);



// let newdata = new Date(2024 , 9 ,28 );
// let newdata = new Date(2024 , 0 , 14 , 3 , 5);
// let newdata = new Date("2024-10-28");
// let newdata = new Date();
// // // console.log(newdata.getHours()); // This would return 14

// // console.log(newdata.toLocaleString());
// console.log(newdata.toDateString());
// console.log(newdata.toTimeString());
// console.log(newdata.getDate());
// console.log(newdata.getFullYear());
// console.log(newdata.getTime());
// console.log(newdata.getHours());

// // milisec -> sec

// console.log(`01/01/1970 till now sec :   ${Math.floor(Date.now() / 1000)}`);

// let extract_day = new Date();
// console.log(extract_day.getMonth() + 1);
// console.log(extract_day.getDate());
// console.log(extract_day.getDay());

// let currdata = Date.now(); // 01/01/1970 to now sudhi ni milisecond de che
// console.log(currdata);

// // Current time
let currentTime = new Date();

// // Today's date at 12:00 AM
let midnight = new Date();
midnight.setHours(0, 0, 0, 0); // Set the time to 12:00 AM

// // Calculate the difference in milliseconds
let differenceInMs = currentTime - midnight;

// // Convert the difference to hours
// let hoursSinceMidnight = differenceInMs / (1000 * 60 * 60);

// console.log(hoursSinceMidnight);
