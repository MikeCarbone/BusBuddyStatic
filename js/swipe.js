var startingY;
var p2 = document.getElementById('p2');

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
    //p2.style.top = change + 150 + 'px';
    p2.style.height = "300px";
    evt.preventDefault();
};

function p2touchEnd(evt) {
    var change = evt.changedTouches[0].clientY - startingY;
    var half = 50;
    change = Math.abs(change);
    console.log(change);

    //var half = screen.height / 4;
    if (change < half) {
        p2.style.bottom = '0vh';
         p2.style.height = "80px";
         console.log('closed');
         $('body').removeClass('open');
    } else {
        p2.style.bottom = '80px';
         p2.style.height = "300px";
        p2.style.display = 'block';
        console.log('open');
        $('body').addClass('open');
        // p2.style.display = 'none';
    }
};
