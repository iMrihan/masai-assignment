// function solve(){
//  for(var i = 0; i<10; i++){
//      return i;
//  }
//  return 10;

// }

// console.log(solve());

// function solve(N){
//     if (N % 2 == 0){
//         return true;
//     }
//     sum = 0;
//     for (i = 2;i<N;i++){
//         sum += i;
//     }
//     return false;
// }

// console.log(solve(16))


// function check(arr){
//     sum = 0;
//     for (i = 0;i<arr.length;i++){
//         sum += arr[i];
//     }
//     if (sum % 2 == 0){
//         return arr.length;
//     }
//     return sum;
// }
// let arr = [1,2,3,4,4];
// console.log(check(arr));

// function check(a,b){
//     a++;
//     b--;
//     if (a > b){
//         return true;
//     }
//     return false;
// }
// let a = 4;
// let b = 4;
// console.log(check(a,b));




// function check(){
//     sum = 0;
//     for (i = 1;i<=10;i++){
//         if (i % 2 == 0){
//             return sum;
//         }else{
//             sum += i;
//         }    
//     }
//     return sum
// }

// console.log(check())


// function check(){
//     a = 2;
//     b = 1;
//     for (i = 2;i<4;i++){
//         if (i % 2 == 0){
//             a += i;
//         }else{  
//             b += i;
//         }    
//     }
//     if (a > b){
//         return true;
//     }else{
//         return false;
//     }
// }


// function check(){
//     for (i = 0;i<=10;i+=2){
//         if (i % 2 != 0){
//             return i;
//         }
//     }
//     return 100;
// }


// function check(){
//     for (i = 1;i<=10;i+=2){
//         if (i % 2 != 0){
//             return i;
//         }
//     }
//     return 100;
// }


// function check(){
//     for (i = 4;i<=21;i++){
//         if (i % 21 == 0 && i % 2 !== 0){
//             return i;
//         }
//     }
//     return 0;
// }
// console.log(check())



let input = "masaischool";
let N = input.length;

let i = 0;
        
     function printLength(input,N,i){
         if(i == N){
             
             return i;
         }
         console.log(i);
         
         printLength(input,N, i+1);
         
     }
    
    console.log(printLength(input,N,i));

