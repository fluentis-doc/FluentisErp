---
title: Tipos de ofertas de ventas
sidebar_position: 23
---

:::tip[FAst Start]
La tabla está involucrada en el procedimiento de [**Fast Start**](/docs/guide/fast-start)

En caso de que se desee configurar manualmente, consulte la check list de la página enlazada
:::

La tabla se abre a través de la ruta **Tablas > Ventas > Tipos de ofertas de cliente**.

Permite insertar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

El formulario consta de un área de filtro y otra de resultados. Una vez configurados todos los filtros deseados, basta con hacer clic en el botón **Buscar** para visualizar los resultados dentro de la cuadrícula de resultados.

Para insertar nuevos registros es necesario hacer clic en la primera fila vacía de la cuadrícula o presionar el botón **Nuevo**.

**Código/Descripción:** campos en los que se indica el código y la descripción de la tipología del documento (el código que se inserta debe ser único).

**Estructura jerárquica**: al marcar esta casilla, los artículos de la oferta seguirán una estructura jerárquica; para más detalles, consulte la [documentación](/docs/sales/offers/insert-offer) correspondiente.

**Versión modificada**: esta casilla indica los tipos de ofertas para los cuales se gestionarán versiones.

**Precio incluido IVA**: permite al sistema obtener el precio de venta de las listas de precios o de la ficha del artículo y lo muestra con el IVA incluido. Si no encuentra la lista de precios, por ejemplo, en caso de lista caducada o lista en moneda no compatible, recupera los costes o los precios desde la ficha del artículo y los muestra con IVA incluido. Los costes y los precios en la ficha son en EUR, por lo que el sistema también los convertirá a la moneda del cliente.

**Numeración**: en este campo se debe ingresar el código de numeración apropiado. Para más información sobre la numeración de documentos consulte el artículo [Numeraciones Fluentis](/docs/configurations/tables/fluentis-numerations).

**Tipo de orden de venta**: en este campo se indica la [tipología de orden de venta](/docs/configurations/tables/sales/sales-order-types) que se debe crear en el momento de la Conversión de la oferta con el procedimiento correspondiente.

**Lista de precios de venta**: esta lista de precios, de tipo genérico, se utiliza para la búsqueda de precios en caso de que en la pestaña de listas de precios en la ficha del cliente o contacto no haya ningún tipo de lista de precios insertado. Normalmente se utiliza cuando se hacen ofertas a contactos CRM que aún no han sido reconocidos como clientes y para los cuales no se han insertado tipos de listas de precios en la pestaña Listas de Precios de la ficha.

**Imprimir Informe y número de copias**: a través de estos campos se define la impresión por defecto y el número de copias a imprimir; recordamos que para imprimir la impresión por defecto es necesario seleccionar *Múltiples informes* al momento de la impresión.

**Tipo de prototipo de ítem**: este campo contiene la tipología de prototipo de ítem a crear en el procedimiento de creación de prototipo desde dentro de la oferta.

**Tipo de oportunidad**: si en el Tipo de Oferta se vincula un [Tipo de oportunidad](/docs/configurations/tables/crm/opportunities/opportunity-type), al guardar la Oferta se creará una [Nueva Oportunidad](/docs/crm/chance/new-chance) si en el encabezado de la Oferta no hay alguna ya existente insertada; si hay una existente, la Oportunidad existente se actualizará.

**Gestión de activos fijos y Tipo de operación**: la casilla permite gestionar los activos fijos para este tipo de documento. En el campo siguiente se indica la tipología de operación de los activos fijos, que en el caso de las ventas podrá ser una enajenación total, parcial o una destrucción.

**Tipo de descuento/Descripción**: en esta columna es posible asociar el tipo de descuento que se propondrá cuando los descuentos se ingresen directamente en la columna *Descuentos por artículo* de la cuadrícula de artículos de los documentos (para más detalles véase el artículo [Gestión Widget de Descuentos simplificado](/docs/sales/sales-flow/discount-widget)).