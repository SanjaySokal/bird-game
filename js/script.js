var bird = document.querySelector('.bird');
var out = document.querySelector('.out');
var border = document.querySelector('.border');
var score_show = document.querySelector('.game-over h3');
var container = document.querySelector('.container');
var score = 0;
var jump = 0;
var top_val = parseInt(window.getComputedStyle(bird).top);
var right_val = parseInt(window.getComputedStyle(border).right);

const new_sc = setInterval(function () {
    score++;
    score_show.innerHTML = "Your Score is: " + score;
}, 700)

const bird_top_val = setInterval(function () {
    bird.style.top = top_val + 10 + "px";
    top_val = parseInt(bird.style.top);
    score_out();
}, 100)

document.body.addEventListener('click', function () {
    var new_val = top_val - 40 + "px";
    top_val = parseInt(new_val);
})

const anim = border.addEventListener('animationiteration', function () {
    var rand = ((Math.random() * 350));
    out.style.top = (rand + "px");
    var right= 0;
    const val_rt = setInterval(function () {
        right++;
        if(right>=10 && (top_val <= (rand) || top_val >= (rand+150))){
            score_out();
            clearInterval(bird_top_val);
            clearInterval(new_sc);
            clearInterval(val_rt);
            container.remove();
        }
        // console.log(top_val);
        // console.log(right);
    },300)
})

const score_out = () => {
    if ((top_val < -10) || (top_val > 400)) {
        clearInterval(bird_top_val);
        clearInterval(new_sc);
        container.remove();
    }
}