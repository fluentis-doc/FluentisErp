---
title: Tipo de Solicitud de Oferta
sidebar_position: 2
---

Esta tabla es fundamental para definir las diversas tipologías de solicitudes de oferta disponibles, cada una con sus propias características. Se puede acceder desde *Configuración > Tablas > Compras > Tipo de solicitud de oferta*. 

Los campos presentes son: 

**Código/Descripción**: campos obligatorios para identificar el tipo de solicitud. 

**Numeración**: contiene la [Numeración](/docs/configurations/tables/fluentis-numerations) asociada; 

**Tipo de orden de compra**: contiene el [Tipo de orden de compra](/docs/configurations/tables/purchase/purchase-orders-type) y la respectiva **descripción** que se creará a partir de la RDO, en el procedimiento de [Creación de orden de compra desde oferta de proveedor](/docs/purchase/offer-request/procedures/order-creation). 

**Precio incluyendo impuestos**: este indicador señala que en las líneas del documento estará presente el Precio ya incluido el IVA. 

**Imprimir Informe**: en este campo es posible elegir la impresión que se utilizará por defecto (se recuerda que, para imprimir el informe predeterminado, en el proceso de impresión será necesario seleccionar la opción *Impresiones múltiples*); en el siguiente campo es posible indicar un **Número de copias** a imprimir. 

**Gestión de activos fijos**: este indicador señala que la tipología de RDO debe gestionar los activos; en el siguiente campo es necesario indicar el **Tipo de operación**, que en el caso de las compras será siempre un *Valor de compra*.