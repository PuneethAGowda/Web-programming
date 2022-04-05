//Example1
let a = 10;
function f() {
    let b = 9
    console.log(b);
    console.log(a);
}
f();

//Example2
/*let a = 10;
function f() {
    if (true) {
        let b = 9

        // It prints 9
        console.log(b);
    }

    // It gives error as it
    // defined in if block
    console.log(b);
}
f()

// It prints 10
console.log(a)*/

//Example3
//Users cannot re-declare the variable defined with the let keyword but can update it.
//let a = 10
 
// It is not allowed
/*let a = 9

// It is allowed
a = 7
console.log(a);*/

//Example4
/*Users can declare the variable with the same name 
in different blocks using the let keyword*/
/*let a = 10
  if (true) {
    let a=9
    console.log(a) // It prints 9
  }
  console.log(a) // It prints 10*/

  //Example5
  /*If users use the let variable before the declaration, 
  it does not initialize with undefined just like a var variable and return an error*/
  