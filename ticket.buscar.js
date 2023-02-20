import {Articulo, Ticket, TicketStore} from "./productos.js"

let ts= new TicketStore();

let ticketJSON_todos = `
[
    {"id" : " 1 ", "tienda" : "MERCADONA", "fecha" : "03-2-2023", "articuloList":[{"nombre" : "Berenjena", "cantidad" : "0.500", "precio" : "2.000"}]},
    {"id" : " 2 ", "tienda" : "LIDL", "fecha" : "05-2-2023", "articuloList":[{"nombre" : "Pera", "cantidad" : "1.000", "precio" : "2.500"}]},
    {"id" : " 3 ", "tienda" : "DÍA", "fecha" : "28-12-2022", "articuloList":[{"nombre" : "Naranja", "cantidad" : "0.750", "precio" : "2.000"}]},
    {"id" : " 4 ", "tienda" : "MERCADONA", "fecha" : "08-2-2023", "articuloList":[{"nombre" : "Plátano", "cantidad" : "1.590", "precio" : "2.000"}]},
    {"id" : " 5 ", "tienda" : "ALDI", "fecha" : "27-1-2023", "articuloList":[{"nombre" : "Mandarina", "cantidad" : "0.450", "precio" : "2.000"}]},
    {"id" : " 6 ", "tienda" : "MERCADONA", "fecha" : "12-1-2023", "articuloList":[{"nombre" : "Brócoli", "cantidad" : "0.800", "precio" : "2.000"}]},
    {"id" : " 7 ", "tienda" : "MERCADONA", "fecha" : "24-11-2022", "articuloList":[{"nombre" : "Melón", "cantidad" : "3.100", "precio" : "2.000"}]},
    {"id" : " 8 ", "tienda" : "ALDI", "fecha" : "10-1-2022", "articuloList":[{"nombre" : "Berenjena", "cantidad" : "0.700", "precio" : "2.000"}]},
    {"id" : " 9 ", "tienda" : "MERCADONA", "fecha" : "19-1-2022", "articuloList":[{"nombre" : "Manzana", "cantidad" : "0.500", "precio" : "2.000"}]},
    {"id" : " 10 ", "tienda" : "DÍA", "fecha" : "10-12-2023", "articuloList":[{"nombre" : "Brócoli", "cantidad" : "0.400", "precio" : "2.000"}]},
    {"id" : " 11 ", "tienda" : "DÍA", "fecha" : "04-2-2023", "articuloList":[{"nombre" : "Naranja", "cantidad" : "1.100", "precio" : "2.000"}]},
    {"id" : " 12 ", "tienda" : "LIDL", "fecha" : "28-1-2023", "articuloList":[{"nombre" : "Frambuesa", "cantidad" : "0.550", "precio" : "2.000"}]},
    {"id" : " 13 ", "tienda" : "ALDI", "fecha" : "15-1-2023", "articuloList":[{"nombre" : "Tomate", "cantidad" : "0.800", "precio" : "2.000"}]},
    {"id" : " 14 ", "tienda" : "LIDL", "fecha" : "30-11-2022", "articuloList":[{"nombre" : "Plátano", "cantidad" : "1.200", "precio" : "2.000"}]},
    {"id" : " 15 ", "tienda" : "MERCADONA", "fecha" : "09-12-2022", "articuloList":[{"nombre" : "Mandarina", "cantidad" : "0.500", "precio" : "2.000"}]},
    {"id" : " 16 ", "tienda" : "ALDI", "fecha" : "06-12-2022", "articuloList":[{"nombre" : "Limón", "cantidad" : "0.900", "precio" : "2.000"}]},
    {"id" : " 17 ", "tienda" : "DÍA", "fecha" : "11-1-2023", "articuloList":[{"nombre" : "Cebolla", "cantidad" : "1.100", "precio" : "2.000"}]},
    {"id" : " 18 ", "tienda" : "MERCADONA", "fecha" : "13-12-2022", "articuloList":[{"nombre" : "Pimiento verde", "cantidad" : "1.100", "precio" : "2.000"}]},
    {"id" : " 19 ", "tienda" : "MERCADONA", "fecha" : "03-12-2022", "articuloList":[{"nombre" : "Cebolla", "cantidad" : "1.100", "precio" : "2.000"}]},
    {"id" : " 20 ", "tienda" : "DÍA", "fecha" : "21-1-2023", "articuloList":[{"nombre" : "Lechuga", "cantidad" : "1.100", "precio" : "2.000"}]},
    {"id" : " 21 ", "tienda" : "LIDL", "fecha" : "07-1-2023", "articuloList":[{"nombre" : "Frambuesa", "cantidad" : "0.550", "precio" : "2.000"}]},
    {"id" : " 22 ", "tienda" : "ALDI", "fecha" : "12-1-2023", "articuloList":[{"nombre" : "Tomate", "cantidad" : "0.800", "precio" : "2.000"}]},
    {"id" : " 23 ", "tienda" : "LIDL", "fecha" : "25-11-2022", "articuloList":[{"nombre" : "Plátano", "cantidad" : "1.200", "precio" : "2.000"}]},
    {"id" : " 24 ", "tienda" : "MERCADONA", "fecha" : "10-12-2022", "articuloList":[{"nombre" : "Cebolla", "cantidad" : "0.500", "precio" : "2.000"}]},
    {"id" : " 25 ", "tienda" : "LIDL", "fecha" : "09-12-2022", "articuloList":[{"nombre" : "Limón", "cantidad" : "0.900", "precio" : "2.000"}]},
    {"id" : " 26 ", "tienda" : "ALDI", "fecha" : "17-1-2023", "articuloList":[{"nombre" : "Cebolla", "cantidad" : "1.100", "precio" : "2.000"}]},
    {"id" : " 27 ", "tienda" : "ALDI", "fecha" : "20-1-2023", "articuloList":[{"nombre" : "Pimiento verde", "cantidad" : "1.100", "precio" : "2.000"}]},
    {"id" : " 28 ", "tienda" : "DÍA", "fecha" : "14-1-2023", "articuloList":[{"nombre" : "Plátano", "cantidad" : "1.100", "precio" : "2.000"}]},
    {"id" : " 29 ", "tienda" : "DÍA", "fecha" : "14-1-2023", "articuloList":[{"nombre" : "Lechuga", "cantidad" : "1.100", "precio" : "2.000"}]}
]
`;

