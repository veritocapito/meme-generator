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
themeBtnD.addEventListener('click', activeLightTheme);

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

const openImgPanel = () => {
    imgPanel.classList.remove('hidden');
    textPanel.classList.add('hidden');
    panel.classList.remove('hidden');
}

const openTextPanel = () => {
    textPanel.classList.remove('hidden');
    imgPanel.classList.add('hidden');
    panel.classList.remove('hidden');
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
const blendModeSelector = document.getElementById('blend-mode-select');
const blendModeColor = document.getElementById('blend-mode-color');
const blendModeColorInput = document.getElementById('blend-mode-color-input');

blendModeSelector.addEventListener('change', (e) => {
    imageMeme.style.backgroundBlendMode = e.target.value;
});

blendModeColorInput.addEventListener('input', () => {
    const valueBgImage = blendModeColorInput.value;
    imageMeme.style.backgroundColor = valueBgImage;
    blendModeColor.innerHTML = valueBgImage.toUpperCase();
});




//IMAGE PANEL - FILTERS
const brightness = document.getElementById('brightness-slider');
const opacity = document.getElementById('opacity-slider');
const contrast = document.getElementById('contrast-slider');
const blurSlider = document.getElementById('blur-slider');
const grayscale = document.getElementById('grayscale-slider');
const sepia = document.getElementById('sepia-slider');
const hue = document.getElementById('hue-slider');
const saturate = document.getElementById('saturation-slider');
const invert = document.getElementById('invert-slider');

brightness.addEventListener('change', applyFilters)
opacity.addEventListener('change', applyFilters)
contrast.addEventListener('change', applyFilters)
blurSlider.addEventListener('change', applyFilters)
grayscale.addEventListener('change', applyFilters)
sepia.addEventListener('change', applyFilters)
hue.addEventListener('change', applyFilters)
saturate.addEventListener('change', applyFilters)
invert.addEventListener('change', applyFilters)

function applyFilters() {
    imageMeme.style.filter = `brightness(${brightness.value}) opacity(${opacity.value}) contrast(${contrast.value}%) blur(${blurSlider.value}px) grayscale(${grayscale.value}%) sepia(${sepia.value}%) hue-rotate(${hue.value}deg) saturate(${saturate.value}%) invert(${invert.value})`;
};


//IMAGE PANEL - RESET FILTERS
const resetFilters = () => {
    brightness.value = 1
    opacity.value = 1
    contrast.value = 100
    blurSlider.value = 0
    grayscale.value = 0
    sepia.value = 0
    hue.value = 0
    saturate.value = 100
    invert.value = 0

    applyFilters()
}

const defaultFiltersBtn = document.querySelector('#default-filters-button');
defaultFiltersBtn.addEventListener('click', resetFilters);



//TEXT PANEL - TOP TEXT
const topText = document.getElementById('top-text');
const topTextInput = document.getElementById('top-text-input');
const topTextCheckbox = document.getElementById('no-top-text-checkbox');

topTextInput.addEventListener('click', (e) =>{
    e.target.value ='';
})
topTextInput.addEventListener('keyup', () => {
    topText.innerHTML = topTextInput.value;
})

topTextCheckbox.addEventListener('click', () => {
    if (topTextCheckbox.checked) {
        topText.innerHTML = '';
    } else if (!topTextCheckbox.checked) {
        topText.innerHTML = topTextInput.value;
    }
})


//TEXT PANEL - BOTTOM TEXT
const bottomText = document.getElementById('bottom-text');
const bottomTextInput = document.getElementById('bottom-text-input');
const bottomTextCheckbox = document.getElementById('no-bottom-text-checkbox');

bottomTextInput.addEventListener('click', (e) =>{
    e.target.value ='';
})

bottomTextInput.addEventListener('keyup', () => {
    bottomText.innerHTML = bottomTextInput.value;
})

bottomTextCheckbox.addEventListener('click', () => {
    if (bottomTextCheckbox.checked) {
        bottomText.innerHTML = '';
    } else if (!bottomTextCheckbox.checked) {
        bottomText.innerHTML = bottomTextInput.value;
    }
})


//TEXT PANEL - FONT FAMILY
const selectFontFamily = document.getElementById('text-font-select');

const changeFontFamily = (e) => {
    topText.style.fontFamily = e.target.value
    bottomText.style.fontFamily = e.target.value
}
selectFontFamily.addEventListener('change', changeFontFamily);

//TEXT PANEL - FONT SIZE
const selectFontSize = document.getElementById('text-size-input');

const changeFontSize = (e) => {
    topText.style.fontSize = e.target.value + 'px';
    bottomText.style.fontSize = e.target.value + 'px';
}
selectFontSize.addEventListener('input', changeFontSize);

//TEXT PANEL - TEXT ALIGN
const textLeftAlignButton = document.getElementById('text-left-align-button');
const textCenterAlignButton = document.getElementById('text-center-align-button');
const textRightAlignButton = document.getElementById('text-right-align-button');

const alingTopText = (e) => {
    if (e.target.id === 'text-left-align-button') {
        topText.style.justifyContent = 'flex-start';
        bottomText.style.justifyContent = 'flex-start';
    } else if (e.target.id === 'text-center-align-button') {
        topText.style.justifyContent = 'center';
        bottomText.style.justifyContent = 'center';
    } else if (e.target.id === 'text-right-align-button') {
        topText.style.justifyContent = 'flex-end';
        bottomText.style.justifyContent = 'flex-end';
    }

}

textLeftAlignButton.addEventListener('click', alingTopText)
textCenterAlignButton.addEventListener('click', alingTopText)
textRightAlignButton.addEventListener('click', alingTopText)


//TEXT PANEL - TEXT COLOR
const textColor = document.getElementById('text-color');
const textColorInput = document.getElementById('text-color-input');

textColorInput.addEventListener('input', () => {
    const valuetextColor = textColorInput.value;
    topText.style.color = valuetextColor;
    bottomText.style.color = valuetextColor;
    textColor.innerHTML = valuetextColor.toUpperCase();
});


//TEXT PANEL - TEXT BACKGROUND COLOR
const textBgColor = document.getElementById('text-background-color');
const textBgColorInput = document.getElementById('text-background-color-input');

textBgColorInput.addEventListener('input', () => {
    const valuetextBgColor = textBgColorInput.value;
    topText.style.backgroundColor = valuetextBgColor;
    bottomText.style.backgroundColor = valuetextBgColor;
    textBgColor.innerHTML = valuetextBgColor.toUpperCase();
});


//TEXT PANEL - BACKGROUND TRANSPARENT
const noBgTextCheckbox = document.getElementById('text-no-background-checkbox');

noBgTextCheckbox.addEventListener('click', () => {
    if (noBgTextCheckbox.checked) {
        topText.style.backgroundColor = 'transparent';
        bottomText.style.backgroundColor = 'transparent';
    } else if (!noBgTextCheckbox.checked) {
        topText.style.backgroundColor = textBgColorInput.value;
        bottomText.style.backgroundColor = textBgColorInput.value;
    }
})



//TEXT PANEL - OUTLINE
const noOutlineButton = document.getElementById('no-outline-button');
const lightOutlineButton = document.getElementById('light-outline-button');
const darkOutlineButton = document.getElementById('dark-outline-button');

const setOutline = (e) => {
    console.log(e.target);
    if (e.target.id === 'no-outline-button') {
        topText.style.textShadow = 'none';
        bottomText.style.textShadow = 'none';
    } else if (e.target.id === 'light-outline-button') {
        topText.style.textShadow = `2px 2px #FFF, -2px 2px #FFF, 2px -2px #FFF, -2px -2px #FFF`;
        bottomText.style.textShadow = `2px 2px #FFF, -2px 2px #FFF, 2px -2px #FFF, -2px -2px #FFF`;
    } else if (e.target.id === 'dark-outline-button') {
        topText.style.textShadow = `2px 2px #000, -2px 2px #000, 2px -2px #000, -2px -2px #000`;
        bottomText.style.textShadow = `2px 2px #000, -2px 2px #000, 2px -2px #000, -2px -2px #000`;
    }
}

noOutlineButton.addEventListener('click', setOutline)
lightOutlineButton.addEventListener('click', setOutline)
darkOutlineButton.addEventListener('click', setOutline)



//TEXT PANEL - PADDING
const paddingInput = document.getElementById('padding-input');

const setPadding = (e) => {
    topText.style.padding = e.target.value + 'px';
    bottomText.style.padding = e.target.value + 'px';
}
paddingInput.addEventListener('input', setPadding);


//TEXT PANEL - LINE HEIGHT
const lineHeightInput = document.getElementById('line-height-input');

const setLineHeight = (e) => {
    topText.style.lineHeight = e.target.value
    bottomText.style.lineHeight = e.target.value
}
lineHeightInput.addEventListener('change', setLineHeight);


//DOWNLOAD BUTTON
const downloadMemeBtn = document.getElementById('download-meme-button');

downloadMemeBtn.addEventListener('click', () =>{
    html2canvas(document.getElementById('canvas-meme'),{
        useCORS: true
    }).then( canvas=> {
        var a = document.createElement('a');
        a.download = 'captured.png';
        a.href = canvas.toDataURL('image/png');
        a.click();
    });
});