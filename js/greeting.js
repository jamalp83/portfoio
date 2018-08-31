// ----------------------------------------------------------------------------------------------fncWelcome Function
function fncWelcome(){
    var numType = 1;
    var strType = "I'm a string";
    var bolType = true;
    var unDef;
    var zNull = null;
    var strName;
    var numAge;
    var objCar = {
        'tireSixzeInInches': 16,
        'Condition': 'new',
        'bodyColor': 'yellow',
        'bodySize': 'full size'
    };

    console.log('Number = ' + numType, ', String = ' + strType, ', Bolean = ' + bolType, ', Undefined = ' + unDef, ', Null = ' + zNull);

    strName = prompt('Hello, What is your name?');
    if(strName === ''){
        fncWelcome();
    }
    document.querySelector('#greeting').textContent = 'Welcome to my portfolio page ' + strName;
    numAge = prompt('Welcome to my site, ' + strName + ". If you don't mind me asking, how old are you?");

    while(numAge === ''){
        numAge = prompt('Welcome to my site, ' + strName + ". If you don't mind me asking, how old are you?");
    }

    alert('Wow ' + strName + "!!!!! You don't even look like you're " + numAge + '. Must be something in the water!!!');
    console.log(numAge);
}


fncWelcome();