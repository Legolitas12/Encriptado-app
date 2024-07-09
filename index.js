//PRIMER METODO PARA EL BOTON DE COPIAR

// function encriptar() {
//     let texto = document.getElementById("texto").value;
//     let tituloMensaje = document.getElementById("titulo-mensaje");
//     let parrafo = document.getElementById("parrafo");
//     let muñeco = document.getElementById("muñeco");
  
//     let textoCifrado = texto
//       .replace(/e/gi, "enter")
//       .replace(/i/gi, "imes")
//       .replace(/a/gi, "ai")
//       .replace(/o/gi, "ober")
//       .replace(/u/gi, "ufat");
  
//     if (texto.length != 0) {
//       document.getElementById("texto").value = textoCifrado;
//       tituloMensaje.textContent = "Texto encriptado con éxito";
//       parrafo.textContent = "";
//       muñeco.src = "./img/encriptado.jpg";
//       copiar(textoCifrado); // Llamar a la función copiar con el texto encriptado
//     } else {
//       muñeco.src = "./img/muñeco.png";
//       tituloMensaje.textContent = "Ningún mensaje fue encontrado";
//       parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
//       swal("Ooops!", "Debes ingresar un texto", "warning");
//     }
//   }
  
//   function desencriptar() {
//     let texto = document.getElementById("texto").value;
//     let tituloMensaje = document.getElementById("titulo-mensaje");
//     let parrafo = document.getElementById("parrafo");
//     let muñeco = document.getElementById("muñeco");
  
//     let textoCifrado = texto
//       .replace(/enter/gi, "e")
//       .replace(/imes/gi, "i")
//       .replace(/ai/gi, "a")
//       .replace(/ober/gi, "o")
//       .replace(/ufat/gi, "u");
    
//       if (texto.length != 0) {
//         document.getElementById("texto").value = textoCifrado;
//         tituloMensaje.textContent = "Texto desencriptado con éxito";
//         parrafo.textContent = "";
//         muñeco.src = "./img/desencriptado.jpg";
//       } else {
//         muñeco.src = "./img/muñeco.png";
//         tituloMensaje.textContent = "Ningún mensaje fue encontrado";
//         parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
//         swal("Ooops!", "Debes ingresar un texto", "warning");
//       }
//   }


//   function copiar(texto) {
//     // Crear un elemento de texto temporal
//     const elementoTemporal = document.createElement("textarea");
//     elementoTemporal.value = texto;
    
//     // Añadir el elemento temporal al documento
//     document.body.appendChild(elementoTemporal);
    
//     // Seleccionar el texto en el elemento temporal
//     elementoTemporal.select();
//     elementoTemporal.setSelectionRange(0, 99999); // Para móviles
    
//     // Copiar el texto al portapapeles
//     document.execCommand("copy");
    
//     // Eliminar el elemento temporal
//     document.body.removeChild(elementoTemporal);
    
//     // Mostrar una alerta de que el texto fue copiado
//     swal("¡Texto Copiado!", "El texto encriptado ha sido copiado al portapapeles.", "success");
// }

function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito";
      parrafo.textContent = "";
      muñeco.src = "./img/encriptado.jpg";
    } else {
      muñeco.src = "./img/muñeco.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}
  
function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./img/desencriptado.jpg";
    } else {
        muñeco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}

function copiar() {
    // Obtener el texto encriptado del área de texto
    let texto = document.getElementById("texto").value;

    if (texto.length != 0) {
        // Crear un elemento de texto temporal
        const elementoTemporal = document.createElement("textarea");
        elementoTemporal.value = texto; // Asegúrate de que este texto no sea undefined
        
        // Añadir el elemento temporal al documento
        document.body.appendChild(elementoTemporal);
        
        // Seleccionar el texto en el elemento temporal
        elementoTemporal.select();
        elementoTemporal.setSelectionRange(0, 99999); // Para móviles
        
        // Copiar el texto al portapapeles
        document.execCommand("copy");
        
        // Eliminar el elemento temporal
        document.body.removeChild(elementoTemporal);
        
        // Mostrar una alerta de que el texto fue copiado
        swal("¡Texto Copiado!", "El texto encriptado ha sido copiado al portapapeles.", "success");
    } else {
        swal("Ooops!", "No hay texto encriptado para copiar", "warning");
    }
}
