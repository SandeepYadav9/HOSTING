/* 

--Hosting

is default behiver Move all Declearaction (Variable, function) top scope before Execuation of code.
--Means Declearaction happend befoer code executing

Declaration –> Initialisation (let a;)/Assignment (a=12;)–> Usage (Output);

*/




// Life cycle of variable

let a; // Declear variable
a=3;  // Assignment
console.log(a); // Usess 


//Hosting 

function codeHosting() {
    b=5; // Global scope
    let a=143;    // loacal scope
}
codeHosting();
console.log(a);// Refference error : code are not declered 
console.log("b =>" +  b); // 10



// Function scoping
function fun() {
    console.log(name);
    var name="Monu";
    
}
fun(); // undefiend


function fun1(){
    var name;
    console.log(name);
    name="Sandeep";
}
fun1(); // Undefiend


// Let key word

/*
let are blocked scoped not function scoped 
*/

// console.log(name);// Reference error can not access
// let name="Muskan"; 

//Closer 
// used function and variable bothe in code 

function outerCode() {
let c="Anjana";
    function innerCode() {       
        return c;
        
    }
    return innerCode;
    
}
 let outer=outerCode();
 console.log(outer()); // ANJANA
 console.log(innerCode()); // Refference Error not defiend
 console.log(c);

