---
title: Tipos de notas de entrega
sidebar_position: 18
---

:::tip[FAst Start]
La tabla está involucrada en el procedimiento de [**Fast Start**](/docs/guide/fast-start)

En caso de que desee configurarlo manualmente, consulte la check list de la página enlazada
:::

La tabla se abre a través de la ruta **Tablas > Ventas > Tipos de notas de entrega** y se utiliza para determinar las propiedades de un DN.

Permite ingresar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

El formulario consta de un área de filtro y una de resultados. Una vez que haya configurado todos los filtros deseados, simplemente haga clic en el botón **Buscar** para visualizar los resultados dentro de la cuadrícula de resultados.

Para poder ingresar nuevos registros es necesario hacer clic en la cuadrícula en la primera fila vacía o presionar el botón **Nuevo**. 

**Tipo DN /Descripción tipo DN**: tipo y descripción del tipo de DN. El código del DN debe ser único;

**Numeración:** en este campo debe ingresar el código de la numeración apropiada. Para más detalles consulte el artículo relacionado con las [numeraciones de Fluentis](/docs/configurations/tables/fluentis-numerations);

**Naturaleza DN**: en este campo debe ingresar la naturaleza del DN: entrega, devolución, c/visión y devolución c/visión. Este valor deberá seleccionarse de una lista;

**Orden**: si está activo, este flag indica que el DN puede ser gestionado a partir de un pedido de cliente;

**Valores**: si está activo, este flag hace que en la impresión del DN se muestren los valores de las filas de artículos presentes en el documento;

**Tipo de factura/Descripción tipo de factura**: en estos campos se definirá el tipo de factura que se utilizará para crear la factura a partir del DN mediante el [procedimiento](/docs/sales/sales-invoices/procedures/create-invoices-from-delivery-notes) correspondiente. Es posible crear la factura desde el DN solo si este campo está completado con el tipo de factura;

**Razón del transporte**: en este campo se debe ingresar la descripción de la razón de transporte; se trata de un campo de texto libre donde indicar la razón que se propondrá en el DN;

**Control del cliente**: si está activo, este flag permite al sistema realizar un control sobre el tipo de anagráfico de la cuenta/cuenta detallada que se ha ingresado en el documento para verificar que sea obligatoriamente un cliente. Si no es así, el sistema avisará al usuario mostrando un mensaje de error. Se recomienda activar este flag en todos los tipos de notas de entrega;

**Bloquea Doc. Impreso**: si está activo, este flag no permite modificar un DN que ya esté marcado como Impreso en el encabezado;

**Crédito**: si está activo, el DN con este tipo estará sujeto al control del límite de crédito;

**Excluir bloqueo**: si está activo, el sistema para este tipo de DN no considerará el bloqueo del documento debido a un eventual sobrepaso del límite de crédito, pero permitirá igualmente al usuario ingresarlo e imprimirlo;

**Flujo de caja**: si está activo, el tipo de DN participa en el cálculo del [flujo de caja](/docs/treasury/cash-flow/cash-flow/search-cash-flow).

**Almacén/Descripción de almacén**: en estos campos se debe ingresar el almacén de llegada de la mercancía contenida en los DN de este tipo. Este valor se utilizará como valor por defecto;

**Plantilla de almacén/Descripción de plantilla de almacén**: en estos campos, en cambio, se debe indicar la causal de movimiento de la mercancía que llega contenida en los DN de este tipo;

**Cantidad de pedido no consumida**: si se activa este flag, al gestionar este tipo de DN, las cantidades ejecutadas del documento de gestión se reportarán divididas por línea de artículo, sin sumar las cantidades;

**Agric. Adq. IVA**: si está activo, durante la creación del DN, el sistema verificará si para el artículo utilizado existe un código de IVA agrícola; de lo contrario, se usará el código de IVA presente en el anagráfico del artículo;

**Controla Picking Descargado**: si está activo, cuando se crea un DN desde un Picking descargado, se activa automáticamente el flag descargado para el DN. Se recomienda activar siempre este flag si se utiliza la gestión de recolección;

**Bloquear Cantidad de Picking**: si está activo, bloquea la cantidad y la cantidad alternativa en el DN creado a partir de la lista UDC. Se recomienda activar siempre este flag si se utiliza la gestión de recolección y UDC;

**Permite descarga de lotes no disponibles**: si está activo, permite también la descarga de los lotes no disponibles;

**Gestión EDI**: si está activo, para el DN de este tipo es posible crear un archivo EDI;

**Precio incluido IVA**: si está activo, el sistema recupera el precio de venta desde listas de precios o desde el anagráfico del artículo y lo muestra con el IVA incluido. Si no encuentra la lista de precios (por ejemplo, lista caducada o lista en moneda no compatible) recupera los costes o los precios del anagráfico del artículo y los muestra incluyendo el IVA.

Los costes y precios en el anagráfico están en EUR, por lo que el sistema también los convertirá a la moneda del cliente.

**Verificar lotes:** si está activo, verifica que los lotes sean congruentes para los artículos;

**Gestión de Matrices de Datos Adicionales**: si está activo, permite visualizar, en el caso de gestión de artículos con matriz, una pestaña adicional para ingresar valores de cantidades por cada celda individual de la matriz. Si no está activo, no se visualizará esta pestaña ni la matriz correspondiente.

**Gestión de activos fijos**: este flag habilita la gestión de activos fijos en el tipo de factura y en el campo siguiente se debe especificar el tipo de operación de los activos;

**Tipo de operación**: en este combo, es posible seleccionar el tipo de operación de activos fijos entre varias opciones (revalorización, destrucción, plusvalía, etc.).       

**Tipo de descuento/Descripción**: en esta columna es posible asociar el tipo de descuento que se propondrá cuando los descuentos sean ingresados directamente en la columna *Descuentos por artículo* de la cuadrícula de artículos de los documentos (para más detalles vea el artículo [Gestión Widget descuentos simplificado](/docs/sales/sales-flow/discount-widget)).