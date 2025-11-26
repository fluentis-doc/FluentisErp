---
title: Nuevo Visit Report
description: Guía paso a paso para crear un nuevo Visit Report en Fluentis ERP, con todos los campos del formulario explicados.
keywords: [Fluentis ERP, Visit Report, CRM, guía, procedimiento]
sidebar_position: 2
schema_type: HowTo
ai_generated: true
---

# Creación de un nuevo Visit Report<!-- Creazione di un nuovo Visit Report -->

El procedimiento para crear un nuevo **Visit Report** permite definir las características de la visita realizada por el contacto.

## Estructura del formulario<!-- Struttura della form -->

El formulario está dividido en dos partes: superior e inferior.

### Parte superior

Los campos principales son:

1. **Tipo Visit Report**: permite indicar el tipo de Visit Report que se está ingresando, hace referencia a la tabla homónima (*Código* y *Descripción*).  
2. **Número**: número asignado automáticamente por Fluentis.  
3. **Fecha**: fecha de la visita, configurada con la fecha actual.  
4. **Asunto**: motivo de la visita al cliente.  
5. **Nota**: campo libre para notas adicionales.  
6. **Contacto/Cliente**: indica el contacto CRM<!-- contatto CRM --> o el cliente<!-- cliente -->; el campo cambia de etiqueta y objeto según la selección (*Contacto CRM<!-- Contatto CRM -->* o *Cuenta Fluentis<!-- Conto Fluentis -->*).  
7. **Participantes**: indicar los sujetos que participaron en el encuentro.  
8. **Agente**: referencia al maestro de agentes; indicar el agente presente en el encuentro, si está disponible.  

### Parte inferior

La parte inferior del formulario presenta dos pestañas.

#### Documento

En esta pestaña, generalmente, se completa el propio informe creado durante la visita. Este documento puede contener diversas informaciones, según el tipo de visita realizada. Por este motivo, en la cuadrícula es posible seleccionar una [Plantilla<!-- Template -->](/docs/crm/budget-marketing-automation/template/template-search) para usar como base del informe y completarla con la información del cliente<!-- cliente -->. Es necesario, entonces, crear previamente las distintas plantillas para tenerlas disponibles en la fase de visita y poder utilizarlas. 
En la parte derecha se visualizará la plantilla seleccionada y se podrá completarla. Además, es posible ingresar los datos necesarios para el envío por correo electrónico del documento.            
Para la gestión de la plantilla están disponibles las siguientes secciones:     
- **Email**: esta pestaña contiene:     
> - *Imprimir*: permite imprimir la hoja de trabajo;
> - *Vista previa de impresión*: permite hacer una impresión en pantalla previa de la hoja de trabajo;
> - *Guardar*: permite guardar una copia del documento;
> - *Deshacer*: elimina la última modificación hecha a la plantilla;
> - *Rehacer*: restaura la última modificación eliminada de la plantilla.

- **Inicio**: esta pestaña contiene los botones para las funciones básicas relacionadas con la edición del texto de la plantilla, como el tamaño de la fuente, listas, alineación del texto, etc.
Recoge las funciones básicas de los editores de texto más utilizados, como Microsoft Word.

- **Insertar**: esta pestaña contiene los botones para insertar algunos elementos en la plantilla:
> - *Insertar tabla*: permite insertar una tabla dentro de la hoja de trabajo;
> - *Alinear imagen*: permite insertar una imagen en el cuerpo del documento;
> - *Imagen*: permite insertar una imagen en el cuerpo del documento;
> - *Marcador*: permite insertar un marcador dentro de la plantilla;
> - *Hipervínculo*: permite insertar un enlace a una página web o a un marcador de la plantilla;
> - *Encabezado*: permite insertar el encabezado de la plantilla;
> - *Pie de página*: permite insertar el pie de página de la plantilla;
> - *Número de página*: permite indicar el número de página en el encabezado o en el pie de página de la plantilla;
> - *Conteo de páginas*: permite indicar el número total de páginas de la plantilla en el encabezado o el pie de página;
> - *Caja de texto*: permite insertar una caja de texto en la plantilla;
> - *Símbolo*: permite insertar un símbolo especial dentro de la plantilla.

- **Combinar datos**: en esta pestaña están disponibles los botones necesarios para la gestión e inserción de los datos combinados (merge data).
> - *Insertar campo combinado*: el botón permite insertar los datos combinados seleccionándolos de una lista basada en la fuente de datos a la que hace referencia la plantilla;
> - *Ver datos combinados*: el botón permite ocultar/visualizar los datos combinados insertados en la plantilla;
> - *Mostrar todos los códigos de campo*: el botón sirve para mostrar los códigos de los campos utilizados como datos combinados;
> - *Mostrar todos los resultados de campos*: el botón sirve para mostrar el resultado de la extracción de los campos utilizados como datos combinados;
> - *Primer registro*: permite ubicarse en el primer registro extraído de los datos combinados;
> - *Registro anterior*: permite ubicarse en el registro anterior respecto al actual extraído de los datos combinados;
> - *Registro siguiente*: permite ubicarse en el registro siguiente respecto al actual extraído de los datos combinados;
> - *Último registro*: permite ubicarse en el último registro extraído de los datos combinados.

#### Documentos adjuntos<!-- Documenti allegati -->

En esta pestaña es posible consultar los documentos adjuntos. Para adjuntar documentos se pueden seguir dos métodos:

- Usando el botón de la barra de herramientas Documentos se puede elegir si adjuntar un documento ya codificado en Fluentis o crear un nuevo documento para adjuntar.
- Usando directamente en la cuadrícula el botón derecho y seleccionando Adjuntar archivo, se crea un nuevo documento para adjuntar.