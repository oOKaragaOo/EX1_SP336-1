const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 225;
const image1 = new Image();

image1.src = 'fig/apples.jpg';

image1.addEventListener('load', function(){
    ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);
    modifyImageData();
});

function modifyImageData(){ 
    const scannedImage = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const scannedData = scannedImage.data;

    const redValue = parseInt(RedInput.value);
    const greenValue = parseInt(GreenInput.value);
    const blueValue = parseInt(BlueInput.value); 


    for (let i = 0; i < scannedData.length; i += 4){
        scannedData[i] =  Math.min(255, scannedData[i] + redValue);
        scannedData[i+1] = Math.min(255, scannedData[i+1] + greenValue);
        scannedData[i+2] = Math.min(255, scannedData[i+2] + blueValue);
    }
    console.log(scannedData)
    ctx.putImageData(scannedImage, 0, 0);
}
