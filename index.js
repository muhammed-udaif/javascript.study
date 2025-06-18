// let count = 0;]]]]]]]]
// function increment(){
//     count += 1;
//     document.getElementById('count').innerText = count;
// }
// function decrement(){
//      count -= 1;
//      document.getElementById('count').innerText = count;
// }
// function Reset(){
//     count = 0;
//     document.getElementById('count').innerText = count;
// }
// function Save(){
//     document.getElementById('')
// }

// ]]]]]]]]]aaaaaaaaaaaa

// var ourArray = [1,2,3,4,5,6,7,8,9];
//ourArray.unshift();// ourArray.unshift();
// console.log(ourArray);
// l]]]]]]]]]======================]]]]]]]]\\\\\\\\\\\\\\
// let myName = "udaif";
// let greeting = " Hi, my Name is "
// let myGreeting = greeting + myName;
// console.log(myGreeting);
// let myName = 'muhammed Udaif';
// let greeting = 'welcome back';
// console.log(myName)
// document.getElementById("welcome-el").innerText = greeting + myNam
// // ]]]]]]]]]]]]]]]
// ]]]]]]]
// let firstCard = 17;
// let secondCard = 4;
// let sumOfCard = firstCard + secondCard;
// console.log(sumOfCard);
// if(sumOfCard< 21){
//     console.log("DO you want to draw a new card?");
// } else if (sumOfCard== 21){
//     console.log("Whooo");
// ]]]]]]
// else{
//     console.log("you are out of the game ");
// ]
// let age = 101;
// if(age < 100){
//     console.log("Not elegible");
// }else if(age===100){
//     console.log("Here is your birthday card from the King");
// }]]]]]]]]]]]]]
// else{]]]]]]]]]]]]]]]]]
//     ]]]]]console.log("Not elegible, You have already gotten one");
// }

// console.log(sum);
// if (sum <= 20){
//     message ="Do you want to draw a new card?";
// } else if(sum === 21){
//     message ="whoooo, you've got Blackjack";
//     hasBlackJack = true;
//     console.log (hasBlackJack)
// }
// else{
//     message ="you're out of the game !"
//     isAlive = false;
//     console.log (isAlive)
// }]]]]]]
// console.log(message);

// let player ={
//     name:"udaif",
//     chips: 425
// }
// console.log(player.name)
// // ]
// let firstCard =getRandomCard();
// let secondCard = getRandomCard();
// let cards = [firstCard, secondCard];
// let sum = firstCard + secondCard ;
// let hasBlackJack = false;
// let isAlive = true;
// let message ="";
// document.getElementById("player-el").textContent="hi"

// function getRandomCard(){
//     let randomNumber = Math.floor(Math.random() * 13) + 1
//     if(randomNumber === 1){
//         return 11
//     }else if(randomNumber > 10){
//         return 10
//     }else{
//         return randomNumber
//     }
// }


// function startGame(){
//     renderGame();
// }
// function renderGame(){

//     document.getElementById("cards-el").textContent = "Cards:"
//     for(let i = 0; i< cards.length;i++){
//         document.getElementById("cards-el").textContent += cards[i] + " ";
//     }
//     document.getElementById("sum-el").textContent = "Sum :" + sum;
//     if (sum <= 20){
//     message ="Do you want to draw a new card?";
// } else if(sum === 21){
//     message ="whoooo, you've got Blackjack";
//     hasBlackJack = true;
//     console.log (hasBlackJack)
// }
// else{
//     message ="you're out of the game !"
//     isAlive = false;
//     console.log (isAlive)
// }
// document.getElementById("message-el").textContent = message;
// }
// function newCard(){
//       if(isAlive === true && hasBlackJack === false){
//       let card =getRandomCard();
//       sum += card;
//       cards.push(card);
//       console.log(cards)
//       renderGame();
//       }
      

// }
// ]]]]
// for(let i = 10; i<=100; i +=10){
//     console.log(i)
// }
// let cards = [7,3,9];
// for(let i=0; i< cards.length ; i++){
//     console.log(cards[i]);
// }
// let sentence = ["hello", "my", "name", "is", "per"];
// console.log(sentence)
// for(let i=0 ; i< sentence.length; i++){
//   document.getElementById("greeting-el").textContent = sentence[i]
//     // console.log(sentence[i])
// }]]]]]]
// let player1time =102;
// let player2time = 107;

// function getFastestRaceTime(){
//     if(player1time < player2time){
//         return player1time
//     }else if(player2time < player1time){
//         return player2time
//     }else{
//         return player1time
//     }
// }

// let fastestRace = getFastestRaceTime();
// console.log(fastestRace);
// function totalTimeRace(){
//    return player1time + player2time;
// }

// let totalTime = totalTimeRace();
// console.log(totalTime)][[[[[

// function rollDice(){
//    return  Math.floor(Math.random() * 6 + 1)
// 
// let randomSection = rollDice()
// console.log(randomSection)
// ]
// let likesDocumentaries = false;
// let likesStartups =false;

// if (likesDocumentaries === true || likesStartups === true){
//     recommendMovie()
// }
// function recommendMovie(){
//     console.log("Hey, check out this new film we think you will like")
// }
// let course = {
//     title: "learn css grid for free",
//     lessons: 16,
//     creator: "Per Harald Borgen",
//     length: 63,
//     level:2,
//     isFree: true,
//     tags: ["html", "css"]
// }

