---
title: stampa chiusura previsioni di vendita
sidebar_position: 3
---

En esta pantalla es posible importar la documentación y compararla con las [Previsiones de ventas (Previsioni di vendita)](/docs/crm/sales-forecast-crm/new-sales-forecast) creadas previamente, para entender si se han alcanzado los objetivos del pronóstico.  
En la cabecera están presentes los siguientes campos:  
**operatore**: contiene el operador que realiza la operación;  
**tipo periodo**: este campo se llena automáticamente al ingresar el siguiente campo, y propone el [Tipo de periodo (Tipo periodo)](/docs/configurations/tables/crm/sales-forecast/period-type) asociado al pronóstico;  
**previsione di vendita**: se requiere ingresar la [Previsión de ventas (Previsioni di vendita)](/docs/crm/sales-forecast-crm/new-sales-forecast) que deseamos analizar y comparar con la documentación;  
**Año/Fecha/Número (Anno/Data/Numero)**: estos campos se llenan automáticamente en base a la numeración asociada y a la fecha actual;  
**dettaglio tipo periodo**: este dato es fundamental para indicar qué detalle de periodo (tomado de la tabla [Tipo de periodo (Tipo periodo)](/docs/configurations/tables/crm/sales-forecast/period-type)) considerar;  

En la pestaña **dati** a continuación, es posible importar la documentación utilizando los botones de la barra de herramientas. La pestaña presenta tres cuadrículas, una para cada tipo de documentos: Facturas, Pedidos y Oportunidades.  
Existen condiciones para la importación de Facturas y Pedidos:  
- Las líneas de artículo de los documentos deben tener una [Clase de artículo (Classe articolo)](/docs/configurations/tables/logistics/item-class) asociada a la Familia de artículo ingresada en el Pronóstico de ventas;  
- El [Facturado de ventas (Fatturato vendite)](/docs/configurations/tables/sales/sales-turnover) asociado a las líneas de artículo de los documentos debe estar asociado a la Familia de artículo ingresada en el Pronóstico de ventas;  

También hay condiciones para la importación de Oportunidades:  
- El Agente asignado al Pronóstico de ventas debe ser el mismo Agente asociado al Contacto titular de la Oportunidad;  
- En el Detalle de la Oportunidad, debe estar ingresada la Familia de producto prevista en el Pronóstico de ventas.