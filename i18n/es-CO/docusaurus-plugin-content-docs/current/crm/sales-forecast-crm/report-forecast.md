---
title: Impresión de Cierre de Previsiones de venta
sidebar_position: 3
ai_generated: true
---

En esta pantalla es posible importar la documentación y compararla con las [Previsiones de venta<!-- Previsioni di vendita -->](/docs/crm/sales-forecast-crm/new-sales-forecast) previamente creadas, para saber si se han alcanzado los objetivos de la previsión<!-- previsione -->.      
En el encabezado se encuentran los siguientes campos:     
**Operador<!-- Operatore -->**: contiene el operador<!-- Operatore --> que realiza la operación;     
**Tipo de periodo<!-- Tipo periodo -->**: este campo se llena automáticamente al completar el campo siguiente, y sugiere el [Tipo de periodo<!-- Tipo periodo -->](/docs/configurations/tables/crm/sales-forecast/period-type) asociado a la previsión<!-- Previsione -->;      
**Previsión de venta<!-- Previsione di vendita -->**: se requiere ingresar la [Previsión de venta<!-- Previsioni di vendita -->](/docs/crm/sales-forecast-crm/new-sales-forecast) que se desea analizar y comparar con la documentación;     
**Año/Fecha/Número<!-- Anno/Data/Numero -->**: estos campos se completan automáticamente según la Numeración asociada y la fecha actual;     
**Detalle tipo de periodo<!-- Dettaglio tipo periodo -->**: este dato es fundamental para indicar qué Detalle de periodo (tomado de la tabla [Tipo periodo<!-- Tipo periodo -->](/docs/configurations/tables/crm/sales-forecast/period-type)) se debe tomar en consideración;             

En la pestaña **Datos<!-- Dati -->** a continuación, es posible importar la documentación utilizando los botones de la barra de herramientas.  
La pestaña presenta tres cuadrículas, una para cada tipo de documento: Facturas, Pedidos y Oportunidades.      

Existen condiciones para la importación de Facturas y Pedidos:     
- Las líneas de artículos<!-- righe articolo --> de los documentos deben tener una [Clase de artículo<!-- Classe articolo -->](/docs/configurations/tables/logistics/item-class) asociada a la familia de artículo<!-- Famiglia articolo --> incluida en la Previsión de venta<!-- Previsione di vendita -->;
- La [Facturación de ventas<!-- Fatturato vendite -->](/docs/configurations/tables/sales/sales-turnover) asociada a las líneas de artículos<!-- righe articolo --> de los documentos debe estar asociada a la familia de artículo<!-- Famiglia articolo --> incluida en la Previsión de venta<!-- Previsione di vendita -->;      

También existen condiciones para la importación de Oportunidades:       
- El agente asignado a la Previsión de venta<!-- Previsione di vendita --> debe ser el mismo agente asociado al contacto titular de la Oportunidad;      
-  En el Detalle de la Oportunidad, debe estar ingresada la familia de producto prevista en la Previsión de venta<!-- Previsione di vendita -->.