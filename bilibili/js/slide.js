window.onscroll = scroll;
function scroll(){
    let scrollTop = document.documentElement.scrollTop;
    let slide = document.getElementsByClassName("slide")[0];
    // console.log(scrollTop);
    if (scrollTop>=100){
        slide.style.top = scrollTop + 100 + "px";
    }
}