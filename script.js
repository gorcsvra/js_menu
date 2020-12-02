function pageLoaded() {
    function clickEvent(){
        //Ez is jó megoldás, de css-ben le kell kezelni a clicked class nevet közvetlen az elemeken.
        //document.getElementById("open").classList.toggle("clicked");
        //document.getElementById("nav").classList.toggle("clicked");

        document.querySelector("body").classList.toggle("clicked");
    }
    document.getElementById("open").addEventListener("click", clickEvent);
}


window.addEventListener("load", pageLoaded);