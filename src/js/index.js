'use strict';

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
    let soundIcon = document.querySelector('.sound-img');
    soundIcon.src = '../img/sound.svg'

    let moveImg = document.querySelector('.move-img');

    {//Play button action
        let count = 1;
        moveImg.style.paddingLeft = '4px';
        btnMove.addEventListener('click', () => {
            moveImg.style.transition = '0.4s'

            count += 1;
            if (count % 2 == 0) {
                moveImg.src = '../img/pause.svg';
                moveImg.style.paddingLeft = '0px'
                moveImg.style.rotate = '-360deg'
            } else if (count % 2 != 0) {
                moveImg.src = '../img/play.svg';
                moveImg.style.paddingLeft = '4px'
                moveImg.style.rotate = '360deg'
            }
        })
    }


    //Create object for localStorage
    let startValueOfSound = {
        val: 100,
        iconSrc: 1
    }

    //Function that create volume field
    function createVolumeField(lvl, arg) {
        lvl = JSON.parse(localStorage.getItem('value')).val;
        arg = JSON.parse(localStorage.getItem('value')).iconSrc;

        const volumeField = document.createElement('div');
        volumeField.classList.add('volume-wrapper');
        document.querySelector('.settings').appendChild(volumeField);

        const volumeNoneBtn = document.createElement('button');
        volumeNoneBtn.classList.add('volume-none');
        volumeField.appendChild(volumeNoneBtn);

        const volumeNoneImg = document.createElement('img');
        volumeNoneImg.classList.add('volume-none-img');
        volumeNoneBtn.appendChild(volumeNoneImg);

        const range = document.createElement('input');
        range.classList.add('volume');
        range.type = 'range';
        range.min = '0';
        range.max = '100';
        range.step = '1';
        volumeField.appendChild(range);

        const rangeOutWrapper = document.createElement('div');
        rangeOutWrapper.classList.add('volume-output-wrapper');
        volumeField.appendChild(rangeOutWrapper);

        const rangeOut = document.createElement('output');
        rangeOut.classList.add('volume-output');
        rangeOutWrapper.appendChild(rangeOut);

        //Set start values for all el-ts of sound panel
        range.value = lvl + '';
        rangeOut.innerHTML = lvl + '';

        if(arg == 0){
            volumeNoneImg.src = '../img/soundNone.svg';
        } else if (arg == 1){
            volumeNoneImg.src = '../img/sound.svg';
        }
        

        

        {
            //On or off sound   
            volumeNoneBtn.addEventListener('click', () => {
                if (arg == 1) {
                    volumeNoneImg.src = '../img/soundNone.svg';
                    soundIcon.src = '../img/soundNone.svg';
                    arg = 0;
                    startValueOfSound.iconSrc = 0;
                    localStorage.setItem('value', JSON.stringify(startValueOfSound));
                }
                else if (arg == 0) {
                    volumeNoneImg.src = '../img/sound.svg';
                    soundIcon.src = '../img/sound.svg';
                    arg = 1;
                    startValueOfSound.iconSrc = 1;
                    localStorage.setItem('value', JSON.stringify(startValueOfSound));
                }
            })

            range.addEventListener('input', () => {
                rangeOut.innerHTML = range.value;
                startValueOfSound.val = range.value;
                localStorage.setItem('value', JSON.stringify(startValueOfSound));
                if (range.value == 0) {
                    volumeNoneImg.src = '../img/soundNone.svg';
                    soundIcon.src = '../img/soundNone.svg';
                    arg = 0;
                    startValueOfSound.iconSrc = 0;
                    localStorage.setItem('value', JSON.stringify(startValueOfSound));
                } else if (range.value > 0) {
                    volumeNoneImg.src = '../img/sound.svg';
                    soundIcon.src = '../img/sound.svg';
                    arg = 1;
                    startValueOfSound.iconSrc = 1;
                    localStorage.setItem('value', JSON.stringify(startValueOfSound));
                }
            })
        }

        //Delete sound panel if it (or sound button) was unfocused
        volumeField.addEventListener('mouseleave', () => {
            volumeField.remove();
        })
    }

    

    localStorage.setItem('value', JSON.stringify(startValueOfSound));

    //Create volume field if sound button was clicked
    btnSound.addEventListener('click', () => {
        createVolumeField();
    })

    
    /* console.log(JSON.parse(localStorage.getItem('value')).iconSrc) */
    
})