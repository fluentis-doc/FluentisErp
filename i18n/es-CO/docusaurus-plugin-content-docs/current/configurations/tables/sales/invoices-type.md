---
title: Tipos de facturas de venta (Tipi fatture di vendita)
sidebar_position: 20
---

:::tip[Inicio Rápido (FAst Start)]
La tabla está afectada por el procedimiento de [**Inicio Rápido (Fast Start)**](/docs/guide/fast-start)

En caso de que se desee configurar manualmente, se debe consultar la lista de verificación de la página enlazada
:::

La tabla se abre a través de la ruta **Tablas > Ventas > Tipos de facturas de venta (Tabelle > Vendite > Tipi fatture di vendita)** y se utiliza para determinar las propiedades de una factura;

Permite ingresar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos;

El formulario se compone de un área de filtro y de una de resultados; Una vez establecidos todos los filtros deseados, solo hace falta hacer clic en el botón **ricerca** para visualizar los resultados dentro de la cuadrícula de resultados;

Para poder ingresar nuevos registros, es necesario hacer clic en la primera fila vacía de la cuadrícula o presionar el botón **nuovo**; 

**Tipo/Descripción (Tipo/Descrizione)**: tipo de factura y descripción del tipo de factura; el código ingresado debe ser único;

**Numeración (Numerazione):** en este campo se debe ingresar el código de numeración apropiado; Para más detalles, consulte el artículo relacionado con las [numeraciones de Fluentis (numerazioni fluentis)](/docs/configurations/tables/fluentis-numerations); 

**natura fattura**: en este campo se debe ingresar la naturaleza asociada al tipo de factura; el valor se seleccionará de una lista entre Factura, Nota de crédito, etc.;

**ordine**: si está activo, la factura podrá ser creada a partir del cumplimiento del pedido mediante el procedimiento correspondiente; de lo contrario, el botón 'Cumplimiento de pedidos (Evasione da ordini)' estará desactivado;

**immediata**: si está activo, significa que la factura es de tipo inmediato y deberán completarse, en la factura, también los datos para el transporte; si no está activo, la factura será de tipo diferido y los datos del transporte se recuperarán del DDT;

**natura della transazione intrastat**: en este campo se debe ingresar el código de transacción utilizado para la declaración intrastat; Para más detalles, consulte la [Naturaleza de transacciones intrastat (Natura transazioni intrastat)](/docs/configurations/tables/finance/nature-of-intrastat-transaction); 

**in statistica**: si está activo, la factura con este tipo será reportada en las estadísticas, por lo tanto, será visible en las impresiones de *fatturato*;

**proforma**: si está activo, la factura es de tipo proforma y no puede ser contabilizada;

**causale**: en este campo se debe ingresar la causa contable utilizada para la contabilización de la factura; Para más detalles, consulte las [causas de contabilidad general (causali di contabilità generale)](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates);

**tipo documento**: en este campo se debe ingresar la causa analítica utilizada para la contabilización de la factura en contabilidad analítica;

**note**: campo de texto libre en el que se pueden ingresar notas descriptivas del tipo de factura;

**controllo cliente**: si está activo, este indicador permite al sistema realizar un control sobre el tipo de registro del cliente/socio que se ha ingresado en el documento para verificar que sea obligatoriamente un cliente; Si no es así, el sistema avisará al usuario con un mensaje de error; Sería *obbligatorio* activarlo en todos los tipos de factura de venta;

**Bloquear documento; impreso (Blocca doc; stampato)**: si está activo, este indicador no permite modificar una factura que ya esté marcada como *stampato* en el encabezado;

**intracomunitaria**: si está activo, el sistema verifica que el país del cliente sea una *nación CEE*; Este indicador debe *establecerse solo en tipos de factura intracomunitarios*; Si no hay enlace entre el cliente y el tipo de factura intracomunitaria, el sistema devolverá un mensaje de advertencia;

**Cumplimiento de factura proforma (Evasione fattura proforma)**: si está configurado y la factura es proforma, el cumplimiento realiza la orden; de lo contrario, la orden permanecerá no cumplida;

**causale trasporto**: campo de texto libre en el que se debe indicar una causa de transporte que se pueda imprimir en la factura;

**fido**: si está activo, la factura de este tipo estará sujeta al control de crédito;

**Excluir bloqueo (Escludi blocco):** se refiere al bloqueo por superación del crédito y por lo tanto está incluido en la gestión del Lock Manager presente en el área de tesorería entre los procedimientos de Utilización de Créditos. Si está activo, el sistema no considerará el bloqueo del documento debido al exceso del crédito, pero permitirá al usuario ingresar e imprimir el documento; si no está activo, el tipo de factura será bloqueado si se supera el crédito y se impedirá al usuario imprimir el documento; 

