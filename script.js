function pageLoaded() {
    console.log("Hello");

    document.getElementById("root").innerHTML = "<h1>world</h1>";

    document.getElementById("root").innerHTML += "<h2>Ez nem írja felül az előzőt.</h2>";

    document.getElementById("root").insertAdjacentHTML("beforeend", "<h3> Ezt hozzáadtuk a #root-hoz.</h3>");

    document.getElementById("root").insertAdjacentHTML("beforeend", `
   
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique justo et fringilla posuere. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla odio eros, tempus ac nibh ut, tincidunt ultricies lorem. Etiam sapien magna, viverra vel porttitor sed, mollis id justo. Vivamus lacus nisl, molestie et egestas ac, mattis vel est. Maecenas venenatis nunc eros, sit amet ullamcorper nibh consectetur eu. Etiam nec pulvinar elit, vitae ultrices eros. Sed nec ef
        </p>
   `);
}
//Ez nem fog betöltődni.
//document.getElementById("root").innerHTML = "<h1>world</h1>";


window.addEventListener("load", pageLoaded);