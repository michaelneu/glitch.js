function fileChooser(inputSelector, callback) {
    var input  = document.querySelector(inputSelector);

    input.onchange = function (event) {
        if (input.files && input.files.length > 0) {
            var file   = input.files[0],
                reader = new FileReader();

            reader.onload = function (e) {
                var data = e.target.result;

                callback.call(window, data);
            }

            reader.readAsDataURL(input.files[0]);
        }
    };
}
