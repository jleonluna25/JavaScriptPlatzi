var flag= 0;
function habilitarDescuento() {
    /**/
    const radio = document.getElementsByName("tipoDescuento");
    if (radio[0].checked) {
        document.getElementById("categoriasDescuento").removeAttribute("disabled");
        document.getElementById("cuponDescuento").disabled=true;
        flag= 1;
    } else {
        if (radio[1].checked) {
            document.getElementById("cuponDescuento").removeAttribute("disabled");
            document.getElementById("categoriasDescuento").disabled=true;
            flag= 2;
        } else {
            window.alert("No está funcionando bien la captura del valor del radio :/" + radio.value);
        }
    }
}

function calcularPrecio() {
    const precioBruto = document.getElementById("precioBruto");
    window.alert(document.getElementById("categoriasDescuento").value);
    document.getElementById("precioFinal").value=9;
    if (flag == 1){/*reemplazar las condiciones por las mismas de la primera función*/ 
        const descuento = precioBruto.value*document.getElementById("categoriasDescuento").value/100;
        document.getElementById("precioFinal").value=precioBruto.value - descuento;
        document.getElementById("ahorro").value=descuento;
    }else{
        if (flag == 2){
            const descuento = precioBruto.value*document.getElementById("cuponDescuento").value/100;
            document.getElementById("precioFinal").value=precioBruto.value - descuento;
            document.getElementById("ahorro").value=descuento;
        }else{
            window.alert("Error con variable flag"+flag);
        }

    }
}
