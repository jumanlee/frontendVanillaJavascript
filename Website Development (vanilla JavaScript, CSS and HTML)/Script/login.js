
//function to prompt the specific login error message according to what has been typed in to the fields. 
function loginError()
{
//    get the input element
    var input = document.querySelectorAll(".login input");
    
    //boolean variable to check if the input field is empty
    var isEmpty = false;
    
    for(var i = 0; i < input.length; i++)
    {
        //if input field is empty, then set isEmpty to true. Then break off from the for-loop
        if(input[i].value == "")
        {
            isEmpty = true;
            break;
        }
    }
    
    //if any field is found to be empty, then output the appropriate error message. Otherwise, just output the standard error message.
    if(isEmpty)
    {
        document.querySelector(".login-error1").style.display = "block";
        document.querySelector(".login-error2").style.display = "none";
    }
    else
    {
        document.querySelector(".login-error1").style.display = "none";
        document.querySelector(".login-error2").style.display = "block";
    }
}

//function to reveal the login form
function revealLogin()
{
    document.querySelector(".login-container").style.display = "flex";
    document.querySelector(".account-container").style.display = "none";
    
    //hide all error messages
    resetErrorMessages();
}

//function to prompt the specific error message according to what has been typed into the create account fields.
function accountError()
{
    //    get the input element
    var input = document.querySelectorAll(".account input");
    
    //boolean variable to check if the input field is empty
    var isEmpty = false;
    
    for(var i = 0; i < input.length; i++)
    {
        //if input field is empty, then set isEmpty to true. Then break off from the for-loop
        if(input[i].value == "")
        {
            isEmpty = true;
            break;
        }
    }
    
    //if any field is found to be empty, then output the appropriate error message. Otherwise, just output the standard error message.
    if(isEmpty)
    {
        document.querySelector(".account-error1").style.display = "block";
        document.querySelector(".account-error2").style.display = "none";
    }
    else
    {
        document.querySelector(".account-error1").style.display = "none";
        document.querySelector(".account-error2").style.display = "block";
    }
}

//function to reveal the create account form
function revealAccount()
{
    document.querySelector(".account-container").style.display = "flex";
    document.querySelector(".login-container").style.display = "none";

    //hide all error messages
    resetErrorMessages();
}

//function to reset or hide all error messages that have been displayed. 
function resetErrorMessages()
{
    document.querySelector(".login-error1").style.display = "none";
    document.querySelector(".login-error2").style.display = "none";
    document.querySelector(".account-error1").style.display = "none";
    document.querySelector(".account-error2").style.display = "none";
}