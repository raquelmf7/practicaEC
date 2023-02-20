import {Articulo, Ticket, TicketStore} from "./productos.js"

let ticketJSON_todos = `
[
    {"id" : " 1 ", "tienda" : "MERCADONA", "fecha" : "03-2-2023", "articuloList":[{"nombre" : "Berenjena", "cantidad" : "0.500", "precio" : "2.500"}]},
    {"id" : " 2 ", "tienda" : "LIDL", "fecha" : "05-2-2023", "articuloList":[{"nombre" : "Pera", "cantidad" : "1.000", "precio" : "1.500"}]},
    {"id" : " 3 ", "tienda" : "DÍA", "fecha" : "28-12-2022", "articuloList":[{"nombre" : "Naranja", "cantidad" : "0.750", "precio" : "1.250"}]},
    {"id" : " 4 ", "tienda" : "MERCADONA", "fecha" : "08-2-2023", "articuloList":[{"nombre" : "Plátano", "cantidad" : "1.590", "precio" : "2.100"}]},
    {"id" : " 5 ", "tienda" : "ALDI", "fecha" : "27-1-2023", "articuloList":[{"nombre" : "Mandarina", "cantidad" : "0.450", "precio" : "0.950"}]},
    {"id" : " 6 ", "tienda" : "MERCADONA", "fecha" : "12-1-2023", "articuloList":[{"nombre" : "Brócoli", "cantidad" : "0.800", "precio" : "2.000"}]},
    {"id" : " 7 ", "tienda" : "MERCADONA", "fecha" : "24-11-2022", "articuloList":[{"nombre" : "Melón", "cantidad" : "3.100", "precio" : "4.500"}]},
    {"id" : " 8 ", "tienda" : "ALDI", "fecha" : "10-1-2022", "articuloList":[{"nombre" : "Berenjena", "cantidad" : "0.700", "precio" : "1.300"}]},
    {"id" : " 9 ", "tienda" : "MERCADONA", "fecha" : "19-1-2022", "articuloList":[{"nombre" : "Manzana", "cantidad" : "0.500", "precio" : "0.800"}]},
    {"id" : " 10 ", "tienda" : "DÍA", "fecha" : "10-12-2023", "articuloList":[{"nombre" : "Brócoli", "cantidad" : "0.400", "precio" : "2.000"}]},
    {"id" : " 11 ", "tienda" : "DÍA", "fecha" : "04-2-2023", "articuloList":[{"nombre" : "Naranja", "cantidad" : "1.100", "precio" : "1.00"}]},
    {"id" : " 12 ", "tienda" : "LIDL", "fecha" : "28-1-2023", "articuloList":[{"nombre" : "Frambuesa", "cantidad" : "0.550", "precio" : "1.500"}]},
    {"id" : " 13 ", "tienda" : "ALDI", "fecha" : "15-1-2023", "articuloList":[{"nombre" : "Tomate", "cantidad" : "0.800", "precio" : "1.450"}]},
    {"id" : " 14 ", "tienda" : "LIDL", "fecha" : "30-11-2022", "articuloList":[{"nombre" : "Plátano", "cantidad" : "1.200", "precio" : "2.600"}]},
    {"id" : " 15 ", "tienda" : "MERCADONA", "fecha" : "09-12-2022", "articuloList":[{"nombre" : "Mandarina", "cantidad" : "0.500", "precio" : "0.750"}]},
    {"id" : " 16 ", "tienda" : "ALDI", "fecha" : "06-12-2022", "articuloList":[{"nombre" : "Limón", "cantidad" : "0.800", "precio" : "2.100"}]},
    {"id" : " 17 ", "tienda" : "DÍA", "fecha" : "11-1-2023", "articuloList":[{"nombre" : "Cebolla", "cantidad" : "1.100", "precio" : "1.350"}]},
    {"id" : " 18 ", "tienda" : "MERCADONA", "fecha" : "13-12-2022", "articuloList":[{"nombre" : "Pimiento verde", "cantidad" : "1.100", "precio" : "1.350"}]},
    {"id" : " 19 ", "tienda" : "MERCADONA", "fecha" : "03-12-2022", "articuloList":[{"nombre" : "Cebolla", "cantidad" : "1.100", "precio" : "1.680"}]},
    {"id" : " 20 ", "tienda" : "DÍA", "fecha" : "21-1-2023", "articuloList":[{"nombre" : "Lechuga", "cantidad" : "1.100", "precio" : "1.300"}]},
    {"id" : " 21 ", "tienda" : "LIDL", "fecha" : "07-1-2023", "articuloList":[{"nombre" : "Frambuesa", "cantidad" : "0.550", "precio" : "1.720"}]},
    {"id" : " 22 ", "tienda" : "ALDI", "fecha" : "12-1-2023", "articuloList":[{"nombre" : "Tomate", "cantidad" : "0.800", "precio" : "1.700"}]},
    {"id" : " 23 ", "tienda" : "LIDL", "fecha" : "25-11-2022", "articuloList":[{"nombre" : "Plátano", "cantidad" : "1.200", "precio" : "2.000"}]},
    {"id" : " 24 ", "tienda" : "MERCADONA", "fecha" : "10-12-2022", "articuloList":[{"nombre" : "Cebolla", "cantidad" : "0.500", "precio" : "0.600"}]},
    {"id" : " 25 ", "tienda" : "LIDL", "fecha" : "09-12-2022", "articuloList":[{"nombre" : "Limón", "cantidad" : "0.900", "precio" : "2.290"}]},
    {"id" : " 26 ", "tienda" : "ALDI", "fecha" : "17-1-2023", "articuloList":[{"nombre" : "Cebolla", "cantidad" : "1.000", "precio" : "1.000"}]},
    {"id" : " 27 ", "tienda" : "ALDI", "fecha" : "20-1-2023", "articuloList":[{"nombre" : "Pimiento verde", "cantidad" : "0.500", "precio" : "0.750"}]},
    {"id" : " 28 ", "tienda" : "DÍA", "fecha" : "14-1-2023", "articuloList":[{"nombre" : "Plátano", "cantidad" : "1.100", "precio" : "2.150"}]},
    {"id" : " 29 ", "tienda" : "DÍA", "fecha" : "14-1-2023", "articuloList":[{"nombre" : "Lechuga", "cantidad" : "1.100", "precio" : "1.200"}]}
]
`;

