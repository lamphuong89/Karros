//boolean value
//let isSunday = false;
//console.log(isSunday);

//let temp = (1 == 2);//false
//console.log(temp);

//let temp2 = (2 == 2);//true
//console.log(temp2);

//or phu dinh lai (!)
//console.log(!temp2);

//----- chinh format Option+Shift+F
//if else statement 
// let number = 0;
// if (number % 2 == 0 && number > 0) {
//     //dieu kien dung thi lam gi
//     console.log('Day la so chan');
// }
// else if (number == 0) {
//     //lam them cai gi do
//     console.log('Khong');
// }

// else {
//     console.log('so le')

// }

//-----------command / de // nhieu dong ------------------
// //2 dang bang, voi 3 dau bang khac nhau 
// let a=10;
// let str='10';
// console.log(typeof(a)); //strict equal
// console.log(typeof(str));


//----------------------------cau truc dieu khien switch .... case  ----------------------------
// let number = 10;
// switch (number) {
//     case 10:
//         {
//             console.log('10');
//         }

//     case 100: {
//         console.log('100');
//     }

//     default: console.log('cai gi cung duoc');
// }

//------------------- For
// for (let i=0; i<=10; i++){
//     //lam gi do
//     console.log(i);
// }

//----- biet truoc so lan lap nen xai FOR, Print so chan tu 0-20 --------
//let n;
// for (let i = 0; i <= 20; i++) {
//     if (i % 2 == 0) {
//         console.log(i);

//     }
//     //console.log(i);
// }
//---------------- biet truoc so lan lap nen xai FOR, Print so le tu 0-20 ----------

// for (let i = 0; i <= 20; i++) {
//     if (i % 2 == 1) {
//         console.log(i);

//     }
// }

//----------------- Tinh tong tu 1 den 10
// let sum=0;
// for(let i = 0;i<=10;i++){
//     sum=i+sum;
// }
// console.log("Tong tu 1 den 10 la:",sum);

//------------------ Tinh tong cua 1 mang dung FOR .... IN
// let number=[1,2,3,4];
// let sum = 0;
// for(let value in number){
// sum=sum+number[value];
// }
// console.log(sum);

//------------------ Tinh tong cua mot array dung FOR ... OF -----------
// let number = [1, 2, 3, 4];
// let sum = 0;
// for (let value of number) {
//     sum = sum + value;
// }
// console.log("Tong cua mang number la: ", sum);

//////----- FOR ....IN ....
// let object_1={
//     name:'cybozu',
//     age:'10',
//     position:'QA',
//     address:'106 nguyen van troi'
// }

// for(let key in object_1){
//     console.log(key);
// }

// FOR ..... EACH ...

let arr = ['Honda', 'Yamaha', 'Sirius', 'AB'];
// arr.forEach(item=>{
//     console.log(item);
// });

// for(let i=0;i<=arr.length;i++){
//     console.log(arr[i]);

// }

/* whilt(dieu kien){
    dieu kien dung thi lam gi do.
}
*/
// ex for WHILE
// let number = 2;
// while (number < 20) {
//     if (number % 2 == 0) {
//         console.log(number);
//     }
//     number++;
// }


// // Function de tai su dung code
// function nameOfFunction(){
//     console.log('Called function');
//     console.log('Called function2');
//     console.log('Called function3');
// }
// //call function
// nameOfFunction();

// Function truyen 
// function greeting(name, age){
//     console.log('Hello ' + name +' ' +  age) ;

// }

// greeting("Bozuman",'30');


// Funtin co gia tri tra ve thi nen co bien gan cho gia tri tra ve

// function add(number1, number2) {
//     return number1 + number2;

// }

// let result = add(1, 2);
// console.log(result);


//---- arrow function ES6
// const subtract=(number1, number2)=>{
//     return number1-number2;
// }
// console.log(subtract(4,2));

//----------chia 2 so

// const devide = (number3, number4)=>{
//     return number3 / number4;

// }
// console.log(devide(8 , 2));


//----------- default parameter
// const devide = (number3, number4 = 2)=>{  //default parameter, phai dat phia sau
//     return number3 / number4;
// }
// console.log(devide(8 , 2));

// parameter --> noi ve nhung cai truyen zo khi khai bao ham
//and argument: doi so truyen zo

//---- scope cua function: pham vi ma bien co hieu luc

let name = 'cybozu';
function scopeDemo() {
    let name = 'bozuman';
    console.log(name);
}
scopeDemo();






























