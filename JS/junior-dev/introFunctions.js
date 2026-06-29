/*
Functions allow you tp write reusable bits of code
To use Dry(Do not repeat yourself) by using code block

/{/code block/}/
syntax:
function <name: variable name convection> (<parameters>){
/code block/
}

//Big rule import rule
->  a function executes only when called.
-> calling a function is telling the function to do its work.
*/

/*
Create a simple function that
when you call it it alerts
you on the current time */

function timeAlert(){
        const date = new Date();
        alert(
            `time stamp: $(date.toLocaleString("en-KE",{
            timezone: "Africa/Nairobi",
        })}`,
        );
    }
/*
call a function name then
()-> brackets
 */
timeAlert(); //calling a function




/*
Area of a triangle
0-5*l*w
*/
//base=undefined,height=undefined

function areaOfTriangle(base, height){
console.log(`base, height is ${base} its type $(typeof base}`);
console.log(`height is ${height} its type ${typeof height}`);
const area = 0.5*base*height;
console.log(
`For triangle with base ${base} and height ${height} area is ${area}`,
);
}


/*
53 senario 1:
54   call the areaOfTriangele function dont pass any arguments.<>
55   areaOfTriangle()
56 senario 2:
57   call the funciton pass base of 20 and no width
58   areaOfTriangle(20) // output
59 senario 3:
60   call the function pass base of 20 and height of 30
61   areaOfTriangle(20,30)
62 senario 4:
63   create a variable base1=50 and variable height1=60
64   areaOfTriangle(base1,height1)
65 senario 5:
66   create a variable base2="hello" and variable height2=true
67   areaOfTriangle(base1,height1)
68 */




// Scenario 1: Call the function without passing any arguments
areaOfTriangle(); 


// Scenario 2: Pass a base of 20 and no height (or width)
areaOfTriangle(20); 


// Scenario 3: Pass a base of 20 and a height of 30
areaOfTriangle(20, 30); 


// Scenario 4: Create variables base1=50 and height1=60, then pass them
let base1 = 50;
let height1 = 60;
areaOfTriangle(base1, height1); 


console.log("--- Scenario 5 ---");
let base2 = "hello";
let height2 = true;
areaOfTriangle(base2, height2); 