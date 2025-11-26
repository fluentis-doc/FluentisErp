--- 
title: Patch notes Versión 704
sidebar_position: 1
ai_generated: true
---

### Patch 704.1-0031 - 16/05/2024
> - PR - corregido bug que utilizaba en el cashflow la cuenta cliente tercero para fases externas en la orden de trabajo a terceros<!-- conto lavoro --> en lugar del proveedor real (#TT02034/24)
> - FI - revisión de las fechas de competencia económica asignadas a los asientos de reapertura de los ajustes desde el cierre de cuentas automático (#TT01535/24 - #TT01814/24)
> - FI - en la compensación de partidas, revisión de la gestión de los filtros de partidas respecto al tipo de compensación, gestión de decimales en los campos de la cuadrícula (#TT02113/24)
> - SH - Arrastrar imágenes: se establece el tipo de archivo del documento como 'JPG' cuando la extensión del archivo es 'JPEG' (#TT02210/24)
> - SD - Las versiones de ofertas ahora son visibles correctamente según el flag "ver todas las versiones", incluso en los tabs de los estados del workflow (#TT02228/24)

### Patch 704.1-0030 - 09/05/2024
> - WMS - En el formulario Lista de transferencia UDC se agregó el estado de la lista tanto como filtro como columna en la cuadrícula de resultados (#TT03338/23, #TT02030/24)
> - SCM - En la ficha del artículo, pestaña Tarifas de Proveedores se añadieron las columnas relativas a Código y Descripción de variante (#TT01851/24)
> - SCM - En la cuadrícula del Navegador artículos se añadieron las columnas relativas a Código y Descripción de variante (#TT01890/24)
> - WMS - Ahora en el formulario Recepción de Mercancía del WMS, si en los parámetros de almacén<!-- magazzino --> de carga/descarga por usuario está asociado para ese usuario un solo almacén<!-- magazzino -->, se propone por defecto ese, de lo contrario, si hay más de uno asociado, por defecto no se propone ninguno y el usuario solo puede elegir entre los insertados (#TT01909/24)
> - WMS - Ahora en el formulario Carga artículo del WMS, si en los parámetros de almacén<!-- magazzino --> de carga/descarga por usuario está asociado para ese usuario un solo almacén<!-- magazzino -->, se propone por defecto ese, de lo contrario, si hay más de uno asociado, por defecto no se propone ninguno y el usuario solo puede elegir entre los insertados (#TT01892/24)
> - WMS - Ahora en el formulario Descarga artículo del WMS, si en los parámetros de almacén<!-- magazzino --> de carga/descarga por usuario está asociado para ese usuario un solo almacén<!-- magazzino -->, se propone por defecto ese, de lo contrario, si hay más de uno asociado, por defecto no se propone ninguno y el usuario solo puede elegir entre los insertados (#TT01893/24)
> - WMS - Ahora en el formulario Mover artículo del WMS, si en los parámetros de almacén<!-- magazzino --> de carga/descarga por usuario está asociado para ese usuario un solo almacén<!-- magazzino -->, se propone por defecto ese, de lo contrario, si hay más de uno asociado, por defecto no se propone ninguno y el usuario solo puede elegir entre los insertados (#TT01894/24)
> - WMS - Ahora en el formulario Rectificar artículo del WMS, si en los parámetros de almacén<!-- magazzino --> de carga/descarga por usuario está asociado para ese usuario un solo almacén<!-- magazzino -->, se propone por defecto ese, de lo contrario, si hay más de uno asociado, por defecto no se propone ninguno y el usuario solo puede elegir entre los insertados (#TT01895/24)
> - WMS - Ahora en el formulario Existencias artículo del WMS, si en los parámetros de almacén<!-- magazzino --> de carga/descarga por usuario está asociado para ese usuario un solo almacén<!-- magazzino -->, se propone por defecto ese, de lo contrario, si hay más de uno asociado, por defecto no se propone ninguno y el usuario solo puede elegir entre los insertados (#TT01896/24)
> - WMS - Ahora en el formulario Listas de picking UDC del WMS, si en los parámetros de almacén<!-- magazzino --> de carga/descarga por usuario está asociado para ese usuario un solo almacén<!-- magazzino -->, se propone por defecto ese, de lo contrario, si hay más de uno asociado, por defecto no se propone ninguno y el usuario solo puede elegir entre los insertados (#TT01905/24)
> - WMS - Ahora en el formulario Gestión UDC del WMS, si en los parámetros de almacén<!-- magazzino --> de carga/descarga por usuario está asociado para ese usuario un solo almacén<!-- magazzino -->, se propone por defecto ese, de lo contrario, si hay más de uno asociado, por defecto no se propone ninguno y el usuario solo puede elegir entre los insertados (#TT01906/24)
> - WMS - Ahora en el formulario Listas de Transferencias UDC del WMS, si en los parámetros de almacén<!-- magazzino --> de carga/descarga por usuario está asociado para ese usuario un solo almacén<!-- magazzino -->, se propone por defecto ese, de lo contrario, si hay más de uno asociado, por defecto no se propone ninguno y el usuario solo puede elegir entre los insertados (#TT01903/24)
> - FI - registro de pago/cobro en moneda extranjera: si los pagos son en la misma moneda que el encabezado del registro y no hay líneas manuales, entonces el total del documento en moneda corresponde al valor en moneda cerrado. Si hay pagos en otras monedas y/o líneas manuales, el total en moneda será el cálculo del contravalor en moneda del total deber/haber en moneda de la empresa (#TT1703/24)
> - SD - En la creación del archivo Sdi sobre facturas/notas de crédito en moneda, revisión de la gestión de redondeos (#TT1703/24 - #TT02135/24)

### Patch 704.1-0029 - 06/05/2024
> - SH - Nuevo mensaje de aviso si al configurar el registro de una persona física no se completan el nombre y apellido, y nuevo mensaje de error generando el archivo de factura electrónica sin estos datos (#TT01700/24)
> - PR - Revisión de recuperación de datos desde devoluciones de c/trabajo en el cash flow (#TT01934/24)
> - PM - El valor de los extra data del proyecto se carga en la cuadrícula del formulario de búsqueda (#TT01740/24)
> - PM - Solucionado caso en "Impresión detalle proyecto" que no reportaba asientos contables relacionados solo al encabezado del proyecto y no a los artículos (#TT01087/24)
> - FI - Cost center from delivery notes not visible in general ledger posting & Movement analysis for cost centers report (#TT01521/24)
> - SH - Direcciones alternativas: revisión del guardado de los campos nombre y apellido en las direcciones alternativas (#TT01794/24)
> - FI - Revisión de recuperación de valores de asientos para la sección quater (#TT01985/24)
> - PR - Optimización de Cash Flow desde DDT de Compra (#TT01754/24)
> - FI - Ajustes contables: revisión de la descripción en los asientos contables creados automáticamente por el procedimiento (#TT00503/24)

### Patch 704.1-0028 - 29/04/2024
> - SD - Corregido error en el Detalle de Movimientos que mostraba ciertas cantidades con signo incorrecto (#TT01546/24)
> - ARM - Forms Wizard - Sustitución fluentis: BaseView por fluentis: ViewModelResolver.
> - WM - Corregido error que no permitía la generación de un DDT desde la Lista de Picking UDC (#TT01595/24)
> - Resuelto el error de creación de scripts del lado cliente para un espacio de nombres diferente a FluentisErp.
> - SH - Se propone el nombre del archivo de exportación en la vista previa de impresión si el documento tiene la transformación "ReportAttachFileName" (#TT00837/24)
> - SCM - Si un documento de compra ya ha sido cargado, no es posible cambiar el código de lote (#TT01712/24)
> - PM - SAL de proyecto: ahora es posible arrastrar y soltar los campos desde el object
> - SCM - Corregido error que proponía la misma 'Descripción del artículo proveedor' en el procedimiento de 'Ejecución de pedidos', para todos los proveedores preferenciales del artículo (#TT01501/24)
> - SH - Corregido error en el Análisis de Disponibilidad que aparecía cuando no se habían insertado los almacenes<!-- magazzini --> y las causales<!-- causali --> dentro de los Parámetros de Pedidos de Producción (#TT01765/24)
> - PM - Gestionada exportación a Excel de los campos calculados en la cuadrícula del SAL (#TT01433/24)
> - SD - La búsqueda se realiza según la prioridad incluso frente a varias filas para el mismo tipo de comisión (#TT01695/24)
> - SD - Corregido error que no rellenaba los ‘Materiales Conai para el artículo’ en las notas de crédito (#TT01841/24)
> - PR - revisión del cálculo del cash flow de órdenes de trabajo a terceros<!-- conto lavoro --> (#TT01609/24)
> - FI - Revisión del cálculo de partidas para facturas de compras de activos extranjeros sin movimiento IVA<!-- movimento iva --> (#TT02800/23)
> - FI - Revisión de liquidación de IVA de la localización Croata (#TT03562/23)
> - FI - Revisión de la gestión de comisiones de agentes en contabilidad, tanto para cobros parciales como para contabilización de facturas con total 0 (#TT01822/24)
> - FI - Revisión de la impresión definitiva de la liquidación periódica de IVA de enero para el guardado del crédito del año/periodo anterior (#TT01160/24)

### Patch 704.1-0027 - 18/04/2024
> - ARM - Unidad de trabajo - corrección del error durante la actualización de los modelos WebApi cuando solo está presente un objeto de solo lectura
> - MES - Implementada en la lista de picking de materiales la gestión de la cantidad residual (#TT00836/24)
> - SD - Bloqueo de importación de facturas de venta Web Api para facturas descargadas, contabilizadas o enviadas al sistema de facturación electrónica (#TT01578/24)
> - PM - Mejorada la gestión de gastos a partir de facturas de compra en el SAL de proyecto (#TT01366/24)
> - SCM, SCS - Dentro de los documentos de Compras y Trabajo a terceros<!-- Conto Lavoro --> ahora es posible insertar un transportista (#TT01132/24)
> - SD, SCS, WM - Dentro de los documentos de Venta, Albaranes de Trabajo a terceros<!-- Bolle di Conto Lavoro --> y Picking ahora es posible insertar un transportista (#TT01132/24)
> - WM - Inventario a cantidad valorizada - Corregida anomalía sobre el 'Valor unitario', propuesto en el reporte de 'Impresión inventario', si se solicita la 'Valorización a Costo medio' y 'Valorización en almacén<!-- magazzino -->' presente en los 'Parámetros iniciales del almacén<!-- magazzino -->' (#TT01690/24)
> - FI - registro automático relativo al impuesto ambiental - versión RO (#TT01749/24)
> - PM - Webapi importación declaración de actividades, corregida gestión del campo TotalTime y valores de inicio-fin de pausa (#TT01627/24)

### Patch 704.1-0026 - 11/04/2024

> - FI - revisión de filtro por división en impresión de Subcuentas<!-- Sottoconti --> ejecutada desde el formulario ‘Visualización de cuentas’ (#TT01394/24)
> - WM - Corregido título del formulario Trazabilidad de Lotes (#TT01415/24)
> - SD - Permitida la modificación del rango de fechas de competencia económica en facturas de venta con archivo Sdi creado pero no contabilizadas (#TT01038/24)
> - SD - Bloqueo al recálculo a cero del porcentaje de comisión en líneas procesadas desde OC, en caso de rango de descuento y categoría de comisión de filtro (#TT01310/24)
> - SD - Inserción de un nuevo pop up de advertencia en el caso de que se inserte un tipo de factura sin split payment (por tanto, sin Causal contable<!-- Causale contabile --> asociada que tenga Tipo de movimiento<!-- Tipo movimento --> ‘29’) y un cliente que gestiona el split payment (#TT01237/24)
> - MS - Añadido un mensaje de error en el MRP si el artículo es de producción pero no tiene la lista de materiales<!-- distinta base --> (#TT01414/24)
> - WM - Traducido título de la impresión de Trazabilidad de Lote
> - CO - Corregido bug que no refrescaba correctamente el formulario seleccionando un nodo del modelo de reclasificación para insertar las subcuentas<!-- sottoconti --> vinculadas. Mejorado mensaje de advertencia para tipos de cuenta (#TT01367/24)
> - FI - Asociación de archivos xml a perceptores: revisión de propuesta de solo archivos en estado ‘no asignado’ (#TT01317/24)
> - PR - Corregido bug que en la fase de creación de RiBa desde facturas, en caso de factura y nota de crédito a agrupar, sumaba en lugar de restar la NC (#TT00897/24)
> - Corregida la etiqueta blanca para tarjetas y widgets cuando el tema es Office2019Colorful (#TT00980/24)
> - SCM - Al crear una Factura de compra desde archivo XML el precio se importa con la bandera Precio Manual activo y sin aplicar los descuentos internos (#TT01227/24)
> - PM - SAL solucionada anomalía en procesamiento masivo (#TT01439/24)
> - WM - Corregido bug en análisis de disponibilidad que no mostraba correctamente los valores en los campos: Pedido de cliente vinculado y cantidad del pedido de cliente (#TT01062/24)
> - PM - SAL de proyecto, añadido el código PRCC008 Costes Extras desde Gastos en Facturas de Compra que considera todas las facturas de compra, contabilizadas y no contabilizadas. Corregida descripción del código PRCC006 en Costes Extras desde Gastos en Facturas de Compra no contabilizadas (#TT01385/24)
> - PM - SAL de proyecto: añadido nuevo código PRCC007 - Costes de Facturas de Compra (#TT01279/24)
> - PM - SAL de proyecto en las filas de detalle añadido artículo y descripción desde la fila del documento (#TT01278/24)
> - FI - revisión de activación de botones de gestión dentro del intrastat (#TT01232/24)

### Patch 704.1-0025 - 04/04/2024

> - QY - Corregido bug que no mostraba los Workflows en el formulario de Batch Records (#TT01165/24)
> - SCM - En el reporte de Vencimientos de pedidos de proveedores, las fechas cambiaron a formato europeo y los precios a dos decimales (#TT01051/24)
> - MS - Corregido bug en la planificación general si se reprogramaban órdenes<!-- commesse --> ya en estado lanzado/ejecutivo (#TT00158/24)
> - Resuelto bug en el código de importaciones de Excel cuando se usan caracteres especiales.
> - PR - resuelto bug en el formulario de gestión de liquidez que no actualizaba correctamente el campo Progresivo al cambiar los flags excluir y ocultar (#TT00435/24)
> - revisión fast start CH (#TT00489/24)
> - PM - correcciones en la inserción de citas en el planner relativas a intervenciones planificadas y solicitudes de intervención. Mejorada gestión de movimiento / cambio de fecha/hora/recurso (#TT00144/24)
> - SCM - En la cuadrícula de árbol de la máscara de Ejecución de Pedidos abierta desde DDT, la propiedad ‘Número de línea’ puede ser arrastrada desde Object Navigator y guardada con Perfil (#TT01044/24)
> - SD - La inserción de un artículo dentro de una Factura de Venta por medio de la Ayuda de artículos ahora reporta correctamente la clase (#TT01213/24)
> - PR - corregido bug en el cálculo de vencimientos del cashflow sobre las órdenes de trabajo a terceros<!-- ordini conto lavoro --> (#TT01203/24)
> - PM - Procesamiento SAL de múltiples proyectos simultáneamente, resueltos casos de cálculos incorrectos (#TT01325/24)
> - Lanzamiento impresión LIPE año 2024
> - FI - corregido bug en la impresión de verificación de la declaración de intención cuando en la factura había gastos finales enlazados a la declaración, su valor no se reportaba correctamente en la columna registrado y quedaba en columna facturado (#TT01311/24)
> - SD - Los gastos de Cobro son gravados automáticamente con el IVA principal del documento (#TT00511/24)
> - PM - Procesamiento SAL de múltiples proyectos simultáneamente, resueltos casos de cálculos incorrectos (#TT01325/24)

### Patch 704.1-0024 - 28/03/2024

> - QY - Corregido bug que no mostraba los Workflows en el formulario de Batch Records (#TT01165/24)
> - SCM - En el reporte de Vencimientos de pedidos de proveedores, las Fechas cambiaron a formato europeo y los Precios a dos decimales (#TT01051/24)
> - MS - Corregido bug en la planificación general si se reprogramaban órdenes<!-- commesse --> ya en estado lanzado/ejecutivo (#TT00158/24)
> - Resuelto bug en el código de importaciones de Excel cuando se usan caracteres especiales.
> - PR - resuelto bug en el formulario de gestión de liquidez que no actualizaba correctamente el campo Progresivo al cambiar los flags excluir y ocultar (#TT00435/24)
> - Resuelto el problema de la ejecución de la actividad con parámetros faltantes en SqlQuery
> - revisión fast start CH (#TT00489/24)
> - PM - correcciones en la inserción de citas en el planner relativas a intervenciones planificadas y solicitudes de intervención. Mejorada gestión de movimiento / cambio de fecha/hora/recurso (#TT00144/24)
> - SCM - En la cuadrícula de árbol de la máscara de Ejecución de Pedidos abierta desde DDT, la Propiedad ‘Número de línea’ puede ser arrastrada desde Object Navigator y guardada con Perfil (#TT01044/24)

### Patch 704.1-0023 - 21/03/2024

> - MS - Corregidos errores en el procedimiento de Costeo de Órdenes de producción<!-- Commesse di produzione --> y en el reporte Costeo Orden<!-- Costificazione Commessa --> (#TT00497/24)
> - MS - Corregido bug que causaba la pérdida del referente a la línea de proyecto como resultado de una restauración de la orden de producción<!-- ordine di produzione --> (#TT01014/24)
> - MES - Corregido bug en los Reportes de Producción que no reconocía el orden temporal correcto de los reportes cuando eran insertados a la misma hora (#TT00985/24)
> - SD - Contabilización automática de facturas de venta: revisado el procedimiento de contabilización automática de notas de crédito con tipo de movimiento no IVA (#TT00666/24)
> - MS - Corregido bug en la planificación general en caso de tener programado el lanzamiento automático de los pedidos planificados en los parámetros (#TT01148/24)
> - ARM - Se pregunta al usuario qué Business Object extender si hay varios objetos vinculados a la misma tabla.
> - MES - Corregido bug que causaba un bloqueo temporal de la aplicación en caso de registros de Declaraciones de Producción con numerosos reportes por fase (#TT00946/24)
> - MES - Corregido bug en las Declaraciones de Producción que no actualizaba el tiempo de máquina y el tiempo de hombre cuando se ejecutaba el procedimiento de Recalculo de tiempos (#TT01017/24)
> - FI - IVA a CREDITO en el archivo para LIPE también tiene en cuenta el IVA no deducible por prorrata (#TT01596/23)
> - MES - En la lista de picking de materiales, en la tabla de materiales se agregó la función de formato condicional (#TT01159/24)
> - CO - en la impresión del consolidado de Proyecto, revisión del filtro por tipo de proyecto (#TT01172/24)
> - SCM - Corregido bug en el procedimiento de Creación Automática de Pedidos de Proveedor desde Pedido de Cliente que no calculaba correctamente las cantidades en el procedimiento de Ejecución de Pedido en DDT cuando se modificaban las cantidades del pedido al proveedor en el prototipo (#TT01199/24)

### Patch 704.1-0022 - 15/03/2024

> - SH - WebApi - Resuelto el problema con la referencia al contacto durante la importación de cuenta cuando el tipo de operación no está especificado
> - SD - implementación de web api para la importación de facturas de venta (#TT002622/23)
> - Valoración de referencias número y fecha de pedidos, albaranes y documentos de trabajo a terceros<!-- conto lavoro --> (#TT001036/24)
> - SH - Corregido error al abrir el contacto desde el menú Freelance (#TT01072/24)
> - MS - Corregido bug en el cálculo del costo total de las operaciones en el costeo de la orden<!-- commessa --> (#TT02545/23)
> - Resuelto el problema al filtrar el valor de la lista dentro de la importación de Excel con un valor fijo.
> - ARM - Gestionada la renombramiento automático de las tablas de extensión.

### Patch 704.1-0021 - 08/03/2024

> - SD - A raíz de una modificación de la facturación de ventas dentro de un DDT de Venta, ya no se actualizan la Fecha y el Usuario de la última modificación en el encabezado del pedido de cliente vinculado (#TT00308/24)
> - FI - Intrastat export sezione doganale and negative value in riepilogo if inserted in quinquies section (#TT00580/24)
> - SCM - Corregido error en el procedimiento de Creación Automática de Pedidos de proveedor desde Pedido de Cliente que ya no reportaba la cantidad del pedido en el Prototipo como resultado de un cambio de proveedor (#TT00777/24)
> - PR - Perfil en exposición clientes (#TT00853/24)
> - Resuelto el problema de la importación de referencias con valor Null y la búsqueda múltiple en Intercompany
> - CO - cálculo de amortizaciones del controlling, revisión de los procesamientos de datos iniciales (#TT00477/24)

### Patch 704.1-0020 - 05/03/2024

> - SD - Corrección del error que solicitaba un descuento por tramo al insertar el Mask en un nuevo Redondeo (#TT00756/24)
> - SD - Como resultado de la Conversión de una Oferta en Pedido de Cliente también se incluye el valor de cantidad alternativo, si se encuentra en la Oferta (#TT00779/24)
> - WMS - En el formulario existencias artículo del WMS se añadió una nueva columna para visualizar las existencias.
Las columnas que hacen referencia a la existencia son tres: Existencia (Gest.), Existencia y Existencia(FC) (FC = Factor de conversión).
En caso de uso de la *UM Def. WMS* (presente en la pestaña Unidades de medida alternativas de la ficha del artículo), la primera resulta valorizada con la unidad de medida principal del artículo, la segunda con la existencia expresada en la unidad de medida alternativa del artículo y dada por la suma de los movimientos<!-- movimenti -->, mientras que la tercera es la existencia en unidad alternativa pero calculada con el factor de conversión.
En caso de que, el flag *UM Def. WMS* no esté habilitado, las columnas *Existencia* y *Existencia(FC)* no serán valorizadas (#TT00446/24)
> - CRM -  Es posible eliminar las Referencias de los Contactos CRM si no tienen relaciones (#TT00748/24)
> - SD - En las Ofertas de Venta el precio del artículo ya no se pone a cero al cambiar la cantidad (#TT00861/24)
> - FI - map new field CustomSection on FSIntrastatDetail (#TT00729/24)
> - SD - añadido script de inicialización para el listado de valores de Tipo origen costo para materiales en ofertas, usado para db actualizadas de F2021 a F2023 (#TT00593/24)
> - SH - revisión fast start para localización CH
> - SD - Optimizada la posibilidad de insertar nuevos artículos en tarifas voluminosas (#TT02980/23)
> - SD - Solucionado error que impedía la inserción de nuevas líneas en la tabla de facturación de ventas (#TT00329/24)
> - SCM - Corregido error en el rellenado de los descuentos en las Tarifas de Trabajo a terceros<!-- Conto Lavoro --> (#TT00227/24)

### Patch 704.1-0019 - 29/02/2024

> - FI - En caso de creación de una Factura de venta desde Partida de anticipo, los vencimientos se crean con el flag Manual (#TT00672/24)
> - MES - Corregido bug en las declaraciones de producción (#TT00702/24)
> - SCM - Corregido error en la ejecución de un albarán a factura con precio con IVA incluido (#TT00220/24)
> - ARM - Añadido un mensaje para habilitar el registro si el inicio del pool personalizado falla tras la publicación (#TT00676/24)
> - SD - Para agentes con pago realizado o vencimiento alcanzado, la impresión de comisiones devengadas y la creación automática de liquidación de comisiones ahora consideran devengadas las comisiones insertadas en una factura a cero si en el documento hay una reversión de anticipo referida a un anticipo con partida cobrada (#TT00620/24)
> - SD - Solucionado poner a cero el precio unitario en nivel padre al insertar nuevos nodos hijos (#TT00735/24)
> - WMS - Añadido el flag "Mantener ubicación" en la tabla de "Tipos de listas de inventario". Esto hace que, en el inventario con WMS, la ubicación insertada no se modificará hasta que se lea otra ubicación (#TT00726/24)
> - WMS - En el formulario Lista de transferencia UDC del WMS, la pestaña Detalle UDC se habilitará solo después de insertar todos los datos de encabezado (#TT03336/23)
> - FI/CO/SH - en las tasas de IVA, añadido nuevo flag para identificar las tasas de venta extranjeras que cargan el plafond para el periodo siguiente (#TT00343/24)
> - MS - Corregido bug en los diagramas de órdenes de producción<!-- commesse --> (#TT00790/24)
> - WMS - Corregido bug en los formularios UDC que no visualizaba correctamente el estado de las listas de picking y transferencia en el WMS (#TT00792/24)
> - SD - Como resultado de la conversión de una Oferta en Pedido de Cliente también se transfieren los datos de Peso Neto y Peso Bruto, si están presentes en la oferta (#TT00746/24)

### Patch 704.1-0018 - 22/02/2024

> - WMS - Corregido bug en la forma de filtro de inventarios (#TT00605/24)
> - MES - Mejorada la funcionalidad de “Generación de lotes” presente en el filtro de los pedidos de producción. Ahora la cantidad del lote de origen no puede ser modificada si ya se han creado listas de picking, declaraciones de producción o algunos materiales ya han sido consumidos. En estos casos todavía es posible crear nuevos lotes de producción, pero sin poder variar la cantidad del lote de origen (#TT00353/24)
> - PM - Procedimiento de actualización de precios de proyecto y documentos vinculados, corregida conversión entre diferentes unidades de medida (#TT03661/23)
> - Forzada la recompilación del script si el proyecto es nulo pero ya ha sido liberado
> - SH - desarrollado webapi controller GeneralReadWritePublicController para la importación de datos maestros de clientes/proveedores (# TT00619/24)
> - WM - Implementado el procedimiento de Análisis de disponibilidad en la gestión de las órdenes de trabajo a terceros<!-- ordini di conto lavoro --> (#TT00350/24)
> - WM - Corregido bug en el procedimiento de Análisis de disponibilidad en la gestión de las órdenes de trabajo a terceros<!-- ordini di conto lavoro --> (#TT00190/24)
> - SH - Corrección del error que no mantenía los cambios en el Perfil si era predeterminado, en el módulo Actividades de Fluentis (#TT00592/24)
> - SCS - El pedido de trabajo a terceros<!-- ordine di conto lavoro --> generado por una orden de producción con fase externa ahora toma el precio de la Tarifa de Trabajo a terceros<!-- Listino di Conto lavoro --> incluso cuando solo está el artículo en la tarifa, sin la fase (#TT00439/24)
> - CO - Depreciación para controlling, tabla CO_DepreciationYearStartings replicando filas + valores incorrectos (#TT00477/24)
> - WM - Corregido error en la conversión de la cantidad alternativa proveniente de una devolución de Trabajo a terceros<!-- Rientro di Conto lavoro -->, en el formulario de Detalle de Movimientos<!-- Dettaglio Movimenti --> (#TT00517/24)
> - WM - Corregido bug en el cálculo de diferencias inventariales, en caso de que en la lista de inventario esté valorizada la unidad de medida alternativa (#TT00366/24)
> - WMS - Corregido bug en el formulario inventario del WMS, donde si las listas se gestionaban con UM Alternativas, el dato de la UM de Gestión calculada por factor de conversión no respetaba los decimales previstos por la unidad de medida (#TT00675/24)
> - WM - En los procedimientos de Creación de lote desde lote y Creación de lote desde lote con cambio de artículo, el Object Navigator presenta el objeto FSItemStockSummary (#TT00650/24)
> - MES - Corregido bug en el registro de declaraciones de producción con artículos alternativos presentes (#TT00649/24)
> - WM - Corregido error en el procedimiento de actualización de Costo Medio y Costo Último (#TT00585/24)

### Patch 704.1-0017 - 16/02/2024

> - ARM - revisión del guardado de nuevos elementos de las BPMN (#TT00486/24)
> - PM - Creada WEBAPI para importación de actividades de proyecto (#TT00400/24)
> - SD - Conversión de oferta en pedido, ocultada opción "llevar materiales/recursos de líneas de oferta como líneas de pedido" si en el tipo de oferta no está habilitada la opción "jerárquica" (#TT00276/24)
> - WM - Corregida visualización de la impresión de Inventario a cantidad valorizada (#TT00455/24)
> - Corregido el bug de las propiedades recursivas en las variables contextuales de Blockly
> - FI - lanzamiento controller webapi AccountingReadWritePublicController
> - BI - Corrección del paso al widget siguiente en los módulos de filtro al pulsar Enter desde teclado (#TT00569/24)
> - WEBAPI: resuelta la anomalía relacionada con la configuración de ResidualQuantity de albaranes de compra y de venta para líneas con cantidad 1 (#TT00480/24)
> - MES - Corregido bug en la visualización de lotes y números de serie en Declaraciones de Producción (#TT00487/24)
> - WM - Corregida visualización de los Movimientos de almacén<!-- movimenti di magazzino --> para los artículos con unidad de medida alternativa (#TT00531/24)
> - WM - Corregido bug en el procedimiento Bajo Mínimos de las impresiones de gestión que no calculaba correctamente la cantidad de reposición (#TT00481/24)
> - WEBAPI: resuelta la anomalía relacionada con la configuración de ResidualQuantity de albaranes de compra y de venta para líneas con cantidad 1 (##TT00479/24)
> - SCS - Si en los Parámetros de Trabajo a terceros<!-- Conto Lavoro --> está activo el flag ‘Considerar almacenes<!-- magazzini --> según el tipo DDT devolución’, en la Ejecución de una Orden el almacén<!-- magazzino --> se busca con las siguientes prioridades: primero en el Tipo DDT; luego en la Orden; luego en los Parámetros de Trabajo a terceros<!-- Conto lavoro -->. Si el Parámetro no está activo, las prioridades son: primero en la Orden, luego en los Parámetros (#TT00558/24)
> - SCM - Corregido bug en el procedimiento de creación de una Tarifa de Proveedor en Fluentis browser (#TT03643/23)
> - WMS - Corregido bug en la gestión de tildes en caso de que se elimine una tilde ligada a un movimiento con contrapartida (#TT00532/24)
> - FI - revisión de impresión de liquidación periódica de IVA, visualización del subreport del plafond solo si este tiene flag por defecto
> - PM: Proyecto con estructura wbs, se permite insertar hijos de tipo notas en los niveles padre codificados/no codificados (#TT00243/24)
> - FI - Contabilización de facturas: revisión de la parte analítica de contabilización de facturas con fechas de competencia distintas (#TT00240/24)
> - SCS - Si en los Parámetros de Trabajo a terceros<!-- Conto Lavoro --> está activo el flag ‘Considerar almacenes<!-- magazzini --> según el tipo DDT devolución’, en la Ejecución de una Orden el almacén<!-- magazzino --> se busca con las siguientes prioridades: primero en el Tipo DDT/Devolución; luego en la Orden; luego en los Parámetros de Trabajo a terceros<!-- Conto lavoro -->. Si el Parámetro no está activo, las prioridades son: primero en la Orden, luego en los Parámetros (#TT03583/23)
> - SD - Corregida lista de valores por defecto del campo tipo nodo para la oferta multinivel en caso de actualización de Fluentis de la versión 2021 a la versión 2023 (#TT00590/24)
> - PM - gestionado campo imponible importe en la estructura de árbol de los proyectos wbs, incluso en caso de artículos codificados con hijos tipo nota (#TT00335/24)
> - SH - Al crear un nuevo Contacto, la pestaña Parámetros de agrupamiento se llena con los valores por defecto (#TT00601/24)
> - SD - Pedidos de cliente con generación automática de proyecto, gestionado alineamiento número de pedido - número de proyecto en caso de proyecto sin numerador (#TT00274/24)
> - MPS - Insertadas algunas mejoras y correcciones en el procedimiento MRP (#TT02029/23)
> - MES - Corregido bug en las declaraciones de producción, que recalculaba los materiales empleados cuando se colocaba un artículo en la pestaña de Artículos Alternativos (#TT00571/24)
> - MES - Corregido bug en las declaraciones de producción que ocurría al momento del registro (#TT00606/24)

### Patch 704.1-0016 - 09/02/2024

> - SCM - solicitudes de compra - resuelto el problema de guardado de líneas en analítica sin centro de costo<!-- centro di costo --> (#TT00095/24)
> - Traducción del estado SDI según el diccionario y no según el código (#TT03342/23)
> - SH - En las actividades-tarea se insertó la indicación de la sociedad y división en la que se insertaron, para garantizar la correcta cabecera de los documentos abiertos directamente desde las actividades (#TT00280/24)
> - SD - Ofertas multinivel, bloqueada posibilidad de insertar niveles hijos distintos a notas, para niveles padre con tipo línea 3 - gastos (#TT00327/24)
> - SD - Ofertas multinivel, corregida visualización del campo Importe Imponible para los casos en que hay un nivel padre codificado con hijos de tipo nota (#TT00328/24)
> - ARM - corrección de la migración: se copia el campo GEN_RightConditionalRules de la DB de origen
> - SD - Resuelto el problema de la exportación de la columna "Estado SDI" (#TT00321/24)
> - SD - Ofertas multinivel, gestionada posibilidad de excluir selectivamente algunos materiales y recursos de la importación en el pedido; establecido el orden de las líneas de pedido como en la oferta; materiales valorizados en el pedido si el código padre al que están ligados es 0; de lo contrario, los materiales son 0 y el padre está valorizado; añadida posibilidad de asignar porcentaje de recargo masivamente en todas las líneas (#TT03372/23)
> - SD - Ofertas multinivel, en la conversión a proyecto y pedido, para cada línea de oferta y pedido se gestiona referencia a la correspondiente wbs del proyecto (#TT03542/23)
> - SD - Ofertas multinivel, introducida posibilidad de insertar en los niveles con tipo de línea codificado/no codificado, niveles hijos de tipo nota (#TT00245/24)
> - SH - Documental - Implementada la posibilidad de eliminar un documento almacenado en un objeto (#TT03426/23)
> - SCM - En Fluentis browser, dentro de la Recepción de mercancía, corregida la visualización de las líneas de artículos a partir de ejecución de pedidos (#TT00044/24)
> - WM - Corregido bug en el procedimiento Bajo Mínimos de las impresiones de gestión que generaba erróneamente la orden incluso para los artículos con tipo de abastecimiento "Compra" (#TT00438/24)
> - MPS - En la form de Secuencia de fases top down grid, introduciendo la secuencia y confirmando la línea, ahora el foco permanece en la línea modificada incluso después de la actualización del form (#TT00351/24)
> - WM - Corregido bug en valoración de almacén<!-- magazzino --> (#TT02573/23)
> - SH - Corrección del error que no llenaba la combobox de los Extra Data añadidos con Form Navigator (#TT00415/24)
> - SH - Al ejecutar Abrir form desde el combobox de un Extra Data añadido por Form Navigator, la tabla que se abre resulta llena (#TT00412/24)
> - SCS - Corrección de bug que bloqueaba la inserción de líneas de Órdenes de trabajo a terceros<!-- Ordini di conto lavoro --> (#TT00284/24)
> - Revisión de gestión de creación de facturas de compra desde archivo Sdi para importes con signo negativo
> - PM - Códigos del listado Tipo origen costo-ganancia sustituidos por los nuevos en documentos y tablas de configuración, luego eliminados (#TT03470/23)
> - Traducción del estado SDI según el diccionario y no según el código (#TT03342/23)
> - FI - cambio de cálculo para no deducible - versión RO
> - SD - Parámetros de la oferta de venta, añadida posibilidad de gestionar en el título del proyecto también los campos nuestra referencia / su referencia presentes en la oferta (#TT00247/24)
> - PM: Proyecto con estructura wbs, se permite insertar hijos de tipo notas en los niveles padre codificados/no codificados (#TT00243/24)
> - SD - Actualización impresión estándar Factura de venta (#TT00409/24)
> - SD - Creación archivo xml: revisión del campo régimen fiscal en autofactura con cedente codificado como agente (#TT00469/24)
> - SD - Añadida la posibilidad de tramitar solo líneas descriptivas dentro de los documentos de venta (#TT00429/24)
> - SD - Cálculo Comisiones: Actualizado uso del parámetro de atribución de comisiones para líneas de Anticipo y Estorno de anticipo (#Tipo de línea 6 y 7) (#TT001258/21)
> - SH - Activada la factura electrónica token versión RO (#TT00426/24)
> - SD - Ofertas multinivel desbloqueada inserción de recursos también para líneas codificadas intermedias; para líneas padre codificadas con hijos tipo nota, si los recursos y materiales se insertan a nivel de hijos y se prevé actualización de precios desde recursos/materiales, el padre se actualiza con la suma de los valores presentes en los hijos (#TT00358/24)
> - FI - contabilidad compras: cierre IVA no deducible con IVA diferido (#TT00473/24)
> - FI - Revisión del procedimiento de contabilización automática de notas de crédito con precio con IVA incluido (#TT00119/24)
> - SD - Ofertas multinivel, en caso de descripción de artículo o nota muy larga, establecida longitud máxima del campo con barra de desplazamiento. Para los demás documentos pedidos cliente, albaranes de venta y albaranes de trabajo a terceros, factura de venta, extensión máxima gestionada solo para el campo notas (#TT00485/24)
> - QY - Resuelto bug en Control de artículos (#TT00135/24)
> - MPS - Resuelto bug en el procedimiento MRP (#TT00456/24)
> - SD - En las facturas de venta, habilitada la modificación de los datos de analítica cuando el documento está gestionado para el Sdi y no está contabilizado (#TT00182/24)
> - SD - Durante la conversión de Oferta cliente en Pedido cliente ahora se proponen almacén<!-- magazzino --> y causal<!-- causale --> establecidos en los Tipos de pedido de cliente (#TT00406/24)
> - SCM - RDA: el precio propuesto en las líneas RDA es el neto proveedor obtenido aplicando todos los descuentos aplicables al artículo (#TT00127/24)

### Patch 704.1-0015 - 31/01/2024

> - FI - Creado nuevo campo "Código otras sumas no sujetas a retención" en Gestión tipo de retención (#TT01453/23)
> - Añadida función al remitente de script WebApi para notificar información sobre el registro BizLink
> - FI - CU2024 - Lanzamiento del nuevo reporte Certificación Única 2024
> - SD - Corrección del error generado en la Creación de Factura desde Búsqueda de Pedidos de Cliente, en caso de Pedido con una línea de artículo codificado, una línea de artículo no codificado y una línea de nota (#TT00291/24)
> - Solucionado bug para archivo Intrastat (#TT00299/24)
> - CRM - Cuando una Actividad se Completa, se actualiza la Fecha de cierre de la Actividad dentro del Workflows Log que la creó; si la Actividad se Reabre, la Fecha de cierre en el Workflows Log se elimina (#TT00097/24)
> - SD - En las ofertas jerárquicas, pestaña Materiales, aumentados decimales gestionados en el campo Costo Unitario (#TT00254/24)
> - MPS - Corregido bug en costeo donde no se visualizaban los costes previstos de los materiales y el valor total del coste de mano de obra (#TT02967/23)
> - SH - Prototipos - Se ha implementado la codificación de artículos y componentes no codificados (#TT03604/23)
> - SD - Ofertas multinivel, el procedimiento de duplicar considera también los nuevos flags de línea Excluir Recursos en Pedido cliente y Excluir materiales en pedido cliente (#TT00357/24)
> - WMS - Corregido bug que no reportaba correctamente los datos relativos al operador en las listas de inventario. Corregido bug en las listas de transferencia al insertar ubicación (#TT00153/24)
> - WM - Ajuste Generación DDT desde Picking con Cambio Errado (#TT00364/24)
> - CRM - El Manager de la tarea puede modificar el Operador/Rol asignado a la Actividad creada (#TT00211/24)
> - CO - fix filtro por división - se toma la división de movconti y no de registro
> - WM - Añadido en el reporte del Diario de almacén<!-- magazzino --> el filtro por sociedad y división (#TT00375/24)
> - FI - Gestión de exportación de recibos de horas de empleados para Sistemas (#TT00212/24)
> - SD - En la Ayuda de artículos, pestaña Documentos, se rellenan los campos Clase, Código y Descripción de artículo (#TT00381/24)
> - SD - Ofertas multinivel se hacen visibles fecha de entrega y periodo previsto de entrega en la línea de la estructura wbs. Eliminado bloqueo de cantidad = 1 para líneas wbs con materiales y recursos. Si el precio se calcula desde materiales y recursos, el precio unitario se calcula desde la suma del ingreso de materiales y/o recursos, dividido por la cantidad indicada en línea wbs (#TT00123/24)
> - PM - Procedimiento de creación de proyecto desde template, si están presentes direcciones de destinatario y destino por defecto para el cliente, prevalecen sobre las indicadas en el template (#TT00122/24)
> - SCM: A raíz de un cambio de cuenta dentro de un pedido de proveedor ya no se mantiene el imponible valorizado (#TT00035/24)
> - SCM - Solución del error al guardar un documento, después de insertar un artículo con lote partiendo de la selección del Tipo de línea (#TT03505/23)
> - SCM - Solución del error al guardar un documento, después de insertar un artículo con lote partiendo de la selección del Tipo de línea (#TT03505/23)
> - PM - el campo descuento de las intervenciones acepta valores decimales en encabezado y en línea de servicio (#TT03553/23)

### Patch 704.1-0014 - 24/01/2024

> - WM - Revisión del Navegador de artículos con adición de nuevas pestañas (#TT00130/24)
> - MES - Corregido bug que no mantenía la relación con los pedidos hijos al momento de liberar los pedidos planificados en órdenes de producción<!-- ordini di produzione --> (#TT00161/24)
> - SD - Revisión de la gestión del bloqueo de crédito cuando el documento en modificación es el que causa el exceso y ya está autorizado (#TT00206/24)
> - SCM - En el procedimiento de Creación Automática de Pedidos, pestaña Operaciones, se agrupan en una sola operación todas las líneas del mismo Pedido de proveedor creado, incluso si las ejecuciones han sido múltiples (#TT01891/23)
> - SCM - Al abrir el procedimiento de Creación Automática de Pedidos y desplazarse a la pestaña Pedidos cliente del Filtro, ya no se redirige automáticamente a la pestaña Selección de proveedor (#TT03511/23)
> - SD - En las ofertas jerárquicas habilitada posibilidad de gestionar para los niveles padre de tipo codificado o no codificado, de niveles hijos solo de tipo línea 4-notas (#TT00245/24)
> - SD - En las ofertas jerárquicas, pestaña Materiales, aumentados decimales gestionados en el campo Costo Unitario (#TT00254/24)
> - SD - En las ofertas jerárquicas, se hacen visibles en la estructura de árbol y en la pestaña Actividades la fecha y el periodo de entrega previsto. Eliminado el bloqueo de cantidad 1 en caso de precio actualizado por Materiales y/o Recursos (#TT00123/24)
> - Añadida posibilidad de añadir un prefijo personalizado a FlowOperation para usar una personalización de flowOperation

### Patch 704.1-0013 - 19/01/2024

> - Resuelto el problema con el servicio OData personalizado para crear un nuevo script o actualizarlo (#TT00067/24)
> - MS - Resuelto bug en Programación General y MRP relacionado con el análisis de disponibilidad (#TT03566/23, #TT00033/24)
> - WMS - En el formulario lista de transferencia UDC el botón Guardar se habilita solo después de insertar todos los datos necesarios (#TT03336/23)
> - SD: Cálculo de costo de materiales oferta para el tipo origen costo "tarifa proveedor", en caso de cambio de tipo de línea, cantidad y proveedor (#TT03372/23)
> - MPS - Corregido bug en el cálculo del análisis de disponibilidad para artículos con miles de componentes (#TT00173/24)
> - PM - los proyectos plantilla se visualizan en el formulario de búsqueda (#TT00007/24)
> - MES - Resuelta excepción en el registro de declaración con lotes cuando estamos en una fase después de la primera y Fluentis debería descargar el lote de la fase anterior (#TT00185/24)
> - WM - Corregido bug que mostraba incorrectamente el ancho de una UDC en el form de Empaquetado de la ficha del artículo (#TT00177/24)
> - MS - Parámetros MRP Artículo - implementación Excluir de planificación (#TT01778/23)
> - CRM - Sincronización del calendario entre Fluentis y Outlook (#TT03320/23)
> - MPS - Corregido bug en la gestión de estados de encabezado y de línea de las órdenes de multiproducto (#TT03550/23)
> - Permitir notificar los errores del módulo de script con la factura Electrónica
> - MES - Corregido bug en las Declaraciones de Producción que cambiaba el almacén<!-- magazzino --> y la causal<!-- causale --> de consumo de un artículo al insertar una cantidad de descarte (#TT00025/24)
> - SD- La creación del pago de la liquidación de agentes ahora reporta el tipo/solución de pago de la liquidación y no la del registro del agente (#TT00192/24)
> - CRM - Revisión de los totales de las líneas nodo de los Marketing Budget
> - SH - Fix de carga de información para tareas tras actualización (#TT00150/24)
> - MPS - Requisitos de materiales y parámetros - modificación de layout - Parámetros de Lanzamiento de solicitudes de compra autorizadas y Lanzamiento de ordenes de producción ejecutivas han sido movidos a los Parámetros de Lanzamiento de Órdenes planificadas (#TT03085/23)
> - Añadido lector de propiedad DataProvider para el script
> - FI - corregido bug en el form de diferencia entre saldo contable y partidas cuando la suma de las partidas a comparar era de partidas todas del mismo valor (#TT03315/23)
> - SCM - Corregido bug en los DDT de compra que, en caso de modificar el precio en factura, seguían valorizados después de eliminar la factura (#TT00147/24)
> - MPS - Corregido bug en el lanzamiento de las órdenes planificadas de trabajo a terceros<!-- conto lavoro --> (#TT00170/24)
> - FI - Gestión de exportación de recibos de horas de empleados para Sistemas (#TT00212/24)
> - Añadido responsable de nómina para Sistemas (#TT00151/24)

### Patch 704.1-0012 - 16/01/2024

> - MS - Solución del error que cerraba Fluentis al seleccionar varios Tipos de pedido en los filtros de la Generación de Órdenes de Producción para los Pedidos cliente (#TT00088/24)
> - SH - la ejecución de workflows desde pestañas en los formularios de búsqueda ahora crea attachments sin replicarlas (#TT00103/24)
> - WMS - Mejorado el contraste entre las filas insertadas y la seleccionada (#TT00102/24)
> - WMS - Corregido bug en el framework que generaba el bloqueo de la aplicación (#TT00117/24)
> - WMS - Corregido bug en la Confirmación de Listas de Transferencia del WMS que por ello el movimiento de contrapartida no reportaba la hora exacta (#TT00131/24)
> - MS - Corregido bug que causaba un error en la programación de una orden<!-- commessa --> en presencia de una personalización sobre artículos (#TT00085/24)
> - SCM - Corregido bug en la creación de una Solicitud de Compra que no detectaba el precio de un artículo con variante según la tarifa de proveedor (#TT03711/23)

### Patch 704.1-0011 - 11/01/2024

> - Revisión impresión BankCreditSituation para renombrar objeto
> - MS - Secuencia de fases - Resuelto anomalía en la ejecución de la función 'Cambio de fecha' (#TT03670/23)
> - SH - Prototipos - Se ha implementado la gestión de artículos y componentes no codificados (#TT02948/23)
> - WMS - Corregido bug en Confirmación de transferencia UDC al actualizar los datos presentes en la tabla de detalle UDC (#TT03340/23)
> - SD - Creación de la pestaña Parámetros de agrupamiento para Cliente/Proveedor en el Maestro de contacto. Estos parámetros tienen prioridad respecto a los Parámetros de agrupamiento generales (#TT03564/23)
> - WM - Resuelto bug en la creación de los Planes de carga que no reportaba correctamente la cantidad modificada manualmente al usar el botón Insertar pedido (#TT03642/23)
> - CRM - La columna Importe total en la Gestión de Previsiones de Venta reporta el producto de Cantidad total y Precio medio unitario; además cada nodo padre de línea reporta la suma de los importes de las líneas hijas. En la Impresión de Cierre de previsiones de venta, se insertó el filtro Año para elegir las Previsiones de venta. Con la inserción del campo Previsión de venta, automáticamente se llena el Tipo periodo (igual al presente en el Tipo de previsión de venta). Finalmente, el Detalle de tipo de periodo puede elegirse según el Tipo periodo insertado (#TT0318/23)
> - PR - revisión inserción de líneas en el formulario de Gestión de liquidez (#TT03677/23)
> - FI - en recuperación de amortización de activos del controlling, revisión del uso del flag de reducción de porcentaje primer año (#TT03681/23)
> - FI - modificaciones en la gestión de campos de estructura variable para la CU (#TT00019/24)
> - SH, PR - revisión de gestión de edición de cálculo de castelletti en registro de bancos y en cuadernos de presentación (#TT03680/23)
> - MES - Resueltos bugs en declaraciones de producción en caso de gestionar cantidades desechadas con artículos de lote y también en caso de un registro con cantidad producida igual a cero y cantidad desechada mayor que cero (#TT03708/23 - #TT00005/24)
> - SD - Corregido funcionamiento del filtro sobre los Extra Data en los DDT de venta (#TT00058/24)
> - SD - En los documentos de venta, en caso de valoración de centros en todas las dimensiones, al guardar se devuelve un mensaje de eliminación de las líneas sin centro de costo<!-- centro di costo --> en vez de un bloqueo a gestionar manualmente línea por línea (#TT00065/24)
> - SH - Creación de nuevo año - cuando el parámetro fix es true - si existen líneas con año de fecha de fin de validez >= año - no actualizar a null (#TT00093/24)
> - MES - Corregido bug en las declaraciones de producción que no cargaba correctamente las UDC creadas dentro de la declaración (#TT03393/23)
> - WM - Corregido bug en Visualización de existencias en la que no se visualizaba correctamente la existencia de los artículos que contienen en la descripción el carácter ‘#’ (#TT00006/24)
> - WMS - En la pestaña UDC de la gestión de tildes de WMS el botón Imprimir UDC se activa correctamente (#TT00091/24)

### Patch 704.1-0010 - 22/12/2023

> - FI - Corregido bug en la contabilización de remesa Ri.ba (modalidad iva por caja) que contiene efectos creados agrupando más de una partida, que generaba asientos de transferencia de IVA<!-- giroconti iva --> con importes incorrectos (#TT02548/23)
> - FI - revisión de rollback contabilización impagados (#TT03579/23)
> - CRM - Resuelto error que añadía columnas vacías al guardar un Perfil en la Búsqueda de Oportunidades (#TT03567/23)
> - SH - Prototipos - Se ha implementado la gestión de artículos y componentes no codificados.(#TT02948/23)
> - PM: gestionada propagación extradata desde artículo a líneas de servicios en la intervención (#TT03515/23)
> - WM- Alineación técnica en la selección de líneas desde la cuadrícula de existencias para crear un registro de almacén<!-- registrazione di magazzino --> (#TT02776/23)
> - WMS - Corregido bug en Mover artículo del WMS que no insertaba horas, minutos y segundos en el campo fecha de creación de los movimientos de contrapartida (#TT02482/23)
> - MES - Resuelto bug en los reportes de producción que insertaba un valor distinto de cero en la cantidad producida cuando se insertaba una suspensión (#TT03411/23)
> - MES - Corregido bug en las declaraciones de producción que enlazaban la causal<!-- causale --> de carga/descarga equivocada tomándola de los semielaborados WIP, en vez de la del box de semielaborados en los parámetros de producción (#TT03508/23)
> - WMS - En el formulario de confirmación de transferencia del WMS añadido el mensaje de "Operación realizada" también en caso de que se confirme directamente desde el filtro de búsqueda (#TT03339/23)
> - PM - insertados 2 nuevos campos en los proyectos para trazar si el proyecto fue generado desde oferta (#TT03454/23)
> - WM - En el maestro de lotes, en las pestañas carga y descarga implementada la posibilidad de visualizar los detalles de las cantidades gestionadas añadiendo las columnas "Número de línea", "Cantidad" y "Unidad de medida" (#TT03487/23)
> - SD - Introducidas nuevas funcionalidades para las ofertas jerárquicas, como copiar/mover niveles, crear RDA, sustituir número wbs, FTE para los recursos, actualización de precio desde recursos/materiales (#TT03084/23)
> - SD - Introducida gestión de ofertas con estructura jerárquica (#TT02881/23)
> - SD - Introducida gestión de creación automática de proyectos desde oferta (#TT03040/23)
> - SD - Gestionada descripción extendida del artículo para el área de ventas; añadida posibilidad de excluir por línea materiales/recursos en los pedidos cliente; mejorado el orden de las líneas del pedido generado por oferta jerárquica; bloqueo de conversión de oferta en pedido si hay prototipos no codificados; gestión de precio de materiales o línea de oferta en el pedido según cómo estén valorizadas las líneas de la oferta; gestionada posibilidad de propagación del porcentaje de recargo en todas las líneas de materiales con un solo paso (#TT03372/23)
> - SD - Mejorada la gestión de prototipos en las ofertas cliente (#TT03100/23)
> - FI - corrección de valores erróneos en el centro de costo<!-- centro di costo --> en contabilidad en caso de porcentaje no deducible rumano (#TT03651/23)
> - SCM - el precio artículo de las solicitudes de oferta ya no se define según las solicitudes de compra previas (#TT03518/23)
> - SCM - cuando el valor de las líneas en la pestaña generador RDO son 0 entonces están a 0 en la RDO creada usando el procedimiento (#TT03458/23)

### Patch 704.1-0009 - 14/12/2023

> - PM - actualización de fecha y recurso asignados a la wbs del proyecto, actualizan automáticamente los datos en la intervención planificada si está presente y los correspondientes calendarios de recursos (#TT03327/23)
> - SCM - Importación de archivo xml: revisada la formateación de la fecha en la importación del archivo xml (#TT03194/23)
> - FI - RO - añadir nuevas cuentas en FastStart
> - WM - Crea la posibilidad de llegar a una lista de inventario de un segundo usuario incluso si el inventario es abierto por otro usuario. Y un inventario cerrado se vuelve no modificable (#TT03443/23)
> - SCM - En las facturas de compra, el cambio de fechas de competencia en la línea de artículo ahora se propaga a las líneas de analítica subordinadas (#TT03214/23)
> - FI - Contabilizar las facturas de venta - con descuento en los pagos - no significa tomar el valor del descuento, sino cerrar todos los vencimientos (#TT03408/23)
> - Fluentis- Actividades: Resuelto habilitación para modificar actividades ya insertadas (#TT03391/23)
> - SDI - Activación del botón de creación de facturas de compra para RO
> - MES - Resuelto bug en los reportes de producción que insertaba un valor distinto de cero en la cantidad producida cuando se insertaba una suspensión (#TT03411/23)
> - MS - Programación general - Se resolvió la anomalía de ejecución de la orden en caso de que no haya disponibilidad de los artículos requeridos. Caso específico de configuración de programación con "Agrupación por artículo" y artículo padre "Ficticio" (#TT03424/23)
> - MS - Programación general - Se ha corregido la propuesta, en las órdenes de trabajo a terceros<!-- ordini di conto lavoro -->, de los materiales de padres ficticios cuyo consumo se prevé en fases específicas de trabajo siempre que se indique la misma fase y subfase que debe estar presente tanto en el padre no ficticio como en los hijos ficticios en cada nivel de la lista de materiales<!-- distinta base --> (#TT03007/23)
> - SCM - Impresión de solicitudes de compra - Ahora también está disponible la impresión del documento desde el filtro de búsqueda de solicitudes de compra y no solo desde dentro del documento
> - CO - revisión de procesamiento de periodos de controlling para mensualizar datos más allá del ejercicio corriente (#TT03186/23)
> - Resuelto el error de restablecer la carpeta de trabajo al cargar un archivo externo en Blazor
> - MPS - Corregido bug en la actualización de estado de líneas de la orden de producción multiproducto de compra y trabajo a terceros<!-- conto lavoro --> (#TT01533/23)
> - SCS - Solución del error que impedía la inserción de UM alternativas en los Artículos de Devoluciones de trabajo a terceros<!-- Rientri di conto lavoro --> que las requieren (#TT03382/23)
> - PM - resuelto caso de eliminación de recursos asignados a una wbs en caso de cambio de artículo de la wbs. Ref. ticket (#TT03421/23)
> - WM - Corregido bug en análisis de disponibilidad relacionado con las líneas de órdenes de producción<!-- commesse di produzione --> (#TT03224/23)
> - CO - creación de cierres interanuales, revisión de gestión de saldos de los centros de costo<!-- centri di costo --> (#TT03530/23)