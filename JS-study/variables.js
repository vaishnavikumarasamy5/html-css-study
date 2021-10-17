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











