window.addEventListener('load', (event) => {
    loadMaps
});

let timeOutFunctionId;

window.addEventListener("resize", function () {

    // clearTimeOut() resets the setTimeOut() timer
    // due to this the function in setTimeout() is
    // fired after we are done resizing
    clearTimeout(timeOutFunctionId);

    // setTimeout returns the numeric ID which is used by
    // clearTimeOut to reset the timer
    timeOutFunctionId = setTimeout(loadMaps, 500);

});

function loadMaps() {
    getMap()
    getImage()
}

function getImage() {
    document.querySelectorAll('.js-buienradar-image-wrapper').forEach(node => {
        const imageWrapper = node.querySelector(".js-buienradar-image");
        imageWrapper.innerHTML = '';
        const img = document.createElement("img");
        img.src = "https://image.buienradar.nl/2.0/image/single/RadarMapRainNL?height=" + node.offsetHeight + "&width=" + node.offsetWidth + "&renderBackground=True&renderBranding=false&renderText=True";

        img.style = 'margin:0; width:100%;height:100%;';
        imageWrapper.appendChild(img);
    })
}

function getMap() {
    document.querySelectorAll('.js-buienradar-map-wrapper').forEach(node => {
        const frame = node.querySelector("iframe");
        const height = node.offsetHeight;
        const width = node.offsetWidth;
        frame.height = height;
        frame.width = width;
    })
}
