---
title: Nuevo Intervención Planificada (Nuovo Intervento Pianificato)
sidebar_position: 1
---

En esta pantalla es posible insertar una nueva **intervento pianificato**.  
Los datos a ingresar son:

**tipo pianificato**: contiene la tipología de la intervención, codificable en la tabla [Tipo planificado (Tipo pianificato)](/docs/configurations/tables/project-management/planned-type/);  

**numero/data**: contiene el número y la fecha de la intervención planificada;  

**cliente**: contiene el cliente al que está destinada la intervención;  

**contatto**: contiene el eventual *contatto* al que está destinada la intervención;  

**categoria di attività**: contiene la categoría de actividad;  

**progetto**: contiene el [Proyecto (Progetto)](/docs/project-management/projects/search-projects-intro/) vinculado a la intervención;  

**Tickets/Severidad del Ticket (Tickets/Severità Ticket)**: contiene un eventual ticket de referencia con la respectiva severidad;  

**SLA**: es el Service Level Agreement;  

**stato**: contiene el estado de la intervención, entre Planificada, Confirmada, Cerrada o Anulada;  

**data conferma**: contiene la fecha de confirmación de la intervención.

Se presentan luego varias pestañas en las que se pueden ingresar más detalles sobre la intervención planificada.

**Tab Recursos (Tab Risorse)**  
En esta pestaña es posible ingresar la **risorsa** que llevará a cabo la intervención planificada. Los datos a ingresar son:  
**risorsa**: contiene la Recurso;  
**dipendente**: contiene el registro del Empleado asociado;  
**da data pianificata**: contiene la fecha y hora de inicio de la intervención;  
**ora inizio pausa**: contiene la hora de inicio de la pausa;  
**ora fine pausa**: contiene la hora de fin de la pausa;  
**a data pianificata**: contiene la fecha y hora de finalización de la intervención;  
**tempo effettivo**: contiene el tiempo necesario, calculado en base a los campos anteriores;  
**descrizione**: es un campo obligatorio en el que describir la intervención y cualquier nota para el recurso.  
Además, hay algunas marcas que regulan la obligatoriedad o no del **tecnico**, de la **data** y que indican si la actividad es facturable.

![](/img/it-it/project-management/planned-intervention/resource.png)

**Tab Solución (Tab Soluzione)**  
En esta pestaña hay dos áreas que se pueden completar libremente: **soluzione** y **nota**.

**Tab Estimación (Tab Stima)**  
En esta pestaña es posible ingresar una estimación de la intervención planificada a través de estos datos:  
**unità di misura**: contiene la UM a utilizar para cuantificar la intervención;  
**listino di vendita**: es posible vincular un [Lista de precios (Listino)](/docs/sales/sales-price-list/sales-price-list/insert-sales-price-list/) de venta del cual obtener la información;  
**quantità**: es posible completar directamente en esta pestaña el tiempo efectivo, que aparecerá en el campo respectivo en la pestaña Recursos;  
**prezzo netto unitario**: contiene el precio unitario basado en la UM;  
**importo totale**: es un campo calculado en función de los datos ingresados anteriormente;  
**divisa**: indica la moneda a utilizar.

Al seleccionar el proyecto, se proponen los siguientes valores:

- Lista de precios
- Ticket
- Descripción
- Categoría de actividad 
- Facturable
- Actividad de valor agregado
- Artículo (si no se ha ingresado ya)
- Unidad de medida si no ha sido ingresada ya
- Precio neto unitario

El precio neto unitario se actualiza con el valor presente en el proyecto si el artículo ya está presente en la intervención planificada y coincide con el artículo en el proyecto.  
O si el artículo no está presente en la intervención planificada y se asigna desde el proyecto, por lo tanto, el precio también se actualizará con el valor presente en el proyecto.

![](/img/it-it/project-management/planned-intervention/stima.png)

**Tab Documento vinculado (Tab Documento collegato)**  
En esta pestaña es posible visualizar y agregar adjuntos, que serán guardados en el módulo Documental de Fluentis. Para agregar un archivo, simplemente utilice el arrastre y soltado, es decir, seleccionando el archivo de la ubicación donde se encuentra actualmente y soltándolo dentro de la tabla.  
Aparecerá la siguiente pantalla:

![](/img/it-it/project-management/planned-intervention/document.png)

En el campo **tipo documento** en la parte superior del formulario, es posible seleccionar la tipología de documento que se está cargando seleccionándola entre las presentes.  
Al presionar el botón **applica**, ese valor se reflejará en el campo correspondiente para todos los archivos que se están cargando en ese momento. **nome** y **tipo** de archivo se obtienen automáticamente del proceso.  
Al presionar OK, el programa guardará el archivo en el Documental de Fluentis.

**Tab Datos Extra (Tab Extra Data)**  
En esta pestaña es posible ingresar cualquier dato adicional; para más información, consulte la sección [Datos Extra (Extra Data)](/docs/configurations/utility/extra-data/extradata/search-extradata/).