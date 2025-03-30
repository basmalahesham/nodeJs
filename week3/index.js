// let arr = [1,2,3,4,5];
//console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// let displayArr = (ele)=>console.log(ele );
// displayArr(arr[0]);
// displayArr(arr[1]);
// displayArr(arr[2]);
// displayArr(arr[3]);
// displayArr(arr[4]);
//don't repeat your self (dry)
//=========================== loops ====================//
//for loop
//for (declare iterator; condition; increment or decrement) {body}
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// print all even numbers from 0 to 10
// for (let i = 0; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// for (let i = 0; i <= 10; i++) {
//     if (i % 2 ) {
//         // time out >>> best performance
//         //i % 2
//         // 0 1
//         // 0 act as falsy >> even
//         // 1 act as truthy >> odd
//         continue; // skip
//     }
//     console.log(i);
// }

//best performance
// for (let i = 0; i <= 10; i++) {
//     if (i & 1 ) {
//         // 0 act as falsy >> even
//         // 1 act as truthy >> odd
//         continue; // skip
//     }
//     console.log(i);
// }

// how get user by id
// let users = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Jane' },
//     { id: 3, name: 'Bob' },
//     { id: 4, name: 'basmala' },
//     { id: 5, name: 'ahmed' },
//     { id: 6, name: 'shoura' },
// ];
// let id =1;
// for (let i = 0; i < users.length; i++) {
//     if (users[i].id == id) {
//         console.log(users[i]);
//         break; // best performance
//     }
// }

// let id =1;
// let i;
// for ( i = 0; i < users.length; i++) {
//     if (users[i].id == id) {
//         console.log(users[i]);
//         break; // best performance  // don't skip ba break (بتخرج من اللوب خالص)
//     }
// }
// console.log(i);

//======================= while loop ==================//
// let i = 0; // declare iterator
// while(i<5 /*condition*/){
//     console.log(i);
//     i++; // increment or decrement
// }
// print all even numbers from 0 to 10
// let i = -1;
// while (i <= 10) {
//     i++;
//     if (i & 1) {
//         continue;
//     }
//     console.log(i);
// }

// let i = 0;
// while (i <= 10) {
//     if (i & 1) {
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }

// how get user by id
// let users = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Jane' },
//     { id: 3, name: 'Bob' },
//     { id: 4, name: 'basmala' },
//     { id: 5, name: 'ahmed' },
//     { id: 6, name: 'shoura' },
// ];
// let id = 3;
// let i = 0;
// while (i < users.length) {
//     if (users[i].id == id) {
//         console.log(users[i]);
//         break;
//     }
//     i++;
// }

// =============== for each >>>> array method ==============//
// let arr = [1,2,3,4];
// arr.forEach((ele)=>{
//     console.log(ele);
// });
// let arr = [1,2,3,4];
// arr.forEach((ele,idx,arr)=>{
//     // continue or break x not used in it
//     console.log(ele,idx,arr);
// });

// =============== for of ==============//
// let users = [
//         { id: 1, name: 'John' },
//         { id: 2, name: 'Jane' },
//         { id: 3, name: 'Bob' },
//         { id: 4, name: 'basmala' },
//         { id: 5, name: 'ahmed' },
//         { id: 6, name: 'shoura' },
// ];
// let id = 4;
// for (let user of users) {  // array only
//     if(user.id==id){
//         console.log(user);
//         break;
//     }
// }

//========================== destructing & spreed operator & rest operator ==============//
// ========================== destructing الاستخراج ======================//
// let person = {
//     firstName : 'ahmed',
//     lastName : 'shoura',
//     salary : 5000,
// }
//let firstName = person.firstName;
//let lastName = person.lastName;
//let {firstName,lastName}=person;  // ahmed , shoura
// let {firstName,hambozo}=person;
// console.log(firstName,hambozo); // ahmed , undefined

// let arr = [1,2,3,4];
// let x = arr[0];
// let y = arr[1];
//let [x,y, ,w]=[1,2,3,4];
// let [x,y, ,w]=arr;
// console.log(x,y,w); // 1 2 4

// ========================== positional argument ======================//
// هتدينى الاولانى هحطه فى الاول هتدينى التاني هحطه فى التاني

// function getInfo(firstName,salary) {
//     return{
//         firstName:firstName,
//         salary:salary,
//     };
// }
// console.log(getInfo('ahmed',5000));//{firstName: 'ahmed', salary: 5000}

// function getInfo(firstName,salary) {
//     return{
//         firstName:firstName,
//         salary:salary,
//     };
// }
// console.log(getInfo(5000,'ahmed'));//{firstName: 5000, salary: 'ahmed'}

// function getInfo(firstName,salary) {
//     return{
//         firstName:firstName,
//         salary:salary,
//     };
// }
// let obj = {firstName:'ahmed',salary:5000};
// console.log(getInfo(obj,4000));//{firstName: {firstName: 'ahmed', salary: 5000}, salary: 4000}

