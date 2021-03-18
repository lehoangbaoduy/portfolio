var a = 1;

function show_hide() {
    if (a == 1) {
        document.getElementById("toggleNav").style.display = "flex";
        return a = 0;
    } else {
        document.getElementById("toggleNav").style.display = "none";
        return a = 1;
    }
}