console.log('before the fetch request in code');

fetch('https://dog.ceo/api/breeds/image/random') // returns promise
    .then(res => {
        console.log('inside the fetch request response')
        return res.json();// returns promise
    })
    .then(data => {
        console.dir(data)
        console.dir(data.message)
        console.dir(data.status)
        document.getElementById("randomDog").src = data.message;
    });

function fetchDog() {
    fetch('https://dog.ceo/api/breeds/image/random') // returns promise
    .then(res => {
        console.log('inside the fetch request response')
        return res.json();// returns promise
    })
    .then(data => {
        console.dir(data)
        console.dir(data.message)
        console.dir(data.status)
        document.getElementById("randomDog").src = data.message;
    });
}

console.log('after the fetch request in code')