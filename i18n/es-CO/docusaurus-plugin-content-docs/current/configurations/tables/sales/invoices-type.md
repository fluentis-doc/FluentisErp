---
title: Tipos de facturas de venta
sidebar_position: 20
---

:::tip[FAst Start]
La tabla está incluida en el procedimiento de [**Fast Start**](/docs/guide/fast-start)

En caso de que desee configurar manualmente, consulte la lista de verificación en la página enlazada
:::

La tabla se abre a través de la ruta **Tablas > Ventas > Tipos de facturas de venta** y se utiliza para determinar las propiedades de una factura;

Permite ingresar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos;

El formulario se compone de un área de filtro y una de resultados; una vez establecidos todos los filtros deseados, simplemente haga clic en el botón **Buscar** para visualizar los resultados dentro de la cuadrícula de resultados;

Para poder ingresar nuevos registros es necesario hacer clic en la cuadrícula sobre la primera fila vacía o pulsar el botón **Nuevo**; 

**Tipo/Descripción**: tipo de factura y descripción del tipo de factura; el código ingresado debe ser único;

**Numeración:** en este campo debe ingresar el código de numeración apropiado; Para más detalles consulte el artículo relativo a las [numeraciones fluentis](/docs/configurations/tables/fluentis-numerations); 

**Naturaleza de la factura**: en este campo debe ingresar la naturaleza asociada al tipo de factura; el valor se seleccionará de una lista entre Factura, Nota de crédito, etc;

**Orden**: si está activo, la factura podrá ser creada desde la gestión del orden a través del procedimiento específico; en caso contrario, el botón 'Ejecución desde ordenes' estará desactivado;

**Directo**: si está activo, significa que la factura es de tipo inmediato y deberán completarse, en la factura, también los datos de transporte; si no está activo la factura será de tipo diferido y los datos del transporte serán recuperados del documento de transporte (DN);

**Naturaleza de la Transacción Intrastat**: en este campo debe ingresar el código de transacción utilizado para la declaración intrastat; Para mayor información consulte [Naturaleza de las transacciones intrastat](/docs/configurations/tables/finance/nature-of-intrastat-transaction); 

**En estadística**: si está activo, la factura con este tipo será reportada en las estadísticas y visible en los informes *Facturado*;

**Proforma**: si está activo, la factura es de tipo proforma y no puede ser contabilizada;

**Causal**: en este campo debe ingresar la causal contable utilizada para la contabilización de la factura; Para mayor información consulte las [plantillas de libro mayor](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates); 

**Tipo de documento**: en este campo debe ingresar la causal analítica usada para la contabilización de la factura en contabilidad analítica;

**Notas**: campo de texto libre donde es posible ingresar notas descriptivas del tipo de factura;

**Control del cliente**: si está activo, este indicador permite al sistema efectuar un control sobre el tipo de registro maestro del cuenta/cuenta detallada que ha sido introducido en el documento para verificar que necesariamente sea un cliente; Si no es así, el sistema avisará al usuario con un mensaje de error; Es *obligatorio* activarlo en todos los tipos de factura de venta;

**Bloquear documento en lista**: si está activo, este indicador no permite modificar una factura que ya tenga el indicador *Impreso* establecido en la cabecera; 

**Intracomunitario**: si está activo, el sistema verifica que la nación del cliente sea un *país CEE*; Este indicador debe ser *configurado solo para tipos de factura Intracomunitarios*; Si no existe el vínculo entre cliente y tipo de factura intracomunitaria, el sistema devolverá un mensaje de advertencia;

**Factura proforma de ejecución**: si se establece y la factura es proforma, la ejecución liquida el orden; de lo contrario, el orden permanece sin liquidar;

**Razón del transporte**: Campo de texto libre donde debe indicarse una razón de transporte para poder imprimirla en la factura;

**Crédito**: si está activo, la factura con este tipo se incluirá en el control de crédito;

**Excluir bloqueo:** se refiere al bloqueo por superación del límite de crédito y, por tanto, es gestionado en el Lock Manager presente en el área de tesorería entre los procedimientos de Utilización de Límites de Crédito. Si está activo, el sistema para este tipo de factura no considerará el bloqueo del documento debido a la superación del crédito, permitiendo al usuario insertar e imprimir el documento; si no está activo, el tipo de factura será bloqueado en caso de superar el crédito y al usuario no se le permitirá imprimir el documento; 

**Almacén/Descripción del almacén**: en estos campos se debe indicar el [almacén](/docs/configurations/tables/logistics/warehouses) de compromiso de los artículos presentes en ese determinado tipo de factura; el almacén aquí especificado se reporta en todas las líneas de artículos insertadas en la factura de esta tipología; 

