var mousePosition;
var offset = [0,0];
var div;
var isDown = false;

div = document.getElementById('bag-window-id');
// div.style.position = "absolute";
// div.style.left = "1050px";
// div.style.top = "400px";
// div.style.width = "500px";
// div.style.height = "500px";
// div.style.background = "red";
// div.style.color = "blue";
// div.style.border = "solid";
document.body.appendChild(div);

div.addEventListener('mousedown', function(e) {
    isDown = true;
    offset = [
        div.offsetLeft - e.clientX,
        div.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function() {
    isDown = false;
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {

            x : event.clientX,
            y : event.clientY

        };
        div.style.left = (mousePosition.x + offset[0]) + 'px';
        div.style.top  = (mousePosition.y + offset[1]) + 'px';
    }
}, true);