import {
    capitalize,
    kebabCase
} from 'lodash';

function Repo(repo){
    var name = kebabCase(repo.name)
        .split('-')
        .map(capitalize)
        .join(' ');

    return `
        <li>
                <a href="${repo.html_url}" target="_blank">${name}</a>
        </li>
        `;
}

export default function Projects(state){
    var repos = state
        .repos
        .map(Repo)
        .join('');
    var repos = state
        .repos
        .map(Repo)
        .join('');

    return `
    <h3>Below are a list of my projects from my github account.</h3>
    <ol>
        ${repos}
    </ol>
`;
}