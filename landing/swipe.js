var startingX;
var p1 = document.getElementById('p1');
console.log(p1)

function p1touchStart(evt, touchEle) {
    startingX = evt.touches[0].clientX;
};

function p1touchMove(evt) {
    var touch = evt.touches[0];
    var change = startingX - touch.clientX;
    console.log(p1,p2);
    if (change < 0) {
        return;
    }
    p1.style.bottom = '-' + change + 'px';
    p2.style.display = 'block';
    p2.style.bottom = (screen.height - change) + 'px';
    evt.preventDefault();
};

function p1touchEnd(evt) {
    var change = startingX - evt.changedTouches[0].clientX;
    var threshold = screen.height / 3;
    if (change < threshold) {
        p1.style.bottom = 0;
        p2.style.bottom = '100%';
        p2.style.display = 'none';
    } else {
        p1.style.transition = 'all .3s';
        p2.style.transition = 'all .3s';
        p1.style.bottom = '-100%';
        p2.style.bottom = '0';
        p2.style.display = 'block';
    }
};

function p2touchStart(evt) {
    startingX = evt.touches[0].clientX;
    p1.style.transition = '';
    p2.style.transition = '';
    p1.style.display = "none";
};

function p2touchMove(evt) {
    var touch = evt.touches[0];
    var change = touch.clientX - startingX;
    if (change < 0) {
        return;
    }
    p1.style.display = 'block';
    p1.style.bottom = (change - screen.height) + 'px';
    p2.style.bottom = change + 'px';
    evt.preventDefault();
};

function p2touchEnd(evt) {
    var change = evt.changedTouches[0].clientX - startingX;
    var half = screen.height / 4;
    if (change < half) {
        p1.style.bottom = '-100%';
        p1.style.display = 'none';
        p2.style.bottom = '0';
    } else {
        p1.style.transition = 'all .3s';
        p2.style.transition = 'all .3s';
        p1.style.bottom = '0';
        p2.style.bottom = '100%';
        // p2.style.display = 'none';
    }
};