// console.log(course.tags)
// let CastleListing = {
//     isAvailable : true,
//     apartName : "Apartment in bengaluru",
//     price: 304,
//     room: ["dining", "bathroom"]
// }
// console.log(CastleListing.isAvailable)
// console.log(CastleListing.room)
// console.log(CastleListing.price)
// console.log(CastleListing.apartName)
// ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
// 
// let person = {
//     name:"per",
//     age: 25,
//     country: "Norway"
// }

// function logData(){
//     console.log(person.name + " " + "is" + " " +person.age + " " + "years old and lives in" + " " + person.country)
// }
// logData();
// let age = 69;
//      if(age<6){
//     console.log("free") 
//  }else if(age<18){
//      console.log("child discount")
//  }else if(age<27){
//      console.log("student discount")
//  }else if(age<67){
//      console.log("full price")
//  }else if (age>66){
//      console.log("senior citizen discount")
//  }]]]]
// let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

// for(let i=0; i<largeCountries.length; i++){
//     console.log("- " + largeCountries[i])
// }
// largeCountries.pop()
// largeCountries.push("Monoco")
// largeCountries.shift()
// largeCountries.unshift("Tuvalu")
// console.log(largeCountries)
// let dayOfMonth = 13;
// let weekday = "friday";
// if(dayOfMonth === 13 && weekday === "friday"){
//     console.log("spooky face")
// }
// let hands = ["rock", "paper","scissor"]

// function randomItem(){
//     let randomIndex = Math.floor(Math.random() * 3) 
//     return hands[randomIndex]
// }]]]]
// console.log(randomItem())
// let fruit = ["apple", "orange", "apple", "apple","orange"]
// let appleShelf = document.getElementById("apple-img")
// let orangeShelf = document.getElementById("orange-img")

// function appleStore(){
//     for(let i=0;i<fruit.length; i++){
//         if(fruit[i]=== "apple"){
//            appleShelf.textContent += "apple"
//         }else if(fruit[i]=== "orange"){
//            orangeShelf.textContent += "orange"
//         }
//     } 
// }
// function buttonClick(){
//     console.log("button clicked");
// }]]]
// let openEL = document.getElementById("input-btn")

// openEL.addEventListener("click", function clicked(){
//     console.log("I want to open the box");
// })
// let saveEl = document.getElementById("input-btn")
// saveEl.addEventListener("click" , function(){
//     console.log("button clicked")
// })]]]]]]]]]]]]]
// let myLeads = []
// const  inputEl = document.getElementById("input-el")
// const openEL = document.getElementById("input-btn")
// const ulEl  = document.getElementById("unorder-list")


// openEL.addEventListener("click", function(){
//     myLeads.push(inputEl.value)
//     inputEl.value = ""
//     console.log(myLeads)
//     renderLead()
// })
// function renderLead(){
//     let listItems = ""
//     for(let i=0; i< myLeads.length; i++){
//     listItems += `<li>
//                        <a href = '#'> ${myLeads[i]} </a> 
//                  </li>`
//   }
//   ulEl.innerHTML = listItems
// }
// const recipient = "Yedhu"
// const sender = "udaif"
// const email = `Hey ${recipient} 
// ! How is it going? 
// Cheers ${sender}`
// console.log(email)
// const welcomeEl = document.getElementById("welcome-el")

// function greetUser(greeting,name){
//     welcomeEl.textContent =`${greeting}   ${name}   Harald Borgen`
// }
// greetUser("nice to meet you", " Udaif");
// let openEl = document.getElementById("welcome-el")
// function add(num1, num2){
//    return num1 + num2
// }
// openEl.textContent = `sum :` + add(3,7)
// function getFirst(arr){
//       return arr[0]
// }
// console.log(getFirst([3,5,6,4,8,9,10]));
// ]]]]]]]]]
// net ninja 
// function openEL(a,b){
//      console.log(a-b);
// }
// console.log(openEL(9,3))]]]
// document.getElementsByClassName("header")[0].innerHTML = " I am fine bro";
// document.getElementsByClassName("header-2")[0].innerHTML = "Thanks for the greeting buddy";
// ]]]]]]]
// var firstName = "udaif";
// var location = "kakkanad";
// ]]]]]
// console.log(firstName, location);
// console.log(`my name is ${firstName}`);
// var firstName = "sulthan";
// var midddleName = "A";
// var lastName = "Kareem";
// var mob = "123456";
// ]]]]]
// console.log(`My Name is ${firstName} ${midddleName} ${lastName} and my mobile number is ${mob}`);
// var num1 = 10;

