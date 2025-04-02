---
title: Notas de la versión 704 (Patch notes Versione 704)
sidebar_position: 1
---

### Patch 704.1-0031 - 16/05/2024
> - PR - corregido bug que utilizaba en el flujo de caja la cuenta del cliente trzista para fases externas en el pedido de trabajo en lugar del proveedor real (#TT02034/24)  
> - FI - revisión de las fechas de competencia económica asignadas a los registros de reapertura de los ajustes desde el cierre de cuentas automático (#TT01535/24 - #TT01814/24)  
> - FI - en la compensación de partidas, revisión de la gestión de filtros de partidas respecto al tipo de compensación, gestión de decimales en los campos en cuadrícula (#TT02113/24)  
> - SH - Arrastre de imágenes: establecido el tipo de archivo del documento como 'JPG' cuando la extensión del archivo es 'JPEG' (#TT02210/24)  
> - SD - Versiones de ofertas visibles correctamente en función del indicador "mostrar todas las versiones" también en las pestañas de los estados del flujo de trabajo (#TT02228/24)  

### Patch 704.1-0030 - 09/05/2024
> - WMS - En el formulario Lista de transferencia UDC se ha añadido el estado de la lista tanto como filtro como columna en la cuadrícula de resultados (#TT03338/23, #TT02030/24)  
> - SCM - En el registro de artículos, pestaña Listas de Proveedores se han añadido las columnas relativas a Código y Descripción de variante (#TT01851/24)  
> - SCM - En la cuadrícula del Navegador de artículos se han añadido las columnas relativas a Código y Descripción de variante (#TT01890/24)  
> - WMS - Ahora en el formulario Recepción de Mercancías del WMS, si en los parámetros de almacén carga/descarga para el usuario está asociado un solo almacén, se propone por defecto ese; de lo contrario, si hay más de uno asociado, por defecto no se propone ninguno y el usuario puede elegir solo entre uno de los que están introducidos (#TT01909/24)  
> - WMS - Ahora en el formulario Carga de artículo del WMS, si en los parámetros de almacén carga/descarga para el usuario está asociado un solo almacén, se propone por defecto ese; de lo contrario, si hay más de uno asociado, por defecto no se propone ninguno y el usuario puede elegir solo entre uno de los que están introducidos (#TT01892/24)  
> - WMS - Ahora en el formulario Descarga de artículo del WMS, si en los parámetros de almacén carga/descarga para el usuario está asociado un solo almacén, se propone por defecto ese; de lo contrario, si hay más de uno asociado, por defecto no se propone ninguno y el usuario puede elegir solo entre uno de los que están introducidos (#TT01893/24)  
> - WMS - Ahora en el formulario Mover artículo del WMS, si en los parámetros de almacén carga/descarga para el usuario está asociado un solo almacén, se propone por defecto ese; de lo contrario, si hay más de uno asociado, por defecto no se propone ninguno y el usuario puede elegir solo entre uno de los que están introducidos (#TT01894/24)  
> - WMS - Ahora en el formulario Ajuste de artículo del WMS, si en los parámetros de almacén carga/descarga para el usuario está asociado un solo almacén, se propone por defecto ese; de lo contrario, si hay más de uno asociado, por defecto no se propone ninguno y el usuario puede elegir solo entre uno de los que están introducidos (#TT01895/24)  
> - WMS - Ahora en el formulario Existencia de artículo del WMS, si en los parámetros de almacén carga/descarga para el usuario está asociado un solo almacén, se propone por defecto ese; de lo contrario, si hay más de uno asociado, por defecto no se propone ninguno y el usuario puede elegir solo entre uno de los que están introducidos (#TT01896/24)  
> - WMS - Ahora en el formulario Listas de recogida UDC del WMS, si en los parámetros de almacén carga/descarga para el usuario está asociado un solo almacén, se propone por defecto ese; de lo contrario, si hay más de uno asociado, por defecto no se propone ninguno y el usuario puede elegir solo entre uno de los que están introducidos (#TT01905/24)  
> - WMS - Ahora en el formulario Gestión UDC del WMS, si en los parámetros de almacén carga/descarga para el usuario está asociado un solo almacén, se propone por defecto ese; de lo contrario, si hay más de uno asociado, por defecto no se propone ninguno y el usuario puede elegir solo entre uno de los que están introducidos (#TT01906/24)  
> - WMS - Ahora en el formulario Listas de Transferencias UDC del WMS, si en los parámetros de almacén carga/descarga para el usuario está asociado un solo almacén, se propone por defecto ese; de lo contrario, si hay más de uno asociado, por defecto no se propone ninguno y el usuario puede elegir solo entre uno de los que están introducidos (#TT01903/24)  
> - FI - registro de pago/ingreso en moneda extranjera, si los pagos son de la misma moneda que el encabezado del registro y no hay líneas manuales, entonces el total del documento en moneda corresponde al valor en moneda cerrado. Si hay pagos en otras monedas y/o líneas manuales, entonces el total en moneda será el cálculo del contravalor moneda del total debe/haber en moneda de la empresa (#TT1703/24)  
> - SD - En la creación de archivo Sdi en facturas/notas de crédito en moneda, revisión de la gestión de redondeos (#TT1703/24 - #TT02135/24)  

### Patch 704.1-0029 - 06/05/2024
> - SH - Nuevo mensaje de aviso si al establecer el registro de una persona física no se completan el nombre y apellido y nuevo mensaje de error generando el archivo de la factura electrónica sin estos datos (#TT01700/24)  
> - PR - Revisión de recuperación de datos de reintegros de cuenta de trabajo en el flujo de caja (#TT01934/24)  
> - PM - El valor de los extras de la fecha de proyecto se carga en la cuadrícula del formulario de búsqueda (#TT01740/24)  
> - PM - Resuelto caso en "Imprimir detalle del proyecto" que no incluía asientos contables vinculados solo al encabezado del proyecto y no a los artículos (#TT01087/24)  
> - FI - Centro de costo de notas de entrega no visibles en el asiento contable del libro mayor y análisis de movimientos para el informe de centros de costos (#TT01521/24)  
> - SH - Direcciones alternas: revisión del guardado de los campos nombre y apellido dentro de las direcciones alternas (#TT01794/24)  
> - FI - Revisión de recuperación de valores de registros para sección quater (#TT01985/24)  
> - PR - Optimización del flujo de caja desde DDT de compra (#TT01754/24)  
> - FI - Asientos de ajuste: revisión de la descripción de detalle en las escrituras contables creadas automáticamente por el procedimiento (#TT00503/24)  

### Patch 704.1-0028 - 29/04/2024
> - SD - Corregido error en el Detalle de Movimientos que mostraba algunas cantidades con signo incorrecto (#TT01546/24)  
> - ARM - Forms Wizard - Sustitución fluentis: BaseView con fluentis: ViewModelResolver.  
> - WM - Corregido error que no permitía la generación de un DDT desde la Lista de Recogida UDC (#TT01595/24)  
> - Resuelto el error de crear script del lado del cliente para un espacio de nombres diferente a FluentisErp.  
> - SH - se propone el nombre del archivo de exportación en la vista previa de impresión si el documento tiene la transformación “ReportAttachFileName” (#TT00837/24)  
> - SCM - Si un documento de compra ya está cargado, no se puede cambiar el código de lote (#TT01712/24)  
> - PM - SAL de proyecto, se habilitó el drag&drop de campos desde el objeto  
> - SCM - Corregido error que proponía la misma 'Descripción del artículo del proveedor' en el procedimiento de 'Cumplimiento de pedidos', para todos los proveedores preferenciales del artículo (#TT01501/24)  
> - SH - Corregido error en el Análisis de Disponibilidad que aparecía cuando no se habían ingresado los almacenes y las causales dentro de los Parámetros de Órdenes de Producción (#TT01765/24)  
> - PM - Gestión de exportación en excel de los campos calculados en la cuadrícula del SAL (#TT01433/24)  
> - SD - La búsqueda se realiza en función de la prioridad incluso en el caso de más de una línea para el mismo tipo de comisión (#TT01695/24)  
> - SD - Corregido error que no poblaba los ‘Materiales Conai para el artículo’ en las notas de crédito (#TT01841/24)  
> - PR - revisión del cálculo del flujo de caja desde pedidos de trabajo (#TT01609/24)  
> - FI - Revisión del cálculo de partidas para facturas de compra de activos extranjeros sin movimiento IVA (#TT02800/23)  
> - FI - Revisión de liquidación de IVA de la localización croata (#TT03562/23)  
> - FI - Revisión de gestión de comisiones de agentes en contabilidad, para cobros parciales y por contabilización de facturas con total 0 (#TT01822/24)  
> - FI - Revisión de impresión definitiva de liquidación de IVA periódica de enero para guardar crédito del año anterior/crédito del periodo anterior (#TT01160/24)  

### Patch 704.1-0027 - 18/04/2024
> - ARM - Unidad de trabajo - corrección del error durante la actualización de los modelos WebApi cuando hay solo un objeto de solo lectura  
> - MES - Implementada en la lista de recogida de materiales la gestión de la cantidad residual (#TT00836/24)  
> - SD - Bloqueo de importación de facturas de venta Web Api para facturas descargadas, contabilizadas o enviadas al sistema de facturación electrónica (#TT01578/24)  
> - PM - mejorada gestión de gastos de facturas de compra en el SAL de proyecto (#TT01366/24)  
> -  SCM, SCS - Dentro de los documentos de Compras y Cuenta de Trabajo ahora es posible ingresar un transportista (#TT01132/24)  
> - SD, SCS, WM - Dentro de los documentos de Venta, Notas de Cuenta y Recogida ahora es posible ingresar un transportista (#TT01132/24)  
> - WM - Inventario a cantidad valorizado - Corregida anomalia sobre el ‘Valor unitario’, propuesto en el informe de ‘Impresión de inventario’, si se solicita la ‘Valorización a Costo medio’ y ‘Valorización a almacén’ presente en los ‘Parámetros iniciales de almacén’ (#TT01690/24)  
> - FI - registro automático relacionado con la tasa ambiental - versión RO (#TT01749/24)  
> - PM - Webapi importación declaración de actividad, corregida gestión de campo TotalTime y valores inicio-fine pausa (#TT01627/24)  

### Patch 704.1-0026 - 11/04/2024

> - FI - revisión filtro por división en impresión Subcuentas realizada desde el formulario ‘Visualización de cuentas’ (#TT01394/24)  
> - WM - Corregido título del formulario Trazabilidad de Lote (#TT01415/24)  
> - SD - Permitida la modificación del rango de fechas de competencia económica en facturas de venta con archivo Sdi creado pero no contabilizadas (#TT01038/24)  
> - SD - Bloqueo al recalcular a cero el porcentaje de comisión sobre líneas cumplidas de OC, en caso de rango de descuento y categoría de comisión de filtro (#TT01310/24)  
> - SD - Inserción de un nuevo popup de aviso en caso de que se ingrese un tipo de factura sin split payment (por lo tanto sin Causale contable asociada que tenga Tipo de movimiento ‘29’) y un cliente que sin embargo gestiona el split payment (#TT01237/24)  
> - MS - Añadido un mensaje de error en el MRP en caso de que el artículo fuera de producción pero no tuviera la lista de materiales (#TT01414/24)  
> - WM - Traducido título de la impresión Trazabilidad de Lote  
> - CO - Corregido bug que no ejecutaba correctamente el refresh del formulario seleccionando un nodo del modelo de reclasificación para ingresar los subcuentas vinculados. Mejorado mensaje al usuario de aviso para tipos de cuenta (#TT01367/24)  
> - FI - Asociación de archivo XML a perceptores: revisión de propuesta de solo archivos en estado ‘no asignado’  (#TT01317/24)  
> - PR - Corregido bug que en fase de creación de RiBa desde facturas en caso de factura y nota de crédito a agrupar sumaba en lugar de restar la NC (#TT00897/24)  
> -  Corregida la etiqueta blanca para las pestañas y widgets cuando el tema es Office2019Colorful (#TT00980/24)  
> - SCM - Al momento de la Creación de la factura de compra desde archivo XML, el precio se importa en la factura con el indicador Precio Manual activo y sin retomar el descuento interno (#TT01227/24)  
> - PM - SAL Resuelta anomalia en procesamiento masivo (#TT01439/24)  
> - WM - Corregido bug en análisis de disponibilidad que no mostraba correctamente los valores en los campos: Pedido del cliente vinculado y cantidad del pedido del cliente (#TT01062/24)  
> - PM - SAL de proyecto, añadido código PRCC008 Costos Extra de Gastos en Facturas de Compra que considera todas las facturas de compra, contabilizadas y no. Corregida descripción de código PRCC006 en Costos Extra de Gastos en Facturas de Compra no contabilizadas (#TT01385/24)  
> - PM - SAL de proyecto se insertó nuevo código PRCC007 - Costos de Facturas de Compra (#TT01279/24)  
> - PM - SAL de proyecto en las líneas de detalle añadido artículo y descripción desde la línea del documento (#TT01278/24)  
> - FI - revisión activación de botones de gestión dentro del intrastat (#TT01232/24)  

### Patch 704.1-0025 - 04/04/2024

> - QY - Corregido bug que no mostraba los Flujos de trabajo en el formulario de Registros por Lote (#TT01165/24)  
> - SCM - En la impresión del Calendario de pedidos de proveedores, las Fechas se han cambiado a formato europeo, y los Precios a dos decimales (#TT01051/24)  
> - MS - Corregido bug en la planificación general en caso de que se reprogramaran órdenes ya en estado lanzado/ejecutivo (#TT00158/24)  
> - Resuelto bug en el Código de las importaciones Excel cuando se usan caracteres especiales.  
> - PR - resuelto bug en el formulario de gestión de liquidez que no actualizaba correctamente el campo Progresivo al variar los indicadores excluir y ocultar (#TT00435/24)  
> - revisión de arranque rápido CH (#TT00489/24)  
> - PM - correcciones en la inserción de citas en el planner relacionadas con intervenciones planificadas y solicitudes de intervención. Mejorada gestión de movimiento/cambio de fecha/hora/recurso (#TT00144/24)  
> - SCM - En la cuadrícula de árbol de la máscara de Cumplimiento de Pedidos abierta desde DDT, la Propiedad ‘Número de línea’ puede ser arrastrada desde el Navegador de Objetos y guardada con Perfil (#TT01044/24)  
> - SD - La inserción de un artículo dentro de una Factura de Venta mediante el uso de la Ayuda de artículos ahora reporta correctamente la clase (#TT01213/24)  
> - PR - corregido bug en el cálculo de vencimientos del flujo de caja en los pedidos de trabajo (#TT01203/24)  
> - PM - Elaboración SAL de múltiples proyectos simultáneamente, resueltas casísticas de cálculos incorrectos (#TT01325/24)  
> - Liberación impresión LIPE año 2024  
> - FI - corregido bug en la impresión de verificación de la declaración de intención cuando en la factura había gastos finales vinculados a la declaración de intención, su valor no se reportaba correctamente en la columna registrado y permanecía en la columna facturado (#TT01311/24)  
> - SD - Los gastos de Cobro están sujetos automáticamente al IVA principal del documento (#TT00511/24)  
> - PM - Elaboración SAL de múltiples proyectos simultáneamente, resueltas casísticas de cálculos incorrectos (#TT01325/24)  

### Patch 704.1-0024 - 28/03/2024

> - QY - Corregido bug que no mostraba los Flujos de trabajo en el formulario de Registros por Lote (#TT01165/24)  
> - SCM - En la impresión del Calendario de pedidos de proveedores, las Fechas se han cambiado a formato europeo, y los Precios a dos decimales (#TT01051/24)  
> - MS - Corregido bug en la planificación general en caso de que se reprogramaran órdenes ya en estado lanzado/ejecutivo (#TT00158/24)  
> - Resuelto bug en el Código de las importaciones Excel cuando se usan caracteres especiales.  
> - PR - resuelto bug en el formulario de gestión de liquidez que no actualizaba correctamente el campo Progresivo al variar los indicadores excluir y ocultar (#TT00435/24)  
> - Resuelto el problema de la ejecución de la actividad con parámetros faltantes en SqlQuery  
> - revisión de arranque rápido CH (#TT00489/24)  
> - PM - correcciones en la inserción de citas en el planner relacionadas con intervenciones planificadas y solicitudes de intervención. Mejorada gestión de movimiento/cambio de fecha/hora/recurso (#TT00144/24)  
> - SCM - En la cuadrícula de árbol de la máscara de Cumplimiento de Pedidos abierta desde DDT, la Propiedad ‘Número de línea’ puede ser arrastrada desde el Navegador de Objetos y guardada con Perfil (#TT01044/24)  

### Patch 704.1-0023 - 21/03/2024

> - MS - Corregidos errores en el procedimiento de Costificación de las Órdenes de producción y en la impresión de Costificación de la Orden (#TT00497/24)  
> - MS - Corregido bug que causaba la pérdida de la referencia a la línea de proyecto tras la restauración del pedido de producción (#TT01014/24)  
> - MES - Corregido bug en los Informes de Producción que no reconocía el orden temporal correcto de los informes, cuando se insertaban a la misma hora (#TT00985/24)  
> - SD - Contabilización automática de facturas de venta: revisada la procedimiento de contabilización automática de notas de crédito con tipo de movimiento no IVA (#TT00666/24)  
> - MS - Corregido bug en planificación general en caso de que en los parámetros estuviera establecido el lanzamiento automático de los pedidos planificados (#TT01148/24)  
> - ARM - Se le pregunta al usuario qué Objeto de Negocio extender si hay varios objetos vinculados a la misma tabla.  
> - MES - Corregido bug que causaba un bloqueo temporal de la aplicación en caso de registros de Declaraciones de Producción con numerosos informes por fase (#TT00946/24)  
> - MES - Corregido bug en las Declaraciones de Producción que no actualizaba el tiempo de máquina y el tiempo humano cuando se ejecutaba la procedimiento de Recalculo de tiempos (#TT01017/24)  
> - FI - IVA a CRÉDITO en el archivo para la LIPE tiene en cuenta también el IVA no deducible por pro-rata (#TT01596/23)  
> - MES - En la lista de recogida de materiales, en la tabla de materiales se ha añadido la función de formateo condicional (#TT01159/24)  
> - CO -  en la impresión del consolidado de Proyecto, revisión del filtro por tipo de proyecto (#TT01172/24)  
> - SCM - Corregido bug en el procedimiento de Creación Automática de Pedidos de Proveedor desde Pedido de Cliente que no calculaba correctamente las cantidades en el procedimiento de Cumplimiento de Orden en DDT cuando se modificaban las cantidades del pedido del proveedor en el prototipo (#TT01199/24)  

### Patch 704.1-0022 - 15/03/2024

> - SH - WebApi - Resuelto el problema con el contacto de referencia para la importación de cuentas cuando no se especifica el tipo de operación  
> - SD - implementación de web api para la importación de facturas de venta (#TT002622/23)  
> - Valoración de referencias número y fecha de pedidos, albaranes y documentos de cuenta de trabajo (#TT001036/24)  
> - SH - Corregido el error al abrir el contacto desde el menú Freelance (#TT01072/24)  
> - MS - Corregido bug en el cálculo del costo total de los trabajos en la costificación de la orden (#TT02545/23)  
> - Resuelto el problema al filtrar el valor de la combo dentro de la importación de Excel con un valor fijo.  
> - ARM - Gestionada la renombración automática de las tablas de extensión.  

### Patch 704.1-0021 - 08/03/2024

> - SD - A raíz de una modificación de las Ventas dentro de un DDT de Venta, ya no se actualizan la Fecha y el Usuario de la última Modificación en el encabezado del Pedido cliente vinculado (#TT00308/24)  
> - FI - exportación intrastat sección aduanera y valor negativo en resumen si se inserta en la sección quinquies (#TT00580/24)  
> - SCM - Corregido error en el procedimiento de Creación Automática de Pedidos de proveedor desde Pedido Cliente que no reportaba ya la cantidad del pedido en el Prototipo, tras una modificación del proveedor (#TT00777/24)  
> - PR - Perfil en exposición de clientes (#TT00853/24)  
> - Resuelto el problema de la importación de referencias con valor Nulo y de la búsqueda múltiple en Intercompany  
> - CO - cálculo de amortizaciones del controlling, revisión de procedimientos de datos iniciales (#TT00477/24)  

### Patch 704.1-0020 - 05/03/2024

> - SD - Corrección del error que requería un descuento escalonado en el caso de inserción de la Máscara en un nuevo Redondeo (#TT00756/24)  
> - SD - A raíz de la Conversión de una Oferta en Pedido Cliente se reporta también el valor de la cantidad alternativa, si está presente en la Oferta (#TT00779/24)  
> - WMS - En el formulario de existencias de artículo del WMS se ha añadido una nueva columna para la visualización de las existencias.  
Las columnas que hacen referencia a las existencias son tres: Existencia (Gest.), Existencia y Existencia(FC) (FC = Factor de conversión).  
En caso de uso de la *UM Def. WMS* (presente en la pestaña Unidades de medida alternativas del registro de artículo), la primera resulta valorizada con la unidad de medida principal del artículo, la segunda resulta poblada con la existencia expresada en la unidad de medida alternativa del artículo y dada por la suma de los movimientos, mientras que la tercera es dada por la existencia expresada en la unidad de medida alternativa pero calculada con el factor de conversión.  
En caso de que el indicador *UM Def. WMS* no esté habilitado, las columnas *Existencia* y *Existencia(FC)* no serán valorizadas (#TT00446/24)  
> - CRM -  Es posible eliminar las Referencias de los Contactos CRM si no tienen vínculos (#TT00748/24)  
> - SD - En las Ofertas de Venta el precio del artículo ya no se anula a raíz de una modificación de la cantidad (#TT00861/24)  
> - FI - nueva mapeo de campo CustomSection en FSIntrastatDetail (#TT00729/24)  
> - SD - añadido script de inicialización de la lista de valores Tipo origen costo para los materiales en las ofertas, utilizado para las bases de datos actualizadas de F2021 a F2023 (#TT00593/24)  
> - SH - revisión de arranque rápido para localización CH  
> - SD - Optimizada la posibilidad de insertar nuevos artículos en listados extensos (#TT02980/23)  
> - SD - Resuelto error que impedía la inserción de nuevas líneas en la tabla de Ventas (#TT00329/24)  
> - SCM - Corregido error en la compilación de los descuentos en los Listas de Cuenta Trabajo (#TT00227/24)  

### Patch 704.1-0019 - 29/02/2024

> - FI - En caso de creación de Factura de venta desde Partida de anticipo, los vencimientos se crean con el indicador Manual (#TT00672/24)  
> - MES - Corregido bug en las declaraciones de producción (#TT00702/24)  
> - SCM - Corregido error en el cumplimiento de una nota en factura con precio IVA incluido (#TT00220/24)  
> - ARM - Añadido un mensaje para habilitar el registro si el inicio de la piscina personalizada falla tras la publicación (#TT00676/24)  
> - SD - Para agentes con pago realizado o vencimiento madurado, la impresión de comisiones ganadas y la creación automática de liquidaciones de comisiones ahora consideran ganadas las comisiones insertadas en una factura a cero si dentro del documento hay un abono referido a un anticipo con partida cobrada (#TT00620/24)  
> - SD - Resuelto el establecimiento en cero del precio unitario en el nivel padre en caso de inserción de nuevos nodos hijos (#TT00735/24)  
> - WMS - Añadido el indicador "Mantener ubicación" en la tabla de "Tipos de listas inventariales". Esto asegura que en fase de inventario con el WMS la ubicación ingresada no cambiará hasta que se lea otra ubicación (#TT00726/24)  
> - WMS - En el formulario de Lista de transferencia UDC del WMS, la pestaña Detalle UDC se habilitará solo después de haber ingresado todos los datos de encabezado (#TT03336/23)  
> - FI/CO/SH - en las tasas de IVA, añadido nuevo indicador para identificar las tasas de venta extranjeras que cargan el límite para el período siguiente (#TT00343/24)  
> - MS - Corregido bug en los diagramas de las órdenes de producción (#TT00790/24)  
> - WMS - Corregido bug en el formulario UDC que no mostraba correctamente el estado de las listas de recogida y traslado en el WMS (#TT00792/24)  
> - SD - A raíz de la Conversión de una Oferta en Pedido Cliente también se reportan los datos de Peso Neto y Peso Bruto, si están presentes en la Oferta (#TT00746/24)  

### Patch 704.1-0018 - 22/02/2024

> - WMS - Corregido bug en el filtro de inventarios (#TT00605/24)  
> - MES - Mejorada la funcionalidad de “Generación de lotes” presente en el filtro de los pedidos de producción. Ahora la cantidad del lote de origen no puede ser variada en caso de que ya se hayan creado Listas de recogida, Declaraciones de producción, o en caso de que algunos materiales ya hayan sido consumidos. En estos casos, es posible crear nuevos lotes de producción, pero sin poder variar la cantidad del lote de origen (#TT00353/24)        
> - PM - Procedimiento de actualización de precios de proyecto y documentos vinculados, corregida la conversión entre diferentes unidades de medida (#TT03661/23)  
> - Forzada la recompilación del script si el proyecto es nulo pero ya ha sido liberado  
> - SH - desarrollado el controlador webapi GeneralReadWritePublicController para la importación de registros de clientes/proveedores (# TT00619/24)  
> - WM - Implementada la procedimiento de Análisis de disponibilidad en la gestión de los pedidos de cuenta de trabajo (#TT00350/24)  
> - WM - Corregido bug en la procedimiento de Análisis de disponibilidad en la gestión de los pedidos de cuenta de trabajo (#TT00190/24)  
> - SH - Corrección del error que no mantenía los cambios en el Perfil si era predeterminado, en el módulo de Actividades de Fluentis (#TT00592/24)  
> - SCS - El pedido de cuenta de trabajo generado por un pedido de producción con fase externa ahora detecta el precio de la Lista de Cuenta de trabajo incluso cuando en la lista solo está presente el artículo, sin la fase (#TT00439/24)  
> - CO - Amortizaciones para controlling, tabla CO_DepreciationYearStartings replicando filas + valores incorrectos (#TT00477/24)  
> - WM - Corregido error en la conversión de la cantidad alternativa proveniente de un Reintegro de Cuenta de trabajo, en el formulario de Detalle de Movimientos (#TT00517/24)  
> - WM - Corregido bug en el cálculo de las diferencias inventariales, en caso de que en la lista inventarial esté valorizada la unidad de medida alternativa (#TT00366/24)  
> - WMS - Corregido bug en el formulario de inventario del WMS, donde en caso de que las listas se manejaran con UM Alternativas, el dato de la UM de gestión que se calcula mediante factor de conversión no respetaba los decimales previstos por la unidad de medida (#TT00675/24)  
> - WM - En los procedimientos de Creación de lote desde lote y Creación de lote desde lote con cambio de artículo, el Navegador de Objetos presenta el objeto FSItemStockSummary (#TT00650/24)  
> - MES - Corregido bug en el registro de las declaraciones de producción con artículos alternativos presentes (#TT00649/24)  
> - WM - Corregido error en la procedimiento de actualización de Costo Medio y Costo Último (#TT00585/24)  

### Patch 704.1-0017 - 16/02/2024

> - ARM - revisión del guardado de nuevos elementos en BPMN (#TT00486/24)  
> - PM - Creada WEBAPI para importación de actividades de proyecto (#TT00400/24)  
> - SD - Conversión de oferta en pedido, oculta opción "reportar materiales/recursos de líneas de oferta como líneas de pedido" si en el tipo de oferta no se habilita la opción "jerárquica" (#TT00276/24)  
> - WM - Corregida visualización de la impresión del Inventario a cantidad valorizada (#TT00455/24)  
> - Resuelto el bug de las propiedades recursivas en las variables contextuales de Blockly  
> - FI - liberación del controlador webapi AccountingReadWritePublicController  
> - BI - Corrección del paso al widget siguiente en los módulos de filtro cuando se presiona enter desde el teclado (#TT00569/24)  
> - WEBAPI: resuelta la anomalía ligada al establecimiento de la ResidualQuantity de albaranes de compra y albaranes de venta para líneas con cantidad 1 (#TT00480/24)  
> - MES - Corregido bug en la visualización de lotes y números de serie en las Declaraciones de Producción (#TT00487/24)  
> - WM - Corregida visualización de los Movimientos de almacén para los artículos con Unidad de medida alternativa (#TT00531/24)  
> - WM - Corregido bug en la procedimiento de Bajo Stock de las impresiones de gestión que no calculaba correctamente la cantidad de reorden (#TT00481/24)  
> - WEBAPI: resuelta la anomalía ligada al establecimiento de la ResidualQuantity de albaranes de compra y albaranes de venta para líneas con cantidad 1 (##TT00479/24)  
> - SCS - Si en los Parámetros de Cuenta de Trabajo está establecido el indicador ‘Considerar almacenes según el tipo de DDT de reintegro’, en el Cumplimiento de un Pedido el almacén se busca con las siguientes prioridades: primero en el Tipo DDT; luego en el Pedido; luego en los Parámetros de Cuenta de trabajo. Si el Parámetro no está activo, las prioridades son las siguientes: primero en el Pedido, luego en los Parámetros (#TT00558/24)  
> - SCM - Corregido bug en el procedimiento de creación de una Lista de Proveedor en Fluentis browser (#TT03643/23)  
> - WMS - Corregido bug en la gestión de casilla en caso de que se borrara una casilla vinculada a un movimiento con contrapartida (#TT00532/24)  
> - FI - revisión de impresión de liquidación de IVA periódica, visualización del subinforme del límite solo si este tiene indicador por defecto  
> - PM: Proyecto con estructura WBS, posibilitada la inserción de hijos de tipo notas en niveles padres codificados/no codificados (#TT00243/24)  
> - FI - Contabilización de facturas: revisión de la parte analítica de contabilización de facturas con fechas de competencia diferentes (#TT00240/24)  
> - SCS - Si en los Parámetros de Cuenta de Trabajo está establecido el indicador ‘Considerar almacenes según el tipo de DDT de reintegro’, en el Cumplimiento de un Pedido el almacén se busca con las siguientes prioridades: primero en el Tipo DDT/Reintegro; luego en el Pedido; luego en los Parámetros de Cuenta de trabajo. Si el Parámetro no está activo, las prioridades son las siguientes: primero en el Pedido, luego en los Parámetros (#TT03583/23)  
> - SD - Corregido el listado de valores por defecto del campo tipo nodo para la oferta multilivel en caso de actualización de Fluentis de la versión 2021 a la versión 2023 (#TT00590/24)  
> - PM - gestionado el campo imponible importe en la estructura de árbol de los proyectos WBS, también en el caso de artículos codificados con hijos notas (#TT00335/24)  
> - SH - Al crear un nuevo Contacto, la pestaña Parámetros de agrupamiento se puebla con los valores por defecto (#TT00601/24)  
> - SD - Pedidos de clientes con generación automática de proyecto, gestionada la alineación número de pedido - número de proyecto en caso de proyecto sin numerador (#TT00274/24)  
> - MPS - Insertadas algunas mejoras y correcciones en el procedimiento MRP (#TT02029/23)  
> - MES - Corregido bug en las declaraciones de producción, que recalculaba los materiales utilizados en caso de que se insertara un artículo en la pestaña de Artículos alternativos (#TT00571/24)  
> - MES - Corregido bug en las declaraciones de producción que se producía en el momento del registro (#TT00606/24)  

### Patch 704.1-0016 - 09/02/2024

> - SCM - solicitudes de compra - resolver el problema de guardar líneas en analítica sin centro de costo (#TT00095/24)  
> - Traducción del estado SDI según el diccionario y no según el código (#TT03342/23)  
> - SH - En las actividades-tarea se ha insertado la indicación de la empresa y división en la que fueron insertadas, con el fin de garantizar la correcta encabezado de los documentos abiertos directamente desde las actividades (#TT00280/24)  
> - SD - Ofertas multilínea, bloqueada la posibilidad de insertar niveles hijos diferentes a las notas, para niveles padres con tipo de línea 3 - gastos (#TT00327/24)  
> - SD - Ofertas multilínea, corregida visualización del campo Importe Imponible para los casos en los que hay un nivel padre y está codificado con hijos de tipo notas (#TT00328/24)  
> - ARM - corrección de la migración: se copia el campo GEN_RightConditionalRules de la base de datos de origen  
> - SD - Resolver el problema de la exportación de la columna "Estado SDI" (#TT00321/24)  
> - SD - Ofertas multilínea, gestionada la posibilidad de excluir selectivamente algunos materiales y recursos de la importación en el pedido; establecido el orden de las líneas del pedido como en la oferta; materiales valorizados en el pedido si el código padre al que están vinculados es 0, de lo contrario los materiales están a 0 y el padre está valorizado; añadida la posibilidad de asignar porcentaje de recargo masivamente sobre todas las líneas (#TT03372/23)  
> - SD - Ofertas multilínea, en fase de conversión a proyecto y orden, para cada línea de oferta y pedido gestionado la referencia al correspondiente WBS del proyecto (#TT03542/23)  
> - SD - Ofertas multilínea, introducida posibilidad de insertar en los niveles con tipo de línea codificada/no codificada, niveles hijos de tipo notas (#TT00245/24)  
> - SH - Documental - Implementada la posibilidad de eliminación de un documento almacenado en un objeto (#TT03426/23)  
> - SCM - En Fluentis browser, dentro de la Recepción de mercancías, se ha corregido la visualización de las líneas de artículos tras el cumplimiento de órdenes (#TT00044/24)  
> - WM - Corregido bug en la Confirmación de transferencia UDC sobre la actualización de los datos presentes en la tabla detalle UDC (#TT03340/23)  

### Patch 704.1-0015 - 31/01/2024

> - FI - Creado nuevo campo "Código otras sumas no sujetas a retención" en Gestión de tipo de retención (#TT01453/23)  
> - Añadida una función al remitente de script WebApi para notificar información sobre el registro BizLink  
> - FI - CU2024 - Liberación nuevo informe Certificación Única 2024  
> - SD - Corrección del error que se generaba en la Creación de Factura desde la Búsqueda de Pedidos de clientes, en el caso de Pedido con una línea de artículo codificado, una línea de artículo no codificado y una línea de notas (#TT00291/24)  
> - Resuelto bug para archivo Intrastat (#TT00299/24)  
> - CRM - Cuando una Actividad se Completa, se actualiza la Fecha de cierre de la Actividad dentro del Registro de Workflows que la ha creado; si la Actividad se Reabre, la Fecha de cierre en el Registro de Workflows se elimina (#TT00097/24)  
> - SD - En las ofertas jerárquicas, pestaña Materiales, aumentados decimales gestionados en el campo Costo Unitario (#TT00254/24)  
> - MPS - Corregido bug en costificación donde no se mostraban los costos preventivos de los materiales y el valor total del costo de mano de obra (#TT02967/23)  
> - SH - Prototipos - Se ha implementado la codificación de artículos y componentes no codificados (#TT03604/23)  
> - SD - Ofertas multilínea, procedimiento de duplicado considera también los nuevos indicadores de línea Excluir Recursos en Pedido cliente y Excluir materiales en pedido cliente (#TT00357/24)  
> - WMS - Corregido bug que no reportaba correctamente los datos relativos al operador en las listas inventariales.  Corregido bug en las listas de transferencia a la inserción de la ubicación (#TT00153/24)  
> - WM - Ajuste en la Generación de DDT desde Recogida con Cambio Erróneo (#TT00364/24)  
> - CRM - El Manager de la tarea puede modificar el Operador/Rol asignado a la Actividad creada (#TT00211/24)  
> - CO - corrección de filtro por división - tomar la división de movconti y no de registro  
> - WM - Añadido en el informe del Diario de almacén el filtro por empresa y división (#TT00375/24)  
> - FI - Gestión de exportación de recibos de horas de empleados para Sistemas (#TT00212/24)  
> - SD - En la Ayuda de artículos, pestaña Documentos, se pueblan los campos Clase, Código y Descripción del artículo (#TT00381/24)  
> - SD - Ofertas multilínea se hacen visibles la fecha de entrega y el período previsto de entrega en la línea de la estructura WBS. Se ha eliminado el bloqueo de cantidad = 1 para las líneas WBS con materiales y recursos. Si el precio se calcula a partir de materiales y recursos, el precio unitario se calcula a partir de la suma de los ingresos de materiales o recursos, dividido por la cantidad indicada en la línea WBS (#TT00123/24)  
> - PM - Procedimiento de creación de proyecto desde plantilla, si hay direcciones de destinatario y destino predeterminadas para el cliente, prevalecen sobre las direcciones indicadas en la plantilla (#TT00122/24)  
> - SCM: A raíz de una modificación de la cuenta dentro de un pedido de proveedor ya no se mantiene el imponible valorizado (#TT00035/24)  
> - SCM - Resolución del error que se produce al guardar un documento, después de haber insertado un artículo con lote comenzando desde la selección del Tipo de línea (#TT03505/23)  
> - SCM - Resolución del error que se produce al guardar un documento, después de haber insertado un artículo con lote comenzando desde la selección del Tipo de línea (#TT03505/23)  
> - PM - el campo descuento de las intervenciones acepta valores decimales en encabezado y en línea de servicio (#TT03553/23)  

### Patch 704.1-0014 - 24/01/2024

> - WM - Revisión del Navegador de artículos con adición de nuevas pestañas (#TT00130/24)  
> - MES - Corregido bug que no mantenía el vínculo con los pedidos hijos al momento del lanzamiento de los pedidos planificados en pedidos de producción (#TT00161/24)  
> - SD - Revisión de la gestión de bloqueo de crédito cuando el documento en modificación es el que causa el sobrepaso y ya está autorizado (#TT00206/24)  
> - SCM - En el procedimiento de Creación Automática de Pedidos, pestaña Operaciones, se agrupan en una única operación todas las líneas del mismo Pedido proveedor creado, incluso si las ejecuciones han sido múltiples (#TT01891/23)  
> - SCM - Al abrir el procedimiento de Creación Automática de Pedidos y desplazarse en la pestaña Pedidos cliente del Filtro, ya no se es redirigido automáticamente a la pestaña Selección de proveedor (#TT03511/23)  
> - SD - En las ofertas jerárquicas se ha habilitado la posibilidad de gestionar para los niveles padre de tipo codificado o no codificado, niveles hijos solo de tipo línea 4-nota (#TT00245/24)  
> - SD - En las ofertas jerárquicas, pestaña Materiales, aumentados los decimales gestionados en el campo Costo Unitario (#TT00254/24)  
> - SD - En las ofertas jerárquicas, se hace visible en la estructura en árbol y en la pestaña Actividades la fecha y el período de entrega prevista. Se ha eliminado el bloqueo de la cantidad 1 en caso de precio actualizado por Materiales y/o Recursos (#TT00123/24)  
> - Añadida la posibilidad de agregar un prefijo personalizado a FlowOperation para utilizar una personalización de flowOperation  

### Patch 704.1-0013 - 19/01/2024

> - Resuelto el problema con el servicio OData personalizado para crear un nuevo script o actualizarlo (#TT00067/24)  
> - MS - Resuelto bug en Schedulacion General y MRP ligado al análisis de disponibilidad (#TT03566/23, #TT00033/24)  
> - WMS - En el formulario de lista de transferencia UDC el botón Guardar se habilita solo después de haber ingresado todos los datos necesarios (#TT03336/23)  
> - SD: Cálculo del costo de materiales de oferta para el tipo origen costo "lista de proveedor", en caso de variación del tipo de línea, cantidad y proveedor (#TT03372/23)  
> - MPS - Corregido bug en el cálculo del análisis de disponibilidad para artículos con miles de componentes (#TT00173/24)  
> - PM - los proyectos plantilla son visibles en el formulario de búsqueda (#TT00007/24)  
> - MES - Resuelta excepción en el registro de declaración con lotes cuando estamos en una fase posterior a la primera y Fluentis debería descargar el lote de la fase anterior (#TT00185/24)  
> - WM - Corregido bug que reportaba incorrectamente el ancho de un UDC en el formulario de Embalaje del registro de artículo (#TT00177/24)  
> - MS - Parámetros MRP Artículo - implementación de Excluir de planificación (#TT01778/23)  
> - CRM - Sincronización del calendario entre Fluentis y Outlook (#TT03320/23)  
> - MPS - Corregido bug en la gestión de los estados de encabezado y de línea de las órdenes de producción multiproducto (#TT03550/23)  
> - Permitir notificar los errores del módulo del script con la factura de Electrónica  
> - MES - Corregido bug en las Declaraciones de Producción que cambiaba el almacén y la causa de consumo de un artículo en el momento en que se inserta una cantidad de desecho (#TT00025/24)  
> - SD- La creación del compenso de liquidación de agentes ahora reporta el tipo/solución de pago de la liquidación y no también el de la ficha de agente (#TT00192/24)  
> - CRM - Revisión de los totales de las líneas nodo de los Presupuestos de Marketing  
> - SH - Corrección de carga de información para tareas después de la actualización (#TT00150/24)  
> - MPS - Requisitos y Parámetros de Material - modificación de layout - Los parámetros de Liberación de solicitudes de compra autorizadas y Liberación de órdenes de producción ejecutivas han sido movidos a los Parámetros de Liberación de Pedidos planificados (#TT03085/23)  
> - Añadido el lector de propiedades DataProvider para el script  
> - FI - corregido bug en el formulario diferencia entre saldo contable y partidas cuando la suma de las partidas a comparar era dada por partidas todas del mismo valor (#TT03315/23)  
> - SCM - Corregido bug en los DDT de compra que, en caso de modificación del precio en la factura, permanecían valorizados también a raíz de la eliminación de la factura (#TT00147/24)  
> - MPS - Corregido bug en el lanzamiento de los pedidos planificados de cuenta de trabajo (#TT00170/24)  
> - FI - Gestión de exportación de recibos de horas de empleados para Sistemas (#TT00212/24)  
> - Añadido responsable de nómina para Sistemas (#TT00151/24)  

### Patch 704.1-0012 - 16/01/2024

> - MS - Resolución del error que cerraba Fluentis en caso de selección de más de Tipos de pedido en los filtros de la Generación de Órdenes de Producción para los Pedidos de clientes (#TT00088/24)  
> - SH - la ejecución de los workflows desde las pestañas en los formularios de búsqueda ahora crea attachments sin replicarlos (#TT00103/24)  
> - WMS - Mejorado el contraste entre las líneas insertadas y la seleccionada (#TT00102/24)  
> - WMS - Corregido bug en el framework que generaba el bloqueo de la aplicación (#TT00117/24)  
> - WMS - Corregido bug en la Confirmación de Listas de Transferencia del WMS debido al cual el movimiento de contrapartida no reporta la hora exacta (#TT00131/24)  
> - MS - Corregido bug que causaba un error en la programación de una orden en presencia de una personalización sobre los artículos (#TT00085/24)  
> - SCM - Corregido bug en la creación de una Solicitud de Compra que no detectaba el precio de un artículo con variante de la lista de precios del proveedor (#TT03711/23)  

### Patch 704.1-0011 - 11/01/2024

> - Revisión de impresión de BankCreditSituation para renombrar objeto  
> - MS - Secuencia de fases - Resuelta anomalia en la ejecución de la funcionalidad de ‘Cambio de fecha’ (#TT03670/23)  
> - SH - Prototipos - Se ha implementado la gestión de artículos y componentes no codificados (#TT02948/23)  
> - WMS - Corregido bug en Confirmación de traslado UDC sobre la actualización de los datos presentes en la tabla detalle UDC (#TT03340/23)  
> - SD - Creación de la pestaña Parámetros de agrupamiento para Cliente/Proveedor en Registro de contacto. Estos parámetros tienen prioridad sobre los Parámetros de agrupamiento generales (#TT03564/23)  
> - WM - Resuelto bug en la creación de los Planes de carga que no reportaba correctamente la cantidad modificada manualmente cuando se utilizaba el botón Insertar pedido (#TT03642/23)  
> - CRM - La columna Importe total en la Gestión de Pronósticos de Ventas reporta el producto de Cantidad total y Precio medio unitario; además, cada nodo padre de línea reporta la suma de los importes de las líneas hijas. En la Impresión de Cierre de pronósticos de venta, se ha insertado el filtro Año para la elección de las Predicciones de venta. Con la inclusión del campo Predicción de venta, automáticamente se llena el Tipo de periodo (con el Tipo de periodo igual al presente en el Tipo de predicción de venta) Finalmente, el Detalle del tipo de periodo puede ser elegido en base al Tipo de periodo ingresado (#TT0318/23)  
> - PR - revisión de la inserción de líneas en el formulario de Gestión de la liquidez (#TT03677/23)  
> - FI - en la recuperación de amortización de activos del controlling, revisión del uso del indicador de disminución porcentual del primer año (#TT03681/23)  
> - FI - modificaciones a la gestión de campos de estructura variable para el CU (#TT00019/24)  
> - SH, PR - revisión de gestión de edición de cálculos de castelletti en el registro de bancos y en los listados de presentación (#TT03680/23)  
> - MES - Resueltos bugs en las declaraciones de producción en caso de que se gestionen las cantidades descartadas con artículos a lotes y también en el caso de un registro con cantidad producida igual a cero y cantidad descartada mayor que cero (#TT03708/23 - #TT00005/24)  
> - SD - Corregido el funcionamiento del filtro sobre los Datos Adicionales en los DDT de venta (#TT00058/24)  
> - SD - En los documentos de venta, en caso de valorización centros en todas las dimensiones, al guardarse ahora se devuelve un mensaje de eliminación de las líneas sin centro de costo en lugar de un bloqueo a gestionarse manualmente línea por línea (#TT00065/24)  
> - SH - Creación nuevo año - cuando el parámetro fix es true - si existen líneas con año de fecha de fin de validez >= año - no actualizar a null (#TT00093/24)  
> - MES - Corregido bug en las declaraciones de producción que no cargaba correctamente las UDC creadas dentro de la declaración (#TT03393/23)  
> - WM - Corregido bug en Visualización de existencias en la cual no se visualizaba correctamente la existencia de los artículos que contenían en la descripción el carácter ‘#’ (#TT00006/24)  
> - WMS - En la pestaña UDC de la gestión de casilla del WMS el botón Imprimir UDC se habilita correctamente (#TT00091/24)  


### Patch 704.1-0010 - 22/12/2023

> - FI - Corregido bug en fase de contabilización de la distinta Ri.ba (modo IVA por caja) que contenía efectos creados agrupando más de una partida, que generaba escrituras de girocontos IVA con importes erróneos (#TT02548/23)  
> - FI - revisión de rollback de contabilización de morosos (#TT03579/23)  
> - CRM - Resuelto error que añadía columnas vacías al guardar un Perfil en la Búsqueda de Oportunidades (#TT03567/23)  
> - SH - Prototipos - Se ha implementado la gestión de artículos y componentes no codificados.(#TT02948/23)  
> - PM: gestionada propagación de datos adicionales desde artículo a líneas de servicio en la intervención (#TT03515/23)  
> - WM- Alineamiento técnico en fase de selección de líneas desde la cuadrícula de existencias para crear un registro de almacén (#TT02776/23)  
> - WMS - Corregido bug en Mover artículo del WMS que no insertaba horas, minutos y segundos, en el campo de fecha de creación de los movimientos en contrapartida (#TT02482/23)  
> - MES - Resuelto bug en los informes de producción que insertaba un valor diferente de cero en la cantidad producida en caso de insertarse una suspensión (#TT03411/23)  
> - MES - Corregido bug en las declaraciones de producción que vinculaban la causa de carga o descarga errónea tomándola de los semielaborados WIP en lugar del cuadro de semielaborados en parámetros de producción (#TT03508/23)  
> - WMS - En el formulario de confirmación de transferencia del WMS se ha añadido el mensaje de "Operación efectuada" también en caso de que se confirme directamente desde el filtro de búsqueda (#TT03339/23)  
> - PM - insertados 2 nuevos campos en los proyectos para rastrear si el proyecto ha sido generado a partir de la oferta (#TT03454/23)  
> - WM - En el registro de lotes, en las pestañas de carga y descarga se ha implementado la posibilidad de visualizar los detalles sobre las cantidades cumplidas con la adición de las columnas "Número de línea", "Cantidad" y "Unidad de medida" (#TT03487/23)  
> - SD - Introducidas nuevas funcionalidades para las ofertas jerárquicas, tales como copiar/mover niveles, crear RDA, reemplazar número WBS, FTE para los recursos, actualización de precio desde recursos/materiales (#TT03084/23)  
> - SD - Introducida gestión de ofertas con estructura jerárquica (#TT02881/23)  
> - SD - Introducida gestión de creación automática de proyectos desde oferta (#TT03040/23)  
> - SD - Gestionada descripción extendida del artículo para el área de ventas; añadida la posibilidad de excluir por línea materiales/recursos de los pedidos de clientes; mejorado ordenamiento de líneas del pedido generado desde oferta jerárquica; bloqueo de conversión de oferta en pedido si hay prototipos no codificados presentes; gestión de precio de materiales o línea oferta en el pedido dependiendo de cómo se valoren las líneas de la oferta; gestionada posibilidad de propagación de porcentaje de recargo sobre todas las líneas de materiales con 1 solo paso (#TT03372/23)  
> - SD - Mejorada gestión de prototipos en las ofertas de clientes (#TT03100/23)  
> - FI - corrección de los valores erróneos en el centro de coste en contabilidad en caso de porcentaje no deducible rumano (#TT03651/23)  
> - SCM - el precio del artículo de las solicitudes de oferta ya no se define en base a las solicitudes de compra anteriores (#TT03518/23)  
> - SCM - cuando el valor de las líneas en la pestaña generador RDO es 0 entonces son 0 en la RDO creada al utilizar el procedimiento (#TT03458/23)  

### Patch 704.1-0009 - 14/12/2023

> - PM - actualización de fecha y recurso asignados a la WBS del proyecto, actualizan automáticamente los datos en la intervención planificada si está presente y los correspondientes calendarios de los recursos (#TT03327/23)  
> - SCM - Importación de archivo XML: revisada formateo de la fecha en la importación del archivo XML (#TT03194/23)  
> - FI - RO - agregar nuevas cuentas en FastStart  
> - WM - Crea la posibilidad de llegar a una lista de inventario de un segundo usuario incluso si el inventario está abierto por otro usuario. Un inventario cerrado se vuelve no modificable (#TT03443/23)  
> - SCM - En las facturas de compra, la modificación de las fechas de competencia en línea de artículo ahora se propaga a las líneas de analítica subyacentes (#TT03214/23)  
> - FI - Contabilizar las facturas de venta - con descuento en los pagos - no significa tomar el valor del descuento, sino cerrar todos los vencimientos (#TT03408/23)  
> - Fluentis- Actividades: Resuelto habilitación para modificar actividades ya insertadas (#TT03391/23)  
> - SDI - Activación botón de creación de facturas de compra para RO  
> - MES - Resuelto bug en las declaraciones de producción que insertaba un valor diferente de cero en la cantidad producida en caso de que se insertara una suspensión (#TT03411/23)  
> - MS - Planificación general - Resuelta la anomalia de cumplimiento de órdenes en caso de que no haya disponibilidad de los artículos solicitados. Caso específico de configuración de planificación con "Agrupación por artículo" y artículo padre "Ficticio" (#TT03424/23)  
> - MS - Planificación general - Se ha corregido la propuesta, en los pedidos de cuenta de trabajo, de los materiales de padres ficticios cuyo consumo se prevé en fases de trabajo específicas siempre que se indique la misma fase y subfase que deberá estar presente tanto en el padre no ficticio como en los hijos ficticios en cada nivel de la lista de materiales (#TT03007/23)  
> - SCM - Impresión de solicitudes de compra - También se ha hecho disponible la impresión del documento desde el filtro de búsqueda de las solicitudes de compra y no solo desde dentro del documento  
> - CO - revisión de procesamiento de períodos del controlling para mensualización de datos más allá del ejercicio actual (#TT03186/23)  
> - Resuelto el error de restablecer la carpeta de trabajo al cargar un archivo externo en Blazor  
> - MPS - Corregido bug en la actualización de estado de las líneas de la orden de producción multiproducto de compra y cuenta de trabajo (#TT01533/23)  
> - SCS - Resolución del error que impedía la inserción de unidades de medida alternativas en Artículos de Reintegros de cuenta de trabajo que las prevean (#TT03382/23)  
> - PM - resuelta casística de eliminación de recursos asignados a una WBS en caso de cambio de artículo de la WBS. Ref. ticket (#TT03421/23)  
> - WM - Corregido bug en análisis de disponibilidad relacionado con las líneas correspondientes a los pedidos de producción (#TT03224/23)  
> - CO - creación de cierres infranuales, revisión de gestión de saldos de los centros de costo (#TT03530/23)