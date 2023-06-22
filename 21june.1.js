// for loop using objects
let marks={
    Diya:67,
    Rakhi:66,
    Mayuri:65,
    Kirti:64
}
// for(let i=0;i<Object.keys(marks).length;i++){
//     console.log("The marks of "+Object.keys(marks)[i] +" are :-" +marks[Object.keys(marks)[i]])
// }

// for(let a in marks){
//     console.log("Marks of " + a + " are "+ marks[a]);
// }

for(let a of "Diya"){
        console.log(a);
     }
    //  Diya: to remove itterable error String or Array can be used
    // sum of n natural numbers
    let num=window.prompt("Enter any number");
    let sum=0;
    
    for(let i=0;i<=num;i++){
    sum=sum+i;
    }
    console.log("Sum of "+num+" natural numbers are :-"+sum);