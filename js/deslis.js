(function(){
    
    const sliders = [...document.querySelectorAll('.imagenesreb__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>changePosition(1));

    buttonBefore.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change){
        const currentElement = Number(document.querySelector('.imagenesreb__body--show').dataset.id);

        value = currentElement;
        value+= change;

        console.log(sliders.length)
        if(value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[currentElement-1].classList.toggle('imagenesreb__body--show');
        sliders[value-1].classList.toggle('imagenesreb__body--show');
    }

    

})();

(function(){
    
    const sliders = [...document.querySelectorAll('.imagenesreb__body1')];
    const buttonNext = document.querySelector('#next1');
    const buttonBefore = document.querySelector('#before1');
    let value;   

    buttonNext.addEventListener('click', ()=>changePosition(1));

    buttonBefore.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change){
        const currentElement = Number(document.querySelector('.imagenesreb__body--show1').dataset.id);

        value = currentElement;
        value+= change;

        console.log(sliders.length)
        if(value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[currentElement-1].classList.toggle('imagenesreb__body--show1');
        sliders[value-1].classList.toggle('imagenesreb__body--show1');
    }

    

})();

(function(){
    
    const sliders = [...document.querySelectorAll('.imagenesreb__body2')];
    const buttonNext = document.querySelector('#next2');
    const buttonBefore = document.querySelector('#before2');
    let value;   

    buttonNext.addEventListener('click', ()=>changePosition(1));

    buttonBefore.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change){
        const currentElement = Number(document.querySelector('.imagenesreb__body--show2').dataset.id);

        value = currentElement;
        value+= change;

        console.log(sliders.length)
        if(value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[currentElement-1].classList.toggle('imagenesreb__body--show2');
        sliders[value-1].classList.toggle('imagenesreb__body--show2');
    }

    

})();

(function(){
    
    const sliders = [...document.querySelectorAll('.imagenesreb__body3')];
    const buttonNext = document.querySelector('#next3');
    const buttonBefore = document.querySelector('#before3');
    let value;   

    buttonNext.addEventListener('click', ()=>changePosition(1));

    buttonBefore.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change){
        const currentElement = Number(document.querySelector('.imagenesreb__body--show3').dataset.id);

        value = currentElement;
        value+= change;

        console.log(sliders.length)
        if(value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[currentElement-1].classList.toggle('imagenesreb__body--show3');
        sliders[value-1].classList.toggle('imagenesreb__body--show3');
    }

    

})();

(function(){
    
    const sliders = [...document.querySelectorAll('.imagenesreb__body4')];
    const buttonNext = document.querySelector('#next4');
    const buttonBefore = document.querySelector('#before4');
    let value;   

    buttonNext.addEventListener('click', ()=>changePosition(1));

    buttonBefore.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change){
        const currentElement = Number(document.querySelector('.imagenesreb__body--show4').dataset.id);

        value = currentElement;
        value+= change;

        console.log(sliders.length)
        if(value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[currentElement-1].classList.toggle('imagenesreb__body--show4');
        sliders[value-1].classList.toggle('imagenesreb__body--show4');
    }

    

})();

(function(){
    
    const sliders = [...document.querySelectorAll('.imagenesreb__body5')];
    const buttonNext = document.querySelector('#next5');
    const buttonBefore = document.querySelector('#before5');
    let value;   

    buttonNext.addEventListener('click', ()=>changePosition(1));

    buttonBefore.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change){
        const currentElement = Number(document.querySelector('.imagenesreb__body--show5').dataset.id);

        value = currentElement;
        value+= change;

        console.log(sliders.length)
        if(value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[currentElement-1].classList.toggle('imagenesreb__body--show5');
        sliders[value-1].classList.toggle('imagenesreb__body--show5');
    }

    

})();

(function(){
    
    const sliders = [...document.querySelectorAll('.imagenesreb__body6')];
    const buttonNext = document.querySelector('#next6');
    const buttonBefore = document.querySelector('#before6');
    let value;   

    buttonNext.addEventListener('click', ()=>changePosition(1));

    buttonBefore.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change){
        const currentElement = Number(document.querySelector('.imagenesreb__body--show6').dataset.id);

        value = currentElement;
        value+= change;

        console.log(sliders.length)
        if(value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[currentElement-1].classList.toggle('imagenesreb__body--show6');
        sliders[value-1].classList.toggle('imagenesreb__body--show6');
    }

    

})();

(function(){
    
    const sliders = [...document.querySelectorAll('.imagenesreb__body7')];
    const buttonNext = document.querySelector('#next7');
    const buttonBefore = document.querySelector('#before7');
    let value;   

    buttonNext.addEventListener('click', ()=>changePosition(1));

    buttonBefore.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change){
        const currentElement = Number(document.querySelector('.imagenesreb__body--show7').dataset.id);

        value = currentElement;
        value+= change;

        console.log(sliders.length)
        if(value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[currentElement-1].classList.toggle('imagenesreb__body--show7');
        sliders[value-1].classList.toggle('imagenesreb__body--show7');
    }

    

})();
(function(){
    
    const sliders = [...document.querySelectorAll('.imagenesreb__body8')];
    const buttonNext = document.querySelector('#next8');
    const buttonBefore = document.querySelector('#before8');
    let value;   

    buttonNext.addEventListener('click', ()=>changePosition(1));

    buttonBefore.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change){
        const currentElement = Number(document.querySelector('.imagenesreb__body--show8').dataset.id);

        value = currentElement;
        value+= change;

        console.log(sliders.length)
        if(value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[currentElement-1].classList.toggle('imagenesreb__body--show8');
        sliders[value-1].classList.toggle('imagenesreb__body--show8');
    }

    

})();

(function(){
    
    const sliders = [...document.querySelectorAll('.imagenesreb__body9')];
    const buttonNext = document.querySelector('#next9');
    const buttonBefore = document.querySelector('#before9');
    let value;   

    buttonNext.addEventListener('click', ()=>changePosition(1));

    buttonBefore.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change){
        const currentElement = Number(document.querySelector('.imagenesreb__body--show9').dataset.id);

        value = currentElement;
        value+= change;

        console.log(sliders.length)
        if(value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[currentElement-1].classList.toggle('imagenesreb__body--show9');
        sliders[value-1].classList.toggle('imagenesreb__body--show9');
    }

    

})();

(function(){
    
    const sliders = [...document.querySelectorAll('.imagenesreb__body10')];
    const buttonNext = document.querySelector('#next10');
    const buttonBefore = document.querySelector('#before10');
    let value;   

    buttonNext.addEventListener('click', ()=>changePosition(1));

    buttonBefore.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change){
        const currentElement = Number(document.querySelector('.imagenesreb__body--show10').dataset.id);

        value = currentElement;
        value+= change;

        console.log(sliders.length)
        if(value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[currentElement-1].classList.toggle('imagenesreb__body--show10');
        sliders[value-1].classList.toggle('imagenesreb__body--show10');
    }

    

})();

(function(){
    
    const sliders = [...document.querySelectorAll('.imagenesreb__body11')];
    const buttonNext = document.querySelector('#next11');
    const buttonBefore = document.querySelector('#before11');
    let value;   

    buttonNext.addEventListener('click', ()=>changePosition(1));

    buttonBefore.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change){
        const currentElement = Number(document.querySelector('.imagenesreb__body--show11').dataset.id);

        value = currentElement;
        value+= change;

        console.log(sliders.length)
        if(value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[currentElement-1].classList.toggle('imagenesreb__body--show11');
        sliders[value-1].classList.toggle('imagenesreb__body--show11');
    }

    

})();

(function(){
    
    const sliders = [...document.querySelectorAll('.imagenesreb__body12')];
    const buttonNext = document.querySelector('#next12');
    const buttonBefore = document.querySelector('#before12');
    let value;   

    buttonNext.addEventListener('click', ()=>changePosition(1));

    buttonBefore.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change){
        const currentElement = Number(document.querySelector('.imagenesreb__body--show12').dataset.id);

        value = currentElement;
        value+= change;

        console.log(sliders.length)
        if(value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[currentElement-1].classList.toggle('imagenesreb__body--show12');
        sliders[value-1].classList.toggle('imagenesreb__body--show12');
    }

    

})();

(function(){
    
    const sliders = [...document.querySelectorAll('.imagenesreb__body13')];
    const buttonNext = document.querySelector('#next13');
    const buttonBefore = document.querySelector('#before13');
    let value;   

    buttonNext.addEventListener('click', ()=>changePosition(1));

    buttonBefore.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change){
        const currentElement = Number(document.querySelector('.imagenesreb__body--show13').dataset.id);

        value = currentElement;
        value+= change;

        console.log(sliders.length)
        if(value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[currentElement-1].classList.toggle('imagenesreb__body--show13');
        sliders[value-1].classList.toggle('imagenesreb__body--show13');
    }

    

})();

(function(){
    
    const sliders = [...document.querySelectorAll('.imagenesreb__body14')];
    const buttonNext = document.querySelector('#next14');
    const buttonBefore = document.querySelector('#before14');
    let value;   

    buttonNext.addEventListener('click', ()=>changePosition(1));

    buttonBefore.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change){
        const currentElement = Number(document.querySelector('.imagenesreb__body--show14').dataset.id);

        value = currentElement;
        value+= change;

        console.log(sliders.length)
        if(value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[currentElement-1].classList.toggle('imagenesreb__body--show14');
        sliders[value-1].classList.toggle('imagenesreb__body--show14');
    }

    

})();