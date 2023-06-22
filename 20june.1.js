// For-Loop
let a=prompt("Enter the number of terms");
let x=0,y=1,sum=0;

console.log("Fibonacci Series")
for(let i=1;i<=a;i++){
     document.write("<br>"+x);
    console.log(x);
    sum=x+y;

    x=y;
    y=sum;


}

// While Loop
// let n=prompt("Enter any number");
// let r,s=0,t;
// t=n;

// while(n> 0){
//     r= n % 10;
    
//     s += (r*r*r);
//     console.log(s)
//     n= parseInt (n/ 10);
// }
// if(s == t){
// document.write("Number is Arstrong");
// }
// else{
//     document.write("Number is not a Arstrong", s ," " ,  n);
// }

// program to check an Armstrong number of three digits

// let sum = 0;
// const number = prompt('Enter a three-digit positive integer: ');

// // create a temporary variable
// let temp = parseInt(number);
// while (temp > 0) {
//     // finding the one's digit
//     let remainder = temp % 10;

//     sum += remainder * remainder * remainder;

//     // removing last digit from the number
//     temp = parseInt(temp / 10); // convert float into integer
// }
// // check the condition
// if (sum == number) {
//     console.log(`${number} is an Armstrong number`);
// }
// else {
//     console.log(`${number} is not an Armstrong number.`);
// }


// Do-While Loop
// Sum of Positive Numbers

// let sum=0;
// let num=0;
// do{
//    sum=sum+num;
//     let num=prompt("Enter a number");
//  }while(num>=0)
// console.log("The sum is:+{sum}");


//  let i=1;
// let n=5;
//  do{
//     console.log(i);
//      i++
//  }while(i<=n)




