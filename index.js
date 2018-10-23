import Navigo from 'navigo';
import axios from 'axios';
import { tween, styler } from 'popmotion';
import Navigation from './components/Navigation';
// import Header from './components/Header';
// import Greeter from './components/Greeter';
import Content from './components/Content';
import Footer from './components/Footer';
import Profile from './components/Profile';
import * as State from './store';


var root = document.querySelector('#root');
var router = new Navigo(window.location.origin);
var store;

// var greeter = new Greeter();


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

function toggleNavPanel(x){
    var panel = document.getElementById(x);
    var maxH = '100px';

    if(panel.style.height == maxH){
        panel.style.height = '0px';
        // navarrow.innerHTML = '&#9662;';
    }
    else{
        panel.style.height = maxH;
        // navarrow.innerHTML = '&#9652;';
    }
}

function getFood(food1){
    axios
        .get(`https://api.nal.usda.gov/ndb/search/?format=json&q=${food1}&ds=Standard%20Reference&sort=r&max=25&offset=0&api_key=${process.env.NB_API_KEY}`)
        .then((response) => {
            store.dispatch((state) => {
                state.food = response.data.list.item;

                
                return state;
            });
        });
}

function testClick(test){
    axios
        .get(`https://api.nal.usda.gov/ndb/reports/?ndbno=${test}&type=b&format=json&api_key=${process.env.NB_API_KEY}`)
        .then((response) => {
            store.dispatch((state) => {
                state.nutrition = response.data.report.food.nutrients[4];

                //    console.log(state.nutrition);
                
                
                return state;
            });
        });

    // ----------------------------------------------------------------------------------
    // let tsit = store.getState();
    // let somedata = document.getElementById('apiwork-clickresults');

    // somedata.innerHTML = tsit.nutrition;

    // tsit.innerHTML = state.nutrition[0];
}


function render(){
    var state = store.getState();
    var eachNdbno;


    root.innerHTML = `
            ${Navigation(state[state.active])}
            ${Content(state)}
            ${Footer(state)}
            `;

   
    if(state.nutrition.length !== 0){
        let somedata = document.getElementById('apiwork-clickresults');

        somedata.innerHTML = `<h1>${state.nutrition['name']}</h1> <h2>${state.nutrition['value']}${state.nutrition['unit']}</h2>`;
    }


    document
        .querySelector('h1')
        .addEventListener('click', (event) => {
            var animation = tween({
                'from': {
                    'fontSize': '200%'
                },
                'to': {
                    'fontSize': '400%'
                },
                'duration': 2000
            });
            
            var title =  styler(event.target);

            animation.start((value) => title.set(value));
        });

    if(state.active == 'search_page'){
        document
            .querySelector('#search')
            .addEventListener('keyup', (event) => {
                if(event.which === 13){
                    getFood(event.target.value);
                    event.preventDefault();
                }
            });
 
    
        document
            .querySelector('#search button')
            .addEventListener('click', (event) => {
                let testit = document.querySelector('#search input');

                getFood(testit.value);
                event.preventDefault();
            });
    

        eachNdbno = document.querySelector('.tableclick');
        
        if(eachNdbno !== null){
            eachNdbno.addEventListener('click', (event) => {
                console.log('click');
                if(event.target.localName == 'a'){
                    event.preventDefault();


                    testClick(event.target.innerHTML);
                }
            });
        }
    }

    if(state.active == 'home'){
        document.querySelector('.s4-c1').addEventListener('click', () => {
            toggleNavPanel('keto-dont-slide');
        });
        document.querySelector('.s4-c2').addEventListener('click', () => {
            toggleNavPanel('keto-calc-slide');
        });
        document.querySelector('.s4-c3').addEventListener('click', () => {
            toggleNavPanel('my-journey');
        });
    }
    router.updatePageLinks();
}


function handleNavigation(activePage){
    store.dispatch((state) => Object.assign(state,{ 'active': activePage }));
}

router
    .on('/:page', (params) => handleNavigation(params.page))
    .on('/', () => handleNavigation('home'))
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
    .get('https://api.openweathermap.org/data/2.5/weather?q=saint%20louis&APPID=85bebd1cb650c17902df288428710b2c')
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


store.addStateListener(render);


// axios
//     .get('https://api.github.com/users/jamalp83/repos')
//     .then((response) => {
//         store.dispatch((state) => {
//             state.repos = response.data;

//             return state;
//         });
//     });

// https://api.nal.usda.gov/ndb/search/?format=json&q=${food}r&sort=n&max=25&offset=0&api_key=DEMO_KEY
// This is the API to perform the search by food name; expected result is to return a list of relevant
// foods with there ndbno(which I would like in form of links), which will then allow you to click one
// of the links and then return detail nutrition data about the item selected
// https://api.nal.usda.gov/ndb/reports/?ndbno=01009&type=b&format=json&api_key=DEMO_KEY