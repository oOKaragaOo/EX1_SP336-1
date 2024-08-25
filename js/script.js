const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 225;
const image1 = new Image();

image1.src = 'fig/apples.jpg';

    image1.addEventListener('load', function(){
        ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);
        const scannedImage = ctx.getImageData(0,0, canvas.width, canvas.height);
        const scannedData = scannedImage.data; 

        

        RedInput.addEventListener('input', function(){
            for (let i = 0; i < scannedData.length; i+=4){
        
        // scannedData[i] = 0; //Red
    //    scannedData[i+1] = 0; //Green
    //    scannedData[i+2] = 0; //Blue
    //    scannedData[i+3] = 0; //Alpha
    }
        });
    
        console.log(RedInput.value)
        scannedImage.data = scannedData;
        ctx.putImageData(scannedImage, 0, 0);
    });
