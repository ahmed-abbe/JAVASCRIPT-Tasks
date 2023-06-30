let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(myFriends.indexOf("Ahmed"), num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(
    myFriends
        .reverse()
        .slice(myFriends.length - num)
        .sort()
); // ["Ahmed", "Elham", "Osama"];
