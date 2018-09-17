function Link(link,state){
    var href = '';
    var drop = '';

    // function droplink(dr){
    //     return `
    //     <a href='#'>${dr}</a>
    //     `;
    // }


    if(link !== 'low_carb_and_keto'){
        href = link;
    }
    
    // if(link === 'blog'){
    //     state.drop.forEach((item) => drop += droplink(item));
    //     link += drop;
    // }
    
    
    return `
        <li>
            <a href='/${href}' data-navigo>${link}</a>
        </li>
    `;
}
export default function Navigation(state){
    var links = '';


    state.links.forEach((link) => links += Link(link,state));
    // console.log(links);

    return `
        <div id='navigation'>
            <h1>sensei keto</h1>
            <ul class='navigation'>
                <li><img src="https://pbs.twimg.com/profile_images/902883343154372608/YNMlCTSf_400x400.jpg" alt="Sensei Keto"></li>
                ${links}
                <div class="search-container">
                    <form action="/action_page.php">
                        <input type="text" placeholder="Search.." name="search">
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </form>
                </div>
            </ul>

        </div>
         `;
}


