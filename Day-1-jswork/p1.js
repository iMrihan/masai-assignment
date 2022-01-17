

let array = [1,2,3,4,5];
Object.freeze(array);


function check(array){
let copyArray = [];


for(let i = 0; i<array.length; i++){
copyArray.push(array[i]);
}
copyArray[0] = 6;
console.log("copyArray:",copyArray);
console.log("array:",array);


}
check(array);

