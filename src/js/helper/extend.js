function extend(original, morphs) {
    var object = {};

    for (property in original) {
        var content;

        if (morphs[property] !== undefined) {
            content = morphs[property];
        } else {
            content = original[property];
        }

        if (typeof content === "object") {
            content = extend(content, {});
        }

        object[property] = content;
    }

    return object;
}
