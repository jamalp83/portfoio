import * as Pages from './pages';


export default function Content(state){
    const page = state[state.active];

    
    return `

        ${Pages[page.body](state)}
        



`;
}