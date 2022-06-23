window.addEventListener('load', (event) => {
    loadMaps()
});

let timeOutFunctionId;
window.addEventListener("resize", function () {
    clearTimeout(timeOutFunctionId);
    timeOutFunctionId = setTimeout(loadMaps, 500);
});

/**
 * Load map logic
 */
function loadMaps() {
    getMap()
    getImage()
}

/**
 * Get the image of the map
 */
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

/**
 * Get the map and set its size equal to parent div
 */
function getMap() {
    document.querySelectorAll('.js-buienradar-map-wrapper').forEach(node => {
        const frame = node.querySelector("iframe");
        frame.height = node.offsetHeight;
        frame.width = node.offsetWidth;
    })
}