**Plantilla/Descripción de la plantilla de almacén**: en estos campos, en cambio, se debe indicar la [plantilla de movimiento](/docs/configurations/tables/logistics/warehouse-templates) de los artículos comprometidos contenidos en ese tipo de orden determinado; la plantilla aquí especificada se reporta en todas las líneas de artículos insertadas en el orden de esta tipología; 

**Agrupación de valores de vencimiento**: si está activo, en la contabilización de facturas se agruparán los valores de vencimiento; Para mayor información consulte [agrupación de valores de vencimiento](/docs/finance-area/maturity-values/maturity-values/maturity-value-grouping); 

**IVA agrícola para ventas**: si está activo, en la fase de creación del DN, el sistema verificará si para el artículo utilizado existe un código de IVA agrícola; en caso contrario, se usará el código de IVA presente en el registro maestro del artículo;

**Controla Picking descargado**: si está activo, cuando se crea una factura desde un picking descargado, se activa automáticamente el indicador descargado para el DN; si no está activo, el indicador no se activa; 

**Bloquear cantidad de Picking**: si está activo, bloquea la cantidad y la cantidad alternativa en la factura creada desde la lista UDC; si no está activo, no bloquea la cantidad, dejándola libre; Se aconseja activar siempre este indicador si se utiliza la gestión de picking y UDC;

**Calcular comisión**: si está activo, las facturas de este tipo serán incluidas en el cálculo de las comisiones de los agentes;

**Desconectar DN**: si está activo y en presencia de una factura de tipo Directo, permite realizar la descarga tanto del DN como de la factura que lo valora. Esta opción se utiliza generalmente cuando es necesario mover la mercancía antes de la descarga efectiva del documento. En tales casos, en el DN se indica una causal de descarga con contrapartida de carga (para trasladar la mercancía a otro almacén) y posteriormente se utiliza la factura para descargar definitivamente la mercancía del segundo almacén;   

**No ejecutar Picking**: si está activo, no realizará la liquidación del picking cuando se genere una factura;

**Precio incluido IVA**: la gestión de los precios con IVA se activa a través de este parámetro presente en todos los documentos del área de ventas a partir de las listas de precios de ventas. En la recuperación de precios de un documento con la tipología de Precio incluido IVA, se busca en las listas, con el mismo indicador Precio incluido IVA configurado, y se calculan los descuentos siempre partiendo desde el Precio incluido IVA. A partir del Precio incluido IVA, utilizando la tasa de IVA del registro del cliente o del artículo se calcula el precio sin IVA. En los documentos son visibles las columnas Precio y Precio incluido IVA. ¡Atención! si no existe una lista válida con el indicador Precio incluido IVA configurado y en el registro maestro de artículos hay un precio de venta, se propondrá como Precio incluido IVA el precio de venta. Para comprender el funcionamiento de la recuperación de Precios y de los precios con/sin IVA siga el artículo Recuperación de Precios y Descuentos en los documentos de venta.  

**Competencia económica**: si está activo, el tipo de factura tiene competencia económica y será necesario configurar las fechas del periodo de competencia;

**Plantilla de acumulación económica**: en este campo debe indicar la plantilla de acumulación económica utilizada en la contabilización de las facturas; Este valor se podrá escoger de una lista; Para mayor información consulte las [Plantillas de libro mayor](/docs/configurations/tables/finance/ledger-records-templates/search-ledger-records-templates);

**Gestión de Matrices de Datos Adicionales**: si está activo, permite visualizar, en el caso de gestión de artículos con matriz, una pestaña adicional para la imputación de valores de cantidad por cada celda de la matriz; Si no está activo, no se muestra esta pestaña ni la matriz correspondiente;

**Imprimir Informe**: en este campo es posible configurar la impresión por defecto que se utilizará para esta tipología de documento; recordamos que, en la fase de impresión de documento, será necesario seleccionar el reporte 'Impresiones múltiples' para utilizar en automático la impresión por defecto;

**Número de copias**: en este campo se definen el número de copias de documento a imprimir; 

**Gestión de Reciclaje**: este botón habilita la gestión del código de socio de reciclaje para el tipo de factura;

**Gestión de activos fijos**: este indicador habilita la gestión de activos fijos en el tipo de factura y en el siguiente campo se debe especificar el tipo de operación de los activos fijos;

**Tipo de operación**: en este cuadro combinado es posible seleccionar el tipo de operación de los activos fijos entre varias opciones (revalorización, destrucción, plusvalía, etc.).       

**Tipo de descuento/Descripción**: en esta columna es posible asociar el tipo de descuento a proponer cuando los descuentos se ingresan directamente en la columna *Descuentos de artículo* de la cuadrícula de artículos de los documentos (para más detalles vea el artículo [Gestión Widget de descuentos simplificado](/docs/sales/sales-flow/discount-widget)).