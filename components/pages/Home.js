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
                <a href="${repo.url}">${name}</a>
        </li>
        `;
}

export default function Home(state){
    var repos = state
        .repos
        .map(Repo)
        .join('');

    
    return `
        <div class="content">
       <!-- <p>${Date()}</p> -->
        <div class='content_1'>
                <div class="left">
                    <div>
                    
                           <!-- <img src="https://cdn.ruled.me/wp-content/uploads/2015/11/Tacos-final.jpg" alt="Keto!!!!"> -->
                            <img src="http://static8.depositphotos.com/1032885/978/i/950/depositphotos_9780666-Healthy-food.jpg" alt="Keto!!!!">
                    </div>
                    

                </div>
                
                <div class="right">
                        <h1>Welcome to Sensei Keto!!!</h1>
                        <h3>Your one-stop dojo for training towards keto mastery.</h3>
                        <p>When you're body is in a state of ketosis, the liver produced ketones which become the main energy source for the body. The ketogenic diet is also referred to as keto (key-toe) diet, low carb diet, and low carb high fat (LCHF). So why is it so awesome and why is it taking the world by storm? Because it completely reverses how your body functions (in a good way) along with changing how you view nutrition.</p>
                </div>

                <ol>
                   ${repos}
                </ol>
        </div>



      <!--      <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br> -->
        </div>

`;
}