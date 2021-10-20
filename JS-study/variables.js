//VARAIBLES:

//we use variables to store information
//to create variable in javascript use "let" "const" key word 

//for example
let message;

//here the variable declares with the name "message"
//we can put some information using assigment opeartor =
let message = "hello!";

//const:

//to declare unchanging variable use "const"
const DOB = "19.11.2005";

//VARIABLES NAMING:

//variables naming should be a letters,digits or the symbol "$" "underscore"
//the first character must not be digit
//when there is multiple letters "camelCase" is commonly used



//DATA TYPE:
//there are eight type of data

//string;

//A string in javascript is surronded by quotes.there are three types of quotes
//double quotes " "....single quotes ' '....backticks `hello`
//double and single quotes are simple quotes there is no difference in javascript
alert("hello");//double quotes
alert('welcome');//single quotes

//backticks are "extended functionality" 
let name = "vaish";
alert(`hello,${name}!`);

//boolean:true or false
let num = 4 > 6;
alert(num);

//null; unknown value-a standlone type that has single value "null"
//undefines;unknown value- a standlone type has single value "undefined"
//"number" for number of any kind integer or floating point

//INTERACTION; "alert"...."prompt"...."confirm"

//alert shows the message
alert("hello!");

//prompt=shows a message asking the user to input text  if cancel button or ECS it clicked null
let age = prompt('how old are you?', 100);
alert(`you are ${age} years old!`);

//confirm=shows a message and wait for the user "ok" "cancel"
//it returns "true" for ok and "false" for cancelor ESC
let isBoss = confirm("Are you are the boss?");
alert(isBoss);

//INCREMENT/DECREMENT

//this two want to applie in before or after the variable. 
//trying it on value 5++ will give an error
//++5 it will add 1
//5++ it wil returns the value
let counter = 5;
alert(++counter)

let apple = 11;
alert(--apple);

//COMPARISION

//comparision value returns the boolean value
//strict equality operator(===)it want have same datatype + value
//lose equality operator(==)
alert("08" == 8);//the output will true
alert("08" === 8);//the output will false because it was in string+number

//CONDITIONAL BRANCHING "IF" 

//"if" statement evaluates a condition in parenthesis 
//if the result is true excutes a block of code
//"if" statement may contain an optional "else"
//"else" excute when the result is false
let year = prompt("In whish year India become Independence?");
if (year == 1947) {
    alert("That's correct! You are smart!");
} else {
    alert("How can you be so wrong?");
}

//we can write it an in simplest way using conditional operator "?"

let year = (year == 1947) ? "That's correct! You are smart!" : "How can you be so wrong?";
alert(year);
//---------------------------------------------><-------------------------------------------------------------
//LOGICAL OPERATORS
//there are four types of logical operators "&&"(and),"||"(or),"!"(not),"??"(nullish coalescing)
//it can be applied in any typeof data not only in boolean

//logical "or"
//it returns true if any one of the operend is true
//if the operand is not in boolean it convert it in bollean for evaluvation
//"or" finds the first truthy value if the many "or" is used
//most of the time "OR ||" used in "if" statement to test any one of the given statement is true

alert(true || false);//output will be true

let hour = 9;
if (hour < 10 || hour > 18) {
    alert(truthy);
}

//logical "and"
//it returns true if the both operend is true
//"and" finds first falsy value if the many "and" is used
//when all the values are truthy and it will returned last value

alert(2 && null && 6 && 9);//the output will null

//logical "not"
//it converts the value in boolean type
//it returns the inverse value

alert(!"vaishu")// the out put will be "false"

//a doubles NOT!! is sometimes used for converting a value to boolean type
alert(!!"vaishu")//the output will be "true"


//nullish coalesing "??"
//it is short way to choose the first defined value
//in other words it returns the first value if it's not null/undefined

let nickname = null;
let username = 0;
alert(nickname ?? username);//output 0


//LOOPS "while" and "for"
//loops are way to repeat the same code in multiple time

//"while" lopps
//the condition is checked before the iteration
let i = 0;
while (i < 3) {
    alert(i);
    i++;
}//output 0,1,2,3


//"do-while" loops
//the condition check after the interation
let j = 5
do {
    alert(j);
    j++;
} while (j <= 7);//output 5,6,7


//"for" loops
//condition check before both interation
for (let v = 0; v <= 5; v++) {
    alert(V);
}//output 0. to 5 shows
//or in another way
letv = 0;
for (; v < 5;) {
    alert(v++);
}

//breaking the loop
//the loop exists when its condition becomes falsy
let sum = 0;
while (true) {
    let value = prompt("enters a number", " ");
    if (!value) break;
    sum += value;
} alert(sum);
//output when we stop or cancel to enter number in prompt it will break and sum the numbers

//"continue" to next interation
//it doesn't stop the whole loops
//instead it stops the current interation and force the loops to start a new one 

for (let v = 0; i < 10; i++) {
    if (v % 2 == 0) continue;
    alert(v);
}//output 0,3,5,7,9
//if we remove continue it show an even number


//lables for break/continue
//lables used to break out the multiple nested loops at once
//the continue directive can be also used with a label.
//it this case code exection jumps to the next interation of the labled loops

outer: for (let g = 2; g < 5; g++) {
    for (let v = 2; v < 5; v++) {
        let input = prompt(`values,(${g},${v})`, " ");
        if (!input) break outer;
    }
} alert("done!");//if value not enter or cancel in the prompt it break and show the alert