// var num2 = 20;
// num1 = num1 + num2;
// num2 = num1 - num2;
// console.log(`value of num1 is ${num1} and value of num2 is ${num2}`);
// var time = 24;
// if(time< 12){
//     console.log('Good morning ');
// }else if(time<17){
//     console.log('Good afternoon');    
// }else if(time<20){
//     console.log('Good evening');    
// }else{
//     console.log('Good night');
// }
// var x = 1;
// while(x<=10){
//     console.log(x);
//     x++;
// }
// var x = 1;
// while(x<=20){
//     if(x%2 === 0){
//     console.log(x);
//     }
//     x ++;
// }
// var x = 2 ;
// if( x< 2){
//     console.log(`minimum number is 2`); 
// }
// while(x % 2 === 0 && x<20){
//     console.log(x);
//     x++
// }]]]]]]]]]]]]]]]
// var x =10;
// while(x>= 5){
//     console.log(x);
//     x--;
// // }
// var sum = "";
// for(let i=0;i<=10;i++){
//     sum[i] += sum[i];
// }]]
// console.log(sum);
// let x=1;
// let sum=0;
// while(x<=10){
//     sum += x ;
//     x++;
// }
// console.log(sum);
// ]aaaaaaaaaaaaaaaaaaaaa
// var i =1;
// var num = 5;
// var fact =1;
// while(num>=i){
//     fact = fact * i;
//     i++
// ]]]]]]]
// console.log(fact);
// var num =232;
// var palindromeNum =0;
// var tempNum = num;
// while(num >0){
//     var temp = num%10;
//     palindromeNum = palindromeNum*10 + temp;
//     num = Math.floor(num/10);
// }
// console.log(palindromeNum);
// console.log(num);


//  if(palindromeNum === tempNum){
//         console.log("given number is palindrome");
//     }
//     else {
//         console.log("given number is not palindrome");
        
//     }
// for(let i =10; i>0; i--){
//     console.log(i);  
// }]]]]]]]]s
// let num = 7;
// let fact =1;
// for(let i =1;i<=num; i++){
//     fact = fact * i;
// }a
// console.log(fact);
// var count =0;
// var num =5;

// for(let i=2;i<= num;i++){
//     if(num%i === 0){
//         count ++
//     }
// }
// if(count === 1){
//     console.log("given number is prime");
// }else{
//     console.log("given number is not a prime");
    
// }ssssssssssssssss
// for(let i=1;i<=5;i++){
//     var str = ""
//     for(let j=1; j<=i;j++){
//         var str = str + " " + j
//     }
//     console.log(str);
// }]]]
// for(let i=1; i<=3;i++){
//     var str = ""
//     for(let j=1;j<=5;j++){
//         var str = str + " " + j
//     }
//     console.log(str);   
// }
// for(let i= 1;i<=4;i++){
//     var str = ""
//     for(let j=1;j<=5;j++){
//         var str = str + " "  + "#"
//     }
//     console.log(str);
// }
// for(let i=1;i<=5;i++){
//     var str = ""
//     for(let j=1;j<=4;j++){
//         str = str +" " +i
//     }
//     console.log(str);   
// }]]
// for(let i=1;i<=5;i++){
//     let str=""
//     for(let j=1;j<=i;j++){
//         str = str + " " + "*"
//     }
//     console.log(str);
// for(let i=1;i<=5;i++){
//     let str =""
//     for(let j=1;j<=i;j++){
//         str =str + " " + i
//     }
//     console.log(str);
// }]]]]]]]]]]]]]]]]
// for(let i=5;i>=1;i--){
//     let str =""
//     for(let j=1;j<=i;j++){
//         str = str + " " + "*"
//     }
//     console.log(str);   
// }]][[]]
// for(let i =1;i<=5;i++){
//     let str = ""
//     for(let j=1;j<=i;j++){
//         str = str + " " + "*"
//     }
//     console.log(str);
// }
// for(let i=4;i>=1;i--){
//     let str =""
//     for(let j=1;j<=i;j++){
//         str = str + " " + "*"
//     }
//     console.log(str);
    
// }]
// ]]]]][=[=[=[]]]]
// var day = '';
// var currentDay = new Date();
// var today = currentDay.getDay();
// console.log(today);
// let day = 17;
// switch(day){
//     case 1:
//     console.log("Today is monday");
//     break;
//     case 2:
//     console.log("Today is Tuesday");
//     break;
//     case 3:
//     console.log("Today is wedesday");
//     break;
//     case 4:
//     console.log("Today is Thusday");
//     break;
//     case 5:
//     console.log("Today is Friday");
//     break;
//     case 6:
//     console.log("Today is Saturday");
//     break;
//     case 7:
//     console.log("Today is Sunday");
//     break;
//     default:
//     console.log("Enter a Valid Number");
// }
// let fruit = `grape`;
// switch(fruit){
//     case `apple`:
//     console.log(`${fruit} is a fruit`);
//     break;
//     case `banana`: 
//     console.log(`${fruit} is a fruit`);
//     break;
//     case `grape`:
//     console.log(`${fruit} is a fruit`);
//     break;
//     case `Orange`:
//     console.log(`${fruit} is a fruit`);
//     break;
//     default:
//     console.log(`Enter a Valid fruit name `);
// }]
// const age = 15;
// age >= 18 ? console.log("Eligible for vote"): console.log("Not Eligible for vote");
// for(let i=0;i<=10;i++){
//     if(i==4){
//         break
//     }
//     console.log(i);
// ]]]
// function evenOrOdd(num){
//     if(num%2 === 0){
//       return  "Given number is even";
//     }else{
//       return "Given number is odd";
//     }
// }
// let result = evenOrOdd(54);
// console.log(result)
// function  evenOrOdd(num){
//     let value = num%2 === 0 ? `${num} is even`: `${num} is odd`
//     return value;
// }
// let result = evenOrOdd(34);
// console.log(result);
// function squareOfNum(num){
//     let value = num * num;
//     return `Square of ${num} is ${value}`;
// }
// let result = squareOfNum(345);
// console.log(result);
// function signCheck(num){
//     let value = num === 0? `Given ${num} is neither positive or negative`:num<0? `Given ${num} is negative`: `Given ${num} is positive`;
//     return value;
// }
// let result = signCheck(0);
// console.log(result);]]]]]]]]

