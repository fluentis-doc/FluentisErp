---
title: Notas de la versión 608 (Patch notes Versione 608)
sidebar_position: 2
---

### Patch 608.1-0072 - 27/03/2025  
> - SD - En las Facturas de Venta descargadas para las cuales se generó el documento Sdi, las cantidades y los precios de los artículos ya no son modificables (#TT00881/25)  
> - FI - revisión del cálculo de la depreciación en categorías configuradas para el conteo diario (#TT01271/25)  
> - WM - restaurado el valor en el registro de artículos, pestaña lista de proveedores, campo cuenta de proveedor (#TT01233/25)  
> - FI - revisión de la contabilización del cierre/rehabilitación de cuentas en caso de un período sin costos o sin ingresos (#TT00308/25)  
> - SD - Corregido problema de visibilidad en la impresión de las comisiones devengadas en presencia de facturas a cero creadas al anular anticipos de partidas (#TT00783/25)  
> - SD - Corregido problema de visibilidad de la formateo de las fechas documentales en la impresión de las comisiones devengadas cuando la factura contenía dos agentes, uno con tipo de vencimiento de factura emitida, el otro con pago realizado (#TT01134/25)  
> - PR - en una nueva lista de anticipos de facturas, el cambio de tipo de lista actualiza ambos subcuentas del encabezado de la lista (#TT01384/25) 

### Patch 608.1-0071 - 13/03/2025  
> - Agregado ConnectionTimeout al servicio BizLink (#TT00803/25)  
> - SD - Fix cálculo AgentSettlement en caso de facturas de venta con múltiples agentes (#TT01134/25)  
> - SD - Fix ejecución SalesOrder y SalesDeliveryNote en problemas específicos (#TT01227/25)  
> - revisión del campo ‘Código fiscal del sustituido entrante’  
> - MES - Corregido bug en el registro de declaraciones de producción (#TT00352/25)  
> - MS - Corregido bug en el cálculo de las horas de inicio y fin de las fases en el procedimiento de programación a capacidad finita (#TT00820/25)  
> - FI - en los asientos de ajuste, habilitación de la eliminación por teclado de las filas seleccionadas (#TT01093/25)  
> - FI - Registros contables: revisión del mensaje de advertencia cuando se abre un registro contable que ya tiene su ficha de activos abierta (#TT01023/25)  
> - WMS - En la gestión de marcados del WMS, ahora es posible llegar a un negativo para artículos gestionados por lotes si en los parámetros iniciales del almacén se activan los indicadores correspondientes. (#TT05102/24)  

### Patch 608.1-0070 - 28/02/2025
> - FI - Impresión de la liquidación IVA anual: resuelto error en la impresión de la liquidación IVA anual cuando se activaba el flag en los parámetros ‘Almacenar el número de la última página’ (#TT00200/25)  
> - PR - Campo "Progreso" en el módulo Gestión de la liquidez (#TT02060/24) Se han realizado cambios en el campo progreso del módulo Gestión de la liquidez. *El perfil puede verse afectado por los cambios*  
> - MS - Corregido bug en el funcionamiento del botón Liberar órdenes planificadas presente en el procedimiento MRP (#TT00837/25)  
> - SD - Optimizada la búsqueda en los formularios de Evasión de pedidos y DDT en documentos de Venta (#TT00797/25 y TT01016/25)  
> - FI - revisión de generación de archivo CU por retorno de carro final erróneo (#TT00965/25)  
> - FI - Número de dígitos ilimitado en el procedimiento de ajuste de moneda (#TT00991/25). Se han realizado cambios en el campo tipo en el módulo CurrencyAdjustmentAccounting. *El perfil puede verse afectado por los cambios*  
> - SCS - En los Ramat de Conto trabajo, el precio del artículo se toma de la Lista de Conto trabajo, si está presente, de lo contrario, siempre se propone como cero (#TT00986/25)  
> - Modificada la impresión de la comunicación trimestral de IVA, ordenamiento de los períodos (#TT00981/25)  
> - FI - revisión de la gestión de visualización/memorización/exportación de datos de la Comunicación de IVA periódica (lipe) en caso de que se haya eliminado un período en la declaración de IVA periódica (#TT00981/25)  
> - FI - Corregido problema por falta en el reporte de los campos del país de origen, país de procedencia y provincia de destino en las listas intrastat. Corregido el reporte de falta de campo modo de transporte en la impresión (#TT05326/24)  
> - FI - Conciliación de movimientos de cuentas: resuelto problema en la contabilización de la conciliación de movimientos de cuentas (#TT05601/24)  

### Patch 608.1-0069 - 21/02/2025
> - FI - revisión del cálculo de amortizaciones en categorías con flag ‘Incremental’ (#TT00113/25)  
> - SCS - Si está activo en el Pedido de Conto trabajo, el flag Precio manual se transferirá también en el Ramat creado mediante la evasión del pedido (#TT05336/24)  
> - SCM - Resolución del error que impedía la Valorización de un DDT de compra de naturaleza Devolución, a raíz de un anterior Rollback del procedimiento (#TT00052/25)  
> - FI - Impresión Enasarco - Revisión de suma en impresión Enasarco (#TT00766/25)  
> - FI - revisión del filtro de impresión de liquidación del IVA periódico con periodicidad trimestral y cálculo del anticipo trimestral (#TT00866/25)  
> - SCS - Corregido error genérico en fase de registro de un Rientro de Conto trabajo (#TT00656/25)  

### Patch 608.1-0068 - 06/02/2025
> - Liberación de impresión Certificaciones Únicas 2025  
> - SH - Corregido error en el procedimiento de Duplicación de Artículos que se producía en presencia de Datos Extra personalizados (#TT00247/25).  
> - WM - Correcciones de bugs en el procedimiento de valorización de almacén relacionados con el cierre con UDC (#TT00535/25)  
> - WM - En análisis de disponibilidades, ahora el flag "Sólo negativos" presente en el expansor "Mostrar filas sin disponibilidad" filtra correctamente solo las filas con disponibilidad negativa (#TT00613/25)  
> - WM- Corregido bug en el procedimiento de cálculo de costos que en algunos casos generaba una excepción (#TT00231/25)  
> - WM - Corregido error en el procedimiento de Cálculo de Costos que en algunos casos reiniciaba el valor del costo último procesado (#TT05527/24)  
> - MPS - Mejorada la generación de órdenes de producción de Sottoscorta para garantizar el correcto funcionamiento incluso con muchas filas (#TT00572/25)  
> - FI - Declaración de la retención de impuestos para 2025, alineación (#TT00236/25)  
> - SH - Corregido el nuevo sistema de numeración desde el menú contextual del combo de numeración (#TT03655/23)  

### Patch 608.1-0067 - 30/01/2025
> - WM - Corregido bug en el procedimiento de Sottoscorta (#TT05117/24)  
> - FI - revisión de la gestión de signos de centros de costo en la contabilización de facturas de compra (#TT00013/25)  
> - FI - gestión de ajustes en problemas de formularios (#TT04549/24)  
> - SD - Las numeraciones con período 'Ninguno' ya no se restablecen al inicio del año; la numeración de documentos en el nuevo año comenzará desde el número más alto registrado en el período anterior (#TT00000/25)  
> - MES - Corregido bug en la fase de registro de informes de producción en caso de una fase intermedia después de una fase externa (#TT05515/24)  
> - MPS - En la fase de creación de órdenes a partir del pedido del cliente, la unidad de medida alternativa que se hereda en el pedido de trabajo desde el pedido del cliente (siempre que esté entre las indicadas en la pestaña UM alternativa del registro del artículo) (#TT05068/24)  
> - FI - revisión de redondeos de centros de beneficio en las contabilizaciones (#TT00186/25)  
> - SCM, SCS - Las numeraciones con período 'Ninguno' ya no se restablecen al inicio del año; la numeración de documentos en el nuevo año comenzará desde el número mayor ingresado en el año anterior (#TT00020/25)  
> - WM - fix verificación de existencia para cada descarga entre fecha de descarga y fecha actual (#TT02878/23)  
> - WM - Corregido bug en el retroceso del procedimiento Descarga desde marcación (#TT00286/25)  
> - FI - liquidación del IVA con flag 'calcular anticipo' (#TT00414/25)  
> - Carga NIR - resolver el problema cuando la entrada tiene un contrapartida de carga - proponer lotes (#TT00472/25)  
> - FI - la contabilización de ajustes ahora valora en los centros de costo el campo de la división (#TT00314/25)  
> - FI - la contabilización automática de notas de crédito por recibir ahora gestiona los rangos de fechas de competencia de la operación de origen (#TT00309/25)  
> - SH - Código de conversión de la Tabla de Provincias de 4char a 4varchar (#TT00298/25)  
> - MPS - Corregidos bugs en el procedimiento de programación a capacidad finita que creaban una discrepancia entre las fechas indicadas en las fases y lo que se mostraba en el gráfico subyacente; además, se corrigió también el cálculo de la fecha de fin de las fases individuales (#TT00325/25 - #TT04638/24)  
> - MPS - Corregida la procedimiento MRP que generaba órdenes planificadas para artículos no válidos en la lista de materiales (#TT05478/24 y #TT00376/25)  
> - FI - Impresión de liquidación del IVA periódica - Revisión del cálculo de los intereses derivados de liquidaciones de IVA trimestrales (#TT00302/25)  

### Patch 608.1-0066 - 15/01/2025
> - SCS - Corregido error en los Ramat y en los Pedidos de Conto trabajo que, al añadir una unidad de medida alternativa, modificaban el precio del artículo incluso en presencia del flag “Precio manual” (#TT05336/24)  
> - FI - gestión del nuevo parámetro general "FS-FI-Posting-BlockPostingBeforeReceiveDate", si se establece en true se bloquea la posibilidad de registrar documentos Sdi con fecha anterior a la fecha de recepción (#TT00847/24)  
> - FI - en los registros de pago con moneda extranjera en la cabecera, revisión de la gestión de totales en moneda para considerar también líneas manuales en la misma moneda (#TT05254/24)  
> - FI - revisión de contabilización de compensaciones para la gestión de compensaciones ocasionales sin IVA (#TT05321/24)  
> - MPS - Corregido bug en la programación a capacidad finita que no generaba correctamente la ocupación de los pedidos con el flag obligatorio activo (#TT05445/24)  

### Patch 608.1-0065 - 20/12/2024
> - FI - revisión de exportación de archivo por flag ‘Exportaciones’ establecido en las líneas y no en cabecera. Al establecer el flag ‘detalles del archivo’, ahora en la línea, el enlace al registro de contacto ya no se restablece (#TT05510/24)  

### Patch 608.1-0064 - 18/12/2024
> - FI - la impresión de verificación de las declaraciones de intención totaliza ahora también los datos de los regresos del pedido de trabajo no facturados (#TT05290/24)  
> - FI - la impresión definitiva de la liquidación de IVA periódica ahora almacena el saldo a crédito en el campo del crédito anterior del formulario de Declaración de IVA periódica, ya no en el de las Variaciones de IVA del período anterior (#TT03694/24 y #TT05230/24)  
> - FI - problemas en fase de anulación de impresión definitiva de liquidación (#TT04859/24)  
> - MS - En Capacidades centros de trabajo, mejorada y optimizada la visualización de los horarios de inicio y fin de las fases (#TT04350/24)  
> - SH - corregido error en el cálculo del nivel de la lista de materiales en el análisis de disponibilidad (#TT05376/24)  
> - SD - Resolución de error que indicaba la apertura de la lista de precios desde su propio usuario en caso de uso anterior del procedimiento de Duplicar y Mantenimiento de Listas de Precios (#TT05236/24)  
> - CO - Revisión del procedimiento de valorización de área de compras/ventas, exclusión de pruebas en la impresión definitiva de IVA de liquidaciones y registros (#TT04436/24)  
> - FI - impresión control detalle declaración de intención proveedores (#TT05290/24)  
> - FI - venta parcial y depreciación (#TT05469/24)  

### Patch 608.1-0063 - 12/12/2024
> - SCM - Durante la creación de un Pedido de Proveedor a partir de una RDA, si el artículo en la RDA se ha introducido con una unidad de medida alternativa, en la línea de artículo del pedido se mostrarán la unidad de medida principal y la cantidad correspondiente. La unidad de medida alternativa y su cantidad se ingresarán en el campo correspondiente (#TT04650/24)  
> - PR - añadidos al formulario Listas de anticipos los campos para el total de la lista y total anticipado (#TT04711/24)  
> - SCM - Contabilización de facturas de compra - Corrección de anomalía en fase de contabilización de facturas de compra (#TT01625/24)  
> - SD - Mejorado el campo Porcentaje/ Valor en la línea de artículo de los documentos de venta, Pestaña Agente, que no enviaba correctamente el dato en todas las condiciones de cálculo de la comisión (#TT5075/24)  
> - SCS - Formulario Ramat - Corrección de anomalía que en caso de flujo de trabajo al abrir el documento por primera vez genera error (#TT04944/24)  
> - FI - en el caso de contabilización de facturas de compra en moneda extranjera con integración de IVA reverse charge, revisión de la gestión de redondeo del monto de IVA convertido en euros (#TT03221/24)  
> - Scm: Error en la nota de entrega de compra durante la carga y el rollback (#TT05306/24)  
> - FI - generación de archivo Declaración de intención, revisión del campo ‘Código fiscal de la entidad declaradora’ (posición 296 del registro B), ahora se valoriza con el código fiscal del registro del declarante establecido en cabecera y no más con el código fiscal de la entidad activa (#TT05167/24)  
> - SCS - Si la Compañía prevé la Gestión de Control (con el correspondiente flag en la tabla Compañía), la Evasión de un DDT o de un Ramat dentro de una factura reporta las fechas del documento de descarga como fechas de competencia si no están ya presentes las fechas del documento (#TT05126/24)  
> - SCM, SCS - Corregido error en la contabilización de un Ramat de trabajo o de un DDT de Compra desde dentro del documento (#TT04754/24)  
> - CO - modificación manual de los registros extracontables del control, revisión de valorización de los centros de costo para valorización de campos de importe en divisa y sociedad (#TT05235/24)  

### Patch 608.1-0062 - 05/12/2024
> - WMS - En gestión de marcados se valora correctamente el campo WMM_LoadingUnitItem_WMLUI_Id de las UDC creadas con múltiples líneas (#TT05104/24)  
> - FI - revisión de actualización del flag de cierre Recordatorio al cambiar el cierre de los movimientos individuales en su interior (#TT02651/24)  
> - SD-Revisión asignación de declaración de intención en líneas de anulación de anticipo, ahora se lee la declaración válida para la fecha de la factura. Al eliminar la referencia asignada se mostrará la declaración de intención de la línea original del anticipo o la válida en las referencias de factura establecidas para el encabezado (#TT04907/24)  
> - SD - La Duplicación de factura reporta el campo LedgerAccountForStatisticReport.Id en el nuevo documento (#TT05040/24)  
> - FI - revisión de contabilización de facturas por recibir para valorización de cadenas descriptivas dentro del registro creado. Atención que en causal: 1 el tipo de importe del costo debe ser ‘subcuenta imponible + impuesto deducible en subcuenta’ 2 si se quiere reportar número y fecha del documento de transporte será necesario el tipo/número y fecha del documento (#TT05044/24)  
> - CO - revisión de gestión de modelos de reclasificación por niveles con código/descripción nula (#TT05055/24)  
> - MES - Corregido bug que anulaba la Cantidad producida de un Pedido de producción cuando se ejecutaba el Recalculo de Costos del pedido de Producción (#TT05094/24)  
> - MES - Corregido bug en el Cálculo de costos de Pedidos de Producción con valorización de los materiales al costo del lote (#TT04509/24)  

### Patch 608.1-0061 - 28/11/2024
> - Sales Fix IndirectExchangeRate en migración (#TT04919/24)  
> - SH - Corregido error en el Navegador de artículos que, si se usaba en modo reducido, a veces perdía el enfoque del apuntador abriendo un documento diferente del seleccionado (#TT01033/24)  
> - Purchase/Project/Subcontractor - fix Tipo de cambio Indirecto en migración (#TT04930/24)  
> - PR, FI - La importación de archivos bancarios para la conciliación ahora asigna en cabecera la divisa del registro del banco. Revisión de la asignación por movimientos (#TT04525/24)  
> - FI, PR, CO - actualización del Tipo de cambio indirecto en el área administrativa (#TT05095/24)    
> - MPS - Corregido bug en plan de trabajo general en caso de que hubiera un equipo en el ciclo sin el artículo asociado (#TT05077/24)  

### Patch 608.1-0060 - 21/11/2024
> - Revisión del cálculo de remanente para partidas en moneda (#TT04613/24)  
> - FI - impresión de control de activos, revisión de signos de cuentas de los fondos de amortización (#TT04667/24)  
> - MES - Corregido bug en el registro de declaraciones de producción (#TT04825/24)  
> - MES - Corregido bug en el registro de declaraciones de producción (#TT04826/24)  

### Patch 608.1-0059 - 13/11/2024
> - MPS - En Definición MPS, las órdenes seleccionadas en la pestaña resumen se añaden a una orden ya existente (indicada en el cuadro Orden de producción propuesto en la pestaña Resumen), si y solo si está habilitado el flag Actualización de órdenes ya existentes en la pestaña parámetros. Automáticamente se propondrá una orden ya guardada donde agregar las líneas, si ya existe una con ese tipo y fecha (#TT04762/24)  
> - SH - Modificación del filtro de solo lectura para la clase Datos Extra del objeto FSItemMaterialProfile, para habilitar la selección de ‘Valores permitidos’ basados en este objeto durante la creación de una matriz en el Registro de Artículo (#TT04490/24)  
> - MES - Corregido bug en la ejecución de datos del pedido de la orden de producción (#TT04741/24)  
> - WM - Corregido bug en análisis de disponibilidad relacionado con la visualización detallada de la lista de materiales en caso de variantes (#TT04602/24)  
> - FI - método de repositorio ComputeCheckDeclarationOfExemptionAmounts (#TT02373/23)  

### Patch 608.1-0058 - 07/11/2024
> - FI - revisión asignación de fechas de competencia económica en la contabilización de facturas de compra (#TT02138/24)  
> - FI - Agregar verificaciones para migración (#TT04710/24)  
> - En la evasión de órdenes de proveedores en facturas y órdenes de compra sin recalculo analítico, revisión de la asignación de centros por prioridad de almacenes (#TT01624/24)  
> - SD - Corregido error en la búsqueda de Facturas de Venta ligado a la presencia de facturas enviadas al SDI RSM (#TT04740/24)  

### Patch 608.1-0057 - 31/10/2024
> - WMS - Implementado en el tokenizador de códigos de barras también la posibilidad de gestionar las colecciones y no solo las referencias (#TT04232/24)  
> - SD - Impresión CMR - Corregida impresión del CMR, no siempre reportaba los datos del Remitente y los Pesos (#TT04342/24)  
> - SD - Corregido problema en el cálculo de las comisiones devengadas para agentes con criterio de pago realizado y en presencia de pagos parciales de partidas (#TT03435/24 & #TT04483/2)  
> - MS - Corregido bug en la liberación de órdenes planificadas de trabajo en caso de que se utilizara la UM de uso en un material (#TT04603/24)  
> - CO - agregar moneda en clave única de CO_ConsolidationListCostCenters y CO_InternalClosureModelListCostCenters (#TT04649/24)  
> - FI - En la contabilización de facturas de compra, cuando hay un abono del movimiento de facturas por cobrar, se ha añadido un mensaje que indica la discrepancia de los centros de costo en esta segunda: la factura pasa al estado contabilizada, pero se avisa de la falta de anulación de las facturas por cobrar (#TT04275/24)  
> - SCS - Corregido error en el registro de un Rientro de trabajo desde dentro del documento (#TT04578/24)  
> - SD - El ordenamiento de los valores (Datos Extra) en las líneas y columnas de una Matriz en el registro de artículos se mantiene al crear los documentos (#TT04599/24)  
> - SCM - Corregido error que no actualizaba correctamente el estado de satisfacción del Pedido de proveedor en caso de que una parte sería cumplida en un DDT y el restante en una Factura (#TT04612/24)  
> - FI - Modificada procedencia controlling Valorización área de compras-ventas del cierre interanual. El rollback del procedimiento ya no se bloquea por la impresión de la liquidación de IVA definitiva para el período en cuestión; ocurría si la causal utilizada para la valorización era una causal IVA (#TT04436/24)  
> - SH - Administrador de documentos - Fix bloqueo de la app cuando se utiliza un tipo de documento de carpetas compartidas (#TT02202/24)  
> - En documentos de compra, al cambiar el almacén en las líneas, el recalculo de los centros de costo se ejecuta ahora solo si al menos uno de los dos almacenes (inicial y nuevo asignado) han establecido los centros de costo  

### Patch 608.1-0056 - 24/10/2024
> - BI - tableros - Fix problema apertura detalles (#TT03539/24)  
> - WM - Corregido bug en la impresión de Sottoscorta que entraba en bucle en caso de un artículo con Stock máximo igual al Punto de reorden (#TT03980/24)  
> - MPS - Corregido bug en Definición MPS en la pestaña Previsional que se producía en caso de que se procesaran muchas líneas (#TT04485/24)  
> - FI - Impresión libro de activos depreciables: resuelto error en fase de impresión definitiva del libro de activos depreciables (#TT04500/24)  
> - MES - Corregido bug en la descarga de declaraciones de producción relacionadas con el consumo del semielaborado producido en la fase anterior en caso de que esta fuera la primera y externa (#TT03883/24)  
> - MS - Mejorada y optimizada la procedimiento de generación de órdenes de producción a partir de previsiones (#TT04513/24)  
> - CO - Corregido bug en el filtro de la clase artículo del procedimiento Cálculo costos (#TT04512/24)  

### Patch 608.1-0055 - 17/10/2024
> - FI - Comunicación de liquidación periódica IVA- revisión de la impresión para la indicación de la deuda del período anterior no superior a 100€ (campo VP7)  
> - CO - en el procedimiento de los Asientos de ajuste de los Cierres interanuales, revisión de gestión de agrupaciones alternativas (#TT01216/24)  
> - MPS - Corregido bug en la procedimiento MRP (#TT04322/24)  
> - SCM - Corregido error que no permitía la inserción múltiple de artículos en las Solicitudes de Oferta (#TT04334/24)  
> - SD - Resuelta excepción que impedía la modificación del precio de lista desde el registro de artículo (#TT04237/24)  
> - SCS - Corregido error en los Pedidos de Conto trabajo que a veces no cargaba los materiales para la primera línea de artículo insertada (#TT04112/24)  
> - WM - Corregido bug en la procedimiento de cálculo de costo del artículo en caso de que se insertara un movimiento de almacén con causal considera movimientos a cero y con un costo negativo (#TT00305/24)  
> - Agrega flag a los eventos del supervisor para saltar el registro y eliminar automáticamente después de n días (#TT04430/24)  
> - SD - Optimización de la cuadrícula 'Notas artículo-cliente' de la pestaña Varias del registro del cliente (#TT01967/24)  
> - MS - Optimizada y mejorada la procedimiento de programación general y corregido bug en la función "Controlar documentos en atraso con ATP" (#TT03837/24)  
> - MS - Corregidos bugs en programación general (#TT03785/24 - #TT04245/24)  
> - PR - corrección de importación de archivo de movimientos bancarios donde las fechas de registro y divisa del banco resultaban invertidas (#TT04435/24)  

### Patch 608.1-0054 - 03/10/2024  
> - SH - Documental - Corregido bug en la carga de más documentos en modo carpeta ya que el programa se desconectaba (#TT03705/24 - #TT02202/24)  
> - CO - revisión de cálculo de mensilización de la elaboración de períodos (#TT04072/24)  
> - en el cálculo de los totales de facturas de compra, gestión de las tasas de IVA con flag ‘Reverse charge’ para gestionar facturas mixtas (#TT03198/24)  
> - SD - Impresión Balancín de facturación - Correcciones en subreportes de recalculo de IVA y gastos (#TT03249/24)  
> - SD - modificado el mensaje al abrir el pedido del cliente del cual se generó un proyecto insertado en un pedido de proveedor (#TT03608/24)  
> - MES - Optimizada la procedencia de registros de informes (#TT04017/24)  
> - SH - Corregido el filtro de datos adicionales: las columnas se cargan desde el perfil. Salta la columna si no es válida (#TT01838/24)  
> - SCM - En la procedimiento de Creación automática de pedidos de proveedor desde Pedidos de clientes ahora es posible usar también artículos cuya descripción supere los 200 caracteres (#TT04031/24)  

### Patch 608.1-0053 - 20/09/2024  
> - WM - Añadida la variante en el informe ValorizatedBOM y ValorizatedItemCostBOM de la valorización de lista de materiales  
> - SCM, SCS - Corregido error en la repartición de gastos con flag Repartida insertados en los resúmenes de documentos (#TT02336/24)  
> - CO - revisión de eliminación de registros de existencias en cierres interanuales (#TT03976/24)  
> - SH - Creación de Documentos adjuntos docx - mejora de Vista Previa (#TT03095/24)  
> - CO - Añadida la Columna costo variante en el cálculo de costos. Esto reporta los valores presentes en la pestaña variantes del registro del artículo (#TT03057/24 - #TT03043/24)  
> - FI - Impresión Libro Activos con ejercicio no solar (#TT03716/24)  

### Patch 608.1-0052 - 12/09/2024  
> - PM- corregida fecha de gastos ingresados automáticamente en la declaración de actividad generada por el cambio de estado aprobado de la intervención (#TT03640/24)  
> - MS - Corregido bug en la Programación general; ahora la programación con el flag “Considera también las alternativas de los materiales” funciona correctamente (#TT00306/24)  

### Patch 608.1-0051 - 05/09/2024  
> - FI - dentro de los registros contables, revisión del botón de recálculo de impuestos (#TT02926/24)  
> - FI - revisión de guardado de registros con nuevos activos en creación, localización RO-HR (#TT03614/24)  
> - QY - Control de artículos - Importar artículos a revisar - Resuelta anomalía en la búsqueda de un artículo, gestionado por lotes, ya previamente importado (#TT03709/24)  
> - FI - Informe de registro IVA: modificación para permitir el uso de frecuencia trimestral/mensual para la historia (#TT03769/24)  
> - SCM - En la procedimiento de Evasión de órdenes la Cantidad a evadir permite la entrada de los mismos decimales de la Cantidad residual (#TT03700/24)  
> - WM - En la form de búsqueda del registro de artículo, ahora los campos Cliente y Proveedor preferido filtran los datos respectivamente por cliente y proveedor.  (#TT03698/24)  

### Patch 608.1-0050 - 08/08/2024  
> - WM - Corregido bug en análisis de disponibilidad (#TT03349/24)  
> - WM - Corregido bug en el registro de artículos, que al insertar una variante también creaba la lista de materiales para esa variante (#TT03443/24)  
> - MPS - Corregido bug en Capacidades centros de trabajo que consideraba la capacidad en un centro de trabajo interno dada por un orden planificado de trabajo; ahora, si el orden planificado de trabajo tiene una fase interna (porque a veces se produce internamente y otras veces externamente), esto ya no compromete ese centro de trabajo (#TT03406/24)  
> - WM - Ahora en el detalle del análisis de disponibilidad las filas de órdenes de producción valoran los campos "Orden de cliente asociado" y "Cantidad de orden de cliente asociado” si están vinculadas a un orden de cliente (#TT03549/24)  
> - FI - Facturas de compra SDI- falta de control por Código Fiscal (#TT01432/23)  
> - SH - Habilitados los decimales en las columnas Pregunta y Oferta para los Pedidos planificados, en el Análisis de disponibilidad (#TT03201/24)  
> - FI - la contabilización de cánones de arrendamiento ahora utiliza la cuenta el costo de los intereses en el subcuenta específica establecida (#TT03582/24)  
> - MES- Corregido bug en la procedimiento de recálculo de costo en caso de que hubiera variantes (#TT02015/24)  

### Patch 608.1-0049 - 30/07/2024  
> - MES - Corregido bug en el cálculo del costo del artículo producido con las declaraciones de producción (#TT03408/24)  
> - SCM - Valorización DDT Compra- Corregido error en la valorización DDT Compra (#TT03538/24)  
> - SCS - Corregido error que al momento de duplicar un Pedido de Conto Trabajo forzadamente evadido no actualizaba el estado de evasión de los materiales a entregar del nuevo pedido (#TT03380/24)  

### Patch 608.1-0048 - 26/07/2024  
:::note Atención
Con esta patch se lanza el ticket 2097/24 que permite la actualización de las cantidades de los materiales a enviar y utilizar modificando la cantidad del artículo a trabajar tanto en el pedido de producción por fase o nivel como en el pedido de trabajo. Para hacer esto, se han actualizado los datos de las cantidades de los pedidos de trabajo que aún no han sido cumplidos o que se han cumplido parcialmente. Se recomienda verificar los pedidos existentes después de la instalación de la patch.
:::  
> - FI - Resuelto error excepción en intrastat que implicaba un caso relacionado con un abono (#TT03449/24)  
> - WM - En la máscara de Búsqueda de picking ahora es posible filtrar por los Pickings No cumplidos (#TT03191/24)  
> - MS - Nuevas optimizaciones para el procedimiento del MRP (#TT03485/24)  
> - SCS - Corregido error que al momento de duplicar un Pedido de Conto Trabajo forzadamente evadido no actualizaba el estado de evasión de los materiales a entregar del nuevo pedido (#TT03380/24)  
> - SCS - En los Pedidos de Conto trabajo se ha añadido un nuevo parámetro en los Datos materiales propuestos llamado "Del pedido de producción" utilizado para el recálculo de las cantidades de los materiales. Se establece automáticamente al crear un pedido de trabajo desde una fase externa de un pedido de producción, al liberar un pedido planificado de producción con fase externa y al liberar un Pedido de Conto trabajo planificado. Para la propuesta de los datos de los materiales en el pedido de Conto trabajo ahora es posible tener un parámetro diferente para cada línea de artículo (#TT02097/24)  
> - SCS - Corregido error que al momento de duplicar un Pedido de Conto Trabajo forzadamente evadido no actualizaba el estado de evasión de los materiales a entregar del nuevo pedido (#TT03380/24)  
> - WM - implementada barra de progreso para Valorización (#TT03460/24)  
> - MS - Mejorada y optimizada la procedimiento de coste de trabajo (#TT00449/24)  
> - MS - Optimizada y acelerada la procedimiento MRP (#TT02462/24)  
> - MES - Corregido bug en el cálculo de la ocupación de los centros de trabajo en caso de que se modificaran las fases del pedido de producción (#TT02662/24)  
> - FI - por sociedades con control activo, revisión prueba de cuadratura sobre las dimensiones (#TT03496/24)  
> - SH - Revisión de recálculo Conai en caso de documento duplicado (#TT03508/24)  

### Patch 608.1-0047 - 19/07/2024
> - SCM - Corregido error que no actualizaba el estado de evasión de las RDA a raíz de la activación del flag Evasado forzadamente sobre las líneas de artículo (#TT02937/24)  
> - SCM - Corregido error que no actualizaba el estado de evasión de las RDA a raíz de la activación del flag Evasado forzadamente sobre las líneas de artículo (#TT02937/24)  
> - CO - revisión de nueva reclasificación para gestión tree (#TT02912/24)  
> - WM - Corregido bug que no verificaba correctamente la existencia negativa cuando el artículo se encontraba dentro de un registro de descarga en contrapartida (#TT01417/24)  
> - CO - Corregido bug en el cálculo del costo del tiempo de preparación en el procedimiento Cálculo costo del Controlling (#TT02654/24)  
> - MPS - Corregido error que modificaba el estado de una orden programada como consecuencia de la cancelación del pedido planificado y programación de otra orden (#TT02393/24)  
> - FI - la contabilización de efectos asigna la fecha de cierre de comisiones en función de la fecha de vencimiento del efecto (#TT02657/24)  
> - WM - En el análisis de disponibilidad, los pedidos de clientes no confirmados no se consideran (#TT02463/24)  
> - SCM - A raíz de la Valorización DDT de compra mediante procedimiento, el flag Valorizado se reporta ahora también en las líneas de artículo del DDT (#TT02562/24)  
> - WM - Corregido bug que a veces no reportaba la causal o ubicación en la primera línea de los documentos (#TT02490/24)  
> - SCM - en contabilización de facturas de compra, revisión de asignación de fecha de registro para anulación automática del registro “facturas por cobrar” (#TT03056/24)  
> - revisión de memorización de crédito del año anterior desde la impresión definitiva de liquidación IVA periódica de enero (#TT02348/24)  
> - Revisión cuadratura movimientos de analítica en los pedidos de proveedores (#TT03053/24)  
> - CO - Resuelto bug en el informe de Lista de materiales valorizados en el cual no se visualizaban los valores del costo de los materiales (#TT03281/24)  
> - MES - Corregido bug en las declaraciones de producción, no se reportaba correctamente el valor de la ubicación del lote en el movimiento de almacén de descarga del material (#TT02156/24)  
> - FI - la contabilización de efectos asigna la fecha de cierre de comisiones en función de la fecha de vencimiento del efecto (#TT02657/24)  
> - FI - Error en contabilización en primera nota de cobro de cliente (#TT03209/24)  
> - SCM -  Error en contabilización FDR (#TT03262/24)  
> - FI - revisión de gestión de prueba de validación de la causal contable a lo largo de las contabilizaciones (#TT03062/24 - #TT03060/24)  
> - SD - En la conversión de las Ofertas en Pedidos de Clientes ahora se mantiene el orden de los artículos presente en la Oferta (#TT03169/24)  
> - SD - Revisión de pruebas de control de la nación cedente/prestatario en la factura Sdi por autofacturas, desde el campo nación al campo código iso de la partida fiscal (#TT03368/24)  
> - WM - Corregido bug en el cálculo del análisis de disponibilidad que generaba un error en la ejecución del mrp (#TT03389/24)  
> - MS - Corregido bug en la liberación de órdenes planificadas de compra, ahora las RDA creadas se agrupan correctamente por cliente, tipo y año (#TT03382/24)  
> - SD - En el procedimiento de Creación desde DDT, se ha introducido un nuevo control que impide la creación de una autofactura desde DDT (#TT02889/24)  
> - FI - en la contabilización de facturas de venta, alineación de la gestión del cambio para la sección de centros de costo (#TT02172/24)  
> - SCM - contabilización de facturas de compra, asignación de división a las líneas de movimiento del centro de costo para líneas de gastos finales (#TT03239/24)  
> - SCM  - Búsqueda DDT Compra- en la columna de valorización se reporta la factura creada por el ddt (#TT01055/24)  
> - FI - en la contabilización de facturas de compra, gestión en cuadrícula de IVA del campo del IVA para causales automáticas (#TT02641/24)  

### Patch 608.1-0046 - 28/06/2024

> - MS - Corregido error en la elaboración del MRP que generaba el bloqueo de la operación (#TT02408/24)  
> - WM - Corregido bug en la exportación excel de los datos presentes en el informe Implosión componentes que no reportaba el valor en la columna cantidad (#TT02753/24)  
> - MS - En el ciclo de producción, al asociar un material a una fase determinada, este ya no se visualizará en la ayuda entre los materiales que quedan por asociar a las fases individuales (#TT02785/24)  
> - FI - revisión de gestión de asignación de numeración de activos en caso de cambio de categoría/código de activo (#TT02777/24)  
> - FE San Marino- Facturas de Venta no conformes Ahora es posible reportar una factura de venta no conforme para el HUB de San Marino al estado Por Examinar para la corrección (#TT02791/24)  
> - FI - en compensaciones profesionales, revisión de campo inps carga recipientes del primer tab en caso de cálculo manual (#TT02802/24)  
> - FI - revisión de impresión de Control de activos por importe del fondo en caso de alienaciones totales/parciales (#TT02537/24)  
> - SH - Modificadas las descripciones de los registros en la tabla fija “Naturaleza jurídica”, para diferenciar ‘Residentese’ de ‘No residentes’ como en la tabla de instrucciones 770 (#TT02870/24)  
> - FI - Corregido bug en la form de lanzamiento de impresión Enasarco que no gestionaba correctamente el filtro por rango de fechas (#TT00824/24)  
> - CO - Revisión de performance nueva reclasificación de balance (#TT02912/24)  
> - PM - Modificada propuesta de precio en las solicitudes de intervención y en las intervenciones planificadas; si el artículo no está presente y se asigna un proyecto, artículo y precio son propuestos por el proyecto. Si el artículo ya está presente y se asigna un proyecto, si el artículo en el documento y el proyecto coinciden, el precio se actualiza por el proyecto. De lo contrario, se mantiene el precio ya presente (#TT02837/24)  
> - SCM - Si el flag Precio Unidad de Medida Alternativa está activo en la Solicitud de Oferta, al momento de crear el Pedido de proveedor desde la Oferta del proveedor el flag también se reportará en el pedido creado (#TT02804/24)  
> - SCM - Corregido bug que no visualizaba Código/Descripción del Artículo proveedor en la form de Detalle de líneas de Pedidos cuando el pedido no estaba evadido (#TT02344/24)  
> - SCM - Los gastos con flag Repartido insertados en los resúmenes de documentos ahora se reparten sobre los artículos del documento incluso cuando los precios son cero (#TT02336/24)  
> - FACTURACIÓN ELECTRÓNICA SM- Ejecutando la restauración del estado de Generado o descartado Hub SM a Controlado se elimina el archivo de integración de la factura de compra SM, reportando el estado a no examinado también se reinicia el nombre del archivo (#TT03054/24)  
> - SH - Análisis de Disponibilidad- el control que si se establece el flag lista base hay que establecer 1 solo artículo se ha movido cuando se hace clic en el botón de búsqueda (#TT02783/24)  

### Patch 608.1-0045 - 14/06/2024

> - WM- Implementada la posibilidad de guardar el orden del árbol de la lista de materiales y de los prototipos en el perfil.  (#TT02677/24)  
> - WM - Corregido bug en la impresión del inventario a cantidad valorizada relativo al flag de historicidad del inventario.  (#TT02708/24)  
> - BZ - En la importación estándar ‘Artículos y Código de barras’ es posible completar la columna ‘Default Forn. Pref.’ con los valores TRUE o FALSE (#TT02245/24)  
> - BZ - En la importación estándar ‘Artículos y Listas de Venta’ solucionado problema en fase de importación de descuentos (#TT02245/24)  
> - FI - revisión de contabilización de facturas de compra con líneas con/sin facturado comprando en el mismo subcuenta (#TT02771/24)  
> - PM - generación de intervenciones de solicitud de intervención, procedimiento corregido para que los horarios de la intervención se hereden de la solicitud de intervención (#TT02748/24)  
> - SD - Seleccionando el Agrupamiento por Tipo y Solución de Pago dentro de los Parámetros de agrupamiento en los documentos de destino se reportarán los pagos presentes en los documentos de origen (#TT02403/24)  
> - MES - Corregido bug en los informes de producción relativo a la ubicación de los artículos producidos y gestionados por lotes (#TT02667/24)  

### Patch 608.1-0044 - 10/06/2024

> - SCS - Redondeo por Cdc en pedido de compra, DDT de compra, Factura de compra (#TT02500/24).  
> - SCM - La solicitud de compra debe considerarse ejecutada si se han ejecutado todas las líneas, a excepción de las líneas de nota (#TT02389/24).  
> - SD - Corregido error que no permitía hacer la anulación de un DDT de Venta que también contenía líneas de tipo Nota (#TT02585/24)  
> - MPS - Corregido error en la visualización de la disponibilidad en la procedimiento de Definición MPS desde Sottoscorta (#TT02448/24)  
> - FI - revisión de cierre de comisiones en registros contables de cobro/pago (#TT02501/24)  
> - MES - Corregido error en las Declaraciones de Producción que no permitía la restauración del registro en caso de que hubiera una referencia en la tabla PM_ProjectItemDetails (#TT02419/24)  
> - PM - correcta visualización % avance y líneas descriptivas en el reporte detalle de avance de proyectos (#TT01386/24)  
> - MPS - Corregido error en la Generación automática del flujo de producción desde un Pedido de cliente que no generaba el mensaje de resumen con los pedidos de trabajo y órdenes creadas (#TT02578/24)  
> - FI - revisión de gestión de centros de costo en contabilización de facturas de venta (#TT02621/24)  
> - CO - Optimizada la procedimiento de cálculo de costo.  (#TT02255/24, #TT02209/24)  
> - SCM - Creación de nuevo informe para los pedidos de proveedores 'Calendario con UM alternativa' con las siguientes propiedades- fechas en formato europeo, columna Cantidad residual, columna UM, consideración de la UM alternativa en el precio si previsto en el documento (#TT01820/24)  
> - SCM - Resolución del error que no hacía visible la Fecha entrega en el informe Cartera de Pedidos (#TT01819/24)  
> - Resuelto bug con líneas que contenían Débito y Crédito (#TT02694/24)  
> - MS - Liberación de órdenes planificadas - Se considera la cantidad fija del padre en la lista de materiales durante la liberación de los Pedidos de producción y de Trabajo de Conto.(#TT00873/24)  
> - MS - Liberación de Órdenes planificadas - Recalculo erróneo de la cantidad total de consumo de materiales si el Pedido se dividía en más lotes (#TT01949/24)  
> - FI - alineado comportamiento de la impresión de control de activos que ahora devuelve los resultados de todas las categorías si no se selecciona ninguna categoría en particular (#TT02502/24)  
> - SD - Implementación de apertura de órdenes tras conversión (#TT02247/24)  
> - PR - Girocuento IVA incorrecto tras insoluto (#TT02378/23)  
> - WM- Corregido bug en el manejo de prototipos que generaba un error al cerrar un prototipo (#TT02678/24)  
> - WM - Corregido bug en el manejo de prototipos que no visualizaba correctamente el flag ficticio de los artículos (#TT02679/24)  

### Patch 608.1-0043 - 31/05/2024

> - WM - Corregido bug en la visualización de los errores de la procedimiento de valorización de almacén en caso de que fueran más de 100.000 (#TT02320/24)  
> - SD - Corregido problema en los documentos de venta que no gestionaba adecuadamente la comisión en presencia simultánea de agentes ligados a un destinatario/destinación del cliente y NO ligados a ningún destinatario/destinación sino simplemente al cliente (#TT00273/24)  
> - FI - Resuelto problema que generaba un error al cerrar el formulario Visualización de cuentas después de haber ordenado por la columna Fecha de Registro (#TT02041/24)  
> - PR - revisión impresión de flujo de caja por totales más allá de la fecha final (#TT00241/24)  
> - FI - Contabilización de facturas de compra entrantes - revisión de la propuesta de la fecha de competencia dentro del registro contable creado (#TT01888/24)  
> - FI - en la máscara de búsqueda de partidas, reactivado el botón de actualización del estado de las partidas (#TT02145/24)  
> - FI - la reanudación de la depreciación de activos del módulo de cierres interanuales ahora aplica, si está presente, el porcentaje personalizado del encabezado del activo de manera prioritaria sobre el porcentaje en la categoría de activo (#TT02070/24)  
> - FI - revisión del procedimiento de girocuento de partidas para cierre del IVA en suspensión (#TT02398/24)  
> - SCM, SCS - Cuando se modifica el flag Precio Unidad de medida Alternativa dentro de una Factura de compra que valora un Rientro de Conto trabajo, se modifica también en el Rientro y en el registro correspondiente si está presente. Cuando el flag se modifica desde dentro del Rientro de Conto trabajo los importes se recalculan también en el Registro de almacén (#TT00698/24)  
> - FI - En el caso de que se importen en los documentos sdi de compra de entrada un archivo que presenta datos no conformes al formato ya no se genera una excepción sino que el visualizador presentará una página blanca (#TT02322/24)  
> - FI - corregido bug que no gestionaba correctamente el girocuento IVA en el ámbito del IVA por caja, cuando la partida cobrada era originada por una RiBa previamente insoluta (#TT02378/23)  
> - FI - revisión impresión liquidación IVA periódica para período sin datos (#TT01779/24)  
> - FI - en la conciliación manual de las cuentas corrientes, habilitada la posibilidad de cambiar las fechas de filtro (#TT02390/24)  
> - SCS - En el registro de un Rientro de Conto trabajo se verifica primero la disponibilidad de los materiales a la fecha actual y posteriormente a la fecha utilizada para el registro de almacén (#TT02394/24)  
> - PR - conciliación de cuentas corrientes automática, cierre del mensaje de caja para visualizar el mensaje de ‘Espere…’ (#TT02392/24)  
> - SD - Cuando en los parámetros del área de Ventas está activo el flag ‘Bloquear inserción de documentos en fechas festivas del calendario de fábrica’ el control de la fecha festiva se verificará primero en el Calendario de Fábrica y luego en el Calendario de capacidades productivas (#TT02396/24)  
> - SCS - Cuando se inserta un Pedido de Conto trabajo para un proveedor que tiene una lista de precios predefinida, si el artículo insertado no está presente en la lista el precio propuesto es cero (#TT02234/24)  
> - FI - contabilización de facturas de compra, revisión de redondeos de centros de costo (#TT02483/24)  
> - MES - Corregido bug en las declaraciones de producción que visualizaba la UM errónea en el campo cantidad fase (#TT02459/24)  
> - FI - Corregido error en el retroceso de registro de factura de compra conectado a una ficha de activo (#TT02207/24 - #TT02277/24)  

### Patch 608.1-0042 - 23/05/2024

> - CO - Reanudación de la depreciación de activos de los cierres interanuales, revisión de la gestión de centros de costo (#TT02315/24)  
> - SD - Revisión de la impresión de comisiones devengadas para el caso de la recaudación de una partida reabierta tras un insoluto (#TT02095/24)  
> - Lanzamiento de la nueva impresión 2024 del informe de efectivo para localización CH  
> - CO - Controlling, cierres internos, 'asientos de integración' devuelve valores incorrectos en Centros de Costos (#TT02319/24)  
> - SD - En la línea de anulación del anticipo se reporta ahora también el proyecto, si está presente en la línea de artículo de la factura de anticipo (#TT02170/24)  
> - MS - Programación general - Corrección de anormalidad de propuesta de fechas en los Pedidos planificados (#TT02150/24)  

### Patch 608.1-0041 - 16/05/2024

> - PR - corregido bug que utilizaba en el flujo de caja la cuenta cliente terciaria para fases externas en el pedido de conto trabajo en lugar del proveedor real (#TT02034/24)  
> - FI - revisión de las fechas de competencia económica asignadas a los registros de reabertura de ajustes desde el cierre automático de cuentas (#TT01535/24 - #TT01814/24)  
> - FI - en la compensación de partidas, revisión de la gestión de filtros de partidas respecto al tipo de compensación, gestión decimales en campos en cuadrícula (#TT02113/24)  
> - MES - En las Declaraciones de Producción se ha añadido el detalle de la Ubicación en el mensaje de error debido a existencia insuficiente (#TT02064/24)  
> - SD - En la Conversión de Oferta a Pedido, los descuentos finales de artículo insertados en la Oferta se reportan en las líneas de artículo del Pedido (#TT02103/24)  
> - SH - En las Facturas de Venta y en los DDT de Venta y de Compra ahora es posible insertar pesos con cifras decimales (#TT02163/24)  
> - SCM - Resuelto bug que no guardaba correctamente un perfil en las Solicitudes de Compra con filtro No cumplidas (#TT02123/24)  
> - WM, SCM, SCS , SD- Corregido bug en la formulación del progresivo del código lote (#TT02142/24)  
> - FI - Intrastat 2 , fluentis545 - Error en recuperación de datos de registros CustomPosting (#TT02243/24)  
> - MES - Corregido bug en la Lista de recogida de material en caso de que esté habilitado el flag "Asociar lote por lista de recogida" presente en los parámetros de producción. Ahora el lote asociado al material en el pedido de producción se reporta correctamente también en los picking creados con la Lista de recogida de material (#TT03026/23)  
> - PR - Contabilización de pagos a proveedores, revisión de la gestión de notas de línea cuando la causal no prevé el agrupamiento de pagos en el diario (#TT01702/24)  
> - CO - Revisión totalización grupos en el informe de valorización reclasificaciones, en caso de comparaciones  
> - WM - Corregido bug en la gestión de prototipos que generaba un error al cerrar un prototipo (#TT02678/24)  
> - WM - Corregido bug en la gestión de prototipos que no visualizaba correctamente el flag ficticio de los artículos (#TT02679/24)  

### Patch 608.1-0040 - 09/05/2024

> - SH - Nuevo mensaje de aviso si al configurar la anagrafica de una persona física no se completan el nombre y apellidos y nuevo mensaje de error generando el archivo de la factura electrónica sin estos datos (#TT01700/24)  
> - PR - revisión de recuperación de datos de regresos de c/labor en el flujo de caja (#TT01934/24)  
> - FI - Comunicación trimestral del IVA, alineación 2024 (#TT01141/24)  
> - SCM - Corregido error que impedía modificar las Ediciones en Pharma (#TT01753/24)  
> - FI - Centro de costo desde albaranes de entrega no visible en el registro en contabilidad general y en el análisis de los movimientos de los centros de costo (#TT01521/24)  
> - SH - Direcciones alternativas - revisión de guardado de los campos nombre y apellidos dentro de las direcciones alternativas (#TT01794/24)  
> - FI - Revisión recuperación de valores de registros para sección cuaternaria (#TT01985/24)  
> - PR - Optimización Flujo de Caja desde DDT Compra (#TT01754/24)  
> - FI - Asientos de ajuste- revisión descripción detallada en los registros contables creados automáticamente por el procedimiento (#TT00503/24)  
> - SH - El procedimiento de Duplicar artículo también reporta las Notas de los Proveedores preferenciales (#TT01580/24)  
> - WM - Corregido bug en el procedimiento de valorización del almacén (#TT02037/24)  
> - SCS - Corregido error que al momento de duplicar un Pedido de Conto Trabajo forzadamente evadido no actualizaba el estado de evasión de los materiales a entregar del nuevo pedido (#TT03380/24)  
> - SD - La impresión de la lista de facturas reporta la unidad de medida del peso neto, peso bruto y del paquete  
> - SD - Ofertas - Corregida anomalía que no creaba el pedido convirtiendo una oferta (#TT02424/23)  

### Patch 608.1-0039 - 29/04/2024

> - SD - Corregido error en el Detalle Movimientos que visualizaba algunas cantidades con signo erróneo (#TT01546/24)  
> - SD - El campo ‘Referencia pedido’ de las líneas de artículo en factura se llena también para las líneas Nota (#TT01733/24)  
> - SD - Corregida la visualización de los Diagramas de Evasión para documentos que contienen solo líneas de artículo de tipo 2 (#TT01445/24)  
> - SCM - Corregido error que proponía la misma 'Descripción artículo proveedor' en el procedimiento de 'Evasión de pedidos', para todos los proveedores preferenciales del artículo (#TT01501/24)  
> - FI - Migración 2015 (#TT01808/24)  
> - SD - Si el cliente persona física no tiene nombre/apellido completado, el archivo Sdi se completa en el tag Denominación con la Razón social del cliente. En caso de que falte solo nombre o solo apellido, se bloquea la creación del archivo (#TT01700/24)  
> - FI - compensación rápida, revisión del procedimiento para cierre de comisiones asociadas a las partidas (#TT01664/24)  
> - SD - La búsqueda se realiza por prioridad también en el caso de múltiples líneas para el mismo tipo de comisión (#TT01695/24)  
> - SD - Corregido error que no llenaba los ‘Materiales Conai para el artículo’ en las notas de crédito (#TT01841/24)  
> - PR - revisión del cálculo del flujo de caja desde órdenes de trabajo (#TT01609/24)  
> - FI - revisión contabilización de pagos a percibidos para numeración de pagos/partidas y agrupamiento por subcuenta (#TT01285/24)  
> - FI - revisión del cálculo de partidas para facturas de compra de activos extranjeros sin movimiento de IVA (#TT02800/23)  
> - FI - revisión de liquidación de IVA de la localización croata (#TT03562/23)  
> - FI - revisión de gestión de comisiones de agentes en contabilidad, para cobros parciales y para contabilización de facturas con total 0 (#TT01822/24)  
> - FI - revisión de impresión definitiva de liquidación de IVA periódica enero para salvaguardar crédito año anterior/crédito período anterior (#TT01160/24)  
> - SD - El control sobre la Fecha Mercancía Lista, que debe ser menor o igual a la Fecha de entrega, se ha insertado también en el Encabezado del Pedido de cliente (#TT01711/24)  
> - WMS - En el form de gestión de marcados del WMS, revisada la propuesta de existencia en caso de que el lote del artículo ya se haya registrado en el picking (#TT01435/24)  
> - MES - Corregido bug en el cálculo del tiempo máquina y mano de obra en las declaraciones de producción (#TT01400/24)  

### Patch 608.1-0038 - 18/04/2024

> - WM - Inventario a cantidad valorizada - Corrección de anomalía en el ‘Valor unitario’, propuesto en el informe de ‘Impresión de inventario’, si se solicita la ‘Valorización a Costo medio’ y ‘Valorización a almacén’ presente en los ‘Parámetros iniciales de almacén’ (#TT01690/24)  
> - SCM - Corregido error en la actualización de los importes en los movimientos de almacén en presencia de un gasto repartido en el DDT o en la Factura de Compra (#TT00794/24)  
> - PR - El Lock Manager muestra todos los registros de los documentos de todas las empresas (#TT01593/24)  
> - FI - en el registro contable, bloqueada la posibilidad de modificar líneas de pago derivadas de pagos a recibir, se debe ejecutar el rollback y modificar el monto de pago en el procedimiento de contabilización (#TT00909/24)  
> - FI - La fecha de filtro de la Visualización de balances ahora se basa en la fecha de competencia de encabezado y no más en la fecha de registro (#TT01243/24)  
> - FI - Cálculo de comisiones pago total en moneda USD (#TT01696/24)  

### Patch 608.1-0037 - 15/04/2024

> - CO - Corregido bug que en algunos casos generaba un informe vacío en la impresión de la reclasificación con comparación (#TT00917/24)  
> - FI - En contabilización de facturas de venta, a las partidas se les asigna el agente que tiene el monto de comisión más alto entre las diversas líneas del documento, en caso de valores iguales el orden es por id de agente (#TT01286/24)  
> - MES - Implementada en la lista de recogida de materiales la gestión de la cantidad residual (#TT00836/24)  

### Patch 608.1-0036 - 11/04/2024

> - FI - Mejoras en los procedimientos automáticos intrastat- exportaciones Grecia (#TT01232/24)  
> - FI, PR - revisión de contabilización de efectos para partidas creadas en divisiones diferentes de la activa (#TT01401/24)  
> - MS - Añadido un mensaje de error en el MRP en caso de que el artículo fuera de producción pero no tuviera la lista de materiales (#TT01414/24)  
> - FI - Asociación de archivo xml a receptores - revisión de propuesta de solo archivos en estado 'no asignado' (#TT01317/24)  
> - FI - Resuelto el error en búsqueda con el filtro de cuenta en la creación de intrastat desde las ventas (#TT02458/23)  
> - PR - Corregido bug que en fase de creación de RiBa desde facturas en caso de factura y nota de abono a agrupar sumaba en lugar de restar la NC (#TT00897/24)  
> - WM - Corregido bug en análisis de disponibilidad que no mostraba correctamente los valores en los campos- Orden cliente vinculado y cantidad de orden cliente (#TT01062/24)  
> - MS - Corregido bug en la procedimiento MRP en caso de artículos ficticios (#TT01164/24)  
> - FI - Revisión de activación de botones de gestión dentro del intrastat (#TT01232/24)  
> - Resuelto el bug de carga del script para ViewModel con BusinessObjectName faltante.  

### Patch 608.1-0035 - 08/04/2024

> - CO - Corregido bug en el procedimiento de Cálculo de costo (#TT00799/24)  
> - WMS - Corregido bug en la form de rectificación de artículo (#TT01376/24)  
> - WM - En las listas inventariales, mejorado el funcionamiento del botón "Ayuda artículos movidos". En caso de que se inserte también la ubicación en los filtros de búsqueda, solo se incluyen en la lista los artículos presentes en esa ubicación (#TT00616/24)  
> - FI - Revisión de filtro por división en impresión Subcuentas ejecutada por la form ‘Visualización de cuentas’ (#TT01394/24)  
> - WM - Cuando se genera un registro desde la máscara de Visualización de Existencias, si la causal ingresada tiene una contrapartida se propone la ubicación de la causal; al eliminarla se propondrá la ubicación del artículo (#TT01351/24)  
> - WM - Cuando se genera un registro desde la máscara de Visualización de Existencias, si la causal ingresada tiene una contrapartida se propone la ubicación de la causal; al eliminarla se propondrá la ubicación del artículo (#TT01351/24)  
> - FI - Agrupamiento de detalles de intrastat, pérdida de conexión entre SDSII_IntrastatDetail_FIIDT_Id y FIIDT_Id (#TT01352/24)  
> - SD - Permitida la modificación del rango de fechas de competencia económica en facturas de venta con archivo Sdi creado pero no contabilizadas (#TT01038/24)  
> - SCM - Corregido bug en la creación del código lote en caso de que no se ingresara manualmente en el DDT, sino que se generara automáticamente al momento de la descarga. Esto solo sucedía en caso de que se utilizara el apodo del proveedor en la composición del código (#TT01297/24)  
> - SD - Bloqueo en el recálculo a cero del porcentaje de comisión sobre líneas evadidas de OC, en caso de rango de descuento y categoría de comisión de filtro (#TT01310/24)  

### Patch 608.1-0034 - 04/04/2024

> - WM - Corregido bug en el informe de Impresión de inventario a cantidad valorizada en relación con el costo del costo efectivo de lotes y la visualización de los costos unitarios y totales de línea (#TT01233/24 - #TT00807/24)  
> - PR - revisión de contabilización de movimientos bancarios de conciliación de cuentas (#TT01215/24)  
> - PR - corregido bug en el cálculo de vencimientos del flujo de caja sobre los pedidos de trabajo (#TT01203/24)  
> - Liberación de impresión LIPE año 2024  
> - WM - Corregido bug en el informe de Valorización Conjunta en relación con las operaciones externas (#TT00920/24)  
> - FI - corregido bug en la impresión de verificación de la declaración de intención cuando en la factura había gastos finales vinculados a la declaración de intención que no se reportaba correctamente en la columna registrado y permanecía en la columna facturado (#TT01311/24)  
> - FI - revisión de asignación de la sección intrastat servicios en contabilización desde facturas de compra (#TT01258/24)  
> - SD - Los gastos de Recaudación se someten automáticamente al IVA principal del documento (#TT00511/24)  
> - En la evasión de órdenes de proveedores en factura, revisión de la asignación de fechas de competencia económica en la analítica (#TT01275/24)  
> - FI - gestión de dos nuevos parámetros generales ("FS-FI-Intrastat-UseDocumentWeightInPurchase" y "FS-FI-Intrastat-UseDocumentWeightInSale") que, si se configuran, harán que se valore la masa en la colección FSPostingIntrastat a partir del peso indicado en la línea del artículo del documento (si no se configuran, se utilizará el dato del registro del artículo) Con el mismo parámetro, además, la generación automática de intrastat desde la factura de compra/venta irá a leer de igual modo la masa neta de la línea en el documento (en lugar de del registro del artículo) (#TT00692/24)  
> - FI - revisión de prueba de cuadratura cdc/coge al guardar el registro contable (#TT01372/24)  
> - SD - Al guardar un abono, todos los Tipos de gasto se insertan con signo negativo, excepto los gastos de Sello (#TT01289/24)  

### Patch 608.1-0033 - 29/03/2024

> - FI - Resuelto bug en la Comunicación trimestral liquidaciones de IVA cuando en el cuarto trimestre se insertaba un valor en el campo anticipo y al guardar el campo se reiniciaba (#TT00678/24)  
> - QY - Corregido bug que no visualizaba los Workflow en la forma de Registros por Lote (#TT01165/24)  
> - SCM - En la impresión Calendario de pedidos de proveedores, las Fechas se han cambiado a formato europeo, y los Precios a dos decimales (#TT01051/24)  
> - SD - Es posible modificar los Datos Extra de una Factura de venta también si está Descargada (#TT00712/24)  
> - MS - Corregido bug en la planificación general en caso de que se reprogramaran órdenes ya en estado lanzado/ejecutivo (#TT00158/24)  
> - PR - resuelto bug en la forma de gestión de liquidez que no actualizaba correctamente el campo Progresivo al cambiar los flags excluir y ocultar (#TT00435/24)  
> - Resuelto el problema de la ejecución de la actividad con parámetros faltantes en SqlQuery  
> - PM - correcciones en la inserción de citas en el planner relativas a intervenciones planificadas y solicitudes de intervención. Mejora de la gestión de cambios /cambios de fecha/hora/recurso (#TT00144/24)  
> - SCM - En la rejilla de árbol de la máscara de Evasión de Pedidos abierta desde DDT, la Propiedad ‘Número de línea’ puede ser arrastrada desde el Navegador de Objetos y guardada con Perfil (#TT01044/24)  
> - SD - Las versiones posteriores de una Oferta heredan los Documentos adjuntos (#TT01149/24)  
> - Resueltos algunos bugs con la interfaz de usuario del Supervisor y agregado el filtro Log sobre los eventos  
> - SD-En el cumplimiento de pedidos de clientes en factura, revisión de asignación de fechas de competencia económica en la analítica (#TT01275/24)  
> - PR - revisión de gestión de notas de línea en la importación de movimientos bancarios sobre archivo cbi (#TT01101/24)  
> - PR - revisión de contabilización de movimientos bancarios de conciliación de cuentas (#TT01215/24)  
> - FI - gestión del parámetro de localización 'IN-IntrastatRoundByOperation' en la recuperación de datos de facturas de compras/ventas (#TT02412/22)  

### Patch 608.1-0032 - 21/03/2024

> - MS - Corregido bug que causaba la pérdida de la referencia a la línea de proyecto tras la restauración del pedido de producción (#TT01014/24)  
> - MS - Corregido bug que no eliminaba la referencia a la línea de proyecto tras la eliminación del proyecto dentro de un pedido de producción (#TT01014/24)  
> - MES - Corregido bug en las Declaraciones de Producción que no reconocía el orden temporal correcto de las declaraciones, cuando estaban insertadas a la misma hora (#TT00985/24)  
> - MS - Corregidos errores en el procedimiento de Costificación de las Órdenes de producción y en la impresión de Costificación de la Orden (#TT00497/24)  
> - SD - Contabilización automática de facturas de venta- revisada la procedencia de contabilización automática de notas de crédito con tipo de movimiento no IVA (#TT00666/24)  
> - SD - Los gastos Varios presentes en los Pedidos se reportan todos en el documento resumen que cumple los Pedidos (#TT01102/24)  
> - FI - Revisión de contabilización de facturas por recibir para la gestión de bultos con artículos no codificados y/o documentos no cargados en almacén (#TT00555/24)  
> - FI - inserción de tipos de operación fiscal ‘Compra de chatarra, residuos, etc.’ y ‘Limpieza, demolición, … edificios’ (#TT00804/24)  
> - MES - Corregido bug que causaba un bloqueo temporal de la aplicación en caso de registros de Declaraciones de Producción con numerosas declaraciones por fase (#TT00946/24)  
> - MES - Corregido bug en las declaraciones de producción que no actualizaba el tiempo de máquina y el tiempo hombre durante la ejecución del procedimiento de Recalculo de tiempos (#TT01017/24)  
> - FI - IVA a CRÉDITO en el archivo para la LIPE tiene en cuenta también el IVA no deducible por prorrata (#TT01596/23)  
> - ARM - post migración - sustituir el código de los módulos Wcf con WebApi  
>