---
title: tipi ddt di vendita
sidebar_position: 18
---

:::tip[Inicio Rápido (FAst Start)]
La tabla está sujeta al procedimiento de [**Inicio Rápido**](/docs/guide/fast-start).

En caso de que se quiera configurar manualmente, consulte la lista de verificación de la página enlazada.
:::

La tabla se abre a través de la ruta **Tablas > Ventas > tipi ddt di vendita** y se utiliza para determinar las propiedades de un DDT.

Permite insertar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

El formulario consta de un área de filtro y otra de resultados. Una vez establecidos todos los filtros deseados, solo será necesario hacer clic en el botón **Buscar** para visualizar los resultados dentro de la cuadrícula de resultados.

Para insertar nuevos registros, es necesario hacer clic en la primera fila vacía de la cuadrícula o presionar el botón **Nuevo**.

**Tipo DDT /Descripción tipo DDT (Tipo DDT /Descrizione tipo DDT)**: tipo y descripción del tipo de DDT. El código del DDT debe ser único;

**numerazione**: en este campo se debe ingresar el código de numeración apropiado. Para más detalles consulte el artículo relativo a las [numeraciones Fluentis](/docs/configurations/tables/fluentis-numerations);

**natura ddt**: en este campo se debe ingresar la naturaleza del DDT: entrega, devolución, c/visión y devolución c/visión. Este valor deberá seleccionarse de una lista;

**ordine**: si está activo, este indicador indica que el DDT puede ser cumplido por un pedido de cliente;

**valori**: si está activo, este flag hará que en la impresión del DDT se muestren los valores de las líneas de artículo presentes en el documento;

**Tipo factura/Descripción tipo factura (Tipo fattura/Descrizione tipo fattura)**: en estos campos se definirá el tipo de factura que se quiere usar para crear la factura a partir del DDT a través de la [procedimiento correspondiente](/docs/sales/sales-invoices/procedures/create-invoices-from-delivery-notes). Solo se puede crear la factura a partir del DDT si este campo está valorado con el tipo de factura;

**causale trasporto**: en este campo se debe ingresar la descripción de la causal de transporte; se trata de un campo de texto libre donde se indicará la causal que se propondrá en el DDT;

**controllo cliente**: si está activo, este indicador permite al sistema realizar un control sobre el tipo de registro de la cuenta/subcuenta que se ha ingresado en el documento para verificar que sea obligatoriamente un cliente. Si no lo es, el sistema avisará al usuario mostrando un mensaje de error. Sería obligatorio activarlo en todos los tipos de DDT de venta;

**Bloquear Documento Impreso (Blocca Doc. Stampato)**: si está activo, este flag no permite modificar un DDT que resulte estar ya con el flag Impreso establecido en el encabezado;

**fido**: si está activo, el DDT con este tipo estará sujeto al control del límite de crédito;

**Excluir bloqueo (Escludi blocco)**: si está activo, el sistema para este tipo de DDT no considerará el bloqueo del documento debido a un posible exceso del límite de crédito, pero permitirá al usuario insertarlo e imprimirlo;

**cash flow**: si está activo, el tipo de DDT contribuye al cálculo del [flujo de efectivo](/docs/treasury/cash-flow/cash-flow/search-cash-flow).

**Almacén/Descripción almacén (Magazzino/Descrizione magazzino)**: en estos campos se deberá ingresar el almacén de llegada de la mercancía contenida en los DDT pertenecientes a esta tipología. Este valor se utilizará como valor predeterminado;

**Causal almacén/Descripción causal almacén (Causale magazzino/Descrizione causale magazzino)**: en estos campos se deberá indicar la causal de movimiento de la mercancía en llegada contenida en los DDT pertenecientes a esta tipología;

**evasione quantità articolo non sommata**: si se activa este flag, permitirá, en el momento en que se vayan a cumplir estas tipologías de DDT, reportar las cantidades cumplidas del documento de cumplimiento divididas por línea de artículo sin sumar las cantidades;

**agr. acq. iva**: si está activo, en la fase de creación del DDT, el sistema verificará si para el artículo utilizado está presente un código de IVA agrícola; de lo contrario, se utilizará el código de IVA presente en el registro del artículo;

**Controlar Picking Descargado (Controlla Picking Scaricato)**: si está activo, cuando se crea un DDT a partir de un Picking descargado, se activa automáticamente el flag descargado para el DDT. Se recomienda activar siempre este flag si se utiliza la gestión de picking;

**blocca quantità picking**: si está activo, bloquea la cantidad y la cantidad alternativa en el DDT creado a partir de la lista UDC. Se recomienda activar siempre este flag si se utiliza la gestión de picking y UDC;

**Permitir descarga de lotes no disponibles (Permetti scarico lotti non disponibili)**: si está activo, también permite la descarga de los lotes no disponibles;

**Gestión EDI**: si está activo, para el DDT de este tipo es posible crear un archivo EDI;

**prezzo ivato**: si está activo, el sistema recupera el precio de venta de listas o del registro del artículo y lo muestra con la adición del IVA. Si no encuentra la lista (en caso, por ejemplo, de lista caducada o lista en moneda no compatible), recupera los costos o precios del registro del artículo y los presenta incluidos el IVA.

Los costos y precios en el registro están en EUR, por lo que el sistema también los convertirá a la moneda del cliente.

**verifica lotti**: si está activo, verifica que los lotes sean congruentes para los artículos;

**gestione matrici extra data**: si está activo, permite visualizar, en caso de gestión de artículos con matriz, una pestaña adicional para la imputación de los valores de la cantidad por cada celda de matriz. Si no está activo, esta pestaña y la consiguiente matriz no se visualizarán.

**gestione cespiti**: este flag habilita la gestión de los activos en el tipo de factura y en el campo siguiente se debe especificar el tipo de operación de los activos;

**tipo operazione**: en esta caja de combinación es posible seleccionar el tipo de operación de los activos entre diferentes opciones (revalorización, destrucción, plusvalía, etc.).

**Tipo descuento/Descripción (Tipo sconto/Descrizione)**: en esta columna se puede asociar el tipo de descuento a proponer cuando los descuentos se ingresan directamente en la columna *Descuentos artículo* de la cuadrícula de artículos de los documentos (para más detalles, consulte el artículo [Gestión de Widget de descuentos simplificada](/docs/sales/sales-flow/discount-widget)).