// function rangeNumber(){
//    for(let i=0;i<=20;i++){
//     console.log(i);
//    }
// }
// rangeNumber();
// function factNum(num){
//     let fact =1;
//     for(let i =1;i<=num;i++){
//         fact = fact * i;
//     }
//    let result = console.log(fact);
//    return result;
// }
// factNum(10);
// ]
// setTimeout(function(){
//     console.log("hi udaif");
// }, 1000)
// setInterval(function(){
//     console.log("hi ");  
// }, 2000)
// setTimeout(function(){
//     console.log("hello");
// }, 0);
// console.log("hi");
// callback function() ==>  function that passes as an argument to another function.
// function doSumthing(toCall){
//     console.log("1");
//     toCall()
//     // 
// }
// function doAnotherThing(){
//     console.log("2");
// }
// doSumthing(doAnotherThing)
// function firstFunction(callback){
//     setTimeout(function(){
//         console.log("Task 1 is Done");
//         callback()
//     },3000)
// }
// function secondFunction(){
//     console.log("Task 2 is Done");
// }
// firstFunction(secondFunction);
// callback hell : it is the term  used in javascript to describe a situation where callback functions are nested within multiple level of operation 
//Arrow function is a concise way to write a function expression
// variable_name = (arg1,arg2 ) => { statements }
// const arrowVariable = (num1, num2, num3) =>{
//     let sum =num1 + num2 + num3;
//     return sum;
// }
// console.log(arrowVariable(1,2,3));
// let cube = (x) =>{
//     let result = x**3;
//     return result;
// }
// console.log(cube(2));
// function multiplicationOfNum(num1,num2,callback){
//       let sum = num1 *num2;
//       return sum ;
//       let squareOfNum = callback(sum);
//       console.log("square of num :", square);
      
// }
// function square(x){
//     let result = x*x;
//     return result;
// }
// multiplicationOfNum(2,3,square);
// let firstMultiply = (num1,num2,callback) => {
//     let result = num1 * num2;
//     console.log("result of multiplication: ",result );
//     let resultOfNum = callback(result);
//     console.log("Square of num: ", resultOfNum);
// }
// let square = (x) => x*x; 
// firstMultiply(5,5,square);
// nested functions: function defined with another function.
// function outerFunction(){
//     console.log("inside outer function");
//     function innerFunction(){
//         console.log("inside inner function");
//     }
//     innerFunction();
// }
// outerFunction();
// closure in js : when we have two functions one is outer and another is inner then the inner function has to access it's own variables , outer function variables and the global variables .
// let x=10;
// function outerFunction(){
//     let y = 20;
//     function innerFunction(){
//         let m =30;
//         console.log(x);
//         console.log(y);
//         console.log(m);
        
//     }
//     innerFunction();
// }
// outerFunction();
// var num = [1,2,3,4,5]
// var x = ["a","b","c"]
// var m = [1,2,3,4,5,"a","b","c"]
// console.log(m);]]]
// var x = [4,3,6,9,2,4,5,6]
// var result = []
// for(let i=0;i<x.length;i++){
//   result.push(x[i] * x[i]);
// }
// console.log(result);
// let x =[5,7,3,8,9];
// let result = [];
// for(let num of x){
//     if (num>=6){
//        result.push(num)
//     }
// }
// console.log(result);
// let x =[5,7,3,8,9];
// for(let i in x){
//     console.log(i);
//     console.log(x[i]);    
// }
let number = [3,5,7,1,11,8,2,9];
// for(let i in number){
//     if(number[i]<number[i+1]){
//        console.log(number[i]);
//     }
// }
// let lowest = number[0];
// for(let num of number){
//     if(lowest>=num){
//         lowest = num;
//     }
// }
// console.log(lowest);
// let biggest = number[0];
// for(let num of number){
//     if(num >= biggest){
//         biggest = num
//     }
// }
// console.log(biggest);
// var expense = [2000,5000,500,3000,1500]
// total expense 
// var sum = 0;
// for(let i in expense){
//     sum = sum + expense[i] ;
// }
//  console.log(sum);
// for(let i=0;i<expense.length;i++){
//      sum = sum + expense[i];
// }
// console.log(sum)
// let result =[];
// for(let item of expense){
//     if(item > 2000){
//        result.push(item)
//     }
// }
// console.log(result)
// let numbers = [100,150,200,0,0,20,30,50]
// for(let item of numbers){
//     if(item === 50){
//         console.log("The number 50 is present in the array")
//         break;
//     }else{
//         console.log("The number 50 is not present in the array")
//     }
// }
// var searchItem = 50;
// var isFound = false;
// for(let num of numbers){
//     if(num === searchItem){
//         isFound = true;
//         break;
//     }
// }
// if(isFound === true ){
//     console.log(" The number become found");   
// }else{
//     console.log("The number is not in the array");
// }]
// var numbers = [3,2,5,1,4];
// var cubeNumber = [];
// for(let i=0;i<numbers.length;i++){
//     cubeNumber.push(numbers[i] + 5);
// }
// console.log(cubeNumber);]]]

