
export function pintarTicketEn(ticket){
    let divForm = document.createElement('div');
    document.body.appendChild(divForm);
    divForm.setAttribute("class", "ticket shadow bg-body rounded");

    // Creamos el header del ticket

    let divHeader = document.createElement('div');
    divHeader.setAttribute("class", "ticketHeader");
    divForm.appendChild(divHeader);
   
    // Creamos el cuerpo del ticket

    let divBody = document.createElement("div");
    divBody.setAttribute("class", "ticketBody");
    divForm.appendChild(divBody);

    // Creamos el form
    let formTicket = document.createElement("form");

    // El input para mostrar la tienda del ticket
    let inputTienda = document.createElement("input");
    inputTienda.setAttribute("class", "tienda");
    inputTienda.setAttribute("type", "text");
    inputTienda.setAttribute("name", "TIENDA");
    inputTienda.setAttribute("value", ticket.tienda);

    // El input para mostrar la fecha del ticket
    let inputFecha = document.createElement("input");
    inputFecha.setAttribute("class", "fecha");
    inputFecha.setAttribute("type", "text");
    inputFecha.setAttribute("name", "TIENDA");
    inputFecha.setAttribute("value", ticket.fecha);

    // Añadimos los elementos creados al cuerpo del ticket
    divBody.appendChild(divHeader);
    divBody.appendChild(formTicket);
    divBody.appendChild(inputTienda);
    divBody.appendChild(inputFecha);

    //Le asignamos dos manejadores de eventos al form
    formTicket.addEventListener("submit", controladorSubmit);
    formTicket.addEventListener("click", acordeon);

    // Botón para salvar los cambios que realicemos en el ticket
    let btn_ticketSave = document.createElement('BUTTON');
	btn_ticketSave.setAttribute('class', 'btn');
	btn_ticketSave.appendChild(document.createTextNode('S'));
	btn_ticketSave.addEventListener('click', controladorTicket);
	formTicket.appendChild(btn_ticketSave);

    //  Botón para borrar el ticket
    let btn_ticketDelete = document.createElement('BUTTON');
	btn_ticketDelete.setAttribute('class', 'btn');
	btn_ticketDelete.appendChild(document.createTextNode('D'));
	formTicket.appendChild(btn_ticketDelete);

   function controladorSubmit(e){
    alert("submit: " + e);
    e.preventDefault();
    return false;
   } 

   // función acordeón para pasar los tickets
   function acordeon(e){
    let t = e.currentTarget.parentElement.childNodes[1];
    if (false == t.classList.contains("abierto")) {
		t.classList.remove("cerrado");
		t.classList.add("abierto");
	  } else { 
		t.classList.remove("abierto");
		t.classList.add("cerrado");
	  }
   }
}

export function pintarForm(ticket){
	pintarTicketEn(ticket, document.body);
}