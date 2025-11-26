---
title: Notas de la versión Versión 705
sidebar_position: 1
ai_generated: true
---

### Patch 705.1-0031 - 08/08/2024
> - FI - Reordenación de protocolos IVA: corregido error en la inserción de numeración automática y en la actualización de protocolos en las descripciones (#TT03378/24)
> - SH - Optimización de la inserción de Extra Data de tipo Fecha conjuntamente con Extra Data de otro tipo (#TT03055/24)
> - SD - Corregido error al añadir un nuevo artículo en una DDT ya descargada (#TT03177/24)
> - FI - Durante la creación de la factura o el registro contable desde los Documentos de compra entrantes, ahora sólo se proponen los contactos con una cuenta contable asociada (#TT03352/24)
PM: resuelto caso de asignación de wbs en intervención, que en el caso de coincidencia con los parámetros del proyecto, impedía la asociación (#TT03574/24)
> - PM: Proyecto - al crear un nuevo nivel hijo de una raíz, impedía la asociación de un artículo codificado (#TT03583/24)
> - WM - Corregido bug en la ficha de artículo, que al insertar una variante creaba también el listado de materiales (BOM) para esa variante (#TT03443/24)
> - MS - Corregido bug en la Capacidad de centros de trabajo que consideraba la capacidad en un centro de trabajo interno originada por una orden planificada de cuenta de trabajo<!-- conto lavoro -->; ahora, si la orden planificada de cuenta de trabajo<!-- conto lavoro --> tiene una fase interna (ya que a veces se produce internamente y otras externamente) esto ya no compromete ese centro de trabajo (#TT03406/24)
> - MES - Corregido bug en el ciclo de trabajo que cuando se añadía una nueva fase no recuperaba el proveedor preferente introducido en la fase estándar (#TT03551/24)
> - SD - En los DDT y en las Facturas de Venta ahora es posible anular las filas de artículos de tipo 2, 3, 4 y 5 (#TT02375/24)
> - MS - Si al generar órdenes de producción<!-- commesse di produzione --> se genera una orden de tipo “Multiproducto” y agrupación “Ninguno”, ésta se crea con tantas filas como líneas de órdenes de clientes para ese artículo; es decir, sin agruparlas en una sola fila (#TT03615/24)
> - WM - Ahora en el detalle del análisis de disponibilidad<!-- disponibilità --> las filas de órdenes de producción valoran los campos "Orden cliente asociada" y "Cantidad orden cliente asociada" si están enlazadas a una orden de cliente (#TT03549/24)
> - WM - Corregido bug en la ayuda de lotes que no mostraba correctamente el valor de la disponibilidad<!-- disponibilità --> en la cuadrícula superior cuando se filtraba por ubicación (#TT03600/24)
> - SD - Eliminación del redondeo en el cálculo del descuento para el porcentaje del Range discount (#TT03609/24)
> - SH - Activados los decimales en las columnas Demanda y Oferta para las Órdenes planificadas, en el Análisis de disponibilidad<!-- disponibilità --> (#TT03201/24)
> - FI/PR - revisión de visualización de filtros de búsqueda para partidas pagables/no pagables, las no pagables se excluyen por defecto en los formularios de compensación, en los registros, en la adquisición de efectos desde partidas, en el módulo de pagos de proveedores (#TT03641/24)
> - SD - En el formulario ‘Detalle de líneas de Orden de cliente’ ahora está habilitado el filtro en la cuadrícula para las columnas ‘Tipo de documento de despacho’ y ‘Número de documento de despacho’; después de insertar el filtro es necesario hacer clic en Buscar para visualizar los resultados (#TT03655/24)
> - FI - revisión reanudación de amortización de activos fijos en los cierres interanuales, cálculo también en presencia en contabilidad de amortizaciones ya insertadas para el año del cierre (#TT03042/24)
> - WMS - Ahora en la gestión de check y confirmación de picking el foco regresa al campo código de barras tras cada lectura (#TT03704/24)


### Patch 705.1-0030 - 30/07/2024
> - FI - revisión del scroll en la lista de registros contables (#TT03440/24)
> - MES - Corregido bug en la lista de recogida de materiales relacionado con la creación del picking con artículos gestionados por lotes (#TT03187/24)
> - FI - para la localización suiza, revisión de contabilización de redondeos en el total del documento gestionando con gastos finales sin iva (#TT03335/24)
> - FI - Corregido problema que no gestionaba el banco de soporte alternativo en la creación automática de la lista de pagos de proveedores utilizando la ficha del agente (#TT03274/24)
> - FI - en la contabilización de facturas de compra, gestión en la cuadrícula iva del campo de iva para causales automáticas (#TT02641/24)
> - SCM - revisión de contabilización de centros de costo de facturas de compra, signos negativos (#TT03239/24)
> - FI - Resuelto error exception en el intrastat que involucraba un caso relativo a una nota de abono (#TT03449/24)
> - MS - Nuevas optimizaciones para el procedimiento MRP (#TT03485/24)
> - PM: Impresión detalle proyectos, corregido caso de movimientos dobles en impresión. Gestionado correctamente caso de ddt con movimiento a almacén<!-- movimentazione a magazzino --> y la factura relacionada (#TT03484/24)
> - PM: declaración de actividad facturable - gestionado correctamente aviso de falta de configuración tipo intervención - en el tipo de actividad o en los parámetros generales del proyecto (#TT03462/24)
> - MES - Corregido bug en el cálculo de la ocupación de los centros de trabajo en caso de modificar las fases de la orden de producción (#TT02662/24)
> - FI - para sociedades con controlling activo, revisión de test de cuadratura sobre las dimensiones<!-- dimensioni --> (#TT03496/24)
> - SH - La línea de gasto Conai, al guardar el documento, toma el mismo IVA que la línea de artículo que la ha generado (#TT02599/24)
> - SH - Revisión de recálculo de Conai en caso de documento duplicado (#TT03508/24)
> - WMS - Corregido bug en la visualización de las unidades de carga de la Confirmación de recogida UDC del WMS (#TT03473/24)
> - SD - Corregido loop en el descargue automático de DDT con solo artículos tipo nota y no codificados (#TT03557/24)
> - MES - Corregido bug en el cálculo del coste del artículo producido con las declaraciones de producción (#TT03408/24)
> - SD - En Ofertas de Venta jerárquicas, cuando se inserta una línea descriptiva en la pestaña Materiales se asocia un tipo de línea 2 (#TT03420/24)
> - SCS - En los Pedidos de Cuenta trabajo<!-- Conto lavoro --> se ha añadido un nuevo parámetro en los Datos de materiales propuestos denominado “Desde la orden de producción”, usado para el recálculo de las cantidades de los materiales. Se establece automáticamente al crear una orden de cuenta trabajo<!-- conto lavoro --> desde una fase externa de una orden de producción, al liberar una orden planificada de producción con fase externa y al liberar una Orden de Cuenta trabajo<!-- Conto lavoro --> planificada. Para la propuesta de datos de materiales en la orden de Cuenta trabajo<!-- Conto lavoro --> ahora es posible tener un parámetro diferente para cada línea de artículo (#TT02097/24)
> - WM - Corregido bug en análisis de disponibilidad<!-- disponibilità --> (#TT03349/24)


### Patch 705.1-0029 - 18/07/2024
> - CO - Optimizadas las Registraciones extracontables de cierre (#TT03214/24)
> - FI - Revisión gestión test de validación de la causal contable durante las contabilizaciones (#TT03062/24 - #TT03060/24)
> - SD - Revisión control de la nación cedente/prestador en factura Sdi para autofacturas, del campo nación al campo código iso del NIF (#TT03368/24)
> - WM - En el picking, mejorado el acceso al campo lote en caso de que se reabra un picking y el usuario varíe la cantidad en el campo cantidad recogida. Antes era necesario cambiar de fila antes de variar el lote, ahora ya no es necesario (#TT03228/24)
> - MS - Corregido bug al liberar las órdenes planificadas de compra, ahora las RDA creadas se agrupan correctamente por cliente, tipo y año (#TT03382/24)
> - MES - Corregido bug en la lista de recogida de materiales que no cambiaba correctamente el estado de las órdenes de producción de lanzado a ejecutado si se procesaba más de una a la vez (#TT03383/24)
> - SD - Corregido error que no permitía ordenar por estado de despacho en la cuadrícula de Pedidos de cliente (#TT03404/24)
> - WM - En visualización de existencias, los decimales usados de la UM alternativa utilizada son los definidos en el campo UM decimales de la UM alternativa utilizada (#TT03313/24)
> - FI - en la contabilización de facturas de venta, alineamiento de la gestión del cambio para la sección de centros de coste (#TT02172/24)
> - SCM - contabilización facturas de compra, asignación división a las líneas de movimiento centro de costo por líneas de gastos finales (#TT03239/24)
> - FI - corregido bug en la generación de recordatorios, que en vez de actualizar la línea para recordatorios posteriores al primero creaba líneas diferentes (#TT03219/24)

### Patch 705.1-0028 - 12/07/2024
> - revisión del almacenamiento del crédito del año anterior desde la impresión definitiva de liquidación de iva periódica de enero (#TT02348/24)
> - PM - planner y wbs asociación de recursos - eliminadas de la vista actividades ya vinculadas a intervenciones (#TT03248/24)
> - CRM - email desde campañas CRM - bloqueada recarga del template de email después de que el usuario haya hecho cambios antes del envío (#TT03253/24)
> - SD - Corregido error que no actualizaba correctamente los descuentos finales tras un cambio en la solución de pago (#TT03200/24)
> - CO - Solucionado bug en el reporte de Lista de materiales valorizada en el que no se mostraban los valores del coste de los materiales (#TT03281/24)
> - MES - Corregido bug en las declaraciones de producción, no se informaba correctamente el valor de la ubicación del lote en el movimiento de almacén<!-- magazzino --> de salida de material (#TT02156/24)
> - FI - la contabilización de efectos asigna la fecha de cierre de las comisiones en base al vencimiento del efecto (#TT02657/24)
> - FI - Error en registro en diario de cobro desde cliente (#TT03209/24)
> - MES - Implementada en la orden de producción la posibilidad de descargar los materiales por cliente/proveedor (#TT03210/24)
> - Implementación WEBAPI módulo Picking Import/export y Descarga Picking también con la importación de lotes/número de serie (#TT02551/24)
> - SD - Widget Descuentos: corregido el cálculo de totales de fila y documento en la creación de DDT y Facturas de Picking creados desde Pedido con el uso del widget Descuentos (#TT03333/24)

### Patch 705.1-0027 - 08/07/2024
> - PM - Calendario - gestionada la visualización de periodos de vacaciones con fondo de color naranja, también en modo timeline (#TT03117/24)
> - SCM - en contabilización de facturas de compra, revisión de asignación de fecha de registro para anulación automática del registro “facturas por recibir” (#TT03056/24)

### Patch 705.1-0026 - 04/07/2024
> - SH - Corregido bug que, en caso de contacto con país distinto de IT, no mostraba en los detalles de cliente/proveedor el campo Régimen fiscal hasta cerrar y reabrir el formulario (#TT02158/24)
> - Solucionado bug al crear eventos de script para documentos Sdi
> - Solucionado bug al analizar parámetros para documentos Sdi
> - SH - añadido nuevo parámetro al comando de duplicar contactos para decidir si las subcuentas asociadas<!-- sottoconti collegati --> deben duplicarse para todas las sociedades o sólo para la actual (#TT02592/24)
> - SH - Pestaña Ficha de contactos - Corregida anomalía por la cual si se establecía un perfil en la ficha de contactos, la pestaña de agrupación de parámetros cli/for se ocultaba (#TT02346/24)
> - FI - la contabilización de efectos asigna la fecha de cierre de comisiones en función del vencimiento del efecto (#TT02657/24)
> - FI - corregido bug que no valorizaba los centros de coste al contabilizar los asientos de ajuste (#TT02905/24)


### Patch 705.1-0025 - 01/07/2024
> - SCM - Corregido error que no actualizaba el estado de despacho de las RDA tras activar el flag Despachado forzadamente en las filas de artículos (#TT02937/24)
> - CO - revisión nueva reclasificación para gestión tree (#TT02912/24)
> - PM - al cambiar recurso intervención, corregida actualización de recurso y empleado en todos los puntos donde el dato está presente dentro de la intervención (#TT02759/24)

### Patch 705.1-0024 - 28/06/2024
> - FI - Corregido bug en el formulario de lanzamiento de la impresión Enasarco que no gestionaba correctamente el filtro por rango de fechas (#TT00824/24)
> - CO - Revisión de performance nueva reclasificación de balance (#TT02912/24)
> - WMS - Corregido bug en la visualización de números con decimales (#TT02080/24)
> - WM - Corregido bug en el formulario Detalle de movimientos donde se mostraban erróneamente las cantidades calculadas en la UM alternativa (#TT02902/24)
> - SD - Corregido error que no guardaba el tipo de Impresión en la tabla Tipos de Pedido de Cliente (#TT02985/24)
> - SD - corregido caso en que en la cuadrícula de búsqueda de facturas se mostraba cero en la columna “Total Imponible” aunque el documento contenía los valores correctos (#TT02991/24)
> - PM - modificada propuesta de precio en solicitudes de intervención y en intervenciones planificadas: si el artículo no está presente y se asigna un proyecto, artículo y precio se proponen desde el proyecto. Si el artículo ya está presente y se asigna un proyecto, si el artículo en el documento y en el proyecto coinciden, el precio se actualiza desde el proyecto. De lo contrario se mantiene el precio ya presente (#TT02837/24)
> - SCM - Si el flag Precio Unidad de Medida Alternativa está activo en la Solicitud de Oferta, al crear el Pedido de proveedor desde la Oferta de proveedor el flag también aparece en el pedido creado (#TT02804/24)
> - Formulario Despacho: Resuelta sincronización entre generación de despacho y refresco de cuadrícula de despacho que en algunos casos devolvía excepciones de valor null (#TT02661/24)
> - SD - Impresión de pedidos - Corregida anomalía en la impresión de destino (#TT02733/24)
> - CRM - reactivado el expander en la cuadrícula de búsqueda de contactos (#TT02880/24)
> - PM - mejoradas alertas de servicios superpuestos en las intervenciones (#TT02891/24)
> - Objeto - SdiPurchaseInvoice - añadir nuevas propiedades: CurrencyCode, BaseAmount, VatAmount, TotalAmount(#TT03008/24)
> - Permitida la coexistencia de un algoritmo creado con arm y uno de tipo script.
> - SD - Recuperación de comisiones para rango de descuento: corregida aplicación de % de comisión errónea debida al redondeo del valor neto de la línea (#TT02974/24)
> - SCM - Corregido bug que no visualizaba Código/Descripción del Artículo proveedor en el formulario de Detalle de líneas de Pedido cuando el pedido no había sido despachado (#TT02344/24)
> - SCM - Los gastos con flag Repartida insertados en los resúmenes de documentos ahora se reparten en los artículos del documento incluso cuando los precios son cero (#TT02336/24)  
> - MES - Corregido bug relacionado con el campo "Reserva de lote de carga" de la orden de producción que no se informaba correctamente en la declaración de producción (#TT03079/24)
> - MES - Añadido el campo defecto en las declaraciones de producción. Se habilita solo después de ingresar una cantidad rechazada mayor que cero (#TT01887/24)
> - FI - nuevo parámetro general para emitir recordatorios sobre partidas cerradas (#TT02936/24)
> - ARM - reprocesar scripts custom al publicar servidor
> - SD - Corrección gramatical del aviso emergente cuando hay descuentos con la misma prioridad: la palabra errónea ‘sequente’ ha sido corregida a ‘seguente’ (#TT03073/24)
> - SD - Recuperación de comisiones para rango de descuento: si hay líneas de comisión 0 se consideran como válidas incluso en caso de múltiples definiciones de rango de descuento y distinta categoría de comisión. Si no se quiere considerar la comisión 0 no debe especificarse en la definición (#TT02859/24)
> - FACTURACIÓN ELECTRÓNICA SM: Al restaurar el estado de Generado o descartado Hub SM a Controlado se elimina el archivo de integración de la factura de compra SM, al devolver el estado a no examinado también se resetea el nombre del archivo (#TT03054/24)
> - SH - Análisis Disponibilidad<!-- Analisi Didsponibilità -->: el control de que si está activado el flag lista de materiales haya un solo artículo se ha desplazado cuando se hace clic en el botón Buscar (#TT02783/24)

### Patch 705.1-0023 - 21/06/2024
> - SD - Añadido el método estático ConvertAllSelectedOffersToSalesOrders para los scripts (#TT01258/21)
> - SH - Importación excel de listas de precios de ventas - Corregidas anomalías en la duplicación del trazado y en la importación del cliente en la ficha de artículo (#TT02871/24)
> - FI - en compensaciones de profesionales, revisión del campo inps a cargo del perceptor en la primera pestaña en caso de cálculo manual (#TT02802/24)
> - FI - revisión impresión Control de activos fijos para importe del fondo en caso de bajas totales/parciales (#TT02537/24)
> - PM - valoración de intervenciones, corregida valoración parcial (#TT02739/24)
> - SH - Modificadas las descripciones de los registros en la tabla fija “Naturaleza jurídica”, para diferenciar ‘Residente’ de ‘No residente’ como en la tabla de instrucciones 770 (#TT02870/24)

### Patch 705.1-0022 - 20/06/2024
> - MES - Corregido bug en avisos de producción relacionado con la ubicación de artículos producidos y gestionados por lotes (#TT02667/24)
> - CRM-CrmContact - cambios de layout (#TT01258/21)
> - SD - en la impresión del balance de facturación, revisión gestión de signos en el subreporte de totales para facturación de ventas (#TT02720/24)
> - MS - Corregido error en el procesamiento del MRP que bloqueaba la operación (#TT02408/24)
> - FI - Falta de refresco del botón "Buscar partidas" en el registro contable - crash (#TT02089/20)
> - CRM - Habilitación de la virtualización para las cuadrículas de campañas y listas de distribución
> - PM - WBS asignación de recursos resuelto drag&drop en calendario desde el segundo recurso en adelante (#TT02544/24)
> - WM - Corregido bug en exportación excel de datos del reporte Implosión de componentes que no informaba el valor en la columna cantidad (#TT02753/24)
> - MS - En el ciclo de producción, cuando se asocia un material a una fase determinada, ya no se visualiza en la ayuda entre los materiales pendientes de asociar a las fases.  (#TT02785/24)
> - MES - Corregido error que no informaba la ubicación en el registro de la declaración de producción (#TT02807/24)
> - Configurado el primer día de la semana para el scheduler (según la cultura actual) (#TT02849/24)
> - SH - Se permite la navegación entre estados del Workflow en las búsquedas, aunque el objeto esté personalizado (#TT02414/24)
> - SH - En la ficha de agentes se han añadido los campos de link al usuario arm asociado y a la configuración de visibilidad de documentos, para gestión de restricciones de visibilidad en accesos externos (#TT02866/24)
> - WM - Corregido bug en detalle de movimientos que no mostraba el movimiento de descarga de UDC en ciertas condiciones (#TT02472/24)
> - Solucionado bug para compilar algunos scripts sin información LastModified
> - FI - revisión gestión asignación numeración de activos fijos en caso de cambio de categoría/pre-código del activo fijo (#TT02777/24)
> - FE San Marino: Facturas de Venta no conformes Ahora es posible devolver una factura de venta no conforme para el HUB de San Marino al estado Por Revisar para su corrección (#TT02791/24)
> - FI - Excepción en doble contabilización involucrando Sottoconto<!-- sottoconto --> i pagamento (#TT02938/24)
> - SH - Contactos Clientes/Proveedores/Agentes: si el cliente/proveedor/agente ha sido insertado por procedimientos externos de Fluentis sin insertar el registro en la tabla de datos administrativos/Contables, el registro se crea automáticamente al entrar en edición del contacto asociado al tipo de cuenta Cliente/Proveedor/Agente (#TT02778/24)
> - CRM - resuelta visualización de contactos limitada a 200 en campañas (#TT02895/24)

### Patch 705.1-0021 - 13/06/2024
> - MS - Liberación de Órdenes planificadas - Recalculo erróneo de cantidad total de consumo de materiales si la Orden se divide en varios lotes (#TT01949/24)
> - WMS - Corregido bug en el formulario Gestión UDC del WMS que proponía un almacén<!-- magazzino --> incluso cuando había más de uno asociado a ese usuario. Así, en caso de múltiples almacenes, el almacén se propone vacío y debe seleccionarse manualmente por el usuario (#TT02639/24)
> - MES - Implementada la gestión de sitios productivos en la liberación de órdenes planificadas, en las órdenes de producción y en las declaraciones de producción (#TT02188/24)
> - FI - alineado comportamiento de la impresión de control de activos fijos que ahora devuelve los resultados de todas las categorías si no se selecciona ninguna categoría en particular (#TT02502/24)
> - SD - Corregido error que nombraba la impresión ‘Facturado’ erróneamente como ‘Lista de facturas’ (#TT02669/24)
> - PR - Traspaso iva erróneo tras impago (#TT02378/23)
> - WM- Corregido bug en la gestión de prototipos que no mostraba correctamente el flag ficticio de los artículos (#TT02679/24)
> - MS - Añadido mensaje de error en el procedimiento de Liberación de órdenes planificadas cuando la orden planificada a liberar está abierta por otro usuario (#TT02620/24)
> - SD - Al convertir una oferta en pedido, se propagan del presupuesto al pedido todos los datos relativos a la línea de artículo comunes a ambos tipos de documento (#TT02613/24)
> - SD - Corregido error (con mensaje ‘Primer carácter no válido’) que impedía la inserción del Mask en la Creación Avanzada de Listas de precios (#TT02648/24)
> - Nueva webapi para importar/exportar archivos Sdi (#TT01950/24)
> - SCM - Los albaranes<!-- bolle di consegna --> de la compra no deben eliminarse si contienen documentos SDI TT02436/24.
> - WM - Corregido bug en impresión de inventario a cantidad valorizada relacionado con el flag de historización de inventario.  (#TT02708/24)
> - SD - Optimizada la búsqueda y selección de líneas en los procedimientos de Despacho de Pedidos y DDT (#TT02311/24)
> - PM - Planner y WBS asignación de recursos - introducido flag "resaltar días de recursos con disponibilidad" que colorea el fondo para recursos/días en que no toda la jornada laboral ha sido asignada con citas (#TT02538/24)
> - PM - webapi importación de actividades, introducidos controles sobre coherencia de fechas-horarios (#TT01986/24)
> - MS - En los Parámetros MS ahora se pueden guardar los cambios realizados a los flags de Liberación de Órdenes Planificadas incluso sin haber realizado una primera Planificación General (#TT02672/24)
> - PM - modificada impresión de detalle de proyectos, para que considere también registros contables de diario no vinculados a documentos de compra o venta (#TT02528/24)
> - FI - revisión contabilización factura de compra con líneas con/sin facturado compras sobre la misma subcuenta<!-- sottoconto --> (#TT02771/24)
> - MES - Corregido bug relativo a la Web API SignalItemImportExport que no importaba correctamente las notas. Además, se implementó el siguiente comando: \<RecomputeMaterialsQuantity\>True\</RecomputeMaterialsQuantity\> (acepta los valores: 1, 0, True/true, False/false y por defecto True), el cual permite decidir si las cantidades de materiales consumidos deben ser recalculadas o no dentro de la declaración de producción (#TT02512/24)
> - SCM - Optimizados los procedimientos de valorización de muchos DDT de compra con creación de facturas que contienen cientos de líneas (#TT01706/24)
> - PM - Introducido filtro por "estado sprint" en la cuadrícula de búsqueda de los sprints (#TT02761/24)
> - PM - generación de intervenciones desde solicitud de intervenciones, corregido procedimiento para que los horarios de la intervención se hereden desde la solicitud de intervención (#TT02748/24)
> - PM - en la solicitud de intervención o intervención planificada, al seleccionar el proyecto se propone el artículo y la unidad de medida desde el proyecto (#TT02647/24)
> - SD - Al seleccionar la Agrupación por Tipo y Solución de Pago en los Parámetros de agrupación en los documentos de destino se trasladarán los pagos presentes en los documentos de origen (#TT02403/24)
> - ARM - Asegura que la carga base de loadrequest se realiza antes de permitir el flag IsActive (#TT02642/24)
> - SCM - En los parámetros de los procedimientos de Valorización DDT de Compra y de Reingreso se ha añadido un nuevo flag que, si está marcado permite incluir los DDT dentro de las facturas recapitulativas ordenándolos por número de documento de proveedor en lugar del número interno (#TT01817/24)

...