---
title: Notas de actualización versión 607 (Patch notes Versione 607)
sidebar_position: 2
---

### Patch 607.1-0022: 22/06/2023

> - SH: optimización de la apertura del panel de control en modo de diseño (#TT01766/23)  
> - FI: se proponen el número y la fecha del documento para el cierre del RO IVA  
> - FI: revisión de la gestión automática de líneas de venta de activos en registros en moneda (#TT01832/23)  
> - BZ: Importación de precios de artículos del proveedor: corrección de esquema de Excel  
> - Se solucionó un error en la creación de scripts sobre referencias  
> - WM: corrección de error en la programación general en el caso en que la línea de materiales estuviera compuesta por miles de artículos (#TT01827/23)  
> - SH: solución del problema de imposibilidad de guardar flujos de trabajo tras la aparición del error de códigos no únicos (#TT01869/23)  
> - SH: al insertar, a través de Form Navigator, un Extra Data que contiene una fecha en el encabezado del documento, el valor se refleja en la pestaña de Extra Data, incluso al insertar la fecha actual (#TT01834/23)  
> - FI: revisión del filtrado por empresa en la declaración croata OPZ (#TT01606/23)  
> - SH: se cambió la traducción al inglés de la unidad de medida de UM a MU  
> - CRM: la descripción de la actividad se mantiene después del cierre y reapertura del contacto CRM (#TT01210/23)  
> - SD: el procedimiento de Creación de Órdenes de proveedor desde la Búsqueda de Órdenes de cliente considera los artículos solo si están codificados (#TT01884/23)  
> - FI: amortización de activos incrementales, revisión de la búsqueda agrupada (#TT01848/23)  
> - FI: reversión de la contabilidad de deudas con factura de gastos vinculada, revisión de la eliminación de la factura, si no está impresa/contabilizada (#TT01434/23)  
> - SCM: la Fecha de entrega de los pedidos de proveedores refleja la Fecha de llegada estimada de la RDA vinculada (#TT01580/23)  
> - PJ: optimización de la posibilidad de modificar desde Form Navigator las etiquetas del encabezado de Intervenciones (#TT01799/23)  
> - CRM: la referencia del ticket en los Parámetros de CRM no es obligatoria y si se elimina, no se genera error (#TT01825/23)  

### Patch 607.1-0021: 12/06/2023

> - Actualización del filtro Sepa para transferencias francesas (#TT00940/23)  
> - SD: el proyecto creado a partir de un pedido de venta ahora tiene cantidad residual del proyecto = cantidad del pedido. Correcciones en la generación de mensajes de advertencia (#TT01548/23)  
> - Se solucionó el problema con el generador XAML y se mejoró el editor de scripts dentro del contexto de Blockly  
> - WM: corrección de error en la visualización de los artículos en el análisis de disponibilidad en caso de que se activa la bandera de línea de materiales (#TT01736/23)  
> - WMS: ahora se puede crear un perfil en los formularios WMS utilizando también referencias y colecciones (#TT01487/23)  
> - SD: resolución de problemas en la apertura de los planes de carga (#TT01754/23)  
> - Se solucionó el error de creación de scripts de tipo evento para referencias y colecciones  
> - SD: optimización de la ayuda para filtrar Artículos, pestaña de Listas: los resultados se visualizan incluso si todos los filtros se eliminan (#TT01701/23)  
> - WM: en el análisis de disponibilidad, cuando se activa la bandera de línea de materiales, se visualizan todos los componentes de ese artículo, incluso si no se han movido o tienen saldo cero (#TT01707/23)  
> - SCM: la valorización de devoluciones refleja en la factura el número de documento ingresado en el procedimiento (#TT01362/23)  
> - SH: se resolvió el problema de que en la vista previa de impresión no se cargaban los botones de configuración de página y diseño en la primera vista previa de impresión (#TT01719/22)  
> - SH: se agregó la posibilidad de añadir scripts de cliente y servidor para los objetos personalizados  
> - BI: se solucionó un error generado por la llamada a un algoritmo personalizado desde el panel de control (#TT01767/23)  
> - MES: corrección de error en las declaraciones de producción que ocurría al intentar registrar más de una línea simultáneamente (ej. apertura, avance y cierre) (#TT01747/23)  
> - WMS: ahora, al ejecutar el movimiento UDC desde los formularios CARGA/TRANSFERENCIA UDC y CARGA/TRANSFERENCIA UDC MÚLTIPLE, se establece correctamente el dato del UDC en los movimientos de almacén (#TT01745/23)  
> - MPS/SCM: se solucionó el error de clonación de objetos personalizados (#TT01768/23)  
> - FI: revisión de la carga del widget al abrir en modo de edición los registros contables (#TT01795/23)  
> - SD: se resolvió un error en el cambio de estado de "En error" a "Anulado" de un pedido de cliente Peppol (#TT01731/23)  

### Patch 607.1-0020: 05/06/2023

> - SD: no es posible hacer una reversión para los DDT facturados (#TT01657/23)  
> - MES: Notificaciones: restauración del estado de cumplimiento de un pedido de producción si se modifica una notificación vinculada. (#TT01485/23)  
> - FI: se corrigió un error en el procedimiento de creación de modelos intrastat creación automática, lectura de facturas que permitía buscar facturas de meses diferentes al del modelo en gestión (#TT01568/23)  
> - CO: cierres trimestrales: se agregó el mensaje "la operación fue anulada por el usuario" (#TT01694/23)  
> - MPS: liberación de pedidos planificados: ante múltiples fases externas, presentes en un mismo Pedido Planificado de producción, se creaban algunos pedidos de trabajo sin líneas de artículo a producir (#TT01632/23)  
> - SD: resolución del error que no permitía completar el porcentaje de incremento en la actualización de listas en el procedimiento de duplicado y mantenimiento de listas de venta (#TT01675/23)  
> - FI: resolución de error en el informe para el balanceo del CDC dentro de la contabilidad (#TT01090/23)  
> - FI: se corrigió un error que no permitía el correcto funcionamiento del campo de filtro de Cuenta de agente en la ejecución de los informes de extracto y subcuentas (#TT01281/23)  
> - SCM: en la pestaña generadora RDO de las solicitudes de compra, se proponen Unidades de medida y Cantidades también para los proveedores ingresados manualmente (#TT01577/23)  
> - SCM: en la pestaña generadora RDO de las solicitudes de compra, se propone el código IVA también para los proveedores ingresados manualmente (#TT01199/23)  
> - SD: es posible usar el botón de cumplimiento de proyectos desde pedidos de venta (#TT01548/23)  
> - SCM: cuando no se establece una dirección diferente en la pestaña de entrega del proveedor, se inserta la dirección de la propia empresa en el pedido al proveedor (#TT01391/23)  
> - SH: resolución de excepciones al eliminar un documento si está vinculado al flujo de caja (#TT01581/23)  
> - SCM: recepción de mercancías: múltiples lotes en una única línea de artículo, cambio de tipo DDT de compra, número de línea en DDT, impresión de línea de DDT (#TT01051/23)  
> - SH: informes de registros y lista de registros: se modernizaron los dos informes (#TT01720/23)  
> - FI: solución de error en la gestión de fechas en la contabilidad de salarios en el control (#TT01723/23)  
> - BZ: la importación de Artículos y Listas de Venta refleja correctamente las Notas en la lista  
> - MES: pedidos de producción: se resolvió la anomalía que ocurría al eliminar un Pedido de producción con un Pedido de Conto trabajo (si estaba vinculado manualmente y carecía de referencia a la Fase) (#TT01683/23)  
> - SCM: corrección del error de cambio de código de artículo de proveedor en la inserción de artículos en un pedido de proveedor utilizando solo las teclas del teclado (#TT01246/23)  

### Patch 607.1-0019: 26/05/2023  

> - WM: se actualizó el orden de los datos en el informe de impresión del diario de almacén; ahora el orden de las líneas se realiza por almacén y por fecha de registro  
> - WMS: se implementó la función del formulario de confirmación de picking con gestión de ubicaciones y gestión de lotes (#TT01515/23)  
> - SCM: activación de filtros en el procedimiento de cumplimiento de pedidos (#TT01575/23)  
> - FI: se corrigió el informe de registros IVA, que mostraba una indicación incorrecta en relación a la parte correspondiente de los periodos anteriores/siguientes (#TT00207/23)  
> - SCM: la impresión del Calendario de Órdenes de Proveedor realiza el orden para Proveedor o Fecha de entrega según los filtros seleccionados (#TT01501/23)  
> - MES: se resolvió un error que dejaba activo el botón Guardar en el caso de la creación del Pedido de Producción desde la Liberación de Pedidos planificados y posteriormente el cambio de estado del flujo de trabajo, se añadió fase y cambio del estado a Ejecutivo en el OP (#TT01573/23)  
> - MES: se agregó la columna "Cantidad a producir" en la tabla de pedidos de producción del procedimiento de impresión del Folio de trabajo. (#TT01503/23)  
> - SH: activación del Codificador de artículo también para Extra Data basados en Data Source, durante la creación de un nuevo artículo o su duplicado (#TT01488/23)  
> - SH: resolución de la excepción al insertar la bandera “Usar en código” en la pestaña Codificador de artículo de la tabla Clases de artículos (#TT01488/23)  
> - FI: se solucionó el problema en la impresión de liquidación de IVA periódica a intervalos trimestrales, si la impresión se realizaba con el indicador de definitiva activado se generaba un error (#TT01604/23)  
> - SCM: en la Creación Automática de Órdenes también son visibles los artículos que no tienen un Proveedor preferencial en el registro (#TT01590/23)  
> - SH: el pop-up que avisa al usuario de que ha insertado un Proyecto a nombre de un sujeto diferente al titular del documento se ha dejado solo en el módulo Gestión de proyectos y en los Workreport (#TT01571/23)  
> - SCS: resolución de la excepción al insertar un artículo en un Pedido de cuenta trabajo con el Proyecto y la Tarea de producción introducidos en el encabezado (#TT01572/23)  
> - ARM: corrección del menú contextual de la base de datos de artículos visualizada según la configuración de ARM: parámetro ChangeLevelAllowed  
> - CO: en los Valores de control del Controlling, la pestaña Valores de proyectos ahora filtra sobre la tabla específica donde se valoran los drivers de proyecto (#TT01587/23)  
> - SD: la modificación de las líneas de artículo en una Oferta a nombre de Contacto CRM ha sido optimizada en caso de Gastos en los resúmenes (#TT01598/23)  
> - ARM: corrección de la deserialización del panel de control existente cuando no se establece ningún filtro (#TT01653/23)  
> - SCM: las líneas de artículo del pedido con una cantidad residual negativa no son visibles en el procedimiento de Cumplimiento en DDT (#TT01431/23)  
> - PR: creación automática de pagos a proveedores: el filtro en "cuenta" ya no funciona en 2021 (#TT01100/23)  
> - se solucionó el problema con la lógica de agrupamiento de DocumentNumber, en el documento VendorPayment para Rs (#TT01659/23)  
> - FI: revisión de la impresión de liquidación de IVA anual por totales de IVA en suspensión de períodos de años diferentes (#TT01328/12)  
> - SCM: en el procedimiento de Cumplimiento de pedidos, la Cantidad a cumplir se vuelve visible al seleccionar la bandera de la línea correspondiente (#TT01617/23)  
> - MPS: programación general: parámetros no almacenados  
> - en los parámetros, cuando se activa la bandera "Considerar las disponibilidades provenientes de: Compra" y se procede con la programación, no se consideran los pedidos de compra y el parámetro no se almacena (#TT01616/23)  

### Patch 607.1-0018: 22/05/2023  

> - SH: La longitud máxima del campo Código de destino en la Lista de destinos del registro de contacto se ha aumentado a 8 (#TT01370/23)  
> - FI: revisión de la guardia de créditos del año anterior para el período de enero/primer trimestre (#TT01380/23)  
> - QY: calibración de instrumentos: algunas adiciones al filtro del registro de los Instrumentos de Medida: Extra-data, Artículo asociado, Proveedor de: compra, mantenimiento/asistencia, calibración, ubicación y Cliente propietario (#TT01535/23)  
> - SD: se ha insertado un nuevo mensaje de error “El pedido no puede ser ejecutado porque no se ha establecido el Tipo de documento para la ejecución” en caso de imposibilidad de ejecución del pedido en DDT, factura o picking (#TT01517/23)  
> - FI: en la impresión de los balances de verificación de la localización serbia, se habilitó el filtro para la clase 0 (#TT01544/23)  
> - se ha integrado la lógica de generación del archivo según las claves de agrupamiento (#TT01545/23)  
> - FI: liquidación de IVA periódica, se corrigió un error en la fase de impresión de liquidación de IVA a intervalos trimestrales  
> - SCS: revisión del informe del calendario de devoluciones: se incluyen el número de orden, de línea y los agrupamientos (#TT01521/23)  
> - FI: comunicación de liquidaciones periódicas de IVA, revisión de la impresión que no reflejaba correctamente los campos relacionados con el número de IVA de la empresa y el código fiscal del declarante (#TT01499/23)  
> - se añadió la exportación del documento "Comunicación OPZ" para la localización Croacia  
> - SD: corrección de problemas en la actualización de los valores de precio y redondeo en la creación de listas de venta (#TT01552/23)  
> - BZ: alineación del trazado de importación de movimientos contables desde Excel (#TT01321/23)  
> - SCM: resolución del error que hacía que el pedido vinculado apareciera como No ejecutado, en caso de reversión de la valorización del DDT de compra en factura (#TT01511/23)  
> - SCS: se ha renombrado la columna Descripción de artículo en los Materiales de las devoluciones de cuenta de trabajo (#TT01327/23)  
> - PM: se ha añadido una nueva funcionalidad en el tipo de sprint que permite establecer la reapertura del sprint cuando se modifica el precio en un documento ingresado en el sprint (ticket 01188/23)  
> - WMS: ahora en el formulario de Stock de Artículos del WMS, al buscar un artículo gestionado en lotes introduciendo un lote en el filtro correspondiente de la sección de filtros, la búsqueda devuelve los resultados relacionados con ese único lote. No más resultados relacionados con los lotes que incluyen el código introducido en el filtro. (#TT01541/23)  
> - WMS: ahora, si se utiliza una UM por defecto para WMS, en un artículo gestionado en lotes, la Transferencia de Artículo funciona correctamente (#TT01538/23)  
> - CO: revisión del error al entrar en la segunda pestaña/total del numerador para el cálculo de índices siempre a cero cuando se visualiza el detalle de períodos (TT01559/23)  

### Patch 607.1-0017: 11/05/2023  

> - WM: corregido un error. Se corrigió un error en "Gestión UDC". Ahora los decimales de los campos "Peso neto" y "Peso bruto" se visualizan correctamente (#TT01486/23)  
> - WM: corregido un error en el registro de artículos relacionado con la inserción de variantes (#TT01482/23)  
> - SCM: se corrigió un error que impedía la ejecución de las consultas guardadas en la máscara de búsqueda de solicitudes de compra (#TT01195/23)  
> - FI: revisión de la gestión de la cuadrícula de contabilidad para el mensaje de recalculo de importes en moneda  

### Patch 607.1-0016: 11/05/2023  

> - PR: lineales de anticipo de factura, valorización del campo de fecha de vencimiento (#TT01399/23)  
> - MPS: se corrigió un error en la programación en el caso en que se programe una tarea ya en estado ejecutivo (#TT00965/23)  
> - MPS: se corrigió un error en el estado de las tareas de producción en caso de que el pedido de primer nivel no haya sido liberado (#TT01352/23)  
> - MPS: la inserción desde Object Navigator de la columna Tipo en la Búsqueda de Ciclos de Trabajo ya no genera un error en la Búsqueda (#TT01401/23)  
> - MPS: se corrigió un error en el cálculo de la fecha de inicio y fin tratadas en las cabeceras de los ciclos de trabajo multiproducto (#TT01242/23)  
> - MPS: se corrigió un error en el campo “Artículos de la tarea de producción” en caso de ser arrastrado desde el object navigator en los pedidos planificados (#TT01418/23)  
> - SD, SCM: en los créditos, la inserción de los Materiales Conai muestra un gasto con cantidad negativa (#TT01428/23)  
> - SD: en las listas de venta, después de hacer clic en Nuevo artículo, en la barra de ribbon, se pueden insertar los artículos con el botón derecho Pegar en las celdas (TT#TT01444/23)  
> - SD: se habilitó la modificación de la causal de cierre automático de vencimientos en facturas ya enviadas al Sdi. (#TT00344/23)  
> - SH: flujo de trabajo: se corrigió un error en el navegador de estados ya que no mostraba el estado siguiente, mientras que en la edición del documento se ve (#TT01302/23)  
> - WM: corregido un error en la inserción de variantes en la línea de materiales (#TT01402/23)  

### Patch 607.1-0015: 04/05/2023  

> - BZ: las líneas Nota se importan sin Precio y Cantidad en las importaciones de BizLink de Órdenes de Clientes y Órdenes de Proveedores (#TT01052/23)  
> - SD: Cantidad, Cantidad Residual y Cantidad a Cumplir tienen el mismo redondeo de decimales en la máscara de Cumplimiento de Pedido en DDT (#TT01325/23)  
> - SD: Cantidad, Cantidad Residual y Cantidad a Cumplir tienen el mismo redondeo de decimales en la máscara de Cumplimiento de DDT en Factura (#TT01296/23)  
> - CRM: resolución de la excepción 429 del servidor al abrir los Contactos (#TT01318/23)  
> - SCM: en el área de compras, revisión del cálculo de la cantidad de fondos de declaraciones de intención (#TT01126/23)  
> - WM: en los movimientos de almacén se puede arrastrar desde el object navigator el campo "Artículos de la tarea de producción", lo que mostrará el número de la tarea correspondiente. (#TT01319/23)  
> - SH: eliminación del concepto de transición en la ejecución de los store procedures desde scripting  
> - BZ: optimización de la importación estándar de los ciclos de trabajo a través de la importación de Excel. (#TT01359/23)  
> - SCS: activación del filtro para los artículos Parcialmente cumplidos en la máscara de Búsqueda de Pedidos de cuenta de trabajo (#TT01374/23)  

### Patch 607.1-0014: 28/04/2023  

> - WM: impresión de Picking: se gestionó la anomalía en la que solo era visible un lote por artículo de Picking  
> - BZ: corrección de error de totales a cero en caso de importación de Órdenes de proveedor con cantidades superiores a uno (#TT01052/23)  
> - SD: si la factura proviene de un Pedido, en el archivo XML se incluirá el campo Su referencia de encabezado; si está ausente, se reflejará la palabra VACÍO (#TT03021/22)  
> - WM: en los documentos de venta, compra, logística y cuenta de trabajo se reflejan el Peso neto y el Peso bruto totales de las líneas de artículo, tomados del registro del artículo (#TT02570/22)  
> - ARM: paneles: mostrar mensaje de finalización de la operación (#TT01198/23)  
> - MES: se añadió la posibilidad de gestionar los decimales en la columna Cantidad de la pestaña Lotes de las notificaciones de producción (#TT01163/23)  
> - WMS: se corrigió el funcionamiento del campo de cantidad en la máscara WMS de Transferencia de Artículo en caso de unidad de medida de gestión sin decimales.  
> - MPS: corrección de error. se resolvió un error en la eliminación de tareas programadas con la ejecución automática del MRP.  
> - FI: revisión de la contabilización de facturas de compra por violación de restricciones en los valores de los centros de costo (notificación 8137/23)  
> - SCM: las notas de crédito creadas de DDT de devolución reflejan los gastos Conai con signo negativo, como las demás líneas del documento (#TT01019/23)  
> - SCM: las Notas de Crédito tienen las líneas de Artículo con Cantidad negativa; en caso de ingreso de Cantidad positiva, saldrá un pop-up para cambiar el signo de la cantidad (#TT02609/22)  
> - PM: se inserta un prefiltro en la máscara de solicitudes de vacaciones y permisos con recurso = Resource = recurso vinculado (SEC_Users) y fecha = primer día del año actual (ticket 00931/23)  
> - SCM, SD: se ha insertado un pop-up de aviso para IVA obligatorio en caso de cambio de cliente o proveedor en la factura (#TT03387/22)  
> - SH: optimización de la bandera de Gestión RAEE en los registros de clientes y proveedores: esta solo está presente en los registros de clientes (#TT01192/23)  
> - FI: se solucionó el problema en el interior de la máscara de partidas, si una partida se ingresaba en un pago de proveedor, la bandera 'En pago' no se activaba automáticamente en la partida. (ticket: #TT01141/23)  
> - SD: en el caso de un proyecto creado a partir de un pedido de cliente (con el procedimiento automático o de Definición MPS), si se modifica la fecha de mercancía lista en el pedido cliente, el procedimiento actualiza la fecha de mercancía lista de la línea del pedido. (#TT01252/23)  
> - CO: en los valores de control del controlling, revisión del cálculo en la última pestaña Valores de ajuste (#TT01171/23)  
> - WM: corrección de error en la creación de línea de materiales en la inserción del artículo padre. (#TT01268/23)  
> - MPS: corrección de error. se corrigió un error en el cálculo de disponibilidad en la programación general. (#TT01274/23)  
> - SCM: la Recepción de mercancías refleja en Precio el Último Costo del artículo (#TT01151/23)  
> - SCM: en la tabla fluentis.SCM_PurchaseDemandItems, los campos SCMPDI_Quantity y SCMPDI_ResidualQuantity tienen el mismo redondeo decimal, para evitar que las solicitudes de compra resulten parcialmente cumplidas (#TT01209/23)  
> - en la máscara de Partidas, revisión del cálculo de resultados al filtrar por ‘partidas abiertas al’ (#TT02206/22)  
> - PR: Área de Tesorería, Módulo de riesgo del cliente, se corrigió un error en la recalibración del riesgo del cliente que no consideraba correctamente las partidas provenientes de registros provisionales. Ref #TT00947/23  
> - MES: corrección de error. se corrigió un error en el caso de que en un pedido de producción se cambie una fase de externa a interna con un centro de trabajo que carece de horarios de inicio y fin (#TT01311/23)  

### Patch 607.1-0013: 13/04/2023  

> - PM: el acuerdo de nivel de servicio y el nivel de severidad establecidos en el tipo de solicitud de intervención se reflejan en el documento (ticket 01092/23)  
> - MPS: corrección de error. se corrigió un error en el cálculo de disponibilidad. (#TT01074/23)  

### Patch 607.1-0012: 12/04/2023  

> - SD: una factura proveniente de más de un pedido de cliente refleja todos los gastos de los pedidos de origen; se corrigió el error que multiplicaba las líneas de gasto reportadas por el número de líneas de artículo presentes en los pedidos de origen (#TT01088/23)  
> - FI: cambio de etiqueta a Empleado, pestaña “Currículo y cursos”  
> - PM: cuando se duplica un proyecto de plantilla, el listado de precios se crea a partir del cliente en el encabezado (ticket 00734/23)  
> - PM: los tickets guardados en la línea de servicios se copian en la línea del plan de facturación, los tickets guardados en la línea del plan de facturación se guardan correctamente (ticket 00758/239)  
> - PM: creación de actividad desde Intervenciones: se corrigió anomalía detectada en la actualización de las fechas de servicio vinculadas a la actividad, si la intervención ya está en estado Aprobado y la actividad vinculada ya está creada y se modifica la fecha del servicio, no se actualizaba también la fecha de la actividad. (ref.ticket 1065/23)  
> - WM: en análisis de disponibilidad, se puede guardar también el valor del período de verificación en el perfil. (#TT01082/23)  
> - WM: corrección de error. se corrigió un error en el cálculo de costos directos dentro de los prototipos. (#TT00979/23)  
> - SH: procedimiento modificado: Contabilización de facturas de compra desde registro SDI: mejorado el control para la memorización de la cuenta contrapartida, ahora también si ya se memorizó una cuenta por defecto vinculada al código de artículo, en caso de que en el archivo XML esté presente un código de artículo diferente (etiqueta Código Valor) se vuelve a proponer la ventana de vinculación de cuentas en fase de contabilidad. Ref TT00981/23  
> - CO: impresión de balances interanuales, solución de error en ejecución por campos nulos (#TT01125/23)  
> - BZ: la importación de Listas de Proveedores permite la creación de un nuevo Artículo proveedor y la inserción del mismo en la Lista importada: para ello, es necesario insertar el parámetro "Inserción de artículo proveedor" (#TT01064/23)  
> - BZ: introducción del parámetro BizLink "Impreso" en la Importación de Facturas de venta, que permite importar las facturas con la bandera Impresa (#TT02496/21)  
> - FI: registro contable de compra de activos, se pueden modificar los campos de las porcentajes de asignación al centro de costo/proyecto (TT#01142/23)  
> - FI: contabilización desde factura de venta no interrumpida en un período de IVA cerrado: TT03261/22  
> - FI: modificación en la gestión de la inserción de líneas adicionales en la cuadrícula de los centros de costo, cuando estos son de tamaño diferente. #TT00911/23  
> - CO: se agregó un filtro para 'Tamaño' en el encabezado del módulo 'Valores de control'. (TT01150/23)  
> - MPS/MES: se modificó la lógica de cambio de estado en los pedidos de producción, según las siguientes reglas:  
>> 1. la tarea pasa a estado “Ejecutivo” cuando se libera la primera: pedido planificado de compra, pedido planificado de trabajo o pedido planificado de producción y este se encuentra en estado “Ejecutivo”;  
>> 2. la tarea pasa a estado “Lanzado” si solo hay pedidos de producción en estado “Lanzado” y ningún pedido planificado de compra o de trabajo liberado;  
>> 3. si el usuario utiliza el comando de reversión, cuando hay múltiples pedidos planificados de compra o de trabajo liberados y ningún pedido de producción en estado ejecutivo o lanzado, la tarea regresa a estado “Programado”;  
>> 4. la tarea pasa a estado “Cumplido” cuando todos los pedidos con el “nivel más bajo” están en estado de cumplido. Si el usuario modifica el estado de uno de ellos, también la tarea cambia su estado. (#TT00969/23)  

### Patch 607.1-0011: 06/04/2023  

> - WM: ubicaciones: corrección de error: en la inserción de una nueva ubicación ahora la colección de ubicaciones "hijas" se muestra correctamente y sin errores  
> - CO: en la elaboración de períodos del controlling, revisión de la gestión de origen de datos para la diferenciación entre saldo contable y manual (TT#00991/23)  
> - CO: en la elaboración de períodos del controlling, revisión de la gestión del tipo de línea para la distribución de períodos sobre el centro ‘valores no asignados’ (TT#01010/23)  
> - CO: en la duplicación de la comparativa de reclasificaciones del controlling, se resolvió un error en caso de codificación de centros con códigos decimales tipo xxx.yy (#TT00973/23)  
> - CO: en la elaboración de períodos del controlling, revisión del cálculo de índices para gestión en centros no sujetos a drivers (#TT00974/23)  
> - PR: se resolvió el problema en la creación manual de pagos a proveedores, cuando se creaba un nuevo pago y simultáneamente se llamaban las partidas a insertar, no se completaban todos los datos relativos al banco, pero era necesario entrar y salir del pago para obtener el detalle completado (ticket: #TT00916/23)  
> - MPS: corrección de bug. se corrigió un error en la generación del flujo automático de producción. (#TT01060/23)  
> - SCS: en caso de que la última fase movible y productiva sea externa, ahora la devolución de cuenta de trabajo actualiza correctamente la cantidad producida en el pedido de producción. (#TT00736/23)  
> - SCS: en los pedidos de cuenta de trabajo, el costo propuesto para los artículos sin lista es igual a cero. (#TT00978/23)  
> - FI: se resolvió el problema en la elaboración de la comunicación de liquidaciones periódicas de IVA, el crédito del año anterior se reflejaba erróneamente tomando el mismo valor del crédito del período anterior, duplicando así el crédito. (ticket: #TT00875/23)  
> - SD: resolución de excepción al descargar documentos del almacén (#TT01071/23)  
> - FI: revisión de la prueba sobre la cuadratura de centros de costo/beneficio en caso de una empresa sin controlling y sin gestión separada de cdc/cdp en causal contable. #TT01055/23  
> - SD: calendario de órdenes de clientes: se modificaron las reglas de formato de impresión para que no se superpongan las fechas de vencimiento.  
> - CO: revisión de la lógica de creación de cierres interanuales para la gestión de datos para saldos sin recalcular datos de moneda. (TT01025/23)  
> - MPS: corrección de error. se corrigió un error en la valoración de la tarea, en relación a documentos vinculados manualmente a la tarea misma. (#TT00982/23)  
> - MES: corrección de error. se corrigió un error relacionado con el porcentaje de desperdicio (indicado en el componente de la lista de materiales) en las notificaciones de producción. (#TT01050/23)  

### Patch 607.1-0010: 31/03/2023  

> - SD: la Hora de transporte en los documentos de venta se mantiene si se guarda, pero se actualiza a la hora actual en caso de cambio de Tipo de transporte (#TT00265/23)  
> - MPS: corrección de error. se corrigió un error en la programación a capacidad finita en las fechas de inicio y fin de los pedidos planificados. (#TT03232/22)  
> - MES: en los pedidos de producción, si se indica un lote en los materiales, este se propone, en correspondencia del material, también en el picking correspondiente creado por el procedimiento de Lista de materiales. (#TT01408/22)  
> - SD: en el encabezado de los documentos de ventas, el botón de la barra de ribbon se ha renombrado a "Insertar Agente en las líneas" (#TT00890/23)  
> - MES: en los pedidos de producción, si se indica un lote en los materiales, este se propone, en correspondencia del material, también en el picking correspondiente creado por el procedimiento de Lista de materiales. (#TT01408/22)  
> - revisión del archivo de transferencias Sepa para la localización francesa, se eliminó la etiqueta TwnNm y el bloque PmtTpInf presente dentro de la sección CdtTrfTxInf. #T00940/23  
> - PR: en la máscara de Importación de registros del módulo DocFinance, se habilitó la eliminación por teclado del registro seleccionado en la segunda cuadrícula (#TT00903/23)  
> - SD: en caso de creación de registro con la fecha del documento, se consideran también las fechas para Remitente y Destinatario, además de para Transportista (#TT00575/23)  

### Patch 607.1-0009: 24/03/2023  

> - FI: resolución de la excepción 4882/2023  
> - SH: Empresa: se modificó la transformación FullTextFiscalDescription para el pie de página de los informes de RRHH  
> - FI: TT00786/23 se corrigió un error que no gestionaba correctamente los valores durante las operaciones de destrucción de activo y alienación parcial de activo operando desde dentro de la escritura contable de partida diaria.  
> - FI: corregido el informe de certificación única: no se reflejaba el código fiscal del representante firmante de la comunicación  
> - FI: almacenamiento de parámetros de creación de registros contables desde el archivo Sdi (#TT00821/23)  
> - PR: la exportación del flujo de caja para DocFinance ya no establece todas las banderas en los parámetros automáticos de generación del flujo de caja (#TT00891/23)  
> - WM: error corregido. se corrigió un error en la impresión de Inventario a cantidad valorizada, en los casos en los que se utilizaba como valorización la bandera de costo medio (sin desde el registro del artículo) o la bandera de costo último con registro de artículo. (#TT00753/23)  
> - FI, SCM: creación de registro desde documento Sdi (TT00935/23)  
> - Bizlink: revisión de la localización del texto de referencias facturas en el archivo Riba (#TT00888/23)  
> - CO: revisión de comparación de reclasificaciones (TT00880/23)  
> - SCM: para las líneas de la Factura provenientes de Renta de trabajo no es posible realizar la Actualización de Listas (#TT00654/23)  
> - SH: en el inicio rápido y en las instalaciones ya activas, gestión de los registros italianos por defecto de la tabla de festividades (#TT00936/23)  
> - WM_StampaGestionale: artículos no movidos: modificación del formato del campo Fecha Último Registro a dd/MM/yyyy.  
> - SD, SCM: en el procedimiento de Duplicado y Mantenimiento, la Actualización de listas en Valor permite un número libre de decimales (#TT00925/23)  

### Patch 607.1-0008: 20/03/2023  

> - SH: Empresa: modificada la transformación FullTextFiscalDescription, se modifica la descripción en caso de empresa con lengua croata  
> - SD: se insertó control sobre destinatario y destino en caso de Ejecución de múltiples pedidos en DDT o factura (#TT00807/23)  
> - SCS: corrección de error de Cantidad residual en los Materiales de los pedidos de cuenta de trabajo cumplidos en DDT (#TT00459/23)  
> - SCS: se inserta la posibilidad de cumplir una cantidad decimal en las Entregas previstas (#TT00817/23)  
> - SCS: corrección de error al cambiar Proveedor en un Pedido de cuenta de trabajo derivado de la Liberación de pedidos planificados (#TT00823/23)  
> - SH: error de Fluentis en el procedimiento de duplicación de contacto (TT00848/23)  
> - PR: se resolvió un error en la generación del archivo SDD (#TT00419/23)  
> - WM: error corregido. se corrigió un error en “Año Fecha de Inserción” del tipo de código de número de serie. (TT00757/23)  
> - SCM: corrección de búsqueda de Artículo manual en las líneas de los DDT de compra (#TT00850/23)  
> - PM-SPRINT: se solucionó la actualización automática del estado después de haber confirmado todas las líneas.  
> - MPS: error corregido. en los parámetros de la programación general, ahora se guarda correctamente también la bandera "Considera disponibilidad también para el primer nivel". (#TT00706/23)  
> - MPS: error corregido. se corrigió un error en la programación general en el caso de que se programe una tarea ya en estado ejecutivo. (#TT00688/23)  
> - MPS: el campo "Fecha/Tasativa" (FSProductionJobOrder.Date) dentro de las tareas de producción se hace editable. (#TT00776/23)  
> - SCM: corrección del saldo en caso de descarga de DDT del almacén después de la valorización (#TT00804/23)  
> - SCM: los descuentos finales ingresados en la factura se reflejan en las líneas del DDT de compra y en el registro de almacén vinculados (#TT00417/23)  
> - SD: en caso de Creación de factura desde DDT y posterior descarga del DDT, la Visualización de saldos se actualiza correctamente (#TT00802/23)  

### Patch 607.1-0007: 14/03/2023  

> - SH: se modificó la prioridad en la transformación FullTextFiscalDescription para que funcione correctamente  
> - SCS: corrección de error. se corrigió un error en el procedimiento de registro de ingresos (#TT00695/23)  
> - SCM: se resolvió un error al guardar el DDT después de la ejecución de un pedido de proveedor derivado de una tarea (#TT00835/23)  
> - SD: SalesInvoice SDI: considerar el tipo de persona para el proveedor de transferencias (#TT00843/23)  
> - WM: error corregido. se corrigió un error en el procedimiento de cierre de almacén (#TT00702/23)  

### Patch 607.1-0006: 10/03/2023  

> - FI: descarga de tipos de cambio para HR cambios de divisas (#TT00795/23)  
> - FI: pago de factura en moneda (TT00646/23)  
> - SCM: en los artículos de los pedidos de proveedores, la ayuda de línea sale al escribir % en el Artículo proveedor tiene las columnas correctas (#TT00411/23)  
> - ARM: visualización de la ruta preferida y la ruta alternativa cuando el usuario no tiene derecho (mostrar el mensaje cuando el usuario intenta seleccionar un recorrido sin derecho)  
> - WM: optimización de la inserción de artículos en las listas de inventario (#TT00562/23)  
> - FI: revisión del cálculo de amortizaciones para la localización serbia (#TT00682/23)  
> - FI: descarga de tipos de cambio para HR cambios de divisas (#TT00795/23)  
> - SD: impresión de factura: se corrigió el script en el informe (#TT00816/23)  

### Patch 607.1-0005: 08/03/2023  

> - habilitación para modificar el campo 'Notas iniciales' en las facturas de venta incluso después de la creación de archivos de facturas ordinarias Sdi (ref ticket #TT00593/23)  
> - FI: balance (4 igualdades) informe de monto en euros (TT00750/23)  
> - MES: se resolvió un problema de inserción de lotes en la primera línea de las notificaciones de producción (#TT00717/23)  
> - SD: los pesos de los artículos se reflejan correctamente desde el pedido al DDT incluso pasando por el picking (#TT00722/23)  
> - WM: se resolvió el problema de duplicación de lotes tras la carga de DDT de compra anterior a la creación de la factura (#TT00715/23)  
> - FI: informe CU: se resolvió un problema sobre la ciudad de nacimiento  
> - SCS: error corregido. se corrigió un error en el procedimiento de registro de ingresos. (#TT00695/23)  
> - PM: correcciones en el cálculo de la cantidad residual en el proyecto, pestaña de sal y detalle WIP  
> - PM: las intervenciones programadas son visibles en el calendario, la inserción de las fechas de servicio incluidas en el documento creado se ha optimizado (ticket 00347/23)  
> - PM: ya no es posible activar confirmación por parte del scrum master si el servicio está en estado insertado, ahora es posible insertar notas en las líneas del sprint (ticket 00463/23).  
> - SCM: las facturas de compra no inmediatas no tienen lotes obligatorios independientemente de los parámetros de almacén (#TT00623/23)  

### Patch 607.1-0004: 02/03/2023  

> - SD: se desabilitó el doble clic en la impresión del recibo POS (#TT00611/23)  
> - SD: en la ejecución de múltiples pedidos en una factura, solo se refleja el gasto de Transporte del primer pedido (#TT00631/23)  
> - SD: el peso de línea en DDT y facturas se recalcula también al variar la cantidad alternativa en caso de UM alternativa Tasativa (#TT00656/23)  
> - PM: se restableció la posibilidad de insertar un artículo codificado en un nodo de proyecto work package node (#TT00643/23)  
> - MPS: error corregido. se corrigió un error en el estado de cabecera de los pedidos (#TT00662/23)  
> - ARM: se mostró un nuevo mensaje cuando el usuario no tiene derechos para la transición permitida  
> - WM: error corregido. se corrigió un bug en los inventarios físicos en referencia al botón de “Creación de lista de inventario total” (#TT00626/23)  
> - MES: error corregido. se corrigió un bug en el cálculo de la cantidad de materiales a consumir en caso de que haya muchos decimales (#TT00670/23)  
> - WM: corrección de error de existencia en caso de valorización del pedido en DDT y luego en factura de compra (#TT00661/23)  
> - MPS: en la definición de MPS, en caso de que esté habilitado el control de disponibilidad, cuando genero un pedido para un artículo del que tengo la disponibilidad completa, este pedido se creará con cantidad cero y estado “Cumplido” (#TT00662/23)  
> - ARM: corrección para la eliminación de un script; corrección para la configuración de la prohibición de kan; adición de nuevos campos para la prohibición de kan.  
> - CO: revisión de la contabilidad de existencias del controlling para la gestión del cierre de almacenes (#TT00554/23)  
> - SCM: las facturas de compra no inmediatas no tienen lotes obligatorios independientemente de los parámetros de almacén (#TT00623/23)  

### Patch 607.1-0003: 24/02/2023  

> - MES: error corregido. se corrigió un error en las notificaciones de producción relacionado con los motivos y almacenes propuestos (#TT00586/23)  
> - CO: revisión de la gestión de fechas de mérito y cuentas utilizadas en la contabilidad de existencias, revisión de comparación de reclasificaciones para fórmulas y detalles de datos de existencias iniciales/finales (TT00554/23)  
> - MES: error corregido. se resolvió un error en la lista de materiales (#TT00620/23)  
> - MPS: error corregido. se corrigió un error en los estados de las líneas de los pedidos multiproducto (#TT00607/23)  
> - SD: corrección de la duplicación de descuentos de artículos en caso de cambio de tipo DDT de venta (#TT00400/23)  
> - ARM: visualización de un nuevo mensaje cuando el usuario no tiene derecho a la transición permitida; corrección de la propuesta de una única aceptación de la transición y del nombre del script de la transición permitida  
> - FI: en la impresión de la liquidación de IVA periódica, cuando se establece la bandera de definitiva se asigna ahora el siguiente período a imprimir en función del último ingresado en la tabla de pagos de IVA para el año (TT3266/22)  
> - SCS: se añadieron los campos de almacén y causal de "Entrega de materiales a terceros wip" en los parámetros de cuenta de trabajo; estos son considerados por los procedimientos de creación de órdenes de cuenta de trabajo (desde la liberación y el pedido de producción) si está activa la bandera WIP presente en los parámetros de los pedidos de producción. (#TT00583/23)  
> - SCS: se agregó el parámetro relacionado con la obligatoriedad de lotes en los Parámetros de cuenta de trabajo (#TT00360/23)  
> - FI: revisión de la gestión de signos en las notas de crédito  
> - PM: los clientes proveedores para los cuales se ha ingresado una fecha de finalización de validez >= a la fecha de actividad en la declaración deactividad no se proponen en el widget de cliente proveedor del documento (#TT00555/23)  

### Patch 607.1-0002: 21/02/2023

> - MPS: corrección de error en la programación que generaba pedidos planificados con “Cantidad de uso” nula (#TT00511/23)  
> - WM: corrección de error en la impresión de inventario valorizado en caso de que el cliente no tuviera la subcuenta (#TT00528/23)  
> - FI: revisión de la máscara de amortización de activos para el cálculo de días de posesión y asignación de fecha de amortización en la elaboración (TT03183/22)  
> - BZ: la importación estándar de los Contactos CRM refleja la Persona Física (0) o Jurídica (1) según los parámetros establecidos en el archivo de importación  
> - CRM: se resolvió un problema de duplicación de Actividades en los Contactos creados (#TT00574/23)  
> - importación de registros desde DocFinance, revisión de la inserción de pagos de partidas para exclusión de líneas de descuento/abono  
> - MES: corrección de error en la lista de retirada de materiales (#TT00402/23)  

### Patch 607.1-0001: 17/02/2023

> - alineación del archivo xml de liquidación de IVA para la localización HR  
> - FI: revisión de la exportación de archivo F24(TT00559/23)  
> - CRM: 
> - al hacer clic en Enviar desde los Boletines, se puede elegir si usar la Lista de distribución o insertar los destinatarios dentro del Modelo (#TT02968/22);  
> - creación del filtro Objeto en las pestañas Asignado y No asignado de las Listas de distribución (#TT03113/23).