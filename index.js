import Navigo from 'navigo';
import axios from 'axios';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Greeter from './components/Greeter';
import Content from './components/Content';
import Footer from './components/Footer';
import Profile from './components/Profile';
import * as State from './store';


var root = document.querySelector('#root');
var router = new Navigo(window.location.origin);
var store;
var greeter = new Greeter();

class Store{
    constructor(state){
        this.state = Object.assign({}, state);
        this.listeners = [];
    }

    addStateListener(listener){
        this.listeners.push(listener);
    }

    dispatch(reducer){
        this.state = reducer(this.state);

        this.listeners.forEach((listener) => listener());
    }

    getState(){
        return this.state;
    }
}

store = new Store(State);


function render(){
    var state = store.getState();

    console.log(state);

    root.innerHTML = `
            ${Navigation(state[state.active])}
            ${Content(state)}
        <!--   ${Profile(state)} -->
            ${Footer(state)}
            `;
    greeter.render(root);

    router.updatePageLinks();
}

function handleNavigation(activePage){
    store.dispatch((state) => Object.assign(state,{ 'active': activePage }));
}

router
    .on('/:page', (params) => handleNavigation(params.page))
    .on('/', () => handleNavigation('low_carb_and_keto'))
    .resolve();

axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        store.dispatch((state) => {
            state.posts = response.data;

            return state;
        });
    });

axios
    .get('http://api.openweathermap.org/data/2.5/weather?q=saint%20louis&APPID=85bebd1cb650c17902df288428710b2c')
    .then((response) => {
        store.dispatch((state) => {
            state.weather = response.data;
            
            return state;
        });
    });

axios
    .get('https://api.github.com/users/jamalp83/repos', {
        'headers': {
            'Authorization': `token ${process.env.GITHUB_API_KEY}`
        }
    })
    .then((response) => {
        store.dispatch((state) => {
            state.repos = response.data;

            return state;
        });
    });


// axios
//     .get('https://api.github.com/users/jamalp83/repos')
//     .then((response) => {
//         store.dispatch((state) => {
//             state.repos = response.data;

//             return state;
//         });
//     });

store.addStateListener(render);


// axios.get('http://api.savvycoders.com/books')
//     .then((response) => console.log(response.data));
       
    
