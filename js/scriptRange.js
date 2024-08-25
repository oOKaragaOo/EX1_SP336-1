//Add for modifyIMG
const RedInput = document.getElementById('RedInput');
const GreenInput = document.getElementById('GreenInput');
const BlueInput = document.getElementById('BlueInput');
const AlphaInput = document.getElementById('AlphaInput');

//Add for show value
const RedValue = document.getElementById('RedValue');
const GreenValue = document.getElementById('GreenValue');
const BlueValue = document.getElementById('BlueValue');
const AlphaValue = document.getElementById('AlphaValue');

function resetRGB() {
    RedInput.value = 0;
    GreenInput.value = 0;
    BlueInput.value = 0;
    AlphaInput.Value = 0 ;
    updateValues();
}

function updateValues() {
    RedValue.textContent = RedInput.value;
    GreenValue.textContent = GreenInput.value;
    BlueValue.textContent = BlueInput.value;
    AlphaValue.textContent = AlphaInput.value;
    modifyImageData();
}

// Add event listeners to the Ranges RGB
RedInput.addEventListener('input', updateValues);
GreenInput.addEventListener('input', updateValues);
BlueInput.addEventListener('input', updateValues);
AlphaInput.addEventListener('input', updateValues);


// <!-- nattaphong KONGNANG-OM 2210511101021 -->