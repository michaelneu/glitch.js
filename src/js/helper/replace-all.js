String.prototype.replaceAll = function (search, replace) {
    var string        = this,
        replaceLength = replace.length,
        searchLength  = search.length,
        start         = string.indexOf(search);

    while (start !== -1) {
        string = string.substring(0, start) + replace + string.substring(start + search.length);
        start  = string.indexOf(search, start + replaceLength);
    }

    return string;
};
