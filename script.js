let form = document.getElementById('forms');
let img_src = document.getElementById('img_room');
let slider = document.querySelectorAll('.slider_controler');
let reset_slider = document.getElementById('slider_reset');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let urlfield = document.getElementById('title_url');
    let urlVal = urlfield.value;
    img_src.setAttribute('src', urlVal);
    // console.log(urlVal);
})


for (let index = 0; index < slider.length; index++) {
    slider[index].addEventListener('input', imageEditor);
}

function imageEditor() { 
    let blur = document.getElementById('blur').value;
    let hue = document.getElementById('hue').value;
    let invert = document.getElementById('invert').value;
    let sepia = document.getElementById('sepia').value;
    let opacity = document.getElementById('opacity').value;
    let grayscale = document.getElementById('grayscale').value;
    // console.log(blur);

    img_src.style.filter = 'blur(' + blur + 'px) hue-rotate('+hue + 'deg) invert('+invert + '%) sepia('+sepia + '%) opacity('+ opacity + '%) grayscale('+ grayscale + '%) ';
}
reset_slider.addEventListener('reset', ()=>{
    reset_slider.reset();
    setTimeout(() => {
        imageEditor() 
    }, 0);
})
