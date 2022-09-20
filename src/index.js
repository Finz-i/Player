document.addEventListener('DOMContentLoaded', () => {
    document.body.style.backgroundColor = '#343434';

    //Create button-variables
    let btnRandom = document.querySelector('.random');
    let btnNext = document.querySelector('.next');
    let btnPull = document.querySelector('.pull');
    let btnMove = document.querySelector('.move');
    let btnPush = document.querySelector('.push');
    let btnNext2 = document.querySelector('.next2');
    let btnLoop = document.querySelector('.loop');

    let btnSound = document.querySelector('.sound');
    let moveImg = document.querySelector('.move-img');

    let volumeNoneBtn = document.querySelector('.volume-none');
    let volumeNoneImg = document.querySelector('.volume-none-img')
    
    
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
    
    {//Light theme button action
        let count = 1;
        themeBtn.style.border = '2px';

        theme.addEventListener('click', () => {
            count += 1;

            if (count % 2 == 0) {
                audioDay.play();
                daynightAnimate.play();
                document.body.style.backgroundColor = 'rgb(242, 242, 242)';
                player.style.backgroundColor = 'rgb(220, 214, 255)'
                
            } else if (count % 2 != 0) {
                audioNight.play();
                daynightAnimate.play();
                document.body.style.backgroundColor = 'rgb(52, 52, 52)';
                player.style.backgroundColor = 'rgb(5, 0, 32)'
                
            }
    })}

    {//Play button action
        let count = 1;
        moveImg.style.paddingLeft = '4px';
        btnMove.addEventListener('click', () =>{
            moveImg.style.transition = '0.4s'
            
            count += 1;
            if (count % 2 == 0){
                moveImg.src = 'img/pause.svg';
                moveImg.style.paddingLeft = '0px'
                moveImg.style.rotate = '-360deg'
            } else if (count % 2 != 0){
                moveImg.src = 'img/play.svg';
                moveImg.style.paddingLeft = '4px'
                moveImg.style.rotate = '360deg'
            }
        })
    }

    {//Volume none button action
        let count = 1
        volumeNoneImg.src = './img/sound.svg'
        volumeNoneBtn.addEventListener('click', () =>{
            count += 1;
            if(count % 2 == 0){
                volumeNoneImg.src = './img/soundNone.svg'
            } else if (count % 2 != 0){
                volumeNoneImg.src = './img/sound.svg'
            }
        })
    }


    {//Create volume functionality
        btnSound.addEventListener('focus', () =>{
            /* document.createElement */
        })
    }




    

})