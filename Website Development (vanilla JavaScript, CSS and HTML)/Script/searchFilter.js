
//This is implemented on the stories.html page. The function is used to filter the user's input in the search bar. This function allows readers on the stories.html page to search and filter for all the relevant articles that contain the keyword being searched. This saves readers time trying to scheme through looking for the relevant articles. This search functionality operates dynamically, so whenever a character is being typed into the search field, the result is immediately updated and displayed on the page, while articles that are irrelevant are immediately hidden away. 

function searchFilter()
{
    //get the typed in keyword in the search bar
    var searchContent = document.querySelector(".search-bar input").value;
    
    //make it lower case so that it can be compared in a case insensitive manner
    searchContent = searchContent.toLowerCase();
    
    //get the item container
    var items = document.querySelectorAll(".item-container");
    
    for(var i = 0; i < items.length; i++)
    {
        //retrieve the h1 and h2 text content
        var h1 = items[i].querySelector("h1");
        var h2 = items[i].querySelector("h2");
        
        //give the container a unique id
        items[i].setAttribute("id","container" + `${i}`);
        
        //..and select it and store it in a variable called selectedContainer
        var selectedContainer = document.querySelector("#container" + `${i}`);
        
        //make them lower case so that it can be compared in a case insensitive manner
        h1TextContent = h1.textContent.toLowerCase();
        h2TextContent = h2.textContent.toLowerCase();
        
        //if-condition to test if the hi or h2 text contains the keyword being searched
        if(h1TextContent.includes(searchContent) || h2TextContent.includes(searchContent))
        {
            //if they include the keyword, then get all the child div elements and set them to block, which means reveal them.
            var selectedChildren = selectedContainer.querySelectorAll("div");

            for(var j = 0; j < selectedChildren.length; j++)
            {
                selectedChildren[j].style.display = "block";
            }     
        }
        else
        {
            //if not, then hide all of them
            var selectedChildren = selectedContainer.querySelectorAll("div");

            for(var j = 0; j < selectedChildren.length; j++)
            {
                selectedChildren[j].style.display = "none";
            }    
        }
    }
}