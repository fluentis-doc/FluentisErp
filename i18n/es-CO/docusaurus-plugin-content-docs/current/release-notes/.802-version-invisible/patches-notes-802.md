---
title: Notas de la versión Patch 802
sidebar_position: 1
ai_generated: true
---

### Patch 802.0013 - 21/11/2025

> -	BI - corrección llamada de algoritmos desde Tableros<!-- Cruscotti -->
> -	CRM - corregido caso de mensaje “unauthorized” al enviar email desde campaña y búsqueda de contactos. (#TT05076/25)
> -	CRM - resuelto caso por el cual las notas del workflow log de un contacto no se guardaban, tras el envío de email desde campaña (#TT05123/25)
> -	CRM - WEB - resuelto caso por el cual los datos de los contactos CRM no se proponían más desde el botón "Proponer datos" (TT04726/25)
> -	FI - omisión de creación de registro de pago automático en la contabilización de factura de proveedor (TT02936/25)
> -	FI - contabilización de facturas de compra intra y creación de intra2 desde compras, si está presente se configura la nación de origen de la mercancía desde la nación de la línea del artículo en factura (#TT04862/25)
> -	FI - Creación de registro contable de bienes: solucionado problema en el registro de bienes utilizando la funcionalidad “Dividir bien” (Ref. Ticket TT04778/25)
> -	FI - corregido caso en la gestión de tipo de cambio directo en documentos y solucionada excepción causada por división a 0 (TT04986/25)
> -	MS - Ahora en la pestaña "bajo stock" en la Generación de órdenes de producción no se consideran los artículos archivados. (#TT05135/25)
> -	MS - Eliminada ventana emergente de detalles del DDT en Recepción de mercancía (#TT04318/25)
> -	PM: WEB - declaración de actividades de proyecto, campo descripción redimensionado (#TT05110/25)
> -	PR - Corregido el comportamiento de las ayudas de búsqueda manual de pedidos de clientes y proveedores en el cashflow por errores en el filtrado de datos. Ref TT04002/25
> -	QY - Control de artículos - Planes de control - Corregida la anomalía que visualizaba, en la pestaña "Revisiones", referencias a Planes de control no relacionados con el visualizado. (Ref. Ticket #TT05141/25)
> -	Resuelto error que impedía la importación Web API del ‘Tipo código lote’ de los artículos (#TT04840/25)
> -	SCM - Corregido después del rollback el borrado de la extensión en el documento (TT04933/25)
> -	SD - calendario de envíos - corregido caso donde los envíos relativos a diferentes transportistas no se ordenaban correctamente el mismo día (#TT04912/25)
> -	SD - Creación de Pedido de Proveedor desde búsqueda Pedidos de Cliente: Las líneas de tipo obsequio presentes en el Pedido de Cliente ahora se transfieren al Pedido de Proveedor como líneas de tipo 1 - artículo codificado. (#TT04934/25)
> -	SD - Importación de documentos del área de Ventas a través de webapi - gestionada la importación de líneas con referencia a proyecto (#TT05050/25)
> -	WM - Corregidos errores al insertar pedidos en UDC desde Gestión UDC (#TT04935/25)
> -	WMS - Corregido parpadeo de los botones en la interfaz Maui (#TT05055/25)
> -	WMS - Inhibida doble ejecución de los comandos Confirmar y Cerrar en Recepción de mercancía. (#TT04487/25)

### Patch 802.0012 - 13/11/2025

> -	Implementación agregada para crear enlace de pago con proveedor externo
> -	Alineación de los reportes del Consolidado de proyecto para pasar un nuevo parámetro con la lista de Id seleccionados en el formulario de lanzamiento (#TT04894/25)
> -	CO - consolidado de proyecto, revisión del filtro por proyecto y modificación en la gestión del filtro por Código del consolidado (habilitada la selección múltiple, envío al reporte de un nuevo parámetro con la lista de Id seleccionados). (TT04894/25)
> -	CO - en la pantalla de “Asociación de centros de proyectos”, para el tipo de proyecto se ha añadido la tipología de ‘Centro del proyecto/wbs’ que permite leer el centro asociado en cabecera/wbs del propio proyecto. (TT03580/25)
> -	CPQ - solucionar inserción de valores permitidos durante guardado (error violación PK)
> -	Fi - crash al cerrar formularios por combo (TT04941/25)
> -	FI - corregida falta de registro automático de pago en la contabilización de factura. (TT02936/25)
> -	FI - Solucionar anomalía en la contabilización de factura de compra con valores negativos para el importe en moneda cuenta iva (TT04827/25)
> -	MES - Corregido bug en MES que generaba un doble consumo de materiales en Análisis de disponibilidad<!-- disponibilità -->. (#TT04885/25)
> -	PM - Resuelto caso por el cual la configuración incorrecta de cuentas analíticas generaba un loop en la facturación del proyecto (#TT04788/25)
> -	Corregido bug en importaciones excel del color de fondo
> -	SD - Pedidos de Cliente Diagrama de Cumplimiento: Corregido el diagrama en el caso que existan notas de crédito vinculadas a la factura originada por el DDT que ha despachado un pedido cliente vinculado a una oferta (Ref.ticket 1207/25)
> -	SD - Optimización de la importación WebApi - ventas (#TT04576/25)
> -	SH - corrección en la gestión de visibilidad de columnas de la cuadrícula a/de los perfiles (TT03851/25)
> -	SH - webapi de import FSLedgerAccount, valorización del campo de gestión de facturas electrónicas (#TT04641/25)
> -	WM - Análisis de disponibilidad<!-- disponibilità --> resuelto error perfil con filtro tipo documento y cálculos por columna (#TT03363/25)
> -	WM - WebAPI de importación de artículos: durante la importación de un artículo, si también se importan dimensiones y pesos, en la pestaña de pesos y dimensiones<!-- dimensioni --> se asociarán por defecto las UM de referencia respectivamente para dimensiones, volumen y pesos. (#TT04668/25)

### Patch 802.0011 - 06/11/2025

> -	BI - Llamada a scripts desde Tableros<!-- Cruscotti -->
> -	CO - procesamiento del cierre de proyecto, se buscan los datos de las dimensiones<!-- dimensioni --> de tipo proyecto o también proyecto habilitado (#TT04783/25)
> -	CPQ - Corregida inicialización del servicio webapi
> -	FI - la contabilización de honorarios ahora asigna la fecha de competencia IVA según la configuración de la causa (fecha reg o fecha doc.). (#TT04422/25)
> -	FI - revisión de la contabilización de datos IVA en caso de importes IVA llevados a cero en el resumen de la factura de compra. (#TT01757/25)
> -	MES - MES Solution - Resolución de diversas anomalías durante la detección de valores del Control de artículos y desbloqueo de la orden al cambiar el Centro de trabajo.
> -	MS - Corregido bug que, si se lanzaba la planificación general con ejecución mrp y con el formulario MRP abierto, para visualizar los datos del procesamiento del formulario MRP era necesario cerrarlo y abrirlo de nuevo. (#TT00943/25)
> -	MS - Corregido bug en Capacidad de centros de trabajo relacionado con una visualización incorrecta de los tiempos de espera de cola presentes en las fases de los ciclos de trabajo. (#TT04629/25)
> -	MS - Corregido bug al liberar órdenes planificadas de producción que generaba órdenes de cuenta a tercero<!-- conto lavoro --> con cantidad errónea si en BOM se usaba una UM alternativa. (#TT04708/25)
> -	MS - En capacidad de centros de trabajo, si ocurre un desplazamiento de fase en un día en el que el centro de trabajo ya está completamente ocupado, se muestra un mensaje de error. De lo contrario, el día se satura hasta el máximo y el resto del tiempo (de la fase desplazada) se reparte en los siguientes días laborables según la capacidad máxima, independientemente de la carga de trabajo ya presente. (#TT03527/25)
> -	QY - Reclamos - Solucionada anomalía encontrada al crear un perfil en el formulario de gestión; se generaba una excepción, (#TT04731/25)
> -	Solucionado el problema de notificación de errores en la integración WebApi/BizLink
> -	Solucionado problema de integración WebApi/BizLink para algunos formatos.
> -	SCS - En la importación Web API de Recepción de mercancía, se considera la cantidad introducida (#TT04163/25)
> -	SD - Creación DDT desde Lista de recolección UDC: al crear el DDT desde una lista UDC, si la orden de cliente de origen contiene líneas de tipo Notas o Gastos, ahora se integran en el DDT con el flag “En factura” activo. (#TT04486/25)
> -	SD - Pedidos de Cliente: Modificaciones de layout en la pestaña Costos de Artículo. Las modificaciones en la forma SalesOrder pueden impactar los perfiles. Ref ticket (4597/25)
> -	SD - Revisión de importación de documentos de venta mediante webapi para la gestión de colección de impuestos: si está valorada en el archivo, Fluentis toma el dato, en caso contrario usa los algoritmos estándar (#TT04695/25)
> -	SD - Revisión del valuation de intervenciones en sociedad con tax engine activa, exclusión del bloqueo por IVA faltante y recálculo de impuestos en factura (#TT04713/25)
> -	SD - Para ofertas jerárquicas, visualización de la pestaña Impuestos si la sociedad usa tax engine. Las modificaciones en la forma SalesOffer pueden impactar los perfiles (#TT04791/25)
> -	SH - Corregido caso de no ejecución de stored procedure en transiciones de workflow, ejecutando el cambio de estado wf desde la cuadrícula de búsqueda de documentos (#TT04415/25)
> -	SH - Cierre de tabla Áreas. Modificaciones en Area form pueden impactar perfiles (TT03006/24)
> -	SH - webapi de import FSLedgerAccount, revisión de gestión destinatarios/destinos (#TT04641/25)
> -	SH - Report designer - Garantizar que ItemNature por defecto esté configurado (#TT04702/25)
> -	En la plataforma Web no se cargaban los scripts ViewModel personalizados (#TT04847/25)
> -	WM - Mejorado y optimizado el informe "Explosión de lista de materiales". Seleccionando el flag Resumido se presentan artículos agrupados por código si el flag es multi-nivel, o para toda la lista si es mono-nivel. (#TT04557/25)
> -	WM - Solucionado problema en registro de almacén<!-- registrazione di magazzino --> - no proponía el costo al seleccionar múltiples lotes desde ayuda de lotes (#TT04898/25)
> -	WMS - Gestión de chequeo - Error no gestionado al cerrar chequeo. (#TT04750/25)
> -	WMS-Fix Maui CheckRowManagement Filter expand problem. Modificaciones en la forma de filtro pueden impactar perfiles. (#TT01258/21)

### Patch 802.0010 - 28/10/2025

> -	ARM - Corrección en plantillas de grilla compacta para propiedades con estereotipo
> -	CO - Revisión del procesamiento de cierre de proyecto en el procesamiento de períodos de control (#TT04783/25)
> -	CO - revisión de visualización de pestaña de desvíos en comparación de reclasificaciones (#TT04759/25)
> -	Framework - Desactiva grillas compactas en ayudas
> -	MS - Corregido bug en procedimiento MRP que, en algunos casos, presentaba resultados discordantes de lo visto en análisis de disponibilidad<!-- disponibilità -->. (#TT04605/25)
> -	Revisión de valorización de intervenciones para tax engine (#TT04721/25)
> -	SCM: Nir - corrección de fuentes de lotes y cantidades residuales para varios lotes, también corrección del cargue de almacén<!-- magazzino --> para Nir #TT04615/25
> -	SCS - Órden de cuenta a tercero<!-- conto lavoro -->, corregida anomalía que causaba la repetición de mensajes de error al sustituir artículo, de no ficticio a ficticio, en líneas de orden (#TT03838/25)
> -	SD - Pedidos de Cliente: Implementación de Costos de Artículo en Artículos de Pedidos de Cliente  
    Se ha introducido una nueva pestaña "Costos de artículo" dentro de la sección Artículos de Pedidos de Cliente, para asociar a cada línea el proveedor preferencial y su costo de compra. La pestaña no incluye referencia directa al artículo, ya que el costo está asociado al artículo vendido en la línea del pedido. Se gestionan tipos de origen de costo y en los Parámetros de Pedidos de Cliente se puede definir el origen del costo por defecto.
    Las propiedades de los Costos Materiales son:
    Costo unitario y total
    Porcentaje y valor del recargo
    Valor del beneficio
    Origen del costo (almacén<!-- magazzino -->, lista, orden, factura)
    Referencias a documentos de compra (lista, orden, factura)
    Al crear una nueva línea de pedido cliente (no derivada de oferta), los datos se ingresan automáticamente en la pestaña Costos de artículo, según el proveedor preferencial y el tipo de origen de costo definido en parámetros del pedido.
    Si el pedido de cliente deriva de una oferta CRM, los datos se copian de la pestaña Materiales para el material con el mismo código de la línea de la oferta manteniendo la lógica de origen del costo.
    Impacto procesos
    El procedimiento de generación de Orden de Compra desde Pedido de Cliente se actualizó: si existen, se usan proveedor, lista y costo de la pestaña Costos de artículo; en caso contrario, se mantiene la lógica actual.
    Modificaciones en la forma SalesOrder pueden afectar perfiles
    Ref ticket (4597/25)
> -	SD - Solucionado problema de Tiles de Ventas (#TT01258/21)
> -	SD - Revisión de la valorización de centros de costo cuando la prioridad es en la ficha del artículo y existen múltiples centros (#TT04670/25)
> -	SH - En empresas con tax engine activa, al modificar el subcuenta<!-- sottoconto --> de cabecera del documento se recalculan los impuestos del documento (#TT04699/25)
> -	SH - agregado nuevo parámetro para importar web api de FSLedgerAccount
> -	Corregido bug en edición de configuración webapi para formato json
> -	Corregido bug para habilitar campos adicionales en widget de actividad de supervisor
> -	WM - Actualización del costo real para los lotes en movimientos de entrada a almacén<!-- movimenti di carico a magazzino -->, provenientes de distintas áreas (ventas, compras, producción, tercerizado) (TT04267/25)
> -	WM - Análisis de disponibilidad, al cambiar el artículo en el filtro y volver a lanzar la búsqueda, la cuadrícula de detalle se actualiza según el nuevo artículo (#TT03562/25)
> -	WM - Planes de Carga - Restablecimiento de cantidad residual de pedido cliente al cancelar Plan de Carga con Picking (TT04272/25)
> -	WM - Packing List - Corregido cambio de estado a “Facturado” añadiendo UDC (#TT04626/25)

### Patch 802.0009 - 28/10/2025

> -	CO - Asientos de reajuste: habilitada la exportación de la cuadrícula. Modificaciones en el form pueden impactar los perfiles (Ref. Ticket TT04136/25)
> -	FI - Comunicación de liquidaciones periódicas de IVA: Resuelto un problema en la creación de LIPE (Ref. Ticket TT04659/25)
> -	FI - revisión de contabilización de documentos por error agrupando centros de costo. (#TT04658/25)
> -	FI, PR - habilitada la multi selección en los combos de Pagos a proveedores, Creación automática pagos a proveedores y Gestión apoyo pagos. Las modificaciones en estos forms pueden afectar perfiles (TT03917/25)
> -	MS - Corregido bug en procedimiento MRP que, en algunos casos, calculaba incorrectamente la fecha final de las órdenes planificadas de compra (#TT04624/25)
> -	SD - En la conversión de Contacto CRM a Maestro cliente, se transfieren los Extra Data si están habilitados (#TT04525/25)
> -	Corregido bug al mapear campos nulos con archivos Json

### Patch 802.0008 - 27/10/2025

> -	CRM - corregido caso que no permitía insertar actividades continuas en los workflows de contactos de campañas de marketing (#TT04302/25)
> -	CRM - resuelto caso por el cual clicando el correo de un contacto CRM, se presentaba una anomalía. Ahora es posible abrir directamente el gestor de correo instalado en el pc. (#TT04550/25)
> -	FI - contabilización de honorarios en honorario creado por liquidación agentes, bloqueo de recálculo enasarco (#TT04577/25)
> -	MS - Corregido bug en planificación general que generaba en algunos casos órdenes planificadas con cantidad doble (#TT04502/25)
> -	MS - Corregido bug en la ejecución del procedimiento MRP (#TT04604/25)
> -	MS - Corregido cálculo de inicio y fin de tiempo en Secuencia de fases (#TT03529/25)
> -	PR - anticipos, revisión gestión tipo importe 'imponible'. Modificaciones en los filtros pueden afectar perfiles (#TT04280/25)
> -	PR - impresión de lista de facturas anticipadas/cobradas, revisión del método repository para gestionar filtro de cobradas. Modificaciones pueden afectar perfiles (#TT04572/25)
> -	WM - Duplicar artículos - posibilidad de extender para otras propiedades a duplicar (#TT04607/25)
> -	WM - Trazabilidad de lotes: corregido control de validez de componentes en lista de materiales (TT04524/25)

### Patch 802.0007 - 22/10/2025

> -	ARM - Plantilla predeterminada simplificada para script de flujo de trabajo
> -	CRM: en propuesta de datos de un contacto CRM, si el campo NIT está vacío se indica obligatoriedad. En versión web eliminado de la vista el campo Tax Identification Number en caso de empresa no USA (#TT04456/25)
> -	FI - Creación de honorarios desde documentos de compra entrantes: resuelto error al crear honorario debido a una descripción muy larga y revisados los cálculos en resumen de datos IVA (Ref. Ticket TT02622/25)
> -	FI - Impresión de IVA periódica - Completada implementación del régimen IVA Art 74 DPR 633/72 Trimestrales “por naturaleza”. Alineada impresión de liquidación periódica de IVA y cálculo (sin intereses trimestrales) en Comunicación trimestral de liquidaciones. (#TT03154/25)
> -	FI - revisión de mensajes de confirmación al guardar registros contables (#TT04552/25)
> -	MES - Corregido bug, que ocurría al liberar una orden planificada de producción de menor nivel sin haber liberado la orden padre; si se creaba un lote para esa orden y luego se liberaba la orden planificada padre, no se asociaban correctamente los datos de campo SourceProductionOrder (#TT04449/25)
> -	MS - Corregido bug en costeo de órdenes que no calculaba correctamente el tiempo máquina si el centro de trabajo tenía tiempo fijo (#TT04500/25)
> -	MS - Corregido bug en secuencia de fases top down grid que impedía filtrar por descripción cliente luego de arrastrarla desde el object navigator (#TT04489/25)
> -	MS - Corregido error al guardar orden en ausencia de almacén<!-- magazzino -->/causa<!-- causale --> en pedido de cliente (#TT04543/25)
> -	PM - cálculo SAL - corregida inclusión de gastos aún si la actividad declarada tiene tiempo total 0 (#TT04384/25)
> -	PM - Corregido cálculo SAL para que considere costos e ingresos desde contabilidad (#TT04540/25)
> -	PR, SH, WM - revisión de ejecución de filtro automático en Control remesas, Matriz aplicación impuestos, Impuestos, Tipos de impuesto en socio, Tipos de impuesto en documentos, Tipos de impuesto en artículo de compra y venta (#TT04520/25)
> -	Propaga el código de nomenclatura desde PurchaseDeliveryNoteItem y SubcontractorItem hacia el artículo de la factura de compra (TT04504/25)
> -	Revisión de procedimientos de carga de almacén<!-- magazzino --> para valoración de centros de costo en varias dimensiones<!-- dimensioni --> (#TT04277/25)
> -	SCM - Al duplicar órden de proveedor, el flag Precio manual ahora se asigna también en el nuevo pedido, si está presente en el original (#TT04446/25)
> -	SCS - Corregida anomalía en el cálculo de costo de artículos al registrar una devolución de cuenta a tercero<!-- conto lavoro -->, si la valoración de materiales es a costo último y por lote y orden de producción (#TT04474/25)
> -	SD - Corregida actualización de estado de cumplimiento de pedido cliente tras crear una Lista de Recolección UDC y una factura generada desde esa lista (#TT04412/25)
> -	SD - Creación de factura de venta desde Picking: al guardar la factura, tras modificaciones, se muestra mensaje si existen facturas de anticipo asociadas al cliente del documento (#TT04460/25)
> -	SD - Listas de Precios de Venta: añadido control para tipo de cuenta al crear listas personalizadas, solo se permiten para cuentas cliente. Modificaciones pueden impactar perfiles (#TT04472/25)
> -	SD: en vencimientos de facturas, nuevo campo en base de datos para almacenar enlaces de pagos online (#TT04563/25)
> -	SH - revisión de webapi de import FSLedgerAccount, revisión gestión update en colección CustomerSupplierAccountPublicAdministrations (#TT04506/25)
> -	WM - Corregido cálculo erróneo de disponibilidad en almacén<!-- magazzino --> externo (#TT04532/25)

### Patch 802.0006 - 16/10/2025

> -	CO - toma de datos desde producción en controlling, los valores de proyecto tomados de devoluciones de cuenta a tercero<!-- conto lavoro --> ahora usan el precio neto de línea y no el bruto (#TT04478/25)
> -	FI - corregido cálculo de intereses trimestrales IVA en liquidación periódica. Ya no se reportan en el cuarto trimestre, según instrucciones ministeriales. Ref. #TT00124/22
> -	FI - corregido problema que no traía los datos de centros de costo de órdenes en asientos de ajuste (TT03979/25)
> -	FI - Creación de honorario desde documentos de compra entrante: solucionado problema relativo a la creación de un nuevo contacto y al cálculo de filas dentro del honorario (Ref. Ticket TT01805/25)
> -	MES - Declaraciones de producción desde MES - Corregida anomalía que, presionando dos veces el botón [Avanzar], creaba una declaración doble. (#TT04436/25)
> -	MES - Verticalización Pharma - Órdenes de producción - Corregida anomalía que no refrescaba el formulario al cambiar el estado a "Parcialmente asociado", no actualizaba automáticamente la grilla de detalle de Lotes. (#TT04063/25)
> -	MES - Verticalización Pharma - Órdenes de producción - Corregida anomalía que no decrementaba la "Cantidad total" de consumo del material principal al asignar una "Cantidad total" a materiales alternativos. (#TT04062/25)
> -	MS - Corregido bug en costeo de órdenes de producción que no valoraba correctamente el costo de setup (#TT04167/25)
> -	SCM - Detalle de líneas de órdenes: Resuelto caso donde se aplicaban cambios también a líneas no seleccionadas, si se deseleccionaban tras aplicar un filtro en la grilla (#TT04404/25)
> -	SCM Nir - corregidas fuentes de lotes y cantidades residuales. (#TT04344/25)
> -	SD - Habilitado modificar transportista en DDT de Venta valorados pero aún no movidos a almacén<!-- magazzino --> (#TT03807/25)
> -	SD - Corregido cálculo de comisión agente en pedidos cliente que se ponía en cero si el porcentaje agente era manual en líneas y había descuento final (#TT04058/25)
> -	SD - Creación DDT desde Picking: corregida anomalía por la cual a veces no se traía Destinatario y Destino de la Orden cliente por agrupación de destino (#TT04275/25)
> -	SD - La salida de almacén<!-- magazzino --> valora los centros de costo a cargo de almacén evaluando la dimensión<!-- dimensione --> de los centros (#TT04277/25)
> -	SD - Modificada lógica de impresión de Comisiones acumuladas, ahora la muestra aunque el total factura sea cero, en caso de anulación de anticipos, si el agente tiene el criterio de acumulación en factura emitida. Ref #TT04367/25
> -	SD - En la creación de DDT, Facturas o Picking desde Pedidos, DDT, POS, Picking, Listas de recolección UDC, Listas de transferencia UDC, Envios o Intervenciones, implementado control que impide generar documento si el cliente está bloqueado en el Lock Manager (#TT04207/25)
> -	SD - Pedidos Cliente: posibilidad de abrir Propiedades Pedido Cliente de distintos pedidos (ref.ticket 4409/25)
> -	SD - Comisiones por Rango Descuento: para el cálculo correcto del porcentaje, la % de descuento para buscar el rango se calcula como: total descuento línea (sin redondear) dividido cantidad línea y el resultado dividido precio línea, el resultado sin redondear es la % de descuento para buscar el rango correcto (ref ticket 4408/25)
> -	SD - Revisión de creación de compensación a perceptores desde liquidación agentes con opción ‘No recalcular enasarco’, caso con subcuenta<!-- sottoconto --> de facturación activa (#TT04247/25)
> -	SH - Documentos Sdi: habilitado el envío masivo de Documentos de Venta salientes también para archivos Sdi importados externos (#TT03619/25)
> -	WM - Análisis de Disponibilidad: disponibilidad de devoluciones de cuenta a tercero<!-- conto lavoro --> desvinculada del almacén<!-- magazzino --> del material (#TT04419/25)
> -	WM - Análisis de disponibilidad: excluida la existencia en ubicaciones bloqueadas (#TT04477/25)
> -	WM - corregida imposibilidad de ingresar lote económico en parámetros MRP de artículo si la unidad de medida no tiene decimales (#TT04418/25)
> -	WM - corregida no actualización de lote económico en parámetros mrp si um sin decimales (#TT04481/25)
> -	WM - revisión de tests de cuadratura de cantidades en movimientos de centros de costo de registros de almacén<!-- movimenti dei centri di costo delle registrazioni di magazzino -->, evaluación para dimensión<!-- dimensione --> de los centros (#TT04488/25)
> -	WMS - Corregido error en Recepción de mercancía al guardar y recalcular vencimientos (#TT04454/25)

### Patch 802.0005 - 14/10/2025

> -	SH - Importación de Contactos - Corregida anomalía en esquema de importación (#TT04225/25)
> -	WMS - Corregida anomalía en la pestaña artículos del formulario de gestión de chequeo y confirmación picking, donde no se mostraba el número correcto de decimales. Los cambios pueden afectar perfiles (#TT04208/25)

### Patch 802.0004 - 09/10/2025

> -	Actualización del parser de sistemas de exportación de nómina
> -	CO - Valoración de Lista de Materiales - Corregido cálculo del Costo del artículo. El costo incluye la repartición del costo de preparación según cantidad del parámetro Lote (parámetro requerido para ejecución del reporte): Costo materiales + Costo procesos: máquina, mano de obra y externos + Costo preparación / Lote. (#TT04238/25)
> -	FI - Blazor - crash al contabilizar en widget de cuenta por URI demasiado grande (TT04354/25)
> -	FI - corrección de índices (TT04299/25)
> -	FI - Corregido cálculo LIPE erróneo con IVA no deducible y Pro-Rata (TT03934/25)
> -	FI - implementado traspaso automático de IVA no deducible para pro-rata al imprimir o contabilizar liquidación periódica. Cambios en FSGeneralLedgerParameter y PeriodicalVatSettlmentReport forms pueden impactar perfiles (TT04295/25)
> -	FI - revisión de contabilización de facturas para valorización de dimensión de proyectos (#TT04328/25)
> -	FI - SafTGeneralLedgerEntryFilterResults - agregada opción "Agrupado" por defecto 0. Cambios en objeto SafTGeneralLedgerEntryFilter pueden impactar perfil. (TT04178/25)
> -	MES - Corregida anomalía en registro de declaraciones de producción si se insertaba una cantidad rechazada para un material (#TT04110/25)
> -	MES - Corregidas anomalías en pantalla MES operadores; los inactivos se proponían como activos en siguientes declaraciones o bloqueaban la orden de producción (#TT04122/25)
> -	MS - Implementado en pedidos independientes/previsionales (no examinados o planificados) la posibilidad de modificar fechas de inicio y fin de previsión (#TT03335/25)
> -	MS - En la gestión de ciclos y fases corregido el filtro estado por defecto en cada pestaña y añadido filtro ExtraData, para visualizar estos datos en ciclo, fases y artículo de ciclo (#TT03893/25)
> -	MS - Al añadir manualmente una fase en un pedido planificado o de producción, ahora se reporta correctamente el flag movilizable (#TT04269/25)
> -	MS - Optimizado el refresco de grillas en el formulario de secuencia de fases si se modificaba el campo notas (#TT04306/25)
> -	PM - WEB - intervenciones - corregida casuística por la que los campos vacíos no eran editables (#TT04334/25)
> -	PM - WEB restablecida funcionalidad del WBS asignación de recursos - drag&drop de citas (TT04368/25)
> -	PM - WEB valoración de intervenciones - restablecido botón "valoración" que desde web estaba deshabilitado (#TT04307/25)
> -	PR - Corregido error al agrupar notas de crédito con facturas en recibos bancarios (TT03636/25)
> -	QY - Calibración instrumentos - Corregida anomalía de gestión de decimales en valores a detectar/registrar si el Instrumento no tiene unidad de medida (#TT04371/25)
> -	Resuelto problema al guardar actividades del supervisor (TT04332/25)
> -	SCM - La importación Web API de DDT calcula correctamente los vencimientos (#TT04223/25)
> -	SCS - Cuenta a tercero<!-- Conto lavoro --> de fase: corregida anomalía que actualizaba el estado de la Orden de Producción tras cerrar una orden con última fase externa, incluso si había pedidos superiores aún ejecutivos (#TT03393/25)
> -	SD - Habilitada posibilidad de modificar Fecha entrega y Fecha mercancía lista en Pedidos Cliente que han generado automáticamente Proyecto y Orden de Producción. Cambios en SalesOrder form pueden impactar perfiles (#TT03882/25)
> -	SD - Al duplicar DDT, Facturas o POS, si no se encuentra una tasa de IVA válida entre declaración de intención, ficha cliente o artículo, se propone el código IVA del documento de origen (#TT03962/25)
> -	SD - En cumplimiento de Pedido cliente en DDT o Factura se reporta también la hora de inicio de transporte (#TT03386/25)
> -	SH - Corregida anomalía que a veces cambiaba estado de Workflow al usar flechas teclado (#TT04285/25)
> -	SH - DataSources - Considerar fórmulas simples como Criterion de Devexpress (TT04074/25)
> -	SH - webapi sobre FSLedgerAccount, revisión asignación de código subcuenta<!-- sottoconto --> para cuentas con número máximo alcanzado (#TT04339/25)
> -	SH - WEB - en reportes que requieren filtros en previsualización, corregida ubicación de labels (#TT04338/25)
> -	WM - Diferencias Inventario: añade artículos a 0 también para lotes con otros lotes del artículo listados (#TT03865/25)

### Patch 802.0003 - 03/10/2025

> -	BI - pivote - añade comando Exportar a Excel en menú contextual
> -	FI - ‘Nuevas opciones para declaración fiscal Ro 394’. Cambios en declaration 394 form pueden impactar perfil (TT04183/25)
> -	FI - solucionar declaración RO D300
> -	FI - al modificar categoría de bien cambia el subcuenta patrimonial en cabecera de bien (#TT03931/25)
> -	FI - revisión de tests de cuadratura en contabilización de facturas con obsequios (#TT03708/25)
> -	FI - Análisis de Centros de Costo: revisión de lógica propuesta de totales (#TT03996/25)
> -	MS - Fase sujeta a control de calidad en Ciclo de producción - Tipo plan de control insertable aunque la fase esté sujeta a Control de calidad sin confirmar valores (cambio de línea).(#TT04190/25)
> -	PM - Resuelta casuística que bloqueaba valoración de intervenciones (#TT04266/25)
> -	QY - Arreglos en planificación de calibraciones (TT03064/25)
> -	  QY - Se implementaron diagramas generales para relaciones entre: (Reclamo y Acciones correctivas; No conformidad y Acciones correctivas; Acción correctiva padre e hijas; Curso básico y Cursos de formación - #TT03480/25)
> -	SCM - verticalización Pharma - Ediciones - Ahora es posible modificar: Se puede modificar: "Comprable", Fecha inicio, Fecha fin y Observaciones, antes no editables.
> -	SD - Solucionado error que duplicaba descuentos finales derivados del tipo de pago, en todos los procedimientos de cumplimiento (#TT03745/25)
> -	SD - Descuentos Oferta - Posibilidad de no modificar, ver, eliminar o crear descuentos en cabecera oferta vía permiso FSSalesOfferPredefinedDiscount (#TT003853/25)
> -	SD Pos- Corregido problema en lectura de código de barras (#TT01258/21)
> -	SD - Elimina facturas con más de 2100 artículos (#TT04134/25)
> -	WM - Optimizdo el algoritmo de valoración de almacén<!-- magazzino --> para UDC (#TT04132/25)
> -	WM - Tipo de retiro FIFO de lotes no considera ubicaciones bloqueadas (#TT03598/24)
> -	WMS - Gestión de chequeo: chequeos múltiples con registros de salida diferenciados (#TT04029/25)

### Patch 802.0002 - 25/09/2025

> -	FI - Declaración 300 y 394 para RO - código vat 11 y 21 (TT04041/25)
> -	FI - liquidación de IVA periódica, agregado enlace a fichas para configurar la sociedad que presenta la comunicación por otro contribuyente. Cambios en periodic vat calculation form pueden afectar perfiles (#TT04050/25)
> -	FI - proponer departamento en postingCostCenter (TT04126/25)
> -	MES - Corregida anomalía en declaraciones de producción que no insertaba correctamente el valor en el registro de almacén<!-- registrazione di magazzino --> si el centro de costo tenía una unidad de medida. (#TT03519/25)
> -	PM - procedimiento de generación de factura de venta desde proyecto, se gestiona caso de falta de mensaje de bloqueo si el cliente está bloqueado en Lock Manager (TT03721/25)
> -	PM - corregido caso por el que al generar factura desde intervenciones, con retención, solo se reportaba como referencia y no se calculaba en totales (#TT03799/25)
> -	SCS - Lista de materiales, detectado caso con cantidad padre de un componente igual a cero, causa anomalía al explotar nivel de estructura en orden de cuenta a tercero<!-- conto lavoro --> (#TT03891/25)
> -	SD - Corregida anomalía que en algunos casos no liberaba cantidad residual de lote tras la entrega forzada de Pedido cliente a DDT de Venta (#TT03588/25)
> -	SD - Creación Facturas desde DDT: corregidos errores en la valoración de DDT de transferencia con artículos gestionados por lotes y DDT con artículos de igual código de lote en múltiples líneas (#TT03901/25, #TT04043/25)
> -	SD - Gestión de anticipos: Corregida la actualización del residuo anticipo en caso de anulación parcial. Habilitado cierre forzado vía flag, incluso en facturas contabilizadas o con documento Sdi generado (#TT03759/25)
> -	SD - Si el parámetro 'Código operador obligatorio' está activo en factura, la función 'Creación desde DDT' copia el operador del DDT en entrega 1-1, mientras que en entrega n-1 no se genera (#TT04107/25)
> -	SD - Resuelta anomalía al duplicar DDT y Facturas de Venta que aplicaba la tasa IVA cliente también a líneas tipo Nota (#TT04147/25)
> -	SD - Corregido problema de visibilidad en campo Descripción agente para la nota de venta. Cambios en SalesDeliveryNote pueden afectar perfiles (#TT01258/21)
> -	SH - Webapi de import FSLedgerAccount, revisión gestión bancos de apoyo y datos de crédito (#TT04082/25)
> -	WM - Maestro de lotes: Añadidos campos "Cantidad comprometida", permite ver documentos y cantidades con las que el lote está comprometido, y "Cerrado forzosamente", indica la liberación por entrega forzada (#TT03787/25)
> -	WM - Corregido filtro sobre componentes caducados en inserción masiva en lista de materiales (#TT04070/25)
> -	WM - Ocultados datos sensibles (costos) en expander del artículo (#TT02167/25)
> -	WM - Corregido cálculo de stock en grilla de maestro de lotes (#TT04045/25)

### Patch 802.0001 - 19/09/2025

> -	CO - Corregida anomalía en cálculo de costo con listas de precios con UM diferente a la principal (#TT03766/25)
> -	CO - modificado algoritmo de creación de cierre de privado a virtual (#TT03923/25)
> -	CO - revisión ‘Re-toma de amortización de bienes’ en cierres interanuales, optimización (se recomienda ejecutar con opción ‘registro único’ activo) (TT03929/25)
> -	CRM - El agente principal se reporta en cabecera de Oferta incluso si el contacto CRM no tiene ficha contable asociada (#TT02925/25)
> -	FI - causales automáticas, revisión gestión de subcuentas<!-- Sottoconti automatici --> automáticas (#TT03869/25)
> -	FI - Corregido comportamiento del filtro Categoría administrativa en generación y generación automática de reclamaciones (#TT03618/25)
> -	FI - Declaración 300 y 394 para RO - código vat 11 y 21 (TT04041/25)
> -	FI - Fixed assets: nueva opción de contabilización depreciación para F2025 - Reevaluación de amortización de bienes (TT00384/25)
> -	FI - revisión de import desde DocFinance para exclusión de bloqueos en busca de reclamaciones (#TT03926/25)
> -	FI - imprimir Liquidaciones de Agentes - vacía (TT03928/25)
> -	Resuelto bug en exportaciones múltiples (#TT03916/25)
> -	SD - Facturas de venta: en facturas diferidas, activar el flag Impresa tras imprimir el documento ya no llama la función de descarga automática (#TT03689/25)
> -	SD - Los campos CIG y CUP de la cabecera del Pedido Cliente se transfieren también al Proyecto generado, y durante el cumplimiento a Pedido Cliente también se pasan a las líneas de artículo procedentes del proyecto (#TT03627/25)
> -	SD - Los DDT valorados en la misma factura pueden descargarse por separado. Las facturas generadas desde DDT solo pueden descargarse si son inmediatas y con flag Desvincular DDT, si no la descarga se realiza desde los DDT. Para facturas inmediatas, cuando todos los DDT están descargados, activar el flag Impresa en factura activa también el flag Descargada (#TT03152/25)
> -	SH - añadir FilterName y FilterPath en DashboardDatasource
> -	SH - inicio rápido, valoración de cuadrícula de detalle de nature transacciones intrastat (#TT03930/25)
> -	SH - revisión de webapi de import del objeto FSLedgerAccount para gestión de agentes (#TT03911/25)
> -	Corregido bug para editar BizLink Parser Objects
> -	WM - Corregido bug en cierre de almacén<!-- magazzino --> con UDC. Corregido bug en “Agregar/mover artículos” presente en gestión UDC (#TT03596/25)
> -	WM - Corregido filtro almacén<!-- magazzino --> en llamada API GetItemsAvailability. (TT03867/25 )
> -	WM - En análisis de disponibilidad<!-- disponibilità --> mejora presentación de número de documento, si de órdenes de producción muestra: 
> -	WM - En confirmación picking de artículos gestionados a lotes se actualiza cantidad de línea también en primera sobre-entrega (#TT04004/25)
> -	WM - Optimizada visualización en análisis de disponibilidad<!-- disponibilità --> de órdenes y declaraciones de producción (#TT03754/25 - #TT01102/25 - #TT04027/25)
> -	WM - Optimizado y acelerado el cargue de picking en el formulario de filtro de picking (#TT03764/25)
> -	WM - Renombradas las etiquetas de stock en análisis de disponibilidad<!-- disponibilità -->: “Stock, Stock Disponible, Stock No Disponible” a “Stock Operativo, Stock Operativo Disponible, Stock Operativo No Disponible”.
> -	WMS - "número órden de producción - número de lote" y si declaración de producción muestra: "número órden de producción - número de lote - número declaración de producción". (#TT04069/25)