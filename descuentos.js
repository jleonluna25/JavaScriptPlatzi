var flag= 0;
function habilitarDescuento() {
    /**/
    const radio = document.getElementsByName("tipoDescuento");
    if (radio[0].checked) {
        document.getElementById("categoriasDescuento").removeAttribute("disabled");
        document.getElementById("cuponDescuento").disabled=true;
    } else {
        if (radio[1].checked) {
            document.getElementById("cuponDescuento").removeAttribute("disabled");
            document.getElementById("categoriasDescuento").disabled=true;
        } else {
            window.alert("No está funcionando bien la captura del valor del radio :/" + radio.value);
        }
    }
}

function calcularPrecio() {
    const precioBruto = document.getElementById("precioBruto");
    const radio1 = document.getElementsByName("tipoDescuento");
    if (radio1[0].checked){
        const descuento = precioBruto.value*document.getElementById("categoriasDescuento").value/100;
        document.getElementById("precioFinal").value=precioBruto.value - descuento;
        document.getElementById("ahorro").value=descuento;
    }else{
        if (radio1[1].checked){
            const descuento = precioBruto.value*document.getElementById("cuponDescuento").value/100;
            document.getElementById("precioFinal").value=precioBruto.value - descuento;
            document.getElementById("ahorro").value=descuento;
        }else{
            window.alert("Error con variable flag");
        }

    }
}
