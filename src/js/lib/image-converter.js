function convertToJpeg(data, canvas, callback) {
    var image = new Image();

    image.onload = function () {
        var context = canvas.getContext("2d");

        canvas.width  = image.width;
        canvas.height = image.height;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "#ffffff";
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.drawImage(this, 0, 0);

        var data = canvas.toDataURL("image/jpeg", 100);
        callback.call(window, data);
    };

    image.src = data;
}
