const dia = new Date();
const text = dia.getDay() + "/" + dia.getMonth() + "/" + dia.getFullYear();
document.getElementById("fecha_pedido").innerHTML = text;
document.getElementById("total").innerHTML = "1500"

function agregarPlato(){
    const selecionados = document.getElementById("plato").value;
    const nuevo_tr = document.createElement("tr");
    var fila="<tr><td>"+selecionados+"</td><td></td><td>$500</td><td><button>Eliminar</button></td></tr>";
    nuevo_tr.innerHTML=fila;
    document.getElementById("items_a_solicitar").appendChild(nuevo_tr);
    document.getElementById("ingrediente").removeAttribute("disabled");
    document.getElementById("boton_ingrediente").removeAttribute("disabled");
    total = document.getElementById("total").innerHTML;
    document.getElementById("total").innerHTML = parseFloat(total) + 500;
    

}
function agregarIngrediente(){
    const selecionados = document.getElementById("ingrediente").value;
    const nuevo_tr = document.createElement("tr");
    var fila="<tr><td>"+selecionados+"</td><td></td><td>$500</td><td><button>Eliminar</button></td></tr>";
    nuevo_tr.innerHTML=fila;
    document.getElementById("items_a_solicitar").appendChild(nuevo_tr);
    select = document.getElementById("ingrediente");
    value = select.selectedIndex;
    select.removeChild(select[value]);    
    total = document.getElementById("total").innerHTML;
    document.getElementById("total").innerHTML = parseFloat(total) + 500;

}
function agregarCarritos(){
    document.getElementById("formulario").reset();
}
