function pageLoaded() {
    function clickEvent(){
        document.getElementById("open").classList.toggle("clicked");
    }
    document.getElementById("open").addEventListener("click", clickEvent);
}


window.addEventListener("load", pageLoaded);