//add event listener to user's scroll
window.addEventListener('scroll', appear);

//this function reveals the login prompt to cover the entire page based on a condition
function appear()
{
//    get the login section element and call it loginDisplay
    var loginDisplay = document.querySelector(".login");
    
    //get all story items and call it items
    var items = document.getElementsByClassName("item-container");
    
//    midItemTop to get the measurement for when the scroll reaches 70% of the height
    var midItemTop = items[Math.floor(items.length*0.7)].getBoundingClientRect().top;

//    if the window inner Height is larger than midItemTop, then reveal the login prompt
    if(midItemTop < window.innerHeight)
    {
        loginDisplay.style.height = "100vh";
        loginDisplay.style.display = "block";
        var body = document.querySelector("body");
        body.style.overflow = "hidden";
        
        var loginText = document.querySelector(".login-text");
        loginText.style.display = "block";
        
        var loginButtonX = document.querySelector(".login-buttonX");
        
        loginButtonX.style.display = "block";
        
        var loginButton = document.querySelector(".login-button");
        loginButton.style.display ="block";
    }
}

//this function closes the login prompt 
function closeScrollLogin()
{
    var loginDisplay = document.querySelector(".login");
    loginDisplay.style.height = "0vh";

    document.body.style.overflow = "scroll";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
    var loginText = document.querySelector(".login-text");
    loginText.style.display = "none";

    var loginButtonX = document.querySelector(".login-buttonX");

    loginButtonX.style.display = "none";
    
    var loginButton = document.querySelector(".login-button");
    loginButton.style.display ="none";
}

//this function reveals the login prompt and is used when the user clicks on the "read me" text
function clickAppear()
{
    var loginDisplay = document.querySelector(".login");
    
    var items = document.getElementsByClassName("item-container");
    
    loginDisplay.style.height = "100vh";
    loginDisplay.style.display = "block";
    var body = document.querySelector("body");
    body.style.overflow = "hidden";

    var loginText = document.querySelector(".login-text");
    loginText.style.display = "block";

    var loginButtonX = document.querySelector(".login-buttonX");

    loginButtonX.style.display = "block";

    var loginButton = document.querySelector(".login-button");
    loginButton.style.display ="block";
}