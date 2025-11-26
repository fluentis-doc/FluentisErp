---
title: Evasiones
sidebar_position: 7
ai_generated: true
---

El ciclo de evasión<!-- evasione --> en Fluentis está diseñado para gestionar de manera estructurada e integrada todo el flujo operativo de ventas, desde la fase inicial de oferta hasta la fase final de facturación. Cada fase se caracteriza por procedimientos específicos y configuraciones que garantizan una gestión fluida e integrada del flujo de trabajo.

## Conversión de Oferta a Pedido<!-- Conversione da Offerta a Ordine -->

El procedimiento de conversión de una oferta<!-- offerta --> a un pedido de venta puede iniciarse de dos maneras:

- Desde la [Búsqueda de Ofertas<!-- Ricerca Offerte -->](/docs/sales/offers/search-offers): Seleccionando una o más ofertas y haciendo clic en el botón *Conversión*, presente en la barra de herramientas, es posible realizar una conversión masiva.
- Desde la [Cabecera<!-- Testata -->](/docs/sales/offers/insert-offer) de la Oferta: Dentro de la oferta individual, el botón de *Conversión* en la cabecera<!-- testata --> permite convertir la oferta seleccionada en un pedido de venta.

Este procedimiento permite transformar una oferta de venta en un pedido de venta efectivo<!-- ordine di vendita effettivo -->. Para realizar la conversión correctamente, es necesario configurar el [Tipo de pedido<!-- Tipo di ordine -->](/docs/configurations/tables/sales/sales-order-types) deseado en la tabla [Tipo de oferta<!-- Tipo di offerta -->](/docs/configurations/tables/sales/sales-offer-type). Además, la oferta debe tener ingresada una *Fecha de Confirmación<!-- Data di Conferma -->* en la cabecera; de lo contrario, el sistema mostrará un mensaje emergente solicitando la confirmación de la oferta antes de proceder.

Durante el procedimiento de conversión aparece una ventana emergente con diferentes opciones:

- Gestión de Líneas de Oferta: Si algunas líneas de la oferta<!-- offerta --> ya han sido convertidas en pedido, el sistema pregunta al usuario si desea crear un nuevo pedido utilizando todas las líneas de la oferta o solo aquellas que aún no están referenciadas.
- Crear/Actualizar Proyecto: Esta opción permite crear o actualizar un proyecto. Las opciones disponibles son: *Crear Nuevo Proyecto Vacío*, *Crear Nuevo Proyecto desde Oferta*, o *Crear Nuevo Proyecto desde Oferta y Plantilla de Proyecto*. Es necesario especificar el [Tipo de Proyecto<!-- Tipo Progetto -->](/docs/configurations/tables/project-management/project-type) a crear. Si el proyecto ya existe, debe introducirse el nombre del proyecto a actualizar.
- Transferencia de Materiales/Recursos: Esta opción permite transferir los recursos y materiales de la oferta, si es [jerárquica<!-- gerarchica -->](/docs/sales/offers/insert-offer), como líneas de artículo en el pedido.

Una vez confirmada la conversión, el sistema genera un nuevo pedido de cliente utilizando los datos de la oferta y avisa al usuario mediante un mensaje emergente sobre el éxito de la conversión, el número de la oferta convertida, la versión y el número del pedido de cliente generado. La información modificada en el maestro de datos durante la creación de la oferta (por ejemplo, notas del cliente, envío, pagos) también se reflejará en el pedido generado.

## Evasión<!-- Evasione --> de Pedidos a Remitos<!-- DDT -->

El procedimiento de evasión<!-- evasione --> de pedido a Documento de Transporte<!-- Documento di Trasporto --> está disponible en dos modalidades:

- Evasión Masiva desde la [Búsqueda de Pedidos<!-- Ricerca Ordini -->](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders): En la Búsqueda de Pedidos, seleccione uno o más pedidos a despachar y haga clic en Evasión DDT en la barra de herramientas.
- Evasión desde la [Cabecera<!-- Testata -->](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) del Remito: En la cabecera del DDT, utilice el botón Evasión desde Pedido para abrir una ventana de selección de los pedidos confirmados del cliente para transferir al DDT.

Este procedimiento permite transformar uno o varios pedidos de venta en uno o varios Remitos<!-- DDT -->. Antes de iniciar el procedimiento, es necesario configurar el tipo de DDT deseado en la tabla [Tipo de pedido<!-- Tipo di ordine -->](/docs/configurations/tables/sales/sales-order-types). El procedimiento automático permite la creación de DDT sólo si el pedido ha sido impreso y confirmado.

Las condiciones para la evasión<!-- evasione --> son:

- El cliente de los pedidos debe coincidir con el cliente del DDT.
- El pedido a despachar debe tener el indicador "Impreso" y una Fecha de Confirmación de Pedido.
- La tabla "Tipos de DDT" debe tener el indicador "Pedido", lo que indica que el DDT puede generarse a partir de un pedido.
- Si el procedimiento se inicia desde la Búsqueda de Pedidos, los tipos de documentos deben ser compatibles: en la tabla "Tipos de Pedido", el tipo de pedido a despachar debe tener establecido el tipo de DDT correspondiente.

Después de seleccionar los pedidos y configurar los filtros, haciendo clic en *Transferencia* se generará el DDT con los datos del pedido. Si se realiza correctamente, el pedido cambiará automáticamente de estado a "Evadido" o "Parcialmente Evadido".

## Evasión<!-- Evasione --> de Remitos<!-- DDT --> a Facturas

El procedimiento de evasión<!-- evasione --> de DDT a factura puede iniciarse de dos maneras:

- Desde el Menú [Procedimientos<!-- Procedure -->](/docs/sales/sales-invoices/procedures/create-invoices-from-delivery-notes): Diríjase a *Ventas > Facturas de Venta > Procedimientos > Creación desde DDT*.
- Desde la [Cabecera<!-- Testata -->](/docs/sales/sales-invoices/invoicing/sales-invoice) de la Factura de Venta: Utilice el botón *Evasión DDT* en la cabecera de la factura.

Este procedimiento permite crear una o más facturas a partir de uno o varios DDT. El procedimiento consta de tres pestañas principales:

- Valoración: Permite ingresar filtros para seleccionar los DDT a facturar (con estado "Impreso") y especificar la fecha de creación de la factura.
- Parámetros: Configura las opciones de agrupación para la creación de una factura a partir de varios DDT, como la inclusión de DDT de años y periodos de IVA diferentes, tipos de DDT distintos o con tasas de cambio diferentes. También es posible definir el tratamiento de los pagos, readoptando los de la ficha maestra o manteniendo los especificados en los DDT.
- Anteriores: Permite visualizar, filtrar y anular las operaciones de facturación anteriores.

Después de seleccionar los DDT y configurar los parámetros, es posible proceder a la creación de la factura haciendo clic en *Crear Factura desde DDT*.

La evasión<!-- evasione --> de DDT a factura también puede completarse desde la cabecera de la propia factura mediante el botón Evasión DDT.