import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Profile from './components/Profile';

document.querySelector('.grid-container').innerHTML = `
            ${Header}
            ${Navigation}
            ${Content}
            ${Profile}
            ${Footer}
`;
