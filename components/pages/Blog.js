import post from '../Posts';

export default function Blog(state){
    var entry = state
        .food
        .map(post)
        .join('');


    // console.log(entry);

    if(entry.length < 1){
        return `    
        
        <div id="search">
        <!-- <form action="/action_page.php"> -->
        <!-- <form> -->
            <input type="text" placeholder="Search Nutrition Details" name="search" data-navigo>
            <button type="submit"><i class="fa fa-search"></i></button>
            <div>Please perform a search on any food item.</div>
            <div>Results will be displayed below, and items can to clicked to view the amount of Carbs in the item.</div>
        <!-- </form> -->
    </div>`;
    }

    return `

    <div id="search">
        <!-- <form action="/action_page.php"> -->
        <!-- <form> -->
            <input type="text" placeholder="Search Nutrition Details" name="search" data-navigo>
            <button type="submit"><i class="fa fa-search"></i></button>
        <!-- </form> -->
    </div>

<div id='apiwork'>    
    <div id='apiwork-sresults'>
            <table>
                    <thead>
                        <tr>
                            <th>NDB#</th>
                            <th>Food Description</th>
                        </tr>                      
                    </thead>
                    <tbody class="tableclick">
    
                            ${entry}
    
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="2">The table footer</td>
                        </tr>
                    </tfoot>
                </table>
    </div>


    <div id='apiwork-clickresults'>
        
    </div>
</div>
        `;
}