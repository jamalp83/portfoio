// var changeAndShout = function changeAndShout(name){
//     if(name === 'Jamal'){
//         name = 'Blah';
//     }
//     else{
//         name = 'Blah';
//     }
//     alert(name);
// };

// changeAndShout('Hello World');

var welcomeUser = function welcomeUser(){
    var userName = prompt("What's your name?");


    if(userName === ''){
        welcomeUser();
    }
    else{
        alert('Welcome to my portfolio page, ' + userName);
    // console.log('the user name -->',userName);
    }
};

welcomeUser();