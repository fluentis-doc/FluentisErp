---
title: Tipos de ofertas de ventas
sidebar_position: 1
---

La tabla se utiliza para determinar las propiedades de una oferta de venta.

El formulario se compone de un área de filtro y de una de resultados. Una vez configurados todos los filtros deseados, basta con hacer clic en el botón **Buscar** para visualizar los resultados dentro de la cuadrícula de resultados.

Para ingresar nuevos registros, es necesario hacer clic en la cuadrícula en la primera fila vacía o presionar el botón **Nuevo  **.

**Código/Descripción**: campos en los que se indica el código y la descripción de la tipología del documento (el código que se ingresa debe ser único).

**Versión modificada**: este indicador indica las tipologías de oferta para las cuales gestionar las versiones.

**Precio incluyendo impuestos**: permite al sistema recuperar el precio de venta de las listas de precios o del registro del artículo y lo presenta con la adición del IVA. Si no encuentra la lista de precios, en caso, por ejemplo, de lista de precios expirada o lista en una moneda no compatible, recupera los costos o los precios del registro del artículo y los presenta incluyendo IVA. Los costos y precios en el registro están en EUR, por lo que el sistema también los convertirá a la moneda del cliente.

**Numeración**: en este campo se debe ingresar el código de numeración correspondiente. Para más información sobre la numeración de documentos, se remite al artículo [Numeraciones Fluentis](/docs/configurations/tables/fluentis-numerations).

**Tipo de orden de venta**: en este campo se indica el tipo de orden de venta a crear en el momento de la conversión de la oferta con el procedimiento adecuado.

**Lista de precios de venta**: este tipo de lista, de tipo genérico, se utiliza para la búsqueda de precios en caso de que en la pestaña de listas de precios del registro del cliente o contacto no haya ningún tipo de lista ingresada. Normalmente se utiliza cuando se hacen ofertas a contactos de CRM que aún no han sido adquiridos como clientes y para los cuales no se han ingresado los tipos de listas en la pestaña Listas del registro.

**Informe y número de copias**: a través de estos campos se define el informe predeterminado y el número de copias a imprimir; recordamos que para imprimir el documento predeterminado es necesario seleccionar *Múltiples informes* en el momento de la impresión.

**Tipo de prototipo de ítem**: este campo contiene la tipología de prototipo de artículo a crear en el procedimiento de creación de prototipos desde el interior de la oferta.

**Tipo de Oportunidad**: si en el Tipo de Oferta se vincula un Tipo de oportunidad, al guardar la Oferta se crea una Nueva Oportunidad si en el encabezado de Oferta no se ingresa una preexistente; si se ingresó, la Oportunidad preexistente se actualiza.

**Gestión de activos fijos y Tipo de operación**: el indicador permite gestionar los activos para este tipo de documento. En el campo siguiente se indica la tipología de operación de los activos, que en el caso de las ventas podrá ser una alienación total, parcial o una destrucción.

**Tipo de descuento/Descripción**: en esta columna es posible asociar la tipología de descuento a proponer cuando los descuentos se ingresan directamente en la columna *Descuentos por artículo* de la cuadrícula de artículos de los documentos (para más detalles vea el artículo [Gestión de Widget de descuentos simplificados](/docs/sales/sales-flow/discount-widget)).