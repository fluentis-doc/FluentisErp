---
title: Notas de la versión 705 (Patch notes Versione 705)
sidebar_position: 1
---

### Patch 705.1-0031 - 08/08/2024
> - FI - Reordenación de protocolos IVA: corregido error en la inserción de numeración automática y en la actualización de protocolos en las descripciones (#TT03378/24)  
> - SH - Optimización de la inserción de Datos Extra de tipo Fecha junto con Datos Extra de otro tipo (#TT03055/24)  
> - SD - Corregido error al insertar un nuevo artículo en un DDT ya descargado (#TT03177/24)  
> - FI - Durante la creación de la factura o el registro contable desde los Documentos de compra entrantes, se proponen solo los contactos con una cuenta contable vinculada (#TT03352/24)  
> PM: caso de asignación de wbs resuelto en intervención, que en el caso de coincidencia con los parámetros del proyecto, impedía la asociación (#TT03574/24)  
> - PM: Proyecto - inserción de un nuevo nivel hijo de una raíz, impedía la asociación de un artículo codificado (#TT03583/24)  
> - WM - Corregido bug en anagrafica artículo, que al insertar una variante creaba también la lista de materiales para esa variante (#TT03443/24)  
> - MS - Corregido bug en Capacidades de centros de trabajo que consideraba la capacidad en un centro de trabajo interno dada por un pedido planificado de trabajo a cuenta; ahora, si el pedido planificado de trabajo tiene una fase interna (porque a veces se produce internamente y otras externamente) esto ya no compromete a ese centro de trabajo (#TT03406/24)  
> - MES - Corregido bug en el ciclo de trabajo que en caso de que se añadiera una nueva fase no reportaba el proveedor preferencial insertado en la fase estándar (#TT03551/24)  
> - SD - En los DDT y en las Facturas de Venta ahora es posible realizar el abono de las líneas de artículo de tipo 2, 3, 4 y 5 (#TT02375/24)  
> - MS - Si en generación de órdenes de producción se genera una orden con tipo de orden “Multiproducto” y agrupamiento “Ninguno”, esta se crea con tantas líneas como filas hay en los pedidos de clientes para ese artículo; entonces sin agruparlas en una sola línea (#TT03615/24)  
> - WM - Ahora en el detalle del análisis de disponibilidad las líneas de órdenes de producción valoran los campos "Orden de cliente asociado" y "Cantidad de orden de cliente asociado" si están vinculadas a un orden de cliente (#TT03549/24)  
> - WM - Corregido bug en el help de lotes que no mostraba correctamente el valor de la disponibilidad en la cuadrícula superior en caso de ser filtrado por ubicación (#TT03600/24)  
> - SD - Eliminación del redondeo en el cálculo del descuento para el porcentaje del Range discount (#TT03609/24)  
> - SH - Habilitados los decimales en las columnas Demanda y Oferta para los Pedidos planificados, en el Análisis de disponibilidad (#TT03201/24)  
> - FI/PR - revisión visualización filtros de búsqueda por partidas pagables/no pagables, las no pagables son excluidas por defecto en las máscaras de compensaciones, en los registros, en la adquisición de efectos por partidas, en el módulo de pagos a proveedores (#TT03641/24)  
> - SD - En la forma ‘Detalle de líneas de Pedidos de clientes’ se ha habilitado el filtro en cuadrícula para las columnas ‘Tipo de documento de cumplimiento’ y ‘Número de documento de cumplimiento’; después de la inserción del filtro, es necesario hacer clic en Buscar para ver los resultados (#TT03655/24)  
> - FI - revisión recuperación de amortización de activos de los cierres interanuales, cálculo también en presencia en contabilidad de amortizaciones ya insertadas para el año de cierre (#TT03042/24)  
> - WMS - Ahora en gestión de confirmación de picking el foco regresa en el campo de código de barras después de cada lectura (#TT03704/24)  

### Patch 705.1-0030 - 30/07/2024
> - FI - revisión desplazamiento de la lista de registros contables (#TT03440/24)  
> - MES - Corregido bug en la lista de retiro de materiales referente a la creación del picking con artículos gestionados por lotes (#TT03187/24)  
> - FI - para la localización suiza, revisión contabilización de los redondeos en el total del documento gestionados con gastos finales sin IVA (#TT03335/24)  
> - FI - Corregido problema que no gestionaba el banco de apoyo alternativo en la creación automática de la lista de pagos a proveedores utilizando el registro del agente (#TT03274/24)  
> - FI - en la contabilización de facturas de compra, gestión en cuadrícula del campo del IVA para causales automáticas (#TT02641/24)  
> - SCM - revisión de contabilización de centros de costo desde facturas de compra, signos negativos (#TT03239/24)  
> - FI - Resuelto error de excepción en el intrastat que involucraba un caso relativo a una nota de abono (#TT03449/24)  
> - MS - Nuevas optimizaciones para el procedimiento del MRP (#TT03485/24)  
> - PM: Impresión detalle proyectos, corregido caso de movimientos duplicados en impresión. Gestionado correctamente caso de ddt con movimentación a almacén y correspondiente factura vinculada (#TT03484/24)  
> - PM: declaración de actividad facturable - gestionado correctamente aviso de falta de configuración tipo de intervención - en el tipo de actividad o en los parámetros generales del proyecto (#TT03462/24)  
> - MES - Corregido bug en el cálculo de la ocupación de los centros de trabajo en caso de que se modificaran las fases del orden de producción (#TT02662/24)  
> - FI - para empresa con controlling activo, revisión test de cuadratura sobre las dimensiones (#TT03496/24)  
> - SH - La línea de gasto Conai, al guardar el documento, toma el mismo IVA que la línea artículo que lo generó (#TT02599/24)  
> - SH - Revisión recálculo Conai en caso de documento duplicado (#TT03508/24)  
> - WMS - Corregido bug en la visualización de las unidades de carga de la Confirmación de retiro UDC del WMS (#TT03473/24)  
> - SD - Corregido loop en el desalojo automático de DDT con solo artículos nota y no codificados (#TT03557/24)  
> - MES - Corregido bug en el cálculo del costo del artículo producido con las declaraciones de producción (#TT03408/24)  
> - SD - En las Ofertas de Venta jerárquicas al insertar una línea descriptiva en la pestaña Materiales se asocia un tipo de línea 2 (#TT03420/24)  
> - SCS - En los Pedidos de Trabajo se ha añadido un nuevo parámetro en los Datos materiales propuestos denominado “Desde el pedido de producción” usado para el recálculo de las cantidades de los materiales. Se establece automáticamente a la creación de un pedido de trabajo desde fase externa de un pedido de producción, al lanzamiento de un pedido planificado de producción con fase externa y al lanzamiento de un Pedido de Trabajo planificado. Para la propuesta de los datos de los materiales en el pedido de Trabajo es ahora posible tener un parámetro diferente para cada línea de artículo (#TT02097/24)  
> - WM - Corregido bug en análisis de disponibilidad (#TT03349/24)  

### Patch 705.1-0029 - 18/07/2024
> - CO - Optimizadas las Registraciones extracontables de cierre (#TT03214/24)  
> - FI - Revisión gestión test de validación de la causale contable en el transcurso de las contabilizaciones (#TT03062/24 - #TT03060/24)  
> - SD - Revisión test de control de la nación cedente/prestatario en factura Sdi para autofacturas, de campo nación al campo código ISO de la partida IVA (#TT03368/24)  
> - WM - En picking, mejorada la accesibilidad al campo lote en caso de que se reabra un picking y el usuario modifique la cantidad en el campo cantidad de retiro. Antes era necesario cambiar línea antes de variar el lote, mientras que ahora ya no es necesario (#TT03228/24)  
> - MS - Corregido bug en el lanzamiento de los pedidos planificados de compra, ahora las RDA creadas se agrupan correctamente por cliente, tipo y año (#TT03382/24)  
> - MES - Corregido bug en la lista de retiro de materiales que no variaba correctamente el estado de los pedidos de producción de lanzado a ejecutivo si se procesaban más de uno a la vez (#TT03383/24)  
> - SD - Corregido error que no permitía realizar un ordenamiento por estado de evasión en la cuadrícula de los Pedidos de clientes (#TT03404/24)  
> - WM - En visualización de existencias, los decimales utilizados por la UM alternativa, son los indicados en el campo UM decimales de la UM alternativa utilizada (#TT03313/24)  
> - FI - en la contabilización de facturas de venta, alineación de la gestión del cambio para la sección de los centros de costo (#TT02172/24)  
> - SCM - contabilización de facturas de compra, asignación de división a las líneas de movimiento del centro de costo para líneas de gastos finales (#TT03239/24)  
> - FI - corregido bug en la generación de recordatorios que en lugar de actualizar la línea para recordatorios posteriores al primero creaba líneas diferentes (#TT03219/24)  

### Patch 705.1-0028 - 12/07/2024
> - Revisión almacenamiento de crédito del año anterior desde impresión definitiva liquidación IVA periódica de enero (#TT02348/24)  
> - PM - planner y wbs asociación recursos - eliminadas de la visualización actividades ya vinculadas a intervenciones (#TT03248/24)  
> - CRM - correo de campañas crm - bloqueado recargado de plantilla de correo, después de que el usuario ha hecho modificaciones previas al envío (#TT03253/24)  
> - SD - Corregido error que no actualizaba correctamente los descuentos finales a raíz de una modificación de la solución de pago (#TT03200/24)  
> - CO - Resuelto bug en el informe Lista de materiales valorizada en la que no se visualizaban los valores del costo de los materiales (#TT03281/24)  
> - MES - Corregido bug en las declaraciones de producción, no se reportaba correctamente el valor de la ubicación del lote en el movimiento de almacén de descarga del material (#TT02156/24)  
> - FI - la contabilización de efectos asigna la fecha de cierre de comisiones en base a la fecha de vencimiento efecto (#TT02657/24)  
> - FI - Error en el registro en la primera nota de ingreso del cliente (#TT03209/24)  
> - MES - Implementada en el pedido de producción la posibilidad de descargar los materiales por cliente/proveedor (#TT03210/24)  
> - Implementación WEBAPI módulo Picking Import/export y Descarga Picking también con la importación de los lotes/número de serie (#TT02551/24)  
> - SD - Widget Descuentos: corregido cálculo totales de línea y documento en la creación DDT y Facturas desde Picking creados desde Orden con el uso del widget Descuentos (#TT03333/24)

### Patch 705.1-0027 - 08/07/2024
> - PM - Calendario - gestionada visualización períodos de vacaciones con fondo de color naranja, también en modo timeline (#TT03117/24)  
> - SCM - en contabilización de facturas de compra, revisión asignación de fecha de registro para el abono automático de la registro “facturas por recibir” (#TT03056/24)  

### Patch 705.1-0026 - 04/07/2024
> - SH - Corregido bug que, en caso de contacto con nación diferente a IT, no hacía visible en los detalles del cliente/proveedor, el campo Régimen fiscal si no era después del cierre y reapertura de la forma (#TT02158/24)  
> - Solved bug to create script events for Sdi documents  
> - Solved bug to analize paramaters for Sdi Documents  
> - SH - añadido nuevo parámetro al comando de duplicar contactos para decidir si los subcuentas vinculados deben ser duplicados para todas las sociedades o solo para la actual (#TT02592/24)  
> - SH - Tab Anagrafica contactos - Corregida anomalía por la cual si se establecía un perfil en la anagrafica contactos el tab de agrupamiento de parámetros cli/for era escondido (#TT02346/24)  
> - FI - la contabilización de efectos asigna la fecha de cierre de comisiones en base a la fecha de vencimiento efecto (#TT02657/24)  
> - FI - corregido bug que no hacía valorizar los centros de costo contabilizando las escrituras de ajuste (#TT02905/24)  

### Patch 705.1-0025 - 01/07/2024
> - SCM - Corregido error que no actualizaba el estado de evasión de las RDA a raíz de la activación del flag Evaso forzadamente en las líneas de artículo (#TT02937/24)  
> - CO - revisión nueva reclasificación para gestión de árbol (#TT02912/24)  
> - PM - al cambio de recurso de intervención, corregido actualización de recurso y empleado en todos los puntos donde el dato está presente dentro de la intervención (#TT02759/24)  

### Patch 705.1-0024 - 28/06/2024
> - FI - Corregido bug en la forma de lanzamiento de la impresión Enasarco que no gestionaba correctamente el filtro para rango de fechas (#TT00824/24)  
> - CO - Revisión rendimiento nueva reclasificación de balance (#TT02912/24)  
> - WMS - Corregido bug en la visualización de los números decimales (#TT02080/24)  
> - WM - Corregido bug en la forma Detalle movimientos en la cual se visualizaban de manera errónea las cantidades calculadas en la UM alternativa (#TT02902/24)  
> - SD - Corregido error que no almacenaba el tipo de Impresión en la tabla Tipos de Orden Cliente (#TT02985/24)  
> - SD - corregido caso en el que en la cuadrícula de búsqueda de facturas se mostraba cero en la columna “Total Imponible” a pesar de que el documento contenía los valores correctos (#TT02991/24)  
> - PM - modificada propuesta de precio en las solicitudes de intervenciones e intervenciones planificadas: si el artículo no está presente y se le asigna un proyecto, artículo y precio son propuestos por el proyecto. Si el artículo ya está presente y se le asigna un proyecto, si el artículo en el documento y en el proyecto coinciden, el precio se actualiza por el proyecto. De lo contrario, se mantiene el precio ya presente (#TT02837/24)  
> - SCM - Si el flag Precio Unidad de Medida Alternativa está activo en la Solicitud de Oferta, al momento de la creación del Pedido proveedor desde Oferta proveedor el flag se reportará también en el pedido creado (#TT02804/24)  
> - Forma de Cumplimiento: Resuelta sincronización entre generación de cumplimiento y actualización de cuadrícula de cumplimiento que en algunos casos devolvía una excepción de valor nulo (#TT02661/24)  
> - SD - Impresión de orden - Corregida anomalía en impresión de destino (#TT02733/24)  
> - CRM - rehabilitado expander en cuadrícula de búsqueda de contactos (#TT02880/24)  
> - PM - mejoradas las señales de servicios superpuestos en las intervenciones (#TT02891/24)  
> - Objeto - SdiPurchaseInvoice - añadir nuevas propiedades: CurrencyCode, BaseAmount, VatAmount, TotalAmount (#TT03008/24)  
> - Permitida la coexistencia de un algoritmo creado con arm y de uno de tipo script.  
> - SD - Recuperación de comisiones por rango de descuento: corregida aplicación % de comisión errónea debido al redondeo del valor neto de la línea (#TT02974/24)  
> - SCM - Corregido bug que no visualizaba Código/Descripción del Artículo proveedor en la forma de Detalle de líneas Pedidos cuando el pedido no estaba evadido (#TT02344/24)  
> - SCM - Los gastos con flag Distribuidos insertados en los resúmenes de documentos ahora son distribuidos sobre los artículos del documento incluso cuando los precios son cero (#TT02336/24)  
> - MES - Corregido bug relativo al campo "Reserva lote de carga" del pedido de producción que no se reportaba correctamente en la declaración de producción (#TT03079/24)  
> - MES - Añadido el campo defecto en las declaraciones de producción. Esto se habilita solamente después de haber insertado una cantidad descartada mayor que cero (#TT01887/24)  
> - FI - nuevo parámetro general para gestionar la emisión de recordatorios sobre partidas cerradas (#TT02936/24)  
> - ARM - reprocesar scripts personalizados al publicar en el servidor  
> - SD - Corrección gramatical del mensaje saliente cuando hay descuentos con la misma prioridad: la palabra incorrecta 'siguiente' se ha corregido a 'siguiente' (#TT03073/24)  
> - SD - Recuperación de Comisiones por rango de descuento: si se definen filas de comisiones 0 se consideran como si fueran un número válido incluso en el caso de más de una fila de definición para rango de descuento y categoría de comisión diferente. Si no se desea considerar la comisión 0 no debe especificarse en la definición (#TT02859/24)  
> - FACTURACIÓN ELECTRÓNICA SM: Al ejecutar la restauración del estado de Generado o descartado Hub SM a Controlado se elimina el archivo de integración de la factura de compra SM, restableciendo el estado a no examinado y también se restablece el nombre del archivo (#TT03054/24)  
> - SH - Análisis de Disponibilidad: el control que si está configurado el flag de lista de materiales haya establecido 1 solo artículo ha sido movido cuando se hace clic en el botón de búsqueda (#TT02783/24)  

### Patch 705.1-0023 - 21/06/2024
> - SD - Añadido el método estático ConvertAllSelectedOffersToSalesOrders para los scripts (#TT01258/21)  
> - SH - Importar excel listas de venta - Corregidas anomalías en fase de duplicación de trazado y en caso de importar el cliente en el registro de artículo (#TT02871/24)  
> - FI - en compensaciones profesionales, revisión campo inps carga percipientes de la primera pestaña en caso de cálculo manual (#TT02802/24)  
> - FI - revisión impresión Control de activos por importe del fondo en caso de enajenaciones totales/parciales (#TT02537/24)  
> - PM - valorización de intervenciones, realizada corrección para valorización parcial (#TT02739/24)  
> - SH - Modificadas las descripciones de los registros en tabla fija “Naturaleza jurídica”, para diferenciar ‘Resident es’ de ‘No residentes’ como por tabla de instrucciones 770 (#TT02870/24)  

### Patch 705.1-0022 - 20/06/2024
> - MES - Corregido bug en las señales de producción referente a la ubicación de los artículos producidos y gestionados a lotes (#TT02667/24)  
> - CRM-CrmContact - cambios de diseño (#TT01258/21)  
> - SD - en la impresión del balance de facturación, revisión gestión signos en el subinforme de los totales para facturado ventas (#TT02720/24)  
> - MS - Corregido error en la elaboración del MRP que generaba el bloqueo de la operación (#TT02408/24)  
> - FI - Falló refresco del botón "Buscar partidas" en registros contables - crash (#TT02089/20)  
> - CRM - Habilitación de la virtualización para las cuadrículas de las campañas y listas de distribución  
> - PM - Asignación de recursos WBS resuelto arrastrar y soltar en calendario desde el segundo recurso en adelante (#TT02544/24)  
> - WM - Corregido bug en la exportación excel de los datos presentes en el informe Implosión componentes que no reportaba el valor en la columna cantidad (#TT02753/24)  
> - SD - Corregido loop en el desalojo automático de DDT con solo artículos nota (#TT03557/24)  
> - MES - Corregido bug en el cálculo del costo del artículo producido con las declaraciones de producción (#TT03408/24)  
> - SD - En las Ofertas de Venta jerárquicas cuando se inserta una línea descriptiva en la pestaña Materiales se asocia un tipo de línea 2 (#TT03420/24)  
> - SCS - En los Pedidos de Trabajo se ha añadido un nuevo parámetro en los Datos materiales propuestos denominado “Desde el pedido de producción” usado para el recalculo de las cantidades de los materiales. Se establece automáticamente a la creación de un pedido de trabajo desde fase externa de un pedido de producción, al lanzamiento de un pedido planificado de producción con fase externa y al lanzamiento de un Pedido de Trabajo planificado. Para la propuesta de los datos de los materiales en el pedido de Trabajo es ahora posible tener un parámetro diferente para cada línea de artículo (#TT02097/24)  
> - WM - Corregido bug en análisis disponibilidad (#TT03349/24)  

### Patch 705.1-0021 - 13/06/2024
> - MS - Lanzamiento de Pedidos planificados - Recalculo erróneo cantidad total consumo materiales si Pedido dividido en más lotes (#TT01949/24)  
> - WMS - Corregido bug en la forma Gestión UDC del WMS que proponía un almacén también en caso de que hubiera más de uno asociado a ese usuario. Entonces, en caso de más almacenes, el almacén se propone vacío y debe ser seleccionado manualmente por el usuario (#TT02639/24)  
> - MES - Implementada la gestión de los sitios productivos en el lanzamiento de pedidos planificados, en los pedidos de producción y en las declaraciones de producción (#TT02188/24)  
> - FI - alineado comportamiento de la impresión control de activos que ahora devuelve los resultados de todas las categorías si no se selecciona ninguna categoría en particular (#TT02502/24)  
> - SD - Corregido error que nombraba la impresión ‘Facturado’ erróneamente como ‘Lista de facturas’ (#TT02669/24)  
> - PR - Giroconto IVA erróneo después de insoluto (#TT02378/23)  
> - WM- Corregido bug en la gestión de prototipos que no visualizaba correctamente el flag ficticio de los artículos (#TT02679/24)  
> - MS - Añadido mensaje de error en el procedimiento de Lanzamiento de pedidos planificados en caso de que el pedido planificado a lanzar esté abierto por otro usuario (#TT02620/24)  
> - SD - Al convertir una oferta en pedido, se propagan desde la oferta al pedido todos los datos relativos a la línea de artículo en común entre los dos tipos de documento (#TT02613/24)  
> - SD - Corregido error (con mensaje ‘Primer carácter no válido’) que impedía la inserción de la Máscara en el procedimiento de Creación de Listados Avanzada (#TT02648/24)  
> - Nueva webapi para la import/export de archivos Sdi (#TT01950/24)  
> - SCM - Las notas de entrega de la compra no deben ser eliminadas si contienen documentos SDI (#TT02436/24).

### Patch 705.1-0020 - 07/06/2024
> - SH - Algoritmos de agrupamiento: añadido el orden por propiedad Cadena de números (#TT02403/24/19)  
> - Solved bug with Supervisor global parameters  
> - SCS - Redondeo por Cdc en la orden de compra, DDT de compra, Factura de compra TT02500/24.  
> - SCM - La solicitud de compra debe considerarse ejecutada si se ejecutan todas las líneas, excepto las líneas de nota TT02389/24.  
> - SH - Corregidos bugs en Gestión de prototipos, relativos a los botones cortar e importar; además se han realizado otras mejoras (#TT01978/24)  
> - MS - Corregido error en la visualización de la disponibilidad en el procedimiento de Generación automática de órdenes de subescota (#TT02448/24)  
> - PM - Planner correcta visualización de algunas citas (#TT02505/24)  
> - PM - Planner seleccionando un nuevo recurso en el filtro, el calendario se actualiza automáticamente sin necesidad de presionar buscar (#TT02539/24)  
> - PM - Planner resuelto caso de eliminación de cita relativa a recurso de proyecto que eliminaba toda la wbs (#TT02504/24)  
> - WM - Eliminado el flag "Descarga lote" en las causales de almacén porque es obsoleto (#TT02465/24)  
> - WMS - En la forma de Existencia artículo del WMS, se han ocultado los artículos con existencia igual a cero y las ubicaciones con cantidad igual a cero (#TT02177/24)  
> - SD - No es posible eliminar los avisos a los que están adjuntos documentos SDI (#TT02438/24)  
> - FI - revisión cierre de comisiones en registros contables de ingreso/pago (#TT02501/24)  
> - PR - Corregido problema en el procedimiento Creación automática de pagos a proveedores cuando el nombre del banco o el nombre del proveedor a pagar contenía el carácter & (#TT02183/24)  
> - SD - Desde las Búsquedas de documentos es posible ejecutar los procedimientos de la barra de herramientas, incluso posicionándose en las pestañas del Workflow (#TT02533/24)  
> - PM - Resuelta casuística por la cual el estado del proyecto se establecía automáticamente como evadido (#TT02635/24)  
> - SCM - Corregido error que impedía el Rollback de la carga de un DDT si estaba valorada (#TT02049/24)  
> - SCM - Añadir el filtro Estado de la nota de entrega electrónica en la ventana de búsqueda Nota de entrega de la compra TT02645/24.  
> - MES - Corregido error en las Declaraciones de Producción que no permitía la restauración del registro en caso de que hubiera una referencia en tabla PM_ProjectItemDetails (#TT02419/24)  
> - ARM - fix Open Tile for editing  
> - PM - correcta visualización % de avance y líneas descriptivas en el informe detalle avance proyectos (#TT01386/24)  
> - MS - Corregido error en la Generación automática del flujo de producción desde el Pedido de cliente que no generó el mensaje de resumen con las órdenes y los pedidos creados (#TT02578/24)  
> - FI - revisión gestión de centros de costo en contabilización de facturas de venta (#TT02621/24)  
> - CO - Optimizada la procedimiento de cálculo de costo (#TT02255/24 - #TT02209/24)  

### Patch 705.1-0019 - 31/05/2024
> - WM - Corregido bug en la visualización de los errores del procedimiento de valorización de almacén en caso de que estos fueran más de 100.000 (#TT02320/24)  
> - SD - Corregido problema en los documentos de venta que no gestionaba adecuadamente la comisión en presencia simultánea de agentes vinculados a un destinatario/destino del cliente y NO vinculados a ningún destinatario/destino sino simplemente al cliente (#TT00273/24)  
> - MS - Minutos Centesimales en las horas de trabajo de los CDL + nuevas reglas de validación (#TT01592/24)  
> - FI - Resuelto problema que generaba un error cerrando la forma Visualización cuentas después de que se había ejecutado la ordenación sobre la columna Fecha de Registro (#TT02041/24)  
> - PR - revisión impresión flujo de caja para totales más allá de la fecha final (#TT00241/24)  
> - SCM - Resuelta señalización en la inserción de un nuevo tipo de factura de compra (#TT02345/24)  
> - FL Browser - Resuelto error en las cuadrículas de evasión que a veces no permitía la modificación de la cantidad a evadir (#TT02036/24)  
> - FI - Contabilización de facturas de compra entrantes: revisión propuesta de la fecha de competencia dentro del registro contable creado (#TT01888/24)  
> - FI - en la máscara de búsqueda de partidas, reactivado el botón de actualización del estado de las partidas (#TT02145/24)  
> - FI - la recuperación de amortización de activos del módulo de cierres interanuales ahora aplica, si está presente, el porcentaje personalizado de la cabecera de activos prioritariamente sobre el porcentaje en la categoría de activos (#TT02070/24)  
> - MS - Ahora, al crear un nuevo artículo, por defecto no se activa el flag "Excluir de MRP" presente en los parámetros MRP (#TT02364/24)  
> - FI - revisión del procedimiento de giroconto de partidas para cierre de IVA en suspensión (#TT02398/24)  
> - SCM, SCS - Cuando se modifica el flag Precio Unidad de medida Alternativa dentro de una Factura de compra que valora un Regreso de Trabajo, este también se modifica en el Regreso y en la correspondiente registración, si está presente. Cuando el flag se modifica desde el interior del Regreso de Trabajo, los importes se recalculan también en la Registración de almacén (#TT00698/24)  
> - R.N. en caso de que se importe en los documentos SDI de compra entrante un archivo que presenta datos que no cumplen con el formato, ya no se genera una excepción sino que el visualizador presentará una página en blanco (#TT02322/24)  
> - PM - en la forma de búsqueda de proyectos ahora es posible seleccionar un solo campo de la cuadrícula, copiarlo y pegarlo, sin que se reporten los datos de toda la línea seleccionada (#TT02275/24)  
> - SH - Resuelto el problema del guardado de parámetros para LogonUser y LanguageUser (#TT02381/24)  
> - FI - corregido bug que no gestionaba correctamente el giroconto IVA en el ámbito del IVA para caja, cuando la partida cobrada era originada por una RiBa previamente insoluta (#TT02378/23)  
> - FI - revisión impresión liquidación IVA periódica por periodo sin datos (#TT01779/24)  
> - SH - Gestión de documentos - corrección del error de exportación de archivos a través del flujo de trabajo por falta de empresa (#TT02481/24)  
> - FI - en la reconciliación manual de cuentas corrientes, habilitada la posibilidad de cambiar fechas de filtro (#TT02390/24)  
> - PM - Impresión detalle proyectos, gestionada evasión parcial y casos de documentos trasladados a almacén con artículos ficticios o gastos (#TT02435/24)  
> - SCM - Mejorado el tiempo de inserción de artículos en las RDA y de generación RDO desde RDA en el caso de documentos con cientos de filas (#TT02039/24)  
> - SCS - En el momento de la registración de un Regreso de Trabajo se verifica primero la existencia de los materiales en la fecha actual y posteriormente a la fecha utilizada para la registración de almacén (#TT02394/24)  
> - PR - reconciliación de cuentas corrientes automática, cierre de cuadro de mensaje para visualizar el mensaje de ‘Espere…’ (#TT02392/24)  
> - SD - Cuando en los parámetros del área de Ventas está activo el flag ‘Bloquear inserción de documento en fechas festivas de calendario de fábrica’ el control de la fecha festiva se realiza primero en el Calendario de Fábrica, luego en el Calendario de las capacidades productivas (#TT02396/24)  
> - SCS - Cuando se inserta un Pedido de Trabajo para un proveedor que tiene un precio predeterminado, si el artículo insertado no está presente en la lista de precios, el precio propuesto es cero (#TT02234/24)  
> - FI - en los registros contables, revisión verificación dimensiones de los centros en el plan de cuentas (#TT02324/24)  
> - FI - contabilización de facturas de compra, revisión redondeos centros de costo (#TT02483/24)  
> - MES - Corregido bug en las señales de producción que visualizaba la UM errónea en el campo cantidad fase (#TT02459/24)  
> - FI - corregido error al rollback de registro de factura de compra conectada a una tarjeta de activo fijo (#TT02207/24 - TT02277/24)  
> - MES - desarrollo declaraciones materiales con ubicación (#TT00577/24)  
> - MES - desarrollo web api service para registro de declaraciones de producción (#TT02440/24)  
> - SH/CRM - Nuevas propiedades en CrmContactReference y en FSContactReferencePerson (#TT02493/24)  
> - "Posibilidad de elección "Causale" en tab artículos en los documentos de compra (#TT02561/24)  

### Patch 705.1-0018 - 23/05/2024
> - SD - Revisión de la impresión de las comisiones devengadas para el caso de la cobranza de una partida reabierta después de un impago (#TT02095/24)  
> - CO - Recuperación de amortización de activos de los cierres interanuales, revisión gestión centros de costo (#TT02315/24)  
> - Lanzamiento de nueva impresión 2024 del informe efectivo para localización CH  
> - SCM - Creación de nuevo informe para los pedidos de proveedores 'Calendario con UM alternativa' con las siguientes propiedades: fechas en formato europeo, columna Cantidad residual, columna UM, consideración de la UM alternativa en el precio si se prevé en el documento (#TT01802/24)  
> - PM - Implementado nuevo planner (#TT00759/24)  
> - Resuelto bug sobre la importación de pagos desde sistemas (#TT02369/24)  
> - ARM - Ribbon Editor: permite al usuario visualizar el ribbon de modificación también en otros idiomas.  
> - MS - Planificación general - Corregida anomalía de propuesta de fechas en los Pedidos planificados (#TT02150/24)  
> - FI - Webapi de importación de los registros contables, revisión gestión del algoritmo de valorización de la descripción del movimiento establecida en la causale contable (#TT02143/24)  
> - PM - SAL proyecto - corregido cálculo costo último (#TT01750/24)  
> - PM - modificados códigos SAL relativos a las facturas de compra venta. Los códigos con especificado "no contabilizada" consideran solo las facturas con flag contabilizada NO activo, donde no especificado en cambio se consideran TODAS las facturas, contabilizadas o NO contabilizadas. Códigos afectados: PRCC005 - PRCC006 - PRCC007- PRCC008 - SLSP004 - SLSP005 - SLSP006 - SLSP007 (#TT02187/24)  
> - Browser - forma perfiles correcciones generales - #TT02162/24  
> - SD - En la línea del abono se reporta ahora también el proyecto, si está presente en la línea artículo de la factura de abono (#TT02170/24)  
> - CO - cierres internos, corregido bug en el cual las 'escrituras de integración' devolvían valores erróneos en los centros de costo (#TT02319/24)  

### Patch 705.1-0017 - 16/05/2024
> - PR - corregido bug que utilizaba en el flujo de caja la cuenta cliente tercerista para fases externas en el pedido de trabajo en lugar del proveedor efectivo (#TT02034/24)  
> - SD - Ofertas Multinivel: insertando el Ingreso total en la línea de los recursos, el porcentaje de recargo se calcula automáticamente en base a las horas y costo total (#TT02119/24)  
> - FI - revisión de las fechas de competencia económica asignadas a los registros de reapertura de ajustes desde el cierre automática de cuentas (#TT01535/24 - #TT01814/24)  
> - CO - en el nuevo cierre interanual, eliminada la propuesta de los filtros por fechas documento (#TT01594/24)  
> - FI - en la compensación de partidas, revisión gestión de filtros de partidas respecto al tipo de compensación, gestión de decimales en los campos en cuadrícula (#TT02113/24)  
> - PM - Asignación de recursos WBS, resuelta casuística de citas recurrentes (#TT02132/24)  
> - MES - En las Declaraciones de Producción se ha añadido el detalle de la Ubicación en el mensaje de error debido a existencia insuficiente (#TT02064/24)  
> - SCS - En los DDT y en los Regresos de Trabajo el lote en los materiales se propone automáticamente si la tipología de retiro es FIFO o A vencimiento (#TT01140/24)  
> - SH - En las Facturas de Venta y en los DDT de Venta y de Compra ahora es posible insertar pesos con cifras decimales (#TT02163/24)  
> - SH - Arrastre de imágenes: establece el tipo de archivo del documento como 'JPG' cuando la extensión del archivo es 'JPEG' (#TT02210/24)  
> - SCM - Resuelto error que no permitía la inserción de un Pedido Proveedor (#TT02181/24)  
> - SCM - Resuelto bug que no guardaba correctamente un perfil en las Solicitudes de Compra con filtro No evadidas (#TT02123/24)  
> - MES - Corregido bug en Lista de retiro de materiales en caso de que estuviese habilitado el flag "Asocia lote para lista de retiro" presente en los parámetros de producción. Ahora el lote asociado al material en la orden de producción se reporta correctamente también en los pickings creados con la Lista de retiro de materiales (#TT03026/23)  
> - WM - Corregido bug en gestión de UDC en caso de que se efectuara el desalojo UDC (#TT02040/24)  
> - WM, SCM, SCS , SD- Corregido bug en la formulación del progresivo del código lote (#TT02142/24)  
> - FI - Intrastat 2, fluentis545 - Error en recuperación de datos desde registros CustomPosting (#TT02243/24)  
> - SD - Versiones de ofertas visibles correctamente en base al flag "visualizar todas las versiones" también en las pestañas de los estados del flujo de trabajo (#TT02228/24)  
> - CO - Revisión totalización grupos en el informe de valorización reclasificaciones, en caso de comparaciones  
> - WM - Corregido bug en análisis disponibilidad. Ahora la cantidad de materiales presentes en los pedidos planificados, con unidad de medida utilizada indicada en la lista, son correctas (#TT02227/24)  
> - PR - Contabilización de pagos a proveedores, revisión gestión notas de línea cuando la causale no prevé el agrupamiento de pagos en diario (#TT01702/24)  

### Patch 705.1-0016 - 09/05/2024
> - FI - revisión recuperación valores de registros para sección quater (#TT01985/24)  
> - PR - Optimización del Flujo de Caja desde DDT de Compra (#TT01754/24)  
> - FI - Escrituras de ajuste: revisión descripción detalle en los registros contables creados automáticamente por el procedimiento (#TT00503/24)  
> - Resuelto el problema de encabezado oculto de los scripts en Blazor  
> - Resuelto el problema del inicio de JavaScript en Blockly  
> - MS - Implementada en análisis de disponibilidad y planificación la gestión de los sitios productivos (#TT01836/24)  
> - CO - Revisión gestión de fórmulas de cálculo para controlling (#TT01668/24)  
> - SD - Corregido error en la duplicación de un Pedido Cliente para el cual está activo el flag de Creación de Proyecto Automático (#TT02058/24)  
> - SH - El procedimiento de Duplicar artículo reporta también las Notas de los Proveedores preferenciales (#TT01580/24)  
> - WM - Corregido bug en el procedimiento de valorización de almacén (#TT02037/24)  
> - FI - La contabilización de compras/ventas valoriza la provincia de la sección intrastat filtrando por país igual al de la sociedad (#TT02098/24)  
> - SCM - En la cuadrícula del Navegador artículo se han añadido las columnas relativas a Código y Descripción variante (#TT01890/24)  
> - SCM - En la anagrafica artículo, pestaña Listas de Proveedores se han añadido las columnas relativas a Código y Descripción variante (#TT01851/24)  
> - Arreglado botón "Importa archivo XML" que resultaba faltante en "Documentos de compra entrante (#TT02121/24)  
> - WMS - Ahora en la forma Recepción de Mercancías del WMS, si en los parámetros de almacén carga/descarga por usuario está asociado para ese usuario un solo almacén se propone por defecto ese, de lo contrario, si hay más de uno asociado, no se propone ninguno por defecto y el usuario puede elegir solo entre uno de los ingresados (#TT01909/24)  
> - PM - SAL de proyecto, gestionada inclusión de costos de ddt de venta también en caso de artículo con precio de venta a 0 (#TT02018/24)  
> - WMS - Ahora en la forma Carga de artículo del WMS, si en los parámetros de almacén carga/descarga por usuario está asociado para ese usuario un solo almacén se propone por defecto ese, de lo contrario, si hay más de uno asociado, no se propone ninguno por defecto y el usuario puede elegir solo entre uno de los ingresados (#TT01892/24)  
> - WMS - Ahora en la forma Descarga de artículo del WMS, si en los parámetros de almacén carga/descarga por usuario está asociado para ese usuario un solo almacén se propone por defecto ese, de lo contrario, si hay más de uno asociado, no se propone ninguno por defecto y el usuario puede elegir solo entre uno de los ingresados (#TT01893/24)  
> - WMS - Ahora en la forma Mover artículo del WMS, si en los parámetros de almacén carga/descarga por usuario está asociado para ese usuario un solo almacén se propone por defecto ese, de lo contrario, si hay más de uno asociado, no se propone ninguno por defecto y el usuario puede elegir solo entre uno de los ingresados (#TT01894/24)  
> - WMS - Ahora en la forma Ajuste de artículo del WMS, si en los parámetros de almacén carga/descarga por usuario está asociado para ese usuario un solo almacén se propone por defecto ese, de lo contrario, si hay más de uno asociado, no se propone ninguno por defecto y el usuario puede elegir solo entre uno de los ingresados (#TT01895/24)  
> - WMS - Ahora en la forma Existencia artículo del WMS, si en los parámetros de almacén carga/descarga por usuario está asociado para ese usuario un solo almacén se propone por defecto ese, de lo contrario, si hay más de uno asociado, no se propone ninguno por defecto y el usuario puede elegir solo entre uno de los ingresados (#TT01896/24)  
> - WMS - Ahora en la forma Listas de picking UDC del WMS, si en los parámetros de almacén carga/descarga por usuario está asociado para ese usuario un solo almacén se propone por defecto ese, de lo contrario, si hay más de uno asociado, no se propone ninguno por defecto y el usuario puede elegir solo entre uno de los ingresados (#TT01905/24)  
> - WMS - Ahora en la forma Gestión UDC del WMS, si en los parámetros de almacén carga/descarga por usuario está asociado para ese usuario un solo almacén se propone por defecto ese, de lo contrario, si hay más de uno asociado, no se propone ninguno por defecto y el usuario puede elegir solo entre uno de los ingresados (#TT01906/24)  
> - WMS - Ahora en la forma Listas de Transferencias UDC del WMS, si en los parámetros de almacén carga/descarga por usuario está asociado para ese usuario un solo almacén se propone por defecto ese, de lo contrario, si hay más de uno asociado, no se propone ninguno por defecto y el usuario puede elegir solo entre uno de los ingresados (#TT01903/24)  
> - FI - registro de pago/cobro en moneda extranjera, si los pagos son de la misma moneda que la cabecera del registro y no hay líneas manuales entonces el total del documento en moneda corresponde al valor en la moneda cerrado. Si hay pagos en otras monedas y/o líneas manuales, en cambio, el total en moneda será el cálculo del contravalor moneda del total debe/haber en moneda de sociedad (#TT01703/24)  
> - SD - En la creación de archivo Sdi en facturas/notas de crédito en moneda, revisión gestión de redondeos (#TT1703/24 - #TT02135/24)  
> - Arreglado el traslado de artículos de tipo nota en los DDT de compra con evasión de pedidos de Proveedor (#TT02130/24)  
> - WM - Corregido bug en anagrafica lotes que no visualizaba correctamente los decimales (#TT02055/24)  
> - SD - Notas de lanzamiento: en la Conversión de Oferta a Pedido, los descuentos finales artículos insertados en la Oferta se reportan en las líneas artículo del Pedido (#TT02103/24)  

### Patch 705.1-0015 - 30/04/2024
> - SD – El control sobre la Fecha Mercancía Lista, que debe ser menor o igual a la Fecha entrega, se ha insertado también en la Cabecera del Pedido cliente (#TT01711/24)  
> - Browser - fix bindings not working anymore after 'new' in an object form (TT01885/24)  
> - Fix Blazor Contact-grid Item-client layout problem (#TT01258/21)  
> - FI - Removidos los flags de las partidas no pagables de las formulaciones de creación de pago a proveedores, creación automática de pagos a proveedores, tab de pagos de la contabilización de pago, compensación de partidas. (#TT01701/24)  
> - WMS - En las formulaciones de gestión de selección y Confirmación de picking del WMS, revisada la propuesta de la existencia en caso de que el lote del artículo ya estuviese insertado en el picking. (#TT01435/24)  
> - Nuevo diseño para azulejos  
> - Añadir visor de pivote a los paneles de control  
> - SH - Import webApi - Fix propose FormattedNumber (#TT02622/23)  
> - Browser – fix column order when saving profiles (TT01946/24)  
> - Solved layout bugs on Blazor-Supervisor & BizLink  
> - SH - Nuevo mensaje de aviso si al configurar la anagrafica de una persona física no se llenan el nombre y el apellido y nuevo mensaje de error generando el archivo de la factura electrónica sin estos datos.( #TT01700/24)  
> - PM - Fix null error on project details report (#TT01087/24)  
> - Fluentis Browser - MS - Filtro de Pedidos planificados – bug fix - Color de filas de cuadrícula faltantes (#TT01826/24)  
> - Fluentis Browser - MES – bug fix - tabulador "Documentos e Instrucciones operativas" desaparece el área correcta (#TT01970/24)  
> - PR - revisión recuperación de datos desde regresos de trabajo en el flujo de caja (#TT01934/24)  
> - FI - comunicación trimestral de IVA, alineación 2024 (TT01141/24)  
> - SCM – Corregido error que impedía la modificación de las Ediciones en el Pharma (#TT01753/24)  
> - PM - el valor de los datos adicionales del proyecto se carga en la cuadrícula de la forma de búsqueda (ticket 01740/24)  
> - PM – Resuelta casuística en “Impresión detalle de proyecto” que no reportaba las escrituras contables con conexión solo a la cabecera del proyecto y no a los artículos. (#TT01087/24)  
> - FI - Centro de costos de las notas de entrega no visible en contabilización general y Análisis de movimientos para el informe de centros de costo (TT01521/24)  
> - SH - Direcciones alternativas: revisión guardado de los campos nombre y apellido dentro de las direcciones alternativas (TT01794/24)  
> - Fluentis Browser - MES - Hoja de Trabajo – bug fix - Expander "Ordenamiento" parpadea (#TT01968/24)  
> - FL Browser – MS - error en el turno de trabajo en detalle eliminar (#TT01673/24)  
> - Eliminadas pestañas en el Editor de Scripts  

### Patch 705.1-0014 - 29/04/2024
> - FI - Resuelto el error de redondeo al crear un registro desde una factura de venta con otra moneda y cuando el IVA no era igual a 0.  
> - SH - Fluentis Browser - solucionados problemas en la pestaña Documentos de la ayuda artículos (#TT01258/21)  
> - WM - Fluentis Browser - solucionados problemas generales en los lotes (#TT01258/21)  
> - SD - Fluentis Browser - solucionados problemas de selección en las cuadrículas (#TT01258/21)  
> - PR - revisión del cálculo del flujo de caja a partir de órdenes de trabajo (#TT01609/24)  
> - FI - Revisión contabilización de pagos percipient esporádicos por numeración de pago/partidas y agrupamiento por subcuenta (#TT01285/24)  
> - FI - Revisión cálculo de partidas por facturas de compra de activos en el extranjero sin movimiento de IVA (#TT02800/23)  
> - FI - Fluentis Browser - Corregido el problema de la creación automática del diseño de asentamiento de agentes (#TT01258/21)  
> - MES - Fluentis Browser - Resuelto bug en las cargas (#TT01874/24)  
> - QY - Fluentis Browser - Añadidos objetos faltantes en el Instrumento de Medida (#TT01882/24)  
> - MES - Fluentis Browser - Añadidos campos no visibles en los Pedidos de Producción (#TT01655/24)  
> - MES - Fluentis Browser - Añadido scrollbar vertical en la Generación automática Calendario Capacidades Productivas (#TT01652/24)  
> - MES - Fluentis Browser - "Tipo cotización de trabajo" en el Tipo de documentos no se anula si modifico el "Código estándar" (#TT01741/24)  
> - SD - Fluentis Browser - resueltos varios errores en la selección en los documentos (#TT01258/21)  
> - SD - Fluentis Browser - Solucionados problemas de diseño en la Creación de DDT desde Picking (#TT01258/21)  
> - WM - Fluentis Browser - solucionados problemas generales de localización (#TT01258/21)  
> - PM - Fluentis Browser - optimización de asignación wbs de proyectos (#TT01784/24)  
> - CO - Fluentis Browser - Solucionados problemas de eliminación de Ventas anuales (#TT01258/21)  
> - FI - revisión liquidación de IVA de la localización Croata (#TT03562/23)  
> - FI - revisión gestión de comisiones de agentes en contabilidad, por cobros parciales y por contabilización de facturas con total 0 (#TT01822/24)  
> - FI - revisión impresión definitiva liquidación de IVA periódica en enero para salvamento de crédito del año anterior/crédito del periodo anterior (#TT01160/24)  
> - WM - Fluentis Browser - Optimización diseño Prototipos (#TT01529/24)  

### Patch 705.1-0013 - 24/04/2024
> - SH - Corregido error en el Análisis Disponibilidad que aparecía cuando no se habían insertado los almacenes y las causales dentro de los Parámetros de Órdenes de Producción (#TT01765/24)  
> - PM - Gestión de exportación en excel de los campos calculados en la cuadrícula del SAL (#TT01433/24)  
> - SD - Si el cliente persona física no tiene nombre/apellido cumplimentado, el archivo Sdi se valora en la etiqueta Denominación con la Razón social del cliente. En el caso de que falte solo nombre o solo apellido, la creación del archivo se bloquea (#TT01700/24)  
> - FI - compensación rápida, revisión procedimiento para cierre de comisiones asociadas a las partidas (#TT01664/24)  
> - FI - Fluentis Browser - Corregidos errores de validación en el plan de cuentas (#TT01464/24)  
> - SH - Optimización visualización Datasource.  
> - SD - La búsqueda se realiza en base a la prioridad también en el caso de más líneas para la misma tipología de comisión (#TT1695/24)  
> - MS - Fluentis Browser - MS - F.C.S. - Revisión diseño de los parámetros de FCS del tabulador (#TT01827/24)  
> - MES - Fluentis Browser - MES - Filtro de recursos de producción - Añadido la barra multifuncional faltante en el módulo emergente “Importar” (#TT01764/24)  
> - MES - Fluentis Browser - MES - Hoja de Trabajo - Corregido bug en múltiples ordenamientos (#TT01873/24)  
> - SH - Fluentis Browser - Corregida la línea del filtro del listado de árbol que no funciona como se espera (#TT01845/24)  
> - SD - Corregido error que no poblaba los ‘Materiales Conai para el artículo’ en las notas de crédito (#TT01841/24)  
> - PM - WEB se realizaron mejoras en el planner en la parte web (#TT01782/24)  
> - SH - WebApi - Corregida la búsqueda en referencias de propiedades que empiezan con el mismo nombre  
> - FI - WebApi - Corregida la importación de registros con VatReferenceNumber  

### Patch 705.1-0012 - 23/04/2024
> - ARM - Posibilidad de incluir las soluciones Ribbon snapshots (#TT02656/23)  
> - MES - Browser - bug fix para Control de Uso de Recursos - Revisión de diseño y Localización (#TT01720/24)  
> - CPM - Browser - unidad de medida de centros de costo, módulo de duplicación no era visible correctamente (#TT01675/24)  
> - SH - Resolución de problemas en cierre de Parámetros de venta (#TT01258/21)  
> - MES - Fluentis Browser - Flag Activa bug fix para Equipos (#TT01651/24)  
> - MES - Browser - Flag Activa bug fix para Herramientas (#TT01742/24)  
> - SH - Fluentis Browser - Dashboard705V1 (panel de control) (#TT01471/24)  
> - CRM - Fluentis Browser - resolución de problemas generales (#TT01509/24)  
> - FI - comunicación trimestral de IVA, alineación 2024 (#TT01141/24)  
> - SH - Fluentis Browser - Corregido alineamiento visual de las celdas de las estructuras en árbol (#TT01845/24)  
> - SCM - Corregido error que proponía la misma ‘Descripción artículo proveedor’ en el procedimiento de 'Evasión pedidos', para todos los proveedores preferenciales del artículo (#TT01501/24)  

### Patch 705.1-0011 - 22/04/2024
> - SD - Fix Blazor Crm Tickets- cantidades suma problema (TT1258/21)  
> - WM - Corregido error que no permitía la generación de un DDT desde la Lista de Retiro UDC (#TT01595/24)  
> - FI - Nueva contabilización de anterior nueva contabilización no guardada (#TT01832/24 y #TT01611/24)  
> - MS - browser - bug fix para Lanzamiento de pedidos planificados pop-up Resumen - (#TT01630/24)  
> - MS - bug fix para eliminar líneas en Turnos de trabajo (TT01673/24)  
> - Browser - mejorada navegación por teclado dataGrid (TT01504/24)  
> - Browser - prevenir incremento de edición de giro desde las flechas (TT01537/24)  
> - Browser - fix dataGrid no guardando cambios en columnas en perfiles (TT01739/24)  
> - SH - proponer nombre de archivo de exportación desde la vista previa de impresión si el documento tiene la transformación "ReportAttachFileName" (TT00837/24)  
> - Browser - fix tab/enter no seleccionando la fila enfocada en el dropdown a veces (TT01508/24)  
> - SCM - Si un documento de compra ya está cargado, no se puede cambiar el código de lote (#TT01712/24)  
> - SD - Fix Blazor Carrier - Ayuda problema de Contacto (TT1258/21)  
> - PM - SAL de proyecto, hecho posible arrastrar y soltar campos desde el objeto  
> - SCM/SCS - Fix Blazor Carrier - Ayuda problema de Contacto  
> - MS - browser - bug fix para Calendario de Fábrica,  Calendario Capacidades Productivas  (TT01524/24)  
> - MES - browser - bug fix para visualización de tabs Recursos de producción  (TT01766/24)  
> - SD - Corregida la visualización de los Diagramas de Evasión para los documentos que contienen solo líneas artículo de tipo 2 (#TT01445/24)  
> - MES - browser - bug fix en el Folio de Trabajo - deshabilita eliminación de líneas (TT01719/24)  
> - CO - Browser - lower grid for cost center link to projects, all columns are active ( TT01671/24)  
> - CO - Browser - controlling formulas ( TT01668/24)  

### Patch 705.1-0010 - 19/04/2024
> - Scm - gestión de datos de devengo de facturas de compra para la versión RO  
> - SD - Fix Blazor Crm Tickets- problemas de modo de visualización (TT01258/21)  
> - MS - FL Browser: Generación de órdenes de producción (TT01543/24)  
> - MS - FL Browser: Orden de producción (#TT01614/24)  
> - ARM - Solucionar diagramas estándar guardados como personalizados (#TT01751/24)  
> - Browser - arreglo control de árbol para editar fila (#TT01670/24)  
> - Browser - arreglo excepción en controles de datos  
> - Browser - problemas de cpm (uno también está en Wpf)  ( TT01685/24)  
> - Browser - liquidación de IVA impresa en definitiva, blazor me permite cambiar el código de IVA mientras que el wpf (correctamente) no ( TT01631/24)  
> - SD - Corregido error en el Detalle Movimientos que visualizaba algunas cantidades con signo erróneo (#TT01546/24)  

### Patch 705.1-0009 - 18/04/2024
> - FI - corregir error en recalcular registro automático  
> - Referencia faltante para BlazorApp corregida  
> - SD - Fix Blazor LoadPlan-insert order problem (TT01258/21)  
> - FI - registro automático relacionado con el impuesto ambiental - versión RO ( TT01749/24)  
> - SD - Fix Contact-operation Calculation Discount problem (TT01258/21)  
> - FL Browser: el menú de dashboard no se abre y la página de inicio no muestra nada (#TT01612/24)  
> - Browser - impresión definitiva (diario, liquidación IVA, registro de IVA) no está ejecutando actualizaciones 'después de procesar' (#TT01566/24)  
> - SD - Fix SalesOrder status problem (TT01258/21)  
> - PM - Webapi importación declaración de actividad, corregida gestión campo TotalTime y valores inicio-fine pausa (#TT01627/24)  
> - FL Browser: no se puede usar la expresión de filtro dinámica (#TT01637/24)  
> - FL Browser - Arreglar colores en la secuencia de Fase. (#TT01632/24)  
> - FL Browser: Planificación Parte 2. (#TT01614/24)  
> - FL Browser: Planificación parte 1. (#TT01531/24)  
> - SD - Fix Blazor SalesForecast - problemas de DataRetrieve (TT01258/21)  
> - Fluentis Browser - MES - Corregido bug en Registro de Declaraciones (TT01757/24)  
> - Fluentis Browser - MES - Corregido ribbon en Declaraciones de Producción (TT01759/24)  
> - FL BROWSER - Blazor - Certificación única ( TT00965/24)  
> - Fluentis Browser - MES - Corregir fechas recalculadas (TT01656/24)  
> - SD - Fix FL Browser - oferta de ventas jerárquica convertida a un pedido y proyecto, no inserta material y recursos en el pedido de venta (TT01777/24)  
> - FI - en el registro contable, bloqueada la posibilidad de modificar líneas de pago derivadas de pagos percipientes, se debe ejecutar el rollback y modificar el importe de pago en el procedimiento de contabilización. (#TT00909/24)  
> - FI - Browser - plantilla de contabilización, combo de fecha de devengo de IVA no se abre ( TT01659/24)  
> - FI - Nota de lanzamiento: la fecha de filtro de Visualización de balance ahora se basa en la fecha de competencia de la cabecera y no más en la fecha de registro (#TT01243/24)  
> - SD - Fix FL Browser: misma oferta abierta en modo de edición en el navegador + wpf al mismo tiempo (TT01778/24)  
> - FI - cálculo de comisiones de pago total en moneda USD  ( TT01696/24)  
> - Solved bug to create script client side for namespace different form FluentisErp  
> - SD - Fix Blazor Contact client-tab Delivery (TT01258/21)  
> - SD - Fix enlace de diccionario incorrecto para agrupación de procedimientos (TT01258/21)  
> - FI - Alinear Vencimiento en otra moneda cuando hay diferencias con el Libro Mayor de Asientos ( TT01805/24 )  
> - CO - Browser - nuevas grabaciones dentro de cierre interno, o manual área grabaciones ( TT01536/24)  
> - SH - Fluentis Query Studio para Blazor (TT00907/24)  

### Patch 705.1-0008 - 16/04/2024
> - SD - Fix FL Browser: Generación de órdenes de producción (ticket TT01543/24)  
> - SD - Fix FL Browser: Logística parte 2 (ticket TT01511/24)  
> - Browser - arreglar fila de filtro para referencias en los resultados de datos de filtros de lectura-escritura  
> - WM - FL Browser: Planificación parte 1 (#TT01531/24)  
> - MS - FL Browser: Generación de órdenes de producción (TT01543/24)  
> - SD - Fix Blazor SalesPriceList Creation-error decimales (TT01258/21)  
> - PM - corregido filtro de proyectos de tipo plantilla en la conversión de oferta a pedido y proyecto (#TT01479/24)  
> - WM - Inventario a cantidad valorizada - Corregida anomalía en el ‘Valor unitario’, propuesto en el informe de ‘Impresión de inventario’, si se solicita la ‘Valorización a Costo medio’ y ‘Valorizar a almacén’ presentes en los ‘Parámetros iniciales de almacén’. (#TT01690/24)  
> - Browser - fix ‘%’ símbolo no funciona como se pretende en filas de filtro (#TT01626/24)  
> - Browser - fix referencias no guardadas en resultados de filtros de lectura-escritura  
> - SD - Fix Blazor SalesPriceListRounding problemas (TT01258/21)  
> - FI - Browser - simulación de depreciaciones de activos fijos, columna faltante en cuadrícula (#TT01591/24)  
> - SCM - Corregido error en la actualización de importes en los movimientos de almacén en presencia de un gasto distribuido en el DDT o en la Factura de Compra (#TT00794/24).  
> - PR - Lock manager muestra todos los registros de documentos de todas las empresas ( TT01593/24)  

### Patch 705.1-0007 - 15/04/2024
> - SH - insertar cuenta en el plan de cuentas ( TT01466/24)  
> - CO - corregido bug que en algunos casos generaba un informe vacío en la impresión de la reclasificación con comparación ( TT00917/24)  
> - FI - en contabilización de facturas de venta, las partidas se asignan al agente que tiene el importe de comisión más alto entre las varias líneas del documento, en caso de valores iguales el orden es por id de agente (TT01286/24)  
> - SD - Al guardar un abono, todos los Tipos de gastos se insertan con signo negativo, excepto los gastos de Tasa (#TT01289/24)  
> - SD - En la evasión de pedidos de clientes en la factura, revisión asignación de fechas de competencia económica en la analítica (#TT01275/24)  
> - SD - Fix Blazor diversos problemas (TT01258/21)  
> - FI - TT01517/24 - Browser - creación automática de intrastat a partir de documentos o asientos  
> - FI - TT01591/24 - Browser - simulación de depreciaciones de activos fijos, columna faltante en cuadrícula  
> - WM - Fix problemas de diseño en Blazor (#TT01493/24)  
> - Solved bug to detect Output parameters on Algorithms  
> - MES - Implementada en la lista de retiro de materiales la gestión de la cantidad residual. (#TT00836/24)  
> - CRM - TT01565/24 - FL Browser - Lista en el boletín - algunos problemas  
> - FI - TT01585/24 - Browser - cuadrícula de depreciaciones faltante dentro de activos fijos  
> - Browser - fix para error de validación del Plan de Cuentas (#TT01464/24)  
> - QY - Arreglos de Blazor (TT01550/24, TT01551/24, TT01553/24, TT01555/24, TT01558/24, TT01559/24, TT01560/24, TT01561/24)  
> - SD - Fix Blazor Contact-bandera para problema de Prioridad (TT01258/21)  
> - SH - Browser - bandera de registros vencidos no visible en el registro (#TT01486/24)  
> - Browser - el menú de dashboard no se abre y la página de inicio no muestra nada (#TT01612/24)  
> - SD - Bloqueo de importación de facturas de venta Web Api para facturas descargadas, contabilizadas o enviadas al sistema de facturación electrónica. (TT01578/24)  
> - PM - mejorada gestión de gastos de facturas de compra en el SAL de proyecto (#TT01366/24)  
> - SCM, SCS - Dentro de los documentos de Compras y Trabajo ahora es posible insertar un vector (#TT01132/24).  

### Patch 705.1-0006 - 11/04/2024
> - SD - Fix Blazor SalesInvoice-AccountManagementOnInvoice confirm problem and Sales Summary Agents delete problem(TT01258/21)  
> - Arm - fix for search widget  
> - PM - SAL de proyecto, se añadió código PRCC008 Costos Extra de Gastos en Facturas de Compra que considera todas las facturas de compra, contabilizadas y no. Corregida descripción del código PRCC006 en Costos Extra de Gastos en Facturas de Compra no contabilizadas (#TT01385/24)  
> - Browser - fix selección desde la ayuda de artículo no se aplica (#TT01480/24)  
> - CO - Browser - nueva reclasificación dentro de controlling (#TT01538/24)  
> - SD - Fix Blazor PackagesManagement - error de búsqueda (TT01258/21)  
> - FI - fix período de inicio ComputeAcccounting Statement - para ser leído desde los Parámetros del Libro Mayor (TT01567/24)  
> - Browser - fix problemas de filtro de Contactos (#TT01519/24)  
> - Browser - fix errores de registro de Contacto relacionados con tipo de persona (#TT01541/24)  
> - SD - Fix Precio de Venta para problema de búsqueda QuantityAlternativa (TT01258/21)  
> - MS - Corregido bug en el procedimiento MRP en el caso de artículos ficticios. (#TT01164/24)  
> - FI - revisión activación de botones de gestión dentro del intrastat (#TT01232/24)  
> - Solved bug to load script for ViewModel with missing BusinessObjectName  
> - Browser - optimizaciones de cuadrícula de datos / vista de árbol  

### Patch 705.1-0005 - 10/04/2024
> - SD - Fix detalle del filtro de eliminación de problemas (TT01258/21)  
> - Fix ventana emergente del flujo de trabajo (blazor)  
> - Browser - abrir detalles de la empresa en modificar devuelve notificación de error (#TT01475/24)  
> - Arrastrar y soltar en Kan Ban de Oportunidad (#TT01096/24)  
> - Browser - arreglo tipo de campos computados generados (#TT01125/24)  
> - FI - Asociación de archivo xml a percipient es: revisión propuesta de solo archivos en estado ‘no asignado’  (TT01317/24)  
> - CRM - Browser - Lista en el boletín (añadir columnas dinámicas) (#TT00904/24)  
> - PR - Corregido bug que en fase de creación de RiBa por facturas en caso de factura y nota de abono a acumular sumaba en lugar de restar la NC. ( TT00897/24)  
> - SD - Fix Blazor Carrier y cuenta widget problema  
> - SCM - Al momento de la Creación de factura de compra desde archivo XML, el precio se importa en la factura con el flag Precio Manual activo y sin retomar el descuento interno (#TT01227/24).  
> - WM - Corregido bug en las tiles (Cerradas, No cerradas) de la anagrafica lotes. (#TT01497/24)  
> - PM - SAL Solucionada anomalía en elaboración masiva (#TT01439/24)  
> - WM - Corregido bug en análisis disponibilidad que no mostraba correctamente los valores en los campos: Orden cliente asociado y cantidad de orden cliente. (#TT01062/24)  
> - Browser - arreglo general para vinculaciones de columnas relativas a la fila actual  

### Patch 705.1-0004 - 09/04/2024
> - SD - Inserción de un nuevo pop up de aviso en caso de que se inserte un tipo de factura sin split payment (es decir, sin Causale contable asociada que tenga Tipo movimiento ‘29’) y un cliente que maneja el split payment (#TT01237/24)  
> - FI, PR - revisión contabilización de efectos para partidas creadas en divisiones diferentes a la activa (#TT01401/24)  
> - MS - Añadido un mensaje de error en el MRP en caso de que el artículo fuera de producción pero no tuviera la lista de materiales. (#TT01414/24)  
> - WM - Traducido título de la impresión Trazabilidad Lote  
> - CO - Corregido bug que no ejecutaba correctamente la actualización de la forma seleccionando un nodo del modelo de reclasificación para insertar los subcuentas vinculados. Mejorado mensaje al usuario de aviso para tipos de cuenta (TT01367/24)  
> - Solved bug on cancel BizLink connector editor state  
> - CRM - añadir menú contextual para programador y otras correcciones (# TT01481/24)  


### Patch 705.1-0003 - 08/04/2024
> - FI - revisión filtro por división en impresión Subcuentas realizada desde la forma ‘Visualización cuentas’ ( TT01394/24)  
> - WM - Corregido título de la forma Trazabilidad Lote (#TT01415/24).  
> - WM - Cuando se genera un registro desde la máscara de Visualización Existencias, si la causal insertada tiene un contrapartida se propondrá la ubicación de la causal, eliminándola se propondrá la ubicación del artículo (#TT01351/24).  
> - WM - Cuando se genera un registro desde la máscara de Visualización Existencias, si la causal insertada tiene un contrapartida se propondrá la ubicación de la causal, eliminándola se propondrá la ubicación del artículo (#TT01351/24).  
> - SD - Permitida la modificación del rango de fechas de competencia económica en facturas de venta con archivo Sdi creado pero no contabilizadas (#TT01038/24)  
> - SCM - Corregido bug en la creación del código de lote en caso de que no se insertara manualmente en el