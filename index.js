import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Profile from './components/Profile';

var State =  {
    'active': 'home',
    'home': { 'title': "Jamal's Front End Web Dev Portfolio" },
    'projects': { 'title': 'These are my active pages! ' },
    'contact': { 'title': 'Contact me! ' },
    'blog': { 'title': 'This is my blog page! ' },
    'Microsoft': { 'title': 'This is Microsofts Page' },
    'Google Search': { 'title': 'Google is the way to go' },
    'W3School': { 'title': 'This is the W3 page' }
};


function render(state){
    var links;
    var i = 0;
    var input;
    var writeStuff;

    document.querySelector('.grid-container').innerHTML = `
            ${Header(state[state.active])}
            ${Navigation(state)}
            ${Content(state)}
            ${Profile(state)}
            ${Footer(state)}
            `;
    input = document.querySelector('#input-up1');
    writeStuff = document.querySelector('#input-output');

    input.addEventListener('keyup', (event) => {
        const keyName = event.which;

        if(keyName === 13){
            console.log('enter');
            writeStuff.textContent = input.value;
            input.value = "";
            
        }
    },
    );


    links = document.querySelectorAll('#navigation a');
    
    for(let i = 0; i < links.length; i++){
        links[i].addEventListener('click',
            handleNavigation
        );
        // console.log('links.length');
    }


    //* ***************************************************************************************************** */
    //  input.addEventListener('click', function(event){
            
    //         console.log('enter');
    //     displayContent
    // }
    
         
    //     }

    // }

    //     function displayContent(event){
    //     var writeStuff = document.getElementById('#input-output');

      
    //         console.log(event.target.value);
    //         writeStuff.textContent =  event.target.value;
    //     event.preventDefault();
    //     render(State);
    // }
}

function handleNavigation(event){
    var newState = State;

    newState.active = event.target.textContent;
    event.preventDefault();
    render(newState);
}

render(State); // kicks off the rendering - eslint disable line


// document
//     .querySelector('img')
//     .addEventListener('click',
//         function changeThePic(event){
//             console.log(event.target);
//             if(event.target.outerHTML === '<img src="https://pbs.twimg.com/profile_images/2767840944/099cbd84f3ff51a28756c4265638c39e_400x400.jpeg" alt="Jamal">'){
//                 event.target.outerHTML = '<img src="https://lh4.googleusercontent.com/-mV8HRdZQu0o/AAAAAAAAAAI/AAAAAAAAAEw/44u0J13N0Tw/photo.jpg" alt="Jamal">';
//             }
//             else{
//                 event.target.outerHTML === '<img src="https://pbs.twimg.com/profile_images/2767840944/099cbd84f3ff51a28756c4265638c39e_400x400.jpeg" alt="Jamal">';
//             }
//         }
//     );


// document
//     .querySelector('img')
//     .addEventListener('click',
//         function buyInq(event){
//             const TAX_RATE = 0.08;
//             var balAcct = 500;
//             var phCost = 90;
//             var phAccessory = 10;
//             var cntPhones = 0;
//             var purTotal = 0;
//             var totPhones = 0;
    
//             var phYes = prompt('Would you like to buy a phone?');

//             if(phYes == 'yes'){
//                 do {
//                     purTotal = buyPhone(purTotal);
//                     console.log(purTotal);
//                     totPhones++;
//                     console.log(totPhones);
//                     console.log('bal-' + (balAcct - (purTotal + (purTotal * TAX_RATE))));
//                     console.log('amt-' + ((phCost + phAccessory) + (TAX_RATE * (phCost + phAccessory))));
                    
//                     if((balAcct - (purTotal + (purTotal * TAX_RATE))) > ((phCost + phAccessory) + (TAX_RATE * (phCost + phAccessory)))){
//                         phYes = prompt('Would you like to buy another phone?');
//                     }
//                     else{
//                         phYes = prompt(`You don't have enough funds to purchase anymore phone. Would you like to purchase the ${totPhones} phones you have?`);
//                         if(phYes == 'yes'){
//                             purTotal += (purTotal * TAX_RATE);
//                             balAcct -= purTotal;
//                             alert('Your purchase total is $' + purTotal + ', leaving you with an account balance of $' + balAcct + '!');
//                             phYes = 'no';
//                         }
//                     }
//                 } while(phYes == 'yes');
//             }
//             else{
//                 alert('Ok, have a nice day!');
//             }
            
//             function buyPhone(pt){
//                 pt += (phCost + phAccessory);
                
//                 return pt;
//             }
//         }
//     );