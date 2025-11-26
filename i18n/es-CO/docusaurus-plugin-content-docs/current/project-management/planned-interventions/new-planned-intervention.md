---
title: Nuevo Intervención Planificada
sidebar_position: 1
ai_generated: true
---

En esta pantalla es posible ingresar una nueva **Intervención Planificada<!-- Intervento Pianificato -->**.  
Los datos a ingresar son:

**Tipo planificado<!-- Tipo pianificato -->**: contiene el tipo de intervención, codificable en la tabla [Tipo planificado<!-- Tipo pianificato -->](/docs/configurations/tables/project-management/planned-type/);

**Número/Fecha<!-- Numero/Data -->**: contiene el número y la fecha de la intervención planificada;

**Cliente**: contiene el cliente al que está destinada la intervención;

**Contacto**: contiene el posible *Contacto* al que está destinada la intervención;

**Categoría de actividad<!-- Categoria di attività -->**: contiene la categoría de actividad;

**Proyecto**: contiene el [Proyecto](/docs/project-management/projects/search-projects-intro/) vinculado a la intervención;

**Tickets/Severidad Ticket**: contiene un posible ticket de referencia con el nivel de severidad correspondiente;

**SLA**: es el Service Level Agreement;

**Estado**: contiene el estado de la intervención, entre Planificado, Confirmado, Cerrado o Anulado;

**Fecha de confirmación<!-- Data conferma -->**: contiene la fecha de confirmación de la intervención.

Luego están disponibles varias pestañas en las que ingresar información adicional sobre la intervención planificada<!-- intervento pianificato -->.

**Pestaña Recursos<!-- Tab Risorse -->**  
En esta pestaña es posible ingresar el **Recurso<!-- Risorsa -->** que llevará a cabo la intervención planificada<!-- intervento pianificato -->. Los datos a ingresar son:  
**Recurso<!-- Risorsa -->**: contiene el Recurso<!-- Risorsa -->;  
**Empleado<!-- Dipendente -->**: contiene el registro del Empleado<!-- Dipendente --> asociado,  
**Desde fecha planificada<!-- Da data pianificata -->**: contiene la fecha y hora de inicio de la intervención;  
**Hora inicio de pausa<!-- Ora inizio pausa -->**: contiene la hora de inicio de la pausa;  
**Hora fin de pausa<!-- Ora fine pausa -->**: contiene la hora de finalización de la pausa;  
**Hasta fecha planificada<!-- A data pianificata -->**: contiene la fecha y hora de fin de la intervención,  
**Tiempo efectivo<!-- Tempo effettivo -->**: contiene el tiempo necesario, calculado en base a los campos anteriores;  
**Descripción<!-- Descrizione -->**: es un campo obligatorio en el que se debe describir la intervención y cualquier nota para el recurso.

También están presentes algunos indicadores (flags) que regulan la obligatoriedad o no del **Técnico**, la **Fecha** y que indican si la actividad es facturable.

![](/img/it-it/project-management/planned-intervention/resource.png)

**Pestaña Solución<!-- Tab Soluzione -->**  
En esta pestaña están disponibles dos áreas para llenar libremente: **Solución<!-- Soluzione -->** y **Nota**.

**Pestaña Estimación<!-- Tab Stima -->**  
En esta pestaña es posible ingresar una estimación de la intervención planificada<!-- intervento pianificato --> mediante los siguientes datos:  
**Unidad de Medida<!-- Unità di Misura -->**: contiene la UM a utilizar para cuantificar la intervención;  
**Lista de precios de venta<!-- Listino di vendita -->**: es posible vincular una [Lista de precios<!-- Listino -->](/docs/sales/sales-price-list/sales-price-list/insert-sales-price-list/) de venta desde la que obtener la información;  
**Cantidad<!-- Quantità -->**: es posible completar directamente en esta pestaña el tiempo efectivo, que aparecerá en el campo correspondiente en la pestaña Recurso;  
**Precio neto unitario<!-- Prezzo netto unitario -->**: contiene el precio unitario según la UM;  
**Importe total<!-- Importo totale -->**: es un campo calculado en base a los datos ingresados previamente;  
**Divisa**: indica la moneda a utilizar.

Al seleccionar el proyecto, se proponen los siguientes valores: 

- Lista de precios de venta<!-- Listino di vendita -->
- Ticket
- Descripción
- Categoría de actividad<!-- Categoria attività -->
- Facturable<!-- Fatturabile -->
- Actividad de valor agregado<!-- Attività a valore aggiunto -->
- Artículo (si no ha sido ingresado)
- Unidad de medida si no ha sido ingresada
- Precio neto unitario

El precio neto unitario se actualiza con el valor presente en el proyecto si el artículo ya está presente en la intervención planificada<!-- intervento pianificato --> y coincide con el artículo en el proyecto.  
O bien, si el artículo no está presente en la intervención planificada<!-- intervento pianificato --> y es asignado desde el proyecto, el precio también se actualizará automáticamente con el valor presente en el proyecto.

![](/img/it-it/project-management/planned-intervention/stima.png)

**Pestaña Documento vinculado<!-- Tab Documento collegato -->**  
En esta pestaña es posible visualizar y agregar archivos adjuntos, los cuales serán guardados en el módulo Documental de Fluentis. Para agregar un archivo basta con utilizar el "arrastrar y soltar" (drag and drop), es decir, seleccionando el archivo del directorio donde se encuentra actualmente y soltándolo dentro de la tabla.  
Se abrirá entonces la siguiente pantalla:

![](/img/it-it/project-management/planned-intervention/document.png)

En el campo **Tipo de Documento<!-- Tipo Documento -->** en la parte superior del formulario, es posible seleccionar el tipo de documento que se está cargando, eligiéndolo entre los disponibles.  
Luego, al presionar el botón **Aplicar<!-- Applica -->**, este valor se replicará en el campo correspondiente para todos los archivos que se estén cargando en ese momento. **Nombre<!-- Nome -->** y **Tipo** de archivo se obtienen automáticamente con el procedimiento.  
Al presionar OK, el programa guardará el archivo en el Documental de Fluentis.

**Pestaña Extra Data<!-- Tab Extra Data -->**  
En esta pestaña es posible ingresar los posibles Extra Data vinculados; para más información, consulte la sección [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata/).