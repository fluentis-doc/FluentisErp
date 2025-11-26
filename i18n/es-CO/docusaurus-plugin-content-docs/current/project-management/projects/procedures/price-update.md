---
title: Actualización de precios de proyecto
sidebar_position: 3
ai_generated: true
---

El procedimiento Actualizar precios **actualiza el precio, la lista de precios de referencia y el código IVA** en las líneas de proyecto<!-- righe progetto -->, las solicitudes de intervención, las intervenciones planificadas y las intervenciones, según los parámetros establecidos en la parte inferior del formulario.

Para obtener más detalles sobre las partes comunes de los formularios, consulte el enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).

## Procedimiento<!-- Procedura -->

1. Configure los **filtros** deseados en la sección de filtros y pulse el botón **Buscar<!-- Ricerca -->** en el menú principal;  
2. Seleccione en la tabla de resultados las filas que desea actualizar;  
La selección se puede hacer manualmente en la tabla de resultados o utilizando los botones **Seleccionar todo<!-- Seleziona tutto -->** o **Deseleccionar todo<!-- Deseleziona tutto -->** en la barra del menú;  
3. Configure el **precio, la lista de precios** y el **código IVA** actualizados en la sección **Precio/IVA<!-- Prezzo/iva -->** en la parte inferior de la ventana;  
4. Pulse **Procesar precios<!-- Elabora prezzi -->** para visualizar la vista previa de los cambios, que aparecerán en las columnas **Nuevo precio<!-- Nuovo prezzo -->** e **IVA**. Si se utilizó una lista de precios para actualizar el precio, la información correspondiente se mostrará en las columnas **Lista de ventas<!-- Listino di vendita -->** y **Fecha de lista<!-- Data listino -->**.

:::note Nota<!-- Note -->
Los cambios en esta fase solo se aplican a la vista previa, aún no son efectivos en los documentos.
:::

5. Defina en la sección de parámetros los **documentos** para los cuales desea aplicar los cambios y las **opciones** relativas a las wbs<!-- wbs --> a actualizar;  
6. Presione **Actualizar<!-- Aggiorna -->** para hacer efectivos los cambios en los documentos.
  
## Precio/IVA<!-- Prezzo/iva -->

**Forzar precio<!-- Forza prezzo -->**: use esta opción si desea indicar el nuevo precio manualmente;

**Actualizar precio y lista con la última lista<!-- Aggiorna prezzo e listino con ultimo listino -->**: si se selecciona, se usará la última lista válida para determinar el nuevo precio;

**Actualizar precio y lista con lista<!-- Aggiorna prezzo e listino con listino -->**: si se selecciona, se usará la lista introducida posteriormente para determinar el nuevo precio;

**Forzar IVA<!-- Forza iva -->**: indique manualmente el código IVA que se debe utilizar para las filas seleccionadas, este se insertará en la columna IVA de la tabla de resultados;

**Actualizar código IVA desde ficha de cliente<!-- Aggiorna codice IVA da anagrafica cliente -->**: el código IVA se determina a partir del valor introducido en la ficha del cliente.
  
## Opciones<!-- Opzioni -->

**Duplicar fila WBS<!-- Duplica riga WBS --> a actualizar**: si se selecciona, las filas wbs<!-- wbs --> a actualizar se duplican en el proyecto<!-- progetto -->;

**Revertir días asignados en la wbs duplicada<!-- Storna giorni assegnati nella wbs duplicata -->**: si se selecciona, los días asignados a la wbs<!-- wbs --> duplicada se revierten de la wbs anterior.
  
## Documentos

**Actualizar filas de proyectos, solicitudes de intervención e intervenciones planificadas vinculadas a la WBS<!-- WBS --> aún no ejecutadas**: cuando se actualizan las filas del proyecto<!-- righe di progetto -->, los documentos de solicitud y de intervención planificada que aún no se han ejecutado se actualizan automáticamente;

**Actualizar intervenciones vinculadas a la WBS<!-- WBS --> aún no facturadas**: en este caso, se actualizarán los datos de la fila del servicio y los datos de la fila vinculada en la pestaña **Plan de facturación<!-- Piano di fatturazione -->**.