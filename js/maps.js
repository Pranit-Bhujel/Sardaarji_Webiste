var mapmodal = document.querySelector("div.map-modal");
var mapcontainer = document.querySelector("div.map-container");



function openMap() {
    mapmodal.classList.add("map-modal-active");
}

function closeMap() {
    mapmodal.classList.remove("map-modal-active");
}

function setMap(mapname) {
    switch (mapname) {
        case "andheri":
            mapcontainer.innerHTML = `<div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=sardaarji lokhandwala&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0"></iframe></div><a href="https://www.webdesign-muenchen-pb.de">webdesign münchen</a><style>.mapouter{overflow:hidden;height:500px;width:600px;}.gmap_canvas {background:none!important;height:500px;width:600px;}</style></div>`;
            break;
        case "bandra":
            mapcontainer.innerHTML = `<div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=sardaarji bandra&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0"></iframe></div><a href="https://www.webdesign-muenchen-pb.de">webdesign münchen</a><style>.mapouter{overflow:hidden;height:500px;width:600px;}.gmap_canvas {background:none!important;height:500px;width:600px;}</style></div> `;
            break;
        case "juhu":
            mapcontainer.innerHTML = `<div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=sardaarji juhu&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0"></iframe></div><a href="https://www.webdesign-muenchen-pb.de">webdesign münchen</a><style>.mapouter{overflow:hidden;height:500px;width:600px;}.gmap_canvas {background:none!important;height:500px;width:600px;}</style></div> `;
            break;
        default:
            mapcontainer.innerHTML = "";
            break;
    }
}

var mapbtns = document.querySelectorAll("button.mapbtn");
for (var i = 0; i < mapbtns.length; i++) {
    mapbtns[i].onclick = function(e) {
        openMap();
        setMap(e.target.getAttribute('data-map-name'));
    }
}
document.querySelector("button.closemap").onclick = function() {
    closeMap();
}