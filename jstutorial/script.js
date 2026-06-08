// let age=18;
// if(age>=18){
//     console.log("you can vote"); 
// };

// const { createElement } = require("react");



// let color= "green";
// if(color=="red"){
//     console.log("you have to stop")
// }
// if(color=="green"){
//     console.log("you can go")
// }
// if(color=="yellow"){
//     console.log("after some time you can go")
// }



// let marks=80;
// if(marks>=80){
//     console.log("you scored A+")
// } else if(marks>=60){
//     console.log("you scored A ")
// } else if(marks>=33){
//     console.log("you scored B")
// } else if (marks<33){
//     console.log("you are fail")
// }






// let size='S';
// if(size=='XL'){
//     console.log("the price is 250")
// } else if(size=='L'){
//     console.log("the price is 200")
// }else if (size=='M'){
//     console.log("the price is 100")
// }else if(size=='S'){
//     console.log("the price is 50")
// }




// let marks = 99;
// if (marks >= 33) {
//     console.log("pass")
//     if (marks >= 80) {
//         console.log("A+")
//     } else {
//         console.log("A")
//     }
// } else {
//     console.log("better luck next time")
// }



// let goodstring = "ari";
// if ((goodstring[0] === "a") && (goodstring.length > 3)) {
//     console.log("this is a good string")
// }
// else {
//     console.log("not good string")
// }





// // switch case....
// let color = "yellow";
// switch (color) {
//     case "red":
//         console.log("stop")
//         break;
//     case "yellow":
//         console.log("slow down")
//         break;
//     case "green":
//         console.log("go")
//         break;
// }




// let day = 5;
// switch (day) {
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//     case 4:
//         console.log("thursday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     case 6:
//         console.log("saturday");
//         break;
//     case 7:
//         console.log("sunday");
//         break;
// }


// // let firstname= prompt("enter your first name");
// // let lastname= prompt("enter your last name");
// // console.log("welcome",firstname, lastname, "!");




// let num = 108;
// if (num % 10 == 0) {
//     console.log("good");

// } else {
//     console.log("bad");

// }



// let months = "quater 4";
// switch (months) {
//     case "quater 1":
//         console.log("jan,feb,march");
//         break;
//     case "quater 2":
//         console.log("apr,may,june");
//         break;
//     case "quater 3":
//         console.log("july,aug,sep");
//         break;
//     case "quater 4":
//         console.log("oct,nov,dec");
//         break;

// }



// let str = "aprish";
// if ((str[0] === "a") && (str.length > 5)) {
//     console.log("golden string");
// } else {
//     console.log("not good string");
// }







// let a = 5;
// let b = 6;
// let c = 7;




// let fan = "ON";
// switch (fan) {
//     case "ON":
//         console.log("moving");
//         break;
//     case "OFF":
//         console.log("not moving");
//         break;

// }






// // stringmethod
// // trim method

// // let password= prompt("enter your password");
// // console.log (password.trim());

// let uppercase= "krish";
//  console.log(uppercase.toUpperCase());

//  let lowercase= "KRISH";
//  console.log(lowercase.toLowerCase());


// let hello = "krish bedmosh"
//  console.log( hello.indexOf("bedmosh"));



let method = "  krish  ";
console.log(method.trim().toUpperCase());




let str = "ilovecricket";
console.log(str.slice(5));




let replace = "ilovecricket";
console.log(replace.replace("love", "play"));




let fruit = "mango";
console.log(fruit.repeat(3));






// Array

let fruits = ["litchi", "banana", "papaya"];
fruits[0] = "guava";
console.log(fruits);


// SHERIYANS CODING SCHOOL

// rock paper scissor

function rps(user, comp) {

    if (user === comp) return "draw";
    if (user === "rock" && comp === "scissor") return "user";
    if (user === "scissor" && comp === "paper") return "user";
    if (user === "paper" && comp === "rock") return "user";

    return "comp";

}

console.log(rps("rock", "scissor"));



let age = 49;
if (age >= 50) {
    console.log("senior");
} else if (age >= 30) {
    console.log("adult");
} else if (age >= 14) {
    console.log("teen");
} else {
    console.log("child");
}



// LOOPS

// FOR LOOP
//  print 1-100

// for (let i=1; i<100; i++){
//     console.log(i);
// };


// WHILE LOOP
// let j =1;
// while(j<32){
//     console.log(j);
//     j++;
// };



// DO WHILE

// let k =12;
// do{
//     console.log(k);
//  k++;
// }while (k<2);


// for(let i=10; i>0; i--){
//     console.log(i);
// };

// for(let i=2; i<=20; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// };

// let i=1;
// while(i<=15){
//     if(i%2==1){
//         console.log(i);
//     }
//     i++;
// };


// TABLE PRINTING
// for(let i =1; i<=10;i++){
//     console.log(5*i);
// };

// SUM OF NUMBERS
// let sum=0;
// for(let i=1; i<=100;i++){
//     sum= sum+i;
// };
// console.log(sum);



