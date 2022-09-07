document.addEventListener('DOMContentLoaded', () => {
    document.body.style.backgroundColor = '#343434';

    const player = document.querySelector('.player');//Player body
    

    let audioDay = new Audio();
    audioDay.src = './sound/Day.wav'; //Sound for the night theme

    let audioNight = new Audio();
    audioNight.src = './sound/Night.wav'; //Sound for the day theme

    let themeBtn = document.getElementById('theme');

    let themeIcon = document.getElementById('theme-icon');

    let daynightKeyframes = new KeyframeEffect(
        themeIcon,
        [
            { rotate: '360deg' }
        ],
        { duration: 180, fill: "forwards" }
    )

    let daynightAnimate = new Animation(daynightKeyframes, document.timeline);
    
    let count = 1;
    theme.addEventListener('click', () => {
        count += 1;

        if (count % 2 == 0) {
            audioDay.play();
            daynightAnimate.play();
            document.body.style.backgroundColor = 'rgb(242, 242, 242)';
            themeBtn.style.border = 'none';
            /* themeIcon.style.transform = "rotate(180deg)"; */

        } else if (count % 2 != 0) {
            audioNight.play();
            daynightAnimate.play()
            document.body.style.backgroundColor = 'rgb(52, 52, 52)';
            themeBtn.style.border = '2px';
            /* themeIcon.style.transform = "rotate(360deg)"; */
        }
    }) 


})