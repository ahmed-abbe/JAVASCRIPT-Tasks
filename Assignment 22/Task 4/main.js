let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// Regular Expression Pattern Explain
/*
    https? match only if the http has one s letter at the end or no at all
    :\/\/ it's the following of the url with escape chars for / /
    (?:[-\w]+\.)? it's to check if the url contains ?:-sometext. one time in the url or never
    ([-\w]+)\. check of the url contians -sometext. no matter how many time but . will repeaat once only
    \w+(?:\.\w+)? \w+ for one or more chars and ?:\.\w+ to check if there ?:.followed by text once or never
    \/?.* \  (/) is escape for the (/) ? check if the (/) is only once or never apper .* for the . from zero to more
    i so the regular expression not be case sentitive

    so this link will be valid
    http://elzero.org
*/
console.log("http://elzero.org".match(re));
