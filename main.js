
Webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
});

Webcam.set({
width:350,
height:300,
image_format :'png',
image_quality: 90
});