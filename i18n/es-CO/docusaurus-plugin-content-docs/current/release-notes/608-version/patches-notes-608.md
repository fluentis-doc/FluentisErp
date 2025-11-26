--- 
title: Notas de la versión Versión 608
sidebar_position: 2
ai_generated: true
---

### Patch 608.1-0081 - 23/10/2025

> - MPS - Corregido bug en la programación general que generaba en algunos casos pedidos planificados con cantidad duplicada (#TT04502/25)
> - PR - desgloses de anticipo, revisión de la gestión del tipo importe 'imponible'. **¡Atención! Esta modificación puede impactar los perfiles** (#TT04280/25)
> - PR - en los desgloses de anticipo se ha habilitado la posibilidad de cambiar el importe anticipado, recalcando el porcentaje relativo (#TT02585/25)
> - PR - impresión lista de facturas anticipadas/cobradas, revisión del repository method para la gestión del filtro cobradas. **¡Atención! Esta modificación puede impactar los perfiles** (#TT04572/25)
> - WM - Duplicar artículos- crear la posibilidad de extender de forma personalizada a otras propiedades a duplicar (#TT04607/25)

### Patch 608.1-0080 - 13/10/2025

> - FI - Centros de Costo/Actualización a la 50 Flu 2021 (#TT03826/24)
> - FI - Corregido el cálculo de LIPE erróneo en presencia de IVA no deducible y Pro-Rata (#TT03934/25)
> - FI - El cambio de categoría de activo ahora cambia el subcuenta patrimonial en cabecera de activo (#TT03931/25)
> - MPS - Corregido bug en el procedimiento MRP que en algunos casos no eliminaba los pedidos planificados (#TT04172/25)
> - MPS - Implementada en las órdenes independientes o previsionales (en estado no examinado o planificado) la posibilidad de modificar las fechas de inicio y fin de previsión (#TT03335/25)
> uso del campo Creditor en vez de la Razón social (#TT04407/25)
> - WM - Corregido fallo en el filtro en componentes vencidos en la introducción masiva de componentes de lista base (#TT04070/25)
> - WM - Optimizada la gestión de los prototipos en el caso de que estuvieran compuestos por un número muy elevado de componentes (#TT04291/25)

### Patch 608.1-0079 - 12/09/2025

> - ARM - Corrección de la ejecución de las acciones para documentos múltiples (#TT02094/25)
> - MES - Ahora con el procedimiento de liberación de las órdenes de producción solo se mueven los artículos que tienen tipo de extracción Automática en los parámetros MRP (#TT03691/25)
> - MS - En la pestaña bajo stock de la generación de órdenes de producción también se consideran los lotes económicos (#TT02835/25, #TT03073/25)
> - PR - Creación manual de movimientos de pedidos de clientes/proveedores en el cash flow, optimización del procedimiento. Cuando las filas a insertar son más de 100, Fluentis señala que es necesario guardar directamente el cash flow. **¡Atención! Esta modificación puede impactar los perfiles** (#TT01803/24)
> - PR - Propiedades DueDate/EstimatedDate sin minutos/horas y bug corregido para los comandos de Pedido Subcontratado, Devolución y Pedido de Compra (#TT02672/25)
> - SCM - Corregida la propuesta de precios en los Pedidos de Conto Lavoro<!-- conto lavoro --> liberados desde Producción, en los casos en que la tarifa prevea precios diferentes por fase de trabajo (#TT03418/25)
> - SCM - Corregido error en la generación del Informe de Plazos de Pedidos a proveedores (#TT03881/25)
> - SD - Pedidos y Ofertas de venta: Introducida la posibilidad de guardar un perfil incluyendo información relativa a Idioma y País en la cuadrícula (#TT02870/25)
> - SD, SCM - Corregida la valorización de los DDT de Compra y Venta en presencia de parámetros de agrupamiento diferentes en el maestro de contacto (#TT03013/25)

### Patch 608.1-0078 - 07/08/2025

> - Bizlink - importación desde DocFinance, si la partida a cerrar está ligada a una remuneración de profesional con partidas gestionadas netas ahora Fluentis añade automáticamente el asiento que valora la deuda de la retención (#TT03211/25)
> - SD - Impresión de Factura y DDT de Venta: Resuelta la vista previa de impresión que aparecía vacía si no está activo el flag impreso (#TT03536/25, #TT03531/25)

### Patch 608.1-0077 - 31/07/2025

> - CO - En el módulo Cierres interanuales, para el procedimiento de Valorización área de compras y ventas se han revisado las pruebas realizadas en la ejecución del rollback (#TT04436/24)
> - CO - Revisión ejecución procedimiento (#TT03054/25)
> - FI - Revisión del cálculo de visualización de cuentas para el cómputo del saldo previo en la columna progresiva (#TT03163/25)
> - FI - Revisión contabilización de compras/ventas para la asignación, en la pestaña intrastat del asiento, de la nación del código iso del número de IVA; modificación de la inserción manual en la cuadrícula intrastat (#TT01817/25)
> - PR - Corregido error en el cálculo del cashflow relativo al flujo de la solicitud de compra (#TT03145/25)
> - PR - Creación de archivo Sepa, modificada la gestión de caracteres especiales '-' (#TT02214/25)
> - PR - Resuelto problema en la fase de procesamiento del cashflow debido a la falta del código DocFinance en la tabla Maestros correspondiente a la sociedad en uso (#TT02965/25)
> - SCM - Corregido error en el procedimiento de Entrega de Pedidos que, tras la creación del DDT, no actualizaba correctamente el estado de entrega en el pedido (#TT03117/25)
> - SCM - Resuelto error que no calculaba correctamente el valor del porcentaje en la impresión de Facturación de compras (#TT02798/25, #TT05463/24)
> - SD - Al duplicar un documento de venta con Declaración de intención se comprueba la presencia de una declaración activa; si no existe, el tipo impositivo IVA de los artículos se retoma de la ficha del cliente o del artículo (#TT03382/25)
> - SD - Fix problema SalesOrder widget (#TT01258/21)
> - WM - Optimizada la explosión de los componentes en los prototipos y corregido bug que no mostraba correctamente los componentes (#TT03144/25)
> - WM - Resuelto bloqueo en la fase de eliminación de artículo con recálculo de costes ya realizado (#TT02818/25)

### Patch 608.1-0076 - 03/07/2025

> - MPS - Corregido bug en la programación general en caso de que se lanzara usando la lógica lo antes posible (#TT02745/25)
> - SCM - Corregido error en la Entrada a almacén<!-- magazzino --> de DDT en moneda extranjera que no convertía el valor de los gastos repartidos introducidos en el resumen del DDT (#TT02447/25)
> - CRM - Resolución de no funcionamiento del Mapa de Oportunidades (#TT02741/25)
> - SCS - Creación de Pedido de Conto Lavoro<!-- conto lavoro --> desde la liberación de pedidos planificados: Si el proveedor tiene una lista de precios predeterminada, esta se refleja en todas las filas de artículo. En caso de artículos no presentes en la tarifa, el precio se establecerá a 0 y se activará el flag Precio manual en el pedido. Si el proveedor no tiene tarifa predeterminada, la tarifa se reflejará en las filas sólo si se utiliza para retomar el precio (#TT00776/25)
> - SH - La verificación sobre la validez de las fechas de competencia introducidas en la pestaña Analítica de los documentos de Compra y de Venta y sobre las filas de artículo de las Facturas de Venta ahora se realiza al confirmar la fila (#TT02693/25)
> - WM - Corregido bug en la valorización de almacén<!-- magazzino --> referente a la carga de los serial number (#TT02681/25)
> - SCM - Resuelto error que no reflejaba el flag Precio manual en el Pedido proveedor generado desde una Solicitud de Oferta (#TT02721/25)

### Patch 608.1-0075 - 20/06/2025

> - SD - Solucionado error que dejaba valorizado el DDT después de la eliminación de la factura vinculada (#TT02690/25)
> - SCS - En los Pedidos de Conto Lavoro<!-- conto lavoro --> ahora es posible asociar un Pedido de Producción a la fila de artículo solo si también se especifica la fase (#TT01078/25)
> - PM - Declaración de actividades de proyectos - corregido el funcionamiento del guardado de extradata en el perfil, relacionado con una tabla configurada en producción (#TT02307/25)

### Patch 608.1-0074 - 13/06/2025

> - PM - Intervenciones - servicios, cambiado parámetro en el algoritmo de asignación de precio. Ahora siempre está habilitada la búsqueda en todas las tarifas predeterminadas (#TT01320/25)
> - SD - La fila de gasto Conai, al guardar el documento, toma el mismo IVA de la fila de artículo que la ha generado (#TT02599/24)
> - CO - En los asientos de integración, exclusión de filas con días totales 0 (#TT02417/25)
> - SCM - En la pantalla de Detalle de filas de pedidos a proveedores ahora es posible aplicar un filtro en el campo Descripción proveedor. **¡Atención! Esta modificación puede impactar los perfiles** (#TT02511/25)
> - WM - Implementada la migración de los Serial Number desde la versión F2015 (#TT01764/25)
> - SD - Optimizado el procedimiento de creación de Facturas a partir de DDT de Venta (#TT02317/25, #TT00435/25)
> - SD - Revisado cálculo en la impresión de comisiones devengadas por notas de crédito, ahora con el criterio del pago realizado siguen la misma lógica de las facturas (#TT02360/25)
> - SCS - Pedido de conto lavoro<!-- ordine conto lavoro -->, corregida falta de introducción de unidad de medida cuando se introduce un artículo codificado en la pestaña de artículos (#TT01773/25)
> - SD, SCM - Se ha introducido un control en la fase de introducción de fechas de competencia en los documentos, que impide ingresar una fecha fin anterior a la fecha de inicio. El control se realiza sobre las fechas introducidas en la pestaña Analítica de todos los documentos de compra y venta y sobre las filas de artículo de las Facturas de Venta (#TT02421/25)
> - PR - Pago a proveedor - gestionadas las diferencias de cambio (#TT02563/25)
> - FI - Comunicación liquidaciones periódicas de IVA: revisada la generación del archivo en caso de que el campo "Compromiso de presentación telemática" esté configurado en "Ninguno" (#TT02451/25)
> - FI, SD - Migración entorno 2015-2023 (#TT02327/25)
> - FI - Contabilización pagos remuneraciones: resuelto problema en la contabilización de pagos de remuneraciones con retención y seguridad social activa (#TT01857/25)
> - PR - Generación de archivo transferencias Sepa, sustitución automática de caracteres inválidos (#TT02214/25)
> - PR - Resuelto error importación DocFinance (#TT02102/25)
> - FI - Tomar la primera descripción no vacía para PostingData.MovementDescription durante la importación/gestión de DocFinance (#TT02172/25)
> - PR - La exportación del cash flow para DocFinance ahora inserta en el archivo todos los cash flow de todas las sociedades que exportan datos a DocFinance (#TT02723/25)
> - MES - Resuelto error que, en caso de eliminación de una Orden de Producción asociada a una fila de artículo de una Orden de Conto Lavoro<!-- conto lavoro -->, provocaba la eliminación total de la Orden de Conto Lavoro<!-- conto lavoro --> (#TT01078/25)

### Patch 608.1-0073 - 09/05/2025

> - CO - Corregido bug en el cálculo de coste que no leía correctamente el valor de la tarifa de proveedor de conto lavoro<!-- conto lavoro --> (#TT01472/25)
> - SD - Modificada prueba al guardar facturas, por el nuevo tipo de Autofactura TD29 (#TT01693/25)
> - SD - Resuelto error en la eliminación de un Pedido Cliente creado a través de la conversión de una Oferta, cuando el tipo de pedido preveía la generación automática del proyecto (#TT01211/25)
> - SCM - Revisión contabilización facturas a recibir en albaranes compra con artículos ficticios cargados en almacenes<!-- magazzini --> diferentes (#TT01550/25)
> - SCM - La contabilización facturas a recibir utiliza el precio neto de la fila en lugar de calcular (precio*cant)-descuentos (#TT01612/25)
> - FI - Revisión gestión causa automática para contrapartida IVA en suspensión, excluido mensaje de protocolos no ordenados (#TT01845/25)
> - FI - Falta declaración de intención desde Documento SDI (#TT01820/25)
> - FI - La creación Intra2 compras desde facturas de compra ahora valoriza la nación del número de IVA desde el campo IsoCode del registro maestro y no desde la nación del registro maestro como tal (#TT01817/25)
> - CO - en los cierres interanuales, los procedimientos Asientos de ajuste, Asientos de integración y Contabilización existencias ya no verifican si las cuentas sujetas están vencidas o no (#TT05145/24)
> - FI - Cierre automático de cuentas, revisión contabilización (#TT02116/25) En el procedimiento Asientos de ajuste, revisión de la asignación del enlace de relación a los asientos de ajuste.

### Patch 608.1-0072 - 27/03/2025  

> - SD - En las Facturas de Venta descargadas para las que se ha generado el documento Sdi las cantidades y los precios de los artículos ya no son editables (#TT00881/25)
> - FI - Revisión cálculo amortización en categorías configuradas con el conteo diario (#TT01271/25)
> - WM - Restablecido valor en registro maestro de artículo pestaña tarifa de proveedores campo cuenta proveedor (#TT01233/24)
> - FI - Revisión contabilización cierre/reapertura de cuentas para caso de periodo sin costes o sin ingresos (#TT00308/25)
> - SD - Corregido problema de visibilidad en la impresión de las comisiones devengadas en presencia de facturas a cero creadas anulando anticipos de partidas de anticipo (#TT00783/25)
> - SD - Corregido problema de visibilidad del formato de las fechas de documento en la impresión de las comisiones devengadas cuando la factura tenía en su interior dos agentes, uno con tipo devengado factura emitida, el otro con pago realizado (#TT01134/25)
> - PR - En un nuevo desglose de anticipo de facturas, el cambio de tipo de desglose actualiza ambos subcuentas de la cabecera del desglose (#TT01384/25)

### Patch 608.1-0071 - 13/03/2025  

> - Agregado ConnectionTimeout al servicio BizLink (#TT00803/25)
> - SD - Fix cálculo AgentSettlement en caso de facturas de venta con varios agentes (#TT01134/25)
> - SD - Fix ejecución SalesOrder y SalesDeliveryNote en problemas custom (#TT01227/25)
> - revisión campo 'Código fiscal sustituto subentrante'
> - MES - Corregido bug en el registro de las declaraciones de producción (#TT00352/25)
> - MS - Corregido bug en el cálculo de horas inicio y fin de las fases en el procedimiento de programación a capacidad finita (#TT00820/25)
> - FI - en los asientos de ajuste, habilitación de la eliminación desde teclado de las filas seleccionadas (#TT01093/25)
> - FI - Asientos contables: revisión del mensaje de aviso cuando se abre un asiento contable que ya tiene su ficha de activos abiertos (#TT01023/25)
> - WMS - En la gestión del check del WMS, ahora es posible ir en negativo para artículos gestionados con lotes si en los parámetros iniciales de almacén<!-- magazzino --> se activan los flags correspondientes (#TT05102/24)

### Patch 608.1-0070 - 28/02/2025

> - FI - Impresión liquidación IVA anual: resuelto error en la impresión de la liquidación anual de IVA cuando se activaba el flag en los parámetros ‘Guardar el número de la última página’ (#TT00200/25)
> - PR - Campo "Progreso" en el módulo Gestión de liquidez (#TT02060/24) Se han realizado cambios en el campo progreso del módulo Gestión de liquidez. *El perfil podría verse afectado por los cambios*
> - MS - Corregido bug en el funcionamiento del botón Liberar pedidos planificados presente en el procedimiento MRP (#TT00837/25)
> - SD - Optimizada la búsqueda en los formularios de Entrega de pedidos y DDT en los documentos de Venta (#TT00797/25 y TT01016/25)
> - FI - revisión generación de archivo CU por carriage return final erróneo (#TT00965/25)
> - FI - Número de cifras ilimitado en el procedimiento de ajuste de moneda (#TT00991/25) Se han realizado cambios en el campo cambio del módulo CurrencyAdjustmentAccounting. *El perfil podría verse afectado por los cambios*
> - SCS - En los Retornos de Conto lavoro<!-- conto lavoro --> el precio del artículo se toma del Tarifa de Conto lavoro<!-- conto lavoro -->, si está presente, en caso contrario siempre se propondrá igual a cero (#TT00986/25)
> - modificada la impresión de la comunicación trimestral de iva, ordenación de periodos (#TT00981/25)
> - FI - revisión gestión visualización/guardado/exportación datos de la Comunicación iva periódica (lipe) en caso de que se haya eliminado un periodo en la declaración de iva periódica (#TT00981/25)
> - FI - Corregido problema en la no traslación de los campos de país de origen, país de procedencia y provincia de destino en los listados intrastat. Corregida la no traslación del campo modo de transporte en la impresión (#TT05326/24)
> - FI - Conciliación movimientos c/c: resuelto problema en la contabilización desde conciliación movimientos c/c (#TT05601/24)

### Patch 608.1-0069 - 21/02/2025

> - FI - revisión cálculo amortizaciones en categorías con flag ‘Incremental’ (#TT00113/25)
> - SCS - Si está activo en el Pedido de conto lavoro<!-- conto lavoro -->, el flag Precio manual se refleja también en el Retorno creado mediante entrega de pedido (#TT05336/24)
> - SCM - Resolución del error que impedía la Valorización de un DDT de compra de tipo Devolución, a raíz de un previo Rollback del procedimiento (#TT00052/25)
> - FI - Impresión Enasarco - Revisión suma en impresión Enasarco (#TT00766/25)
> - FI - revisión filtro impresión liquidación iva periódica con periodicidad trimestral y cálculo anticipo trimestral (#TT00866/25)
> - SCS - Corregido error genérico en el registro de un Retorno de conto lavoro<!-- conto lavoro --> (#TT00656/25)

### Patch 608.1-0068 - 06/02/2025

> - Lanzamiento impresión Certificaciones Únicas 2025
> - SH - Corregido error en el procedimiento Duplica Artículos que se producía en presencia de Extra Data custom (#TT00247/25)
> - WM - Corregidos bugs en el procedimiento de valorización de almacén<!-- magazzino --> relativos al cierre con UDC (#TT00535/25)
> - WM - En análisis de disponibilidad<!-- disponibilita -->, ahora el flag "Solo negativos" presente en el expander "Ver filas sin disponibilidad<!-- disponibilita -->" filtra correctamente solo las filas con disponibilidad<!-- disponibilita --> negativa (#TT00613/25)
> - WM - Corregido bug en el procedimiento de cálculo de costes que en algunos casos generaba una excepción (#TT00231/25)
> - WM - Corregido error en el procedimiento de Cálculo de Costes que en algunos casos reiniciaba el valor del último coste procesado (#TT05527/24)
> - MPS - Mejorada la generación de las órdenes de producción desde Sotto scorta<!-- sottoscorta --> para garantizar el correcto funcionamiento incluso con muchas filas (#TT00572/25)
> - FI - Declaración de la retención de fuente para 2025, alineamiento (#TT00236/25)
> - SH - Corregido el nuevo sistema de numeración desde el menú contextual de la combobox del widget Numeración (#TT03655/23)

### Patch 608.1-0067 - 30/01/2025

> - WM - Corregido bug en el procedimiento de Sottoscorta<!-- sottoscorta --> (#TT05117/24)
> - FI - revisión gestión signos centros de costo en contabilización facturas de compra (#TT00013/25)
> - FI - gestión ajuste form issues (#TT04549/24)
> - SD - Las numeraciones con período 'Ninguno' ya no se reinician al inicio del año; la numeración de los documentos en el nuevo año comenzará desde el número más alto registrado en el periodo anterior (#TT00000/25)
> - MES - Corregido bug en la fase de registro de los avisos de producción en el caso de una fase intermedia sucesiva a una fase externa (#TT05515/24)
> - MPS - En la fase de creación de las órdenes desde el pedido cliente, la unidad de medida alternativa que se hereda en la orden desde el pedido cliente (siempre que esta esté indicada en la pestaña UM alternativas del registro maestro del artículo) (#TT05068/24)
> - FI - revisión redondeos centros de beneficio en las contabilizaciones (#TT00186/25)
> - SCM, SCS - Las numeraciones con período 'Ninguno' ya no se reinician al inicio de año; la numeración de los documentos en el nuevo año empezará desde el número mayor ingresado en el año anterior (#TT00020/25)
> - WM - fix verificación stock para cada descarga entre fecha de descarga y fecha actual (#TT02878/23)
> - WM - Corregido bug en el rollback del procedimiento Descarga desde check (#TT00286/25)
> - FI - Saldos IVA con flag 'calcula anticipo' (#TT00414/25)
> - Carga NIR - resolver el problema cuando el registro tiene contrapartida de carga - proponer lotes (#TT00472/25)
> - FI - la contabilización de los ajustes ahora valoriza en los centros de coste el campo de la división (#TT00314/25)
> - FI - la contabilización automática de los reversiones facturas a recibir ahora gestiona los rangos de fechas competencia de la operación de origen (#TT00309/25)
> - SH - Province Table código de conversión de 4char a 4varchar (#TT00298/25)
> - MPS - Corregidos bugs en el procedimiento de programación a capacidad finita que creaban una discrepancia entre las fechas indicadas en las fases y lo reportado en el gráfico inferior, además corregido también el cálculo de la fecha hora fin de las fases individuales (#TT00325/25 - #TT04638/24)
> - MPS - Correcto el procedimiento MRP que generaba órdenes planificadas para artículos no válidos en la lista base (#TT05478/24 y #TT00376/25)
> - FI - Impresión de liquidación iva periódica - Revisado el cálculo de intereses derivados de liquidaciones iva trimestrales (#TT00302/25)

### Patch 608.1-0066 - 15/01/2025

> - SCS - Corregido error en los Retornos y en los Pedidos de Conto lavoro<!-- conto lavoro --> que, al añadir una unidad de medida alternativa, modificaba el precio del artículo incluso aunque estuviera activo el flag “Precio manual” (#TT05336/24)
> - FI - gestión del nuevo parámetro general "FS-FI-Posting-BlockPostingBeforeReceiveDate", si está en true se bloqueará la posibilidad de registrar documentos Sdi en fecha anterior a la de recepción (#TT00847/24)
> - FI - en los registros de pago con divisa extranjera en cabecera, revisión de la gestión de totales en moneda para considerar también filas manuales en la misma divisa (#TT05254/24)
> - FI - revisión contabilización remuneraciones para gestión remuneraciones ocasionales sin iva (#TT05321/24)
> - MPS - Corregido bug en programación a capacidad finita que no generaba correctamente la ocupación de las órdenes con el flag obligatorio activo (#TT05445/24)

### Patch 608.1-0065 - 20/12/2024

> - FI - revisión exportación de archivo para flag ‘Exportaciones’ configurado en las filas y no en cabecera. Al activar el flag ‘detalles del archivo’, ahora en la fila el enlace al registro maestro de contacto ya no se reinicia (#TT05510/24)

### Patch 608.1-0064 - 18/12/2024

> - FI - la impresión de control de declaraciones de intención ahora también totaliza los datos de los retornos de conto lavoro<!-- conto lavoro --> no facturados (#TT05290/24)
> - FI - la impresión definitiva de la liquidación iva periódica ahora almacena el saldo a crédito en el campo del crédito previo del formulario de Declaración iva periódica, no más en el de las Variaciones iva del periodo anterior (#TT03694/24 y #TT05230/24)
> - FI - problemas en la fase de anulación de la impresión definitiva de la liquidación (#TT04859/24)
> - MS - En la Capacidad centros de trabajo mejorada y optimizada la visualización de los horarios de inicio y fin de las fases (#TT04350/24)
> - SH - corregido error cálculo nivel lista base en el análisis de disponibilidad<!-- disponibilita --> (#TT05376/24)
> - SD - Solución al error que indicaba la apertura de la tarifa desde el propio usuario en el caso de uso previo del procedimiento of Duplica y Mantenimiento Tarifas (#TT05236/24)
> - CO - Revisión procedimiento de valorización área compras/ventas, exclusión de prueba en la impresión definitiva de iva de las liquidaciones y de los registros (#TT04436/24)
> - FI - impresión control detalle declaración de intención proveedores (#TT05290/24)
> - FI - venta parcial y depreciación (#TT05469/24)

### Patch 608.1-0063 - 12/12/2024

> - SCM - Durante la creación de un Pedido Proveedor a partir de una RDA, si el artículo en la RDA se ha introducido con una unidad de medida alternativa, en la fila artículo del pedido se reflejarán la unidad de medida principal y su cantidad correspondiente. La unidad de medida alternativa y su cantidad se introducirán en el campo correspondiente (#TT04650/24)
> - PR - añadidos a la form Desgloses de anticipo los campos para el total desglose y total anticipado (#TT04711/24)
> - SCM - Contabilización facturas de compra - Corregida anomalía en la fase de contabilización de facturas de compra (#TT01625/24)
> - SD - Mejorado campo Porcentaje/ Valor en la fila artículo de los documentos de venta, Pestaña Agente, que no reflejaba correctamente el dato en todas las condiciones de cálculo de la comisión (#TT5075/24)
> - SCS - Formulario Retornos - Corregida anomalía que en caso de workflow en la primera apertura del documento daba error (#TT04944/24)
> - FI - en caso de contabilización facturas de compra en moneda extranjera con integración iva reverse charge, revisión gestión redondeo importe iva convertido en euro (#TT03221/24)
> - Scm: Error de la nota de entrega de compra durante la carga y el rollback #TT05306/24
> - FI - generación de archivo Declaración de intención, revisión campo ‘Código fiscal sociedad declarante’ (posición 296 del registro B), ahora se toma del código fiscal del registro maestro declarante configurado en cabecera y no más con el código fiscal de la sociedad activa (#TT05167/24)
> - SCS - Si la Compañía prevé la Gestión de Controlling (con el flag homónimo en la tabla Sociedad), la Entrega de un DDT o de un Retorno dentro de una factura se refleja para las fechas de competencia las fechas del documento de descarga, si no están presentes las fechas del documento (#TT05126/24)
> - SCM, SCS - Corregido error en el registro de un Retorno de conto lavoro<!-- conto lavoro --> o de un DDT de Compra desde el interior del documento (#TT04754/24)
> - CO - modificación manual de los registros extracontables del controlling, revisión valorización de los centros de coste para valorización de campos importe en moneda y sociedad (#TT05235/24)

### Patch 608.1-0062 - 05/12/2024

> - WMS - En la gestión de check se valora correctamente el campo WMM_LoadingUnitItem_WMLUI_Id de las UDC creadas con varias filas (#TT05104/24)
> - FI - revisión actualización flag de cierre Aviso al variar el cierre de los movimientos individuales en su interior (#TT02651/24)
> - SD- Revisión asignación declaración de intención en filas de anulación anticipo, ahora se lee la declaración válida para la fecha factura. Al eliminar la referencia asignada será visible la declaración de intención de la fila original anticipo o la válida en las referencias factura configuradas en la cabecera (#TT04907/24)
> - SD - El Duplica factura reporta el campo LedgerAccountForStatisticReport.Id en el nuevo documento (#TT05040/24)
> - FI - revisión contabilización facturas a recibir para valorización de cadenas descriptivas dentro del asiento creado. Atención que en causal: 1 el tipo importe del coste debe ser ‘imponible subcuenta + impuesto no deducible subcuenta’ 2 si se quiere reflejar número y fecha documento de transporte será obligatorio el tipo/número y fecha documento (#TT05044/24)
> - CO - revisión gestión modelos de reclasificación por niveles con código/descripción null (#TT05055/24)
> - MES - Corregido bug que anulaba la Cantidad producida de una Orden de producción cuando se ejecutaba el Recalculo Costes orden de Producción (#TT05094/24)
> - MES - Corregido bug en el Cálculo de costes Órdenes de Producción con valorización de los materiales al coste del lote (#TT04509/24)

### Patch 608.1-0061 - 28/11/2024

> - Sales Fix IndirectExchangeRate at migration (#TT04919/24)
> - SH - Corregido error en el Navegador de artículos que, si se usaba en modo reducido, a veces perdía el foco del puntero abriendo un documento diferente al seleccionado (#TT01033/24)
> - Purchase/Project/Subcontractor - fix Indirect exchange rate at migration (#TT04930/24)
> - PR, FI - La importación de archivos bancarios para la conciliación ahora asigna en cabecera la moneda desde el registro maestro del banco. Revisión de la asignación para movimientos (#TT04525/24)
> - FI, PR, CO - update IndirectExchangeRate en área administrativa (#TT05095/24)
> - MPS - Corregido bug en planificación general en caso estuviera presente un equipo en el ciclo sin el artículo asociado (#TT05077/24)

### Patch 608.1-0060 - 21/11/2024

> - Revisión cálculo restante para partidas en moneda (#TT04613/24)
> - FI - impresión control de activos, revisión signos cuentas de los fondos de amortización (#TT04667/24)
> - MES - Corregido bug en registro avisos de producción (#TT04825/24)
> - MES - Corregido bug en el registro de las declaraciones de producción (#TT04826/24)

### Patch 608.1-0059 - 13/11/2024

> - MPS - En Definición MPS, las órdenes seleccionadas en la pestaña de resumen se agregan a una orden ya existente (indicada en el cuadro Orden de producción propuesta en la pestaña Resumen), si y solo si está habilitado el flag Actualización de órdenes ya existentes en la pestaña de parámetros. Automáticamente se propondrá una orden ya guardada para añadir las filas, si ya existe una con ese tipo y fecha (#TT04762/24)
> - SH - Modificación del filtro de solo lectura para la clase Extra data del objeto FSItemMaterialProfile, para habilitar la selección de los 'Valores permitidos' basados en este objeto durante la creación de una matriz en Maestro de Artículo (#TT04490/24)
> - MES - Corregido bug en el procedimiento de completado de datos de las órdenes de producción (#TT04741/24)
> - WM - Corregido bug en análisis de disponibilidad<!-- disponibilita --> referente a la visualización con detalle lista base en caso de variantes (#TT04602/24)
> - FI - repository method ComputeCheckDeclarationOfExemptionAmounts (#TT02373/23)

### ...continúa con los siguientes parches...