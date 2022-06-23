window.addEventListener('load', (event) => {
    getMap()
});

let timeOutFunctionId;

window.addEventListener("resize", function () {

    // clearTimeOut() resets the setTimeOut() timer
    // due to this the function in setTimeout() is
    // fired after we are done resizing
    clearTimeout(timeOutFunctionId);

    // setTimeout returns the numeric ID which is used by
    // clearTimeOut to reset the timer
    timeOutFunctionId = setTimeout(getMap, 500);

});

function getMap() {
    document.querySelectorAll('.js-buienradar-image-wrapper').forEach(node => {
        const imageWrapper = node.querySelector(".js-buienradar-image");
        imageWrapper.innerHTML = '';
        const img = document.createElement("img");
        img.src = "https://image.buienradar.nl/2.0/image/single/RadarMapRainNL?height=" + node.offsetHeight + "&width=" + node.offsetWidth + "&renderBackground=True&renderBranding=false&renderText=True";

        img.style = 'margin:0; width:100%;height:100%;';
        imageWrapper.appendChild(img);
    })
}
