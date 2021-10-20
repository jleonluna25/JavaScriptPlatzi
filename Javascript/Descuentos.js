function calcularPrecioFinal(){
    const descuento = document.getElementById("descuento");
    const precio = document.getElementById("precio");
    //alert(precio.value +"    "+ descuento.value);
    //alert(Number.parseFloat(precio.value) -Number.parseFloat(precio.value)*Number.parseFloat(descuento.value)/100);
    var total = precio.value -precio.value*descuento.value/100;
    //alert("El precio final es: $"+total.toString());
    const result = document.getElementById("result");
    result.innerText = "El precio final con descuento del "+descuento.value+ "% es: $"+total;
}