let ts = new TicketStore();


let artNombres = ["Manzana", "Naranja", "Pera", "Plátano", "Limón", "Melón", "Ciruela", "Mandarinas", "Uvas blancas", "Frambuesa", "Brócoli", "Calabacín", "Cebolla", "Pimiento rojo", "Pimiento verde", "Lechuga", "Berenjena", "Ajo", "Apio", "Lombarda"]

export function ticketForm(ticketID, elemID) {
    let ticket = ts.getTicket(ticketID);

    let divElem = document.getElementById(elemID);
    divElem.innerHTML = '';

    // Creamos el div del ticket

    let divForm = document.createElement('div');
    divElem.appendChild(divForm);
    //let tabcontent = document.getElementsByClassName('tabcontent')[0];
    //tabcontent.appendChild(divElem);
    divForm.setAttribute("class", "ticket shadow bg-body rounded");

    // Creamos el header del ticket

    let divHeader = document.createElement('div');
    divHeader.setAttribute("class", "ticketHeader");
    divForm.appendChild(divHeader);

    let divTicketId = document.createElement('div');
    divTicketId.innerHTML = ticket.id;

    let divHeaderTienda = document.createElement('div');
	let divHeaderFecha = document.createElement('div');
	
    //revisar esto (no existe el class)
    divTicketId.setAttribute("class", "ticketHeaderInterior prueba");
    divHeaderTienda.setAttribute("class", "ticketHeaderInterior");
	divHeaderFecha.setAttribute("class", "ticketHeaderInterior");

    // El contenido de los dos divs son la fecha y la tienda
    divHeaderFecha.innerHTML = ticket.fecha;
	divHeaderTienda.innerHTML = ticket.tienda;

    divHeader.appendChild(divHeaderFecha);
    divHeader.appendChild(divHeaderTienda);

    /* El cuerpo del ticket*/

    let divCuerpo = document.createElement('div');
    divForm.appendChild(divCuerpo);

    // Añadimos los artículos

    if(ticket.articuloList.length <= 0){
        let p = document.createElement("p");
        p.textContent = "NO TIENE ARTÍCULOS";
    } else {
        for (const a of ticket.articuloList){
            let divArticulo = document.createElement("div");

            let d_nombre = document.createElement("input");
            let d_cantidad = document.createElement("input");
            let d_precio = document.createElement("input");

            d_nombre.setAttribute("class", "draw");
            d_nombre.value = a.nombre;
            d_nombre.setAttribute("art-nombre", a.nombre);

            d_cantidad.setAttribute("class", "draw");
            d_cantidad.value = a.cantidad;
            d_cantidad.setAttribute("art-cantidad", a.cantidad);

            d_precio.setAttribute("class", "draw");
            d_precio.value = a.precio;
            d_precio.setAttribute("art-precio", a.precio);

            divArticulo.appendChild(d_nombre);
            divArticulo.appendChild(d_cantidad);
            divArticulo.appendChild(d_precio);


            // Añadimos el artículo al cuerpo del ticket
            divCuerpo.appendChild(divArticulo);
        }
    }

    // Creamos el footer del ticket
    let divFooter = document.createElement("div");
    divFooter.setAttribute("class", "ticketFooter");

    // Añadimos botones de editar y borrar

    let editSpan = document.createElement("button");
    let deleteSpan = document.createElement("button");

    divFooter.appendChild(editSpan);
    divFooter.appendChild(deleteSpan);

    let editIcon = document.createElement("i");
    editSpan.setAttribute('id-ticket', ticket.id);
    editIcon.setAttribute("class", "fa fa-duotone fa-pen-to-square");
    editSpan.appendChild(editIcon);
    
    let deleteIcon = document.createElement("i");
    deleteIcon.setAttribute("class", "fa fa-solid fa-trash");
    deleteSpan.appendChild(deleteIcon);
    deleteSpan.addEventListener("click", () => {
        ts.removeTicket(ticket);
        console.log("ticket borrado" + ticket);
      });

    editSpan.addEventListener("click", editarTicketHandler);


    //Añadimos el footer en el div del ticket
    divCuerpo.appendChild(divFooter);


    /* Añadimos los botones anterior y siguiente */
    let navRes = navegacion(ticket);
    let anterior = navRes.anterior;
    let siguiente = navRes.siguiente;

    let divNavegacion = document.createElement("div");
    divNavegacion.setAttribute("class", "divNavegacion");

    //Botón anterior
    let formParent = document.getElementById('id-pagina');

    let divBotonAnterior = document.createElement("div");
    let b_anterior = document.createElement("button");
    b_anterior.setAttribute('id-anterior', `${navRes.anterior}`);
    b_anterior.setAttribute('class', "botonAnterior");
    divBotonAnterior.appendChild(b_anterior);
    let iconAnterior = document.createElement("i");
    iconAnterior.setAttribute("class", "fa fa-solid fa-circle-left");
    b_anterior.appendChild(iconAnterior);
    divNavegacion.appendChild(divBotonAnterior);
    divElem.appendChild(divNavegacion);

    // Botón siguiente
    let divBotonSiguiente = document.createElement("div");
    let b_siguiente = document.createElement("button");
    b_siguiente.setAttribute('id-siguiente', `${navRes.siguiente}`);
    b_siguiente.setAttribute('class', "botonSiguiente");
    divBotonSiguiente.appendChild(b_siguiente);
    let iconSiguiente = document.createElement("i");
    iconSiguiente.setAttribute("class", "fa fa-solid fa-circle-right");
    b_siguiente.appendChild(iconSiguiente);
    divNavegacion.appendChild(divBotonSiguiente);
    divElem.appendChild(divNavegacion);

    // Asignamos a cada botón un manejador de eventos
    if (navRes.anterior >= 0){
        b_anterior.addEventListener("click", anteriorHandler);
    }
    if (navRes.siguiente >= 0){
        b_siguiente.addEventListener("click", siguienteHandler);
    }  
    
}


