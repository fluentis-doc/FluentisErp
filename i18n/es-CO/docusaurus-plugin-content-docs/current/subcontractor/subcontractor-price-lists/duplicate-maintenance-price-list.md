---
title: Duplicar y mantener listas de precios de subcontratación
sidebar_position: 2
ai_generated: true
---

A través de este procedimiento es posible actualizar, cerrar, duplicar, reabrir o modificar los descuentos de las listas de precios<!-- listini --> de subcontratación<!-- conto lavoro --> preexistentes.  
Al abrir la pantalla, observamos que hay filtros con los cuales es posible buscar la lista de precios<!-- listino --> a tratar de manera más específica.  
Al hacer clic en el botón Buscar<!-- Ricerca -->, se presentan los artículos de la lista de precios<!-- listino --> en base a los filtros configurados.  
Es necesario seleccionar uno o más artículos, los cuales serán los destinatarios de la modificación, para ejecutar el procedimiento. Con los botones de la barra de herramientas (**Modificar<!-- Modifica -->** y **Visualización<!-- Visualizzazione -->**) es posible ingresar respectivamente al modo de modificación o visualización de la lista de precios<!-- listino --> de referencia; recordamos que la visualización no permite la modificación.

Al hacer clic en el botón **Actualizar<!-- Aggiorna -->**, se abre una ventana en la cual se solicitan los datos que se aplicarán en la actualización:
-	**Fecha inicio de validez<!-- Data inizio validità -->** y **Fecha fin de validez<!-- Data fine validità -->** deben ser iguales a las de la lista de precios<!-- listino --> de origen, de lo contrario Fluentis no podrá realizar la actualización; es posible consultar estas fechas directamente en la fila del artículo;
-	**Porcentaje de incremento<!-- Percentuale incremento -->**: es posible indicar un porcentaje de incremento a aplicar sobre el precio;
-	**Redondeos<!-- Arrotondamenti -->**: este campo excluye el anterior, por lo que para poder editarlo es necesario borrar el contenido del campo anterior; aquí es posible elegir el tipo de redondeo<!-- Arrotondamneto --> a aplicar al precio; recordamos que los redondeos<!-- arrotondamenti --> pueden contener una vez más un porcentaje de incremento: por esto no tendría sentido dejar editable el campo anterior.
Una vez configuradas las actualizaciones deseadas, para ejecutar el procedimiento hacemos clic en **OK**.  
Observamos que el precio de las filas seleccionadas ha cambiado, según la configuración ingresada.

Con el botón **Cerrar listas de precios<!-- Chiudi listini -->**, en cambio, es posible ingresar una fecha de fin de validez<!-- Data fine validità --> a los artículos de la lista de precios<!-- articoli di listino --> seleccionados. De hecho, al hacer clic en el botón Cerrar, se abrirá una ventana en la que ingresar una Fecha de fin de validez<!-- Data fine Validità -->, fecha a partir de la cual el artículo ya no será considerado válido en la lista de precios<!-- listino -->.

Con el botón **Duplicar listas de precios<!-- Duplica listini -->** es posible crear una nueva lista de precios<!-- listino --> partiendo de la fila del artículo seleccionada. Al hacer clic en el botón duplicar listas de precios<!-- duplica listini -->, se solicitarán los datos obligatorios para la creación de una lista de precios<!-- listino --> y por lo tanto:
-	El proveedor;
-	La fecha de inicio de validez<!-- data inizio validità --> y una posible fecha de finalización;
-	La divisa.
Al hacer clic en OK, se generará la lista de precios<!-- listino --> con los datos ingresados. Podemos observar que ahora los resultados de la búsqueda presentan una fila adicional, que corresponde precisamente a la fila de la nueva lista de precios<!-- listino --> creada.

Al hacer clic en **Descuentos<!-- Sconti -->** en la barra de herramientas, es posible gestionar los descuentos relativos a la fila de artículo seleccionada. El indicador **Borrar los descuentos anteriores<!-- Cancella gli sconti precedenti -->** borra posibles descuentos preexistentes en la lista de precios<!-- listino -->, para ese artículo. En la cuadrícula es posible ingresar los descuentos a insertar en la lista de precios<!-- listino di origine --> para el artículo seleccionado. Para insertar los descuentos es necesario ingresar descuentos pre-codificados, para permitir que la aplicación determine el tipo de descuento y su correspondiente propiedad.
Por lo tanto, ingresamos el tipo y el valor.

Por último, el botón de la barra de herramientas **Reapertura de listas de precios<!-- Riapertura listini -->** permite reabrir una lista de precios<!-- listino --> previamente cerrada, es decir, una lista de precios<!-- listino --> que tenga una Fecha de fin de validez<!-- Data fine validità -->. Al hacer clic en este botón, la fecha de fin de validez se eliminará.

En la barra de herramientas también hay otros botones. Es posible imprimir las filas seleccionadas, crear perfiles en caso de que sea necesario modificar la pantalla, y finalmente es posible crear actividades para asignar a los empleados.