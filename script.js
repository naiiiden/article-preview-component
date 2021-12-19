function Open() {
    let button = document.querySelector(".sharedisplay");
    if (button.style.opacity === "0") {
        button.style.opacity = "1";
    } else {
        button.style.opacity = "0";
    }
}