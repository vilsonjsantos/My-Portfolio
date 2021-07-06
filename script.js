let carousel = document.getElementById("carousel");
/* let scrollTop = window.pageYOffset;
let scrollLeft = window.pageXOffset; */
/* 
carousel.addEventListener("mouseover", event => {
    disableScroll()
})

carousel.addEventListener("mouseout", event => {
    enableScroll()
}
) */


function clickCarouselLeft() {
    carousel.scrollBy(300, 0)
    
}

function clickCarouselRight() {
    carousel.scrollBy(-300, 0)
}



/* 
function disableScroll(){
    console.log("disable")
    scrollTop = window.pageYOffset;
    scrollLeft = window.pageXOffset;
    window.onscroll = () =>{
        window.scrollTo(scrollLeft, scrollTop)
        
    }
}

function enableScroll(){
    scrollTop = window.pageYOffset;
    scrollLeft = window.pageXOffset;
    window.onscroll = function(){}
    console.log("enable")
} */