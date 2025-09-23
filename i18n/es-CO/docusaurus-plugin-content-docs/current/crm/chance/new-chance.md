---
title: nuova opportunità
sidebar_position: 3
---

En este formulario se ingresarán toda la información general relacionada con la **Oportunidad** que se desea insertar. La pantalla de la Oportunidad se compone de tres partes:

- la primera parte en la parte superior presenta posibles flujos de trabajo asociados; cada uno puede crear su propio flujo de trabajo según las necesidades del CRM empresarial; se remite a la guía correspondiente sobre Flujos de Trabajo para más detalles;  
- la parte central presenta el Encabezado de la Oportunidad, con la información general y de registro, algunas obligatorias y otras no;  
- debajo se encuentran varias pestañas, que registran las diferentes operaciones realizadas y que se tratarán posteriormente en esta guía.


## Gestión de oportunidades (Gestione opportunità)

*Botones específicos* en la barra de herramientas:  
> **salva**: botón para guardar la Oportunidad y sus modificaciones;  
> **calcola valori**: botón para recalcular los valores de la oportunidad en función de la oferta a la que está vinculada la oportunidad.  

### Encabezado (Testata)    

**tipo opportunità**: se utiliza para definir la [tipología de Oportunidad](/docs/configurations/tables/crm/opportunities/opportunity-type) que se está ingresando. En el tipo de oportunidad también se puede indicar un flujo de trabajo predeterminado;

**numero**: es un valor asignado automáticamente por Fluentis que permite identificar de manera única la oportunidad;

**titolo**: este campo, de obligatoriedad, permite definir un título para la oportunidad para reconocerla más fácilmente;

**data creazione**: esta fecha indica la fecha de ingreso de la oportunidad en Fluentis;

**data di chiusura**: este campo permite indicar una fecha de cierre de la oportunidad y puede funcionar como un filtro en la máscara de búsqueda de oportunidades;

**contatto**: este campo se utiliza para indicar el Contacto a nombre del cual está la oportunidad. Hace referencia al registro de [contactos](/docs/crm/home-crm/contacts/new-contact) del CRM;

**agente principale**: este dato se obtiene automáticamente según lo indicado en el registro del contacto del CRM titular de la oportunidad;  

**divisa**: indica la moneda en la que deberán expresarse los valores de la oportunidad;

**Tiempo Transcurrido desde la última actividad (Tempo Trascorso dall’ultima attività)**: indica el tiempo que ha pasado desde la última actividad registrada para la oportunidad en cuestión;

**probabilità successo**: se utiliza para indicar un % de [probabilidad](/docs/configurations/tables/crm/opportunities/probability-progress) de éxito relacionado con la oportunidad;

**qualità contatto**: se utiliza para indicar la [calidad](/docs/configurations/tables/crm/contacts/contact-quality) del contacto titular de la oportunidad;

**Ganado/Perdido (Vinto/Perso)**: se utiliza para indicar si la oportunidad ha sido ganada o perdida;

**Motivaciones (Motivazioni)**: en este campo es posible seleccionar las [motivaciones](/docs/configurations/tables/crm/opportunities/closing-reason) de la victoria o pérdida de la oportunidad;

**descrizione**: se utiliza para detallar más las motivaciones que llevaron a la ganancia o pérdida de la oportunidad;

**valore netto**: en este campo se reporta el total del valor de la oportunidad neto de descuentos; este campo se completa automáticamente llenando la pestaña inferior *Detalle*;  

**importo lordo**: en este campo se reporta el total del valor de la oportunidad incluyendo los descuentos; este campo se completa automáticamente llenando la pestaña inferior *Detalle*;  

**sconti**: en este campo se reporta el total de descuentos de la oportunidad; este campo se completa automáticamente llenando la pestaña inferior *Detalle*;  

**margine lordo previsto**: en este campo, de llenado manual, debe indicarse por parte del usuario el margen bruto previsto para la oportunidad;

**Fecha prevista del pedido del cliente (Data prevista dell’ordine cliente)**: en este campo es posible indicar una fecha prevista para la emisión del primer pedido relacionado con la oportunidad;

**Fecha prevista de facturas de venta (Data prevista fatture di vendita)**: en este campo es posible indicar una fecha prevista para la emisión de la primera factura relacionada con la oportunidad.

En la tercera y última sección de la Gestión de Oportunidades hay 4 pestañas:

### Registros de flujo de trabajo (Workflow logs)

En esta pestaña se visualizan las actividades relacionadas con el flujo de trabajo asociado a esta Oportunidad. Esta pestaña aparece si para este objeto se prevé un flujo de trabajo asociado.        

### Detalle (Dettaglio)

En esta pestaña se muestra el detalle económico de la oferta. Para cada línea de detalle es posible indicar:  
**famiglia prodotti**: hace referencia a la tabla de Familia de productos;  
**descrizione**: es la descripción de la Familia de Productos seleccionada anteriormente;  
**importo lordo**: permite indicar el importe de la oportunidad, para la familia de productos indicada anteriormente, neto de descuentos;  
**sconto**: permite indicar el importe del descuento aplicado para la familia de productos indicada anteriormente;  
**valore netto**: se calcula como la diferencia entre los campos **importo lordo** y **sconto**;  
**entrate previste**: permite indicar cuál será el valor efectivo previsto de la línea de la oportunidad;  
**data prevista fattura di vendita**: corresponde a la fecha en que se espera facturar la oportunidad en cuestión;  
**data prevista bolle di vendita**: corresponde a la fecha en que se espera generar el documento de la oportunidad en cuestión;  
**Fecha prevista del pedido de venta (Data prevista ordine di vendita)**: corresponde a la fecha en que se espera emitir el pedido para la oportunidad en cuestión;  
**data di chiusura**: es la fecha en que la línea en cuestión se cerró;  
**nota**: en este campo es posible indicar notas eventuales de la línea en cuestión.

### Ofertas (Offerte)

En esta pestaña se muestran las ofertas vinculadas a la oportunidad. Al hacer doble clic en la línea de la oferta, se accede al modo de visualización/modificación de la oferta misma.  
**nota**: en este campo es posible indicar notas adicionales.

### Documentos Relativos (Documenti relativi)  
En esta pestaña es posible visualizar los archivos adjuntos a la oportunidad o proceder a adjuntar nuevos archivos utilizando el procedimiento de arrastrar y soltar (drag and drop).