// ========================== named argument =============================//
// function getInfo({firstName,salary}/* كدا انت باعت object*/) {
//     return{
//         firstName:firstName,
//         salary:salary,
//     };
// }
// let obj = {firstName:'ahmed',salary:5000};
// console.log(getInfo(obj));//{firstName: 'ahmed', salary: 5000}

// function getInfo({firstName,salary}/*(one parameter = object) كدا انت باعت */) {
//     //let {firstName,salary} = Object;
//     return{
//         firstName:firstName,
//         salary:salary,
//     };
// }

// function getInfo({firstName,salary}) {  // كدا انت عملت destructing
//     return{
//         // لما يكون ال key = value بنكتب واحد فقط
//         firstName, //firstName:firstName
//         salary, //salary:salary
//     };
// }
// console.log(getInfo({salary:5000,firstName:'ahmed'}));//{firstName: 'ahmed', salary: 5000}

// ========================== ... spreed operator (right) ======================//
// بتفرد اوبجكت جوا اوبجكت
// let person = {
//     firstName: "ahmed",
//     lastName: "shoura",
//     salary: 5000,
// };
// let personCopy = person; // ref نفس ال
// personCopy.firstName = "hambozo";
// console.log(person);//{firstName: 'hambozo', lastName: 'shoura', salary: 5000}

// let person = {
//     firstName: "ahmed",
//     lastName: "shoura",
//     salary: 5000,
// };
// let personCopy = { ...person }; // ref كدا عملنا جديد// ... (spreed operator)
// personCopy.firstName = "hambozo";
// console.log(person);
// console.log(personCopy);

// let arr = [1,2,3,4];
// let arrCopy = [...arr]; // ([]) ref جديد // right
// arr[0]=10;
// console.log(arr);//[10, 2, 3, 4]
// console.log(arrCopy);//[1, 2, 3, 4]

// ========================== ... rest operator (left) ======================//
// let person = {
//     firstName: "ahmed",
//     lastName: "shoura",
//     salary: 5000,
// };
// let {firstName,...hambozo}=person;
// console.log(firstName,hambozo); // ahmed , {lastName: 'shoura', salary: 5000}

// let arr = [1,2,3,4];
// let [x,y,...w]=[1,2,3,4];
// console.log(x,y,w); //1 2 [3, 4]
// w[0]=12;
// console.log(w); // [12, 4]
// console.log(arr);

//========================== scopes =================//
// global scope
//======================== let
// let x = 10; // let >>> bloc scope

// if(true){ // bloc scope
//     let x = 12;
//     console.log('xif',x);//12

// }

// function test() { // function scope
//     let x = 13;
//     console.log('xfun',x);//13
// }
// test();

// console.log('x',x);//10

// let x = 10; // let >>> bloc scope

// if(true){ // bloc scope
//     //let x = 12;
//     console.log('xif',x);//10

// }

// function test() { // function scope
//     //let x = 13;
//     console.log('xfun',x);//10
// }
// test();

// console.log('x',x);//10

//===================== const
// const x = 10; // let >>> bloc scope

// if(true){ // bloc scope
//     const x = 12;
//     console.log('xif',x);//12

// }

// function test() { // function scope
//     const x = 13;
//     console.log('xfun',x);//13
// }
// test();

// console.log('x',x);//10

// =================== var
// var x = 10; // var >>> function scope

// if(true){ // bloc scope
//     var x = 12;
//     console.log('xif',x);//12
// }

// function test() { // function scope
//     var x = 13;
//     console.log('xfun',x);//13
// }
// test();

// console.log('x',x);//12

//========================= hoisting & TDZ ==============//
// ===================== hoisting
//  initialization و بتخزنها عندها من غير declare اللى معملوها vars بتعدى على الفايل كله بتشوف ال
// ============= var
// console.log(x);//undefined
// var x = 10;

// ==================== TDZ (Temporal Dead Zone)
// //================= let >>> TDZ
// console.log(x);//ReferenceError:Cannot access 'x' before initialization
// let x = 10;

//================= const >>> TDZ
// console.log(x);//ReferenceError:Cannot access 'x' before initialization
// const x = 10;

//======================== error & try catch ====================

// const x = 10;
// x = 12; // TypeError: Assignment to constant variable

// ================== throw Error
// let isLoggedIn = false;
// if (isLoggedIn == false){
//     throw new Error('please login');// message stack(بيعرض المشكلة حاصلة فين بالضبط) >> development
// }

// ============== handling error
// try {
//     let isLoggedIn = false;
//     if (isLoggedIn == false) {
//         throw new Error("please login", { cause: "3lashan mesh 3amel login" }); // message ,options{},stack(بيعرض المشكلة حاصلة فين بالضبط) >> development
//     }
// } catch (error) {
//     //console.log(error.message);
//     console.log({
//         message: error.message,
//         stack: error.stack,
//         cause: error.cause,
//     });
// }

// try {
//     let isLoggedIn = false;
//     const x = 10;
//     x = 12;
//     if (isLoggedIn == false) {
//         throw new Error("error", { cause: "3lashan mesh 3amel login" }); // message ,options{},stack(بيعرض المشكلة حاصلة فين بالضبط) >> development
//     }
// } catch (error) {
//     //console.log(error.message);
//     console.log({
//         message: error.message,
//         stack: error.stack,
//         cause: error.cause,
//     });
// }

