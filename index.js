/* IF STATEMENT
This is a basic form of decision making if a condition is true, then do something (Some 
set of codes need to be executed).
If not, then don't do it!
*/


let age = 50;

if (age >= 50){
    console.log("YOU ARE A MAJOR SENIOR CITIZEN!");
}

else if (age >= 18){
    console.log("YOU ARE AN ADULT!");
}

//If there are any other conditions you would like to check before reaching the else statement, an ELSE IF statement is added.



else if (age <0){
    console.log("YOU HAVE NOT YET BEEN BORN!");
}

//If there's the need to take a different course of action,ELSE statement.
else{
    console.log("YOU ARE A CHILD!");
}


//To check a boolean value,
let online = false;

if(online){
    console.log("YOU ARE ONLINE!");
}

else {
    console.log("YOU ARE OFFLINE! PLEASE CHECK YOUR INTERNET CONNECTION.");
}