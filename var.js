//Example 1
/*var a = 10
        function f(){
            console.log(a)
        }
    f();
    console.log(a);*/

//Example2
function f() {
 
    // It can be accessible any
    // where within this function
    var a = 10;
    console.log(a)
}
f();

// A cannot be accessible
// outside of function
console.log(a);

//Example3
/*var a = 10
   
// User can re-declare
// variable using var
var a = 8
console.log(a);
// User can update var variable
a = 7
console.log(a);*/

//Example4

console.log(a);
    var a = 10;