//-------------------Factorial-------------------
// const fact = (num) => {
//   // let res = 1;
//   // while (num != 1) {
//   //   res *= num--;
//   // }
//   // console.log(res);
//   if (num === 0) {
//     return 1;
//   } else {
//     return num * fact(num-1);
//   }
// };
// console.log(fact(4))

//-------------------OOP in JS-------------------
// function account(balance) {
//   this.balance = balance;
//   this.withdraw = withdraw;
//   this.deposit = deposit;
//   this.show = show;
// }

// const a = new account(100);

// function withdraw(withd) {
//   this.balance -= withd;
//   return this.balance;
// }

// function show() {
//   return this.balance;
// }

// function deposit(amount) {
//   this.balance += amount;
//   return this.balance;
// }

// // console.log(account(100, 60));
// a.withdraw(20);
// console.log(a.show());
// a.deposit(220);
// console.log(a.show());

//-------------------Arrays-------------------
// let arr= new Array(1,'Joe');
// let arr= new Array(2,'',true);
// let arr = [1,[2,3,4]];
// console.log(Array.isArray(arr));

// let arr[1] = 'test';
// arr[99] = 99;
// console.log(arr);
//output: [undefined, "test", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 99]

// let sentence = 'The quick brown fox jumps over the lazy dog.';
// let words = sentence.split(' ');
// count = 1;
// let newWords = words.map((res) => {
//   // count++;
//   return count++ + ':' + res;
// });
// console.log(count); //10

// var a = 10;
// var b = a;
// a = 100;
// console.log(b);    //--------------------10

// var a = [];
// var b = [];
// a = b;
// b[0] = 100;
// console.log(a[0]);  //--------------------100----------reference remains same
//                     //--------------------doesn't clone like this

// //deepclone
// var a=[1,2,3,4,5,6,7,8,9]
// var b = [];
// for(let i=0; i<a.length; i++){
//   b[i] = a[i];
// }
// a[0] = 100;
// console.log(b[0])         //------------------1-------------b[0] retains the original value with was copied in iteration

// //indexOf &lastIndexOf
// var a = [1,1,1,2,1,1,1,1,1,2,1,1,1,1];
// console.log(a.indexOf(2)+' '+a.lastIndexOf(2));   //-----------3 9-----------

// //array join similar to array toString
// var a = [1, 2, 3, 4, 5, 6, 7];
// var b = [8, 9, 0];
// a = a.join();
// b = b.toString();
// console.log(a + ' ' + b);

// //concat
// var a = [1,2,3];
// var b=[4,5];
// console.log(a.concat(b))//---------[1,2,3,4,5]-----------------

// //concat traditional
// var a = [1,2,3];
// var b = [4,5];
// var c = [];
// var length = a.length;
// for(let i=0; i<b.length; i++){
//   // a.push(b[i]);
//   a[length+i] = b[i];
// }
// console.log(a);

//unshit traditional
// var a = [1, 2, 3];
// for (let i = a.length-1; i >=0; i--) {
//   a[i+1] = a[i];
//   console.log(a[i]);
// }
// a[0] = 0;
//  console.log(a);

// unshift
// var a = [1,2,3,4];
// a.unshift(-2,-1,0)//---------[-2, -1, 0, 1, 2, 3, 4]-------------
// console.log(a);

//shift and push
// var a = [5,1,2,3,4];
// var newNum = a.shift();
// a.push(newNum);
// console.log(a);//----------[1,2,3,4,5]------------------

//pop
// var a = [1,2,3]
// console.log(a.pop());//------------3------------------
// console.log(a);//-----------[1,2]-------------------

//splice (index, removeCount, toAddElements)
// var a = [1,2,3,99,7,8,9];
// a.splice(3,1);
// console.log(a);//--------[1,2,3,7,8,9]-----------
// a.splice(3,0,4,5,6); //------------a.splice(3,0,test)----where test=[4,5,6]
// console.log(a);//-------------[1,2,3,4,5,6,7,8,9]------------

//reverse
// var a = [1,2,3,4,5];
// console.log(a.reverse());

//sort(lexicographically)
// var a=[3,2,1,100,111];
// console.log(a.sort());//----------[1,100,111,2,3]

//sort(required)
// var a=[3,2,1,100,111];
// function compare(num1,num2){
//   return num1-num2;
// }
// console.log(a.sort(compare));//---------3-2 is postive so it sorts these elements and here 1-100 is negative, so it is not sorted-----------

//forEach
// var a = [1,2,3,4,5,6,7,8,9,0];
// function square(num){
//   console.log(num**2)
// }
// a.forEach(num=>console.log(num**2));//---------does not return new array;--------

//every
// var a=[1,2,3,4,5,6,7,8,9];
// console.log(a.every(num=>num>0));//-----------true--------------

//some
// var a = [1,2,3,4,5,6,7,8]
// console.log(a.some(num=>num%2===0));//------------true-------------

//reduce add
// var a = [1,2,3,4];
// console.log(a.reduce((num1,num2)=>num1+num2))//----------Note Two Parameters-------
//-----------result: 10-------------

//reduce concat
// var a = ['hello','there','hru'];
// console.log(a.reduce((word1,word2)=>word1+' '+word2));
// result: hello there hru

//reduceRight
// var a = ['hello','there','hru'];
// console.log(a.reduceRight((word1,word2)=>word1+' '+word2));
// result: hru there hello

//map
// var a = [1,2,3,4,5];
// a=a.map(num=>num*num)//------------does not work for forEach-------------
// console.log(a);
//result [1,4,9,16,25]

//filter
// var a = [1,2,3,4,5,6,7,8,9];
// a = a.filter(res=>res%2===0);
// console.log(a);
//result [2,4,6,8]

//indexOf and filter
// var a = ['recieve', 'conceive', 'decieve'];
// a = a.filter(res=>res.indexOf('cie')>-1);  //checks for cie in array values, returns the word with cie in it.
// console.log(a);
//result ['recieve', 'decieve'];

//Array in Object
// function studentMarks() {
//   this.data = [];
//   this.average = average;
//   this.add = add;
//   this.show = show;
// }
// function add(val) {
//   this.data.push(val);
// }
// function average() {
//   let total = this.data.reduce((val1, val2) => val1 + val2);
//   return total / this.data.length;
// }
// function show() {
//   console.log(this.data);
// }
// a = new studentMarks();
// a.add(10);
// a.add(20);
// a.add(30);
// a.add(40);
// a.add(50);
// a.add(60);
// console.log(a.average());
// a.show();

