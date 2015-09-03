(function () {
    var playground   = document.getElementById("playground"),
        canvas       = document.getElementById("shadow"),
        inputSearch  = document.getElementById("input-search"),
        inputReplace = document.getElementById("input-replace"),
        inputShowImg = document.getElementById("input-side-by-side"),
        inputAll     = document.getElementById("input-all"),
        source, dest;

    fileChooser("#input-file", function (data) {
        var mime = data.substring(data.indexOf(":") + 1, data.indexOf(";")),
            mimeParts = mime.split("/"),
            media     = mimeParts[0],
            format    = mimeParts[1];

        clearChildren(playground);

        if (media === "image") {
            inputAll.removeAttribute("disabled");

            source = document.createElement("img");
            dest   = document.createElement("img");

            source.onload = glitch;
            if (mime === "image/gif" || mime === "image/jpeg") {
                source.src = data;
            } else {
                convertToJpeg(data, canvas, function (data) {
                    source.src = data;
                });
            }
        } else if (media === "video") {
            inputAll.setAttribute("disabled", "");
            inputAll.checked = false;

            source = document.createElement("video");
            dest   = document.createElement("video");

            source.src         = data;
            source.onloadstart = glitch;
            dest.onloadstart   = function () {
                this.currentTime = source.currentTime;
            };

            source.type = dest.type = mime;
            ["autoplay", "loop", "muted"].forEach(function (element) {
                source.setAttribute(element, "");
                dest.setAttribute(element, "");
            });
            source.setAttribute("controls", "");

            source.onpause = function () {
                dest.pause();
            };
            source.onplay = function () {
                dest.currentTime = this.currentTime;
                dest.play();
            };
            source.onseeking = function () {
                dest.currentTime = this.currentTime;
            };
        } else {
            dest = source = null;

            alert("Invalid media type \"" +  media + "\"");
        }

        playground.appendChild(source);
        playground.appendChild(dest);
    });

    function glitch() {
        setTimeout(function () {
            if (source) {
                var search  = inputSearch.value,
                    replace = inputReplace.value;

                if (search && search.length > 0 && replace && replace.length > 0) {
                    var data = byteGlitch(source.src, search, replace, inputAll.checked);
                    dest.src = data;

                    if (source.currentTime !== undefined) {
                        dest.currentTime = source.currentTime;

                        if (source.paused) {
                            dest.pause();
                        }
                    }
                } else {
                    dest.src = source.src;
                }
            }
        }, 10);
    }

    inputSearch.onkeydown  = glitch;
    inputReplace.onkeydown = glitch;
    inputAll.onchange      = glitch;

    inputShowImg.onchange = function () {
        if (this.checked) {
            playground.className = "";
        } else {
            playground.className = "no side-by-side";
        }
    };
})();
