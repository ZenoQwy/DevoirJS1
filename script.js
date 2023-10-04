var carousel = document.getElementById("carousel")

carousel.onmouseenter = enterMouse();
carousel.onmouseleave = leaveMouse();

function enterMouse(){
    document.getElementById('carousel').style.cursor = 'pointer';
}