ts.loadJSON(ticketJSON_todos);

function ticketBuscar2(e){
    let textoBuscar = document.getElementById('id-textoBuscar').value;

    mostrarProductosBuscados(textoBuscar);
}


// Cuando le damos click a un tab, desaparece el valor del input en la barra de búsqueda
const dropdownItems = document.querySelectorAll(".dropdown-item");
const tab = document.querySelectorAll("tab-pane")
const inputBuscar = document.getElementById('id-textoBuscar');

dropdownItems.forEach(button => {
  button.addEventListener('click', () => {
    inputBuscar.value = '';
    mostrarAllProductos();
  });
});

const productoElementos = document.querySelectorAll(".figures");

productoElementos.forEach(productoElemento => {
    productoElemento.addEventListener("click", () => {
        mostrarGrafico(productoElemento.innerText)
    });
});

const botonBuscar = document.getElementById('id-botonBuscar');
console.log('botonBuscar', botonBuscar);
if(!botonBuscar){
    console.log('No se detecta el boton de búsqueda');
} else {
    botonBuscar.addEventListener("click", ticketBuscar2);
    console.log('botón de búsqueda 2 preparado');
}

document.getElementById("tipoFruta").addEventListener("click",  elemento => {
    mostrarFruta();
})

document.getElementById("tipoVerdura").addEventListener("click",  elemento => {
    mostrarVerdura();
})

/**
 * Cada vez que se pulsa en los tabs, aparecen todos los productos
 */

/**
 * Mostrar todos los productos
 */
function mostrarAllProductos() {
    document.querySelectorAll(".figures")  // todos los productos
        .forEach(producto => {
            producto.style.display = 'block';
        });
}

function mostrarFruta() {
    const verduras = document.getElementById("verduras").children;
    const frutas = document.getElementById("frutas").children;

    for (let ind = 0; ind < verduras.length; ind++) {
        verduras[ind].style.display = 'none';
        console.log("applicando")
    }
    
    for (let ind = 0; ind < frutas.length; ind++) {
        frutas[ind].style.display = 'block';
        console.log("applicando")
    }
}

function mostrarVerdura() {
    const verduras = document.getElementById("verduras").children;
    const frutas = document.getElementById("frutas").children;

    for (let ind = 0; ind < verduras.length; ind++) {
        verduras[ind].style.display = 'block';
        console.log("applicando")
    }
    
    for (let ind = 0; ind < frutas.length; ind++) {
        frutas[ind].style.display = 'none';
        console.log("applicando")
    }
}

/**
 *  Mostrar producto segun texto
*/
function mostrarProductosBuscados(busqueda) {
     const productos = document.querySelectorAll(".figures");

     productos.forEach(p => {
        const nombreProducto = p.innerText.toLowerCase();
        if (busqueda === '') {
            p.style.display = 'block';
        } else if (nombreProducto.includes(busqueda.toLowerCase())) {
            console.log(p.id);
            p.style.display = 'block';
         } else {
            p.style.display = 'none';
         }
     });
}


function mostrarGrafico(nombreProducto) {
    let divResultados = document.getElementById('id-resultados');

    if(nombreProducto){
        let resBusqueda = ts.searchArticulo(nombreProducto);
        divResultados.innerHTML = `<strong>${nombreProducto}</strong><br><span>Encontrados ${resBusqueda.length}</span>`;
        // for (const t of resBusqueda){
        //     pintarTicketEn(t, divResultados);
        // }
        let rList = [];
        let rLabels = [];
        let rPrecio = [];
        resBusqueda.forEach(t => {
                const tienda = t.tienda;
                const fecha = t.fecha;
                const artList = t.articuloList;
                artList.forEach((a) => {
                        let aux = {tienda:tienda, fecha:fecha, nombre:a.nombre, precio:a.precio};
                        rList.push(aux);
                        rLabels.push(t.fecha);
                        rPrecio.push(a.precio);
                    }
                ); 
            }
        );
        //console.log('Hay ', rList.length);
        //console.log(JSON.stringify(rList, null, 2));
        // 
        divResultados.innerHTML ="";
        console.assert(rLabels.length === rPrecio.length, "ERROR, precio y fechas no tienen la misma longitud!!!.");
        for(let i=0; i<rLabels.length; i++){
            divResultados.innerHTML += `<div><div style="display:inline;">${rLabels[i]}</div><div style="display:inline;">${rPrecio[i]}</div></div>`;
        }
         for(const r of rList){
            divResultados.innerHTML += `<div>${r.tienda} ${r.nombre} ${r.fecha} ${r.precio}</div>`;
        }
 
        new Chart('id-grafico', {
            type:"line",
            data:{
                labels: rLabels,
                datasets:[
                {
                    label: nombreProducto,
                    borderColor: "red",
                    backgroundColor: "rgba(255, 0, 0, 0.1)",
                    data: rPrecio
                }
                ]
            }
        });
    } else {
        console.log('Nada que buscar');
        divResultados.innerHTML = 'Nada que buscar';
    }

    document.getElementById("myModal").style.display = "block";
}