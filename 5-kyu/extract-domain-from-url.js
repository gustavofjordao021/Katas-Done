// link: https://www.codewars.com/kata/514a024011ea4fb54200004b

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domain_name("http://github.com/carbonfive/raygun") == "github"
// domain_name("http://www.zombie-bites.com") == "zombie-bites"
// domain_name("https://www.cnet.com") == "cnet"

let domainOne = "http://github.com/carbonfive/raygun";
let domainTwo = "http://www.zombie-bites.com";
let domainThree = "https://www.cnet.com";

//Uses String.replace() to locate the cases to be removed, like 'http://' 'https://', and 'www.'. After that, it returns the first item of the array split from the string using the '.' in '.com' as the starting point.
function domainName(url) {
  return url
    .replace("https://", "")
    .replace("http://", "")
    .replace("www.", "")
    .split(".")[0];
}

domainName(domainOne);
domainName(domainTwo);
domainName(domainThree);
