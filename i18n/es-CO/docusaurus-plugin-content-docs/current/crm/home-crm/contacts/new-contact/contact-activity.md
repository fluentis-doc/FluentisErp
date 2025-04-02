---
title: workflow log
sidebar_position: 2
---

Esta es la primera pestaña del formulario de **contatti crm**. Esta pestaña aparece solo si se ha activado un flujo de trabajo para los Contactos CRM que incluya la visualización de la pestaña de registro. Para más información técnica, se remite a la documentación sobre flujos de trabajo.  
El uso de un flujo de trabajo para la gestión de Contactos permite gestionar la relación con el cliente potencial en diferentes etapas. Las distintas etapas del flujo de trabajo pueden incluir diversas actividades para conquistar al cliente, que dependerán del tipo de relación alcanzada en esa etapa determinada: por ejemplo, en la etapa de Calificación será importante realizar una llamada introductoria, mientras que en la etapa de Oportunidad no, porque el cliente ya nos conoce y está evaluando la compra.  

Hay dos pestañas disponibles: Actividades y Registro (Log).

## Actividades

Los campos disponibles en el detalle de las actividades están divididos en 2 cuadros: **attività** y **attività in sospeso**. El primero sirve para detallar la actividad ya realizada, mientras que en el segundo se pueden definir algunas informaciones respecto a la actividad que se deberá realizar después de la ya ingresada.

En el primer cuadro están presentes los siguientes campos:

**tipo attività**: es posible especificar la tipología de actividad realizada para el contacto; las tipologías se definen en la tabla Tipos de Actividad de Arm; según las configuraciones establecidas en el flujo de trabajo, las actividades podrán cambiar dependiendo de la etapa en la que se encuentre el flujo de trabajo;  

**data**: este campo se completa automáticamente por el procedimiento en el momento en que se ingresa el campo **tipo attività**;  

**operatore**: contiene el usuario de Fluentis que realizó la inserción;  

**descrizione attività**: se pueden especificar los detalles de la actividad en este campo.  

En el segundo cuadro se encuentran los siguientes campos:

**data attività in attesa**: este campo se completa automáticamente por el procedimiento en el momento en que se ingresa el campo **tipo attività**;  

**tipo attività**: es posible especificar la tipología de actividad pendiente para el contacto;  

**descrizione attività**: en este campo se puede definir en detalle la actividad que se deberá realizar;  

**data chiusura**: es posible establecer una fecha de vencimiento para la actividad;  

**operatore**: debe definirse el usuario de Fluentis que deberá realizar la actividad;  

**Fecha de inicio/final del recordatorio (Data inizio/fine promemoria)**: en este campo puede indicarse el rango de fechas en el cual se deberá visualizar un recordatorio para la actividad siguiente;  

**crea attività**: marcando esta opción se creará un nuevo elemento en la sección **attività** de Fluentis para el usuario indicado en el campo **operatore**. Esta automatización se activará al momento de guardar el contacto.  

## Registro (Log)

En esta pestaña se visualizan los cambios de estado del flujo de trabajo, indicando: el estado de inicio y de llegada, el operador que realizó la operación, y la fecha.