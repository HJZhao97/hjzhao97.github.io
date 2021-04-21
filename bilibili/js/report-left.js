let images = document.getElementsByClassName("images")[0];
let reportLeft = document.getElementsByClassName("report-left")[0];
let interval = null;
let leave = null;
let imgIndex = 1;

window.onload = runInterval;
reportLeft.addEventListener("mouseenter",mouseEnter);
reportLeft.children[1].addEventListener("click",pointJump);

function runInterval(){
    interval = setInterval(() => {
        imgIndex++;
        jump();
    },3000);
}

function pointJump(e){
    // console.log(event.target)
    imgIndex = e.target.getAttribute("data-index");
    jump();
}

function jump(){
    images.style.transition = "all .3s";
    images.style.transform = "translateX(" + (0 - imgIndex * 550) + "px)";
    if (imgIndex == images.children.length - 1){
        images.style.transform = "translateX(" + (0 - imgIndex * 550) + "px)";
        setTimeout(() => {
            imgIndex = 1;
            images.style.transition = "none";
            images.style.transform = "translateX(" + (0 - imgIndex * 550) + "px)";
        },300)
    }else if (imgIndex == 0){
        images.style.transform = "translateX(" + (0 - imgIndex * 550) + "px)";
        setTimeout(() => {
            imgIndex = images.children.length -2;
            images.style.transition = "none";
            images.style.transform = "translateX(" + (0 - imgIndex * 550) + "px)";
        },300)
    }
}

function prePage(){
    imgIndex--;
    jump();
}

function nextPage(){
    imgIndex++;
    jump();
}

function mouseEnter(){
    clearInterval(interval);
    leave = reportLeft.addEventListener("mouseleave",mouseLeave);
}

function mouseLeave(){
    interval = setInterval(() => {
        imgIndex++;
        jump(imgIndex);
    },3000);
    reportLeft.removeEventListener("mouseleave",leave);
}