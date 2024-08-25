const RedInput = document.getElementById('RedInput');
const GreenInput = document.getElementById('GreenInput');
const BlueInput = document.getElementById('BlueInput');

const RedValue = document.getElementById('RedValue');
const GreenValue = document.getElementById('GreenValue');
const BlueValue = document.getElementById('BlueValue');

function updateValues() {
    RedValue.textContent = RedInput.value;
    GreenValue.textContent = GreenInput.value;
    BlueValue.textContent = BlueInput.value;
    modifyImageData();
}


// Add event listeners to the sliders
RedInput.addEventListener('input', updateValues);
GreenInput.addEventListener('input', updateValues);
BlueInput.addEventListener('input', updateValues);
