# Automatizar el envio de mails por medio de AppScripts de Google
![Badge en Desarollo](https://img.shields.io/badge/STATUS-TERMINADO-green)<br>

Este script está diseñado para ejecutarse en Google Sheets y automatizar el envío de correos electrónicos con archivos PDF adjuntos almacenados en Google Drive. A continuación, se detalla su funcionamiento:

**Funcionalidades principales**
* Lista de destinatarios:
    - El script recorre una lista de correos electrónicos cargados en una hoja de cálculo (sheet), donde cada fila representa un destinatario diferente.

* Archivos PDF en Google Drive:
    - En una carpeta específica de Google Drive, se almacenan varios archivos PDF, uno para cada destinatario. El script obtiene el ID del archivo correspondiente a cada usuario.

* Envío de correos personalizados:
    - Para cada destinatario, el script genera un correo electrónico que incluye una URL del archivo PDF correspondiente. Además, adjunta el archivo PDF al correo para que el destinatario pueda descargarlo directamente.

* Registro de errores:
    - En caso de que ocurran errores durante el proceso (por ejemplo, si un archivo no se encuentra o falla el envío del correo), el script registra estos errores en una hoja aparte dentro de la misma hoja de cálculo. Esto permite un análisis posterior para identificar y solucionar problemas.

**Requisitos previos**
* Una hoja de cálculo en Google Sheets con una lista de correos electrónicos (un correo por fila).

* Una carpeta en Google Drive que contenga los archivos PDF a enviar (un archivo por destinatario).

* Habilitar el servicio de Google Apps Script en tu cuenta de Google.

**Instrucciones de uso**
1. Copia el script proporcionado en el editor de Google Apps Script vinculado a tu hoja de cálculo.

2. Configura los nombres de las hojas y columnas según tu estructura de datos.

3. Ejecuta el script manualmente o programa una ejecución automática.

4. Revisa la hoja de errores en caso de que se registren incidencias.