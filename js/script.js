const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 450;
const image1 = new Image();
var originColours;

//scannedImage for save base colours
image1.src = 'fig/apples.jpg';
image1.addEventListener('load', function(){
    ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);
    const scannedImage = ctx.getImageData(0, 0, canvas.width, canvas.height);
    originColours = scannedImage.data;
    modifyImageData();
});
//Time to RGB change ~
function modifyImageData(){ 
    const scannedImage = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const scannedData = scannedImage.data;

    const redValue = parseInt(RedInput.value);
    const greenValue = parseInt(GreenInput.value);
    const blueValue = parseInt(BlueInput.value); 
    const AlphaValue = parseInt(AlphaInput.value); 

    for (let i = 0; i < scannedData.length; i += 4){
        scannedData[i] =  Math.min(255, originColours[i] + redValue);
        scannedData[i+1] = Math.min(255, originColours[i+1] + greenValue);
        scannedData[i+2] = Math.min(255, originColours[i+2] + blueValue);
        scannedData[i+3] = Math.min(255, originColours[i+3] + AlphaValue);
    }
    ctx.putImageData(scannedImage, 0, 0);
}


// <!-- nattaphong KONGNANG-OM 2210511101021 -->