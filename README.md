# enviar_mails_certificados
Un script para ejecutar en Google Sheets.

El script recorre una lista de mails cargados en sheet, donde cada fila es un destinatario diferente. En este caso en particular, el script envía en cada mail un url de un pdf subido al drive. Hay una carpeta que cuenta con n cantidad de pdf para enviar, uno por cada usuario, el script obtiene el id del archivo correspondiente con el destinatario dentro de Drive y lo adjunta al mail para que el usuario pueda descargar el archivo pdf.

El código está armado y probado para trabar con scripts de google (.gs). 
