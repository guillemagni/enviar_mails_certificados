function enviar() {
    //Función para automatizar envios de mails con un url que lleva a un pdf cargado en drive.
    
    const hoja = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
    //Columnas -> A: - B: - C: - ... 
    //Modificar n del bucle de acuerdo a la cantidad de filas
    //i=2, primera fila etiquetas de la columna en Sheet
    for (i=2; i <= n; i++){
      //const varn = hoja.getRange("columna" + i).getValue()
      const var1 = hoja.getRange("A" + i).getValue()
      const var2 = hoja.getRange("B" + i).getValue()

      /*
         El script está pensado para que haya una carpeta en Google Drive que tenga una n cantidad de pdf a enviar. 
         Cada pdf se envía por medio del url correspondiente
      */
      const url = hoja.getRange("C" + i).getValue()
  
      //Mostramos en consola los envios que se vayan a ejecutar con la información  correspondiente
      Logger.log("id: "+i+ " - Envio para: " +var1+ " - var2: " +var2+ " - url: " +url)
      
      /*
      id del archivo subido a Drive
      
      Ejemplo: const idArchivo = "1LAcwWnKMiFBGQ2oJaVHmVB_B6ojLJElG"
      Expresión regular: /d\/([0-9A-Za-z_]+)[1]
        d\ -> todo valor después de de la ruta d\
        []
        0-9 -> el codigo debe  tener numeros
        A-Z -> el código debe tener letras mayúsculas
        a-z -> el código debe tener letras minúsculas
        + -> debe haber varios caracteres que cumplan con la condición
        () ->dejo afuera el \d
        [1] -> al colocar en parentesis devuelve un arreglo:
          0: url completo
          1: id del archivo
      */
      const idArchivo = url.match(/d\/([0-9A-Za-z_-]+)/)[1]
      const archivo = DriveApp.getFileById(idArchivo)
      const blob = archivo.getAs(MimeType.PDF)
      const mensaje = 'mensaje a enviar';
  
      // (destinatario, asunto, mensaje, ajdunto)
      Gvar2App.sendEvar2(var2, 
      "asunto",
      mensaje,
      {attachments:[blob]}
      )
    } 
  }
