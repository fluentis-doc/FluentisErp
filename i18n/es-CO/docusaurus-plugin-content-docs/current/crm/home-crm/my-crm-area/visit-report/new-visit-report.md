---
title: Nuevo Informe de Visita (Nuovo Visit Report)
sidebar_position: 2
---

El procedimiento para crear un nuevo **visit report** permite definir las características de la visita realizada por el contacto.  

El formulario se divide en dos partes.  
En la parte superior se encuentran los siguientes campos:

**tipo visit report**: permite indicar el tipo de Informe de Visita que se está ingresando y hace referencia a la tabla del mismo nombre, compuesta por *codice* y *descrizione*.  
**numero**: es el número del Informe de Visita, asignado automáticamente por Fluentis.  
**data**: es la fecha relativa a la visita y se establece con la fecha actual.  
**oggetto**: en este campo se debe indicar la razón de la visita al cliente.  
**nota**: campo libre para la inclusión de notas adicionales relacionadas con la visita.  
**Contacto/Cliente (Contatto/Cliente)**: en este campo se debe indicar el contacto de CRM o el cliente al que hace referencia el Informe de Visita. La etiqueta del campo y el objeto de referencia del mismo cambian dependiendo de si se marca el indicador en la opción *Contacto CRM* o en la opción *conto fluentis*.  
**partecipanti**: en este campo, de llenado libre, deben indicarse los sujetos que participaron en el encuentro.  
**agente**: en este campo, que hace referencia al registro de agentes de Fluentis, debe indicarse el agente que estuvo presente en el encuentro, si aplica.

La parte inferior del formulario presenta, en cambio, dos pestañas.

## Doc. (Doc.)

En esta pestaña generalmente se completa el verdadero informe creado durante la visita. Este documento puede contener varias informaciones, según el tipo de visita realizada. Por esta razón, en la cuadrícula se puede seleccionar un [Template (Template)](/docs/crm/budget-marketing-automation/template/template-search) para utilizar como base del informe y completarlo con la información del cliente. Por lo tanto, es necesario crear previamente varios templates para tenerlos disponibles durante la visita y poder utilizarlos.  
En la parte derecha se mostrará el template seleccionado y será posible completarlo. También es posible ingresar los datos necesarios para el envío por correo electrónico del documento.  
Para la gestión del template están disponibles las siguientes secciones:  
- **email**: esta pestaña contiene:  
> - *stampa*: permite imprimir la hoja de trabajo;  
> - *anteprima di stampa*: permite visualizar la impresión en pantalla de la hoja de trabajo como vista previa;  
> - *salva*: permite guardar una copia del documento;  
> - *undo*: cancela la última modificación al template;  
> - *redo*: restaura la última modificación cancelada al template.

- **home**: esta pestaña contiene los botones para las funcionalidades básicas relacionadas con la edición de texto del Template, tales como las tamaños de fuente, listas, alineación de texto, etc.  
Recuerda las funciones básicas de los editores de texto más comunes, como Microsoft Word.

- **Insertar (Insert)**: esta pestaña contiene los botones para insertar algunos elementos en el Template:  
> - *inserisci tabella*: permite insertar una tabla dentro de la hoja de trabajo;  
> - *Alinear imagen (Allinea Immagine)*: permite insertar una imagen en el cuerpo del documento;  
> - *immagine*: permite insertar una imagen en el cuerpo del documento;  
> - *Marcador (Bookmark)*: permite insertar un marcador dentro del template;  
> - *Hipervínculo (Hyperlink)*: permite insertar un enlace a una página web o a un marcador del template;  
> - *header*: permite insertar el encabezado del template;  
> - *Pie de página (Footer)*: permite insertar el pie de página del template;  
> - *Número de página (Page Number)*: sirve para indicar el número de página en el encabezado o en el pie de página del Template;  
> - *Conteo de páginas (Page Count)*: sirve para indicar el número total de páginas del template en el encabezado o en el pie de página;  
> - *Caja de texto (Text Box)*: permite insertar una caja de texto en el Template;  
> - *Símbolo (Symbol)*: sirve para insertar un símbolo especial dentro del Template.

- **Combinar datos (Merge data)**: en esta pestaña están los botones necesarios para la gestión e inclusión de los merge data.  
> - *Insertar campo combinado (Insert Merge Field)*: el botón permite insertar los merge data seleccionándolos de una lista basada en la fuente de datos a la que hace referencia el Template;  
> - *Ver datos combinados (View Merged Data)*: el botón permite ocultar/mostrar los merge data insertados en el template;  
> - *Mostrar todos los códigos de campo (Show All Field Codes)*: el botón sirve para mostrar los códigos de los campos utilizados como merge data;  
> - *Mostrar todos los resultados de campo (Show All Field Results)*: el botón sirve para mostrar el resultado de la extracción de los campos utilizados como merge data;  
> - *Primer registro (First Record)*: permite posicionarse en el primer registro extraído de los merge data;  
> - *Registro anterior (Previous record)*: permite posicionarse en el registro anterior al actual extraído de los merge data;  
> - *Registro siguiente (Next record)*: permite posicionarse en el registro siguiente al actual extraído de los merge data;  
> - *Último registro (Last Record)*: permite posicionarse en el último registro extraído de los merge data.

## Documentos adjuntos (Documenti allegati)

En esta pestaña se pueden consultar los documentos adjuntos. Para adjuntar documentos, se pueden seguir dos métodos:

- utilizando el botón en la barra de herramientas Documentos, se puede elegir si adjuntar un documento ya codificado en Fluentis o crear un nuevo Documento para adjuntar.  
- utilizando directamente en la cuadrícula el botón derecho y seleccionando Adjuntar archivo, se creará un nuevo Documento para adjuntar.