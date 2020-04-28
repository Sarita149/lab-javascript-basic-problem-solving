// Important Note - No Built-in functions to be used
// Progression 1: Names and Input
// var Prograd_1 = prompt("Enter driver's name: ");
// console.log(` The driver name is : ${Prograd_1}`);

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
function lengthOfString(str) {
    var s = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] != null)
            s = s + 1;
    }
    // console.log(s);
    return s;
}
var len1 = lengthOfString("Sarita");
var len2 = lengthOfString("vrrshh");
if (len1 > len2) {
    console.log(`The driver has the longest name, it has ${len1} characters.`);
} else if (len1 < len2) {
    console.log(`The navigator has the longest name, it has ${len2} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${len1} characters.<br>`);
}
// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 
// len1 = "sarita";
var str = "sarita";
for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == 'a' || str.charAt(i) == 'A') {
        // console.log("sarita" + " " + str.charAt(i), str.indexOf(i));
    }
    else
        if (str.charAt(i) == 'e' || str.charAt(i) == 'E') {
            // console.log("sarita" + " " + str.charAt(i), str.indexOf(i));
        }
        else
            if (str.charAt(i) == 'i' || str.charAt(i) == 'I') {
                // console.log("sarita" + " " + str.charAt(i), str.indexOf(i));
            }
            else
                if (str.charAt(i) == 'o' || str.charAt(i) == 'O') {
                    // console.log("sarita" + " " + str.charAt(i), str.indexOf(i));
                }
                else
                    if (str.charAt(i) == 'u' || str.charAt(i) == 'U') {
                        // console.log("sarita" + " " + str.charAt(i), str.indexOf(i));
                    }
                    else {
                        // console.log("string not contain vowels");
                    }
}
// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
var str1 = "SaritA"
char = ` `;
j = 0;
k = 0;
for (let i = 0; i < str1.length; i++) {
    char = str1.charAt(i);
    if (char == char.toUpperCase()) {
        j = j + 1
    }
    else
        if (char == char.toLowerCase()) {
            k = k + 1
        }
}
// console.log(`the number of lower case characters: ${k}`);
// console.log(`the number of upper case characters:${j}`);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
var string1 = str1.toUpperCase();
// console.log(string1.split(''));
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
function reverseString(string1) {
    var reverse = " ";
    for (var i = string1.length; i >= 0; i--) {
        reverse = reverse + string1[i];
    }
    return reverse;
}
var b = reverseString(string1);
console.log(b);
// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
function MergeChar(str1, str2) {
    let merge = str2 + " " + str1;
    console.log(merge);
}
MergeChar("ProGrad", "FACEPrep")
// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
var par = " et Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit voluptates corrupti magnam velit eveniet explicabo rerum et. Sequi placeat a eos consequuntur porro fuga, quasi ducimus temporibus eveniet laboriosam incidunt reprehenderit. Maiores architecto repellendus illum maxime voluptas rerum, hic aperiam illo dolore, facilis sit placeat suscipit incidunt quasi pariatur qui nemo dicta reiciendis eos fugit? Tempore et dolore sit sed quam molestiae!Dignissimos, corrupti odio voluptatem in eum rerum atque delectus sunt nesciunt officiis alias quam minus quisquam repellat esse, quo nihil possimus laboriosam eveniet laudantium tempore fugit aliquid excepturi impedit! Repellat.";

var arr = par.split(" ");
var len = par.split(" ").length;
let count = 0;
for (var q = 0; q < len; q++) {
    if (arr[q] == "et" || arr[q] == "et.") {
        count++;
    }
}
document.write("Total number of words in para : " + len);
console.log("Total number of words in para : " + len);
document.write(" <br>");
document.write("Number of time 'et' word appears : " + count + "<br>");
console.log("Number of time 'et' word appears : " + count);
document.write(" <br>");
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".
var phraseToCheck = "amor, roma";
objj = phraseToCheck.replace(/,/g, "");
var obj = objj.split(" ");
var or = obj.join("");
var newstr = "";

//console.log(or.length);
//document.write(or.length);
let len_of_str = or.length
for (let r = len_of_str - 1; r >= 0; r--) {
    newstr = newstr + or.charAt(r);
}

if (or == newstr) {
    console.log("Palindrome.");
    document.write(or + " is a Palindrome.<br>");

} else {
    console.log("Not a Palindrome.");
    document.write(or + " is not a Palindrome.<br>");
}
// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin'
