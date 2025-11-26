---
title: Nueva Oportunidad
sidebar_position: 3
ai_generated: true
---

En este formulario se ingresarán todas las informaciones generales relacionadas con la **Oportunidad<!-- Opportunità -->** que se desea crear. La pantalla de la Oportunidad consta de tres partes:

- la primera parte superior muestra eventuales flujos de trabajo (workflows) asociados; cada usuario puede crear su propio workflow según las necesidades CRM de la empresa. Para más detalles, consulte la guía específica sobre Workflows;
- la parte central presenta el Encabezado<!-- Testata --> de la Oportunidad<!-- Opportunità -->, con información general y datos maestros, algunos obligatorios y otros no;
- abajo se encuentran varias pestañas<!-- tab -->, donde se registran las distintas operaciones realizadas y que serán tratadas más adelante en esta guía.

## Gestión de oportunidades<!-- Gestione opportunità -->

*Botones específicos* en la barra ribbon:  
> **Guardar<!-- Salva -->**: botón para guardar la Oportunidad<!-- Opportunità --> y las modificaciones realizadas;  
> **Calcular valores<!-- Calcola valori -->**: botón para recalcular los valores de la oportunidad<!-- opportunità --> en base a la oferta a la que está vinculada.

### Encabezado<!-- Testata -->

**Tipo de oportunidad<!-- Tipo opportunità -->**: sirve para definir el [tipo de Oportunidad<!-- tipologia di Opportunità -->](/docs/configurations/tables/crm/opportunities/opportunity-type) que se está insertando. En el tipo de oportunidad<!-- tipo opportunità --> también se puede indicar un pipeline flow por defecto;

**Número<!-- Numero -->**: es un valor asignado automáticamente por Fluentis que permite identificar de manera única la oportunidad<!-- opportunità -->;

**Título<!-- Titolo -->**: este campo, de llenado obligatorio, permite definir un título para la oportunidad<!-- opportunità --> para identificarla más fácilmente;

**Fecha de creación<!-- Data Creazione -->**: indica la fecha en que se ha insertado la oportunidad<!-- opportunità --> en Fluentis;

**Fecha de cierre<!-- Data di Chiusura -->**: permite indicar una fecha de cierre de la oportunidad<!-- opportunità --> y puede ser utilizada como filtro en la búsqueda de oportunidades<!-- opportunità -->;

**Contacto<!-- Contatto -->**: este campo permite indicar el Contacto al que está asignada la oportunidad<!-- opportunità -->. Hace referencia al registro maestro de [contactos<!-- contatti -->](/docs/crm/home-crm/contacts/new-contact) en el CRM;

**Agente principal<!-- Agente Principale -->**: este dato se recopila automáticamente según lo indicado en el registro maestro del contacto CRM titular de la oportunidad<!-- opportunità -->;

**Moneda<!-- Divisa -->**: indica la moneda en la que deben expresarse los valores de la oportunidad<!-- opportunità -->;

**Tiempo transcurrido desde la última actividad<!-- Tempo Trascorso dall’ultima attività -->**: indica el tiempo transcurrido desde la última actividad ingresada para la oportunidad<!-- opportunità --> en cuestión;

**Probabilidad de éxito<!-- Probabilità Successo -->**: sirve para indicar un % de [probabilidad<!-- probabilità -->](/docs/configurations/tables/crm/opportunities/probability-progress) de éxito vinculada a la oportunidad<!-- opportunità -->;

**Calidad del contacto<!-- Qualità Contatto -->**: sirve para indicar la [calidad<!-- qualità -->](/docs/configurations/tables/crm/contacts/contact-quality) del contacto titular de la oportunidad<!-- opportunità -->;

**Ganada/Perdida<!-- Vinto/Perso -->**: sirve para indicar si la oportunidad<!-- opportunità --> se ha ganado o perdido;

**Motivos<!-- Motivazioni -->**: en este campo es posible seleccionar los [motivos<!-- motivazioni -->](/docs/configurations/tables/crm/opportunities/closing-reason) de la obtención o pérdida de la oportunidad<!-- opportunità -->;

**Descripción<!-- Descrizione -->**: sirve para detallar aún más las razones que llevaron al éxito o la pérdida de la oportunidad<!-- opportunità -->;

**Valor neto<!-- Valore Netto -->**: en este campo se reporta el total del valor de la oportunidad<!-- opportunità --> neto de descuentos; este campo se completa automáticamente al llenar la pestaña<!-- tab --> inferior *Detalle<!-- Dettaglio -->*;

