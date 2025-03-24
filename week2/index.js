// x = 10;
// console.log(x);

// x=10
// console.log(typeof x) //number

// x=10.5
// console.log(typeof x) //number

// x='ahmed'
// console.log(typeof x) //string

// x=true
// console.log(typeof x) //boolean

// x=undefined
// console.log(typeof x) //undefined

// x=null
// console.log(typeof x) //object

//========= how to declare var in JS ======//
// 1- ===================== var ===============//
// 1.1- declaration
// var x;
// console.log(x); // undefined
// // 1.2- initialization
// var x = 10;
// console.log(x); // 10
// // 1.3- reassignment
// var x = 10;
// x = 12;
// console.log(x); // 12
// 1.4- redeclare
// var x = 10;
// var x = 12;
// console.log(x); // 12

// 1- ================== let ===============//
// 1.1- declaration
// let x;
// console.log(x); // undefined
// 1.2- initialization
// let x = 10;
// console.log(x); // 10
// 1.3- reassignment
// let x = 10;
// x = 12;
// console.log(x); // 12
//1.4- redeclare    // not allowed in let
// let x = 10;
// let x = 12;
// console.log(x); // syntax error

// 1- ================== const ===============//
// 1.1- declaration  // not allowed in const
// const x;
// console.log(x); // syntax error
// 1.2- initialization
// const x = 10;
// console.log(x); // 10
// 1.3- reassignment  // not allowed in const
// const x = 10;
// x = 12;
// console.log(x); // Type error
//1.4- redeclare    // not allowed in const
// const x = 10;
// const x = 12;
// console.log(x); // syntax error

// ========== arithmetic operator ===========//
// 1- addition
// let x = 10 ;
// x = x + 5 ; //>>>>> reassignment
// let x = 10 ;
// x += 5 ; //>>>>>> x = x + 5 >>>>>>>> reassignment
// console.log(x); //15
// 2- subtraction
// let x = 10 ;
// x = x - 5 ; //>>>>> reassignment
// let x = 10 ;
// x -= 5 ; //>>>>>> x = x - 5 >>>>>>>> reassignment
// console.log(x); //5
// 3- multiplication
// let x = 10 ;
// x = x * 5 ; //>>>>> reassignment
// let x = 10 ;
// x *= 5 ; //>>>>>> x = x * 5 >>>>>>>> reassignment
// console.log(x); //50
// 4- division
// let x = 10 ;
// x = x / 5 ; //>>>>> reassignment
// let x = 10 ;
// x /= 5 ; //>>>>>> x = x / 5 >>>>>>>> reassignment
// console.log(x); //2
// 5- modulus
// let x = 10 ;
// x = x % 5 ; //>>>>> reassignment
// let x = 10 ;
// x %= 5 ; //>>>>>> x = x % 5 >>>>>>>> reassignment
// console.log(x); //0
// 6- power
// let x = 10 ;
// x = x ** 5 ; //>>>>> reassignment
// let x = 10 ;
// x **= 5 ; //>>>>>> x = x ** 5 >>>>>>>> reassignment
// console.log(x); //100000

//======================
// let x = 10 ;
// let y = 11;
// x++ ; //>>>>>> x = x + 1 >>>>>>>> reassignment
// x++; //post increment
// ++x; //pre increment
// console.log(x++); //10
// console.log(x); //11
// let y = x++ + 5;
// console.log(y); //15
// console.log(x); //11
//=========== operator precedence ============//
// let y = x+=1 + 5; //y = x+=6 >>>> x=x+6 >> 16
// console.log(y); //16
// console.log(x); //16
// let z = y++ + ++x;  // 11 + 11
// console.log(z); //22
// let z = y++ + y++; // 11 + 12
// console.log(z); //23
// console.log(y); //13

//================= String & concatenation =========//
// let firstName = "Ahmed" ;
// let lastName = "Shoura";
// console.log(firstName + " " + lastName); // concatenation

// coercion
// let num1 = 10;
// let num2 = '10';
// console.log(num1 + num2); // 1010
// console.log(typeof(num1 + num2)); //string   >>>>> coercion
// console.log(Number(num1 + num2)); //1010   >>>>> conversion
// console.log(typeof Number(num1 + num2)); //1010   >>>>> conversion
// console.log(num1 - num2); // 0 number >>>>> coercion
// console.log(num1 * num2); // 100 number >>>>> coercion
// console.log(num1 / num2); // 1 number >>>>> coercion

// let num1 = 10;
// let num2 = '20';
// let num3 = 30;
// console.log(num2 - num1 + num3); //40 number >>>>> coercion

// let num1 = 10;
// let num2 = '20a';
// let num3 = 30;
// console.log(num2 - num1 + num3); //NAN (not a number)

//============== truthy & falsy values ===================//
// let val = true;
// console.log(val);
// let val1 = 1;
// console.log(Boolean(val1));  //true
// let val2 = -1;
// console.log(Boolean(val2));  //true
// let val3 = 0;
// console.log(Boolean(val3));  //false
// let val4 = 'ayHaga';
// console.log(Boolean(val4));  //true
// let val5 = 'a';
// console.log(Boolean(val5));  //true
// let val6 = ' ';
// console.log(Boolean(val6));  //true
// let val7 = '';
// console.log(Boolean(val7));  //false
// let val8 = NaN;
// console.log(Boolean(val8));  //false
// let val9 = null;
// console.log(Boolean(val9));  //false
// let val10 = undefined;
// console.log(Boolean(val10));  //false

