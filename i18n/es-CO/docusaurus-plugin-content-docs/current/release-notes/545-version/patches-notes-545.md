---
title: Notas de la versión Versión 545
sidebar_position: 1
ai_generated: true
---

### Patch 545.1-0124 - 23/10/2025

> - WM - Duplicar artículos - crear la posibilidad de extender de forma personalizada otras propiedades a duplicar (#TT04607/25) 

### Patch 545.1-0123 - 16/10/2025

> - SD - Al duplicar DDT, Facturas o PdV, si no se encuentra una tasa de IVA válida entre la declaración de intención, la ficha del cliente o la ficha del artículo, se propone el código de IVA presente en el documento original (#TT03962/25)

### Patch 545.1-0122 - 23/09/2025

> - WM - Corregido el filtro faltante sobre componentes vencidos en la inserción masiva de componentes de lista de materiales<!-- distinta base --> (#TT04070/25)  
> - SD - Solucionado el problema de eliminación de facturas de venta con más de 2100 artículos (#TT04134/25)

### Patch 545.1-0121 - 04/09/2025

> - MES - Ahora con el procedimiento de liberación de órdenes de producción sólo se mueven los artículos que tienen como tipo de recogida Automática en los parámetros MRP (#TT03691/25)  
> - PF - Verificación si los pagos a proveedores ya han sido contabilizados (#TT03663/25) 

### Patch 545.1-0120 - 07/08/2025

> - SD - Impresión Factura y DDT de Venta: Resuelto el problema de vista previa vacía cuando no está activo el flag impresa (#TT03536/25, #TT03531/25) 
> - WM - Crear Factura de Venta desde Picking - verificación de los cargos de timbre fiscal (#TT02058/25)  

### Patch 545.1-0119 - 31/07/2025

> - SCM - Solucionado error que no calculaba correctamente el valor del porcentaje en la impresión de Facturación de compras (#TT02798/25, #TT05463/24) 
> - SD - Al duplicar un documento de venta con Declaración de intención se verifica la presencia de una declaración activa; en ausencia, la tasa de IVA de los artículos se toma de la ficha del cliente o del artículo (#TT03382/25) 
> - SD - En las Facturas de Venta con Gestión Conai, el peso de los materiales y la posible exención ahora se valorizan también en caso de entrega DDT en Factura (#TT03327/25) 

### Patch 545.1-0118 - 17/07/2025

> - FI - Importación de registros desde DocFinance, revisión de la asignación de fecha de finalización de la competencia económica (#TT02815/25) 
> - FI - Registros contables: solucionado el problema relacionado con la multiplicación de filas de los detalles de IVA en los registros contables de venta de activos fijos (#TT01371/25) 
> - FI - Revisión de la contabilización desde compras/ventas para la asignación, en la pestaña intrastat del registro, de la nación del código iso VAT; modificación de la inserción manual en la cuadrícula intrastat (#TT01817/25) 
> - FI - Impresión de registros de IVA - corregida anomalía en caso de IVA registrada en el periodo siguiente (#TT02906/25) 
> - MES - Solucionado error que, en caso de eliminar una Orden de Producción asociada a una línea de artículo de una Orden de Conto Lavoro<!-- conto lavoro -->, provocaba la eliminación de toda la Orden de Conto Lavoro<!-- Ordine di Conto Lavoro --> (#TT01078/25) 
> - PR - Creación archivo Sepa, modificada la gestión de caracteres especiales ‘-‘ (#TT02214/25) 
> - PR - Generación de archivo transferencias Sepa, sustitución automática de caracteres inválidos (#TT02214/25) 
> - PR - Pago a proveedor - gestionar diferencias de cambio (#TT02563/25) 
> - SCM - Corregido error en el Almacén<!-- Carico a magazzino --> de DDT en moneda extranjera que no convertía el valor de los gastos distribuidos insertados en el resumen del DDT (#TT02447/25) 
> - SCM - Ahora se usan los detalles de la categoría de descuentos para validar la inserción de las categorías de descuentos (#TT00607/25) 
> - SCS - En las Ordenes de Conto Lavoro<!-- Ordini di Conto Lavoro --> ahora es posible asociar una Orden de Producción a la línea de artículo solo si también se especifica la fase (#TT01078/25) 
> - SD - Habilitada la eliminación de Facturas de Venta que contienen órdenes que no respetan la progresión fecha/número (#TT02342/25) 
> - SD - Corrección creación Factura de Venta - SDI, problema de descripción de datos extra nulos (#TT02448/25) 
> - SH - Ficha cliente-proveedor corregido error al ingresar agente (#TT02353/25) 
> - WM - Solucionado bloqueo al eliminar artículo con recálculo de costos ya ejecutado (#TT02818/25) 


### Patch 545.1-0117 - 09/05/2025

> - SD - Corregida la actualización de cantidades residuales durante la entrega DDT desde búsqueda de Pedidos de Clientes, en presencia de artículos gestionados por lotes y números de serie (#TT00900/25)

### Patch 545.1-0116 - 30/04/2025
> - FI - Revisión cálculo importes cash flow en Órdenes de proveedores (#TT01073/25) 
> - SD - En las Facturas de Venta descargadas para las que se generó el documento Sdi, las cantidades y precios de los artículos ya no son modificables (#TT00881/25) 
> - WM - Corrección en cálculos de impresión borrador de almacén<!-- magazzino --> 
> - PR - en una nueva lista de anticipo de facturas, el cambio de tipo de lista actualiza ambos subcuentas de la cabecera de la lista (#TT01384/25) 
> - SD - Pedidos de clientes: Solucionado error en el cálculo de la Cantidad residual de artículos en caso de modificar manualmente la cantidad despachada en una Factura de Venta (#TT01574/25) 
> - PR - Corregido mal funcionamiento del filtro Estado Movimientos en el formulario de Gestión de Pagos, Apoyo a Cobros. **¡Atención! Este cambio puede afectar los perfiles** (#TT01468/25) 
> - SD - Modificado test al guardar facturas, para el nuevo tipo de Autofacturas TD29 (#TT01693/25) 
> - SCM - Proponer centro de costo y cuenta para modificar el tipo de facturado de la factura de compra (#TT01584/25)
> - FI - Impresión extracto de cuenta - Corregida anomalía que no permitía la impresión estableciendo el filtro por agente y por cuenta de cliente (#TT01719/25) 
> - FI - No se trasladó la Declaración de intención desde Documento SDI (#TT01820/25) 
> - SD - Solucionado error en la entrega de pedidos en DDT en presencia de artículos gestionados con lotes y números de serie (#TT00900/25) 
> - FI - la creación de Intra2 compras desde facturas de compra ahora valoriza la nación de la VAT desde el campo IsoCode de la ficha y no desde la nación de la ficha en sí (#TT01817/25)


### Patch 545.1-0115- 07/03/2025
> - FI - Revisión filtro impresión liquidación de IVA periódica con periodicidad trimestral y cálculo anticipo trimestral (#TT00866/25)
> - FI - Cálculo incorrecto de la liquidación de IVA  (#TT03165/24)
> - FI - Impresión Liquidación IVA periódica - no se reporta el registro IVA compras en la impresión (#TT01236/25)

### Patch 545.1-0114- 28/02/2025
> - Bizlink - Importación excel facturas - No es obligatorio precio, unidad de medida e iva para poder importar las filas de nota (#TT00639/25)
> - FI - revisión filtro impresión liquidación de IVA periódica con periodicidad trimestral y cálculo anticipo trimestral (#TT00866/25)
> - FI - Cálculo incorrecto de la liquidación de IVA  (#TT03165/24)
> - Optimización impresión “Borrador de almacén<!-- Brogliaccio di magazzino -->”
> - PR - Campo "Progreso" en el módulo Gestión de liquidez (#TT02060/24) Se hicieron cambios en el campo progreso de la fórmula Gestión de liquidez. El perfil puede verse afectado por los cambios.
> - FI - revisión contabilización ajustes con opción ‘registro único’, restablecimiento a null del campo de enlace ‘-1’ cuando el registro no puede ser guardado por desajustes
> - FI - Número ilimitado de dígitos en el procedimiento de ajuste de moneda (#TT00991/25) Se hicieron cambios en el campo de cambio de la fórmula AjusteMonedaContable. El perfil puede verse afectado por los cambios.
> - FI - pagos parciales para iva diferida (#TT01013/25)

### Patch 545.1-0113- 14/02/2025
> - FI - revisión impresión ‘Diferencia partidas abiertas saldo contable’, visualización de resultados también en impresión ‘detallada’ (#TT00121/24)
> - WM - corrección verificación de existencias para cada descarga entre fecha de descarga y fecha actual (#TT02878/23)
> - Aog -  corrección para la ventana de creación de pedido de compra desde solicitud de compra - cuando se cerraba la ventana y existía un prototipo de pedido seleccionado se creaba de todas formas un pedido aunque el procedimiento no hubiera sido ejecutado(ref #TT00335/25)
> - SCM - La creación de la factura de compra desde archivo Sdi ya no traslada las configuraciones de pago de la ficha de proveedor (#TT04209/24)
> - MPS - Corregido bug en la liberación de órdenes planificadas de conto lavoro<!-- conto lavoro --> en las que no se insertaba correctamente la UM de medida en caso de artículos gestionados con UM alternativa (#TT05068/24)
> - FI - F20215 - error compensación rápida (#TT00415/25)
> - Carga NIR - solucionar el problema cuando el registro tiene contrapartida de carga - proponer lotes(#TT00472/25)
> - MPS - Ahora la fecha de entrega propuesta en los pedidos planificados nacidos de artículos gestionados a stock a través del procedimiento MRP y programación toma en cuenta correctamente el lead time de aprovisionamiento (#TT03597/24)
> - WM - Corregido error en la generación de RDA desde Bajo stock que truncaba la descripción de los artículos si superaba los 20 caracteres (#TT00136/25)
> - SCM - Corregido error que no actualizaba correctamente el estado de entrega de la Solicitud de Compra tras la entrega forzada de algunas filas (#TT00397/25)
> - Lanzamiento impresión Certificaciones Únicas 2025

### Patch 545.1-0111- 18/12/2024
> - SH - Error al abrir "Régimen Fiscal" (#TT05028/24)
> - SCM - Error en la nota de entrega de la compra durante la carga y el rollback #TT05306/24
> - SCS - Si la Compañía prevé la Gestión Controlling (con el flag homónimo en la tabla Compañía), el despacho de un DDT o de una devolución dentro de una factura toma para fechas de competencia las fechas de la descarga del documento, si no están presentes las fechas del documento (#TT05126/24)
> - FI - problemas al anular la impresión definitiva de la liquidación (#TT04859/24)
> - FI - la impresión definitiva de la liquidación de IVA periódica ahora almacena el saldo a crédito en el campo de crédito anterior del formulario de Declaración de IVA periódica, ya no en el de Variaciones de IVA del periodo anterior (#TT03694/24)

### Patch 545.1-0110- 28/10/2024
> - MES - Corregido bug en las órdenes de producción con respecto al botón de finalización de datos de pedido. El problema se producía en caso de que en la lista de materiales<!-- distinta base --> hubiera varias líneas del mismo artículo entre los materiales de un artículo padre sin indicación de prioridad (#TT05019/24)
> - PR - en el módulo de Anticipos de Cobros, procedimiento de contabilización de cobros, gestión del parámetro de descripción del movimiento (#TT04923/24)

### Patch 545.1-0109- 21/10/2024
> - ARM - Workflow: Cambio de estado condicionado(#TT04384/24)
> - SD - Optimización de la cuadrícula 'Notas artículo-cliente' en la pestaña Varios de la ficha del cliente (#TT01967/24)
> - MPS - Corregido bug en programación general en el caso de programar un artículo con en la lista de materiales<!-- distinta base --> un material alternativo con cantidad nula (#TT04639/24)
> - En la entrega de órdenes a proveedores en notas de entrega y facturas de compra sin recálculo analítico, revisión asignación centros por prioridad almacenes<!-- magazzini --> (#TT01624/24)
> - Revisión importación excel de facturas de venta, corregir el lookup del campo ‘Cedente’
> - Bizlink - exportación Piteco - filtro para pagos contabilizados

### Patch 545.1-0108- 24/10/2024
> - SD - en la contabilización de facturas de venta, exclusión de líneas con gastos de cobro 0 (#TT01642/24)
> - SCS - Corregido error en Órdenes de Conto Lavoro<!-- Ordini di Conto lavoro --> que multiplicaba las cantidades de los materiales a emplear (#TT03904/24) 
> - SCM - Corregido error que no permitía la inserción múltiple de artículos en las Solicitudes de Oferta (#TT04334/24)
> - WM- Corregido bug en el procedimiento de cálculo de coste de artículo en caso de insertar un movimiento de almacén<!-- magazzino --> con causal considera movimientos a cero y con un costo negativo (#TT00305/24)
> - PR - corregido error en la contabilización de lista anticipos de cobros que duplicaba los valores (#TT01262/24)
> - CO - omisión de filas FA_Pagam con ambos importe y porcentaje 0 (#TT04477/24)
> - MES - Corregido bug en la descarga de declaraciones de producción referente al consumo del semielaborado producido en la fase anterior en caso de ser la primera y externa (#TT03883/24)

### Patch 545.1-0107- 26/09/2024

> - MPS - Implementada gestión de número de línea no entero en el procedimiento de Definición MPS (#TT03992/24)
> - CO - revisión cálculo mensualización de la elaboración de periodos (#TT04072/24)

### Patch 545.1-0106- 20/09/2024

> - SH - Contact-corrección carga problema colección ItemCustomer (#TT01967/24)
> - WM- Fichas de Movimientos - Añadidos parámetros AccountId, AccountCode, AccountDetailCode y AccountDescription para poder calcular las existencias iniciales por proveedor (#TT03922/24)
> - WM - Añadida la variante en el reporte ValorizatedBOM y ValorizatedItemCostBOM de la valorización de la lista de materiales<!-- distinta base -->
> - FI - gestión de los rangos de fecha de devengo desde los ajustes de cierre (#TT04008/24)
> - MS - Corregido bug en programación general que no eliminaba los pedidos planificados vinculados al cash flow (#TT03806/24)
> - MS - Corregido bug en la liberación de pedidos planificados de producción, que causaba que no se valorara correctamente el pedido de conto lavoro<!-- conto lavoro --> creado desde una fase externa si en la lista de precios no se había indicado la fase de referencia (#TT03885/24)
> - SH - Actualización chequeo estructura IBAN para el país AE (Emiratos Árabes Unidos) (#TT03985/24)
> - CO - revisión eliminación de registros de existencias en los cierres interanuales (#TT03976/24)
> - CO - Añadida columna de costo variante en el cálculo de costes. Ésta reporta los valores en la pestaña variantes de la ficha del artículo (#TT03057/24 - #TT03043/24)
> - SCS - Es posible guardar la devolución de conto lavoro<!-- rientro di conto lavoro --> sin indicar los lotes en los materiales si el flag “Lotes y números de serie obligatorios” presente en los parámetros de conto lavoro<!-- conto lavoro --> está deshabilitado.  (#TT03989/24)

### Patch 545.1-0105- 05/09/2024

> - SD - Creación facturas desde DDT -corregido error en la fase de creación de facturas desde DDT de venta (#Ticket #TT03745/24)
> - FI - Informe registro de IVA - posibilidad de usar trimestral/mensual para históricos (#TT03769/24)
> - PM- añadido ahora en el campo "fecha inicio" de los recursos asignados a las wbs de proyecto (#TT03545/24)
> - WM - Corregido error en la Impresión Valorización Ensambles que no calculaba correctamente los costos en caso de componentes con cantidad diferente de uno (#TT02175/24)
> - FI - corregido error en la fase de inserción de activo fijo componente incremental de activo fijo parcialmente amortizado con iva parcialmente no deducible (#TT01937/23)

### Patch 545.1-0104- 08/08/2024

> - WM - Corregido el bug que no verificaba correctamente el saldo negativo cuando el artículo se encontraba dentro de un registro de salida en contrapartida (#TT01417/24)
> - MPS - Corregido bug en la Liberación de Órdenes de Conto Lavoro<!-- Ordini di Conto lavoro --> que solo reportaba el precio del artículo, pero no la Lista de Precios (#TT02812/24)
> - revisión memorización crédito año anterior de impresión definitiva de liquidación IVA periódica de enero (#TT02348/24)
> - SD - En el procedimiento de Creación desde DDT, se ha insertado un nuevo control que impide la creación de una autofactura desde DDT (#TT02889/24)
> -  SCS - Corregido error en las Devoluciones<!-- Rientri --> de Conto Lavoro<!-- Conto lavoro --> que no permitía la modificación del Tipo facturado compras en las líneas de artículo (#TT03212/24)
> - SD - Corregido error que no permitía la entrega forzada de una Orden de Cliente cuando estaba vinculada a una Orden Planificada de Producción que contenía Datos Extra<!-- Extra Data --> (#TT03267/24)
> - MPS - Corregido bug en Capacidad de centros de trabajo que consideraba la capacidad en un centro de trabajo interno dada por una orden planificada de conto lavoro<!-- conto lavoro -->; ahora, si la orden planificada de conto lavoro<!-- conto lavoro --> tiene una fase interna (porque a veces se produce internamente y a veces externamente) esto ya no compromete ese centro de trabajo (#TT03406/24)
> - MPS - Corregido bug en programación general que generaba órdenes planificadas con cantidades incorrectas (#TT03354/24 - #TT03204/24)
> - SCS - Resuelto bug que permitía la modificación de la Cantidad de Artículo en una Orden de conto lavoro<!-- conto lavoro --> ya entregada en DDT (#TT02529/24)

### Patch 545.1-0103- 27/06/2024

> - SD - Corrección del error que requería un descuento escalonado al insertar la Máscara en un nuevo Redondeo (#TT00756/24)
> - SD - en la impresión del balance de facturación, revisión de la gestión de signos en el subinforme de totales por facturación de ventas (#TT02720/24)
> - WM - Corregido bug en la exportación excel de los datos presentes en el reporte Implosión de componentes que no reportaba el valor en la columna cantidad (#TT02753/24)
> - FI - Corregido bug en el formulario de lanzamiento de impresión Enasarco que no gestionaba correctamente el filtro por rango de fechas (#TT00824/24)
> - QY - Acciones correctivas - Revisión de lógicas de habilitación de información presente en la pestaña Verificaciones próxima auditoría (#TT02916/24)
> - SCM - Si el flag Precio Unidad de Medida Alternativa está activo en la Solicitud de Oferta, al crear la Orden de proveedor desde la Oferta de proveedor el flag también se traslada a la orden creada (#TT02804/24)
> - SCM - Corregido bug que no mostraba Código/Descripción del Artículo proveedor en el formulario Detalle de líneas de Pedidos cuando el pedido no estaba entregado (#TT02344/24)

### Patch 545.1-0102- 03/06/2024

> - SD - En DDT y Facturas añadido control preliminar al descargar el lote, en caso de lotes en negativo (#TT02237/24)
> - WM - Corregido bug en la visualización de los errores del procedimiento de valoración de almacén<!-- magazzino --> en caso de que fueran más de 100.000 (#TT02320/24)
> - SD - Corregido problema en los documentos de venta que no gestionaba adecuadamente la comisión en presencia simultánea de agentes vinculados a un destinatario/destino del cliente y NO vinculados a ningún destinatario/destino sino simplemente al cliente (#TT00273/24)
> - FI - intrastat mensual ventas solo a efectos fiscales (#TT01966/24)
> - MPS - Corregido un problema técnico relacionado con las personalizaciones relativas a la programación (#TT02304/24)
> - MPS - Corregido bug en el cálculo de la fecha de inicio de los pedidos planificados de compra (#TT03587/23)
> - SCM, SCS - Cuando se modifica el flag Precio Unidad de Medida Alternativa dentro de una Factura de compra que valora una devolución de conto lavoro<!-- rientro di conto lavoro -->, también se modifica en la devolución y en el registro relacionado, si existe. Cuando el flag se modifica desde dentro de la devolución de conto lavoro<!-- rientro di conto lavoro --> los importes también se recalculan en el registro de almacén<!-- registrazione di magazzino --> (#TT00698/24)
> - SCM, SCS - Cuando se modifica el flag Precio Unidad de Medida Alternativa dentro de una Factura de compra que valora una devolución de conto lavoro<!-- rientro di conto lavoro -->, también se modifica en la devolución y en el registro relacionado, si existe. Cuando el flag se modifica desde dentro de la devolución de conto lavoro<!-- rientro di conto lavoro --> los importes también se recalculan en el registro de almacén<!-- registrazione di magazzino --> (#TT00698/24)
> - SD - Cuando en los parámetros del área Ventas está activo el flag ‘Bloquear inserción de documento en fechas festivas por calendario de fábrica’ el control de fecha festiva se realiza primero en el Calendario de Fábrica, luego en el Calendario de capacidades productivas (#TT02396/24)
> - SCS - Redondeo por Cdc en orden de compra, DDT de compra, Factura de compra (#TT02500/24)
> - SCM - La solicitud de compra debe considerarse realizada si se ejecutan todas las líneas, excepto las líneas de nota (#TT02389/24)
> - FI - Restablecimiento de la funcionalidad de ajuste de pagos parciales desde la cuadrícula de pagos (#TT02559/24)

### Patch 545.1-0101- 16/05/2024

> - SH - El procedimiento de Duplicar artículo también reporta las Notas de los Proveedores preferentes (#TT01580/24)
> -  SCM - Corregido error que proponía la misma 'Descripción de artículo de proveedor' en el procedimiento de 'Despacho de órdenes', para todos los proveedores preferentes del artículo (#TT01501/24)
> - FI - en el registro contable, bloqueada la posibilidad de modificar líneas de pago derivadas de pagos a perceptores, se debe hacer rollback y modificar el importe de pago en el procedimiento de contabilización (#TT00909/24)
> - MES - En las Declaraciones de Producción se ha añadido el detalle de la Ubicación en el mensaje de error por existencia insuficiente (#TT02064/24)
> - SCM - Solucionado bug que no guardaba correctamente un perfil en las Solicitudes de Compra con filtro No entregadas (#TT02123/24)
> - WM - Corregido bug en la formulación del progresivo del código de lote (#TT02142/24)
> - FI - Intrastat 2, fluentis545 - Error en recuperación de datos desde registros CustomPosting (#TT02243/24)

### Patch 545.1-0100- 03/05/2024

> - FI, PR - revisión de contabilización de efectos para partidas creadas en divisiones diferentes a la activa (#TT01401/24)
> - FI - en caso de gestión del controlling, los registros de ajuste ya no prevén la asignación de una fecha de competencia económica a las líneas contables/cdc/cdp, mientras que las integraciones prevén la fecha inicial igual a la fecha de competencia económica de la línea original (y fecha final fin de mes) (#TT01061/24)
> - SCM - Corregido error en la actualización de importes en los movimientos de almacén<!-- movimenti di magazzino --> en presencia de un gasto distribuido en el DDT o en la Factura de Compra (#TT00794/24)
> - SD - Corregido error que modificaba el estado de entrega de la orden de trabajo<!-- commessa --> después de una actualización de la Fecha de entrega en el Pedido de cliente (#TT01699/24)
> - FI - revisión impresión definitiva liquidación IVA periódica enero para guardar crédito del año anterior/crédito del periodo anterior (#TT01160/24)
> - CRM - El remitente reportado en los Boletines se toma del campo 'De', presente en la cabecera de los Boletines (#TT01770/24)
> - FI - comunicación trimestral del IVA, alineación 2024 (#TT01141/24)
> - SD - Búsqueda de Comisiones por destino - corregida la búsqueda del % de comisión por cliente y destino de mercancía (#TT00273/24)
> - MES - Resuelto bug en el recalculo de la fecha hora inicio y fin de las fases de la orden de producción (#TT03584/23)
> - MPS - Resuelto bug en la creación de pedidos planificados en caso de materiales con nivel ficticio (#TT00562/24)
> - MPS - Corregido bug en programación general en caso de que se programaran muchas líneas simultáneamente (#TT01451/24)
> - MPS - Corregido bug en programación general para órdenes de trabajo<!-- commesse --> no examinadas (#TT02897/23)

### Patch 545.1-0099- 28/03/2024
 
> - SD - cambios para eFattura versión rumana  
> - FI - bloqueo del recálculo FSPostingPaymentSet cuando se entra en modificación de un registro y no se recalculan las partidas (#TT00362/24)  
> - SCM - Corrección del error que impedía la Valoración DDT en caso de Número de documento de hasta 20 dígitos (#TT00849/24)  
> - SD - Gestión de excepciones de facturas electrónicas peppol (#TT01258/21)  
> - SD - Implementado y mejorado el funcionamiento del flag “Entregado forzado” presente en las líneas de los pedidos de ventas y también del campo estado de entrega presente en la cabecera (cuando se selecciona-“Entregado forzadamente”); ahora, al activarse, se muestra un mensaje que indica que- “La entrega forzada de la línea implica la eliminación automática de eventuales pedidos planificados vinculados a órdenes de trabajo<!-- commesse --> en estado programado y la entrega de las órdenes de trabajo<!-- commesse --> en estado programado y no examinados. En cuanto a los documentos generados a partir de órdenes de trabajo<!-- commesse --> en estado lanzado o ejecutado, las órdenes de trabajo y documentos no serán modificados.” (#TT00219/24)  
> - FI - Impresión pantalla liquidación IVA (#TT01127/24)  
> - SD - Los gastos varios presentes en los Pedidos se trasladan todos al documento de resumen que despacha los Pedidos (#TT01102/24)  
> - MPS - Corregido error que no permitía la eliminación de una Orden de Trabajo de Producción (#TT01011/24)  
> - FI - IVA a CREDITO en el archivo para la LIPE tiene en cuenta también el IVA no deducible por prorrata (#TT01596/23)  
> - CO -  en la impresión del consolidado de Proyecto, revisión filtro por tipo de proyecto (#TT01172/24)  
> - WM - Mejorada la visualización en análisis de disponibilidad de los picking creados mediante lista de recogida de materiales (#TT01205/24)  
> - SD - Solucionado incorrecto despliegue en la impresión de comisiones devengadas en algunos casos ya asociados a liquidaciones de agentes (#TT01208/24)  

---

*La traducción incluye comentarios de ERP y términos clave según las reglas, manteniendo la estructura original Markdown.*