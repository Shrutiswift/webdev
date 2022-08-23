// function input(Shruti){
//     console.log(Shruti + ' is 18yrs old');
// }
// let Shruti = "Shruti";
// let name2 = "Abhi";
// let name3 = "Raju";
// input(Shruti);
// input(name2);
// input(name3);
// alert("This is a message");
// alert("https://api.opsgenie.com/v2/alerts/requests/:requestId");
// navigator.geolocation.getCurrentPosition(function(position) {
//     window.alert('allow');
// }, function() {
//     window.alert('deny');
// });
// function doExpensiveWork() {
//     var done = false;
    // ...
    // this part of the function takes up to five milliseconds
    // set done to true if we're done
    // ...
//     return done;
// }

// function rescheduleWork() {
//     var id = setTimeout(rescheduleWork, 0); // preschedule next iteration
//     if (doExpensiveWork())
//         clearTimeout(id); // clear the timeout if we don't need it
// }
// function scheduleWork() {
//     setTimeout(rescheduleWork, 0);
// }
// scheduleWork();
// let Shruti = prompt("What is your Shruti?" , "");
// console.log(Shruti);

// let deletePost = confirm("Do you really want to delete this post?");
// console.log(deletePost);

// let employee =  {
//     Shruti : "ME",
//     salary : 100,
//     channel : "qwer",

// }
// for(key in employee){
//     console.log( `The ${key} of employee is ${employee[key]}`);
// }


//-------------------------------------------------------------------------------------------------
// for loop

// let friends = ["Rohan", "Ajiv", "Pooja"];
//     for(let index = 0; index < friends.length; index++){
//     console.log("Hello "+friends[index]);
// }

//forEach()
// friends.forEach(function f(element){
//     console.log("Hello " + element)
// });

//For of
// for(element of friends){
//     console.log("Hello, "+ element  );
// }


//while loop in js

// let i = 0;
// while(i < 4){
//     console.log(`${i} is less than 4`);
//     i++;
// }

//Do while
// let i = 5;
// do{
//     console.log(`${i} is less than 4`);
// } while(i < 4);

//DOM
// let main = document.getElementById("me");
//     console.log(main);
// let main = document.querySelectorAll("#me");
// console.log(main);

// function greet(name){
//     console.log("Hello " + name);
// }
// setTimeout(greet, 2000, "Shruti");

// setTimeout(() => {
//     console.log("Hello Everyone");
// }, 5000)
// setTimeout(() => {
//     console.log("Hey there!")
// }, 2000);


// <------------------------------------------------------------------------------------>
// function displayTime(){
//     time = new Date();
//     console.log(time);
//     document.getElementById("time").innerHTML = time;
// }
// setInterval(displayTime, 1000);
// <------------------------------------------------------------------------------------>

// How to set date--------->
// let time = new Date();
// console.log(time);
// date = new Date("2022-12-31");
// console.log(date)

// let newDate = new Date(3020, 3, 4)
// let date = newDate.getDate();
// let month = newDate.getMonth();
// console.log("The date is ", date);
// console.log("The month is ", month);

// <----------------------------------------------------------------------------------->
//Arrow function

// greet = () =>{
//     console.log("Gm");
// }
// greet();

// let greet = (a, b) => a+b;

// setTimeout(() => {
//     console.log("Hey");
// }, 3000);

// let obj = {
//     greeting: "Good Morning,",
//     names: ["Happy", "Memo", "Penny"],
//     speak() {
//         this.names.forEach((student) => {
//             console.log(this.greeting + " Hey " + student);
//         });
        
//     }
// }
// obj.speak();
// const posts = {
//     title: "This is my first page ", 
// }
// function getPosts(){
//     setTimeout(() => {

//     }, 2000);
// }
// function createPost(post) 
// {
//     setTimeout(() => {

//     }, 2000);   
// }

// getPosts();
// createPost({title: 'post three'}); 










