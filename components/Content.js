import * as Pages from './pages';


export default function Content(state){
    const page = state[state.active];

    
    return `
        <div class="item3">
                ${Pages[page.body](state)}
        
        </div> 


`;
}