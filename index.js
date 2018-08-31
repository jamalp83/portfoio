import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Profile from './components/Profile';

var state =  {
    'title': "Jamal's Front End Web Dev Portfolio"
};

document.querySelector('.grid-container').innerHTML = `
            ${Header(state)}
            ${Navigation(state)}
            ${Content(state)}
            ${Profile(state)}
            ${Footer(state)}
`;
document
    .querySelector('img')
    .addEventListener('click',
        function changeThePic(event){
            console.log(event.target);
            if(event.target.outerHTML === '<img src="https://pbs.twimg.com/profile_images/2767840944/099cbd84f3ff51a28756c4265638c39e_400x400.jpeg" alt="Jamal">'){
                event.target.outerHTML = '<img src="https://lh4.googleusercontent.com/-mV8HRdZQu0o/AAAAAAAAAAI/AAAAAAAAAEw/44u0J13N0Tw/photo.jpg" alt="Jamal">';
            }
            else{
                event.target.outerHTML === '<img src="https://pbs.twimg.com/profile_images/2767840944/099cbd84f3ff51a28756c4265638c39e_400x400.jpeg" alt="Jamal">';
            }
        }
    );