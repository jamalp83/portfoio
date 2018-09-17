import Navigo from 'navigo';
import axios from 'axios';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Profile from './components/Profile';
import * as State from './store';


var root = document.querySelector('#root');
var router = new Navigo(window.location.origin);
var newState = Object.assign({}, State);

console.log(newState);

function handleNavigation(activePage){  // -----------------
    // console.log(activePage);
    newState.active = activePage;
    render(newState);
}
// ------------------------------------------------
function render(state){    // ---------------------
    var links;
    var i = 0;
   
    root.innerHTML = `
            ${Navigation(state[state.active])}
            ${Content(state)}
        <!--   ${Profile(state)} -->
            ${Footer(state)}
            `;


    router.updatePageLinks();
} // ---------------------------------------------------


router.on('/:page', (params) => handleNavigation(params.page))
    .on('/', () => handleNavigation('low_carb_and_keto'))
    .resolve();

axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        newState.posts = response.data;
        render(newState);
    });

