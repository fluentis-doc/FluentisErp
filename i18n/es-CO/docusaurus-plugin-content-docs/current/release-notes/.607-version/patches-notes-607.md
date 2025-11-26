--- 
title: Notas de la versión Versión 607
sidebar_position: 2
ai_generated: true
---

### Patch 607.1-0022: 22/06/2023  

> - SH: optimización de la apertura del dashboard en modo de diseño (#TT01766/23)
> - FI: el número del documento y la fecha del documento se proponen para el cierre del RO IVA
> - FI: revisión de la gestión automática de líneas de venta de activos fijos en asientos en moneda extranjera (#TT01832/23)
> - BZ: Importación de precios de artículos de proveedor: Corrección de esquema de excel
> - Resuelto bug en la creación de scripts sobre las referencias
> - WM: Corregido error en la programación general en el caso en que la lista de materiales estuviera compuesta por miles de artículos (#TT01827/23)
> - SH: Solución al problema de imposibilidad de guardar el Workflow tras la aparición del error de Códigos no únicos (#TT01869/23)
> - SH: Al insertar, a través del Form Navigator, un Extra Data que contenga una fecha en la cabecera del documento, el valor también se informa en la pestaña Extra Data incluso cuando se ingresa la fecha de hoy (#TT01834/23)
> - FI: revisión del filtrado por empresa en la declaración croata OPZ (#TT01606/23)
> - SH: modificada la traducción al inglés de la unidad de medida de UM a MU
> - CRM: la descripción de la actividad se mantiene después de cerrar y volver a abrir el contacto crm (#TT01210/23)
> - SD: El procedimiento de Creación de Ordenes de Proveedor desde la Búsqueda de Ordenes de Cliente considera los artículos solo si están codificados (#TT01884/23)
> - FI: amortización de activos fijos incrementales, revisión de búsqueda por agrupación (#TT01848/23)
> - FI: rollback de contabilización de impagos con factura de recuperación de gastos asociada, revisión de eliminación de factura si no está impresa/contabilizada (#TT01434/23)
> - SCM: La Fecha de entrega de las órdenes de proveedor corresponde a la Fecha de llegada estimada de la RDA asociada (#TT01580/23)
> - PJ: Optimización de la posibilidad de modificar desde Form navigator las etiquetas de la cabecera de Intervenciones (#TT01799/23)
> - CRM: El Referencia de ticket en los Parámetros CRM no es obligatorio y si se elimina no aparece el error (#TT01825/23)

### Patch 607.1-0021: 12/06/2023  

> - Actualización del archivo Sepa para transferencias bancarias francesas (#TT00940/23)
> - SD: El proyecto creado desde la orden de venta ahora tiene cantidad residual del proyecto = cantidad de la orden. Correcciones sobre la generación de mensajes de advertencia (#TT01548/23)
> - Resuelto el problema con el generador Xaml y mejorado el editor de scripts dentro del contexto de Blockly
> - WM: Corregido bug en la visualización de los artículos en análisis de disponibilidad en caso de estar activo el flag de lista de materiales (#TT01736/23)
> - WMS: Ahora se puede crear un perfil en los formularios WMS utilizando también referencias y colecciones (#TT01487/23)
> - SD: Solucionado el problema en la apertura de los planes de carga (#TT01754/23)
> - Resuelto el bug de creación de script de tipo evento para referencias y colecciones
> - SD: Optimización de la Ayuda de filtro de Artículos, pestaña Listas de precios: los resultados se visualizan incluso si todos los filtros se borran (#TT01701/23)
> - WM: En el análisis de disponibilidad, cuando se activa el flag de lista de materiales, se muestran todos los componentes de ese artículo incluso si no han tenido movimiento<!-- movimentati --> o con saldo cero (#TT01707/23)
> - SCM: La valoración de devoluciones lleva a la factura el número de documento introducido en el procedimiento (#TT01362/23)
> - SH: Solucionado problema por el cual en la previsualización de impresión no se cargaban los botones de ajustar página y dibujo en la primera vista previa de impresión (#TT01719/22)
> - SH: Añadida la posibilidad de añadir scripts client y server para objetos personalizados
> - BI: Corregido el error generado por la llamada de un algoritmo custom desde el dashboard (#TT01767/23)
> - MES: Corregido bug en las declaraciones de producción que aparecía cuando se intentaba registrar más de una línea al mismo tiempo (ej. apertura, avance y cierre) (#TT01747/23)
> - WMS: Ahora, al ejecutar el Movimiento UDC desde los formularios CARGA/MOVIMIENTO UDC y CARGA/MOVIMIENTO UDC MÚLTIPLE, se establece correctamente el dato del UDC en los movimientos de almacén<!-- movimenti di magazzino --> (#TT01745/23)
> - MPS/SCM: corregido error de clonación de objetos custom (#TT01768/23)
> - FI: revisión de la carga del widget al abrir en modo edición los asientos contables<!-- registrazioni contabili --> (#TT01795/23)
> - SD: Solucionado el error en el cambio de estado de En error a Anulado de una Orden de cliente Peppol (#TT01731/23)

### Patch 607.1-0020: 05/06/2023  

> - SD: No es posible realizar el extorno para los DDT facturados (#TT01657/23)
> - MES: Avisos: Restauración del estado de despacho de una orden de producción si se modifica un aviso relacionado. (#TT01485/23)
> - FI: corregido bug en el procedimiento de creación de modelos intrastat, creación automática y lectura de las facturas que permitía buscar facturas de meses diferentes respecto al modelo gestionado (#TT01568/23)
> - CO: cierres interanuales: insertado el mensaje "la operación ha sido anulada por el usuario" (#TT01694/23)
> - MPS: Liberación de órdenes planificadas: En caso de varias fases externas presentes en una misma Orden planificada de producción, se creaban algunas Ordenes de subcontratación<!-- Ordini di conto lavoro --> sin líneas de artículo por producir (#TT01632/23)
> - SD: Solución del error que no permitía cumplimentar el porcentaje de incremento en la Actualización de listas de precios de la función Duplicar y Mantenimiento de listas de precios de venta (#TT01675/23)
> - FI: corrección de error en la relación para el balance del cdc dentro de la contabilidad<!-- contabilità --> (#TT01090/23)
> - FI: corregido bug que no permitía el correcto funcionamiento del campo de filtro Cuenta de agente en la ejecución de los reportes Extracto de cuenta y Subcuentas<!-- Sottoconti --> (#TT01281/23)
> - SCM: En la pestaña Generador RDO de las Solicitudes de compra, se proponen Unidad de medida y Cantidad incluso para proveedores ingresados manualmente (#TT01577/23)
> - SCM: En la pestaña Generador RDO de las Solicitudes de compra, también se propone el código iva incluso para proveedores ingresados manualmente (#TT01199/23)
> - SD: Es posible usar el botón despacho desde proyectos desde ordenes de venta (#TT01548/23)
> - SCM: cuando no se establece una dirección diferente en la pestaña de entrega del proveedor, se introduce la dirección de la propia empresa en la orden de proveedor (#TT01391/23)
> - SH: Resolución de las excepciones salientes al eliminar un documento si está vinculado al Cash Flow (#TT01581/23)
> - SCM: Recepción de mercancía: Lotes múltiples en una sola línea de artículo, cambio de tipo DDT de compra, número de línea en DDT, impresión de línea DDT (#TT01051/23)
> - SH: Reportes de registros y lista de registros: Modernizados los dos informes (#TT01720/23)
> - FI: solución de error de gestión de la fecha en la contabilización de nóminas en controlling (#TT01723/23)
> - BZ: La importación de Artículos y Listas de Precios de Venta traslada correctamente las Notas en la lista de precios
> - MES: Órdenes de producción: Resuelta la anomalía que ocurría al eliminar una Orden de producción con una Orden de subcontratación<!-- Ordine di Conto lavoro --> (si estaba vinculada manualmente y sin referencia a la Fase) (#TT01683/23)
> - SCM: Corrección del error de cambio de código de artículo de proveedor al ingresar artículos en una orden de proveedor usando solo las teclas del teclado (#TT01246/23)

### Patch 607.1-0019: 26/05/2023  

> - WM: Actualizado el orden de los datos en el informe de impresión del diario de almacén<!-- giornale di magazzino -->; ahora el orden de las filas es por almacén<!-- magazzino --> y por fecha de registro<!-- data registrazione -->
> - WMS: Implementada función de formulario de confirmación de picking con gestión de ubicaciones y gestión de lotes (#TT01515/23)
> - SCM: Activación de los filtros en el procedimiento de Despacho desde órdenes (#TT01575/23)
> - FI: Corregido informe de registros iva, reportaba una indicación errónea respecto a la cuota parte de competencia de los períodos anteriores/siguientes (#TT00207/23)
> - SCM: La impresión de Vencimientos de Órdenes de Proveedor realiza el orden por Proveedor o Fecha de Entrega en base a los filtros seleccionados (#TT01501/23)
> - MES: Resuelto error que dejaba activo el botón Guardar en el caso de Creación de Orden de Producción desde la Liberación de Órdenes planificadas y posterior modificación de estado del workflow, adición de fase y cambio del estado a Ejecutivo en la OP (#TT01573/23)
> - MES: Añadida la columna “Cantidad a producir” en la tabla de órdenes de producción del procedimiento de impresión de la Orden de Trabajo. (#TT01503/23)
> - SH: Activación del Codificador de artículo también para Extra Data basados en Data Source, durante la creación de un nuevo artículo o su duplicado (#TT01488/23)
> - SH: Solución a la excepción saliente al insertar el flag “Utilizar en código” en la pestaña Codificador de artículo de la tabla Clases de artículo (#TT01488/23)
> - FI: Solucionado problema en la impresión de liquidación de iva periódica a frecuencia trimestral, si la impresión se realizaba con el flag definitiva activado se generaba un error (#TT01604/23)
> - SCM: En la Creación Automática de Órdenes, son visibles también los artículos que no tienen un Proveedor preferente en la ficha técnica<!-- anagrafica --> (#TT01590/23)
> - SH: El pop up que avisa al usuario de haber insertado un Proyecto asignado a un sujeto diferente al titular del documento solo se ha dejado en el módulo Gestión de proyectos y en los Workreport (#TT01571/23)
> - SCS: Solución de la excepción saliente en el caso de inserción de artículo en una Orden de subcontratación<!-- Ordine di conto lavoro --> con Proyecto y Orden de producción ingresados en la cabecera (#TT01572/23)
> - ARM: corrección de base de datos, visualización del menú contextual de artículos en base a la configuración Arm : parámetro ChangeLevelAllowed
> - CO: en los Valores de control del Controlling, la pestaña Valores de órdenes filtra ahora sobre la tabla específica donde se valorizan los drivers de orden/proyecto (#TT01587/23)
> - SD: La modificación de las líneas de artículo en una Oferta asignada a un Contacto CRM se ha optimizado en el caso de Gastos en los resúmenes (#TT01598/23)
> - ARM: Corrección de la deserialización del Dashboard existente cuando no se ha establecido ningún filtro (#TT01653/23)
> - SCM: Las líneas de artículo de la orden con cantidad residual negativa no se muestran en el procedimiento de Despacho en DDT<!-- Evasione in DDT --> (#TT01431/23)
> - PR: creación automática de pagos a proveedores: filter on "cuenta" dejó de funcionar en 2021 (#TT01100/23)
> - Resuelto el problema con la lógica de agrupamiento de DocumentNumber, en el documento VendorPayment para Rs (#TT01659/23)
> - FI: revisión de impresión de liquidación anual de IVA para totales de iva en suspenso de diferentes años de competencia (#TT01328/12)
> - SCM: En el procedimiento Despacho desde órdenes, la Cantidad a despachar se vuelve visible al seleccionar el flag de la línea correspondiente (#TT01617/23)
> - MPS: Programación general: Parámetros no guardados
> - En los parámetros, cuando se activa el flag "Considerar las disponibilidades provenientes de: Compra" y se procede con la programación, no se tienen en cuenta las órdenes de compra y el parámetro no se guarda (#TT01616/23)

### Patch 607.1-0018: 22/05/2023  

> - SH: La longitud máxima del campo Código de destino en la Lista de destinos de la ficha de contacto se ha aumentado a 8 (#TT01370/23)  
> - FI: revisión del guardado del crédito del año anterior para el periodo de enero/primer trimestre (#TT01380/23)  
> - QY: Calibración de instrumentos: Algunas adiciones al filtro de fichas de los Instrumentos de Medición: Extra-data, Artículo asociado, Proveedor de: compra, mantenimiento/asistencia, calibración, ubicación y Cliente propietario (#TT01535/23)  
> - SD: Inserción de un nuevo mensaje de error “La orden no puede ser despachada porque no se ha establecido el Tipo de documento para el despacho” en caso de imposibilidad de despachar la orden en ddt, factura o picking (#TT01517/23)  
> - FI: en la impresión del Balance de comprobación para la localización serbia, habilitación del filtro por clase 0 (#TT01544/23)  
> - Se ha integrado la lógica de generación del archivo según las claves de agrupamiento (#TT01545/23)  
> - FI: Liquidación iva periódica, corregido bug en la fase de impresión de liquidación iva de frecuencia trimestral  
> - SCS: Revisión del informe de Vencimientos de Devoluciones: se muestran el número de orden, de línea y agrupamientos (#TT01521/23)  
> - FI: Comunicación de liquidaciones periódicas de iva, revisión de la impresión que no reportaba correctamente los campos relativos al iva de la empresa y el código fiscal del declarante (#TT01499/23)  
> - Añadida la exportación de documento "Comunicazione OPZ" para la localización Croacia  
> - SD: Corrección de los problemas de actualización de los valores del precio y el redondeo en la creación de listas de precios de venta (#TT01552/23)  
> - BZ: Alineación de trazado de importación de movimientos contables desde Excel (#TT01321/23)  
> - SCM: Solución al error que hacía quedar No despachada la orden vinculada, en caso de Rollback de valoración de DDT de compra en factura (#TT01511/23)  
> - SCS: Renombrada la columna Descripción del artículo en los Materiales de las Devoluciones de subcontratación<!-- Rientri di conto lavoro --> (#TT01327/23)  
> - PM: inserción de una nueva funcionalidad en el tipo sprint que permite configurar la reapertura del sprint cuando se modifica el precio en un documento insertado en el sprint (ticket 01188/23)  
> - WMS: Ahora en el formulario Stock Artículo del WMS, si se busca un artículo gestionado por lotes insertando un lote en el filtro correspondiente de la sección de filtros, la búsqueda devuelve los resultados relacionados únicamente a ese lote. Ya no los resultados relacionados con los lotes que incluyan el código insertado en el filtro. (#TT01541/23)  
> - WMS: Ahora, si se utiliza una UM Default para WMS, en un artículo gestionado por lotes, el Movimiento de Artículo funciona correctamente (#TT01538/23)  
> - CO: revisión de error al entrar en la segunda pestaña/total numerador para el cálculo de índices siempre en cero al visualizar el detalle de periodos ( TT01559/23)  

### Patch 607.1-0017: 11/05/2023  

> - WM: Error corregido. Corregido bug en “Gestión UDC”. Ahora los decimales de los campos “Peso neto” y “Peso bruto” se visualizan correctamente (#TT01486/23)  
> - WM: Error corregido. Corregido bug en la ficha de artículos referente a la inserción de variantes (#TT01482/23)  
> - SCM: Corregido error que impedía la ejecución de las consultas guardadas en el formulario de búsqueda de solicitudes de compra (#TT01195/23)  
> - FI: revisión de la gestión de cuadrícula de contabilidad<!-- contabilità --> para mensaje de recálculo de importes en moneda<!-- valuta -->  

### Patch 607.1-0016: 11/05/2023  

> - PR: extractos de factura anticipada, valorización de campo fecha de vencimiento (#TT01399/23)   
> - MPS: Corregido bug en programación en caso de que se programe una orden ya en estado ejecutivo (#TT00965/23)   
> - MPS: Corregido bug en el estado de órdenes de producción en caso de que la orden de primer nivel no haya sido liberada (#TT01352/23)   
> - MPS: La inserción desde Object Navigator de la columna Tipo en la Búsqueda de Ciclos de Trabajo ya no genera error en la Búsqueda (#TT01401/23)   
> - MPS: Corregido bug en el cálculo de la fecha prevista de inicio y fin de trabajo en las cabeceras de órdenes multiproducto (#TT01242/23)  
> - MPS: Corregido bug en el campo “Artículos de la orden de producción” en caso de que se arrastre desde el object navigator en las órdenes planificadas (#TT01418/23)  
> - SD, SCM: En las notas de crédito, la inserción de Materiales Conai reporta un gasto con cantidad negativa (#TT01428/23)  
> - SD: En las Listas de precios de venta, después de hacer click en Nuevo artículo, en la barra ribbon, es posible insertar artículos con el botón derecho Pegar en las celdas  (TT#TT01444/23)  
> - SD: Habilitado modificar causal<!-- causale --> de cierre automático de vencimientos en facturas ya enviadas al Sdi. (#TT00344/23)  
> - SH: Workflow: Corregido bug en el navegador de estados ya que no se visualizaba el estado siguiente, mientras que en la edición del documento sí (#TT01302/23)  
> - WM: Error corregido. Corregido bug en la inserción de variantes en la lista de materiales<!-- distinta base --> (#TT01402/23)  

### Patch 607.1-0015: 04/05/2023  

> - BZ: Las líneas Nota se importan sin Precio ni Cantidad, en las importaciones BizLink de Ordenes de Cliente y Ordenes de Proveedor (#TT01052/23)  
> - SD: Cantidad, Cantidad Residual y Cantidad por Despachar tienen el mismo redondeo de decimales en la pantalla de Despacho de Orden a DDT (#TT01325/23)  
> - SD: Cantidad, Cantidad Residual y Cantidad por Despachar tienen el mismo redondeo de decimales en la pantalla de Despacho de DDT a Factura (#TT01296/23)  
> - CRM: Resolución de excepción 429 del servidor en la apertura de Contactos (#TT01318/23)  
> - SCM: En el área de compras, revisión del cálculo del importe descubierto de declaraciones de intención (#TT01126/23)  
> - WM: En los movimientos de almacén<!-- movimenti di magazzino --> es posible arrastrar desde el object navigator el campo “Artículos de la orden de producción”, mostrando el respectivo número de orden<!-- commessa -->. (#TT01319/23)  
> - SH: Eliminación del concepto de transición en la ejecución de stored procedures desde scripting    
> - BZ: Optimización de la importación estándar de ciclos de trabajo mediante importación de excel (#TT01359/23)  
> - SCS: Activación del filtro para los artículos Parcialmente despachados en la pantalla de Búsqueda de Órdenes de subcontratación<!-- Ordini di conto lavoro --> (#TT01374/23)  

### Patch 607.1-0014: 28/04/2023  

> - WM: Impresión de Picking: Gestionada anomalía por la cual solo era visible un lote por artículo Picking
> - BZ: Corregido error de totales a cero en caso de importación de Órdenes de proveedor con cantidades mayores a uno (#TT01052/23)
> - SD: Si la factura proviene de una Orden, en el archivo xml se informará el campo Su referencia de cabecera; si está ausente se mostrará el texto VACÍO (#TT03021/22)
> - WM: En los documentos de venta, compra, logística y subcontratación<!-- conto lavoro --> se informan el Peso neto y el Peso bruto totales de las líneas de artículo, tomados de la ficha del artículo (#TT02570/22)
> - ARM: Dashboards: mostrar mensaje de finalización de la operación (#TT01198/23)
> - MES: Añadida la posibilidad de gestionar decimales en la columna Cantidad de la pestaña Lotes de los Avisos de producción (#TT01163/23)
> - WMS: Corregido el funcionamiento del campo cantidad en la pantalla WMS de Movimiento de Artículo en caso de unidad de medida gestionada sin decimales.
> - MPS: Error corregido. Resuelto bug en la eliminación de órdenes planificadas con la ejecución automática del mrp.
> - FI: Revisión de contabilización de facturas de compra por violación de restricción en los valores de centros de costo<!-- centri di costo --> ( 8137/23 notification)
> - SCM: Las notas de crédito creadas por ddt de devolución informan los gastos Conai con signo negativo, como las demás líneas del documento (#TT01019/23)
> - SCM: Las Notas de abono tienen las líneas de artículo con cantidad negativa; en caso de insertar cantidad positiva, aparecerá un pop up para cambiar el signo de la cantidad (#TT02609/22)
> - PM: se inserta un prefiltro en la pantalla de solicitudes de vacaciones y permisos con recurso = Recurso = recurso vinculado (SEC_Users) y fecha = primer día del año en curso (ticket 00931/23)
> - SCM, SD: Insertado pop up de aviso de IVA obligatoria en caso de cambio de cliente o proveedor en Factura (#TT03387/22)
> - SH: optimización de flag Gestión RAEE en los registros de clientes y proveedores: solo está presente en los registros de clientes (#TT01192/23)
> - FI: Resuelto problema dentro de la pantalla partidas, si una partida se insertaba dentro de un pago a proveedor no se activaba automáticamente el flag 'En pago' en la partida. (Ticket: #TT01141/23)
> - SD: En caso de orden creada desde una orden de cliente (con el procedimiento automático o desde Definición MPS), si se modifica la fecha de mercancía lista en la orden de cliente, el procedimiento actualiza la fecha de mercancía lista en la línea de la orden<!-- commessa --> (#TT01252/23)
> - CO: en los valores de control del controlling, revisión del cálculo de la última pestaña Valores de ajuste #TT01171/23
> - WM: Error corregido. Corregido bug en la creación de lista de materiales al insertar el artículo padre (#TT01268/23)
> - MPS: Error corregido. Corregido bug en el cálculo de disponibilidad en la programación general (#TT01274/23)
> - SCM: La Recepción de mercancía informa en el Precio el Último costo del artículo (#TT01151/23)
> - SCM: En la tabla fluentis.SCM_PurchaseDemandItems, los campos SCMPDI_Quantity y SCMPDI_ResidualQuantity tienen el mismo redondeo decimal, para evitar que las solicitudes de compra se muestren parcialmente despachadas (#TT01209/23)
> - pantalla Partidas, revisión del cálculo de resultados cuando se filtra por ‘partidas abiertas al’ #TT02206/22
> - PR: Área Tesorería, Módulo riesgo cliente, corregido bug que en el recálculo de riesgo cliente no consideraba correctamente las partidas provenientes de asientos provisionales. Ref #TT00947/23  
> - MES: Error corregido. Corregido bug en caso de que en una orden de producción se cambie una fase de externa a interna con un centro de trabajo al que le faltan los horarios de inicio y fin (#TT01311/23)  

### Patch 607.1-0013: 13/04/2023  

> - PM: el acuerdo de nivel de servicio y el nivel de severidad configurados en el tipo de solicitud de intervención se reflejan en el documento (ticket 01092/23)
> - MPS: Error corregido. Corregido bug en el cálculo de disponibilidad (#TT01074/23)  

### Patch 607.1-0012: 12/04/2023  

> - SD: Una factura proveniente de varias órdenes de cliente traslada todos los gastos de las órdenes de origen; se ha corregido el error que multiplicaba las líneas de gasto traídas por el número de líneas de artículo presentes en las órdenes de origen (#TT01088/23)
> - FI: cambio de etiqueta a Empleado, pestaña “Currículo y cursos”
> - PM: al duplicar un proyecto desde un template, la lista de precios se crea a partir del cliente en cabecera (ticket 00734/23)
> - PM: los tickets guardados en la línea de servicios se copian en la línea de invoice plan, los tickets guardados en línea invoice plan se guardan correctamente (ticket 00758/239)
> - PM: Creación de actividad desde Intervenciones: Corregida anomalía encontrada en la actualización de las fechas de servicio vinculadas a la actividad, si la intervención ya está en estado Por Aprobar y la actividad ya creada y se modifica la fecha del servicio, no se actualizaba la fecha de la actividad. (rif.ticket 1065/23)
> - WM: En el análisis de disponibilidad, es posible guardar en el perfil también el valor del periodo de verificación (#TT01082/23)
> - WM: Error corregido. Corregido bug en el cálculo de costes directos dentro de los prototipos (#TT00979/23)
> - SH: Procedimiento modificado: Contabilización de facturas de compra desde registro SDI: mejorado el control para el almacenamiento de la cuenta de contrapartida, ahora incluso si ya se ha almacenado una cuenta por defecto asociada al código de artículo, en el caso de que en el archivo xml esté presente un diferente código de artículo (tag Código Valor) se vuelve a mostrar el popup de asignación de cuentas en la fase de contabilización. Ref TT00981/23
> - CO: impresión de balance interanual, solución de error en la ejecución por campos nulos (#TT01125/23)
> - BZ: La importación de Listas de Precios de Proveedor permite la creación de un nuevo Artículo de proveedor y la inserción del mismo en la lista de precios importada: para ello es necesario introducir el parámetro "Inserción de artículo de proveedor" (#TT01064/23)
> - BZ: Inserción del parámetro BizLink "Impreso" en la Importación de Facturas de venta, que permite importar las facturas con el flag Impreso (#TT02496/21)
> - FI: Asiento contable de compra de activos fijos, hechos editables los campos de porcentajes de asignación a centro de costo/proyecto (TT#01142/23)
> - FI: contabilización desde factura de venta no interrumpida en un periodo IVA cerrado: TT03261/22
> - FI: modificación de la gestión de inserción de líneas adicionales en la cuadrícula de centros de costos, cuando estos son de tamaño diferente. #TT00911/23
> - CO: Añadido un filtro por 'Dimensión' en la cabecera del módulo 'Valores de control'.  (TT01150/23)  
> - MPS/MES: Variada la lógica de cambio de estado en las órdenes de producción, según las siguientes reglas:
>> 1.	la orden pasa a estado “Ejecutivo” cuando se libera el primero: orden de compra planificada, orden de subcontratación<!-- conto lavoro --> planificada u orden de producción planificada y esta se encuentra en estado “Ejecutivo”;
>> 2.	la orden pasa a estado “Lanzado” si solo hay órdenes de producción en estado “Lanzado” y ninguna orden de compra o subcontratación<!-- conto lavoro --> planificada liberada;
>> 3.	si el usuario utiliza el comando de rollback, cuando hay varias órdenes de compra o de subcontratación<!-- conto lavoro --> planificadas liberadas y ninguna orden de producción en estado ejecutivo o lanzado, la orden vuelve a estado “Programada”;
>> 4.	la orden pasa a estado “Despachado” cuando todas las órdenes con el “nivel más bajo” están en estado despachado. Si el usuario modifica el estado de uno de ellos, también la orden cambia su estado.  (#TT00969/23)

### Patch 607.1-0011: 06/04/2023  

> - WM: Ubicaciones: corrección de bug: al insertar una nueva ubicación ahora la colección de ubicaciones “hijas” se muestra correctamente y sin errores
> - CO: en el procesamiento de periodos de controlling, revisión de gestión de origen de datos para diferenciación de saldo contable y manual (TT#00991/23)
> - CO: en el procesamiento de periodos de controlling, revisión de gestión de tipo de línea para distribución de periodos en centro ‘valores no asignados’ (TT#01010/23)
> - CO: en la duplicación de comparación de reclasificaciones de controlling, resolución de error en caso de codificación de centros con códigos tipo xxx.yy (#TT00973/23)
> - CO: en el procesamiento de periodos de controlling, revisión del cálculo de índices para gestión en centros no sujetos a driver (#TT00974/23)
> - PR: Resuelto problema en la creación de pagos a proveedores manualmente, cuando se creaba un nuevo pago y al mismo tiempo se iban a llamar las partidas a insertar no se compilaban todos los datos relativos al banco, sino que era necesario entrar y salir del pago para ver el detalle completo (Ticket: #TT00916/23)
> - MPS: Error corregido. Corregido bug en la generación del flujo automático de producción. (#TT01060/23)  
> - SCS: En el caso de que la última fase movible y productiva sea externa, ahora el retorno de subcontratación<!-- rientro di conto lavoro --> actualiza correctamente la cantidad producida en la orden de producción (#TT00736/23)
> - SCS: En las órdenes de subcontratación<!-- conto lavoro -->, el coste propuesto para los artículos sin lista de precios es igual a cero (#TT00978/23)
> - FI: Solucionado problema en el procesamiento de la comunicación de liquidaciones periódicas de iva, el crédito de año anterior se reportaba erróneamente tomando el mismo valor del crédito del periodo anterior, duplicando así el crédito (Ticket: #TT00875/23)
> - SD: Solución de excepción saliente al descargar los documentos del almacén<!-- magazzino --> (#TT01071/23)
> - FI: revisión en test de conciliación de centros de coste/beneficio en caso de empresa sin controlling y sin gestión separada de cdc/cdp en causal contable<!-- causale contabile --> #TT01055/23
> - SD: vencimientos de órdenes de cliente: modificada la regla de formato de impresión para que no se superpongan las fechas de vencimiento
> - CO: revisión de la lógica de creación de cierres interanuales para gestión de datos para saldos sin recálculos de datos en moneda<!-- dati valutari -->. ( TT01025/23)
> - MPS: Error corregido. Corregido bug en la costificación de órdenes, respecto a documentos relacionados manualmente con la propia orden (#TT00982/23)  
> - MES: Error corregido. Corregido bug relativo al porcentaje de descarte (indicado en el componente de la lista de materiales<!-- distinta base -->) en los avisos de producción (#TT01050/23)  

### Patch 607.1-0010: 31/03/2023  

> - SD: La Hora de transporte en los documentos de venta se mantiene si se guarda, pero se actualiza a la hora actual en caso de cambiar el Tipo de transporte (#TT00265/23)
> - MPS: Error corregido. Corregido bug en la programación a capacidad finita en las fechas de inicio y final de las órdenes planificadas (#TT03232/22)
> - MES: En las órdenes de producción si se indica un lote en los materiales, este se informa, en correspondencia con el material, también en el respectivo picking creado por el procedimiento de Lista de retiro de materiales (#TT01408/22)
> - SD: En la cabecera de los documentos de venta el botón de la barra de herramientas se ha renombrado a “Insertar Agente en las líneas” (#TT00890/23)
> - MES: En las órdenes de producción si se indica un lote en los materiales, este se informa, en correspondencia con el material, también en el respectivo picking creado por el procedimiento de Lista de retiro de materiales (#TT01408/22)
> - revisión de archivo de transferencias Sepa localización francesa, eliminado el tag TwnNm y el bloque PmtTpInf presente dentro de la sección CdtTrfTxInf. #T00940/23
> - PR: en la pantalla de Importación de asientos del módulo DocFinance, habilitación de la eliminación por teclado del asiento seleccionado en la segunda cuadrícula (#TT00903/23)
> - SD: En caso de Creación de asiento con la fecha del documento, se consideran también las fechas para Remitente y Destinatario, además de para el Transportista (#TT00575/23)

### Patch 607.1-0009: 24/03/2023  

> - FI: resolución de exception 4882/2023
> - SH: Empresa: modificada transformation FullTextFiscalDescription para el pie de página de los reportes RRHH
> - FI: TT00786/23 corregido bug que no gestionaba correctamente los valores durante las operaciones de destrucción de bienes y enajenación parcial desde el asiento contable<!-- scrittura contabile di prima nota -->
> - FI: Corregido el informe de certificación única: no se traía el código fiscal del representante firmante de la comunicación  
> - FI: guardado de parámetros de creación de asientos contables<!-- registrazioni contabili --> desde archivo Sdi (#TT00821/23)
> - PR: la exportación de cash flow para DocFinance ya no marca todos los flags en los parámetros automáticos de generación de cash flow (#TT00891/23)
> - WM: Error corregido. Corregido bug en la impresión de Inventario a cantidad valorizada, en los casos en que se utilizaban como valoración el flag costo medio (sin ficha de artículo) o el flag costo último con ficha de artículo (#TT00753/23)
> - FI, SCM: Creación de asiento desde documento sdi ( TT00935/23)
> - Bizlink: revisión de localización de texto referencias en archivo Riba (#TT00888/23)
> - CO: revisión de comparación de reclasificaciones (TT00880/23)
> - SCM: Para las líneas de la Factura provenientes de Retorno de subcontratación<!-- Rientro Conto lavoro --> no es posible proceder con la Actualización de listas de precios (#TT00654/23)
> - SH: en fast start y en instalaciones ya activas, gestión de los registros italianos predeterminados de la tabla de días festivos (#TT00936/23)
> - WM_ImpresiónGestión: Artículos No Movimentados: Modificación del formato del campo Fecha Última Registro a dd/MM/yyyy.
> - SD, SCM: En el procedimiento de Duplicar y Mantenimiento, la Actualización de listas de precios en Valor permite un número de decimales libre (#TT00925/23)

### Patch 607.1-0008: 20/03/2023  

> - SH: Empresa: Modificada transformation FullTextFiscalDescription, cambiada la descripción en caso de empresa con idioma croata
> - SD: Insertado control sobre destinatario y destino en caso de Despacho de múltiples órdenes en ddt o factura (#TT00807/23)
> - SCS: Corrección de error de cantidad residual en los Materiales de las órdenes de subcontratación<!-- conto lavoro --> despachadas en ddt (#TT00459/23)
> - SCS: Insertada posibilidad de despachar una cantidad decimal en Entregas previstas (#TT00817/23)
> - SCS: Corrección de error al cambiar Proveedor en una Orden de subcontratación<!-- conto lavoro --> derivada de Liberación de órdenes planificadas (#TT00823/23)
> - SH: Error Fluentis en procedimiento de duplicación de contacto ( TT00848/23)
> - PR: Resuelto error en la generación de archivo SDD (#TT00419/23)
> - WM: Error corregido. Corregido bug sobre “Año Fecha Inserción” del tipo código serial number (#TT00757/23)
> - SCM: Corrección de la búsqueda de Artículo manual en las líneas de ddt de compra (#TT00850/23)
> - PM-SPRINT: solucionada la actualización automática del estado después de confirmar todas las líneas.  
> - MPS: Error corregido. En los parámetros de la programación general, ahora se guarda correctamente también el flag "Considerar disponibilidad también para el primer nivel”.  (#TT00706/23)
> - MPS: Error corregido. Corregido bug en la programación general en caso de que se programe una orden ya en estado ejecutivo (#TT00688/23)
> - MPS: Hecho editable el campo "Fecha/Obligatoria" (FSProductionJobOrder.Date) dentro de las órdenes de producción (#TT00776/23)
> - SCM: Corrección de la existencia en caso de descarga ddt desde almacén<!-- magazzino --> posterior a la valoración (#TT00804/23)
> - SCM: Los descuentos finales insertados en la factura se reportan en las líneas del ddt de compra y en el asiento de almacén<!-- registrazione di magazzino --> relacionado (#TT00417/23)
> - SD: En caso de Creación de factura desde DDT y posterior descarga del DDT, la Visualización de existencias se actualiza correctamente (#TT00802/23)  

### Patch 607.1-0007: 14/03/2023  

> - SH: Modificada la prioridad sobre transformation FullTextFiscalDescription para que funcione correctamente
> - SCS: Error corregido. Corregido bug en el procedimiento de registro de retornos (#TT00695/23)
> - SCM: Resuelto error al guardar el DDT tras el despacho de una orden de proveedor derivada de una orden<!-- commessa --> (#TT00835/23)
> - SD: SalesInvoice SDI- considerar el tipo de persona para el proveedor de transferencias (#TT00843/23)
> - WM: Error corregido. Corregido bug en el procedimiento de cierre de almacén<!-- magazzino --> (#TT00702/23)  

### Patch 607.1-0006: 10/03/2023  

> - FI: Descarga de tasas de cambio para HR cambio de monedas (#TT00795/23)
> - FI: Pago de factura en moneda extranjera<!-- valuta --> ( TT00646/23)
> - SCM: En los artículos de las órdenes de proveedores, la ayuda de línea al teclear % en el Artículo de proveedor muestra las columnas correctas (#TT00411/23)
> - ARM: visualización de la ruta preferida y la alternativa cuando el usuario no tiene derecho (mostrar el mensaje cuando el usuario intenta seleccionar una ruta sin derecho)
> - WM: Optimizada la inserción de artículos en las listas de inventario (#TT00562/23)
> - FI: revisión del cálculo de amortizaciones para la localización serbia (#TT00682/23)
> - FI: Descarga de tasas de cambio para HR cambio de monedas (#TT00795/23)
> - SD: Impresión de factura: Corregido script en report (#TT00816/23)  

### Patch 607.1-0005: 08/03/2023  

> - Habilitada la modificación del campo 'Notas iniciales' en las facturas de venta incluso después de la creación del archivo de facturas ordinarias Sdi (ref ticket #TT00593/23)
> - FI: Balance (4 igualdades) Informe de importe en euros ( TT00750/23)
> - MES: Resuelto problema de inserción de lotes en la primera línea de los avisos de producción (#TT00717/23)
> - SD: Los pesos de los artículos se reportan correctamente de la orden al ddt incluso pasando por el picking (#TT00722/23)
> - WM: Resuelto problema de duplicación de lotes tras la carga de ddt de compra anterior a la creación de la factura (#TT00715/23)
> - FI: Informe CU: Solucionado problema sobre la ciudad de nacimiento
> - SCS: Error corregido. Corregido bug en el procedimiento de registro de retornos (#TT00695/23)
> - PM: Correcciones sobre cálculo de cantidad residual en el proyecto pestaña sal y detalle wip
> - PM: las intervenciones planificadas son visibles en el calendario, la inserción de las fechas de servicio insertadas en el documento creado se ha optimizado (ticket 00347/23)
> - PM: ya no es posible activar "confirmado por el scrum master" si el servicio está en estado insertado, ahora es posible insertar notas en las líneas del sprint (ticket 00463/23).
> - SCM: Las facturas de compra no inmediatas no tienen los lotes obligatorios independientemente de los parámetros de almacén<!-- magazzino --> (#TT00623/23)

### Patch 607.1-0004: 02/03/2023  

> - SD: Desactivado el doble clic en impresión de ticket POS (#TT00611/23)
> - SD: En la liquidación de varias órdenes en una factura solo se traslada el gasto de Transporte de la primera orden (#TT00631/23)
> - SD: El peso de la línea en ddt y facturas se recalcula también al cambiar la cantidad alternativa en caso de UM alternativa Obligatoria (#TT00656/23)
> - PM: restaurada la posibilidad de insertar un artículo codificado en un nodo de proyecto work package node (#TT00643/23)  
> - MPS: Error corregido. Corregido bug en el estado de cabecera de las órdenes<!-- commesse --> (#TT00662/23)  
> - ARM: visualizado un nuevo mensaje cuando el usuario no tiene derechos para la transición permitida   
> - WM: Error corregido. Corregido bug en los inventarios físicos referente al botón “Crear lista de inventario total” (#TT00626/23)  
> - MES: Error corregido. Corregido bug en el cálculo de la cantidad de materiales a consumir en caso de que haya muchos decimales (#TT00670/23)
> - WM: Corrección de error de existencia en caso de valoración de orden en ddt y luego en factura de compra (#TT00661/23)
> - MPS: En definición MPS, en el caso de que esté activado el control de disponibilidad, cuando genero una orden para un artículo del que tengo la total disponibilidad, esta orden se creará con cantidad cero y estado “Despachado” (#TT00662/23)
> - ARM: Corrección para la eliminación de un script; Corrección para la configuración de la prohibición de kan; Añadidos nuevos campos para la prohibición de kan.
> - CO: revisión de contabilización de existencias desde controlling para gestión de cierre de almacenes<!-- magazzini --> (#TT00554/23)
> - SCM: Las facturas de compra no inmediatas no tienen los lotes obligatorios independientemente de los parámetros de almacén<!-- magazzino --> (#TT00623/23)  

### Patch 607.1-0003: 24/02/2023  

> - MES: Error corregido. Corregido bug en los avisos de producción referente a las causales<!-- causali --> y almacenes<!-- magazzini --> propuestos (#TT00586/23)
> - CO: revisión de la gestión de fechas de competencia y cuentas usadas en la contabilización de existencias, revisión de comparación de reclasificaciones para fórmulas y detalles de los datos de existencias iniciales/finales (TT00554/23)  
> - MES: Error corregido. Resuelto bug en la lista de retiro de materiales (#TT00620/23)
> - MPS: Error corregido. Corregido bug en los estados de las líneas de órdenes multiproducto (#TT00607/23)
> - SD: Corrección de la duplicación de descuentos de artículo en caso de cambio de tipo ddt de venta (#TT00400/23)
> - ARM: visualización de un nuevo mensaje cuando el usuario no tiene derecho a la transición permitida; corrección de la propuesta de una sola aceptación de la transición y el nombre del script de la transición permitida
> - FI: en la impresión de la liquidación de iva periódica, al activar el flag definitiva ahora se asigna el siguiente periodo a imprimir en base al último insertado en la tabla de pagos de iva para el año (TT3266/22)
> - SCS: Añadidos los campos de almacén<!-- magazzino --> y causal<!-- causale --> de "Entrega de materiales subcontratistas wip" en los parámetros de subcontratación<!-- conto lavoro -->; estos se consideran en los procedimientos de creación de órdenes de subcontratación<!-- ordini di conto lavoro --> (desde la liberación y desde la orden de producción) si está activo el flag WIP presente en los parámetros de las órdenes de producción (#TT00583/23)
> - SCS: Insertado el parámetro relativo a la obligatoriedad de los lotes en los Parámetros de subcontratación<!-- conto lavoro --> (#TT00360/23)
> - FI: revisión de gestión de signos en notas de crédito
> - PM: los clientes/proveedores para los que se ha insertado una fecha de fin de validez >= a la fecha de actividad en la declaración de actividades, no se proponen en el widget cliente/proveedor del documento (#TT00555/23)  

### Patch 607.1-0002: 21/02/2023

> - MPS: Corregido bug en la programación que generaba órdenes planificadas con “Cantidad de uso” nula (#TT00511/23) 
> - WM: Corregido bug en la impresión de inventario valorizado en caso de que el cliente no tuviera la subcuenta<!-- sotto conto --> (#TT00528/23) 
> - FI: revisión de pantalla de amortización de activos Fijos para cálculo de días de posesión y asignación de fecha de amortización en procesamiento (TT03183/22) 
> - BZ: La importación estándar de Contactos CRM reporta la Persona Física (0) o Jurídica (1) en base a los parámetros configurados en la hoja de importación 
> - CRM: Resuelto problema de duplicación de Actividad en los Contactos creados (#TT00574/23) 
> - Importar asientos desde DocFinance, revisión de inserción de pagos de partidas para exclusión de líneas de descuento/bonificación 
> - MES: Corregido bug en la lista de retiro de materiales (#TT00402/23)  

### Patch 607.1-0001: 17/02/2023

> - Alineación de archivo xml Vat settlement para localización HR  
> - FI: revisión de exportación de archivo F24(TT00559/23)  
> - CRM: 
> - Al hacer clic en Enviar desde los Boletines, es posible elegir si utilizar la Lista de distribución o bien introducir los destinatarios dentro del Modelo (#TT02968/22);    
> - Creación del filtro Objeto en las pestañas Asignado y No asignado de las Listas de distribución (#TT03113/23).