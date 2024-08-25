const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 450;
const image1 = new Image();

image1.src = 'fig/apples.jpg';

    image1.addEventListener('load', function(){
        ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);
        const scannedImage = ctx.getImageData(0,0, canvas.width, 
        canvas.height);
        const scannedData = scannedImage.data; 
    for (let i = 0; i < scannedData.length; i+=4){
    //    scannedData[i] = 0; //Red
        scannedData[i+1] = 2000; //Green
    //    scannedData[i+2] = 0; //Blue
    //    scannedData[i+3] = 0; //Alpha
    }
        console.log(scannedData)
        scannedImage.data = scannedData;
        ctx.putImageData(scannedImage, 0, 0);
});
