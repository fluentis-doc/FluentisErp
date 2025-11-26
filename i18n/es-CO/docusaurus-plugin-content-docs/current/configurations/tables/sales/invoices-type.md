---
title: Tipos de facturas de venta
sidebar_position: 20
ai_generated: true
---

:::tip[FAst Start]<!-- FAst Start -->
La tabla está incluida en el procedimiento de [**Fast Start**](/docs/guide/fast-start)

En caso de que desee configurar manualmente, consulte la lista de verificación en la página enlazada
:::

La tabla se abre a través de la ruta **Tablas > Ventas > Tipos de facturas de venta<!-- Tabelle > Vendite > Tipi fatture di vendita -->** y se utiliza para determinar las propiedades de una factura<!-- fattura -->;

Permite ingresar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos;

El formulario se compone de un área de filtro y una de resultados; una vez establecidos todos los filtros deseados, simplemente haga clic en el botón **Buscar<!-- Ricerca -->** para visualizar los resultados dentro de la cuadrícula de resultados;

Para poder ingresar nuevos registros es necesario hacer clic en la cuadrícula sobre la primera fila vacía o pulsar el botón **Nuevo<!-- Nuovo -->**; 

**Tipo/Descripción<!-- Tipo/Descrizione -->**: tipo de factura<!-- tipo fattura --> y descripción del tipo de factura<!-- tipo fattura -->; el código ingresado debe ser único;

**Numeración<!-- Numerazione -->:** en este campo debe ingresar el código de numeración apropiado; Para más detalles consulte el artículo relativo a las [numeraciones fluentis](/docs/configurations/tables/fluentis-numerations); 

**Naturaleza de la factura<!-- Natura fattura -->**: en este campo debe ingresar la naturaleza asociada al tipo de factura<!-- tipo fattura -->; el valor se seleccionará de una lista entre Factura<!-- Fattura -->, Nota de crédito, etc;

**Pedido<!-- Ordine -->**: si está activo, la factura<!-- fattura --> podrá ser creada desde la gestión del pedido<!-- ordine --> a través del procedimiento específico; en caso contrario, el botón 'Ejecución desde pedidos' estará desactivado;

**Inmediata<!-- Immediata -->**: si está activo, significa que la factura<!-- fattura --> es de tipo inmediato y deberán completarse, en la factura<!-- fattura -->, también los datos de transporte; si no está activo la factura<!-- fattura --> será de tipo diferido y los datos del transporte serán recuperados del documento de transporte (DDT);

**Naturaleza de la Transacción Intrastat<!-- Natura della Transazione Intrastat -->**: en este campo debe ingresar el código de transacción utilizado para la declaración intrastat; Para mayor información consulte [Naturaleza de las transacciones intrastat](/docs/configurations/tables/finance/nature-of-intrastat-transaction); 

**En estadísticas<!-- In statistica -->**: si está activo, la factura<!-- fattura --> con este tipo será reportada en las estadísticas y visible en los informes *Facturación<!-- Fatturato -->*;

**Proforma**: si está activo, la factura<!-- fattura --> es de tipo proforma y no puede ser contabilizada;

**Causal<!-- Causale -->**: en este campo debe ingresar la causal contable utilizada para la contabilización de la factura<!-- fattura -->; Para mayor información consulte las [causales de contabilidad general](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates);

**Tipo de documento<!-- Tipo documento -->**: en este campo debe ingresar la causal analítica usada para la contabilización de la factura<!-- fattura --> en contabilidad analítica;

**Notas<!-- Note -->**: campo de texto libre donde es posible ingresar notas descriptivas del tipo de factura<!-- tipo fattura -->;

**Control de cliente<!-- Controllo cliente -->**: si está activo, este indicador permite al sistema efectuar un control sobre el tipo de registro maestro del cuenta<!-- conto -->/subcuenta<!-- sottoconto --> que ha sido introducido en el documento para verificar que necesariamente sea un cliente; Si no es así, el sistema avisará al usuario con un mensaje de error; Es *obligatorio* activarlo en todos los tipos de factura<!-- fattura --> de venta;