// isFount = false;
// for(let i=0;i<numbers.length;i++){
//    for(let j=i+1;j<numbers.length;j++){
//     if(numbers[i] == numbers[j]){
//        isFount = true;
//        break;
//     }
//    }
// }
// if(isFount === true){
//     console.log("found");
//    }else{
//     console.log("Not found");
//    }
// var numbers = [30,20,40,26,80,20];
// var isFound = false;
// for(let i=0;i<numbers.length;i++){
//     for(let j=i+1; j<numbers.length;j++){
//         if(numbers[i] == numbers[j]){
//             isFound =true;
//             break;
//         }
//     }
// }
// if(isFound === true){
//     console.log("Duplicate element is present in the array");
// }else{
//     console.log("Duplicate element is not present in the array");
// }
// var arr = [2,4,6,3,7];
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         let target = 10;
//         if(arr[i] + arr[j] === target){
//             console.log(`${arr[i]} and ${arr[j]} are pair of target`);
//         }
//     }
// }
// linear search is applicable in all arrays.
// const myArr = [10,90,20,80,30,40,50,60,70]
// const target = 40;
// const linearSearch = (myArr,target) => {
//     for(let i=0;i<myArr.length;i++){
//         if(myArr[i] === target){
//             return i;
//         }
//     }
//     return -1;
// }
// let index = linearSearch(myArr,60);
// console.log(index);
// const fruits = ["apple","cherry","kiwi","orange","banana","papaya"];
// const find = "cherry"
// function linearSearch(fruits,find){
//     for(let i=0;i<fruits.length;i++){
//         if(fruits[i] === find){
//             return i;
//         }
//     }
//     return -1;
// }
// let result = linearSearch(fruits,"cherry");
// console.log(`the ${find} is at the index of ${result}`);
// binary search]]
// const sortedArray = [10,20,30,40,50,60,70,80,90,100,110]
// const target = 90;
// function binarySearch(sortedArray,target){
//    left =0;
//    right = sortedArray.length-1
//    while(left<=right){
//     const mid = Math.floor((left + right)/2 );
//     if(sortedArray[mid] === target){
//         return mid;
//     } if(target > mid){
//          left = mid + 1;
//     }
//     else{
//         right = mid -1
//     }
//    }
//    return -1;
// }
// let result = binarySearch(sortedArray,target);
// console.log(result)
// console.log(sortedArray.indexOf(60));
// var arr = [4,7,6,9,10,3]
// console.log(arr.indexOf(3));
// for each means iterate throught each elelemnt of the array 
// var arr = [10,30,20,40,50,90,60]
// arr.forEach((item,index)=>console.log(item,index)
// ]]]]]]]]]]]]]]]]]]]]]]]]]]==[[[
// var salary = [40000,30000,45000,25000,50000,10000]
// var result =[]
// salary.forEach(item => {
//     if(item> 25000){
//         result.push(item)
//     }
// })]]]]]]]]]
// console.log(result);
// binary search 
// var arr = [10,20,30,40,50,60,70,80,90,100,110];
// var target =1000;
// function binerysearch(arr,target){
//     let left = 0;
//     let right = arr.length-1;
//     while(left <=right){
//     let mid = Math.floor((left + right)/2);
//     if(arr[mid] === target){
//         return mid ;
//     }
//     if(target>arr[mid]){
//         left = mid + 1;
//     }else{
//         right = mid -1;
//     }
     
//   }
//   return -1;
// }
// console.log(binerysearch(arr,1000));
//
// const numbers = [1,2,3,4,5,6,7,8,9,10];
// const firstEven = numbers.find((num) => num%2 ==0 );
// console.log(firstEven);]]
// const arr = [4,8,11,22,10,47]
// const divisible = arr.find((arr) => arr%3 === 0);
// console.log(divisible);
// const fruits = ["banana","orange","apple","mango"]
// console.log(fruits.includes("banana"));
// const numbers = [1,3,5,7,9,11,23];
// const hasEvenNum = numbers.some((num) => num%2===0);
// console.log(hasEvenNum);
// let num = [8,4,5,7,8,3,6,9]
// let newArr = num.slice(2);
// console.log(newArr);]]]
// let numbers = [3,4,5,2,7,1,9,0]
// let result = numbers.splice(1,2 ,200,300,400)
// console.log(numbers);
// let numbers = [3,4,5,2,7,1,9,0]
// let result = numbers.join('')
// console.log(result);
// let numbers = [34,56,78,23,45,12,3,9,33,67,100,99]
// 1
// numbers.unshift(200);
// console.log(numbers);
// 2
// numbers.pop(100)
// numbers.push(300)
// console.log(numbers);
// 3
// numbers.sort((a,b) => b-a);
// console.log(numbers);
// 4
// let result = numbers.map((num) => num*2)
// console.log(result);
// 5
// let result = numbers.indexOf(12);
// console.log(result);
// 6
// const sum = numbers.reduce((sum,currentNum) => {
//     return sum+currentNum})
// console.log(sum);
// 7
// let result = numbers.filter((num) => num%3 === 0)
// console.log(result);
// 8
// let result = numbers.includes(99);
// console.log(result);
// 10
// let result = numbers.slice(2,5)
// console.log(result);
// 11
// let result = numbers.splice(3,400)
// console.log(result);
// let result = numbers.splice(3,0, 400,500);
// console.log(numbers);
// string methods]
// let fruits = "apple banana kiwi orange apple"
// let result = fruits.replaceAll("apple","dragon fruit")
// console.log(result);
// trim is used to remove the space in the start and end 
// var str = "  hello  ";
// let result = str.trim()
// console.log(result);]]
// let str = "malayalam";
// let newStr = "";
// function palindromeNum(value){
//     let result = value.split('')
//     console.log(result);
    // newStr = str.reverse();
    // console.log(newStr)
    // if(newStr === str){
    //     console.log(`The given str ${newStr} is palindrome`);
    // }else{
    //     console.log(`The given str ${newStr} is not a palindrome`);
