let phone = "+(995)-123 (4567)";

let regex = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/gi;

console.log(phone.match(regex));