// Función para el botón de siguiente
function siguienteHandler(e){
    let btn = e.currentTarget;
    let siguienteID = btn.getAttribute('id-siguiente');
    ticketForm(siguienteID, "id-pagina");
}

// Función para el botón de anterior
function anteriorHandler(e){
    let btn = e.currentTarget;
    let anteriorID = btn.getAttribute('id-anterior');
    ticketForm(anteriorID, "id-pagina");
}

function editarTicketHandler(e){
	let elemBoton = e.currentTarget;
	let ticketID = elemBoton.getAttribute('id-ticket');
	
	console.log(`ticket id = ${ticketID}`);
}

// Función para calcular la navegación
function navegacion(ticket){
    console.log(ticket);
    let tList = ts.listAllTicket();
    var maxId = tList.reduce((a,b)=>a.id>b.id?a:b).id;
    var minId = tList.reduce((a,b)=>a.id<b.id?a:b).id;
    console.log(`maxId=${maxId}, minId=${minId}`);
    let posTicket = tList.indexOf(ticket);
    console.log(`ticket ${ticket}, pos=${posTicket}`);
    console.assert(posTicket >= 0, `Ticket no existe, ticket=${ticket}`);
    let ret = {};
    ret.anterior = -1;
    ret.siguiente = -1;
    if(posTicket >= 0 && posTicket < ts.size()){
        if(posTicket > 0)ret.anterior = tList[posTicket-1].id;
        if(posTicket < ts.size() -1)ret.siguiente = tList[posTicket+1].id;
    }
    return ret;
}

ts.loadJSON(ticketJSON_todos);

let totalTickets = ts.size();

// Mostramos por consola el total de ticket que hay

console.log(`Hay ${totalTickets}`)

let ticketList = ts.listAllTicket();

console.log(`El primer ticket es id=${ticketList[0].id}`);

//lanzamos la función para crear el form del ticket 1

ticketForm(ticketList[0].id, "id-pagina");

//ts.exportToLocalStorage();



