console.log("Entro index.js");
console.log(piezas);

const inputBusqueda = document.getElementById("inputBusqueda"); 
const resultadoBusqueda = document.getElementById("resultadoBusqueda");
const imgPieza = document.getElementById("imgPieza");

function buscar(){
    console.log("Entro a la función")
    const txtBusqueda = inputBusqueda.value;

    if(txtBusqueda == ""){
        alert("Nohay criterio de busqueda");

    }

    console.log(txtBusqueda, "txtBusqueda");
    let resultado = piezas.find(pieza => {
        return pieza.nombre.toLowerCase() == txtBusqueda.toLowerCase();
    });

    if(resultado == undefined){
        // alert("No se encontró la pieza");
        imgPieza.src = "assets/images/logo.png";
        resultadoBusqueda.innerHTML = "Nose encontró la pieza";
    }else {
        // pieza si deberia tener la pieza
        imgPieza.src = resultado.imagen;
        resultadoBusqueda.innerText = resultado.movimiento
    }

    console.log(resultado, "resultado");
}

inputBusqueda.addEventListener("keypress", event => {
    if(event.key === "Enter"){
        console.log("Entró a evento keypress con enter");
        buscar();
    }
});