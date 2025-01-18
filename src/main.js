window.onload = () => {
    function $(element){
        return document.querySelector(element)
    }

    function $$(element){
        return document.getElementById(element)
    }

    //Theme selection
    const $themeBtnD = $('#dark-theme-button');
    const $themeBtnL = $('#light-theme-button');
    const $themeIconD = $('#dark-theme-icon');
    const $themeIconL = $('#light-theme-icon');


    const activeLightTheme = () => {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        $themeBtnD.classList.toggle('hidden');
        $themeBtnL.classList.toggle('hidden');
        $themeIconD.classList.toggle('hidden');
        $themeIconL.classList.toggle('hidden');
    }
    $themeBtnD.addEventListener('click', activeLightTheme);

    const activeDarkTheme = () => {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        $themeBtnL.classList.toggle('hidden');
        $themeBtnD.classList.toggle('hidden');
        $themeIconL.classList.toggle('hidden');
        $themeIconD.classList.toggle('hidden');
    }
    $themeBtnL.addEventListener('click', activeDarkTheme);



    //SELECT PANEL
    const $closePanelBtn = $('#panel-close-button');
    const $panel = $('#panel');

    $closePanelBtn.addEventListener('click', () => {
        $panel.classList.add('hidden');
    });

    const $imgPanelBtn = $('#img-panel-button');
    const $textPanelBtn = $('#text-panel-button');
    const $imgPanel = $('#panel-img');
    const $textPanel = $('#panel-text');

    const open$imgPanel = () => {
        $imgPanel.classList.remove('hidden');
        $textPanel.classList.add('hidden');
        $panel.classList.remove('hidden');
    }

    const open$textPanel = () => {
        $textPanel.classList.remove('hidden');
        $imgPanel.classList.add('hidden');
        $panel.classList.remove('hidden');
    }

    $imgPanelBtn.addEventListener('click', open$imgPanel);
    $textPanelBtn.addEventListener('click', open$textPanel);



    //IMAGE PANEL - URL
    const $imageMeme = $$('image-meme');
    const $imageUrl = $$('url-img-input');

    $imageUrl.addEventListener('keyup', () => {
        $imageMeme.style.backgroundImage = `url(${$imageUrl.value.trim()})`;
    })



    //IMAGE PANEL - BACKGROUND
    const $blendModeSelector = $$('blend-mode-select');
    const $blendModeColor = $$('blend-mode-color');
    const $blendModeColorInput = $$('blend-mode-color-input');

    $blendModeSelector.addEventListener('change', (e) => {
        $imageMeme.style.backgroundBlendMode = e.target.value;
    });

    $blendModeColorInput.addEventListener('input', () => {
        const $valueBgImage = $blendModeColorInput.value;
        $imageMeme.style.backgroundColor = $valueBgImage;
        $blendModeColor.innerHTML = $valueBgImage.toUpperCase();
    });


    //IMAGE PANEL - FILTERS
    const $brightness = $$('brightness-slider');
    const $opacity = $$('opacity-slider');
    const $contrast = $$('contrast-slider');
    const $blurSlider = $$('blur-slider');
    const $grayscale = $$('grayscale-slider');
    const $sepia = $$('sepia-slider');
    const $hue = $$('hue-slider');
    const $saturate = $$('saturation-slider');
    const $invert = $$('invert-slider');

    $brightness.addEventListener('change', applyFilters)
    $opacity.addEventListener('change', applyFilters)
    $contrast.addEventListener('change', applyFilters)
    $blurSlider.addEventListener('change', applyFilters)
    $grayscale.addEventListener('change', applyFilters)
    $sepia.addEventListener('change', applyFilters)
    $hue.addEventListener('change', applyFilters)
    $saturate.addEventListener('change', applyFilters)
    $invert.addEventListener('change', applyFilters)

    function applyFilters() {
        $imageMeme.style.filter = `brightness(${$brightness.value}) opacity(${$opacity.value}) contrast(${$contrast.value}%) blur(${$blurSlider.value}px) grayscale(${$grayscale.value}%) sepia(${$sepia.value}%) hue-rotate(${$hue.value}deg) saturate(${$saturate.value}%) invert(${$invert.value})`;
    };

    

    //IMAGE PANEL - RESET FILTERS
    const resetFilters = () => {
        $brightness.value = 1
        $opacity.value = 1
        $contrast.value = 100
        $blurSlider.value = 0
        $grayscale.value = 0
        $sepia.value = 0
        $hue.value = 0
        $saturate.value = 100
        $invert.value = 0

        applyFilters()
    }

    const $defaultFiltersBtn = $('#default-filters-button');
    $defaultFiltersBtn.addEventListener('click', resetFilters);



    //TEXT PANEL - TOP TEXT
    const $topText = $$('top-text');
    const $topTextInput = $$('top-text-input');
    const $topTextCheckbox = $$('no-top-text-checkbox');

    $topTextInput.addEventListener('click', (e) => {
        e.target.value = '';
    })
    $topTextInput.addEventListener('keyup', () => {
        $topText.innerHTML = $topTextInput.value;
    })

    $topTextCheckbox.addEventListener('click', () => {
        if ($topTextCheckbox.checked) {
            $topText.innerHTML = '';
        } else if (!$topTextCheckbox.checked) {
            $topText.innerHTML = $topTextInput.value;
        }
    })


    //TEXT PANEL - BOTTOM TEXT
    const $bottomText = $$('bottom-text');
    const $bottomTextInput = $$('bottom-text-input');
    const $bottomTextCheckbox = $$('no-bottom-text-checkbox');

    $bottomTextInput.addEventListener('click', (e) => {
        e.target.value = '';
    })

    $bottomTextInput.addEventListener('keyup', () => {
        $bottomText.innerHTML = $bottomTextInput.value;
    })

    $bottomTextCheckbox.addEventListener('click', () => {
        if ($bottomTextCheckbox.checked) {
            $bottomText.innerHTML = '';
        } else if (!$bottomTextCheckbox.checked) {
            $bottomText.innerHTML = $bottomTextInput.value;
        }
    })


    //TEXT PANEL - FONT FAMILY
    const selectFontFamily = $$('text-font-select');

    const changeFontFamily = (e) => {
        $topText.style.fontFamily = e.target.value
        $bottomText.style.fontFamily = e.target.value
    }
    selectFontFamily.addEventListener('change', changeFontFamily);

    //TEXT PANEL - FONT SIZE
    const selectFontSize = $$('text-size-input');

    const changeFontSize = (e) => {
        $topText.style.fontSize = e.target.value + 'px';
        $bottomText.style.fontSize = e.target.value + 'px';
    }
    selectFontSize.addEventListener('input', changeFontSize);

    //TEXT PANEL - TEXT ALIGN
    const textLeftAlignButton = $$('text-left-align-button');
    const textCenterAlignButton = $$('text-center-align-button');
    const textRightAlignButton = $$('text-right-align-button');

    const aling$topText = (e) => {
        if (e.target.id === 'text-left-align-button' || e.target.id === 'text-left-align-icon') {
            $topText.style.justifyContent = 'flex-start';
            $bottomText.style.justifyContent = 'flex-start';
        } else if (e.target.id === 'text-center-align-button' || e.target.id === 'text-center-align-icon') {
            $topText.style.justifyContent = 'center';
            $bottomText.style.justifyContent = 'center';
        } else if (e.target.id === 'text-right-align-button' || e.target.id === 'text-right-align-icon') {
            $topText.style.justifyContent = 'flex-end';
            $bottomText.style.justifyContent = 'flex-end';
        }

    }

    textLeftAlignButton.addEventListener('click', aling$topText)
    textCenterAlignButton.addEventListener('click', aling$topText)
    textRightAlignButton.addEventListener('click', aling$topText)


    //TEXT PANEL - TEXT COLOR
    const textColor = $$('text-color');
    const textColorInput = $$('text-color-input');

    textColorInput.addEventListener('input', () => {
        const valuetextColor = textColorInput.value;
        $topText.style.color = valuetextColor;
        $bottomText.style.color = valuetextColor;
        textColor.innerHTML = valuetextColor.toUpperCase();
    });


    //TEXT PANEL - TEXT BACKGROUND COLOR
    const textBgColor = $$('text-background-color');
    const textBgColorInput = $$('text-background-color-input');

    textBgColorInput.addEventListener('input', () => {
        const valuetextBgColor = textBgColorInput.value;
        $topText.style.backgroundColor = valuetextBgColor;
        $bottomText.style.backgroundColor = valuetextBgColor;
        textBgColor.innerHTML = valuetextBgColor.toUpperCase();
    });


    //TEXT PANEL - BACKGROUND TRANSPARENT
    const noBgTextCheckbox = $$('text-no-background-checkbox');

    noBgTextCheckbox.addEventListener('click', () => {
        if (noBgTextCheckbox.checked) {
            $topText.style.backgroundColor = 'transparent';
            $bottomText.style.backgroundColor = 'transparent';
        } else if (!noBgTextCheckbox.checked) {
            $topText.style.backgroundColor = textBgColorInput.value;
            $bottomText.style.backgroundColor = textBgColorInput.value;
        }
    })



    //TEXT PANEL - OUTLINE
    const noOutlineButton = $$('no-outline-button');
    const lightOutlineButton = $$('light-outline-button');
    const darkOutlineButton = $$('dark-outline-button');

    const setOutline = (e) => {
        console.log(e.target);
        if (e.target.id === 'no-outline-button') {
            $topText.style.textShadow = 'none';
            $bottomText.style.textShadow = 'none';
        } else if (e.target.id === 'light-outline-button') {
            $topText.style.textShadow = `2px 2px #FFF, -2px 2px #FFF, 2px -2px #FFF, -2px -2px #FFF`;
            $bottomText.style.textShadow = `2px 2px #FFF, -2px 2px #FFF, 2px -2px #FFF, -2px -2px #FFF`;
        } else if (e.target.id === 'dark-outline-button') {
            $topText.style.textShadow = `2px 2px #000, -2px 2px #000, 2px -2px #000, -2px -2px #000`;
            $bottomText.style.textShadow = `2px 2px #000, -2px 2px #000, 2px -2px #000, -2px -2px #000`;
        }
    }

    noOutlineButton.addEventListener('click', setOutline)
    lightOutlineButton.addEventListener('click', setOutline)
    darkOutlineButton.addEventListener('click', setOutline)



    //TEXT PANEL - PADDING
    const paddingInput = $$('padding-input');

    const setPadding = (e) => {
        $topText.style.padding = e.target.value + 'px';
        $bottomText.style.padding = e.target.value + 'px';
    }
    paddingInput.addEventListener('input', setPadding);


    //TEXT PANEL - LINE HEIGHT
    const lineHeightInput = $$('line-height-input');

    const setLineHeight = (e) => {
        $topText.style.lineHeight = e.target.value
        $bottomText.style.lineHeight = e.target.value
    }
    lineHeightInput.addEventListener('change', setLineHeight);


    //DOWNLOAD BUTTON
    const downloadMemeBtn = $$('download-meme-button');

    downloadMemeBtn.addEventListener('click', () => {

        container_meme = $('#canvas-meme');
        config = {
            quality: 1 // without lowering the quality
        }

        // https://github.com/tsayen/dom-to-image
        domtoimage.toJpeg(container_meme, config, {
            useCORS: true
        }).then(function (dataUrl) {
            let link = document.createElement('a');
            link.download = 'captured.png';
            link.href = dataUrl;
            link.click();
        });
    });
}

