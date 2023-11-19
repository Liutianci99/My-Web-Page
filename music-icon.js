const button=document.getElementById('button');
const icon=document.getElementById('icon');
const music=document.getElementById('music');
const image=document.getElementById('avater');



button.addEventListener('click',() => {
    if(music.paused){
        music.play();
        icon.innerHTML='&#9836;';
        image.classList.toggle('rotated');

    }else{
        music.pause();
        icon.innerHTML='&#x266b;';
        image.classList.remove('rotated');
    }
    
});
