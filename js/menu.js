var tablinks = document.querySelectorAll("div.tablinks"); for (var i = 0; i <
tablinks.length; i++) {     tablinks[i].onclick = function(e) {
openTab(e.target.getAttribute('data-tab-content-id'));     } }

function openTab(tabid) {
    var tabcontent = document.querySelectorAll("div.tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.querySelector(`[data-tab-id=${tabid}]`).style.display = "block";
}
document.querySelector(`[data-tab-content-id="starters"]`).click()




var innertablinks = document.querySelectorAll("div.innertablinks");
for (var i = 0; i < innertablinks.length; i++) {
    innertablinks[i].onclick = function(e) {
        openInnerTab(e.target.getAttribute('data-innertab-content-id'), e.target.parentNode.parentNode.getAttribute('data-tab-id'));
    }
}

function openInnerTab(innertabid, parenttabid) {
    var innertabcontent = document.querySelectorAll(`div[data-tab-id=${parenttabid}] div.innertabcontent`);
    var links = document.querySelectorAll(`div[data-tab-id=${parenttabid}] div.innertablinks`);
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }
    for (i = 0; i < innertabcontent.length; i++) {
        innertabcontent[i].style.display = "none";
    }
    document.querySelector(`div[data-tab-id=${parenttabid}] [data-innertab-content-id=${innertabid}]`).classList.add("active");
    document.querySelector(`div[data-tab-id=${parenttabid}] [data-innertab-id=${innertabid}]`).style.display = "block";
}
openInnerTab("startersv", "starters");
openInnerTab("momosv", "momos");
openInnerTab("biryaniv", "biryani");
openInnerTab("slidersv", "sliders");
openInnerTab("rollsv", "rolls");
openInnerTab("maingravyv", "maingravy");



var foodmenuSwiper = new Swiper('.foodmenu-swiper', {
    loop: true,
    speed: 1000,
    slidesPerView: 3,
    spaceBetween: 10,
    freeMode: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false
    }
});