//========================== if condition =====================//
// let isLoggedIn = true;
// let isMale = 'hambozo';
// // = vs == vs ===
// // = reassignment
// // == is equal ?
// if (isLoggedIn) {
//     if(isMale == true){
//         console.log('man pages');
//     }else if(isMale == false){
//         console.log('woman pages');
//     }else{
//         console.log('etl3 bra');
//     }
// }else{
//     console.log('user is not logged in');
// }

// // = vs == vs ===
// // = reassignment
// // == is equal ? (check value)
// // === is equal ? (check value & dataType)
// let num1 = 10;
// let num2 = '10';
// console.log(num1==num2);//true == check value
// console.log(num1===num2);//false === check value & dataType

// =============== && اللى بيوقفها انها تلاقي flase ===============//
// let isLoggedIn = true;
// let isMale = true;
// let val = 15;
// console.log(isLoggedIn && isMale && val); //15  // لما بتقف بتطبع الحاجة اللى وقفت عندها

// let isLoggedIn = true;
// let isMale = false;
// let val = 15;
// console.log(isLoggedIn && isMale && val); //false

// let isLoggedIn = true;
// let isMale = 0;
// let val = 15;
// console.log(isLoggedIn && isMale && val); //0

//==================== || لما بتشوف قيمة ب true  مبتكملش بتطبعها علطول ============//
// let isLoggedIn = true;
// let isMale = null;
// let val = 15;
// console.log(isLoggedIn || isMale || val); // true

// let isLoggedIn = 0;
// let isMale = null;
// let val = 'ass';
// console.log(isLoggedIn || isMale || val); // ass

//==================== if vs switch ==================//
// let salary = 5000;
// let isMale = true;
// if (salary == 5000) {
//     console.log('give him bonus');
// }else if(salary==3000){
//     console.log('ya faqer');
// }else if(salary==2000){
//     console.log('enta magetsh');
// }else{
//     console.log('no');
// }

// switch(salary){ // بتاخد key واحد
//     case 5000:
//         console.log('give him bonus');
//         break;
//         case 3000:
//             console.log('ya faqer');
//             break;
//             case 2000:
//                 console.log('enta magetsh');
//                 break;
//                 default:
//                     console.log('no');
//                     break;
// }

// switch (true) {
//     case salary == 5000 && isMale == true:
//     console.log("give him bonus");
//     break;
//     case 3000:
//     console.log("ya faqer");
//     break;
//     case 2000:
//     console.log("enta magetsh");
//     break;
//     default:
//     console.log("no");
//     break;
// }

//==================== functions ===================//
// don't repeat your self (dry)
// encapsulation
// how to declare function in js
// function nameOfFunction(parameters){//body (logic of code)}
// function summation(x,y){
//     let sum = x + y;
//     console.log(sum);
// }
// summation(1,2);
// summation(5,7);

//================ types of functions ===============//
// ===================== 1- declaration function ====================
// function summation(x,y){
//     return x + y;
// }
// console.log(summation(1,4));

// console.log(summation(1,4)); //hoisting
// function summation(x,y){
//     return x + y;
// }

//========================== 2- expression function =================
// let summation = function(x,y){
//     return x + y;
// }
// console.log(summation(1,4));

// console.log(summation(1,4));//ReferenceError
// let summation = function(x,y){
//     return x + y;
// }

//========================== 2- self invoking function =================
// (function (x,y){
//     let sum = x + y;
//     console.log(sum);
// })(1,2);

// declaration >>>>>> expression >>>>>> arrow function
// let summation = (x,y) => x + y; // return {}
// let randomSum = (x) => x + 8; // ()
// let get3 = () => 3; // required ()
// console.log(randomSum(2));

// ================= first data structure to store data ====================//
// array >> collection of items >>>> JS >>> store dynamic data types
// let arr = [
//   // 0 based
//   "red", //0
//   "green", //1
//   "blue", //2
//   1, //3
//   true, //4
//   undefined, //5
//   ["ahmed", "basmala"], //6
//   "mazen", //7
//   "mazen", //8
// ];
// // how to access value in array >>>>> array methods
// console.log(arr[2]);
// console.log(arr[6][1]);
// console.log(arr.indexOf("mazen"));
// console.log(arr.lastIndexOf("mazen"));
// arr.push(40)
// arr.unshift(30); // Inserts new elements at the start of an array
// arr.pop();
// arr.shift(); // Removes the first element from an array
// console.log(arr.includes('mazen')); // Determines whether an array includes a certain element, returning true or false
// console.log(arr.length);
// console.log(arr);

//======================== object =================//
// let obj = {
//     // key : value >>>> property or field
//     firstName : 'ahmed',
//     salary : 5000,
// };
// // how to access data obj (values)
// console.log(obj.firstName); // dot notation
// console.log(obj['salary']); // bracket notation (subscriptions notation)
// let dd = 'salary';
// console.log(obj[dd]);

// // how add property to object
// obj['age'] = 25;
// obj.lastName = 'shoura';
// console.log(obj);
// // how update value in object
// obj.firstName = 'hambozo';
// console.log(obj);

// let person = {
//     name: "ahmed",
//     salary: 5000,
//     getName: function () {
//     //return this.name;
//     let that = this;
//     function getSalary(that) {
//         console.log(that.salary);
//     }
//     getSalary(that); //self invoking
//     },//method
// };
// //console.log(person.getName());
// person.getName();

// let person = {
//     name: "ahmed",
//     salary: 5000,
//     getName: function () {
//         //return this.name;
//         let getSalary = () => console.log(this.salary);
//         getSalary(); //self invoking
//     }, //method
// };
// //console.log(person.getName());
// person.getName();


// naming conventions
//camelCase >> userName >> variables
//PascalCase >> UserName >> classes
//upper snake case >> DB_URL >> constants