//     // }
// }
// palindromeNum();
// var str = "English";
// function checkPalindrome(str){
//     var temp1 = str.split('')
//     console.log(temp1);
//     var temp2 = temp1.reverse()
//     console.log(temp2);
//     var temp3 = temp2.join('');
//     console.log(temp3);
//     if(str === temp3){
//        console.log("Given string is palindrome");
//     }else{
//     console.log("Given string is not a palindrome");
// }
// }
// var result = checkPalindrome("English")]]]]]]]]]]]]
// let str = "Vonnue"
// let temp = '';
// function checkPalindrome(str){
// for(let char of str){
//     temp = char + temp;
//     console.log(temp);
// }
// if(temp === str){
//     console.log("Given string is palindrome");
// }else{
//     console.log("Given string is not a palindrome");
// }
// }
// checkPalindrome("Vonnue");
// let sampleString = "Hello world";
// let sample2 = "hello     ";
// let sample3 = "hi hello hi hi";

// 1
// let result = sampleString.toLowerCase();
// console.log(result);
// 2
// let result = sampleString.toUpperCase();
// console.log(result);
// 3
// let result = sampleString.startsWith("T");
// console.log(result);
// 4
// let result = sampleString.endsWith("d");
// console.log(result);
// 5
// let result = sampleString.length;
// console.log(result);
// 6
// let result = sample2.trim();
// console.log(result);
// 7
// for(let char of sampleString){
//     console.log(char);
// }
// 8
// let result = sampleString.slice(3,8);
// console.log(result);
// 9
// let result = sampleString + " " + sample2;
// console.log(result);
// 10
// let result = sample3.replaceAll("hi","hello");
// console.log(result);]]]]
// object 
// let a ={
//     key:3
// }
// let b= {
//     key:4
// }
// function objAdd(a,b){
// return a.key + b.key;
// }
// let result = objAdd(a,b);
// console.log(result);
// var employee = {
//     name:"john",
//     id : 456,
//     location: "kochi",
//     salary: 4500
// }
// console.log(employee);
// console.log(employee.location);
// console.log(employee.name);
// for(let item in employee){
//     console.log(item);
// }
// let key = [];
// for(let item in employee){
//     key.push(item)
// }
// console.log(key);
// console.log('id' in employee);
// employee['address'] = "adfg";
// console.log(employee);
// employee.pincode = 673019;
// console.log(employee);
// employee.age = 13;
// console.log(employee);
// employee.age = 2;
// console.log(employee
// var student = {
//     name: "amal",
//     rollNo : 23,
//     age: 19,
//     address : "wayanad"
// }
// let temp = 'pincode' in student;
// if(temp == false){
//    student.pincode = 673019;
// }
// if('address' in student){
//     student.address = "kochi"
// }
// console.log(student);
// delete student.name;
// console.log(student);
// var car = {
//     name: "Honda city",
//     model : "zx",
//     year: 2023,
//     manufaturer : "Honda",
//     price : 12000000
// }
// // ]]
// console.log(`My car is ${car.name} and manufaturing year is ${car.year}`);
// console.log(`My car price is ${car.price} and model is ${car.model}`);
// car.varient = ['petrol']
// car.varient.push('hybrid')
// console.log(car);
// var student = [ 
//     {
//         name:"john",
//         age : 21,
//         location: "kochi"
//     },
//     {
//         name:"Sam",
//         age: 20,
//         location: "Tvm"
//     },
//     {
//         name: "Rose",
//         age: 20,
//         location:"wayanad"
//     }
// ]
// for(item of student){
//     console.log(item);
// }
// var car = [ 
//     {
//         carName : "Laborgini",
//         price : 230000000,
//         color : "black"
//     },
//     {
//         carName : "porche",
//         price : 34000000000,
//         color: "Elite green"
//     },
//     {
//         carName : "Defender",
//         price : 25000000000,
//         color : "Grey"
//     },
//     {
//         carName: "shift",
//         price : 10000000,
//         color: "white"
//     }
// ]
// car.variant = 'petrol'
// console.log(car);
// for(let item of car){
//     item.variant = 'petrol';
//     item.manual = true;
// }
// console.log(car);
// let obj = {
//     name : "udaif"
// }
// Object.assign(obj, {location: "kakkanad"});
// console.log(obj);
// ]]]]]
// var arr = [ 10,20,30,10,20,40,50,60,30,50,60,10]
// var resultobj = {}
// for(let item of arr){
//     if(item in resultobj){
//         resultobj[item] = resultobj[item] + 1;
//     }else{
//         resultobj[item] = 1
//     }
// }
// console.log(resultobj);
// var str = "hellohowareyouhell";
// find the occurence of the element 
// var obj = {}
//     for(let item of str){
//     if(item in obj){
//        obj[item] = obj[item] + 1;
//     }else{
//         obj[item] = 1;
//     }
// }

