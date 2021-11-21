const runCode = () => {

    //1
    console.log("simple time showing: ")
    console.log("start")
    let time = new Date();
    console.log(time)
    console.log("end")

    //2
    console.log("the time 3 seconds ago was: ")
    console.log('start');
    setTimeout(() => {
        let time = new Date();
        console.log(time);
    }, 3000);
    console.log('end');

    //3
    console.log("the time 3 seconds ago was: ")
    console.log('start');
    time = new Date();
    setTimeout(() => {
        console.log(time);
    }, 3000);
    console.log('end');



    //4
    console.log('3 random numbers');
    console.log('start');
    setTimeout(() => {
        console.log(Math.floor(Math.random() * 100));
    }, 3000);
    setTimeout(() => {
        console.log(Math.floor(Math.random() * 100));
    }, 5000);
    setTimeout(() => {
        console.log(Math.floor(Math.random() * 100));
    }, 7000);
    console.log('end');
}

//5
const runNumbersInbox = () => {

    setInterval(() => {
        let usersInputNumber = document.getElementById('input-box').value;
        // console.log(usersInputNumber);
        let maxNumber = Math.floor(Math.random() * usersInputNumber);
        // console.log(maxNumber);
        document.getElementById('box-for-random').textContent = maxNumber;
    }, 1000);

}

//7     the setTimeout helps becouse it's programed to always run last
const changeBGColor = () => {
    document.body.style.backgroundColor = "green";
    setTimeout(alert, 0, "Done");
}


//8
const printNumber = (rndNum) => console.log("random number after delay: " + rndNum);
const getRandomNumberAfterDelay = (callback) => {
    setTimeout(() => {
        let randomNumber = Math.floor(Math.random() * 100);
        callback(randomNumber);
    }, 5000);
}
const callForRandomNumber = () => getRandomNumberAfterDelay(printNumber);


//9
const getRandomNumberAfterDelay2 = (callback, limit) => {
    let randNumber = Math.floor(Math.random() * limit);
    setTimeout(() => {
        callback(randNumber);
    }, 5000);

}
const callForRandomPlusLimit = () => {
    getRandomNumberAfterDelay2((num) => console.log('a random number up to this limit is: ' + num), 70);
}

//12
function getUserFromServer(callback) {
    setTimeout(() => {
        const user = { firstName: "Moishe", lastName: "Ufnik" }
        callback(user)

    }, 4000);
}
const runCode2 = () => {
    getUserFromServer((a) => console.log(a));
}

//13
function getGradesFromServer(callback) {
    setTimeout(() => {
        // Demo for getting grades from the server:
        const grades = [100, 98, 75, 80, 100, 87];
        // "Return" that array to the calling code .
        callback(grades)
    }, 1000);
}
const runCode3 = () => {
    getGradesFromServer((a) => {
        let gradeElement = document.getElementById('grade').innerText = a;
    })
}