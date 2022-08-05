// This code was largely taken from https://www.youtube.com/watch?v=KcdBOoK3Pfw&t=10s [Accessed on 10 September 2021] Note that while I took the carousel code from this tutorial, I also enhanced and adapted the code so that it not only moves images across the screen, but also a series of articles and titles along with the relevant images. It now looks the way I intended it to do. 

//select the set of images
const carouselSlide = document.querySelector('.carousel-slide');

//select the individual image
const carouselImages = document.querySelectorAll('.carousel-slide img');

//select the set of texts
const carouselSlideText = document.querySelector('.carousel-text-slide');

//select the individual text
const carouselText = document.querySelectorAll('.carousel-text');

//variable to select the buttons
const prevBtn = document.querySelector('#prevBtn');

const nextBtn = document.querySelector('#nextBtn');

//Counters
let counter = 1;

const size = carouselImages[0].getBoundingClientRect().width;


carouselSlide.style.transform = 'translateX('+(-size*counter) + 'px)';

carouselSlideText.style.transform = 'translateX('+(-size*counter) + 'px)';

//button listener
nextBtn.addEventListener('click', ()=> 
{
    if(counter >= carouselImages.length - 1)
    {
        return;
    }
    
    //can also alternative add a class for "transform ...." 
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlideText.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX('+(-size*counter) + 'px)';
    carouselSlideText.style.transform = 'translateX('+(-size*counter) + 'px)';
});


prevBtn.addEventListener('click', ()=> 
{
    if(counter <= 0)
    {
        return;
    }
    
    //can also alternative add a class for "transform ...." 
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    
    carouselSlideText.style.transition = "transform 0.4s ease-in-out";
    
    counter--;
    carouselSlide.style.transform = 'translateX('+(-size*counter) + 'px)';
    carouselSlideText.style.transform = 'translateX('+(-size*counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', ()=>
{
    //if you have reached the lastclone (first img), it will take you to the firstclone (last img)
    if(carouselImages[counter].id === 'lastClone')
    {
        carouselSlide.style.transition = "none"; //allows it to jump to the initial picture after it ends without the transition effect. 
        
        carouselSlideText.style.transition = "none"; //allows it to jump to the initial picture after it ends without the transition effect. 
    
        counter = carouselImages.length - 2; //-2 to get to the second last INDEX of the carouselImages, which is carouselpic5. 
        
        carouselSlide.style.transform = 'translateX('+(-size*counter)+'px)'; //then pull the image.
        
        carouselSlideText.style.transform = 'translateX('+(-size*counter)+'px)'; //then pull the image.
    }
    
    if(carouselImages[counter].id === 'firstClone')
    {
        carouselSlide.style.transition = "none"; //allows it to jump to the initial picture after it ends without the transition effect. 
        
        carouselSlideText.style.transition = "none"; //allows it to jump to the initial picture after it ends without the transition effect. 
    
        counter = carouselImages.length - counter; //-2 to get to the second last INDEX of the carouselImages, which is carouselpic5. 
        
        carouselSlide.style.transform = 'translateX('+(-size*counter)+'px)'; //then pull the image.
        
        carouselSlideText.style.transform = 'translateX('+(-size*counter)+'px)'; //then pull the image.
    }
});