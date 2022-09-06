document.addEventListener('DOMContentLoaded', () =>{
    document.body.style.backgroundColor = '#343434';

    let audioDay = new Audio();
    audioDay.src = './sound/Day.wav'; //Sound for the night theme

    let audioNight = new Audio();
    audioNight.src = './sound/Night.wav'; //Sound for the day theme

    let themeBtn = document.getElementById('theme');

    let themeIcon = document.getElementById('theme-icon');

    theme.addEventListener('click', () =>{

        console.log(document.body.style.backgroundColor)
        
        if (document.body.style.backgroundColor == 'rgb(52, 52, 52)'){
            audioDay.play();
            document.body.style.backgroundColor = 'rgb(242, 242, 242)';
            themeBtn.style.border = 'none';
            themeBtn.style.backgroundColor = ''
            themeIcon.style.transform = "rotate(180deg)";
        } else if (document.body.style.backgroundColor == 'rgb(242, 242, 242)'){
            audioNight.play();
            document.body.style.backgroundColor = 'rgb(52, 52, 52)'
            themeIcon.style.transform = "rotate(360deg)";
        }
    })
})