// for(let i=3;i<=50;i++){
//     if(i%3===0){
//         console.log(i);
//     }
// };

// NUMBER CHECKER EVEN OR ODD

// let val = prompt("give a number");
// for(let i=1; i<=val; i++){
//     if(i%2===0){
//         console.log(`${i} is even`)
//     }else {
//         console.log(`${i} is odd`)
//     }
// };



// BREAK AND CONTINUE USAGE
// for(let i=1;i<=100;i++ ){
//         console.log(i)
//     if(i===7){
//         break;

//     }
// }


// for(let i=1;i<=100;i++){
//     if(i===32){
//         continue;
//     }
//     console.log(i);
// };

// SKIP MULTIPLES OF 3
// for(let i=1;i<=20;i++){
//     if(i%3===0){
//         continue;
//     }
//     console.log(i);
// };

// print first 5 odd number from 1-100
// let count=0
// for(let i=1;i<=100;i++){
//     if(i%2===1){
//         count++;
//         console.log(i);
//     }
//     if(count===5) break; 
//     }; 





let n = 5;
let factor = 1;

for (let i = 1; i <= n; i++) {
    factor = factor * i;
};
console.log(factor);
console.log();



function abcd(val) {
    val();
}
abcd(function () {
    console.log("krish  bedmosh");

});



// BMI CALCULATOR
function bmi(weight, height) {
    return weight / (height * height);
}
console.log(bmi(63, 6));


// DISCOUNT CALCULATOR 

function discoutCalculator(discount) {
    return function (price) {
        return price - price * (discount / 100);
    };
};

let discounter = discoutCalculator(10);
console.log(discounter(200));



function counter() {
    count = 0;
    return function () {
        count++;
        return count;
    }
}


let c = counter();
console.log(c());
console.log(c());
console.log(c());
console.log(c());

// IFFE 
(function krish() {
    let name = "bedmsoh";
    console.log(name);
})()

// let arr = [11,25,56,68,98];
// arr.forEach(function(val){
//     console.log((val*2));

// });


// let arr= [12,25,56,78,82];
// let newArr= arr.map(function(val){
//     return 50;
// })
// console.log(newArr);


// let newarray = arr.filter(function(val){
//     if(val>40) return "true";
// })

// console.log(newarray);




let arr = [1, 2, 3, 4, 5, 6];
let newArr = arr.reduce(function (acc, val) {
    return acc + val;
}, 0)

console.log(newArr);




// OBJECTS 

// let obj= {
//     name: "krish",
//     age: 19,
// }
// obj.age;



// for (let key in obj){
//     console.log(key ,obj[key]);
// }


// let role= "admin";

// DEEP CLONING USING JSON 
// let obj = {
//     name: "krish",
//     age: 19,
//     email: "krish@gmail.com",
//     address: {
// city: "jamui",
// state: "bihar",
//     },
//     [role]: "krishbedmosh",
// };

// let obj2 = JSON.parse(JSON.stringify(obj));

let obj = {
    name: "krish",
    age: 19,
    isEnrolled: true,
};

const course = {
    tittle: "javascript",
    duration: "4 weeks",
};

for (let key in course) {
    console.log(key);

};




// DOM (DOCUMENT OBJECT MODEL)

//DOM BY ID 
// document.getElementById("xyz");
//  console.dir(xyz);

//DOM BY CLASS
// let xyz= document.getElementsByClassName("xyz");
// console.log(xyz);

// let h1= document.querySelector("h1");

// CREATING ELEMENT USING DOM 

// let h1= document.createElement("h1");
// h1.textContent= "hello krish bedmosh";
// document.querySelector("body").prepend(h1);



// let A = document.createElement("p");
// A.textContent= "MAI BEDMOSH HU REEE";
// document.querySelector("body").append(A);

// let h1= document.createElement("h1");
// h1.textContent= "i am pro coder";
// document.querySelector("div").prepend(h1);


// let el= document.querySelectorAll("li");
// el.forEach(function(val){
//     console.log(val.textContent);

// });



// let p = document.querySelector("p");
// p.classList.add("hello");




// EVENT AND EVENT LISTNER



let p = document.querySelector("button");
p.addEventListener("click", function () {
    p.classList.add("hello");
    p.textContent = "SURPRISE  SURPRISE  MOTHERFUCKER....!";
});



// let inp= document.getElementById("id");
// inp.addEventListener("input", function(val){
//     if(val.data !== null){
//         console.log(val.data);

//     }
// });




// let sel= document.querySelector("select");
// sel.addEventListener("change", function(valu){
//     console.log(valu.target.value);

// })




//  ALL KEYBOARD CHARACTER IN WINDOW

let h1 = document.querySelector("h1");

window.addEventListener("keydown", function (dets) {
    if (dets.key === " ") {
        h1.textContent = "SPACE";
    } else {
        h1.textContent = dets.key
    }
});









