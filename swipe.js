var startingY;
var p2 = document.getElementById('p2');
var arrow = document.getElementsById('arrow-trans');

function p2touchStart(evt) {
    startingY = evt.touches[0].clientY;
};

function p2touchMove(evt) {
    var touch = evt.touches[0];
    var change = touch.clientY - startingY;
    console.log(change);
    if (change < 0) {
        return;
    }
    // p1.style.bottom = (change - screen.height) + 'px';
    p2.style.top = change + 150 + 'px';
    evt.preventDefault();
};

function p2touchEnd(evt) {
    var change = evt.changedTouches[0].clientY - startingY;
    var half = screen.height / 4;
    if (change < half) {
        p2.style.top = '42vh';
        arrow.style.transform = "transform: scaleY(-1)";
    } else {
        p2.style.top = '92vh';
        p2.style.display = 'block';
        // p2.style.display = 'none';
    }
};