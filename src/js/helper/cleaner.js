function clearChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