// console.log(obj);
// let obj = {}
// for(let item of str){
//     console.log(item);
// }
// var arr = [4,5,2,6,7,3,4,2,6,5,4,3,4,5,2,1,4,5,3,2,5,7,8,9,0,5,3,2,4,5,6,7,8,6,4,4,3]
// var result ={}
// for(let item of arr){
//     if(item in result){
//         result[item] = result[item] + 1
//     }else{
//         result[item] =1;
//     }
// }
// console.log(result);
// let str = "abcddaghia"
// let result = {}
// for(let item of str){
//     if(item in result){
//       console.log(item);
//       break;
//     }else{
//         result[item] = 1;
//     } 
// }
// console.log(result);
// var sampleStr = "asdaasssssdfghddk1";
// occurence of each letter in the above string]]
// let result ={}
// for(let item of sampleStr){
//     if(item in result){
//         result[item] = result[item] + 1
//     }else{
//         result[item] = 1;
//     }
// }
// console.log(result);

// max occurence of the item]]]]
// let max =0; 
// let resultChar = '';
// for(let item in result){
//     if(result[item] >= max){
//         max = result[item]
//         resultChar = item;
//     }
// }
// console.log(`${resultChar} has maximum occurence`);
// var samsungMobile = [
//     {
//         name: "galaxy1",
//         price: 23000
//     },
//     {
//         name : "galaxy2",
//         price : 40000
//     },
//     {
//         name : "galaxy3",
//         price : 15000
//     },
//     {
//         name : "galaxy4",
//         price : 50000
//     },
//     {
//         name : "galaxy5",
//         price : 30000
//     },
//     {
//         name : "galaxy6",
//         price : 10000
//     }
// ]

// let result = []
// for(let i=0;i<samsungMobile.length; i++){
//     if(samsungMobile[i].price > 25000){
//         result.push(samsungMobile[i].name)
//     }
// }
// console.log(result);
// let product = [ 
//     {pid:100, pName: "Apple", band:"5g", price: 120000, display: "led"},
//     {pid:101, pName: "Samsung", band:"5g", price: 45000, display:"led"},
//     {pid:102, pName: "Nokia", band: "4g", price: 15000, display: "lcd"},
//     {pid:103, pName: "Motorola", band: "4g", price: 13000, display:"lcd"},
//     {pid:104, pName: "onePlus", band: "5g", price: 35000, display:"led"}
// ]
// let temp1 = "led"]]]

// for(let i=0;i<product.length;i++){
    // console.log(`The product name is ${product[i].pName}`);
    // if(product[i].display === temp1 ){
    //     console.log(product[i]);
    // }    
    // if(product[i].band === '5g'){
    //     console.log(product[i].pName);
    // }]
//     for(let j=i+1; j<product.length;j++){
//         let lowCost = product[i].price;
//         if(product[j].price < lowCost){
//            console.log(product[j].price) 
//         }else{
//             console.log(lowCost) 
//         }
//     }


// }
// let result = product.sort((sr1,sr2) => sr1.price - sr2.price);
// console.log(result);
//oops concepts in javascript (object oriented programming )
// class Employee {
    // properties
    // empName;
    // empId;
    // constructor is used to assign value to the properties]
//     constructor(name, empId){
//         this.empName = name;
//         this.empId = empId;
//     }
//     sayHello(){
//         console.log(this.empName, this.empId)
//         console.log("Hello");
//     }
// }
// const obj = new Employee("udaif",777);
// obj.sayHello()
// obj.empId;
// class Student {
//     name;
//     rollNo;
//     branch;
//     constructor(name,rollNo,branch){
//         this.name = name;
//         this.rollNo = rollNo;
//         this.branch = branch;

