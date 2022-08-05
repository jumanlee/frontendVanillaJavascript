//Drop down menu displayed by the hamburger button in the header is implemented using some of the CSS and javascript codes here: Dropdown Hamburger Navigation Menu CSS Html And Javascript, April 2020 [Online]. Available: https://www.youtube.com/watch?v=pVpW0SPmN7k&t=729s [Accessed on 1 September 2021]

function openMenu()
{
    //reveal the menu when this function is called
    document.getElementById("menu").style.height = "800px";
}

function closeMenu()
{
    //hide the menu when this function is called
  document.getElementById("menu").style.height = "0%";
}