**Bloquea doc; impreso<!-- Blocca doc; stampato -->**: si está activo, este indicador no permite modificar una factura<!-- fattura --> que ya tenga el indicador *Impreso<!-- Stampato -->* establecido en la cabecera;

**Intracomunitaria<!-- Intracomunitaria -->**: si está activo, el sistema verifica que la nación del cliente sea un *país CEE*; Este indicador debe ser *configurado solo para tipos de factura<!-- fattura --> Intracomunitarios*; Si no existe el vínculo entre cliente y tipo de factura<!-- tipo fattura --> intracomunitaria, el sistema devolverá un mensaje de advertencia;

**Ejecución de factura proforma<!-- Evasione fattura proforma -->**: si se establece y la factura<!-- fattura --> es proforma, la ejecución liquida el pedido; de lo contrario, el pedido permanece sin liquidar;

**Causal de transporte<!-- Causale trasporto -->**: Campo de texto libre donde debe indicarse una causal de transporte para poder imprimirla en la factura<!-- fattura -->;

**Límite de crédito<!-- Fido -->**: si está activo, la factura<!-- fattura --> con este tipo se incluirá en el control de crédito;

**Excluir bloqueo<!-- Escludi blocco -->:** se refiere al bloqueo por superación del límite de crédito y, por tanto, es gestionado en el Lock Manager presente en el área de tesorería entre los procedimientos de Utilización de Límites de Crédito. Si está activo, el sistema para este tipo de factura<!-- tipo fattura --> no considerará el bloqueo del documento debido a la superación del crédito, permitiendo al usuario insertar e imprimir el documento; si no está activo, el tipo de factura<!-- tipo fattura --> será bloqueado en caso de superar el crédito y al usuario no se le permitirá imprimir el documento; 

**Almacén/Descripción del almacén<!-- Magazzino/Descrizione magazzino -->**: en estos campos se debe indicar el [almacén<!-- magazzino -->](/docs/configurations/tables/logistics/warehouses) de compromiso de los artículos presentes en ese determinado tipo de factura<!-- tipo fattura -->; el almacén<!-- magazzino --> aquí especificado se reporta en todas las líneas de artículos insertadas en la factura de esta tipología; 

**Causal/Descripción de la causal de almacén<!-- Causale /Descrizione causale magazzino -->**: en estos campos, en cambio, se debe indicar la [causal de movimiento<!-- causale di movimentazione -->](/docs/configurations/tables/logistics/warehouse-templates) de los artículos comprometidos contenidos en ese tipo de pedido<!-- ordine --> determinado; la causal aquí especificada se reporta en todas las líneas de artículos insertadas en el pedido de esta tipología; 

**Agrupación de partidas<!-- Raggruppamento partite -->**: si está activo, en la contabilización de facturas<!-- fatture --> se agruparán las partidas; Para mayor información consulte [agrupación de partidas](/docs/finance-area/maturity-values/maturity-values/maturity-value-grouping); 

**IVA agrícola para ventas<!-- Iva agricola per vendite -->**: si está activo, en la fase de creación del DDT, el sistema verificará si para el artículo utilizado existe un código de IVA agrícola; en caso contrario, se usará el código de IVA presente en el registro maestro del artículo;

**Controla Picking descargado<!-- Controlla Picking scaricato -->**: si está activo, cuando se crea una factura<!-- fattura --> desde un picking descargado, se activa automáticamente el indicador descargado para el DDT; si no está activo, el indicador no se activa; 

**Bloquea cantidad Picking<!-- Blocca quantità Picking -->**: si está activo, bloquea la cantidad y la cantidad alternativa en la factura<!-- fattura --> creada desde la lista UDC; si no está activo, no bloquea la cantidad, dejándola libre; Se aconseja activar siempre este indicador si se utiliza la gestión de picking y UDC;

**Calcula comisiones<!-- Calcola provvigioni -->**: si está activo, las facturas<!-- fatture --> de este tipo serán incluidas en el cálculo de las comisiones de los agentes;

