export default function Contact(){
    return `
    <div class="content">
	    <div class="wrapper">
			<form  action="https://formspree.io/jamal.pryor@hotmail.com" method="POST">

				<div class="inputs">
					<input type="text" name="firstname" placeholder="First Name" size="45" autofocus required>
					<input type="text" name="lastname" placeholder="Last Name" size="45" required>
					<input type="email" name="userEmail" placeholder="your.email@example.com" size="45" required>
					<input type="company" name="company" placeholder="Company Name (optional)" size="45">
				</div>        
				<br>
				<div class="drop">
					<label class="info" for="SiteReview">How was my presentation?</label>
					<br>

					<select name="marketing">
						<optgroup label="Presentation">
							<option value="Presentation_Excellent">Excellent!</option>
							<option value="Presentation_Satisfactory">Satisfactory</option>
							<option value="Presentation_Improve">Needs Improvement</option>
							<option value="Presentation_Unsatisfactory">Just plan bad!</option>
						</optgroup>
					</select>
					
				</div>
			
				<div class="drop">
					<label class="info" for="SiteReview">How was my Web UI design?</label>
					<br>

					<select name="marketing">
						<optgroup label="Presentation">
							<option value="WebUI_Excellent">Excellent!</option>
							<option value="WebUI_Satisfactory">Satisfactory</option>
							<option value="WebUI_Improve">Needs Improvement</option>
							<option value="WebUI_Unsatisfactory">Just plan bad!</option>
						</optgroup>
					</select>
					
				</div>
			
				<div class="drop">
					<label class="info" for="SiteReview">How was my Web Application functionality?</label>
					<br>

					<select name="marketing">
						<optgroup label="Presentation">
							<option value="Functional_Excellent">Excellent!</option>
							<option value="Functional_Satisfactory">Satisfactory</option>
							<option value="Functional_Improve">Needs Improvement</option>
							<option value="Functional_Unsatisfactory">Just plan bad!</option>
						</optgroup>
					</select>
					
				</div>
			<br>
				<div>
					<label class="#" for="LinkedinContact">Can I connect with you on LinkedIn?</label>
				</div>
			
				<div>
					<input type="radio" name="LinkedinContact" value="Contact on LinkedIn" checked><span>Yes</span>
				</div>
				
				<div>  
					<input type="radio" name="LinkedinContact" value="Do not contact" checked><span>Don't have an account.</span>
				</div>

				<br>

				<div class="submitting">
					<label class="info" for="user_message">Please provide any feedback! Thanks for coming!!</label>
					<br>
					<textarea name="user_message" rows="8" cols="45"></textarea>
					<br>
					
					<input type="submit" value="Submit Response">
				</div>
			</form>
			
	    </div>		
</div>
<!-- <i class="fab fa-github" style="font-size: 5em; color: rgb(0, 30, 255)"></i>
<i class="fab fa-facebook" style="font-size: 5em"></i>
<i class="fab fa-linkedin" style="font-size: 5em"></i> -->


`;
}