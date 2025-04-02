---
title: Notas de la versión 706 (Patch notes Versione 706)
sidebar_position: 1
---

### Patch 706.1-0018 - 31/10/2024
> - QY - Controles de artículo - Importar artículos a verificar desde Declaración de producción - Se corrigió un error que mostraba también los lotes de consumo del semielaborado (fase). (#TT04382/24)  
> - CO - agregar moneda en clave única de CO_ConsolidationListCostCenters y CO_InternalClosureModelListCostCenters ( TT04649/24)  

### Patch 706.1-0017 - 24/10/2024
> - MES - Registro de declaración: corrige un bug en la verificación del saldo de material por ubicación (#TT04372/24)  
> - FI/PR - Resuelve un problema de bloqueo en los paneles de configuraciones personalizadas (#TT04373/24)  
> - SH - Registro de Agente: corrige la copia de comisiones de un agente, ahora se copian todos los tipos de comisión que aún no han sido ingresados en el agente de destino (#TT04450/24)  

### Patch 706.1-0016 - 17/10/2024
> - Se resolvió el problema con los íconos de los botones en el editor de scripts.  
> - SCS - En los DDT de Conto lavoro para los artículos ingresados manualmente se consideran el Almacén y la Causa codificados en el Tipo DDT (#TT04284/24)  
> - WM - Se corrigió un bug en el mapa de ubicaciones de artículo (#TT04365/24)  
> - MES - Se optimizó y mejoró la webapi de importación de los informes de producción, en particular sobre los datos de la pestaña equipo (#TT03034/24)  
> - Alineamientos técnicos Supervisor Service  
> - Alineamientos técnicos BizLink Service  
> - WM - Se resolvió el problema de importación del prototipo de artículo utilizando un esquema BizLink personalizado.  
> - MS - Corrección de bug en el procedimiento de programación general relacionados con el agrupamiento (#TT04026/24)  
> - FI - revisión contabilización de facturas de venta en el automatismo de cierre de vencimiento para pago directo (#TT03474/24)  
> - MS - Se corrigieron bugs en la planificación general (#TT03785/24 - #TT04245/24)  
> - MS - Se optimizó y mejoró el procedimiento de planificación general y se corrigió un bug en la función "Controlar documentos retrasados con ATP" (#TT03837/24)  
> - WM - En análisis de disponibilidad, ahora el indicador "Solo negativos" presente en el panel "Ver filas sin disponibilidad" filtra correctamente solo las filas con disponibilidad negativa (#TT04356/24)  
> - PR - corrección de importación de archivo de movimientos bancarios donde las fechas de registro y moneda del banco estaban invertidas (#TT04435/24)  

### Patch 706.1-0015 - 10/10/2024
> - SCS - Impresiones Múltiples - Se agregó informe de impresiones múltiples para los documentos de conto lavoro (#TT04144/24)  
> - PR - revisión del archivo sepa versión pain 001.001.03 para localización SI (#TT04313/24)  
> - SD - Impresión de calendario de pedidos - Modificación del informe de calendario para poder gestionar la ordenación por fecha de entrega y por cliente (#TT04277/24)  
> - MS - Se corrigió un bug en el procedimiento MRP (#TT04322/24)  
> - SD - Cuando se realiza la conversión de una Oferta a pedido, si el tipo de pedido tiene el indicador de Creación de Proyecto Automático activo, el número y tipo de proyecto se proponen automáticamente al momento de guardar el pedido (#TT04336/24)  
> - SH - Tipo de archivo - Se agregó tipo de archivo .msg (#TT04182/24)  
> - SCM - Se corrigió un error que no permitía la inserción múltiple de artículos en las Solicitudes de Oferta (#TT04334/24)  
> - SD - Se resolvió una excepción que impedía la modificación del precio de lista desde el registro del artículo (#TT04237/24)  
> - ARM - Se corrigió la excepción durante la eliminación de una fila referenciada en la cuadrícula de resultados del filtro.  
> - En el cambio de estados de las facturas de venta Sdi, revisión del paso de firma en archivos importados a través de WebApi (#TT04229/24)  
> - SCS - Se corrigió un error en los Pedidos de Conto trabajo que a veces no cargaba los materiales para la primera fila de artículo ingresada (#TT04112/24)  

### Patch 706.1-0014 - 07/10/2024
> - FI - Comunicación de liquidación periódica de IVA - revisión de la impresión para la indicación de la deuda del periodo anterior no superior a 100 € (campo VP7)  
> - ARM - Es posible ocultar las baldosas desde los formularios de búsqueda de documentos de la siguiente manera: acceder al Navegador de objetos, abrir la carpeta Información del objeto, entrar en Modificar y quitar el indicador Predeterminado de la Visualización del documento (#TT04227/24)  

### Patch 706.1-0013 - 03/10/2024
> - CO - revisión del cálculo de mensualización de la elaboración de periodos (#TT04072/24)  
> - MES - Se corrigió un bug en el control del saldo de materiales de los informes de producción (#TT04123/24)  
> - SD - Impresión Bilancino de facturación - Se corrigieron bugs en subinforme de recálculo de IVA y gastos (#TT03249/24)  
> - SD - Se corrigió un error que hacía que se produjera un bucle con el mensaje "IVA/Precio obligatorio" cuando se intentaba guardar el documento sin haber ingresado los datos obligatorios (#TT02165/24)  
> - SD, SCS - Cuando el indicador Lotes y SN obligatorios no está activo y el Tipo de extracción del lote es F.I.F.O. o Fecha de vencimiento, el código de lote se propone automáticamente cuando se lleva a cabo la descarga del documento, si no ha sido ingresado manualmente (#TT03979/24)  
> - FI - SafT - cambios para GeneralLedgerEntries Julio 2024 (#TT03838/24)  
> - MES - Se optimizó el procedimiento de registro de informes (#TT04017/24)  
> - Se resolvió un bug en la detección de propiedades para la interfaz base del objeto en Blocky.  
> - SCM - Se corrigió un bug en el procedimiento de Creación automatizada de pedidos que devolvía un error al elegir insertar los artículos dentro de un pedido existente (#TT04134/24)  
> - PM - se gestionó la superposición o doble confirmación de solicitudes de vacaciones (#TT02125/24)  
> - ARM - Corrección del mapeo de propiedades de extensión cuando el objeto de extensión tiene múltiples propiedades con el tipo del objeto padre.  
> - SH - Corrección del filtro de datos adicionales: las columnas se cargan desde el perfil. Se omite la columna si no es válida (#TT01838/24)  
> - MS - Se corrigió un bug en la aplicación del lote económico mínimo de compra en caso de una planificación general con agrupamiento (#TT04026/24)  
> - WM - Permitir la recogida de la descarga cuando es creada por la producción (#TT04235/24)  

### Patch 706.1-0012 - 26/09/2024
> - WM - En el registro de lotes y trazabilidad, en el filtro se han añadido los indicadores: Todos, Ninguno y Positivo, que permiten filtrar por las cantidades: en existencias, comprometidas y disponibles (#TT03510/24)  
> - SD - En el procedimiento de Creación de Listas Avanzadas pueden ser considerados también los descuentos ingresados en la Definición de políticas de descuentos: es necesario activar el indicador “Recuperar descuento” en la Fórmula de actualización de políticas de precios/descuentos y el indicador “Gestión de precios” en el registro de contacto, pestaña listas (#TT02411/24)  
> - Método de algoritmo estándar personalizado no visible en el navegador de objetos (#TT04032/24)  
> - SD - Habilitado el campo Estado en el resumen de fila de los Pedidos, cuyos valores pueden ser: Ingresado, Confirmado, En producción, Producido, Anulado (#TT04066/24)  
> - Se resolvió el problema de la conexión faltante con MasterDocumentId (#TT04027/24)  
> - SH - Documental - Se corrigió un bug en la carga de múltiples documentos en modo carpeta, ya que desconectaba el programa (#TT03705/24 - #TT02202/24 )  
> - CO - revisión del cálculo de mensualización de la elaboración de periodos (#TT04072/24)  
> - En el cálculo de los totales de facturas de compra, gestión de las tasas de IVA con el indicador 'Reverse charge' para la gestión de facturas mixtas (#TT03198)  
> - SD - Implementada la gestión de ‘Gastos/Descuentos aumentos finales’ en la importación WEB API de los pedidos de clientes (#TT04102/24)  
> - SCM - Se corrigió un error en la Creación automatizada de pedidos que a veces proponía cantidades confirmadas incorrectas (#TT03956/24)  
> - WM - Listas de Materiales - Se resolvió la visualización de la cuadrícula de la pestaña Ciclo creando un perfil predeterminado (#TT03907/24)  
> - ARM - Permitir la personalización de objetos sin mapeo; corrección de la propiedad padre del objeto de extensión.  

### Patch 706.1-0011 - 20/09/2024
> - WM - Se agregó la variante en el informe ValorizatedBOM y ValorizatedItemCostBOM de la valoración de la lista de materiales.  
> - QY - Acciones correctivas - Se habilitó la gestión multicolumna de las columnas "Acción propuesta" y "Elementos a evaluar" presentes en los Programas de acción (#TT03938/24)  
> - ARM - Alinear el objeto desde la tabla - garantizar que la propiedad comience con una letra mayúscula; corregir el objeto padre.  
> - FI - Pagos de retenciones - se corrigió el no actualizado de la fecha de pago de la retención depositada (#Ticket#TT02897/24)  
> - QY - Control de artículos - Importar artículos a verificar - Se resolvió la anomalia de la búsqueda utilizando los filtros sobre Lotes y Números de serie (#TT03789/24)  
> - QY - Control de artículos - Importar artículos a verificar - Se resolvió anomalia en la búsqueda de un artículo, gestionado a lotes, ya previamente importado (#TT03709/24)  
> - ARM.SCR_ScriptCategories - Fix sql script that add new categories for CPQ script area  
> - SCM, SCS - Se corrigió un error en la distribución de los gastos con el indicador Distribuido ingresados en los resúmenes de los documentos (#TT02336/24)  
> - SH - Actualizar el control de la estructura IBAN para el país AE (Emiratos Árabes Unidos) (#TT03985/24)  
> - SH - Se resolvió el caso en la inserción de cuentas en el plan de cuentas (#TT04007/24)  
> - CO - revisión de borrado de registros de existencias en los cierres interanuales (#TT03976/24)  
> - PM- WEB se resolvió la visualización del planificador con agrupamiento por proyecto (#TT03950/24)  
> - PR - Contabilización de listado de transferencias (#TT02623/24)  
> - CO - Se agregó la Columna costo variante en el cálculo de costos. Esta refleja los valores en la pestaña de variantes del registro de artículo (#TT03057/24 - #TT03043/24)  
> - SD - Se corrigió un error en la impresión de Facturación, que en caso de 'Modo de ordenamiento' por Código no imprimía el Código de artículo (#TT04003/24)  
> - SD - Se corrigió un error en el guardado de los perfiles en el formulario de Ofertas de Venta (#TT03907/24)  
> - SD - Se corrigió un error en el filtro de Búsqueda de Pedidos de Clientes que a veces mostraba artículos duplicados en la ventana de detalle del pedido (#TT03982/24)  
> - FI - Impresión del Libro de Activos fijos con ejercicio no solar (#TT03716/24)  

### Patch 706.1-0010 - 12/09/2024
> - QY - Herramientas de medición - Se implementó la propagación de los Extradata entre la Categoría del Instrumento de medida y el Instrumento de medida (#TT03855/24)  
> - QY - Reclamaciones - Se resolvió la anomalia al aplicar el filtro Artículo en la Búsqueda de Reclamaciones (#TT03654/24)  
> - SD - Se corrigió un error en la Evasión DDT desde el filtro de búsqueda de Pedidos de Clientes (#TT03910/24)  
> - FI - se resolvió un caso específico de error en la descarga e impresión de factura electrónica de compra (#TT03513/24)  
> - CO - revisión de comparación de reclasificaciones para visualización de índices de costo en detalle mensualizado (#TT02853/24)  
> - FI - En los registros contables, revisión de la inserción de una nueva fila IVA (#TT03900/24)  
> - En la valoración DDT de compra, revisión de la gestión de fechas de competencia de centros de costo (#TT03699/24)  
> - CRM - se resolvió un caso en el que en las campañas el flujo de trabajo de los contactos avanzaba de estado sin hacer clic directamente, solo abriendo el panel (#TT03807/24)  
> - MES - Se corrigió un bug en las declaraciones de producción en la fase de registro de los movimientos (#TT03901/24)  
> - WEBAPI - Import Sales Order - si el tipo de Pedido prevé la creación del proyecto, la webapi crea el proyecto al momento de importar el pedido de venta (#TT03481/24)  
> - Se resolvió el problema con el código del script que utilizaba palabras reservadas.  
> - WM - Hojas de Movimiento - Se añadieron los parámetros AccountId, AccountCode, AccountDetailCode y AccountDescription para poder calcular la existencia inicial por proveedor (#TT03922/24)  
> - SH - fix dashboard saves from Dashboard designer (#TT03725/24)  
> - SD - Corrección del problema de ejecución desde SalesOrder/SalesDeliveryNote personalizado (#TT03731/24)  
> - PM - planner, se resolvió un caso en la web que solo cargaba el mes real seleccionado y no los datos del mes anterior, aunque a la vista se mostraban unos días del mes anterior (#TT03782/24)  
> - MS - Se corrigió un bug en la apertura del formulario de Cargas de centros de trabajo (#TT03943/24)  
> - Se añadió integración entre BizLink y la WebApi de importación y exportación de documentos.  
> - CRM - se introdujo la funcionalidad para que el registro del cliente actualice el registro CRM si está conectado; en caso de eliminación del registro del cliente, se elimina la referencia del registro CRM; se añadió opción en parámetros CRM para que al ingresar un nuevo cuenta contable, se cree un registro CRM si no está presente (#TT03874/24)  

### Patch 706.1-0009 - 10/09/2024
> - ARM - migración - alinear objetos personalizados  
> - FI - Impuesto ambiental para RO - facturas con IVA - el impuesto debe aplicarse al monto base (#TT03877/24)  
> - CRM - agregar nuevos filtros para CrmContact (#TT03665/24)  
> - CRM - agregar nuevo Parámetro CRM 'Al buscar un contacto de crm, buscar también como contacto padre' (#TT03671/24)  
> - SCM - Se corrigió un error en el procedimiento de Evasión de Pedido en DDT de Compra que no reportaba siempre las cantidades correctas en el DDT (#TT03750/24)  
> - BI - Tableros de cuadrícula dinámica - fix loading profiles in ribbon  
> - SCM - La importación Web API estándar de DDT de compra incluye las filas de tipo nota (#TT03884/24)  
> - PM - se corrigió un caso en el que al habilitar el indicador "Excluir cálculo fuera de horario" no se calculaba el plan de facturación en las intervenciones (#TT03780/24)  
> - PM - Generar actividades a partir de horas de viaje ingresadas en intervenciones, incluso en fecha de gasto diferente al servicio (#TT03590/24)  
> - PM - se corrigió la fecha de gastos ingresada automáticamente en la declaración de actividades generada por el cambio de estado aprobado de la intervención (#TT03640/24)  
> - MS - Implementado el indicador de Generación de órdenes de producción en los Parámetros MRP del artículo: si está activo, indica que las líneas de pedido cliente que presentan este artículo deben ser visualizadas en el filtro de la pestaña Pedidos Clientes de la Generación de órdenes de producción; además, también se considerará en caso de que estuviera activa la Generación automática de flujo de producción presente en los Parámetros MS. En caso de que el indicador estuviera desactivado, el artículo no se considerará en ninguno de los dos procedimientos (#TT03242/24)  
> - WM - es posible consultar la existencia por fila de proyectos en la Visualización de existencia (#Ticket 03719/24)  
> - MS - En la generación de órdenes es posible crear prototipos de órdenes con muchas más filas simultáneamente (#TT03636/24)  
> - WMS - Se corrigió un bug en el formulario de carga y descarga UDC (#TT03875/24)  
> - MS - Se corrigió un bug en la Planificación general; ahora la programación con el indicador “Considera también las alternativas de los materiales” funciona correctamente (#TT00306/24)  
> - Revisión de la gestión del paso 'firma' para los archivos Sdi importados a través de webapi (#TT03741/24)  

### Patch 706.1-0008 - 05/09/2024
> - MS - En la generación de órdenes, es posible crear prototipos de órdenes con muchas más filas simultáneamente (#TT03636/24)  
> - WMS - Ahora en gestión de verificación y confirmación de selección, el enfoque regresa al campo de código de barras después de cada lectura (#TT03704/24)  
> - FI - dentro de los registros contables, revisión del botón de recálculo de impuestos (#TT02926/24)  
> - ARM - Corrección de congelación de la página de proyectos.  
> - SD - Si en los documentos de venta se cambia el Cliente, también el widget Descuentos de artículo en la pestaña Artículos se actualiza (#TT03735/24)  
> - FI - informe del registro de IVA - cambio para tener la posibilidad de usar trimestralmente/mensualmente para la historia (#TT03769/24)  
> - SH - Se habilitó la columna Valor del Parámetro general 'Estilo de Cuenta Libros Predeterminado': en la columna Valor se puede ingresar 1 o 3 para configurar el widget de los registros contables en uno o tres campos (cuenta, subcuenta, descripción) (#TT03604/24)  
> - WM - En la modificación masiva de artículos, se agregó la posibilidad de cambiar el indicador de WMS Predeterminado en la pestaña de alternativas de UM (#TT03683/24)  
> - MES - En las declaraciones de producción, cuando se registra un avance, en el movimiento de almacén ya se calcula el costo del artículo producido, sin esperar a la declaración de cierre (#TT03071/24)  
> - WM - Se corrigió un bug en la función de retroceso de transferencia de las listas de transferencia UDC (#TT03710/24)  
> - SCM - En el procedimiento de Evasión de pedidos, la Cantidad a evadir permite la inserción de los mismos decimales de la Cantidad residual (#TT03700/24)  
> - WMS - Se corrigió un bug en la recepción de mercancías que no creaba correctamente los movimientos de las UDC creadas (#TT03677/24)  
> - FI/SCM/WM - Estandarización HR - flujo de contabilidad de compras (#TT03450/24)  
> - FI/SCM/SD - Casos no funcionales para FA_RO_ContabFattura - en el algoritmo (#TT03737/24)  
> - WM - Se mejoró y optimizó el procedimiento de importación de selección a través de Webapi (#TT03723/24)  
> - FI - SafT - cambios para GeneralLedgerEntries Julio 2024 (#TT03838/24)  
> - SH - Plan de Cuentas de inicio rápido sin caracteres acentuados (#TT03740/24)  
> - WM - En el formulario de búsqueda del registro de artículo, ahora los campos Cliente y Proveedor preferente filtran datos respetivamente por cliente y proveedor (#TT03698/24)  
> - SCM - Se creó la impresión de Etiquetas de Pedidos de Proveedores que genera etiquetas físicas para la identificación y gestión de los artículos que forman parte de un pedido.  
> - WM - En la gestión de verificación y confirmación de selección de WMS, ahora los artículos en la pestaña de artículos también están ordenados por el número de la fila de selección (#TT03847/24)  
> - PM - gastos a facturar propuestos en las intervenciones, se restauró el filtro por tipo de intervención en la fase de propuesta (#TT03653/24)  
> - SD - En las impresiones estándar 'Factura de venta' y 'Factura acompañante' se imprimirán, solo para las facturas EXTRA UE, las Nomenclaturas de los Artículos bajo el código de artículo; además, en la columna de la descripción del artículo se incluirá un resumen con el Resumen de importes por nomenclatura (#TT02102/24)  
> - ARM - migración personalización proyectos/objetos fix  
> - PM - se resolvió un bloqueo en la modificación de cantidad, precio, unidad de medida tras haber ingresado un artículo codificado en un proyecto (#Ticket 03696/24)  
> - PM - WEB calendarios y asignación de recursos wbs, en caso de múltiples recursos se corrigió el desplazamiento/alineamiento de etiquetas utilizando la barra de desplazamiento (#TT03405/24)  
> - PM - WEB recibos de nómina, se añadieron totales parciales en el resumen para cada tipo de gasto (#TT03186/24)  
> - PM - planner y wbs asignación de recursos, se desbloqueó la posibilidad de asignar citas a los recursos también en días no previstos por su calendario laboral (#TT03451/24)  
> - PM - wbs asignación de recursos se añadieron campos de inicio y fin de pausa en la fase de creación de una nueva cita (#TT03452/24)  

### Patch 706.1-0007 - 08/08/2024
> - SD - En los DDT y en las Facturas de Venta ahora es posible realizar el abono de las filas de artículo de tipo 2, 3, 4 y 5 (#TT02375/24)  
> - MS - Si en la generación de órdenes de producción se genera una orden con tipo de orden “Multiprodotto” y agrupamiento “Ninguno”, esta se crea con tantas filas como hay filas en los pedidos de clientes para ese artículo; entonces sin agruparlas en una única fila (#TT03615/24)  
> - WM - Ahora en el detalle del análisis de disponibilidad las filas de pedidos de producción valoran los campos "Pedido cliente vinculado" y "Cantidad de pedido cliente vinculado” si están vinculados a un pedido cliente (#TT03549/24)  
> - MS - Se corrigió un bug en el procedimiento MRP para artículos de producción con lista de materiales no autorizada (#TT03543/24)  
> - WM - Se corrigió un bug en la ayuda de lotes que no visualizaba correctamente el valor de la disponibilidad en la cuadrícula superior en caso de estar filtrado por ubicación (#TT03600/24)  
> - SCM - En el formulario ‘Sdi- Cierre de documentos’, que se puede abrir desde el encabezado de las Facturas de compra, se han añadido en la primera cuadrícula las columnas Número de documento y Fecha de documento (#TT03049/22)  
> - SD - Eliminación del redondeo en el cálculo del descuento por el porcentaje del descuento (#TT03609/24)  
> - SH - Se habilitaron los decimales en las columnas Pregunta y Oferta para los Pedidos planificados, en el Análisis de disponibilidad (#TT03201/24)  
> - FI - la contabilización de cánones de leasing ahora utiliza el costo de los intereses en el subtipo específico configurado (#TT03582/24)  
> - FI/PR - revisión de visualización de filtros de búsqueda para partidas pagaderas/no pagaderas, las no pagaderas se excluyen por defecto en los formularios de compensaciones, en los registros, en la adquisición de efectos de partidas, en el módulo de pagos a proveedores (#TT03641/24)  
> - QY - No conformidad - Se corrigió una anomalia en la propagación de los Extra data desde el Tipo de no conformidad a la No conformidad (#TT03586/24)  
> - SD - En el formulario ‘Detalle de filas de Pedidos de clientes’ se habilitó el filtro en cuadrícula para las columnas ‘Tipo de documento de evasión’ y ‘Número de documento de evasión’; después de ingresar el filtro es necesario hacer clic en Buscar para visualizar los resultados (#TT03655/24)  
> - FI/PM - en el formulario de gestión de los recibos de horas de empleados, el filtro de actividad ahora se establece en el recurso/empleado y ya no en el usuario conectado (#TT03607/24)  
> - PR - gestión del archivo SEPA para Eslovenia (versión pain 001.001.03) (#TT03504/24)  
> - FI - revisión del reinicio de la amortización de activos fijos de los cierres interanuales, cálculo también en presencia en contabilidad de amortizaciones ya ingresadas para el año de cierre (#TT03042/24)  
> - WMS - Corfema picking y Gestión de verificación. Implementada la posibilidad de sobreescribir la cantidad indicada en un picking (#TT03651/24)  
> - WM - Se corrigió un bug en el procedimiento de recálculo de costo en caso de que hubiera variantes presentes (#TT02015/24)  

### Patch 706.1-0006 - 01/08/2024
> - WMS - Se corrigió un bug en la visualización de las unidades de carga de la Confirmación de extracción UDC del WMS (#TT03473/24)  
> - SD - Se corrigió un bucle en la descarga automática de DDT con solo artículos nota y no codificados (ref.ticket 3557/24)  
> - MES - Se corrigió un bug en el cálculo del costo del artículo producido con los informes de producción (#TT03408/24)  
> - SD - En las Ofertas de Venta jerárquicas, cuando se inserta una fila descriptiva en la pestaña Materiales, se asocia un tipo de fila 2 (#TT03420/24)  
> - WM - Se corrigió un bug en el análisis de disponibilidad (#TT03349/24)  
> - FI - Reordenamiento de protocolos IVA - se corrigió un error en la inserción de numeración automática y en la actualización de protocolos en las descripciones (#TT03378/24)  
> - FI - se corrigió un error en la fase de lanzamiento de la contabilización del archivo de Movimientos bancarios (#TT03579/24)  
> - SH - Optimización de la inserción de Extra Data de tipo Fecha junto con Extra Data de otro tipo (#TT03055/24)  
> - SD - Se corrigió un error en la inserción de un nuevo artículo en un DDT ya descargado (#TT03177/24)  
> - FI - Durante la creación de la factura o el registro contable desde los Documentos de compra entrante, solo se proponen los contactos con una cuenta contable vinculada (#TT03352/24)  
> - PM - Se resolvió la señalización sobre el cambio de cliente en el encabezado del proyecto (#TT03565/24)  
> - PM - se resolvió el caso de asignación wbs en intervención, que en caso de coincidencia con los parámetros del proyecto, impedía la asociación (#TT03574/24)  
> - PM - Proyecto - inserción de un nuevo nivel hijo de una raíz, impedía la asociación de un artículo codificado (#TT03583/24)  
> - WM - Se corrigió un bug en el registro de artículos, que al insertar una variante también creaba la lista de materiales para esa variante. (#TT03443/24)  
> - MS - Se corrigió un bug en la Capacidad de centros de trabajo que consideraba la capacidad en un centro de trabajo interno dada por un pedido programado de conto lavoro; ahora, si el pedido programado de conto lavoro tiene una fase interna (porque a veces se produce internamente y a veces externamente) esto ya no compromete ese centro de trabajo (#TT03406/24)  
> - MES - Se corrigió un bug en el ciclo de trabajo que en caso de que se agregara una nueva fase no reportaba el proveedor preferencial ingresado en la fase estándar (#TT03551/24)  

### Patch 706.1-0005 - 18/07/2024
> - MS - Nuevas optimizaciones para el procedimiento del MRP (#TT03485/24)  
> - SCS - Se corrigió un error que al momento de duplicar un Pedido de Conto Lavoro forzosamente evadido no actualizaba el estado de evasión de los materiales a entregar del nuevo pedido (#TT03380/24)  
> - SCS - En los Pedidos de Conto lavoro se agregó un nuevo parámetro en los Datos materiales propuestos denominado “Del pedido de producción” usado para el recálculo de las cantidades de los materiales. Se establece automáticamente al crear un pedido de conto lavoro desde una fase externa de un pedido de producción, al liberar un pedido planificado de producción con fase externa y al liberar un Pedido de Conto lavoro planificado. Para la propuesta de datos de materiales en el pedido de Conto lavoro ahora es posible tener un parámetro diferente para cada línea de artículo (#TT02097/24)  
> - SCS - Se corrigió un error en el cálculo de las cantidades de los materiales en los Pedidos de Conto lavoro cuando eran propuestos desde la última entrega realizada con el mismo proveedor tercero (#TT03168/24)  
> - PM - Impresión de detalles de proyectos, se corrigió el caso de movimientos duplicados en la impresión. Se gestionó correctamente el caso de DDT con movimiento a almacén y la correspondiente factura vinculada (#TT03484/24)  
> - PM - declaración de actividades facturables - se gestionó correctamente el aviso de falta de configuración del tipo de intervención - en el tipo de actividad o en los parámetros generales del proyecto (#TT03462/24)  
> - MS - Se optimizó y aceleró el procedimiento MRP (#TT02462/24)  
> - MES - Se corrigió un bug en el cálculo de la ocupación de los centros de trabajo en caso de que se modificaran las fases del pedido de producción (#TT02662/24)  
> - SH - La fila de gasto Conai, al guardar el documento, toma el mismo IVA de la fila de artículo que la generó (#TT02599/24)  
> - FI - para empresas con controlling activo, revisión de prueba de cuadratura sobre las dimensiones (#TT03496/24)  
> - SH - Revisión de recálculo de Conai en caso de documento duplicado (#TT03508/24)  
> - MS - Mejorada y optimizada el procedimiento de costificación de pedidos (#TT00449/24)  

### Patch 706.1-0004 - 22/07/2024
> - FI - revisión del desplazamiento de la lista de registros contables (#TT03440/24)  
> - MES - Se corrigió un bug en la lista de recogida de materiales relacionado con la creación de la selección con artículos gestionados a lotes (#TT03187/24)  
> - FI - para la localización suiza, revisión de la contabilización de los redondeos sobre el total del documento gestionados con gastos finales sin IVA (#TT03335/24)  
> - FI - Se corrigió un problema que no gestionaba el banco de apoyo alternativo en la creación automática de la lista de pago a proveedores utilizando el registro del agente (#TT03274/24)  
> - Gestión del tiempo de espera de ejecución del procedimiento almacenado blockly (#TT03153/24)  
> - HR - cálculo de salarios - se introdujo un nuevo indicador en los códigos de pago "Horas extra festivas" que considera todas las actividades realizadas en los días de sábado y/o domingo, no previstas en el horario laboral del recurso (#TT02674/24)  
> - FI - en la contabilización de facturas de compra, gestión en cuadrícula IVA del campo del IVA por causas automáticas (#TT02641/24)  
> - SCM - revisión de la contabilización de centros de costo por facturas de compra, signos negativos (#TT03239)  
> - FI - Se resolvió un error de excepción en el intrastat que involucraba un caso relativo a una nota de abono ref R- TT03449/24  

### Patch 706.1-0003 - 18/07/2024
> - FI - en la contabilización de facturas de venta, alineación de la gestión de cambios para la sección de los centros de costo (#TT02172/24)  
> - SCM - contabilización de facturas de compra, asignación de división a las filas de movimiento del centro de costo para filas de gastos finales (#TT03239/24)  
> - SD - Se corrigió un error que no permitía realizar un ordenamiento por estado de evasión en la cuadrícula de los Pedidos de clientes (#TT03404/24)  
> - WM - En visualización de existencias, los decimales utilizados por la UM alternativa utilizada, son los indicados en el campo UM decimales de la UM alternativa utilizada (#TT03313/24)  

### Patch 706.1-0002 - 17/07/2024
> - MES - Se corrigió un bug en la lista de recogida de materiales que no variaba correctamente el estado de los pedidos de producción de lanzado a ejecutivo si eran procesados más de uno a la vez (#TT03383/24)  
> - MS - En el formulario de Generación de Pedidos de Producción desde Saldos, se ha agregado la columna del Saldo a la fecha actual, mientras que para los documentos sin Fecha de Entrega ahora se considera el parámetro “Si no se especifica la fecha de entrega” presente en la pestaña Parámetros del formulario (#TT02573/24)  
> - PR - para la generación de archivos Sepa, Sepa extranjero, Sepa Sdd ahora se verifican los parámetros generales "FS-PR-SEPA-PaymentRequest", "FS-PR-SEPA-ForeignPaymentRequest", "FS-PR-SEPA-SDD", para entender qué flujo BizLink llamar. Si no se establece, se utiliza el flujo predeterminado para la localización de la empresa (#TT03341/24)  

### Patch 706.1-0002 - 16/07/2024
> - SD - Revisión de prueba de control de la nación cedente/prestador en factura Sdi para autofacturas, del campo nación al campo código iso del número de IVA (#TT03368/24)  
> - WM - En la selección, se mejoró la accesibilidad al campo lote en caso de que se vuelva a abrir una selección y el usuario varíe la cantidad en el campo de cantidad de recogida. Antes era necesario cambiar de fila antes de variar el lote, mientras que ahora no es más necesario (#TT03228/24)  
> - PM - wbs asignación de recursos, se mejoró la actualización de la visualización del árbol del proyecto tras un cambio de filtros (#TT03376/24)  
> - MS - Se corrigió un bug en la liberación de órdenes programadas de compra, ahora las RDA creadas se agrupan correctamente por cliente, tipo y año (#TT03382/24)  

### Patch 706.1-0000

> - WEBAPI - se resolvió la anomalia relacionada con la configuración de la ResidualQuantity de DDT de compra y DDT de venta para filas con cantidad 1.  
> - FI - Enasarco - se corrigió un bug en el formulario de lanzamiento de impresión 'Enasarco' que no gestionaba correctamente el filtro por rango de fechas (#TT00824/24)  
> - FI - Liquidación IVA periódica de enero - impresión definitiva - el crédito del año anterior ya no se guarda en la declaración IVA periódica, también en el campo de crédito del periodo anterior.  
> - FI - Registro contable - en la pestaña 'Pagos' se bloqueó la posibilidad de modificar las filas de pago derivadas de pagos percibidos; hay que ejecutar el retroceso y modificar el monto de pago en el procedimiento de contabilización.  
> - FI - Contabilización de anticipos de cobro - se corrigió un error en el formulario 'Contabilización de anticipos de cobro' donde en el total, frente a notas de crédito, el monto correspondiente se sumaba en lugar de restarse (#TT01463/23)  
> - FI - Contabilización de facturas de compra - revisión de la gestión de 'Fecha de registro' para el abono automático de las 'Facturas a recibir'.  
> - FI - Intra2 - revisión 'Recuperación de datos de registros' para el caso del objeto FSPosting personalizado.  
> - MES - se resolvió un bug en el recálculo de la fecha hora de inicio y fin de las fases del pedido de producción (#TT03584/23)  
> - MES - Programación general - se corrigió un bug para pedidos no examinados.  
> - MES - Declaraciones de producción - se ha añadido el detalle de la ubicación en el mensaje de error debido a saldo insuficiente (#TT02064/24)  
> - MPS - se resolvió un bug en la fase de creación de pedidos programados en caso de materiales con nivel ficticio (#TT00562/24)  
> - MPS - Programación general - se corrigió un bug en caso de que se programaran muchas filas a la vez (#TT01451/24)  
> - MPS - se corrigió un bug que ocurría en caso de que se usara el agrupamiento junto con el lote económico (#TT02990/23-#TT01099/24)  
> - MPS - Programación - se corrigió el problema técnico relacionado con las personalizaciones relativas a la programación (#TT02304/24)  
> - PR - Gestión de liquidez - se ha modificado el comportamiento del formulario para alinearlo con las lógicas generales. El campo calculado 'Progresivo' solo se puede gestionar con el ordenamiento predeterminado del formulario y se oculta al cambiar el criterio de ordenamiento (#TT02060/24)  
> - QY - Acciones correctivas - revisión de las lógicas de habilitación de información presente en la pestaña 'Verificaciones próximo auditoría'.  
> - SCM - Solicitudes de compra - se resolvió la anomalia que no guardaba correctamente un perfil en las solicitudes con el filtro 'No evadidas' (#TT02123/24)  
> - SCM - Detalle de filas de pedidos - se corrigió el bug que no visualizaba 'Código/Descripción' del artículo proveedor cuando el pedido no estaba evadido (#TT02344/24)  
> - SCM - DDT de compra - si un documento de compra ya está cargado, no se puede cambiar el código de lote (#TT01712/24)  
> - SCM - Documentos de compra - se corrigió el error en la actualización de los importes en los movimientos de almacén en presencia de un gasto repartido en el DDT o en la Factura de Compra (#TT00794/24)  
> - SCM - Evasión de pedidos - se corrigió el error que proponía la misma 'Descripción artículo proveedor' en el procedimiento de 'Evasión de pedidos', para todos los proveedores preferenciales del artículo (#TT01501/24)  
> - SCM - Solicitud de oferta - si el indicador 'Precio unidad de medida alternativa' está activo en la 'Solicitud de oferta', al momento de crear el Pedido proveedor desde 'Oferta proveedor', el indicador se llevará también al pedido creado (#TT02804/24)  
> - SCS - DDT y en los Reingresos de Conto Trabajo - el lote en los materiales ahora se propone automáticamente si la tipología de extracción es FIFO o A vencimiento (#TT01140/24)  
> - SCS - Listas de terceros - se corrigió un bug en el 'Lanzamiento de órdenes de conto trabajo' que reportaba solo el precio del artículo, pero no el listado.  
> - SD - Bilancino de facturación - revisión de la gestión de signos en el subinforme de totales para facturación de ventas.  
> - SD - Documentos de venta - se corrigió la anomalia en los documentos de venta que no gestionaba adecuadamente la comisión en presencia simultánea de agentes vinculados a un destinatario/destino del cliente y NO vinculados a ningún destinatario/destino, sino simplemente al cliente (#TT00273/24)  
> - SD - Pedidos de clientes - se corrigió un error que modificaba el estado de evasión de la orden tras una actualización de la 'Fecha de entrega' en el pedido del cliente (#TT01699/24)  
> - SH - Duplicar artículos - el procedimiento también reporta las notas de los proveedores preferenciales (#TT01580/24)  
> - WM - Implosión de componentes - se corrigió un bug en la exportación a Excel de los datos presentes en el informe 'Implosión de componentes' que no reportaba el valor en la columna 'Cantidad' (#TT02753/24)  
> - WM - Valoración de almacén - se corrigió la anomalia en la visualización de los errores del procedimiento en caso de que estos fueran más de 100.000.  
> - PM - Intervenciones - al cambiar el estado de la intervención de 'Aprobado' a 'Ingresado', se eliminan todas las actividades vinculadas a la intervención, para luego regenerarlas al nuevo cambio de estado (#TT00391/24)  
> - PM - Elaboración SAL - se resolvieron casos de cálculos incorrectos para elaboraciones SAL de múltiples proyectos simultáneamente (#TT01325/24)  
> - PM - Proyectos - se formateó correctamente el campo precio en las filas de los proyectos (#TT01384/24)  
> - PM - Proyectos - las modificaciones al número wbs en la tabla del módulo de proyectos se reflejan en la pestaña 'Actividades' (#Ticket 01020/24)  
> - PM - SAL - se bloqueó la inserción manual de ambos valores debe/haber en la misma fila; se hizo modificable el campo 'Referencia'.  
> - PM - Análisis SAL - se hizo visible en el título de cada SAL también la nota (#TT01382/24)  
> - SD - Facturas de venta - al guardar una nota de crédito, todos los 'Tipos de gasto' se insertan con signo negativo, excepto los gastos 'Tasa' (#TT01289/24)  
> - SD - Facturas de venta - se permitió la modificación del rango de 'fechas de competencia económica' con archivo Sdi creado pero documento no contabilizado.  
> - SD - Facturas de venta - la inserción de un artículo dentro de una 'Factura de venta' mediante el uso de la Ayuda para artículos ahora reporta correctamente la clase (#TT01213/24)  
> - TR - Importar archivo cbi - revisión de la gestión de notas de línea en la importación de movimientos bancarios.  
> - Ofertas - Ofertas - las versiones posteriores de una Oferta heredan los 'Documentos adjuntos' (#TT01149/24)