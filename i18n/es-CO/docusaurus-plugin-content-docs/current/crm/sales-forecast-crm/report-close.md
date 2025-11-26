---
title: Reporte de Cierre Periódico
sidebar_position: 4
ai_generated: true
---

En esta pantalla es posible actualizar los [Informes de Cierre de previsiones de venta](/docs/crm/sales-forecast-crm/report-forecast) existentes o generar nuevos. Recordamos que estos informes sirven para comparar las previsiones de venta<!-- Previsioni di vendita --> creadas con el sistema documental.         
En la primera cuadrícula se pueden ingresar los siguientes campos:       
**Descripción**: contiene la descripción del reporte;      
**Usuario**: contiene el usuario que creará el reporte;       
**Tipo de oportunidad**: se debe indicar qué [Tipo de oportunidad](/docs/configurations/tables/crm/opportunities/opportunity-type) considerar e imprimir en este reporte;       
**Tipo de factura de venta**: se debe indicar qué [Tipo de factura](/docs/configurations/tables/sales/invoices-type) considerar e imprimir;       
**Tipo de pedido de cliente**: se debe indicar qué [Tipo de pedido](/docs/configurations/tables/sales/sales-order-types) considerar e imprimir.      

Para proceder con la creación del informe, es necesario seleccionar la fila elegida y hacer clic en el botón de la barra de herramientas *Creación de informes de cierre de previsiones de venta<!-- Creazione stampe chiusura previsioni di vendita -->*. Se abrirá entonces una ventana emergente en la que se debe indicar a Fluentis cómo ejecutar el procedimiento, mediante el ingreso de los siguientes filtros:      
**Previsiones de venta<!-- Previsioni di vendita -->**: indicar qué [Previsión de venta](/docs/crm/sales-forecast-crm/new-sales-forecast) incluir en el reporte;     
**Detalles del tipo de período**: indicar qué *Detalle* del [Tipo de Período](/docs/configurations/tables/crm/sales-forecast/period-type) utilizar; el informe considerará solo el período de tiempo indicado en este campo;      
**Empresa**: en este campo indicar en qué empresa realizar la operación.      
Con las respectivas casillas de selección que aparecen debajo, es necesario indicar a Fluentis qué documentos importar en este reporte.          
Una vez confirmados los filtros ingresados, Fluentis buscará un [Informe de cierre<!-- Stampa chiusura -->](/docs/crm/sales-forecast-crm/report-forecast) ya existente (y sin Fecha de cierre cargada) para el mismo usuario y para el mismo detalle de período e insertará las filas, si no están presentes. Si no existe un informe válido preexistente, se creará uno nuevo. Dentro de él se encontrarán los documentos que se ha decidido importar, listos para ser comparados con la Previsión de venta<!-- Previsione di vendita -->.   
  
Existen condiciones para la importación de facturas<!-- Fatture --> y pedidos<!-- Ordini --> en el reporte (las mismas que para la importación de documentos directamente desde el [informe de cierre<!-- Stampa chiusura -->](/docs/crm/sales-forecast-crm/report-forecast))):     
- Las filas de artículos de los documentos deben tener una [Clase de artículo<!-- Classe articolo -->](/docs/configurations/tables/logistics/item-class) asociada a la Familia de artículo<!-- Famiglia articolo --> ingresada en la Previsión de venta<!-- Previsione di vendita -->;
- El [Facturado de ventas<!-- Fatturato vendite -->](/docs/configurations/tables/sales/sales-turnover) asociado a las filas de artículo de los documentos debe estar asociado a la Familia de artículo<!-- Famiglia articolo --> ingresada en la Previsión de venta<!-- Previsione di vendita -->.        

También existen condiciones para la importación de Oportunidades:       
- El agente asignado a la Previsión de venta<!-- Previsione di vendita --> debe ser el mismo agente asociado al contacto titular de la Oportunidad;      
- En el Detalle de la Oportunidad, debe estar ingresada la Familia de producto prevista en la Previsión de venta<!-- Previsione di vendita -->.