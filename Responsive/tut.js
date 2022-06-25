// function input(name){
//     console.log(name + ' is 18yrs old');
// }
// let name = "Shruti";
// let name2 = "Abhi";
// let name3 = "Raju";
// input(name);
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
// let name = prompt("What is your name?" , "");
// console.log(name);

// let deletePost = confirm("Do you really want to delete this post?");
// console.log(deletePost);

// let employee =  {
//     name : "ME",
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

let i = 0;
while(i < 4){
    console.log(`${i} is less than 4`);
    i++;
}








