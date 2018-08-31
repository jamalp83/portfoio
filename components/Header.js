export default function Header(state){
    return `
        <div class="item1"> 
            <!--- <h1 class="introhead">Jamal's Front End Web Dev Portfolio</h1>--->
            <h1 class="introhead">${state.title}</h1>
        </div>
    `;
}