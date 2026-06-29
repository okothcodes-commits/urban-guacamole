/*
1. exit code
2. return any required data.
*/

function sayMyName() {
    let first_name = "Samson"; // statement 1
    console.log(`First Name ${first_name}`); // statement 2

    let second_name = "Johnna"; // statement 3
    console.log(`Second Name ${second_name}`); // statement 4

    let full_name = `${first_name} ${second_name}`; // statement 5
    console.log(`Names are ${full_name}`); // statement 6
}

let sayMyNameValue = sayMyName();

console.log(`Function returned ${sayMyName}`);

/*
scenario 1:
    Leave it as it is and look at the results.
    - What happens

scenario 2:
    after the second statement inside the function
    put a return.
    - What happens (exists the function exactly where the return statement is)

scenario 3:
    after the fourth statement inside the function
    put a return.
    - What happens (exists the function exactly where the return statement is)

scenario 4:
    put a return statement anywhere inside your function and return
    a string of your choice

scenario 5:
    put a return statement anywhere inside your function and return
    a number of your choice

scenario 6:
    put a return statement anywhere inside your function and return
    a boolean of your choice
*/

//Scenario 1: Leave the code as it isfunction sayMyName() {
    let first_name = "Samson";
    console.log(`First Name ${first_name}`);

    let second_name = "Johnna";
    console.log(`Second Name ${second_name}`);

    let full_name = `${first_name} ${second_name}`;
    console.log(`Names are ${full_name}`);
}

let sayMyNameValue = sayMyName();

console.log(`Function returned ${sayMyNameValue}`);

//Outout
//First Name Samson
//Second Name Johnna
//Names are Samson Johnna
//Function returned undefined


Scenario 2: Put return after Statement 2
function sayMyName() {
    let first_name = "Samson";
    console.log(`First Name ${first_name}`);

    return;

    let second_name = "Johnna";
    console.log(`Second Name ${second_name}`);

    let full_name = `${first_name} ${second_name}`;
    console.log(`Names are ${full_name}`);
}

let sayMyNameValue = sayMyName();

console.log(`Function returned ${sayMyNameValue}`);

/*
First Name Samson
Function returned undefined
*/

//Scenario 5: Return a number
function sayMyName() {
    let first_name = "Samson";
    console.log(`First Name ${first_name}`);

    return 100;
}

let sayMyNameValue = sayMyName();

console.log(`Function returned ${sayMyNameValue}`);

/*
First Name Samson
Function returned 100
*/