function pageLoaded() {
    console.log("Hello");
    let rootElement = document.getElementById("root");

    console.log(rootElement);
    
    rootElement.innerHTML = "<h1>world</h1>";
    
    rootElement.innerHTML += "<h2>Ez nem írja felül az előzőt.</h2>";
    
    rootElement.insertAdjacentHTML("beforeend", "<h3> Ezt hozzáadtuk a #root-hoz.</h3>");
    
    rootElement.insertAdjacentHTML("beforeend", `
    
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique justo et fringilla posuere. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla odio eros, tempus ac nibh ut, tincidunt ultricies lorem. Etiam sapien magna, viverra vel porttitor sed, mollis id justo. Vivamus lacus nisl, molestie et egestas ac, mattis vel est. Maecenas venenatis nunc eros, sit amet ullamcorper nibh consectetur eu. Etiam nec pulvinar elit, vitae ultrices eros. Sed nec ef
    </p>
    `);
    
    //Ilyen módon sosem teszünk rá css-t vagy style-t a html-elemünkre.
    //document.getElementById("root").style.color = "blue";
    
    //Ilyen módon kerüljük a class-hozzáadást.
    //document.getElementById("root").className = "rootClass";
    //document.getElementById("root").className += " welcome";
    
    rootElement.classList.add("rootClass");
    rootElement.classList.add("welcome");
    rootElement.classList.add("haha");
    rootElement.classList.remove("haha");
    
    //Ezzel kitöröljük, felülírjuk a html-elem teljes tartalmát.
    //document.getElementById("root").innerHTML = "";
    rootElement.classList.add("newClass");
    
    //Ezzel kitöröljük, felülírjuk a html-elem teljes tartalmát és saját magát.
    //document.getElementById("root").outerHTML = "";
    
}
//Ez nem fog betöltődni.
//document.getElementById("root").innerHTML = "<h1>world</h1>";


window.addEventListener("load", pageLoaded);