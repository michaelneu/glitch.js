function byteGlitch(data, search, replace, replaceAll) {
    var head = data.indexOf(",") + 1,
        blob = data.substring(head);

    blob = atob(blob);

    if (replaceAll) {
        blob = blob.replaceAll(search, replace);
    } else {
        blob = blob.replace(search, replace);
    }

    blob = btoa(blob);
    data = data.substring(0, head) + blob;

    return data;
}
