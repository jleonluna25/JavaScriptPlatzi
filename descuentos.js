
const precioBruto = document.getElementById("precioBruto");
const radio = document.getElementsByName("tipoDescuento");

const v = function calculoPrecio() {
    document.getElementById("categoriasDescuento").removeAttribute("disabled");
    /**
     *acá tendría que validar si se ha seleccionado alguna opción del combo
     */
    const descuento = document.getElementById("categoriasDescuento");
    const calculo = precioBruto.value * 100 / descuento.value;
    const precioFinal = document.getElementById("precioFinal");
    const ahorro = document.getElementById("ahorro");
    precioFinal.innerHTML(String(precioBruto.value - calculo));
    ahorro.innerHTML(String(calculo))
}

function ejecutar() {
    if (radio.value == 1) {
        v();
    } else {
        if (radio.value == 2) {
            v();
        } else {
            window.alert("No est&aacute; funcionando bien la captura del valor del radio :/");
        }
    }
}

function r() {
    document.getElementById("categoriasDescuento").removeAttribute("disabled");
}