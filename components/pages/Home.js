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
                            <!-- <img src="https://www.artofsmart.com.au/wp-content/uploads/2018/07/full-width-example.jpg" alt="Keto!!!!"> -->
                    </div>
                    

                </div>
                
                <div class="right">
                        <h1>Welcome to Sensei Keto!!!</h1>
                        
                        <h3>Your one-stop dojo for training towards keto mastery.</h3>
                        <p>When you're body is in a state of ketosis, the liver produced ketones which become the main energy source for the body. The ketogenic diet is also referred to as keto (key-toe) diet, low carb diet, and low carb high fat (LCHF). So why is it so awesome and why is it taking the world by storm? Because it completely reverses how your body functions (in a good way) along with changing how you view nutrition.</p>
                </div>

                <div class='sect4-grid'>
                    <div class='s4-c1'><h2>KETO DON'Ts</h2>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxQyhIKRSnQVYrDJtogVvU_7Fq-G1IfO-bgJqRViw9Vt6ImuPgOQ" alt="Keto Dont" style="width: 100px">
                        <div class='keto-dont-slide'>Don't do MOST FRUITS
                            Fruit is healthy, right?
                            Sure, but that doesn’t mean they’re keto-compliant. Fruit is high in sugar and carbs, so is usually a no-go on the keto diet. That includes tropical fruits, fruit juices, dried fruits, and fruit smoothies (for the most part).
                            If you do have fruit, choose lower-sugar options like blueberries, blackberries, and raspberries, and eat them sparingly.
                        </div>
                   </div>
                    <div class='s4-c2'><h2>KETO CALCULATOR</h2>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxQyhIKRSnQVYrDJtogVvU_7Fq-G1IfO-bgJqRViw9Vt6ImuPgOQ" alt="Keto Dont" style="width: 100px">
                        <div class='keto-calc-slide'>Don't do MOST FRUITS
                            Fruit is healthy, right?
                            Sure, but that doesn’t mean they’re keto-compliant. Fruit is high in sugar and carbs, so is usually a no-go on the keto diet. That includes tropical fruits, fruit juices, dried fruits, and fruit smoothies (for the most part).
                            If you do have fruit, choose lower-sugar options like blueberries, blackberries, and raspberries, and eat them sparingly.
                        </div>
                    </div>

                    <div class='s4-c3'><h2>MY JOURNEY</h2>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxQyhIKRSnQVYrDJtogVvU_7Fq-G1IfO-bgJqRViw9Vt6ImuPgOQ" alt="Keto Dont" style="width: 100px">
                        <div class='my-journey'>Don't do MOST FRUITS
                            Fruit is healthy, right?
                            Sure, but that doesn’t mean they’re keto-compliant. Fruit is high in sugar and carbs, so is usually a no-go on the keto diet. That includes tropical fruits, fruit juices, dried fruits, and fruit smoothies (for the most part).
                            If you do have fruit, choose lower-sugar options like blueberries, blackberries, and raspberries, and eat them sparingly.
                        </div>
                    </div>
                </div>

                <ol>
                   ${repos}
                </ol>
        </div>


        </div>

`;
}