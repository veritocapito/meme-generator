//Theme selection
const themeBtnD = document.querySelector('#dark-theme-button');
const themeBtnL = document.querySelector('#light-theme-button');
const themeIconD = document.querySelector('#dark-theme-icon');
const themeIconL = document.querySelector('#light-theme-icon');


const activeLightTheme = () => {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    themeBtnD.classList.toggle('hidden');
    themeBtnL.classList.toggle('hidden');
    themeIconD.classList.toggle('hidden');
    themeIconL.classList.toggle('hidden');
}
themeBtnD.addEventListener('click', activeLightTheme );

const activeDarkTheme = () => {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    themeBtnL.classList.toggle('hidden');
    themeBtnD.classList.toggle('hidden');
    themeIconL.classList.toggle('hidden');
    themeIconD.classList.toggle('hidden');
}
themeBtnL.addEventListener('click', activeDarkTheme);



//SELECT PANEL
const closePanelBtn = document.querySelector('#panel-close-button');
const panel = document.querySelector('#panel');

closePanelBtn.addEventListener('click', () => {
    panel.classList.add('hidden');
});

const imgPanelBtn = document.querySelector('#img-panel-button');
const textPanelBtn = document.querySelector('#text-panel-button');
const imgPanel = document.querySelector('#panel-img');
const textPanel = document.querySelector('#panel-text');

const openImgPanel = () =>{
    imgPanel.classList.remove('hidden');
    textPanel.classList.add('hidden');
}

const openTextPanel = () =>{
    textPanel.classList.remove('hidden');
    imgPanel.classList.add('hidden');
}

imgPanelBtn.addEventListener('click', openImgPanel);
textPanelBtn.addEventListener('click', openTextPanel);



//IMAGE PANEL - URL
const imageMeme = document.getElementById('image-meme');
const imageUrl = document.getElementById('url-img-input');

imageUrl.addEventListener('keyup', () => {
    imageMeme.style.backgroundImage = `url(${imageUrl.value.trim()})`;
})


//IMAGE PANEL - BACKGROUND



//IMAGE PANEL - FILTERS




//TEXT PANEL - TOP TEXT
const topText = document.getElementById('top-text');
const topTextInput = document.getElementById('top-text-input');
const topTextCheckbox = document.getElementById('no-top-text-checkbox');

topTextInput.addEventListener('keyup', ()=>{
    topText.innerHTML = topTextInput.value;
})

topTextCheckbox.addEventListener('click', ()=>{
    if(topTextCheckbox.checked){
        topText.innerHTML = '';
    } else if(!topTextCheckbox.checked) {
        topText.innerHTML = topTextInput.value;
    }
})


//TEXT PANEL - BOTTOM TEXT
const bottomText = document.getElementById('bottom-text');
const bottomTextInput = document.getElementById('bottom-text-input');
const bottomTextCheckbox = document.getElementById('no-bottom-text-checkbox');

bottomTextInput.addEventListener('keyup', ()=>{
    bottomText.innerHTML = bottomTextInput.value;
})

bottomTextCheckbox.addEventListener('click', ()=>{
    if(bottomTextCheckbox.checked){
        bottomText.innerHTML = '';
    } else if(!bottomTextCheckbox.checked) {
        bottomText.innerHTML = bottomTextInput.value;
    }
})


//DOWNLOAD BUTTON
const downloadMemeBtn = document.getElementById('download-meme-button');
console.log(downloadMemeBtn);

const donwloadMeme = () => {
    domtoimage.toBlob(document.getElementById('canvas-meme')).then(function (blob) {
      window.saveAs(blob, 'my-meme.png')
    })
  }

downloadMemeBtn.addEventListener('click', donwloadMeme);


