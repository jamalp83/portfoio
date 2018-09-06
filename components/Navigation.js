export default function Navigation(state){
    return `
        <div class="item5">
        <div id="navigation">
            <ul>
                <li><a href="index.html">home</a></li>
                <li><a href="projects/index.html">projects</a></li>
                <li><a href="contact/index.html">contact</a></li>
                <li><a href="blog/index.html">blog</a>                  
                    <ul><a href="blog/index.html">
                        </a><li><a href="https://www.microsoft.com/en-us/" target="_blank">Microsoft</a> </li>
                        <li><a href="https://www.google.com/" target="_blank">Google Search</a></li>
                        <li><a href="https://www.w3schools.com/" target="_blank">W3School</a></li>
                    </ul>
                
            </li>            
            </ul>
        </div>
        </div>
        `;
}