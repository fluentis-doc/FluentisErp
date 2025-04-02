---
title: report chiusura periodico
sidebar_position: 4
---

En esta máscara es posible actualizar los [Informes de Cierre de previsiones de ventas (Stampe Chiusura previsioni di vendita)](/docs/crm/sales-forecast-crm/report-forecast) existentes o generar nuevos. Recordamos que estos informes sirven para comparar las previsiones de ventas creadas con la documentación.        
En la primera cuadrícula es posible ingresar los siguientes campos:       
**descrizione**: contiene la descripción del informe;      
**utente**: contiene el usuario que creará el informe;       
**tipo opportunità**: es necesario indicar qué [Tipo de Oportunidad (Tipo opportunità)](/docs/configurations/tables/crm/opportunities/opportunity-type) considerar e imprimir en este informe;       
**Tipo de factura de venta (Tipo fattura di vendita)**: es necesario indicar qué [Tipo de Factura (Tipo fattura)](/docs/configurations/tables/sales/invoices-type) considerar e imprimir;       
**tipo ordine cliente**: es necesario indicar qué [Tipo de Pedido (Tipo ordine)](/docs/configurations/tables/sales/sales-order-types) considerar e imprimir.      

Para proceder con la creación del informe, es necesario seleccionar la fila elegida y hacer clic en el botón de la barra de herramientas *creazione stampe chiusura previsioni di vendita*. A continuación, se abrirá un pop-up en el que se indicará a Fluentis cómo ejecutar el procedimiento, mediante la inserción de los siguientes filtros:      
**previsioni di vendita**: indicar qué [Previsión de venta (Previsione di vendita)](/docs/crm/sales-forecast-crm/new-sales-forecast) insertar en el informe;     
**Detalles de tipo de período (Dettagli tipo periodo)**: indicar qué *Detalle* del [Tipo de Período (Tipo Periodo)](/docs/configurations/tables/crm/sales-forecast/period-type) utilizar; el informe considerará solo el período de tiempo indicado en este campo;      
**società**: en este campo indicar en qué sociedad realizar la operación.      
Con los respectivos indicadores que se encuentran a continuación, es necesario indicar a Fluentis qué documentos importar en este informe.          
Una vez confirmados los filtros ingresados, Fluentis buscará un [Informe de cierre (Stampa chiusura)](/docs/crm/sales-forecast-crm/report-forecast) ya existente (y sin Fecha de cierre) para el mismo Usuario y para el mismo Detalle de período e insertará dentro de él las filas, si no están presentes. En caso de no encontrar un informe válido preexistente, se creará uno nuevo. Dentro de este se encontrarán los documentos que se ha decidido importar, listos para ser comparados con la Previsión de venta.   
  
Existen condiciones para la importación de Facturas y Pedidos en el informe (las mismas que en el caso de la importación de documentos directamente desde el [Informe de cierre (Stampa chiusura)](/docs/crm/sales-forecast-crm/report-forecast)):     
- Las filas de artículos de los documentos deben tener una [Clase de artículo (Classe articolo)](/docs/configurations/tables/logistics/item-class) asociada a la Familia de artículo ingresada en la Previsión de venta;
- El [Facturado en ventas (Fatturato vendite)](/docs/configurations/tables/sales/sales-turnover) asociado a las filas de artículos de los documentos debe estar asociado a la Familia de artículo ingresada en la Previsión de venta.        

También hay condiciones para la importación de Oportunidades:       
- el Agente asignado a la Previsión de venta debe ser el mismo Agente asociado al Contacto titular de la Oportunidad;      
-  En el Detalle de la Oportunidad, debe estar ingresada la Familia de producto prevista en la Previsión de venta.