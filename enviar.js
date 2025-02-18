function enviarCertificados() {
  var hoja = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  //Usaremos una hoja aparte para los errores que pueden ir apareciendo al momento del envío, para estudiar los casos posteriormente.
  var hojaErrores = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Errores");
  
  // Si no existe la hoja "Errores", la crea y agrega encabezados
  if (!hojaErrores) {
    hojaErrores = SpreadsheetApp.getActiveSpreadsheet().insertSheet("Errores");
    hojaErrores.appendRow(["Nombre", "Email", "URL Certificado", "Error"]);
  }
  
  var datos = hoja.getRange(2, 1, hoja.getLastRow() - 1, 3).getValues(); // Datos desde fila 2 hasta la última
  var asunto = "Asunto"; //Modificar asunto y mensaje según necesidad
  
  datos.forEach(function(fila, i) {
    var nombre = fila[0]; // Columna A: Nombre
    var email = fila[1];  // Columna B: Mail
    var urlCertificado = fila[2]; // Columna C: URL del certificado

    if (email && urlCertificado) { // Verifica que el email y la URL no estén vacíos
      try {
        var mensaje = "Hola " + nombre + ",\n\n"
                    + "Puedes descargar tu certificado en el siguiente enlace:\n\n"
                    + urlCertificado + "\n\n"
                    + "Saludos.";
        
        MailApp.sendEmail(email, asunto, mensaje);
        Logger.log("Correo enviado a: " + email);
        
      } catch (error) {
        Logger.log("Error al enviar a: " + email + " - " + error.message);
        
        // Guarda en la hoja de errores si no está ya registrado
        var filasErrores = hojaErrores.getDataRange().getValues();
        var existe = filasErrores.some(row => row[1] === email); // Verifica si el email ya está registrado en "Errores"
        
        if (!existe) {
          hojaErrores.appendRow([nombre, email, urlCertificado, error.message]);
        }
      }
    }
  });
  
  SpreadsheetApp.getUi().alert("Proceso finalizado. Revisa la hoja 'Errores' para posibles problemas.");
}

