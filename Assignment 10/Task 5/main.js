let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let j = false;

for (let i = +false; i < friends.length; i++) {
    // check if the name start with the letter a
    if (friends[i].toLowerCase().startsWith(letter)) {
        continue;
    }
    console.log(++j + " => " + friends[i]);
}

/*
    Output:-
    "1 => Sayed"
    "2 => Eman"
    "3 => Mahmoud"
    "4 => Osama"
    "5 => Sameh"
*/
