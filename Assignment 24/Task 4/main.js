let date1 = new Date("2003-6-15");
console.log(date1);

let date2 = new Date(2003, 6, 15);
console.log(date2);

let date3 = new Date();
date3.setFullYear(2003, 5, 15);
date3.setHours(0, 0, 0, 0);
console.log(date3);

// Another solution for the third time (it might consider as string date)
/*
    console.log(new Date(Date.parse("2003-6-15")));
*/

// Needed Output
/*
    "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
    "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
    "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
*/
