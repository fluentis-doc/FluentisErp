---
title: Evasiones (Evasioni)
sidebar_position: 7
---

El ciclo de evasión en Fluentis sirve para gestionar de manera estructurada e integrada todo el flujo operativo de ventas, desde la fase inicial de oferta hasta la fase final de facturación. Cada fase está caracterizada por procedimientos específicos y configuraciones que garantizan una gestión fluida e integrada del flujo de trabajo.

## Conversión de Oferta a Pedido (Conversione da Offerta a Ordine)

El procedimiento de conversión de oferta a pedido de venta se puede iniciar de dos maneras:

- Desde la [Búsqueda de Ofertas (Ricerca Offerte)](/docs/sales/offers/search-offers): Seleccionando una o más ofertas y haciendo clic en el botón *conversione* presente en la barra de herramientas, es posible realizar una conversión masiva.  
- Desde la [Cabecera (Testata)](/docs/sales/offers/insert-offer) de la Oferta: Dentro de la oferta individual, el botón de *conversione* en la cabecera permite convertir la oferta seleccionada en un pedido de venta.

Este procedimiento permite transformar una oferta de venta en un pedido de venta real. Para realizar correctamente la conversión, es necesario configurar el [Tipo de pedido (Tipo di ordine)](/docs/configurations/tables/sales/sales-order-types) deseado en la tabla [Tipo de oferta (Tipo di offerta)](/docs/configurations/tables/sales/sales-offer-type). Además, la oferta debe tener una *Fecha de Confirmación (Data di Conferma)* ingresada en la cabecera; de lo contrario, el sistema mostrará un mensaje emergente solicitando la confirmación de la oferta antes de proceder.

Durante el procedimiento de conversión, aparece un pop-up con varias opciones:

- Gestión de las Líneas de Oferta: Si algunas líneas de la oferta ya han sido convertidas en pedido, el sistema pregunta al usuario si desea crear un nuevo pedido utilizando todas las líneas de la oferta o solo aquellas que aún no están referenciadas.  
- Crear/Actualizar Proyecto: Esta opción permite crear o actualizar un proyecto. Están disponibles las opciones: *crea nuovo progetto vuoto*, *crea nuovo progetto da offerta*, o *crea nuovo progetto da offerta e template progetto*. Es necesario especificar el [Tipo de Proyecto (Tipo Progetto)](/docs/configurations/tables/project-management/project-type) a crear. Si el proyecto ya existe, se debe ingresar el nombre del proyecto a actualizar.  
- Transferencia de Materiales/Recursos: Esta opción permite transferir los recursos y materiales de la oferta, si es [jerárquica (gerarchica)](/docs/sales/offers/insert-offer), como líneas de artículo en el pedido.

Una vez confirmada la conversión, el sistema genera un nuevo pedido de cliente utilizando los datos de la oferta y avisa al usuario con un mensaje emergente sobre el éxito de la conversión, el número de la oferta convertida, la versión y el número del pedido de cliente generado. La información modificada en el registro durante la creación de la oferta (por ejemplo, Notas del Cliente, Envío, Pagos) se reflejará también en el pedido generado.

## Evasión de Pedidos a DDT (Evasione da Ordini a DDT)

El procedimiento de evasión de pedido a Documento de Transporte (DDT) está disponible de dos maneras:

- Evasión Masiva desde la [Búsqueda de Pedidos (Ricerca Ordini)](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders): En la Búsqueda de Pedidos, seleccione uno o más pedidos a evadir y haga clic en Evasión DDT en la barra de herramientas.  
- Evasión desde la [Cabecera (Testata)](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) del DDT: En la Cabecera del DDT, utilice el botón Evasión desde Pedido para abrir una ventana de selección de los pedidos confirmados del cliente a transferir al DDT.

Este procedimiento permite transformar uno o más pedidos de venta en uno o más DDT. Antes de iniciar el procedimiento, es necesario configurar el tipo de DDT deseado en la tabla [Tipo de pedido (Tipo di ordine)](/docs/configurations/tables/sales/sales-order-types). El procedimiento automático permite la creación de DDT solo si el pedido está impreso y confirmado.

Las condiciones para la evasión son:

- El cliente de los pedidos debe coincidir con el cliente del DDT.
- El pedido a evadir debe tener el indicador "Impreso" y una Fecha de Confirmación de Pedido.
- La tabla "Tipos de DDT (Tipi DDT)" debe tener el indicador "Pedido", que indica que el DDT puede generarse a partir de un pedido.
- Si el procedimiento se inicia desde la Búsqueda de Pedidos, los tipos de documento deben ser compatibles: en la tabla "Tipos de Pedido (Tipi Ordine)", el tipo de pedido a evadir debe tener configurado el tipo de DDT correspondiente.

Después de seleccionar los pedidos y establecer los filtros, al hacer clic en *Transferencia* se generará el DDT con los datos del pedido. Si se realiza correctamente, el pedido cambiará automáticamente a estado "Evadido" o "Parcialmente Evadido".

## Evasión de DDT a Facturas (Evasione da DDT a Fatture)

El procedimiento de evasión de DDT a factura puede iniciarse de dos maneras:

- Desde el Menú [Procedimientos (Procedure)](/docs/sales/sales-invoices/procedures/create-invoices-from-delivery-notes): Ir a *Ventas (Vendite) > Facturas de Venta (Fatture di Vendita) > Procedimientos (Procedure) > Creación de DDT (Creazione da DDT)*.  
- Desde la [Cabecera (Testata)](/docs/sales/sales-invoices/invoicing/sales-invoice) de la Factura de Venta: Utilizando el botón *Evasión DDT* en la cabecera de la factura.

Este procedimiento permite crear una o más facturas a partir de uno o más DDT. El procedimiento se compone de tres pestañas principales:

- Valoración: Permite ingresar filtros para seleccionar los DDT a facturar (con estado "Impreso") y especificar la fecha de creación de la factura.  
- Parámetros: Configura las opciones de agrupamiento para la creación de una factura de múltiples DDT, como la inclusión de DDT de diferentes años y períodos de IVA, tipos de DDT diferentes o con diferentes tipos de cambio. También se puede definir el tratamiento de los pagos, restableciendo los de la base de datos o manteniendo los especificados en los DDT.  
- Anteriores: Permite visualizar, filtrar y cancelar las operaciones de facturación anteriores.

Después de seleccionar los DDT y establecer los parámetros, es posible proceder con la creación de la factura haciendo clic en *Creación de Factura desde DDT (Creazione Fattura da DDT)*.

La evasión de DDT a factura también se puede completar desde la cabecera de la factura misma a través del botón Evasión DDT.