**Importe bruto<!-- Importo Lordo -->**: en este campo se reporta el valor total de la oportunidad<!-- opportunità --> incluyendo los descuentos; este campo se completa automáticamente al llenar la pestaña<!-- tab --> inferior *Detalle<!-- Dettaglio -->*;

**Descuentos<!-- Sconti -->**: en este campo se indica el total de descuentos de la oportunidad<!-- opportunità -->; se completa automáticamente al llenar la pestaña<!-- tab --> inferior *Detalle<!-- Dettaglio -->*;

**Margen bruto previsto<!-- Margine Lordo Previsto -->**: en este campo, de llenado manual, el usuario debe indicar el margen bruto previsto para la oportunidad<!-- opportunità -->;

**Fecha prevista del pedido del cliente<!-- Data prevista dell’ordine cliente -->**: en este campo puede indicar una fecha prevista para la emisión del primer pedido vinculado a la oportunidad<!-- opportunità -->;

**Fecha prevista de albaranes de venta<!-- Data prevista bolle di vendita -->**: en este campo puede indicar una fecha prevista para la emisión del primer albarán relacionado con la oportunidad<!-- opportunità -->;

**Fecha prevista de facturas de venta<!-- Data prevista fatture di vendita -->**: en este campo puede indicar una fecha prevista para la emisión de la primera factura vinculada a la oportunidad<!-- opportunità -->.

En la tercera y última sección de la Gestión de Oportunidades<!-- Gestione Opportunità --> se encuentran 4 pestañas<!-- tab -->:

### Registros de workflow<!-- Workflow logs -->

En esta pestaña<!-- tab --> se visualizan las actividades relacionadas con el flujo de trabajo (workflow) asociado a esta Oportunidad<!-- Opportunità -->. Esta pestaña<!-- tab --> aparece si existe un flujo de trabajo asociado para este elemento.

### Detalle<!-- Dettaglio -->

En esta pestaña<!-- tab --> se muestra el detalle económico de la oferta. Para cada línea de detalle es posible indicar:  
**Familia de Productos<!-- Famiglia Prodotti -->**: hace referencia a la tabla de Familia de productos<!-- Famiglia prodotti -->;  
**Descripción<!-- Descrizione -->**: es la descripción de la Familia de productos<!-- Famiglia Prodotti --> seleccionada anteriormente;  
**Importe bruto<!-- Importo lordo -->**: permite indicar el importe de la oportunidad<!-- opportunità -->, para la familia de productos<!-- famiglia prodotti --> indicada previamente, neto de descuentos;  
**Descuento<!-- Sconto -->**: permite indicar el importe del descuento aplicado para la familia de productos<!-- famiglia prodotti --> indicada previamente;  
**Valor neto<!-- Valore netto -->**: se calcula como diferencia entre los campos **Importe bruto<!-- Importo Lordo -->** y **Descuento<!-- Sconto -->**;  
**Ingresos previstos<!-- Entrate previste -->**: permite indicar el valor estimado real de la línea de la oportunidad<!-- opportunità -->;  
**Fecha prevista de factura de venta<!-- Data prevista fattura di vendita -->**: corresponde a la fecha en la que se prevé facturar la oportunidad<!-- opportunità --> en cuestión;  
**Fecha prevista de albaranes de venta<!-- Data prevista bolle di vendita -->**: corresponde a la fecha en la que se prevé albaranar la oportunidad<!-- opportunità --> en cuestión;  
**Fecha prevista del pedido de venta<!-- Data prevista ordine di vendita -->**: corresponde a la fecha en la que se prevé emitir el pedido para la oportunidad<!-- opportunità --> en cuestión;  
**Fecha de cierre<!-- Data di chiusura -->**: es la fecha en la que la línea en cuestión fue cerrada;  
**Nota<!-- Nota -->**: en este campo es posible indicar eventuales notas de la línea en cuestión.

### Ofertas<!-- Offerte -->

En esta pestaña<!-- tab --> se muestran las ofertas vinculadas a la oportunidad<!-- opportunità -->. Haciendo doble clic en la línea de la oferta se accede al modo de visualización/edición de la propia oferta.  
**Nota<!-- Nota -->**: en este campo es posible indicar notas adicionales.

### Documentos relacionados<!-- Documenti relativi -->
En esta pestaña<!-- tab --> es posible visualizar los archivos adjuntos a la oportunidad<!-- opportunità --> o adjuntar nuevos archivos mediante el procedimiento de arrastrar y soltar (drag and drop).