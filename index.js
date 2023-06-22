
// let a=2;
// let b=4;
// let c=(a<b)?true:false;
// console.log(c);


// function fun(){
//     console.log("hello JS");

//     // For-in Loop
//     let a=[1,2,3,4,5,6,7,8,9,10]
//     for( let element in a){
//    document.write(a[element]+"<br>");
//    console.log(a[element]+"\n");
//     }
// }
// Pattern 
// let i,j,k,space;
// space=4;
// for(i=1;i<=5;i++){
//     for(k=1;k<=space;k++){
// console.log(" ");
    
// for(j=1;j<=i;j++){
//     console.log("*");
   
//     // document.write("\<br>");

    
// }
// console.log("\n");



// // space--;
//     }
//     space--; 
// }



// let n = 5;
// for(let i=1; i<=n; i++)
// {

// for(let j=1; j<=i; j++)
// {
// document.write("* ");
// }
// document.write("<br/>");

// }


// let m = 5;
// let a="";
// for(let i=1; i<=m; i++)
// {

// for(let j=1; j>=i; j++)
// {
// document.write("1 ");
// a=a+j;
// }
// document.write("<br/>");

// }



// let string="";
for(let i=1; i<=5; i++)
{

for(let k=1; k<=(5-i);k++)
{
document.write("&nbsp");
// nbsp:- non bracket space
}
for(j=1;j<=i;j++){
document.write("*");

}
document.write("<br>")
}

for(let i=4; i>=1; i--)
{

for(let k=1; k<=(5-i);k++)
// for one space to 5-1=4 so after 5 for reverse pyramid starting with 4 stars one space is needed
{
document.write("&nbsp");
// nbsp:- non bracket space
}
for(j=1;j<=i;j++){
document.write("*");

}
document.write("<br>")
}






    

