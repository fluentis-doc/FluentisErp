---
title: Intra1 quater
sidebar_position: 5
ai_generated: true
---

La sección 'quater' de las declaraciones Intrastat contiene los datos de detalle del periodo, relativos a la prestación de servicios<!-- cessione di servizi -->.

La sección se completa automáticamente mediante el procedimiento que toma los datos de los **[tipos de factura](/docs/configurations/tables/sales/invoices-type)<!-- tipi fattura -->** con naturaleza de transacción 'S – servicios<!-- servizi -->'

![](/img/it-it/finance-area/declarations/intrastat/create-intrastat1/intra1-quater/image01.png)

![](/img/it-it/finance-area/declarations/intrastat/create-intrastat1/intra1-quater/image02.png)

 

o bien de los asientos contables<!-- registrazioni contabili --> (no generados por compras/ventas) siempre que tengan líneas de tipo 'IVA Servicio<!-- IVA Servizio -->',

![](/img/it-it/finance-area/declarations/intrastat/create-intrastat1/intra1-quater/image03.png)

pero se permite su modificación e integración manual.

**NOTA**: la transacción contable asociada al asiento contable<!-- causale contabile relativa alla registrazione contabile --> debe tener el indicador INTRASTAT activo y la pestaña correspondiente de Intrastat en el asiento debe estar completada

![](/img/it-it/finance-area/declarations/intrastat/create-intrastat1/intra1-quater/image04.png)

| Función | Significado |
| --- | --- |
| Guardar<!-- Salva --> | Botón para guardar la declaración. |
| [Creación automática](/docs/finance-area/declarations/intrastat/automatic-creation-intrastat1/automatic-creation) | Botón que llama al asistente para importar datos del área de ventas. |
| [Creación desde asientos](/docs/finance-area/declarations/intrastat/create-from-records-intrastat1/create-from-records-intrastat1-intro)<!-- Creazione da registrazioni --> | Botón que llama al asistente para importar datos desde asientos contables<!-- registrazioni di contabilità -->. |
| Eliminar<!-- Cancella --> | Botón para eliminar la línea de detalle seleccionada. |