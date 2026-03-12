document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // stops page from reloading

    // Read what the user typed in each field
    // .value gives us the text inside the input
    // .trim() removes any extra spaces from start and end
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();
    

    var emailErr = document.getElementById('email-err');
    var passErr = document.getElementById('pass-err');
    var successMsg = document.getElementById('login-success');

    if(email === ''){
        // email is empty — show error
        emailErr.style.display = 'block';
        emailErr.textContent = 'Email is required';
    }else if(!email.includes('@') || !email.includes('.')){
        // .includes() checks if the text contains that character
        // ! means NOT — so this says: if it does NOT have @ OR does NOT have . 
        emailErr.style.display = 'block';
        emailErr.textContent = 'The email must contain @ and .';
    }
    else{

        // email is not empty — hide error
        emailErr.style.display = 'none';
    }

    if (password === ''){
        passErr.style.display = 'block';
        passErr.textContent = 'Password is required';
    }else if (password.length < 8){
        passErr.style.display = 'block';
        passErr.textContent = 'Password must be at least 8 characters';
    }else{
        passErr.style.display = 'none';
    }

    if(email !== '' && email.includes('@') && email.includes('.') && password !== '' && password.length >= 8){
        successMsg.style.display = 'block';

        setTimeout(function()  {
            successMsg.style.display = "none";
        }, 3000);
    }else{
        successMsg.style.display = 'none';
    }

    console.log('Email:', email); // for debugging
    console.log('Password:', password); // for debugging
    // console.log('Form submitted'); // for debugging
});



