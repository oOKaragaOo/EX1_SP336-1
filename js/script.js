const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 225;
const image1 = new Image();
var scannedData;
image1.src = 'fig/apples.jpg';

image1.addEventListener('load', function(){
    ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);
    const scannedImage = ctx.getImageData(0, 0, canvas.width, canvas.height);
    scannedData = scannedImage.data;
    modifyImageData();
});

function modifyImageData(){ 
    const scannedImage = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const scannedData2 = scannedImage.data;

    const redValue = parseInt(RedInput.value);
    const greenValue = parseInt(GreenInput.value);
    const blueValue = parseInt(BlueInput.value); 


    for (let i = 0; i < scannedData.length; i += 4){
        scannedData2[i] =  Math.min(255, scannedData[i] + redValue);
        scannedData2[i+1] = Math.min(255, scannedData[i+1] + greenValue);
        scannedData2[i+2] = Math.min(255, scannedData[i+2] + blueValue);
    }
    
    console.log(scannedData[1])
    ctx.putImageData(scannedImage, 0, 0);
}