// try {
//     const x = 10;
//     x = 12; // JS throw new error('assignment to constant variable')
// } catch (error) {
//     //console.log(error.message);
//     console.log('a7la mesa');
// }

//============================= asynchronous =========================
// console.log('first');
// console.log('second');
// console.log('third');

// console.log('get user data from DB');//time
// console.log('update user data');//status >> online // time
// console.log('show user data to FE');// time

// JS >>> non blocking >>> synchronous  بتحتاج وقت مش هتفضل مستنياك هتركنك على جنب
// setTimeout(() => {
//     console.log('get user data from DB');//time
// }, 3000); // 0ms >> 4ms >> 10ms >> 100ms >> 100

// setTimeout(() => {
//     console.log('update user data');//status >> online // time
// }, 2000);

// setTimeout(() => {
//     console.log('show user data to FE');// time
// }, 1000);

// console.log(1);

// setTimeout(() => {
//     console.log('get user data from DB');//time
// }, 3000); // async

// setTimeout(() => {
//     console.log('update user data');//status >> online // time
// }, 2000);// async

// setTimeout(() => {
//     console.log('show user data to FE');// time
// }, 0);// async

// console.log(1);//sync

// setTimeout(() => {
//     console.log('show user data to FE1');// time
// }, 0);// async

// setTimeout(() => {
//     console.log('show user data to FE2');// time
// }, 0);// async
// مش هنعرف نتجكم فى ترتيب الاتنين دول ممكن اى واحدة تسبق التانية

//closure

//============================ callback function ===================//
// function send as a parameter & not execute until the high order function finish(execute)
// to control the flow of the function
function first(fn) {
    setTimeout(() => {
        console.log("get user data from DB"); //time
        //second()
        //third()
        fn(); // calling >> invoking
    }, 3000);
}
function second(fn) {
    setTimeout(() => {
        console.log("update user data"); //status >> online // time
        // third ()
        fn();
    }, 2000);
}
function third() {
    setTimeout(() => {
        console.log("show user data to FE"); // time
    }, 1000);
}
//console.log(second());
//second() >> string >> implementation of second
//second >> declaration f(){//body} >> call
//first(second()); x
//first(second); // callback function

// first(() => {
//     second(third);
// });// second here is not callback because it's not send as a parameter // third is callback

// first(() => {
//     second(() => {
//         third(()=>{
//             forth
//         });
//     });
// });//callback hell

//============================= promises =========================//
// حل مشكلة callback hell
// promise >> pending >> resolve >> reject
// كل promise له then & catch
// take 2 parameters(positional arguments)>>>(resolve,reject)
// any function return promise >> then >> success case >> resolve >> if function run successfully go to then  >> take callback function
// any function return promise >> catch >> fail case >> reject >> if function run fail go to catch >> take callback function
// any function return promise >> async & await اقدر اعمل عليها
function one() {
    return new Promise((resolve, reject) => {
        /**
         * resolve (is a function) >> success case
         * reject (is a function) >> fail case
         */
        setTimeout(() => {
            let isLoggedIn = false;
            if (isLoggedIn) {
                console.log("login successfully");
                //resolve();
                resolve({ name: 'mazen', salary: 5000 });
            } else {
                //console.log("please login first");
                reject("3shan lazem y3ml login");
            }
        }, 3000);
    });
}

function two() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let passwordMatched = true;
            if (passwordMatched) {
                console.log("password matched");
                resolve();
            } else {
                //console.log("invalid password");
                reject("invalid password");
            }
        }, 2000);
    });
}

function three() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let updateProfilePic = true;
            if (updateProfilePic) {
                console.log("update Profile Pic successfully");
                resolve();
            } else {
                //console.log("failed to update profile pic");
                reject("failed to update profile pic");
            }
        }, 1000);
    });
}
// لو حصل resolve هتدخل الستيب اللى بعدها
// لو حصل reject مش هتدخل الستيب اللى بعدها
// one()
//     .then((data) => {
//         console.log(data);
//         two()
//             .then(() => {
//                 three()
//                     .then(() => { // جواها implementation of resolve
//                         console.log("finally done");
//                     })
//                     .catch((error) => {
//                         console.log(error);

//                     });
//             })
//             .catch((error) => {
//                 console.log(error);

//             });
//     })
//     .catch((error) => {
//         console.log(error);
//     });
//============================= async & await ===================//
// مقدرش اعمل async & await الا على function return promise
// await استنى >> should be inside async function
// async function callAll(){
//     try {
//     await one();
//     await two();
//     await three();
//     } catch (error) {
//         console.log({message: error});  // error.message >> undefined , error >> message of error , error.stack >> undefined
//     }
// }

async function callAll(){
    try {
        const x = 10;
        x = 12; // JS throw new error('assignment to constant variable')
    await one();
    await two();
    await three();
    } catch (error) {
        console.log({message: error.message || error, stack: error.stack});
    }
}
callAll();
// connect(url)>>promise>>then>>catch>>async & await