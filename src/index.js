document.addEventListener('DOMContentLoaded', () =>{
    document.body.style.backgroundColor = '#343434';

    let audioDay = new Audio();
    audioDay.src = './sound/Day.wav'; //Sound for the night theme

    let audioNight = new Audio();
    audioNight.src = './sound/Night.wav'; //Sound for the day theme

    let themeBtn = document.getElementById('theme');
    
    let themeIcon = document.getElementById('theme-icon');

    let dayKeyframes = new KeyframeEffect(
        themeIcon,
        [
            {rotate: '360deg'},
            {rotate: '180deg'}
        ],
        {duration: 150, fill: "forwards"}
    )

    let nightKeyframes = new KeyframeEffect(
        themeIcon,
        [
            {rotate: '180deg'},
            {rotate: '360deg' }
        ],
        { duration: 150, fill: "forwards" }
    )


    let dayAnimate = new Animation(dayKeyframes, document.timeline);//First rotate
    let nightAnimate = new Animation(nightKeyframes, document.timeline);//Second rotate

    
    theme.addEventListener('click', () =>{
        
        if (document.body.style.backgroundColor == 'rgb(52, 52, 52)'){
            audioDay.play();
            dayAnimate.play();
            document.body.style.backgroundColor = 'rgb(242, 242, 242)';
            themeBtn.style.border = 'none';
            /* themeIcon.style.transform = "rotate(180deg)"; */

            
        } else if (document.body.style.backgroundColor == 'rgb(242, 242, 242)'){
            audioNight.play();
            nightAnimate.play()
            document.body.style.backgroundColor = 'rgb(52, 52, 52)';
            themeBtn.style.border = '1px';
            /* themeIcon.style.transform = "rotate(360deg)"; */
        }
    })
})