//     }
//     printName(){
//         console.log(this.name);
//     }
//     printNr(){
//         console.log(this.name);
//         console.log(this.rollNo)
//     }
//     printNb(){
//         console.log(this.name);
//         console.log(this.branch)
//     }
//     printNm(mobileNUmber){
//         console.log(this.name);
//         console.log(mobileNUmber);
//     }
// }
// const obj1 = new Student("udaif",777,"CS");
// obj1.printNm(123456789)
// class Calculator {
//     add(a,b){
//        let result = a + b;
//        console.log(result);
//     }
//     subtract(a,b){
//        let result = a - b;
//        console.log(result);
//     }
//     multiply(a,b){
//       let result = a * b;
//       console.log(result);
//     }
//     division(a,b){
//       let result = a / b;
//       console.log(result);
//     }
// }
// const obj = new Calculator();
// obj.division(21,7);
// class Bank{
//   accountDetails ={
//       1000:{userName:"user1",password: "user1", balence:1000},
//       1001:{userName:"user2", password: "user2",balence:2000},
//       1002:{userName:"user3",password: "user3",balence:3000},
//       1003:{userName:"user4",password:"user4",balence:8000},
//       1004:{userName:"user5",password:"user5",balence:6000}
//   }
//   validateAccountNumber(accNo){
//     return accNo in this.accountDetails?true:false;
//   }
//   authenticateAccount(accNo,userName,password){
//     if(this.validateAccountNumber(accNo) ){
//       console.log("account number is valid")
//       if(this.accountDetails[accNo].userName == userName && this.accountDetails[accNo].password == password){
//         console.log("user successfully authenticated");
//       }else{
//         console.log("username or password are incorrect");
//       }
//     }else{
//       console.log("Account does not exist");
//     }
//   }
//   balanceTransfer(fromAcc,toAcc,amount){
//       if(this.validateAccountNumber(fromAcc) && this.validateAccountNumber(toAcc)){
//         console.log("From and to accounts are valid")
//         if(this.accountDetails[fromAcc].balence >= amount){
//           console.log("you can transfer the money");  
//           this.accountDetails[fromAcc].balence = this.accountDetails[fromAcc].balence - amount;
//           this.accountDetails[toAcc].balence = this.accountDetails[toAcc].balence + amount;
//           console.log("from account balance", this.accountDetails[fromAcc].balence);
//           console.log("To Account balence",this.accountDetails[toAcc].balence)
//         }else{
//           console.log("you don't have enough money to transfer"); 
//         }
//       }else{
//         console.log("account number passed are not valid ");
        
//       }
//   }
// }
// const obj = new Bank();
// // console.log(obj.validateAccountNumber(100));
// obj.authenticateAccount(1000,"user1","user1")
// obj.balanceTransfer(1000,1002,500)]]]
// class Parent {
//   name = "john"
//   bike(){
//     console.log("duke");
    
//   }hondaCity = {
//   model : "sedan",
//   manufacturer: "honda",
//   variant: "Automatic",
//   color: "Black",
//   brakeSystem: "ABS",hondaCity = {
//   model : "sedan",
//   manufacturer: "honda",
//   variant: "Automatic",
//   color: "Black",
//   brakeSystem: "ABS",
//   printColor : function(){
//     console.log("color : red");
//   }
// };
// x5 = {
//   model: "sedan",
//   manufacturer:"honda",
//   variant: "Automatic"
// }
// x5.__proto__ = hondaCity;
// console.log(x5.color);
// x5.printColor();
//   printColor : function(){
//     console.log("color : red");
//   }
// };
// x5 = {
//   model: "sedan",
//   manufacturer:"honda",
//   variant: "Automatic"
// }
// x5.__proto__ = hondaCity;
// console.log(x5.color);
// x5.printColor();
// }
// class Child extends Parent{

// }
// 
// const obj = new Child()
// obj.bike()
// console.log(obj.name);
// hondaCity = {
//   model : "sedan",
//   manufacturer: "honda",
//   variant: "Automatic",
//   color: "Black",
//   brakeSystem: "ABS",
//   printColor : function(){
//     console.log("color : red");
//   }
// };
// x5 = {
//   model: "sedan",
//   manufacturer:"honda",
//   variant: "Automatic"
// }
// x5.__proto__ = hondaCity;
// console.log(x5.color);
// x5.printColor();
// classical inheritance
// class A {
//   methodA(){
//     console.log("inside class A and method A");
//   }
// }

// class B extends A{
//   methodB(){
//     console.log("inside class B and method b");
//   }
// }
// const obj = new B();
// obj.methodA()
// var obj1 = {
//   name:"john",
//   age : 23,
//   location:"kakkanad"
// }
// var obj2 = {
//   pincode: 673019
// }
// obj2.__proto__ = obj1;
// console.log(obj1.location)
// class A{
//     methodA(){
//         console.log("inside class A and method A");
//     }
// }
// class B extends A{
//     methodB(){
//         console.log("inside class B and method B");
//     }
// }
// class C extends B{
//     methodC(){
//         console.log("inside class C and method C"); 
//     }
// }
// const obj = new C();
// obj.methodC();
// obj.methodB();
// obj.methodA();
// polymorphism : different forms are present method overloading and method overriding
// class A{
//     sayHello(){
//         console.log("Hello");
//     }
// }
// class B extends A{
//     sayHello(){
//         console.log("Hi")
//     }
// }
// const obj = new B();
// obj.sayHello()
// method overloading means that same name in the methods but the number of argument accepting is different 
// class A {
//     methodA(){
//         console.log("method with no argument ");
//     }
//     methodA(a){
//         console.log("method with one argument ");
//     }
//     methodA(x,y){
//         console.log("method with two argument");
        
//     }
// }
// const obj = new A();
// obj.methodA();
// obj.methodA(3);
// ]]]]]]]]]]]]]]]

































































