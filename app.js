// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let input = document.getElementById("amigo").value; // Obtener el valor del input

    if (input === "") {
        alert("Por favor ingrese un nombre");
    } else if (amigos.includes(input)) {
        alert("El nombre ya está en la lista");
    } else {
        amigos.push(input); // Añadir el nombre al array amigos si no está duplicado
        document.getElementById("amigo").value = ""; // Restablecer el campo de entrada
        actualizarLista(); // Actualizar la lista después de agregar un nuevo amigo
    }
}



function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de añadir nuevos elementos
 
    for (let i = 0; i < amigos.length; i++){
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length > 0) {//comprobar que el array no este vacio
        let indiceAletorio = Math.floor(Math.random()*amigos.length); //generar un numero aleatorio para el sorteo dependiendo la cantidad de nombres del array

        let nombreSorteado = `El amigo secreto sortedo es: ${amigos[indiceAletorio]}`;
        let contenedor = document.getElementById("contenedor");
        contenedor.innerHTML = "";

        let h3 = document.createElement("h3");
        h3.textContent = nombreSorteado;
        contenedor.appendChild(h3)
    }else {
        alert("La lista de amigos está vacía.");
    }
}
