--- 
title: Notas de la versión Versión 706
sidebar_position: 1
ai_generated: true
---

### Patch 706.1-0018 - 31/10/2024
> - QY - Controles de artículo - Importa artículos a controlar desde la Declaración de producción - Corregido un error que también mostraba los lotes de consumo del semielaborado de fase.(#TT04382/24)
> - CO - Añadida moneda en la clave única de CO_ConsolidationListCostCenters y CO_InternalClosureModelListCostCenters ( TT04649/24)

### Patch 706.1-0017 - 24/10/2024
> - MES - Registro de declaración: corregido un bug para la verificación del stock de material por ubicación<!-- giacenza materiale per ubicazione --> (#TT04372/24)
> - FI/PR - Resuelto un problema de bloqueo en los tiles para configuraciones personalizadas (#TT04373/24)
> - SH - Anagráfico Agente: corrige la copia de comisiones de un agente, ahora se copian todos los tipos de comisión que aún no están insertados en el agente de destino (#TT04450/24)

### Patch 706.1-0016 - 17/10/2024
> - Resuelto el problema con los iconos de los botones en el editor de scripts.
> - SCS - En los DDT de Conto lavoro<!-- Conto lavoro --> para los artículos insertados manualmente se consideran el almacén<!-- magazzino --> y la causal<!-- causale --> codificados en el Tipo DDT (#TT04284/24)
> - WM - Corregido bug en el mapa de ubicaciones de artículos (#TT04365/24)
> - MES - Optimizada y mejorada la webapi de importación de reportes de producción, en particular en los datos de la pestaña equipo (#TT03034/24)
> - Alineaciones técnicas Supervisor Service
> - Alineaciones técnicas BizLink Service
> - WM - Resuelto el problema de importación del prototipo de artículo utilizando un esquema BizLink personalizado.
> - MS - Corregido bug en el procedimiento de programación general relacionado con la agrupación (#TT04026/24)
> - FI - Revisión de la contabilización de facturas de venta en el automatismo de cierre de vencimiento para pagos directos (#TT03474/24)
> - MS - Corregidos bugs en planificación general (#TT03785/24 - #TT04245/24)
> - MS - Optimizado y mejorado el procedimiento de planificación general y corregido bug en la función "Controla documentos atrasados con ATP" (#TT03837/24)
> - WM - En el análisis de disponibilidad<!-- disponibilità -->, ahora el flag "Solo negativos" presente en el expander "Mostrar filas sin disponibilidad" filtra correctamente solo las filas con disponibilidad<!-- disponibilità --> negativa (#TT04356/24)
> - PR - Corregida importación de archivos de movimientos bancarios donde las fechas de registro y divisa bancaria estaban invertidas (#TT04435/24)

### Patch 706.1-0015 - 10/10/2024
> - SCS - Impresiones múltiples - Añadido reporte de impresiones múltiples para documentos de trabajo externo<!-- conto lavoro --> (#TT04144/24)
> - PR - Revisión del archivo sepa versión pain 001.001.03 para localización SI (#TT04313/24)
> - SD - Impresión calendario órdenes - Modificación del reporte de calendario para poder gestionar el orden por fecha de entrega y por cliente (#TT04277/24)
> - MS - Corregido bug en el procedimiento MRP (#TT04322/24)
> - SD - Cuando se convierte una Oferta en Orden, si el tipo de orden tiene el flag de Creación Automática de Proyecto activo, el número y tipo de proyecto se proponen automáticamente al guardar la orden (#TT04336/24)
> - SH - Tipo de archivo - Añadido tipo de archivo .msg (#TT04182/24)
> - SCM - Corregido error que no permitía la inserción múltiple de artículos en Solicitudes de Oferta (#TT04334/24)
> - SD - Resuelta excepción que impedía la modificación del precio de lista desde el anagráfico de artículo (#TT04237/24)
> - ARM - Corregida la excepción durante la eliminación de una fila referenciada desde la cuadrícula de resultados del filtro
> - En el cambio de estados de las facturas de venta Sdi, revisión del paso de firma en archivos importados vía WebApi (#TT04229/24)
> - SCS - Corregido error en Órdenes de trabajo externo<!-- Ordini di Conto lavoro --> que a veces no cargaba los materiales para la primera fila de artículo ingresada (#TT04112/24)

### Patch 706.1-0014 - 07/10/2024
> - FI - Comunicación de liquidación periódica de IVA - revisión de la impresión para la indicación de la deuda del período anterior no superior a 100 € (campo VP7)
> - ARM - Es posible ocultar los tiles en las pantallas de búsqueda de documentos de la siguiente manera: acceder al Navegador de Objetos, abrir la carpeta Informations del objeto, entrar en Edición y quitar el flag Predeterminado de la Visualización de documento (#TT04227/24)

### Patch 706.1-0013 - 03/10/2024
> - CO - Revisión del cálculo de mensualización del procesamiento de períodos (#TT04072/24)
> - MES - Corregido bug en el control de stock de materiales en las señales de producción (#TT04123/24)
> - SD - Impresión Balancete de facturación - Corregidos bugs en subreport de recálculo de iva y gastos (#TT03249/24)
> - SD - Corregido error que producía un bucle en el mensaje con “IVA/Precio obligatorio” al intentar guardar el documento sin haber ingresado los datos obligatorios (#TT02165/24)
> - SD, SCS - Cuando el flag Lotes y N/S obligatorios no está activo y el tipo de picking del lote es F.I.F.O. o Fecha vencimiento, el código de lote se propone automáticamente al descargar el documento, si no ha sido ya ingresado manualmente (#TT03979/24)
> - FI - SafT - cambios para GeneralLedgerEntries Julio 2024 (#TT03838/24)
> - MES - Optimizado el procedimiento de registro de señales (#TT04017/24)
> - Resuelto bug en la detección de propiedades para la interfaz base del objeto en Blocky.
> - SCM - Corregido bug en el procedimiento de creación automática de órdenes que devolvía error al elegir agregar los artículos dentro de una orden existente (#TT04134/24)
> - PM - gestionada superposición o doble confirmación de solicitudes de vacaciones (#TT02125/24)
> - ARM - Corrección del mapeo de las propiedades de extensión cuando el objeto de extensión tiene más propiedades con el tipo del objeto padre.
> - SH - Corrección del filtro de datos adicionales - las columnas se cargan desde el perfil. Salta la columna si no es válida (#TT01838/24)
> - MS - Corregido bug en la aplicación de lote económico mínimo de compra en caso de una planificación general con agrupamiento (#TT04026/24)
> - WM - Permitir el picking de descarga cuando es creado desde la producción (#TT04235/24)

### Patch 706.1-0012 - 26/09/2024
> - WM - En anagráfico de lotes y trazabilidad, en el filtro se agregaron los flags: Todos, Ninguno y Positiva, que permiten filtrar por cantidades: en stock, comprometidas y disponibles (#TT03510/24)
> - SD - En el procedimiento de Creación de Listas Avanzada se pueden considerar también los descuentos insertados en la Definición de políticas de descuentos; es necesario activar el flag “Recupera descuento” en la Fórmula de actualización de políticas de precios/descuentos y el flag “Gestión de precios” en el anagráfico del contacto, pestaña listas (#TT02411/24)
> - Método de algoritmo estándar personalizado no visible en el object navigator (#TT04032/24)
> - SD - Habilitado el campo Estado en el resumen de filas de los Pedidos, cuyos valores pueden ser: Insertado, Confirmado, En producción, Producido, Anulado (#TT04066/24)
> - Resuelto el problema de enlace faltante con MasterDocumentId (#TT04027/24)
> - Sh - Documental - Corregido bug en carga de varios documentos en modo carpeta que desconectaba el programa (#TT03705/24 - #TT02202/24 )
> - CO - Revisión del cálculo de mensualización del procesamiento de períodos (#TT04072/24)
> - En el cálculo de totales de facturas de compra, gestión de las tasas de IVA con flag 'Reverse charge' para gestión de facturas mixtas (#TT03198)
> - SD - Implementada la gestión de ‘Gastos/Descuentos adicionales finales’ en la importación WEB Api de pedidos de clientes (#TT04102/24)
> - SCM - Corregido error en la Creación automática de ordenes desde RDA que a veces proponía cantidades confirmadas incorrectas (#TT03956/24)
> - WM - Listas de materiales: resuelta visualización de la cuadrícula pestaña Ciclo creando un perfil predefinido (#TT03907/24)
> - ARM - Permite la personalización de objetos sin mapeo; corrección de la propiedad padre del objeto de extensión. 

### Patch 706.1-0011 - 20/09/2024
> - WM - Añadida variante en el reporte ValorizatedBOM y ValorizatedItemCostBOM de la valorización de estructura de producto
> - QY - Acciones correctivas - Se ha habilitado la gestión de varias líneas en las columnas "Acción propuesta" y "Elementos a evaluar" presentes en los Programas de acción (#TT03938/24)
> - Arm - Alinear el objeto desde la tabla - garantizar que la propiedad comience con mayúscula; corregir el objeto padre.
> - FI - Aportaciones de retención: corregida la falta de actualización de la fecha de pago de la retención pagada (#Ticket#TT02897/24)
> - QY - Control de artículos - Importar artículos a controlar - Resuelto el error en la búsqueda utilizando los filtros sobre Lotes y Números de serie (#TT03789/24)
> - QY - Control de artículos - Importar artículos a controlar - Resuelto error en la búsqueda de un artículo, gestionado por lotes, ya previamente importado (#TT03709/24)
> - Arm.SCR_ScriptCategories - Fix script SQL que añade nuevas categorías para el área de script CPQ
> - SCM, SCS - Corregido error en la repartición de gastos con flag Repartido insertados en los resúmenes de documentos (#TT02336/24)  
> - SH - Actualizar el control de la estructura IBAN para el país AE (Emiratos Árabes Unidos) (#TT03985/24)
> - SH - Resuelto caso en inserción de cuentas en el plan de cuentas<!-- piano dei conti --> (#TT04007/24)
> - CO - Revisión de la eliminación de registros de existencias en los cierres interanuales (#TT03976/24)
> - PM - WEB resuelta visualización del planificador con agrupamiento por proyecto (#TT03950/24)
> - PR - Contabilización de la lista de transferencias bancarias (#TT02623/24)
> - CO - Añadida la columna costo variante en el cálculo de costes. Esta muestra los valores presentes en la pestaña variantes del anagráfico del artículo (#TT03057/24 - #TT03043/24)
> - SD - Corregido error en la impresión de Facturación, que en caso de 'Modo de ordenación' por Código no imprimía el Código de artículo (#TT04003/24)
> - SD - Corregido error al guardar los perfiles en el formulario de Ofertas de Venta (#TT03907/24)
> - SD - Corregido error en el filtro de Búsqueda de Pedidos de Clientes que a veces mostraba artículos duplicados en la ventana de detalle del pedido (#TT03982/24)
> - FI - Impresión Libro de Activos con ejercicio no solar (#TT03716/24)

### Patch 706.1-0010 - 12/09/2024
> - QY - Instrumentos de medición - Se ha implementado la propagación de Extradata entre Categoría de Instrumento de medición e Instrumento de medición (#TT03855/24)
> - QY - Reclamaciones - Se ha resuelto el error aplicando el filtro Artículo en la Búsqueda de Reclamaciones (#TT03654/24)
> - SD - Corregido error en la Evasión DDT desde el filtro de búsqueda de Pedidos de Clientes (#TT03910/24)
> - FI- resuelto caso específico de error en descarga e impresión de factura electrónica de compra (#TT03513/24)
> - CO - revisión comparación reclasificaciones para visualización de índices de coste en el detalle mensualizado (#TT02853/24)
> - FI - En los registros contables, revisión de la inserción de nueva fila de iva (#TT03900/24)
> - En la valorización de DDT de compra, revisión de la gestión de fechas de competencia de centros de costo<!-- centri di costo --> (#TT03699/24)
> - CRM - resuelto caso en que en las campañas el workflow de los contactos avanzaba de estado sin hacer clic, solo abriendo el expander (#TT03807/24)
> - MES - Corregido bug en las declaraciones de producción en la fase de registro de los movimientos<!-- movimenti --> (#TT03901/24)
> - WEBAPI - Importación de Pedido de Venta: si el tipo de orden requiere la creación del proyecto, la webapi crea el proyecto al importar el pedido de venta (#TT03481/24)
> - Resuelto el problema con el código script que utilizaba palabras reservadas.
> - WM - Tarjetas de Movimientos - Añadidos parámetros AccountId, AccountCode, AccountDetailCode y AccountDescription para poder calcular el stock inicial por proveedor (#TT03922/24)
> - SH - corregido el guardado de dashboards desde el diseñador de Dashboard (#TT03725/24)
> - SD - Corregido problema de ejecución desde SalesOrder/SalesDeliveryNote personalizado (#TT03731/24)
> - PM- planner, resuelto caso en web por el cual cargaba solo el mes efectivo seleccionado y no los datos del mes anterior, aun cuando en pantalla se mostraban algunos días del mes anterior (#TT03782/24)
> - MS - Corregido bug en la apertura de la form de Cargas de centros de trabajo (#TT03943/24)
> - Añadida integración entre BizLink y la WebApi de importación y exportación de documentos
> - CRM - Añadida funcionalidad para que el anagráfico de cliente actualice el anagráfico crm si está vinculado; en caso de eliminación del anagráfico de cliente, el dato se elimina del anagráfico CRM; añadida opción en parámetros CRM para que al ingresar una nueva cuenta contable se cree un anagráfico CRM si no existe (#TT03874/24)

### Patch 706.1-0009 - 10/09/2024
> - ARM - migración - alinear objetos personalizados
> - FI - Impuesto ambiental para RO - facturas con IVA - el impuesto debe aplicarse a la base imponible (#TT03877/24)
> - CRM - añadir nuevos filtros para CrmContact (#TT03665/24)
> - CRM - añadir nuevo parámetro Crm 'Al buscar un contacto crm también buscar como contacto padre' (#TT03671/24)
> - SCM - Corregido error en el procedimiento de Evasión de Orden a DDT de Compra que no siempre llevaba correctamente las cantidades en el DDT (#TT03750/24)
> - BI - Dashboards de cuadrícula dinámica - corregido la carga de perfiles en la cinta
> - SCM - La importación Web Api estándar de los DDT de compra incluye las filas de tipo nota (#TT03884/24)
> - PM - corregido caso en el que al habilitar el flag "Excluir cálculo fuera de horario" no calculaba el plan de facturación en las intervenciones (#TT03780/24)
> - PM - Generar actividades desde horas de viaje ingresadas en intervenciones incluso con fecha de gasto diferente al servicio (#TT03590/24)
> - PM - corregida la fecha de gastos ingresados automáticamente en la declaración de actividad generada por el cambio de estado aprobado de la intervención (#TT03640/24)
> - MS - Implementado el flag Generación de órdenes de producción en los Parámetros MRP del artículo - si está activo, indica que las líneas de pedido de cliente que presentan este artículo deben visualizarse en el filtro de la pestaña Pedidos de Cliente de la Generación de órdenes de producción; además, también será considerado en caso de que esté activa la generación automática del flujo de producción presente en los Parámetros MS. Si el flag está desactivado, el artículo no será considerado en ninguno de los dos procedimientos (#TT03242/24)
> - WM - es posible consultar el stock por línea de proyectos en Visualización de stock<!-- giacenza --> (#Ticket 03719/24)
> - MS - En generación de órdenes es posible crear prototipos de orden con muchas más filas simultáneamente (#TT03636/24)
> - WMS - Corregido bug en el formulario de carga-descarga UDC (#TT03875/24)
> - MS - Corregido bug en Planificación general; ahora la programación con el flag “Considera también las alternativas de los materiales” funciona correctamente (#TT00306/24)
> - Revisión de la gestión del paso 'firma' para los archivos Sdi importados vía webapi (#TT03741/24)

### Patch 706.1-0008 - 05/09/2024
> - MS - En generación de órdenes es posible crear prototipos de orden con muchas más filas simultáneamente (#TT03636/24)
> - WMS - Ahora en gestión de marca y confirmación de picking el foco regresa al campo de código de barras después de cada lectura (#TT03704/24)
> - FI - dentro de los registros contables, revisión del botón de recálculo de impuesto (#TT02926/24)
> - ARM - Corrección de congelamiento en la página de Proyectos
> - SD - Si en los documentos de venta se cambia el Cliente, también el widget Descuentos por artículo en la pestaña Artículos se actualiza (#TT03735/24)
> - FI - Informe registro de IVA - cambio para tener la posibilidad de usar trimestral/mensual para el historial (#TT03769/24)
> - SH - Habilitada la columna Valor del Parámetro general 'Estilo de cuenta contable por defecto' - en la columna Valor es posible ingresar 1 o 3 para configurar el widget de los anagráficos contables en uno o tres campos (cuenta, subcuenta<!-- sottoconto -->, descripción) (#TT03604/24)
> - WM - En la modificación masiva de artículos, añadida la posibilidad de variar el flag Default WMS en la pestaña UM alternativas (#TT03683/24)
> - MES - En las declaraciones de producción, cuando se registra un avance, en el movimiento de almacén<!-- movimento di magazzino --> ya se calcula el costo del artículo producido, sin esperar la declaración de cierre (#TT03071/24)
> - WM - Corregido bug en la función de rollback de transferencia de las listas de transferencia UDC (#TT03710/24)
> - SCM - En el procedimiento de Evasión desde pedidos la Cantidad a evadir permite ingresar los mismos decimales que la Cantidad restante (#TT03700/24)
> - WMS - Corregido bug en la recepción de mercancía que no creaba correctamente los movimientos de las UDC creadas (#TT03677/24)
> - FI/SCM/WM - Estandarización HR - workflow de contabilización de compras (#TT03450/24)
> - FI/SCM/SD - Casos no soportados para FA_RO_ContabFattura - en algoritmo (#TT03737/24)
> - WM - Mejorado y optimizado el procedimiento de importación de picking a través de Webapi (#TT03723/24)
> - FI - SafT - cambios para GeneralLedgerEntries Julio 2024 (#TT03838/24)
> - SH - Plan de cuentas<!-- Piano dei Conti --> Fast Start sin caracteres acentuados (#TT03740/24)
> - WM - En la búsqueda del anagráfico de artículos, ahora los campos Cliente y Proveedor preferente filtran los datos respectivamente por cliente y proveedor (#TT03698/24)
> - SCM - Creada impresión de Etiquetas desde Órdenes a Proveedores que genera etiquetas físicas para la identificación y gestión de los artículos que forman parte de una orden.
> - WM - En la gestión de marca y confirmación de picking del WMS, ahora los artículos en la pestaña artículos también se ordenan por número de línea de picking (#TT03847/24)
> - PM - gastos a facturar propuestos en intervenciones, restaurado filtro por tipo de intervención en fase de propuesta (#TT03653/24)
> - SD - En las impresiones estándar 'Factura de venta' y 'Factura accompanying' se imprimen, solo para facturas EXTRA UE, las Nomenclaturas de los Artículos bajo el código de artículo; además, en la columna de descripción del artículo se proporciona un resumen con el Resumen de importes por nomenclatura (#TT02102/24)
> - ARM - corrección para migración de proyectos/objetos personalizados
> - PM - resuelto bloqueo en modificación de cantidad, precio, unidad de medida después de haber ingresado un artículo codificado en un proyecto (#Ticket 03696/24)
> - PM - WEB calendario y asignación de recursos wbs, en caso de múltiples recursos corregido desplazamiento/alineamiento de etiqueta utilizando la barra de desplazamiento  (#TT03405/24)
> - PM - WEB nóminas, añadidos totales parciales en el resumen por cada tipo de gasto  (#TT03186/24)
> - PM - planner y wbs asignación de recursos, desbloqueada posibilidad de asignar citas a los recursos incluso en días no previstos por su calendario laboral (#TT03451/24)
> - PM - wbs asignación de recursos, añadidos campos inicio y fin de pausa al crear nueva cita (#TT03452/24)


### Patch 706.1-0007 - 08/08/2024
> - SD - En los DDT y Facturas de Venta ahora es posible realizar la anulación de las filas de artículos de tipo 2, 3, 4 y 5 (#TT02375/24)
> - MS - Si en la generación de órdenes de producción<!-- commesse di produzione --> se genera una orden con tipo “Multiproducto” y agrupación “Ninguno”, esta se crea con tantas filas como las filas de órdenes de clientes para ese artículo; así que sin agruparlas en una sola fila (#TT03615/24)
> - WM - Ahora en el detalle del análisis de disponibilidad<!-- disponibilità --> las filas de órdenes de producción valorizan los campos "Pedido de cliente vinculado" y "Cantidad del pedido de cliente vinculado” si están vinculados a un pedido de cliente (#TT03549/24)
> - MS - Corregido bug en el procedimiento MRP para artículos de producción con estructura de producto no autorizada (#TT03543/24)
> - WM - Corregido bug en la ayuda de lotes que no mostraba correctamente el valor de la disponibilidad<!-- disponibilità --> en la cuadrícula superior cuando se filtraba por ubicación (#TT03600/24)
> - SCM - En el formulario ‘Sdi- Cierre de documentos’, abierto desde la cabecera de las Facturas de compra, se han añadido en la primera cuadrícula las columnas Número de documento y Fecha de documento (#TT03049/22)
> - SD - Eliminación del redondeo en el cálculo del descuento por el porcentaje del Range discount (#TT03609/24)
> - SH - Habilitados decimales en las columnas Demanda y Oferta para los Pedidos planificados, en el Análisis de disponibilidad<!-- disponibilità --> (#TT03201/24)
> - FI - la contabilización de cánones de leasing ahora utiliza la cuenta el costo de intereses sobre la subcuenta<!-- sottoconto --> específica establecida (#TT03582/24)
> - FI/PR - revisión visualización filtros de búsqueda para partidas pagables/no pagables, las no pagables se excluyen por defecto en las pantallas de compensaciones, en los registros, en la adquisición de efectos de partidas, en el módulo de pagos a proveedores (#TT03641/24)
> - QY - No conformidades - Corregido error de la propagación de los Extra data desde el Tipo de no conformidad a la No conformidad (#TT03586/24)
> - SD - En el formulario ‘Detalle de filas de Órdenes de cliente’ se habilitó el filtro en rejilla para las columnas ‘Tipo de documento de envío’ y ‘Número de documento de envío’; después de insertar el filtro es necesario hacer clic en Buscar para visualizar los resultados (#TT03655/24)
> - FI/PM - en el formulario de gestión de nóminas de horas de empleados, el filtro de actividad ahora se ajusta al recurso/empleado y ya no al usuario conectado (#TT03607/24)
> - PR - gestión de archivos SEPA para Eslovenia (versión pain 001.001.03) (#TT03504/24)
> - FI - revisión recuperación de amortización de activos fijos en los cierres interanuales, cálculo también en presencia de amortizaciones ya ingresadas en contabilidad para el año del cierre (#TT03042/24)
> - WMS - Picking Corfema y Gestión de marca. Implementada la posibilidad de sobreevadir la cantidad indicada en un picking (#TT03651/24)
> - WM - Corregido bug en el procedimiento de recálculo de costo en caso de estar presentes variantes (#TT02015/24)

### Patch 706.1-0006 - 01/08/2024
> - WMS - Corregido bug en la visualización de las unidades de carga de la Confirmación de extracciones UDC del WMS (#TT03473/24)
> - SD - Corregido bucle en la descarga automática de DDT con solo artículos de tipo nota y no codificados (ref. ticket 3557/24)
> - MES - Corregido bug en el cálculo del costo del artículo producido con las declaraciones de producción (#TT03408/24)
> - SD - En las Ofertas de Venta jerárquicas cuando se inserta una fila descriptiva en la pestaña Materiales se asocia un tipo de fila 2 (#TT03420/24)
> - WM - Corregido bug en análisis de disponibilidad<!-- disponibilità --> (#TT03349/24)
> - FI - Reordenación de protocolos de IVA - corregido error en la inserción de numeración automática y en la actualización de protocolos en las descripciones (#TT03378/24)
> - FI - corregido error en la ejecución de la contabilización del archivo de movimientos bancarios<!-- movimenti bancari --> (#TT03579/24)
> - SH - Optimización al ingresar Extra Data de tipo Fecha junto con Extra Data de otro tipo (#TT03055/24)
> - SD - Corregido error al insertar un nuevo artículo en un DDT ya descargado (#TT03177/24)
> - FI - Durante la creación de la factura o del registro contable desde Documentos de compra en entrada, solo se proponen los contactos con una cuenta contable relacionada (#TT03352/24)
> - PM - Resuelta notificación en el cambio de cliente en cabecera del proyecto
> - PM - resuelto caso de asignación wbs en intervención, que en caso de coincidencia con los parámetros del proyecto, impedía la asociación
> - PM - Proyecto - la inserción de un nuevo nivel hijo de una raíz, impedía la asociación de un artículo codificado
> - WM - Corregido bug en anagráfico de artículo, que al insertar una variante creaba también la lista de materiales para esa variante (#TT03443/24)
> - MS - Corregido bug en Capacidad de centros de trabajo que consideraba la capacidad en un centro de trabajo interno dada por una orden planificada de trabajo externo<!-- conto lavoro -->; ahora, si la orden planificada de trabajo externo<!-- conto lavoro --> tiene una fase interna (porque a veces se produce internamente y a veces externamente) esta ya no bloquea ese centro de trabajo (#TT03406/24)
> - MES - Corregido bug en el ciclo de trabajo que en caso de añadir una nueva fase, no reportaba el proveedor preferente insertado en la fase estándar (#TT03551/24)

### Patch 706.1-0005 - 18/07/2024
> - MS - Nuevas optimizaciones para el procedimiento del MRP (#TT03485/24)
> - SCS - Corregido error que al duplicar una Orden de trabajo externo<!-- Ordine di Conto Lavoro --> forzadamente completada no actualizaba el estado de entrega de los materiales a entregar de la nueva orden (#TT03380/24)
> - SCS - En las Órdenes de trabajo externo<!-- Ordini di Conto lavoro --> se ha añadido un nuevo parámetro en los Datos de materiales propuestos denominado “Desde la orden de producción” usado para el recálculo de las cantidades de los materiales. Se configura automáticamente al crear una orden de trabajo externo<!-- conto lavoro --> desde fase externa de una orden de producción, al liberar una orden planificada de producción con fase externa y al liberar una Orden de trabajo externo<!-- conto lavoro --> planificada. Para la propuesta de datos de materiales en la orden de trabajo externo<!-- conto lavoro --> ahora es posible tener un parámetro diferente para cada línea de artículo (#TT02097/24)
> - SCS - Corregido error en el cálculo de las cantidades de material en las Órdenes de trabajo externo<!-- Ordini di Conto lavoro --> cuando se proponían desde la última entrega realizada al mismo proveedor externo<!-- terzista --> (#TT03168/24)
> - PM - Impresión de detalle de proyectos, corregido caso de movimientos<!-- movimenti --> dobles en la impresión. Gestionado correctamente caso de ddt con movimientos<!-- movimentazione --> a almacén<!-- magazzino --> y su factura vinculada (#TT03484/24)
> - PM - declaración de actividad facturable - gestionada correctamente la advertencia de falta de configuración de tipo de intervención - en el tipo de actividad o en los parámetros generales del proyecto (#TT03462/24)
> - MS - Optmizado y acelerado el procedimiento MRP (#TT02462/24)
> - MES - Corregido bug en el cálculo de la ocupación de los centros de trabajo en caso de modificación de fases en la orden de producción (#TT02662/24)
> - SH - La línea de gasto Conai, al guardar el documento, toma el mismo IVA de la línea de artículo que la generó (#TT02599/24)
> - FI - para empresas con controlling<!-- controlling --> activo, revisión del test de cuadratura en las dimensiones<!-- dimensioni --> (#TT03496/24)
> - SH - Revisión del recálculo de Conai en caso de documento duplicado (#TT03508/24)
> - MS - Mejorado y optimizado el procedimiento de cálculo de costos por orden<!-- costificazione commessa --> (#TT00449/24)

### Patch 706.1-0004 - 22/07/2024
> - FI - revisión del scroll de la lista de registros contables (#TT03440/24)
> - MES - Corregido bug en la lista de extracción de materiales referente a la creación del picking con artículos gestionados por lotes (#TT03187/24)
> - FI - Para localización suiza, revisión de la contabilización de los redondeos sobre el total documento gestionados con gastos finales sin iva (#TT03335/24)
> - FI - Corregido problema que no gestionaba el banco secundario<!-- banca d’appoggio alternativa --> en la creación automática de lista de pagos a proveedores utilizando el anagráfico de agente (#TT03274/24)
> - Gestión de timeout de ejecución de stored procedure blockly (#TT03153/24)
> - HR - cálculo de nóminas - introducido nuevo flag en los códigos de nómina "Extraordinario festivo" que considera todas las actividades realizadas en sábados y/o domingos, que no están previstas en el horario laboral del recurso (#TT02674/24)
> - FI - en la contabilización de facturas de compra, gestión en la cuadrícula iva del campo de iva por causales automáticas (#TT02641/24)
> - SCM - revisión contabilización de centros de coste<!-- centri di costo --> de facturas de compra, signos negativos (#TT03239)
> - FI - Resuelto error exception en el intrastat que involucraba un caso relativo a una nota de crédito ref R- TT03449/24

### Patch 706.1-0003 - 18/07/2024
> - FI - en la contabilización de facturas de venta, alineación de la gestión del cambio para la sección de los centros de coste<!-- centri di costo --> (#TT02172/24)
> - SCM - contabilización de facturas de compra, asignación de división a las filas de movimiento<!-- movimento --> de centro de coste<!-- centro di costo --> para filas de gastos finales (#TT03239/24)
> - SD - Corregido error que no permitía realizar una ordenación por estado de entrega en la cuadrícula de Pedidos de clientes (#TT03404/24)
> - WM - En visualización de stocks<!-- giacenze -->, los decimales utilizados por la unidad de medida alternativa utilizada, son los indicados en el campo UM decimales de la UM alternativa utilizada (#TT03313/24)

### Patch 706.1-0002 - 17/07/2024
> - MES - Corregido bug en la lista de extracción de materiales que no cambiaba correctamente el estado de las órdenes de producción de lanzado a ejecutivo si se procesaban más de una a la vez (#TT03383/24)
> - MS - En el formulario de Generación de órdenes de producción<!-- Generazione Commesse di Produzione --> por Bajo Stock se ha añadido la columna Stock al día de hoy, mientras que para los documentos sin Fecha de Entrega, ahora se toma en cuenta el parámetro “Si no se especifica la fecha de entrega” presente en la pestaña Parámetros del formulario (#TT02573/24)
> - PR - para la generación de archivos Sepa, Sepa extranjero, Sepa Sdd ahora se verifican los parámetros generales "FS-PR-SEPA-PaymentRequest", "FS-PR-SEPA-ForeignPaymentRequest", "FS-PR-SEPA-SDD", para entender qué flujo BizLink llamar. Si no están definidos, se usa el flujo por defecto para la localización de la empresa (#TT03341/24)

### Patch 706.1-0002 - 16/07/2024
> - SD - Revisión del control del país cedente/prestador en factura Sdi para autofacturas, de campo país a campo código iso del número de IVA (#TT03368/24)
> - WM - En el picking, mejorada la accesibilidad al campo lote en caso de reabrir un picking y el usuario variara la cantidad en el campo cantidad extracción. Antes era necesario cambiar de fila antes de cambiar el lote, pero ya no es necesario (#TT03228/24)
> - PM - wbs asignación de recursos, mejorado el refresco en la visualización del árbol de proyecto tras cambio de filtros (#TT03376/24)
> - MS - Corregido bug en la liberación de pedidos planificados de compra, ahora las RDA creadas se agrupan correctamente por cliente, tipo y año (#TT03382/24)

### Patch 706.1-0000

> - WEBAPI - resuelto el error relacionado con la configuración de ResidualQuantity de DDT de compra y DDT de venta para filas con cantidad 1.
> - FI - Enasarco - corregido bug en el formulario de impresión 'Enasarco' que no gestionaba correctamente el filtro por rango de fechas (#TT00824/24)
> - FI - Liquidación periódica de IVA de enero - impresión definitiva - el crédito del año anterior ya no se guarda en la declaración de IVA periódica, incluso en el campo del crédito del período anterior.
> - FI - Registro contable - en la pestaña 'Pagos' se ha bloqueado la posibilidad de modificar las filas de pago derivadas de pagos a perceptores; es necesario ejecutar el rollback y modificar el importe de pago en el procedimiento de contabilización.
> - FI - Contabilización de anticipos de cobros - corregido error en el formulario 'Contabilización de anticipos de cobros' donde en el total, en presencia de notas de crédito, el importe correspondiente se sumaba en lugar de restarse (#TT01463/23)
> - FI - Contabilización de facturas de compra - revisión de la gestión de 'Fecha de registro' para la anulación automática de las 'Facturas por recibir'.
> - FI - Intra2 - revisión 'Recuperar datos de registros' para el caso del objeto FSPosting personalizado.
> - MES - resuelto bug en el recálculo de la fecha y hora inicio y fin de las fases de la orden de producción<!-- ordine di produzione --> (#TT03584/23)
> - MES - Programación general - corregido bug para órdenes no examinadas.
> - MES - Declaraciones de producción - se ha añadido el detalle de la ubicación en el mensaje de error debido a stock insuficiente (#TT02064/24)
> - MPS - resuelto bug en la creación de los pedidos planificados en caso de materiales con nivel ficticio (#TT00562/24)
> - MPS - Programación general - corregido bug en caso de programar muchas filas simultáneamente (#TT01451/24)
> - MPS - corregido bug que se producía al utilizar el agrupamiento junto con el lote económico (#TT02990/23-#TT01099/24)
> - MPS - Programación - corregido problema técnico relacionado con personalizaciones relativas a la programación (#TT02304/24)
> - PR - Gestión de liquidez - se ha modificado el comportamiento del formulario para alinearlo con las lógicas generales. El campo calculado 'Progresivo' sólo puede gestionarse con la ordenación por defecto del formulario y se oculta al cambiar el criterio de ordenación (#TT02060/24)
> - QY - Acciones correctivas - revisión de lógicas de habilitación de la información en la pestaña 'Verificaciones próxima auditoría'.
> - SCM - Solicitudes de compra - resuelto el error que no guardaba correctamente un perfil en las solicitudes con filtro 'No atendidas' (#TT02123/24)
> - SCM - Detalle de filas de pedidos - corregido el bug que no mostraba 'Código/Descripción' del artículo proveedor cuando el pedido no estaba finalizado (#TT02344/24)
> - SCM - DDT compra - si un documento de compra ya está cargado, no es posible cambiar el código de lote (#TT01712/24)
> - SCM - Documentos de compra - corregido el error en la actualización de los importes en movimientos de almacén<!-- movimenti di magazzino --> en presencia de un gasto repartido en el DDT o en la Factura de Compra (#TT00794/24)
> - SCM - Evasión de pedidos - corregido el error que proponía la misma 'Descripción de artículo proveedor' en el procedimiento de 'Evasión de pedidos', para todos los proveedores preferentes del artículo (#TT01501/24)
> - SCM - Solicitud de oferta - si el flag 'Precio unidad de medida alternativa' está activo en la 'Solicitud de oferta', al crear el Pedido al proveedor desde 'Oferta proveedor' el flag también se mostrará en la orden creada (#TT02804/24)
> - SCS - DDT y Retornos de Conto lavoro<!-- Conto Lavoro --> - el lote en los materiales ahora se propone automáticamente si el tipo de extracción es FIFO o por Vencimiento (#TT01140/24)
> - SCS - Listas de precios de terceros - corregido bug en la 'Liberación de órdenes de trabajo externo<!-- conto lavoro -->' que reportaba solo el precio del artículo, pero no la lista de precios.
> - SD - Balancete de facturación - revisión gestión de signos en el subreporte de totales por facturación de ventas.
> - SD - Documentos de venta - corregido error en los documentos de venta que no gestionaban adecuadamente la comisión en caso de agentes vinculados al destinatario/destino del cliente y NO vinculados a ningún destinatario/destino sino simplemente al cliente (#TT00273/24)
> - SD - Pedidos de cliente - corregido error que modificaba el estado de entrega de la orden<!-- commessa --> tras la actualización de la 'Fecha de entrega' en el pedido de cliente (#TT01699/24)
> - SH - Duplicar artículos - el procedimiento también reporta las notas de los proveedores preferenciales (#TT01580/24)
> - WM - Implosión de componentes - corregido bug en la exportación excel de los datos del reporte 'Implosión de componentes' que no reportaba el valor en la columna 'Cantidad' (#TT02753/24)
> - WM - Valoración de almacén<!-- valorizzazione magazzino --> - corregido el error en la visualización de errores del procedimiento en caso de que fueran más de 100.000.
> - PM - Intervenciones - al cambiar el estado de la intervención de 'Aprobado' a 'Insertado', se eliminan todas las actividades vinculadas a la intervención, y se regeneran al nuevo cambio de estado (#TT00391/24)
> - PM - Elaboración SAL - resueltas casuísticas de cálculos incorrectos para elaboraciones SAL de varios proyectos simultáneamente (#TT01325/24)
> - PM - Proyectos - el campo precio en las filas de proyectos se formatea correctamente (#TT01384/24)
> - PM - Proyectos - los cambios en el número wbs en la tabla del módulo proyecto se reflejan en la pestaña 'Actividades' (#Ticket 01020/24)
> - PM - SAL - bloqueada la inserción manual de ambos valores debe/haber en la misma fila; campo 'Referencia' editable.
> - PM - Análisis SAL - se muestra en el título de cada SAL también la nota (#TT01382/24)
> - SD - Facturas de venta - al guardar una nota de crédito, todos los 'Tipos de gasto' se insertan en negativo, excepto los gastos 'Timbre fiscal' (#TT01289/24)
> - SD - Facturas de venta - permitida la modificación del rango de 'fechas de competencia económica' con archivo Sdi creado pero documento no contabilizado.
> - SD - Facturas de venta - al insertar un artículo en una 'Factura de venta' mediante el uso de la Ayuda de artículos ahora se informa correctamente la clase (#TT01213/24)
> - TR - Importar archivo cbi - revisión de la gestión de notas de línea en la importación de movimientos bancarios<!-- movimenti bancari -->.
> - Offers - Ofertas - las versiones sucesivas de una Oferta heredan los 'Documentos adjuntos' (#TT01149/24)