//Signup form Validation
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault(); // stops page from reloading
    var name = document.getElementById('signup-fullname').value.trim();
    var email = document.getElementById('signup-email').value.trim();
    var phone = document.getElementById('s-phone').value.trim();
    var password = document.getElementById('signup-password').value.trim();
    var confirmPassword = document.getElementById('signup-confirm-password').value.trim();
    var image = document.getElementById('s-image').files[0];
    var docfile = document.getElementById('s-doc').files[0];


    var nameErr = document.getElementById('name-err');
    var emailErr = document.getElementById('s-email-err');
    var phoneErr = document.getElementById('phone-err');
    var passErr = document.getElementById('s-pass-err');
    var confirmPassErr = document.getElementById('confirm-err');
    var successMsg = document.getElementById('signup-success');

    var imageErr = document.getElementById('image-err');
    var docErr = document.getElementById('file-err');

    // We use this to track if everything is valid
    // starts as true, becomes false if ANY check fails
    var isValid = true;

    // Name validation
    if(name === ''){
        nameErr.style.display = 'block';
        nameErr.textContent = 'Name is required';
        isValid = false; // mark form as invalid
    }else if(name.length < 2){
        nameErr.style.display = 'block';
        nameErr.textContent = 'Name must be at least 2 characters';
        isValid = false; // mark form as invalid
    }else{
        nameErr.style.display = 'none';
        
    }

    // Email validation
    if(email === ''){
        emailErr.style.display = 'block';
        emailErr.textContent = 'Email is required';
        isValid = false; // mark form as invalid
    }else if(!email.includes('@') || !email.includes('.')){
        emailErr.style.display = 'block';
        emailErr.textContent = 'The email must contain @ and .';
        isValid = false; // mark form as invalid
    }else{
        emailErr.style.display = 'none';
    }

    // Phone validation
    if(phone === ''){
        phone.style.display = 'block';
        phoneErr.textContent = 'Phone number is required';
        isValid = false; // mark form as invalid
    }else if(isNaN(phone)){
        phoneErr.style.display = 'block';
        phoneErr.textContent = 'Phone number must be numeric';
        isValid = false; // mark form as invalid
    }else if(phone.length < 10){
        phoneErr.style.display = 'block';
        phoneErr.textContent = 'Phone number must be at least 10 digits';
        isValid = false; // mark form as invalid
    }else{
        phoneErr.style.display = 'none';
    }

    // Password validation
    if (password === ''){
        passErr.style.display = 'block';
        passErr.textContent = 'Password is required';
        isValid = false; // mark form as invalid
    }else if (password.length < 8){
        passErr.style.display = 'block';
        passErr.textContent = 'Password must be at least 8 characters';
        isValid = false; // mark form as invalid
    }else{
        passErr.style.display = 'none';
    }

    // Confirm password validation
    if(confirmPassword === ''){
        confirmPassErr.style.display = 'block';
        confirmPassErr.textContent = 'Please confirm the password'
        isValid = false; // mark form as invalid
    }else if(confirmPassword !== password){
        confirmPassErr.style.display = 'block';
        confirmPassErr.textContent = 'Passwords do not match';
        isValid = false; // mark form as invalid
    }else{
        confirmPassErr.style.display = 'none';
    }

    // If all validations pass, show success message
    // --- SHOW SUCCESS ONLY IF EVERYTHING IS VALID ---
    // isValid is only true if NO check above set it to false
   if(isValid){
        successMsg.style.display = 'block';

        setTimeout(function()  {
            successMsg.style.display = "none";
        }, 3000);
   }else{
        successMsg.style.display = 'none';
   }


   // Image validation
   if (image){
    
        // List of allowed image types
        // .type gives us the file type e.g "image/jpeg"
        var allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];


        // File size limit — 2MB
        // 1MB = 1024 KB = 1024 * 1024 bytes
        var maxSize = 2 * 1024 * 1024; 

        if(!allowedTypes.includes(image.type)){
            imageErr.style.display = 'block';
            imageErr.textContent = 'Only JPG, PNG, GIF, and WEBP images are allowed';
            isValid = false; // mark form as invalid
        }else if(image.size > maxSize){

             // .size gives file size in bytes
            // we convert to MB for the error message

            var fileSizeMB = (image.size / (1024 * 1024)).toFixed(2); 
            // convert to MB and round to 2 decimals
             // .toFixed(2) rounds to 2 decimal places e.g 2.34
            imageErr.style.display = 'block';
            imageErr.textContent = 'Image size must be less than 2MB. Your file is ' + fileSizeMB + ' MB';
            isValid = false; // mark form as invalid
        }else{
            imageErr.style.display = 'none';
        }

    }else{
        imageErr.style.display = 'none';
    }


    // Document validation
    if(docfile){

        // Get the file name and convert to lowercase
        // so ".PDF" and ".pdf" are treated the same
        var fileName = docFile.name.toLowerCase();

        // Check if filename ENDS with allowed extensions
        // .endsWith() returns true if string ends with that value
        var isValidDoc = fileName.endsWith(".pdf") || 
                         fileName.endsWith(".doc") || 
                         fileName.endsWith(".docx");

         if (!isValidDoc) {
            fileErr.style.display = "block";
            fileErr.textContent = "Only PDF or DOCX files are accepted!";
            isValid = false;
        } else {
            fileErr.style.display = "none"; // document is valid!
        }

    }

    console.log('Name:', name); // for debugging
});




// =============================================
// JQUERY — Tab toggle between Login and Signup
// =============================================

// $(document).ready means:
// "wait until ALL html is loaded, then run this code"
$(document).ready(function(){

    // When LOGIN tab button is clicked
    $('#tab-login').click(function(){

        // SHOW login form, HIDE signup form
        // jQuery's .show() = display:block
        // jQuery's .hide() = display:none
        $('#loginForm').show();
        $('#signupForm').hide();

        // Update tab button styles
        // remove active class from ALL tab buttons first
        $('.tab-btn').removeClass('active'); // remove active from both

        // add active class to Login button only
        $('#tab-login').addClass('active');
    });


    $('#tab-signup').click(function(){
        // SHOW signup form, HIDE login form

        $('#signupForm').show();
        $('#loginForm').hide();

        // Update tab button styles
        $('tab-btn').removeClass('active');
        $('#tab-signup').addClass('active');


    });
});