let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};

let myMap = new Map();

let objKeys = Object.keys(myInfo);

objKeys.forEach((ele) => myMap.set(ele, myInfo[ele]));

console.log(myMap);
console.log(myMap.size);
console.log(myMap.has("role"));

// Needed Output
/*
    Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
    3
    true
*/
