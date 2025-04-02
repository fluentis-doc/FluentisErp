---
title: aggiornamento prezzi progetto
sidebar_position: 3
---

El procedimiento **aggiorna prezzi** **actualiza el precio, la lista de precios de referencia y el código IVA** en las líneas del proyecto, las solicitudes de intervención, las intervenciones planificadas y las intervenciones según los parámetros establecidos en la parte inferior del formulario.

Para más detalles sobre las partes comunes de los formularios, consulte el enlace [Funcionalidades, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).

## Procedimiento  

1. Configurar los **filtros** deseados en la sección de filtros y presionar el botón **ricerca** en el menú principal;  
2. Seleccionar en la tabla de resultados las líneas a actualizar;  
La selección puede hacerse manualmente en la tabla de resultados o utilizando los botones **seleziona tutto** o **Deseleccionar todo (Deseleziona tutto)** en la barra del menú;  
3. Establecer el **precio, la lista de precios** y el **código IVA** actualizados en la sección **Precio/IVA (Prezzo/iva)** en la parte inferior de la ventana;  
4. Presionar **elabora prezzi** para visualizar la vista previa de los cambios que aparecerán en la columna **nuovo prezzo** y **IVA**. En caso de que se haya utilizado una lista para actualizar el precio, la información relacionada con la lista aparecerá en las columnas **listino di vendita** y **data listino**.

:::note Nota
Los cambios en esta fase solo se aplican a la vista previa y aún no son efectivos en los documentos.
:::

5. Definir en la sección de parámetros los **documentos** a los que se desean aplicar los cambios y las **opciones** relacionadas con las WBS para actualizar;  
6. Presionar **aggiorna** para hacer efectivas las modificaciones en los documentos.

## Precio/IVA (Prezzo/iva)

**forza prezzo**: utilizar esta opción si se desea indicar manualmente el nuevo precio;  

**Actualizar precio y lista con última lista (Aggiorna prezzo e listino con ultimo listino)**: si se selecciona, se usará la última lista válida para determinar el nuevo precio;  

**Actualizar precio y lista con lista (Aggiorna prezzo e listino con listino)**: si se selecciona, se usará la lista ingresada posteriormente para determinar el nuevo precio;  

**forza iva**: indicar manualmente el código IVA a utilizar para las líneas seleccionadas, que se inserta en la columna IVA de la tabla de resultados;  

**aggiorna codice iva da anagrafica cliente**: el código IVA se determina a partir del valor ingresado en el registro del cliente.

## Opciones

**duplica riga wbs da aggiornare**: si se selecciona, las líneas WBS a actualizar se duplican en el proyecto;  

**storna giorni assegnati nella wbs duplicata**: si se selecciona, los días asignados a la WBS duplicada se anulan de la WBS anterior.

## Documentos

**Actualizar líneas de proyectos, solicitudes de intervención e intervenciones planificadas vinculadas a la WBS no aún cumplidas (Aggiorna righe di progetti, richieste intervento e interventi pianificati collegati alla WBS non ancora evasi)**: cuando se actualizan las líneas del proyecto, los documentos de solicitud e intervención planificada que no se han cumplido se actualizan automáticamente;  

**aggiorna interventi collegati alla wbs non ancora fatturati**: en este caso, se actualizarán los datos de la línea de servicio y los datos de la línea vinculada en la pestaña **piano di fatturazione**.