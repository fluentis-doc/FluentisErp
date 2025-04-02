---
title: Evasiones (Evasioni)
sidebar_position: 5
---

El ciclo de **evasione** en Fluentis sirve para gestionar de manera estructurada e integrada todo el flujo operativo de compra, desde la fase inicial de solicitud de compra hasta la fase final de facturación. Cada fase se caracteriza por procedimientos específicos y configuraciones que garantizan una gestión fluida e integrada del flujo de trabajo.

## Conversión de Oferta a Pedido (Conversione da Offerta a Ordine)

El procedimiento de **conversión de oferta de proveedor a orden de compra** puede ser iniciado:

- Desde el Menú [Procedimientos](/docs/purchase/offer-request/procedures/order-creation): yendo a *Compras > Solicitudes de Oferta > Procedimientos > Creación de Orden de proveedor desde Oferta de proveedor*.

Este procedimiento permite transformar una solicitud de oferta en un pedido de compra efectivo.  
Para realizar la conversión, es necesario configurar el Tipo de orden de proveedor deseado en la tabla [Tipo de solicitud de oferta](/docs/configurations/tables/purchase/purchase-offer-type).

Durante el procedimiento de conversión, aparece un pop-up con las siguientes opciones:  
- **richiesta di offerta**: permite crear un pedido de compra para cada solicitud de oferta.  
- **conto**: permite agrupar las solicitudes de oferta por proveedor.  
- **chiudi le offerte collegate**: inserta una *Fecha de cierre* para las RDO convertidas en pedidos de compra.

Una vez confirmada la conversión, el sistema genera un nuevo pedido de proveedor utilizando los datos de la solicitud de oferta y notifica al usuario con un mensaje pop-up sobre el éxito de la conversión.

Para más detalles sobre el procedimiento, se remite a la página correspondiente de la documentación.

## Conversión de Solicitud de Compra a Pedido (Conversione da Richiesta di Acquisto a Ordine)

El procedimiento de **creación de Orden de proveedor desde Solicitud de Compra** puede ser iniciado:

- Desde el Menú [Procedimientos](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests): yendo a *Compras > Órdenes de Proveedores > Procedimientos > Creación automática de órdenes*.

Este procedimiento permite la creación de uno o más pedidos de compra a partir de una o más solicitudes de compra y consta de cinco pestañas:

- **filtro da**: permite ingresar filtros para seleccionar las RDA (con estado "Autorizada") a convertir en pedido.  
- **scelta fornitore**: permite realizar la elección del proveedor al que se le asignará el pedido basándose en diferentes criterios, como: mejor precio de compra, proveedor preferente por defecto, mejor condición de pago, etc.  
- **prototipi ordine**: muestra el resumen del pedido a crear y permite generar un nuevo pedido o agregar las líneas de artículo a un pedido existente.  
- **parametri**: configura las opciones de creación del pedido, como el tipo de pedido a crear y los datos a utilizar si no están codificados para cada artículo. También se puede optar por considerar las disponibilidades provenientes de las diversas áreas del sistema.  
- **operazioni**: permite visualizar, filtrar y anular las operaciones anteriores.

Una vez confirmado el prototipo de pedido, al hacer clic en el botón *Generar órdenes de proveedor (Genera ordini fornitore)*, el sistema creará los pedidos de compra en base a los parámetros seleccionados.

El mismo procedimiento puede ser utilizado para la creación de **Órdenes de proveedor desde Órdenes de cliente**. Para más detalles, se remite a la página correspondiente [página](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests) de la documentación.

## Evasión de Pedidos a DDT (Evasione da Ordini a DDT)

El procedimiento de **ddt** está disponible en dos modalidades:

- Desde el Menú [Procedimientos](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders): yendo a *Compras > DDT de Compra > Procedimientos > Evasión de pedidos*.  
- Evasión desde la [Cabecera](/docs/purchase/purchase-delivery-note/insert-purchase-delivery-note/purchase-delivery-note) del DDT: utilizando el botón *Evasión de Pedido* para abrir una ventana de selección de los pedidos confirmados del proveedor a transferir al DDT.

Este procedimiento permite transformar uno o más pedidos de compra en uno o más DDT. Antes de iniciar el procedimiento, es necesario configurar el tipo de DDT deseado en la tabla [Tipos de orden de proveedor](/docs/configurations/tables/purchase/purchase-orders-type/). El procedimiento automático permite la creación de DDT solo si el pedido está impreso y confirmado.

Las condiciones para la evasión son:

- El proveedor de los pedidos debe coincidir con el proveedor del DDT.  
- El pedido a evadir debe tener el indicador "Impreso" y una *Fecha de Confirmación* de pedido.  
- Para la segunda modalidad, el *Tipo de orden* debe tener un *Tipo de bolla de entrega* asociado.

Las condiciones de agrupamiento de los pedidos en DDT pueden definirse en los [Parámetros de agrupamiento DDT de compra](/docs/configurations/parameters/purchase/dn-grouping).

Después de seleccionar los pedidos y establecer los filtros, al hacer clic en *Transferencia* se generará el DDT con los datos del pedido. Si la evasión se ha realizado correctamente, el pedido cambiará automáticamente su estado a *"Evasado"* o *"Parcialmente Evasado"*.

La evasión de pedido a DDT también se puede completar desde la cabecera de la factura misma a través del botón *Evasión de pedido*.

## Evasión de DDT a Facturas (Evasione da DDT a Fatture)

El procedimiento de **evasión de DDT a factura** puede ser iniciado de dos maneras:

- Desde el Menú [Procedimientos](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization): yendo a *Compras > Facturas de compra > Procedimientos > Valorización DDT de compra*.  
- Desde la [Cabecera](/docs/purchase/purchase-invoices/insert-purchase-invoice/purchase-invoice) de la Factura de Venta: utilizando el botón *Evasión DDT* en la cabecera de la factura.

Este procedimiento permite crear una o más facturas a partir de uno o más DDT. El procedimiento se compone de tres pestañas principales:

- **valorizzazione**: permite ingresar filtros para seleccionar los DDT a facturar (con estado "Controlado") y especificar la fecha de creación de la factura.  
- **parametri**: configura el tipo de factura a crear, si no se indica en la tabla [Tipos de DDT](/docs/configurations/tables/purchase/purchase-delivery-notes-type/) y los referencias DDT a incluir en la factura.  
- **precedenti**: permite visualizar, filtrar y anular las operaciones de facturación previas.

Las condiciones de agrupamiento de los DDT en la factura pueden definirse en los [Parámetros de agrupamiento de factura de compra](/docs/configurations/parameters/purchase/invoice-grouping/).

Después de seleccionar los DDT y configurar los parámetros, se puede proceder con la creación de la factura haciendo clic en *Valorización DDT de compra*.

La evasión de DDT a factura también se puede completar desde la cabecera de la factura misma a través del botón *Evasión DDT*.