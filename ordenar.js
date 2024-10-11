function invertirColumna() {
  //Se automatizó la generación de pdf, la función busca organizar los pdf con cada inscripto correspondiente.
  const hoja = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const columna = 1; // Número de la columna a invertir (1 es la columna A)
  
  // Obtener todos los valores de la columna especificada
  const rango = hoja.getRange(1, columna, hoja.getLastRow(), 1);
  const valores = rango.getValues();
  
  // Invertir los valores
  const valoresInvertidos = valores.reverse();
  
  // Escribir los valores invertidos en la misma columna
  rango.setValues(valoresInvertidos);
  
  // Confirmar finalización
  SpreadsheetApp.getUi().alert('Inversión de columna completada.');
}
