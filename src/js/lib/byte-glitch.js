function byteGlitch(data, search, replace) {
    var head = data.indexOf(","),
        blob = data.substring(head + 1);

    blob = atob(blob);
    blob = blob.replace(search, replace);
    blob = btoa(blob);

    data = data.substring(0, head + 1) + blob;

    return data;
}
