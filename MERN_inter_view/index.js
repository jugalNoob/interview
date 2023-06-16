console.log("jugal sharma")

//Qwhat is tricky interview question

//cut array length

let data=[10 , 20 , 30 , 40 , 50 , 60]

data.length=2 // fix length
console.log(data)

//sum all varibale

let sum=data.reduce((x,y)=> x+y)
console.log(sum)

//set array

let set = new Set([1, 1, 2, 4, 6, 7, 6]);
console.log([...set]);


//commama
// let x=10
// x=(x++ , x+=20 ,x)
// console.log(x)

//swaping es6

let x = 20, y = 30;

[x, y] = [y, x];
console.log(x, y)


//!SECTION//10: string in interview question

let str="jugal sharma"
console.log(str.split())
console.log([str])
console.log([...str])
console.log(str.split(""))
console.log(str.split(" "))
console.log(str.split("a"))
console.log(str.replace("j" , "J"))
console.log(str.substring(1 , 3))
console.log(str.substring(1,str.length))
console.log(str.substring(1,str.length-1))
//console.log(str.trim())

let temp = str.split("").reverse().join("");
console.log(temp);