**Desvincula DDT<!-- Scollega DDT -->**: si está activo y en presencia de una factura de tipo Inmediata<!-- Immediata -->, permite realizar la descarga tanto del DDT como de la factura<!-- fattura --> que lo valora. Esta opción se utiliza generalmente cuando es necesario mover la mercancía antes de la descarga efectiva del documento. En tales casos, en el DDT se indica una causal de descarga con contrapartida de carga (para trasladar la mercancía a otro almacén<!-- magazzino -->) y posteriormente se utiliza la factura<!-- fattura --> para descargar definitivamente la mercancía del segundo almacén<!-- magazzino -->;   

**No liquida Picking<!-- Non evade Picking -->**: si está activo, no realizará la liquidación del picking cuando se genere una factura<!-- fattura -->;

**Precio con IVA<!-- Prezzo Ivato -->**: la gestión de los precios con IVA se activa a través de este parámetro presente en todos los documentos del área de ventas<!-- area vendita --> a partir de las listas de precios de ventas<!-- listini di vendita -->. En la recuperación de precios de un documento con la tipología de Precio con IVA, se busca en las listas, con el mismo indicador Precio con IVA configurado, y se calculan los descuentos siempre partiendo desde el precio con IVA. A partir del precio con IVA, utilizando la tasa de IVA del registro del cliente o del artículo se calcula el precio sin IVA. En los documentos son visibles las columnas Precio y Precio con IVA. ¡Atención! si no existe una lista válida con el indicador Precio con IVA configurado y en el registro maestro de artículos hay un precio de venta, se propondrá como precio con IVA el precio de venta. Para comprender el funcionamiento de la recuperación de Precios y de los precios con/sin IVA siga el artículo Recuperación de Precios y Descuentos en los documentos de venta.  

**Competencia económica<!-- Competenza economica -->**: si está activo, el tipo de factura<!-- tipo fattura --> tiene competencia económica y será necesario configurar las fechas del periodo de competencia;

**Causal de Competencia Económica<!-- Causale Competenza Economica -->**: en este campo debe indicar la causal de competencia económica utilizada en la contabilización de las facturas<!-- fatture -->; Este valor se podrá escoger de una lista; Para mayor información consulte las [Causales de contabilidad general<!-- Causali di contabilità generale -->](/docs/configurations/tables/finance/ledger-records-templates/search-ledger-records-templates);

**Gestión de matrices Extra Data<!-- Gestione matrici Extra Data -->**: si está activo, permite visualizar, en el caso de gestión de artículos<!-- gestione articoli --> con matriz, una pestaña adicional para la imputación de valores de cantidad por cada celda de la matriz; Si no está activo, no se muestra esta pestaña ni la matriz correspondiente;

**Impresión<!-- Stampa -->**: en este campo es posible configurar la impresión por defecto que se utilizará para esta tipología de documento; recordamos que, en la fase de impresión de documento, será necesario seleccionar el reporte 'Impresiones múltiples' para utilizar en automático la impresión por defecto;

**Número de copias<!-- Numero di copie -->**: en este campo se definen el número de copias de documento a imprimir; 

**Gestión Conai<!-- Gestione Conai -->**: este botón habilita la gestión CONAI (Consorcio Nacional de Embalajes) para el tipo de factura<!-- tipo fattura -->;

**Gestión de activos fijos<!-- Gestione cespiti -->**: este indicador habilita la gestión de activos fijos en el tipo de factura<!-- tipo fattura --> y en el siguiente campo se debe especificar el tipo de operación de los activos fijos;

**Tipo de operación<!-- Tipo operazione -->**: en este cuadro combinado es posible seleccionar el tipo de operación de los activos fijos entre varias opciones (revalorización, destrucción, plusvalía, etc.).       

**Tipo de descuento/Descripción<!-- Tipo sconto/Descrizione -->**: en esta columna es posible asociar el tipo de descuento a proponer cuando los descuentos se ingresan directamente en la columna *Descuentos de artículo<!-- Sconti articolo -->* de la cuadrícula de artículos de los documentos (para más detalles vea el artículo [Gestión Widget de descuentos simplificado](/docs/sales/sales-flow/discount-widget)).