**Almacén/Descripción de almacén (Magazzino/Descrizione magazzino)**: en estos campos se indicará el [almacén (magazzino)](/docs/configurations/tables/logistics/warehouses) de compromiso de los artículos presentes en ese tipo de factura determinado; el almacén especificado aquí se reflejará en todas las líneas de artículo ingresadas en la factura de este tipo; 

**Causa /Descripción causa de almacén (Causale /Descrizione causale magazzino)**: en estos campos se indicará la [causa de movimiento (causale di movimentazione)](/docs/configurations/tables/logistics/warehouse-templates) de los artículos comprometidos en ese tipo de orden determinado; la causa especificada aquí se reflejará en todas las líneas de artículo ingresadas en el orden de este tipo; 

**raggruppamento partite**: si está activo, en la contabilización de facturas se agruparán las partidas; Para más detalles, consulte el [agrupamiento de partidas (raggruppamento partite)](/docs/finance-area/maturity-values/maturity-values/maturity-value-grouping); 

**IVA agrícola por ventas (Iva agricola per vendite)**: si está activo, en la fase de creación de DDT, el sistema verificará si el artículo utilizado tiene asociado un código de IVA agrícola; de lo contrario, se utilizará el código de IVA presente en el registro del artículo;

**Control de Picking descargado (Controlla Picking scaricato)**: si está activo, al crear una factura desde un Picking descargado, se activa automáticamente el indicador descargado para el DDT; si no está activo, el indicador no se activa; 

**blocca quantità picking**: si está activo, bloquea la cantidad y la cantidad alternativa en la factura creada desde la lista UDC; si no está activo, no bloquea la cantidad pero la deja libre; Se recomienda activar siempre este indicador si se utiliza la gestión de picking y UDC;

**calcola provvigioni**: si está activo, las facturas pertenecientes a este tipo se incluirán en el cálculo de las comisiones de los agentes;

**scollega ddt**: si está activo, es posible descargar del almacén también las facturas diferidas (Normalmente la descarga de almacén se realiza a través de DDT);

**non evade picking**: si está activo, no cumplirá el picking si se genera una factura;

**Precio con IVA (Precio Ivato)**: la gestión de precios con IVA se activa a través de este parámetro presente en todos los documentos del área de ventas a partir de las listas de precios. En la recuperación de precios de un documento con tipo Precio con IVA, se busca en las listas, con el mismo indicador Precio con IVA establecido, y se calculan los descuentos a partir del precio con IVA. Desde el precio con IVA, utilizando la tasa de IVA del registro del cliente o del registro del artículo, se calcula el precio sin IVA. En los documentos se pueden ver las columnas Precio y Precio con IVA. ¡Atención! si no existe una lista de precios válida con el indicador Precio con IVA establecido y en el registro de artículos hay un precio de venta, se propondrá como Precio con IVA el precio de venta. Para entender el funcionamiento de la recuperación de Precios y de los precios con y sin IVA, siga el artículo Recuperación de Precios y Descuentos en los documentos de venta. 

**competenza economica**: si está activo, el tipo de factura tiene competencia económica y por lo tanto será necesario establecer las fechas del período de competencia;

**Causa de Competencia Económica (Causale Competenza Economica)**: en este campo se debe indicar la causa de competencia económica utilizada en la contabilización de las facturas; Este valor se podrá elegir de una lista; Para más detalles, consulte las [Causas de contabilidad general (Causali di contabilità generale)](/docs/configurations/tables/finance/ledger-records-templates/search-ledger-records-templates);

**gestione matrici extra data**: si está activo, permite visualizar, en caso de gestión de artículos con matriz, una pestaña adicional para la imputación de los valores de cantidad por cada celda de la matriz; si no está activo, no se visualizará esta pestaña y la consiguiente matriz;

**stampa**: en este campo es posible establecer la impresión predeterminada a utilizar para este tipo de documento; recordemos que, en la fase de impresión del documento, será necesario seleccionar el informe 'Impresiones múltiples' para usar automáticamente la impresión predeterminada;

**numero di copie**: en este campo se establece el número de copias del documento a imprimir; 

**gestione conai**: este botón habilita la gestión CONAI (Consorzio Nazionale Imballaggi) para el tipo de factura;

**gestione cespiti**: este indicador habilita la gestión de activos en el tipo de factura y en el siguiente campo se debe especificar el tipo de operación de los activos;

**tipo operazione**: en esta caja de combinación es posible seleccionar el tipo de operación de los activos entre diversas opciones (revalorización, destrucción, plusvalía, etc.).       

**Tipo de descuento/Descripción (Tipo sconto/Descrizione)**: en esta columna es posible asociar el tipo de descuento a proponer cuando los descuentos se ingresan directamente en la columna *sconti articolo* de la cuadrícula de artículos de los documentos (para más detalles, consulte el artículo [Gestión de Widget de descuentos simplificados (Gestione Widget sconti semplificato)](/docs/sales/sales-flow/discount-widget)).