//Theme selection
const themeBtnD = document.querySelector('#dark-theme-button');
const themeBtnL = document.querySelector('#light-theme-button');
const themeIconD = document.querySelector('#dark-theme-icon');
const themeIconL = document.querySelector('#light-theme-icon');


const activeLightTheme = () => {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    themeBtnD.classList.toggle('oculto');
    themeBtnL.classList.toggle('oculto');
    themeIconD.classList.toggle('oculto');
    themeIconL.classList.toggle('oculto');
}

themeBtnD.addEventListener('click', activeLightTheme );


const activeDarkTheme = () => {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    themeBtnL.classList.toggle('oculto');
    themeBtnD.classList.toggle('oculto');
    themeIconL.classList.toggle('oculto');
    themeIconD.classList.toggle('oculto');
}

themeBtnL.addEventListener('click', activeDarkTheme);

//Panel
const closePanelBtn = document.querySelector('#panel-close-button');
const panel = document.querySelector('#panel');

closePanelBtn.addEventListener('click', () => {
    panel.classList.add('oculto');
});

const imgPanelBtn = document.querySelector('#img-panel-button');
const textPanelBtn = document.querySelector('#text-panel-button');
const imgPanel = document.querySelector('#panel-img');
const textPanel = document.querySelector('#panel-text');

const openImgPanel = () =>{
    imgPanel.classList.remove('oculto');
    textPanel.classList.add('oculto');
}

const openTextPanel = () =>{
    textPanel.classList.remove('oculto');
    imgPanel.classList.add('oculto');
}


imgPanelBtn.addEventListener('click', openImgPanel);
textPanelBtn.addEventListener('click', openTextPanel);