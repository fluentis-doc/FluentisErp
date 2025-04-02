---
title: tipo richiesta di offerta
sidebar_position: 2
---

Esta tabla es fundamental para definir las diversas tipologías de solicitudes de oferta disponibles, cada una con sus propias características. Se puede acceder desde *Configuración > Tablas > Compras > Tipos de solicitud de oferta (Configurazione > Tabelle > Acquisti > Tipi richiesta di offerta)*. 

Los campos presentes son: 

**codice/descrizione**: campos obligatorios para identificar el tipo de solicitud. 

**numerazione**: contiene la [Numeración](/docs/configurations/tables/fluentis-numerations) asociada; 

**tipo ordine fornitore**: contiene el [Tipo de pedido al proveedor](/docs/configurations/tables/purchase/purchase-orders-type) y la respectiva **descripción** que se creará a partir de la RDO, en el procedimiento de [Creación de pedido al proveedor desde oferta de proveedor](/docs/purchase/offer-request/procedures/order-creation). 

**prezzo ivato**: este indicador señala que en las líneas del documento estará presente el Precio ya incluido el IVA. 

**stampa**: en este campo es posible elegir la impresión que se utilizará por defecto (se recuerda que, para imprimir el informe predeterminado, en el proceso de impresión será necesario seleccionar la opción *Impresiones múltiples*); en el siguiente campo es posible indicar un **Número de copias** a imprimir. 

**gestione cespiti**: este indicador señala que la tipología de RDO debe gestionar los activos; en el siguiente campo es necesario indicar el **Tipo de operación**, que en el caso de las compras será siempre un *costo originario*.