export default function Contact(){
    return `
<div class="content">
    <form  action="https://formspree.io/jamal.pryor@hotmail.com" method="POST">

        <div class="info">
            <input type="text" name="firstname" placeholder="First Name" size="20" autofocus required>
            <input type="text" name="lastname" placeholder="Last Name" size="20" required>
            <input type="email" name="userEmail" placeholder="your.email@example.com" required>
        </div>        

        <div>
            <label class="#" for="radio1">What's this message about? </label>
        </div>
    
        <div>
            <input type="radio" name="radio1" value="professional" checked><span>I'd like to hire you!</span>
        </div>
        
        <div>  
            <input type="radio" name="radio1" value="personal" checked><span>Personal message</span>
        </div>
        
        <div>
            <input type="radio" name="radio1" value="other" checked><span>Don't know/something else</span>
        </div>
    
        <div class="check">
            <input type="checkbox" name="optin" value="trusting" checked>Subscribe me to your newsletter! 
            <input type="checkbox" name="optout" value="skeptical" disabled>Cheeky checkbox... 
        </div>

        <div class="drop">
            <label class="info" for="marketing">How did you hear about me?</label>



            <select name="marketing">
                <optgroup label="Online">
                    <option value="social">Social Media (FB, Twitter, LinkedIn)</option>
                    <option value="github">Online Portfolio (GitHub)</option>
                    <option value="search">Search Engine</option>
                    <option value="email">Email</option>
                </optgroup>
                <optgroup label="In-Person">
                    <option value="networking">We met at a networking event</option>
                    <option value="referral">Personal referral</option>
                    <option value="random">We met somewhere else</option>
                </optgroup>
                <option value="other">Other</option>
            </select>
        </div>

        <div class="submitting">
            <textarea name="user_message" rows="8" cols="35"></textarea>
            <input type="submit">
        </div>
    </form>
</div>
<!-- <i class="fab fa-github" style="font-size: 5em; color: rgb(0, 30, 255)"></i>
<i class="fab fa-facebook" style="font-size: 5em"></i>
<i class="fab fa-linkedin" style="font-size: 5em"></i> -->


`;
}