export default function Contact(){
    return `
    <div class="content">
	    <div class="wrapper">
			<form  action="https://formspree.io/jamal.pryor@hotmail.com" method="POST">

				<div class="inputs">
					<input type="text" name="firstname" placeholder="First Name" size="45" autofocus required>
					<input type="text" name="lastname" placeholder="Last Name" size="45" required>
					<input type="email" name="userEmail" placeholder="your.email@example.com" size="45" required>
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
				<br>
				<div class="drop">
					<label class="info" for="marketing">How did you hear about me?</label>
					<br>



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
				<br>

				<div class="submitting">
					<textarea name="user_message" rows="8" cols="45"></textarea>
					<br>
					
					<input type="submit">
				</div>
			</form>
			<script src="//platform.linkedin.com/in.js" type="text/javascript"></script>
<script type="IN/MemberProfile" data-id="http://www.linkedin.com/in/jamalpryor" data-format="inline" data-related="false"></script>
	    </div>		
</div>
<!-- <i class="fab fa-github" style="font-size: 5em; color: rgb(0, 30, 255)"></i>
<i class="fab fa-facebook" style="font-size: 5em"></i>
<i class="fab fa-linkedin" style="font-size: 5em"></i> -->


`;
}