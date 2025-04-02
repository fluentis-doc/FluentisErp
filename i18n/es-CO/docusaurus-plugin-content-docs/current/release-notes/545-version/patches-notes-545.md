---
title: Notas de la versión 545 (Patch notes Versione 545)
sidebar_position: 1
---

### Patch 545.1-0115- 07/03/2025
> - FI - revisión del filtro de impresión de liquidación de IVA periódica con periodicidad trimestral y cálculo de anticipo trimestral (#TT00866/25)  
> - FI - Cálculo incorrecto de la liquidación de IVA  (#TT03165/24)  
> - FI - Impresión de Liquidación de IVA periódica - no se incluye el registro de IVA de compras en la impresión (#TT01236/25)  

### Patch 545.1-0114- 28/02/2025
> - Bizlink - Importar excel de facturas - Devoluciones no obligatorias de precio, unidad de medida e IVA para poder importar las líneas de nota (#TT00639/25)  
> - FI - revisión del filtro de impresión de liquidación de IVA periódica con periodicidad trimestral y cálculo de anticipo trimestral (#TT00866/25)  
> - FI - Cálculo incorrecto de la liquidación de IVA  (#TT03165/24)  
> - Optimización de la impresión del “Brogliaccio di magazzino”  
> - PR - Campo "Progreso" en el módulo de Gestión de liquidez (#TT02060/24) Cambios realizados en el campo progresivo del formulario de Gestión de liquidez. El perfil puede verse afectado por los cambios.  
> - FI - revisión de contabilización de ajustes con opción ‘registro único’, restauración a nulo del campo de enlace ‘-1’ cuando el registro no puede ser guardado debido a desajustes  
> - FI - Número de dígitos ilimitados en el procedimiento de ajuste de moneda (#TT00991/25) Cambios realizados en el campo de intercambio del formulario de Contabilidad de Ajuste de Moneda. El perfil puede verse afectado por los cambios.  
> - FI - pagos parciales por IVA retrasados (#TT01013/25)  

### Patch 545.1-0113- 14/02/2025
> - FI - revisión de impresión ‘Diferencia de partidas abiertas saldo contable’, visualización de resultados también para impresión ‘detallada’ (#TT00121/24)  
> - WM - fix verificación de existencia para cada descarga entre la fecha de descarga y la fecha corriente (#TT02878/23)  
> - Aog - fix para la ventana de creación de orden de compra a partir de solicitud de compra - al cerrar la ventana y existir un prototipo de orden seleccionado, se creaba un orden a pesar de que la procedura no se había lanzado (ref #TT00335/25)  
> - SCM - La creación de la factura de compra desde el archivo Sdi ya no refleja la configuración de pago del registro del proveedor (#TT04209/24)  
> - MPS - Bug corregido en la liberación de órdenes planificadas de trabajo en las que no se inserta correctamente la UM de medida en el caso de artículos gestionados con UM alternativa (#TT05068/24)  
> - FI - F20215 - error de compensación rápida (#TT00415/25)  
> - Carga NIR - resolver el problema cuando el registro tiene contrapartida de carga - proponer lotes (#TT00472/25)  
> - MPS - Ahora la fecha de entrega propuesta en los pedidos planificados nacidos de artículos gestionados en stock a través del procedimiento MRP y programación considera correctamente el tiempo de entrega de aprovisionamiento (#TT03597/24)  
> - WM - Corregido error en la generación RDA desde Sottoscorta que truncaba la descripción de los artículos si era superior a 20 caracteres (#TT00136/25)  
> - SCM - Corregido error que no actualizaba correctamente el estado de cumplimiento de la Solicitud de Compra tras el cumplimiento forzado de algunas líneas (#TT00397/25)  
> - Liberación de impresión Certificaciones Únicas 2025  

### Patch 545.1-0111- 18/12/2024
> - SH - Error al abrir "Régimen Fiscal" (#TT05028/24)  
> - SCM - Error en el albarán de compra durante la carga y el retroceso (#TT05306/24)  
> - SCS - Si la Sociedad prevé la Gestión de Control (con el indicador homónimo en la tabla de Sociedades), la Evasión de un DDT o de un Retorno dentro de una factura refleja para las fechas de competencia las fechas del documento de descarga, si no están presentes las fechas del documento (#TT05126/24)  
> - FI - problemas al anular la impresión definitiva de la liquidación (#TT04859/24)  
> - FI - la impresión definitiva de la liquidación de IVA periódica ahora almacena el saldo a crédito en el campo del crédito anterior de la forma de Declaración de IVA periódica, ya no en el de las Variaciones de IVA del periodo anterior (#TT03694/24)  

### Patch 545.1-0110- 28/10/2024
> - MES - Bug corregido en órdenes de producción respecto al botón de completar datos de pedido. El problema ocurría en caso de que en la lista de materiales hubiera múltiples líneas del mismo artículo sin indicar la prioridad (#TT05019/24)  
> - PR - En el módulo Anticipos y Colección, procedimiento de contabilización de anticipos, gestión del parámetro de descripción del movimiento (#TT04923/24)  

### Patch 545.1-0109- 21/10/2024
> - ARM - Workflow: Cambio de estado condicionado (#TT04384/24)  
> - SD - Optimización de la cuadrícula 'Notas artículo-cliente' de la pestaña Varias del registro de clientes (#TT01967/24)  
> - MPS - Bug corregido en programación general en el caso de programar un artículo con en la lista de materiales un material alternativo con cantidad nula (#TT04639/24)  
> - En el cumplimiento de órdenes de proveedores en albaranes y facturas de compra sin recalcular analítica, revisión de asignación de centros según prioridad de almacenes (#TT01624/24)  
> - Revisión import excel de las facturas de venta, fix de la búsqueda del campo ‘Cedente’  
> - Bizlink - exportación Piteco - filtro para pagos contabilizados  

### Patch 545.1-0108- 24/10/2024
> - SD - en la contabilización de facturas de venta, exclusión de líneas con gastos de cobranza 0 (#TT01642/24)  
> - SCS - Corregido error en los Órdenes de Cuenta Trabajo que multiplicaban las cantidades de los materiales a emplear (#TT03904/24)  
> - SCM - Corregido error que no permitía la inserción múltiple de artículos en las Solicitudes de Oferta (#TT04334/24)  
> - WM - Corregido bug en el procedimiento de cálculo de costo de artículo en caso de que se inserte un movimiento de almacén con causal considera movimientos a cero y con un costo negativo (#TT00305/24)  
> - PR - corregido error en fase de contabilización de lista de anticipos cobrados que duplicaba los valores (#TT01262/24)  
> - CO - omitir filas FA_Pagam con importe y porcentaje ambos 0 (#TT04477/24)  
> - MES - Corregido bug en la descarga de las declaraciones de producción en relación con el consumo del semielaborado producido en la fase anterior en el caso de que esta fuera la primera y externa (#TT03883/24)  

### Patch 545.1-0107- 26/09/2024
> - MPS - Implementada gestión del número de línea no entero en el procedimiento de Definición MPS (#TT03992/24)  
> - CO - revisión del cálculo de mensualización de la elaboración de períodos (#TT04072/24)  

### Patch 545.1-0106- 20/09/2024
> - SH - Contacto-fix carga problema de colección ItemCustomer (#TT01967/24)  
> - WM - Hojas de Movimentación - Agregados parámetros AccountId, AccountCode, AccountDetailCode y AccountDescription para calcular el inventario inicial por proveedor (#TT03922/24)  
> - WM - Añadida la variante en el informe ValorizatedBOM y ValorizatedItemCostBOM de la valorización de la lista de materiales  
> - FI - gestionar los rangos de fechas de acumulación desde la configuración de cierre (#TT04008/24)  
> - MS - Bug corregido en la programación general que no eliminaba las órdenes planificadas vinculadas al flujo de caja (#TT03806/24)  
> - MS - Bug corregido en la liberación de órdenes planificadas de producción, por el cual no se valorizaba correctamente la orden de cuenta de trabajo creada por una fase externa en el caso de que en la lista de precios no se indicara la fase de referencia (#TT03885/24)  
> - SH - Actualizar verificación de estructura IBAN para el país AE (Emiratos Árabes Unidos) (#TT03985/24)  
> - CO - revisión de eliminación de registros de remanentes en los cierres interanuales (#TT03976/24)  
> - CO - Añadida la Columna de costo variante en el cálculo de costos. Esta muestra los valores presentes en la pestaña variantes del registro del artículo (#TT03057/24 - #TT03043/24)  
> - SCS - Es posible guardar el retorno de cuenta de trabajo sin indicar los lotes en los materiales si el indicador “Lotes y números seriales obligatorios” presente en los parámetros de cuenta de trabajo está desactivado. (#TT03989/24)  

### Patch 545.1-0105- 05/09/2024
> - SD - Creación de facturas desde DDT - corregido error en fase de creación de facturas desde DDT de venta (#Ticket #TT03745/24)  
> - FI - Informe de registro de IVA - cambio para tener la posibilidad de usar trimestral/mensual para la historia (#TT03769/24)  
> - PM - añadido ahora en el campo "fecha de inicio" de los recursos asignados a las wbs del proyecto (#TT03545/24)  
> - WM - Corregido error en la Impresión de Valorización de Conjuntos que no calculaba correctamente los costos en el caso de componentes con cantidades diferentes de uno (#TT02175/24)  
> - FI - corregido error en fase de inserción de bien componente incrementativo de bien parcialmente amortizado con IVA parcialmente deducible (#TT01937/23)  

### Patch 545.1-0104- 08/08/2024
> - WM - Corregido bug que no verificaba correctamente la existencia negativa cuando el artículo se encontraba dentro de un registro de descarga en contrapartida (#TT01417/24)  
> - MPS - Corregido bug en la Liberación de Órdenes de Cuenta Trabajo que solo reflejaba el precio del artículo, pero no el Listado (#TT02812/24)  
> - revisión del almacenamiento del crédito del año anterior de la impresión definitiva de la liquidación de IVA periódica de enero (#TT02348/24)  
> - SD - En el procedimiento de Creación desde DDT, se ha añadido un nuevo control que impide la creación de una autofactura desde DDT (#TT02889/24)  
> - SCS - Corregido error en los Retornos de Cuenta Trabajo que no permitía modificar el Tipo de facturación de compras en las líneas de artículos (#TT03212/24)  
> - SD - Corregido error que no permitía el cumplimiento forzado de un Pedido de Cliente cuando estaba vinculado a un Pedido Planificado de Producción que contenía Datos Adicionales (#TT03267/24)  
> - MPS - Corregido bug en la Capacidad de los centros de trabajo que consideraba la capacidad en un centro de trabajo interno dada por un pedido planificado de trabajo; ahora, si el pedido planificado de trabajo tiene una fase interna (porque a veces se produce internamente y otras veces externamente) esto ya no compromete ese centro de trabajo (#TT03406/24)  
> - MPS - Corregido bug en programación general que generaba órdenes planificadas con cantidades incorrectas (#TT03354/24 - #TT03204/24)  
> - SCS - Resuelto bug que permitía modificar la Cantidad del Artículo en un Pedido de trabajo ya cumplido en DDT (#TT02529/24)  

### Patch 545.1-0103- 27/06/2024
> - SD - Corrección del error que requería un descuento escalonado en caso de inserción de la Máscara en un nuevo Redondeo (#TT00756/24)  
> - SD - en la impresión del bilancín de facturación, revisión de la gestión de signos en el subinforme de totales por facturación de ventas (#TT02720/24)  
> - WM - Corregido bug en la exportación excel de datos presentes en el informe Implosión de componentes que no reflejaba el valor en la columna cantidad (#TT02753/24)  
> - FI - Corregido bug en el formulario de lanzamiento de impresión Enasarco que no gestionaba correctamente el filtro por rango de fechas (#TT00824/24)  
> - QY - Acciones correctivas - Revisión de lógicas de habilitación de información presentes en la pestaña Verificaciones para la próxima auditoría. (#TT02916/24)  
> - SCM - Si el indicador de Precio de Unidad de Medida Alternativa está activo en la Solicitud de Oferta, al momento de crear el Pedido de proveedor desde la Oferta del proveedor, el indicador también se reflejará en el pedido creado (#TT02804/24)  
> - SCM - Corregido bug que no mostraba el Código/Descripción del Artículo proveedor en el formulario de Detalle de líneas de Pedidos cuando el pedido no estaba cumplido (#TT02344/24)  

### Patch 545.1-0102- 03/06/2024
> - SD - En DDT y Facturas se agregó un control preliminar para la descarga del lote, en caso de lotes negativos (#TT02237/24)  
> - WM - Corregido bug en la visualización de errores del procedimiento de valorización de almacén en caso de que estos superaran los 100.000 (#TT02320/24)  
> - SD - Corregido problema en documentos de venta que no gestionaban adecuadamente la comisión en presencia simultánea de agentes vinculados a un destinatario / dirección del cliente y NO vinculados a ningún destinatario / dirección sino simplemente al cliente (#TT00273/24)  
> - FI - intrastat mensual de ventas solo a efectos fiscales (#TT01966/24)  
> - MPS - Corregido un problema técnico relacionado con las personalizaciones relativas a la programación (#TT02304/24)  
> - MPS - Corregido bug en el cálculo de la fecha de inicio de los pedidos planificados de compra (#TT03587/23)  
> - SCM, SCS - Cuando se modifica el indicador de Precio de Unidad de medida Alternativa dentro de una Factura de compra que valora un Retorno de Cuenta de trabajo, se modifica también en el Retorno y en la correspondiente contabilización, si está presente. Cuando el indicador se modifica dentro del Retorno de Cuenta de trabajo, los importes se recalculan también en la Contabilización de almacén (#TT00698/24)  
> - SCM, SCS - Cuando se modifica el indicador de Precio de Unidad de medida Alternativa dentro de una Factura de compra que valora un Retorno de Cuenta de trabajo, se modifica también en el Retorno y en la correspondiente contabilización, si está presente. Cuando el indicador se modifica dentro del Retorno de Cuenta de trabajo, los importes se recalculan también en la Contabilización de almacén (#TT00698/24)  
> - SD - Cuando en los parámetros del área de Ventas está activo el indicador ‘Bloquear inserción de documentos en fechas festivas del calendario de fábrica’, el control de la fecha festiva se realiza primero en el Calendario de Fábrica, luego en el Calendario de las capacidades productivas (#TT02396/24)  
> - SCS - Redondeo para Cdc en pedido de compra, DDT de compra, Factura de compra (#TT02500/24)  
> - SCM - La solicitud de compra debe considerarse ejecutada si se ejecutan todas las líneas, excepto las líneas de nota (#TT02389/24)  
> - FI - Restauración de funcionalidad para corregir los pagos parciales desde la cuadrícula de pagos (#TT02559/24)  

### Patch 545.1-0101- 16/05/2024
> - SH - El procedimiento de Duplicar artículo ahora también incluye las Notas de los Proveedores preferenciales (#TT01580/24)  
> - SCM - Corregido error que proponía la misma 'Descripción del artículo proveedor' en el procedimiento de 'Evasión de pedidos', para todos los proveedores preferenciales del artículo (#TT01501/24)  
> - FI - en el registro contable, bloqueada la posibilidad de modificar líneas de pago derivadas de pagos percipientes, es necesario ejecutar el retroceso y modificar el importe de pago en el procedimiento de contabilización (#TT00909/24)  
> - MES - En las Declaraciones de Producción se ha añadido el detalle de la Ubicación en el mensaje de error debido a una existencia insuficiente (#TT02064/24)  
> - SCM - Resuelto bug que no guardaba correctamente un perfil en las Solicitudes de Compra con filtro No cumplidas (#TT02123/24)  
> - WM - Corregido bug en la formulación del progresivo del código lote (#TT02142/24)  
> - FI - Intrastat 2, fluentis545 - Error en la recuperación de datos de registraciones CustomPosting (#TT02243/24)  

### Patch 545.1-0100- 03/05/2024
> - FI, PR - revisión de contabilización de efectos para partidas creadas en divisiones diferentes de la activa (#TT01401/24)  
> - FI - en caso de gestión de controlling, las registraciones de ajuste ya no prevén la asignación de una fecha de competencia económica a las líneas contables/cdc/cdp, mientras que las integraciones prevén la fecha inicial igual a la fecha de competencia económica de la línea original (y la fecha final a fin de mes) (#TT01061/24)  
> - SCM - Corregido error en la actualización de los importes en los movimientos de almacén en presencia de un gasto repartido en el DDT o en la Factura de Compra (#TT00794/24)  
> - SD - Corregido error que modificaba el estado de cumplimiento de la solicitud a raíz de una actualización de la Fecha de entrega en el Pedido del cliente (#TT01699/24)  
> - FI - revisión de impresión definitiva de liquidación de IVA periódica de enero para salvaguardar crédito del año anterior/crédito del periodo anterior (#TT01160/24)  
> - CRM - El remitente reportado en las Newsletters se toma del campo 'De', presente en el encabezado de las Newsletters (#TT01770/24)  
> - FI - comunicación trimestral del IVA, alineación 2024 (#TT01141/24)  
> - SD - Búsqueda de Comisiones por destino- corregida la búsqueda del % de comisión por cliente y destino de mercancía (#TT00273/24)  
> - MES - Resuelto bug en el recálculo de la fecha hora de inicio y fin de las fases del pedido de producción (#TT03584/23)  
> - MPS - Resuelto bug en fase de creación de las órdenes planificadas en caso de materiales con nivel ficticio (#TT00562/24)  
> - MPS - Corregido bug en programación general en caso de que se programaran muchas líneas a la vez (#TT01451/24)  
> - MPS - Corregido bug en programación general para pedidos no examinados (#TT02897/23)  

### Patch 545.1-0099- 28/03/2024
> - SD - cambios para la eFattura versión rumana  
> - FI - bloqueo del recálculo FSPostingPaymentSet cuando se entra en modificación de un registro y no se recalculan las partidas (#TT00362/24)  
> - SCM - Corrección del error que impedía la Valorización DDT en caso de Número de documento hasta 20 cifras (#TT00849/24)  
> - SD - Gestión de excepciones de las facturas electrónicas peppol (#TT01258/21)  
> - SD - Implementado y mejorado el funcionamiento del indicador “Evaso forzado” presente en las líneas de los pedidos de venta y también del campo estado de evasión presente en el encabezado (cuando se selecciona- “Evaso forzosamente”); ahora cuando se activan se muestra un mensaje que avisa que- “La evasión forzada de la línea implica la eliminación automática de eventuales pedidos planificados vinculados a trabajos en estado planificado y la evasión de los trabajos en estado planificado y no examinados. En cuanto a los documentos generados a raíz de trabajos en estado lanzado o ejecutivo, los trabajos y documentos no serán modificados.” (#TT00219/24)  
> - FI - Impresión de pantalla liquidación IVA (#TT01127/24)  
> - SD - Los gastos Varios presentes en los pedidos se reportarán todos en el documento resumen que cumple los Pedidos (#TT01102/24)  
> - MPS - Corregido error que no permitía la cancelación de un Pedido de Producción (#TT01011/24)  
> - FI - IVA a CRÉDITO en el archivo para la LIPE considera también la IVA no deducible del prorrateo (#TT01596/23)  
> - CO - en la impresión del consolidado de Proyecto, revisión del filtro por tipo de proyecto (#TT01172/24)  
> - WM - Mejorada la visualización en análisis disponibilidad de los picks creados mediante la lista de extracción de materiales (#TT01205/24)  
> - SD - Resuelta errónea exposición en la impresión de comisiones acumuladas de algunos casos que ya estaban vinculados a liquidaciones de agentes (#TT01208/24)  

### Patch 545.1-0098- 08/03/2024
> - FI - Exportación Intrastat- sección aduanera y valor negativo en el resumen si se inserta en la sección quinquies (#TT00580/24)  
> - MPS - Programación General- Ahora es posible cancelar un pedido planificado incluso cuando está contenido dentro de un Flujo de Caja (#TT00684/24)  
> - CO - cálculo de amortizaciones de controlling, revisión de procesamiento de datos iniciales (#TT00477/24)  

### Patch 545.1-0097- 01/03/2024
> - FI - En caso de creación de Factura de venta desde Partida de anticipo, las fechas de vencimiento se crean con el indicador Manual (#TT00672/24)  
> - CRM - Al enviar las Newsletters, se considera el contenido de la propiedad Correo Electrónico de la Lista de distribución dinámica, como destinatario de los correos electrónicos (#TT00730/24)  
> - SCS - Importación xml de retornos- Corregido error de timeout de la importación (#TT02194/23)  

### Patch 545.1-0096- 22/02/2024
> - PR - en modificación de los efectos activos, habilitación de la modificación del indicador acreditado y del estado efecto cuando la sociedad está codificada para DocFinance (#TT01387/23)  
> - MPS - Se resolvieron bugs en la programación (#TT01685/23, #TT00403/24, #TT00083/24, #TT03527/23, #TT00186/24)  
> - CRM - Resolución del error que impedía el envío de las Newsletters si había una Lista de distribución dinámica (#TT00551/24)  
> - FI - revisión de la impresión de la liquidación del IVA periódica, visualización del subinforme del plafond solo si este tiene indicador predeterminado  
> - WM - Corregido bug en el procedimiento de valorización del almacén (#TT00596/24)  
> - MPS - Resuelto bug en el procedimiento de Programación General (#TT00462/24)  
> - WM - Corregido error en la conversión de la cantidad alternativa proveniente de un Retorno de Cuenta de trabajo, en el formulario de Detalle de Movimientos (#TT00517/24)  

### Patch 545.1-0095- 08/02/2024
> - WM - Añadido en el informe del Diario de almacén el filtro por empresa y división (#TT00375/24)  
> - SD - Resolver el problema de la exportación columna "Estado SDI" (#TT00321/24)  
> - FI - cambio en el cálculo para no deducible- versión RO  
> - SCM - solicitudes de compra- resolver el problema de guardar líneas en analítica sin centro de costo (#TT00095/24)  

### Patch 545.1-0094- 06/02/2024
> - WM - Añadido en el informe del Diario de almacén el filtro por empresa y división (#TT00375/24)  
> - SD - Resolver el problema de la exportación columna "Estado SDI" (#TT00321/24)  
> - SCM - solicitudes de compra- resolver el problema de guardar líneas en analítica sin centro de costo (#TT00095/24)  

### Patch 545.1-0093- 25/01/2024
> - SH - Creación de nuevo año- cuando el parámetro fijo es true- si existen líneas con año de fecha de finalización de validez > = año- para no actualizar a nulo (#TT00093/24)  
> - MES - Corregido bug en las declaraciones de producción que no cargaba correctamente las UDC creadas dentro de la declaración (#TT03393/23)  
> - SH - revisión del rollback de contadores de nuevo año, para los numeradores ex-2010 prueba si existen documentos en el período (#TT00120/24)  
> - SD - Revisión de la gestión del bloqueo de crédito cuando el documento en modificación es el que causa el desbordamiento y ya está autorizado (#TT00206/24)  
> - PR - en los pagos a proveedores, en la inserción manual de las líneas revisión de la gestión del campo importe en moneda para la gestión de decimales (#TT00281/24)  
> - FI - CU2024- Lanzamiento de nuevo informe de Certificación Única 2024  
> - Se añadió la posibilidad de agregar el prefijo personalizado a flowOperation para personalizar un flujo estándar  

### Patch 545.1-0092- 09/01/2024
> - FI - factura de compra con porcentaje no deducible en RO- solucionados valores erróneos en el centro de costo en contabilidad (#TT03651/23)  
> - SD - las líneas de las intervenciones se reportan en factura por valorización de intervenciones (#TT03594/23)  
> - SD - El IVA de la Declaración de intención en los Gastos de los Resúmenes se inserta en el DDT creado por Orden, incluso si se pasa por Picking (#TT02907/23)  
> - SD - Revisión del campo Redondeo en archivo xml en caso de notas de crédito con precio incluido (#TT03685/23)  
> - SD - La factura de venta puede filtrarse según el tipo de persona de Contactos- Entidad legal (#TT03667/23)  
> - SD - Corregido el funcionamiento del filtro sobre Datos Extra en los DDT de venta (#TT00058/24)  
> - FI - En la máscara de búsqueda de préstamos, valorización del campo ‘Importo residuo’ en cuadrícula (#TT03633/23)  

### Patch 545.1-0091- 15/12/2023
> - CO - revisión de la elaboración de períodos del controlling para la mensualización de datos más allá del ejercicio corriente (#TT03186/23)  
> - CO - en la impresión del consolidado de proyecto del controlling, añadido filtro (no obligatorio) de selección de la registración de consolidamiento a imprimir (#TT03485/23)  
> - SH - La columna ‘Destino’ de la cuadrícula ‘Lista de destinos’ de la pestaña ‘Entrega’ del Registro de contacto ha sido adaptada para contener hasta 80 caracteres, igual que el límite de la ‘Razón social’ del contacto (#TT03307/23)  
> - SCM - Carga a Mazzino- resuelto el ingreso del valor del movimiento de almacén cuando la línea del documento tiene la unidad de medida Alternativa pero cantidad alternativa 0 (#TT01740/23)  
> - SCM - Carga a Mazzino- resuelto el ingreso del valor del movimiento de almacén cuando la línea del documento tiene la unidad de medida Alternativa pero cantidad alternativa 0 (#TT03069/23)  
> - CO - en la contabilización de existencias de cierres interanuales, valorización de la descripción del movimiento para todos los registros creados (#TT03495/23)  

### Patch 545.1-0090- 07/12/2023
> - SD - Si la Descripción del artículo supera los 250 caracteres en el archivo xml, la importación del Pedido PEPPOL trunca la cadena por los caracteres que exceden (#TT03258/23).  
> - SCM - Resuelta excepción saliente en la Evasión de pedidos de cuenta de trabajo en DDT, causada por un parámetro no presente (#TT03287/23)  
> - FI - alineación de fechas de competencia analítica al cambio de fechas en los detalles de compensación (#TT03153/23)  
> - FI - revisión de asignación de cuentas en los asientos de ajuste de los cierres interanuales (#TT03349/23)  
> - SD - En el procedimiento de ‘Contabilización de facturas’ se eliminó el filtro en la cuadrícula ‘Registro contable’ de la pestaña Anteriores (#TT02115/23)  
> - SD - Revisión del cálculo enasarco de la cuota empresa para el reembolso automático de las cuotas mínimas pagadas en trimestres anteriores (#TT03396/23)  
> - CRM - Resuelta excepción saliente al hacer clic en el botón Enviar en una Newsletter (#TT02563/23)  
> - SCM - Importación de archivo xml- revisión de la formateación de la fecha en la importación del archivo xml (#TT03194/23)  
> - FI - RO añadir nuevos cuentas en FastStart  
> - WM - Crea la posibilidad de llegar a una lista de inventario de un segundo usuario incluso si el inventario está abierto por otro usuario  
> - SH - RO propuesta datos anagrafica contacto desde la versión 8 de Anaf  

### Patch 545.1-0089- 17/11/2023
> - SD - En el caso de Evasión parcial de un Pedido en un Picking, la posterior inserción de un artículo en el Picking y la creación de la Factura, el artículo insertado en el Picking se considera en los Resúmenes de factura (#TT02039/23)  
> - MES - Resuelto bug en el cálculo del costo de los movimientos de almacén relacionados con el registro de las declaraciones de producción (#TT02589/23)  
> - SH - panel de contexto- corregida anomalía en el panel de contexto, en caso de que no haya datos presentes no regrese un error sino que no cargue los datos (#TT02954/23)  
> - MPS - En la RDA creada a partir de la Liberación de Órdenes planificadas, se propone el listado válido para el proveedor aunque no sea el proveedor preferencial por defecto para el artículo. Además, en este procedimiento, el artículo se busca en todos los listados válidos para el proveedor, mientras que antes solo se buscaba en el último listado válido (#TT02898/23)  
> - CO - gestión de comparación del controlling (#TT02752/23)  
> - SH - Eliminar de FSContact -> Código caracteres especiales !@#$%^&* | \ / _ . , ; - (#TT03207/23)  
> - CO - en los cierres interanuales, revisión de asientos de integración para posible cuenta de aumento faltante (#TT03235/23)  

### Patch 545.1-0088- 25/10/2023
> - FI - error en la creación de pagos dentro del registro contable (#TT01583/23)  
> - WM - En Análisis disponibilidad también para las líneas de detalle relativas a órdenes de producción es posible visualizar cuenta, subcuenta y descripción del cliente (#TT01554/23)  
> - SCM_PurchaseDeliveryNotes -> SCMPDN_Code- cambio en longitud de 18 a 20 caracteres (#TT02687/23)  
> - BI - forzada la conversión a int para el numerador y el denominador- tableros  
> - MPS - Mejorada la gestión de artículos ficticios en programación y análisis de disponibilidad (#TT01484/23)  
> - MPS - Programación general- Gestión de la Versión (#TT01863/23, #TT02380/23)  
> - PR - en la contabilización de listas Sbf con cierre de cuenta cliente, añadido agrupamiento de líneas por fecha de vencimiento (#TT01130/23)  
> - WM - resolver problema de guardado de descarga antes de tener un carga (#TT02878/23)  
> - CO - controlling- valorización del área de compras en error (#TT02693/23)  
> - BI - Corregida la re-selección de la línea de la cuadrícula de detalle- "Se ha añadido un elemento con la misma clave" (#TT02917/23)  
> - WM - Corregido bug en la procedura de cálculo costo (#TT02685/23)  
> - CO - arreglo de refactor en escrituración de ajuste  

### Patch 545.1-0087- 05/10/2023
> - CO - gestión de UT_SpMapping en el almacenado CO_CalcJobOrderReclassification, CO_CreateProjectFinalCalculation (#TT02652/23)  
> - CO - en la valorización de las hojas de compra de los cierres interanuales, gestión de las competencias económicas sobre la base de la fecha de carga de la hoja  
> - SCS - Corregido bug en el control de existencia para la ubicación de los materiales del retorno de cuenta trabajo (#TT02630/23)  
> - PM - es posible cancelar una solicitud de intervención con id > 32.767 (#TT02529/23)  
> - SCM - La Suma de la columna Imponible en los artículos de las Facturas de compra se actualiza con la adición de Descuentos (#TT02325/23)  
> - MPS - Corregido bug en el formulario de visualización de datos del MRP (#TT02508/23)  
> - FI - revisión de gestión de descuentos en la contabilización de facturas con precio incluido (#TT02498/23)  

### Patch 545.1-0086- 22/09/2023
> - SD - La Duplicación de Órdenes cliente refleja el UnitNetPrice (#TT02366/23)  
> - CO - revisión del cálculo de amortizaciones del controlling (#TT02531/23)  
> - FI - propuesta de cambio en sp CA_CreateSimpleReg  
> - FI - gestión de campos de enlace a los proyectos en la reapertura de los asientos de ajuste  
> - FI - Facturas de compra SDI- falta de control por Código Fiscal (#TT01432/23)  
> - MPS - Corregido bug en el caso de eliminación de un pedido que tenía órdenes planificadas liberadas con extradata (#TT02464/23)  
> - WM - Corregido bug en fase de inserción de componente en la lista base (#TT02394/23)  
> - WM - Corregido bug en caso de que se utilizara el procedimiento "Modificación masiva de artículos" para insertar los tiempos de los proveedores preferenciales (#TT02614/23)  
> - SD - Corregido error en fase de contabilización de lista de anticipos cobrados que duplicaba los valores ( #TT01262/24)  
> - CO - omitir filas FA_Pagam con importe y porcentaje ambos 0 (#TT04477/24)  
> - MES - Corregido bug en la exportación de las declaraciones de producción relacionada con el consumo del semielaborado producido en la fase anterior en caso de que esta fuera la primera y externa (#TT03883/24)  

### Patch 545.1-0085- 07/09/2023
> - MPS - Corregido bug en la programación para calcular la fecha de compromiso en los materiales de órdenes planificadas  (#TT02093/23)  
> - SD - Corrección del valor de Storno obsequios sin recargo IVA en los Documentos SDI (#TT02336/23)  
> - SD - La Duplicación de DDT y Facturas refleja la Declaración de intención si hay límite disponible (#TT02318/23)  
> - FI - Campos "Año", "Mes" y "Trim." en cuadrícula intrastat en reg. contables (#TT01630/23)  
> - FI - Compensaciones- IVA con fecha de finalización de validez (#TT02176/23)  
> - FI - en un registro manual no IVA relativo a los activos, la inversión de signo debe hacerse solo si la causal lo prevé (#TT02358/23)  

### Patch 545.1-0084- 02/08/2023
> - WM - Corregido bug que no verificaba correctamente la existencia negativa cuando el artículo se encontraba dentro de un registro de descarga en contrapartida (#TT01417/24)  
> - MPS - Corregido bug en la Liberación de Órdenes de Cuenta trabajo que solo reflejaba el precio del artículo, pero no el Listado (#TT02812/24)  
> - Revisión del almacenamiento del crédito del año anterior de la impresión definitiva de la liquidación de IVA periódica de enero (#TT02348/24)  
> - SD - En el procedimiento de Creación desde DDT, se ha añadido un nuevo control que impide la creación de una autofactura de DDT (#TT02889/24)  
> - SCS - Corregido error en los Retornos de Cuenta trabajo que no permitía modificar el Tipo de facturación de compras en las líneas de artículos (#TT03212/24)  
> - SD - Corregido error que no permitía el cumplimiento forzado de un Pedido de Cliente cuando estaba vinculado a un Pedido Planificado de Producción que contenía Datos Adicionales (#TT03267/24)  
> - MPS - Corregido bug en la Capacidad de los centros de trabajo que consideraba la capacidad en un centro de trabajo interno dada por un pedido planificado de trabajo; ahora, si el pedido planificado de trabajo tiene una fase interna (porque a veces se produce internamente y otras veces externamente) esto ya no compromete ese centro de trabajo (#TT03406/24)  
> - MPS - Corregido bug en programación general que generaba órdenes planificadas con cantidades incorrectas (#TT03354/24 - #TT03204/24)  
> - SCS - Resuelto bug que permitía modificar la Cantidad del Artículo en un Pedido de trabajo ya cumplido en DDT (#TT02529/24)  

### Patch 545.1-0083- 27/06/2023
> - FI - alineación del campo Pagamentos de registros provisionales en el formulario de cálculo de riesgo del cliente porque no se llenaba correctamente (#TT00947/23)  
> - SD - CMR- modificación de impresión CMR (#TT03221/22)  
> - FI - Informe de situación de retenciones, revisión del campo retención pagada (#TT01775/23)  
> - CO - alineada la lógica de gestión de la competencia económica para las Facturas a emitir / recibir en los cierres interanuales (#TT01267/23)  
> - SD - Si la disminución de la cantidad del documento, ya señalada en el crédito, lleva el desbordamiento por debajo del valor del crédito del cliente, la línea de señalización en el gestor de bloqueo se cancela (##T01806/23)  
> - CO - Supresión de líneas con valor 0 en el cierre de cuentas interanuales, asientos de ajuste (#TT00797/23)  
> - SCS - Corregido el error en el rollback de la hoja de entrega del subcontratista (#TT01962/23)  

### Patch 545.1-0082- 14/06/2023
> - MES - Señalaciones- Restauración del estado de cumplimiento de un pedido de producción si se modifica una señalación relacionada (#TT01485/23)  
> - FI - Corregido bug que no permitía el correcto funcionamiento del campo de filtro Cuenta de agente en la ejecución de los informes Extracto y Subcuentas (#TT01281/23)  
> - SH - Eliminación del tipo de línea 8 de los documentos (#TT00762/23)  
> - SD - El indicador Recupero IVA se transfiere entre Pedido y DDT también pasando por el Picking (#TT01708/23)  
> - FI - impresión del libro contable- añade un nuevo mensaje (#TT01551/23)  
> - SCM - Revisión de la asignación al centro de costo según la prioridad del almacén al modificar el almacén en la línea del documento (#TT01715/23)  
> - SCM - en los pedidos de proveedores, gestión del parámetro de bloqueo al guardar cuando el valor de la analítica no coincide con el valor del artículo (#TT01716/23)  
> - Resuelto el problema que en fase de vista previa de impresión no cargaba en la primera vista previa los botones de configuración de página y diseño (#TT01719/22)  
> - SCM - Los totales de la Factura permanecen correctos al agregar Gastos en los Resúmenes (#TT01681/23)  
> - SCM,SCS,QY,SD,WM,MES - La validación negativa de las existencias antes del registro del almacén se genera desde todas las áreas considerando todas las fechas posteriores a la fecha de registro (#TT00839/23)  
> - CO - en la elaboración de períodos del Controlling, verificación de la presencia de un período de distribución predeterminado para realizar la elaboración (#TT01687/23)  
> - SD - corregido bug que no valorizaba correctamente los vencimientos en la factura de venta cuando se generaba desde DDT y en presencia de la retención de impuestos (#TT01719/23)  

### Patch 545.1-0081- 26/05/2023
> - SCS - Corregido el referente de los campos fase, subfase y código fase en el cumplimiento de los DDT y retornos de cuenta de trabajo (#TT01191/23)  
> - QY - En la Búsqueda de Quejas, la columna Gestión se llena correctamente (#TT01072/23)  
> - SCM - En el área de compras, revisión del cálculo del importe de la cobertura de las declaraciones de intención (#TT01126/23)  
> - CRM - Resolución de excepción 429 del servidor al abrir Contactos (#TT01318/23)  
> - CRM - Es posible eliminar la Fecha de cierre en el registro de Tickets (#TT01364/23)  
> - WM - Activación de la Propagación de Datos Extra de Artículo a FSMovement (#TT01358/23)  
> - FI - revisión de la inserción de múltiples centros de costo en los controladores de costo (#TT01435/23)  
> - CO - incrementado el tiempo de espera en la recuperación de datos de producción, Recuperación de movimientos físicos (#TT01457/23)  
> - MPS - Corregido bug en el filtro del código artículo del procedimiento de Gestión de ciclos y fases de trabajo (#TT01411/23)  
> - SD - Habilitación de modificación de causal de cierre automático de vencimientos en facturas ya enviadas al Sdi (#TT00344/23)  
> - SD - Gestión Ofertas- Añadido índice para la referencia al objeto padre de las líneas de oferta (#TT01421/23)  
> - SH - Resuelta excepción saliente al hacer clic en Nueva Destinación desde la pestaña Entrega de contactos (#TT01460/23)  
> - WM - Corregido bug en la importación de artículos de la gestión de prototipos. Ahora las fases se insertan correctamente en la sección del Ciclo en la pestaña Componentes (#TT00791/22 y #TT02388/22)  

### Patch 545.1-0080- 28/04/2023
> - SD - Si la factura proviene de un Pedido, en el archivo xml se reportará el campo Su referencia de encabezado; si está ausente, se reportará la dicción VACÍO (#TT03021/22)  
> - WM - Corregida la gestión de la ubicación del movimiento de almacén creado por artículos alternativos de las señales de producción, ahora se selecto dependiendo de la causal utilizada en el pedido (#TT00815/23)  
> - FI - solución problema al salvaguardar la fecha de impresión de liquidaciones de IVA en sociedades con periodicidad trimestral, revisión del periodo de impresión cuando se establece el indicador ‘Definitiva’ (#TT01156/23)  
> - SCM, SD - Se añadió un pop up de aviso de IVA obligatoria en caso de cambio de cliente o proveedor en la Factura (#TT03387/22)  
> - FI - solución al problema de la selección del centro de costo en la pestaña Analítica (#TT01225/23)  

### Patch 545.1-0079- 13/04/2023
> - SCM - La Carga en almacén del Recibo de mercancías reporta el precio de los artículos del documento (#TT01075/23)  
> - WM - Corregido bug en el cálculo de costos directos dentro de los prototipos (#TT00979/23)  
> - CO - modificada almacenada estándar para habilitar UT_SpMapping (#TT01175/23)  
> - MPS - Corregido bug en la programación relacionada con el restablecimiento de stock mínimo (#TT00983/23)  
> - SCM - El procedimiento de Creación Automática de pedidos reporta los primeros 255 caracteres de la descripción de los artículos del documento de origen (#TT01938/23)  

### Patch 545.1-0078- 06/04/2023
> - WM_StampaGestionale- Artículos No Movimentados- Modificación del formato del campo Fecha Última Registración en dd/MM/yyyy.  
> - FI - cálculo de asientos de ajuste (#TT00454/23)  
> - SD, SCM - En el procedimiento de Duplicar y Mantenimiento, el Actualiza listados en Valor permite un número de decimales libre (#TT00925/23)  
> - MES - En los pedidos de producción, si se indica un lote en los materiales, este se vuelve a proponer, en correspondencia del material, también en el correspondiente picking creado por el procedimiento de Lista de extracción de materiales (#TT01408/22)  
> - SD - En la cabecera de los documentos de venta el botón de la barra de ribbon ha sido renombrado a "Insertar Agente en las líneas" (#TT00890/23)  
> - SD - Corrección de la Suma en el Panel resumen totales de la Búsqueda de facturas de venta- la variación del Orden de columnas no modifica sus valores (#TT00780/23)  
> - QY - Control de Ítem- Importaciones de artículos a controlar- La cantidad especificada por línea del documento a importar ahora reporta la cantidad del detalle Lote, si se solicita, no la de la línea artículo.  

### Patch 545.1-0077- 23/03/2023
> - SD - Se inserta control sobre el destinatario y la dirección en caso de Evasión de pedidos múltiples en ddt o factura (#TT00807/23)  
> - SCS - Corrección de error Cantidad residual en los Materiales de los pedidos de cuenta de trabajo cumplidos en ddt (#TT00459/23)  
> - SCS - Se añadió la posibilidad de cumplir una cantidad decimal en las Entregas previstas (#TT00817/23)  
> - SD - En la creación del archivo Sdi, sustitución del carácter '&' por 'y' en lugar de 'and' (#TT00845/23)  
> - CO - crea cierre interanual- propuesta de año (#TT00862/23)  
> - SH - Error de Fluentis en el procedimiento de duplicación de contacto (#TT00848/23)  
> - SD - Revisión de la búsqueda de ddt de venta en el procedimiento de valorización (#TT00825/23)  
> - SCM - Los descuentos finales insertados en la factura se reportan en las líneas del ddt de compra y en la contabilización de almacén vinculados (#TT00417/23)  
> - WM - La Visualización de existencias considera los decimales de la Unidad de medida (#TT00754/23)  
> - PR - Corregido bug que permitía la eliminación de las líneas en el formulario Lock manager usando la tecla SUPR del teclado, aunque el usuario no tuviera derechos sobre el comando de eliminación (#TT00724/23)  

### Patch 545.1-0076- 14/03/2023
> - Habilitación de la modificación del campo 'Notas iniciales' en las facturas de venta también después de la creación del archivo de facturas ordinarias Sdi (#TT00593/23)  
> - WM - Corregido bug en el procedimiento de cálculo de costos (#TT00657/23)  
> - FI - "certificación de retención telemática"- doble clic en "ruta del archivo" (#TT00812/23)  
> - SD - Resuelto problema de duplicación de Pagos en la Valoración de más Intervenciones en Factura (#TT03278/22)  
> - FI - asientos de ajuste- error al hacer clic en el botón "verificar cálculo de ajuste" (#TT02401/22)  
> - FI - error en la impresión y vista previa en fichas de activos si el año es nulo (#TT00799/23)  
> - MPS - Corregido problema en la programación general que no eliminaba las órdenes planificadas vinculadas al flujo de caja (#TT03806/24)  
> - MS - Corregido bug en la liberación de órdenes planificadas de producción, debido a que no se valorizaba correctamente la orden de cuenta de trabajo creada por una fase externa si en la lista de precios no se indicaba la fase de referencia (#TT03885/24)  
> - SH - Actualizar verificación de estructura IBAN para el país AE (Emiratos Árabes Unidos) (#TT03985/24)  
> - CO - revisión de eliminación de registros de remanentes en los cierres interanuales (#TT03976/24)  
> - CO - Añadida la Columna de costo variante en el cálculo de costos. Esta muestra los valores presentes en la pestaña variantes del registro del artículo (#TT03057/24 - #TT03043/24)  
> - SCS - Es posible guardar el retorno de cuenta de trabajo sin indicar los lotes en los materiales si el indicador “Lotes y números seriales obligatorios” presente en los parámetros de cuenta de trabajo está desactivado. (#TT03989/24)