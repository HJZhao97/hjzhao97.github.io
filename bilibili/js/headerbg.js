// header背景图片随鼠标移动特效
let header = document.getElementsByClassName("header");
let bg = document.getElementsByClassName("bg");
let x = 0;
let mv = 0;
let l = bg[0].children.length;
let i = 0;
let bg_left = new Array();
for(i = 0;i < l;i++){
    // 注意 element.style.left 和 element.getAttribute("left") 只能获取到行内样式的left，无法获取内联和外部样式！！！
    let sl = bg[0].getElementsByClassName("bg"+(i+1))[0].offsetLeft; // 因此使用offsetLeft
    bg_left[i] = sl;
}

// 添加mouseenter事件
let f1 = function (e){
    for(i = 0;i < l;i++){
        bg[0].children[i].style.left = bg_left[i] + "px";
    }
    x = e.clientX;
    e.preventDefault();
};
let o = header[0].addEventListener("mouseenter",f1);

// 添加mousemove事件
let f2 = function (e){
    let x1 = e.clientX;
    // 计算鼠标移动距离mv
    mv = x1 - x;
    // console.log(mv);
    for(i = 0;i < 2;i++){
        // bg[0].children[i].style.left = bg_left[i] - mv / 4 + "px";
        bg[0].children[i].style.transform = 'translateX(' + (0 - mv / 8) + "px";
    }
    for(i = 2;i < 11;i++){
        // bg[0].children[i].style.left = bg_left[i] - mv / 4 + "px";
        bg[0].children[i].style.transform = 'translateX(' + (0 - mv / 4) + "px";
    }
    for(i = 11;i < 13;i++){
        // bg[0].children[i].style.left = bg_left[i] - mv / 4 + "px";
        bg[0].children[i].style.transform = 'translateX(' + (0 - mv / 1.5) + "px";
    }
    for(i = 13;i < l;i++){
        // bg[0].children[i].style.left = bg_left[i] - mv / 4 + "px";
        bg[0].children[i].style.transform = 'translateX(' + (0 - mv) + "px";
    }
    e.preventDefault();
};
let m = header[0].addEventListener("mousemove",f2);

// 添加mouseleave事件
header[0].addEventListener("mouseleave",function (e){
    for(i = 0;i < l;i++){
        // bg[0].children[i].style.left = bg_left[i] + "px";
        bg[0].children[i].style.transform = 'translateX(0)'
    }
    header[0].removeEventListener(o,f1);
    header[0].removeEventListener(m,f2);
    e.preventDefault();
});
