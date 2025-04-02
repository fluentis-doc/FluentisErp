---
title: Notas de la versión 606 (Patch notes Versione 606)
sidebar_position: 1
---

### Patch 606.1-0028: 06/04/2023

> - PR: Se resolvió un problema en la fase de creación de pagos a proveedores manualmente, cuando se creaba un nuevo pago y se llamaban las partidas a insertar, no se completaban todos los datos relacionados con el banco y era necesario entrar y salir del pago para tener el detalle completo (#TT00916/23)
> - SCS: En caso de que la última fase movible y productiva sea externa, ahora el retorno de cuenta de trabajo actualiza correctamente la cantidad producida en la orden de producción. (#TT00736/23)
> - SCS: En las órdenes de cuenta de trabajo, el costo propuesto para los artículos sin lista es igual a cero (#TT00978/23)
> - FI: Se resolvió un problema en el procesamiento de la comunicación de liquidaciones periódicas del IVA, el crédito del año anterior se reportaba erróneamente tomando el mismo valor del crédito del periodo anterior, duplicando así el crédito (#TT00875/23)
> - FI: Revisión de prueba sobre la cuadratura de centros de costo/profitos en caso de empresas sin control y sin gestión separada CDC/CDP en la causa contable (#TT01055/23)

### Patch 606.1-0027: 30/03/2023

> - FI: Revisión del cálculo de amortizaciones para la localización serbia (#TT00682/23)
> - FI: Descarga tasas de cambio para HR cambio de divisas (#TT00795/23)
> - SD: Impresión de Factura: Se arregló el script en el informe (#TT00816/23)
> - SH: Transformación: Se modificó la prioridad en la transformación FullTextFiscalDescription para que funcione correctamente.
> - SCS: Corrección de error en la Cantidad residual de los materiales de las órdenes de cuenta de trabajo completadas en DDT (#TT00459/23)
> - SCS: Se agregó la posibilidad de cumplir con una cantidad decimal en las entregas previstas (#TT00817/23)
> - SCS: Corrección de error al cambiar proveedor en una orden de cuenta de trabajo derivada de la liberación de órdenes programadas (#TT00823/23)
> - PR: Se resolvió error en la generación de archivos SDD (#TT00419/23)
> - SCM: Corrección de saldo en caso de descarga DDT desde el almacén posterior a la valoración (#TT00804/23)
> - SCM: Los descuentos finales ingresados en la factura se reportan en las líneas del DDT de compra y en la contabilización de almacén vinculados (#TT00417/23)
> - SD: En caso de creación de factura desde DDT y posterior descarga del DDT, la visualización de saldos se actualiza correctamente (#TT00802/23)
> - FI: Revisión del filtro de fechas de liquidación del IVA periódica/anual.
> - FI: Excepción 4882/2023, truncamiento de una cadena en los pagos de proveedores.
> - FI: Se corrigió el informe de certificación única: no se reportaba el número de identificación fiscal del representante firmante de la comunicación.  
> - Bizlink: Revisión de localización del texto de referencias de factura en archivo Riba (#TT00888/23)

### Patch 606.1-0026: 09/03/2023

> - Habilitación de la modificación del campo 'Notas iniciales' en las facturas de venta también después de la creación de archivos de facturas ordinarias Sdi (#TT00593/23)
> - SD: Los pesos de los artículos se reportan correctamente desde el pedido al DDT incluso pasando por el picking (#TT00722/23)
> - FI: Descarga tasas de cambio para HR cambio de divisas (#TT00795/23)

### Patch 606.1-0025: 02/03/2023

> - Resolución del problema de los vectores de migración.
> - PM: Los clientes proveedores para los cuales se ha insertado una fecha de validez final >= a la fecha de actividad en la declaración de actividades, no se proponen en el widget cliente proveedor del documento (#TT00555/23)
> - Problema resuelto con el generador de fuentes Xaml
> - SD: Deshabilitado el doble clic en imprimir ticket POS (#TT00611/23)
> - SD: En la entrega de múltiples pedidos en una factura, solo se reporta el gasto de transporte del primer pedido (#TT00631/23)
> - SD: El peso de la línea en DDT y facturas se recalcula también al variar la cantidad alternativa en caso de UM alternativa obligatoria (#TT00656/23)
> - PM: Restaurada la posibilidad de insertar un artículo codificado en un nodo de proyecto work package node (#TT00643/23)
> - WM: Corrección de error de saldo en caso de valoración de pedido en DDT y luego en factura de compra (#TT00661/23)

### Patch 606.1-0024: 23/02/2023

> - FI: Revisión de máscara de amortización de activos para cálculo de días de posesión y atribución de fecha de amortización en el procesamiento (#TT03183/22)
> - Aplicación de la renombración de archivos en la exportación Intrastat
> - Importación de registros desde DocFinance, revisión de inserción de pagos partidas por exclusión de líneas de descuento/abono.
> - CO: Revisión de gestión de fechas de competencia y cuentas utilizadas en la contabilización de existencias, revisión de comparación de reclasificaciones por fórmulas y detalles de los datos de existencias iniciales/finales (#TT00554/23)
> - SD: Corrección de la duplicación de descuentos en artículos en caso de cambio de tipo de DDT de venta (#TT00400/23)
> - FI: Revisión de gestión de signos en notas de crédito

### Patch 606.1-0023: 20/02/2023

> - Problema resuelto para la exportación de archivos txt de documentos BizLink.
> - FI: Revisión de exportación de archivo F24 (#TT00559/23)
> - SCM: Activación de filtros en la impresión de calendario de órdenes de proveedores (#TT00355/23)

### Patch 606.1-0022: 15/02/2023

> - La causa propuesta en las líneas de embalaje en los documentos es la que está presente en la causa de movimiento de los embalajes retornables (#TT00413/13)
> - SD: Corrección del problema de importación de los plazos de las facturas de venta y de la recaudación del IVA (#TT00482/23).
> - ARM: Corrección del nombre del script y ocultación del control del script dentro del grupo del flujo de trabajo (#TT00082/23)
> - WM: Resumen: se agregaron filtros de búsqueda para picking y cliente (#TT00415/23)
> - SD: Se resolvió el problema de duplicación de líneas de lote en la registración de almacén de un DDT previamente descargado y luego valorado.
> - SD: Eliminación de espacios en la etiqueta IBAN de las facturas electrónicas (#TT00502/23).
> - ARM: Cambios para la ejecución de la transición (eliminación del token cuando se ejecuta la transición), cambio del nombre del widget para GenerateDocumentAction.
> - Se agregó el avance para el proceso de actualización (#TT00082/23).
> - WM: Revisión de contabilización de movimientos de almacén, gestión de signos (#TT00504/23).

### Patch 606.1-0021: 10/02/2023

> - ARM: Publicación de tipos de objeto de propiedades de referencia de objetos de extensión personalizados.
> - WM: Corrección de bug. Se resolvió un error en el formulario de búsqueda de diferencias inventariales (#TT00274/23).
> - MPS: Corrección de bug. Se resolvió un error en la programación general (#TT00004/23).
> - ARM: Corrección de la propuesta del usuario para la cuenta de correo electrónico.
> - ARM: Corrección de la generación de modelos MVVM personalizados (no generar la clase RW para objetos sin módulo RW).
> - FI: Revisión de eliminación de registros en la tabla de pagos de IVA (#TT00056/23).
> - WM: Corrección de bug. Se corrigió un error en las diferencias inventariales en relación con la UM alternativa (#TT00292/23).
> - Alineación del widget Blockly para el flujo de trabajo a la nueva lógica.
> - Agregado un gestor de contraseñas para los parámetros del supervisor.
> - Control de artículos: Resolución de diversas anomalías:
    - Planes de control: Artículos Asociados: No se guardaban los cambios;
    - Control de Artículos: Al visualizar o modificar un control de un artículo, aparecía un error al cerrar;
    - Parámetros de Control de Artículos: Aparecía un error al abrir.
> - Se resolvió el bug del uso del parámetro global para la actividad de correo electrónico.
> - SD: Revisión del procedimiento de creación de archivo XML en caso de cantidad alternativa (#TT00397/23).
> - SCM: Se resolvió un error en la valoración de DDT de compra que indicaba que los documentos eran abiertos por otro usuario e impedía el procedimiento.
> - SCM: Una factura creada a partir de múltiples DDT reporta una línea de nota de referencia por cada DDT de origen.

### Patch 606.1-0020: 02/02/2023

> - MPS: Corrección de bug. Se corrigió un bug en la generación de órdenes desde previsiones en la definición de MPS (#TT00284/23).
> - Se resolvió el problema de la interfaz ReadWrite en BizLink Import para su detección automática.
> - SD: La cantidad residual de un Proyecto no se modifica si se cumple el pedido vinculado en un DDT.
> - Revisión del algoritmo de división de partidas (#TT00233/23).

### Patch 606.1-0019: 31/01/2023

> - FI: Reporte URA en localización HR, exclusión del IVA suspendido; desvinculación de plantilla de tipos de movimiento (#TT00204/23).
> - FI: Activación de indicador “reapertura de cuenta” en cierre automático de cuentas para Ro (#TT00254/23).
> - TT00082/23: se añade al nivel de transición permitido.
> - FI: Excepción de aplicación: 2074/2023: se agregó un elemento con la misma clave.
> - Se agregó un widget Html Blockly para crear un documento Html complejo.
> - FI: Parámetro para visualizar el porcentaje de amortización de cada activo: Fluentis2021 (#TT00280/23).
> - SD: La creación de DDT desde el pedido reporta la Ubicación del Tipo de Pedido incluso pasando por Picking (#TT00248/23).

### Patch 606.1-0018: 24/01/2023

> - PR: Resolución de excepciones salientes en Contabilización de anticipo (#TT00103/23).
> - Modelo de script actualizado para BizLink Intercompany.
> - Actualización de la definición de los scripts para los nuevos analizadores BizLink.
> - SCM: Contabilización de facturas de compra, almacenamiento de parámetros de contabilización (#TT00126/23).
> - Se agregó la exportación de PayRoll para TeamSystem.
> - Se agregó funcionalidad a Intercompany para la exportación.
> - PM / Sprint: se corrigió el procedimiento de creación y apertura de sprint para: cliente, PM y periodo de tiempo.

### Patch 606.1-0017: 18/01/2023

> - TT00050/23: Gestión de errores en el flujo de trabajo durante la invocación de SP en la transición.
> - WM: Corrección de bug. Se corrigió un bug en la creación de lote desde lote, ahora la causa de descarga del lote de origen se propone correctamente (#TT00122/23).
> - PR: Generación de archivo Riba (#TT03061/22).
> - PackagesManagement: Ordenamiento por código de artículo (#TT03156/22).
> - FI: Procedimiento de Generación de Solicitudes: Filtro de Agente (#TT02762/22).
> - MES: Implementados como estándar en el MES el informe de etiquetas de artículo (con o sin Lotes y/o Número de serie) y el informe de etiquetas UDC.
> - FI, PR: Diversas cuestiones sobre Gestión de Liquidez (#TT03247/22).

### Patch 606.1-0016: 13/01/2023

> - FI: Los registros de IVA que no deben estar en la declaración de IVA no deben ser bloqueados (#TT01902/19).
> - Script actualizado para crear un documento Html desde el conjunto de registros.

### Patch 606.1-0015: 12/01/2023

> - Exportación de archivo de Plan de Cuentas y flujo de efectivo para DocFinance: gestión de caracteres de final de línea como CR+LF también para instalaciones de la parte del servidor de Fluentis en Linux (#TT00036/23).
> - FI: Revisión del rollback de la contabilización de pagos de compensaciones, mantenimiento del indicador ‘contabilizado’ en encabezado de compensación; habilitación de rollback de contabilización de compensaciones aunque la causa tenga bloqueo de eliminación si el lote fue pagado (#TT00010/23).
> - WM: rollback contable: el servidor soporta un máximo de 2100 parámetros.
> - SD: Integración del cálculo automático de CONAI en la fase de generación de DDT/Facturas desde Picking (#TT00057/23).
> - FI: Implementación de FA_RO_PreContabFattura y FA_RO_ContabFattura_PostProcessIVA (#TT00068/23).
> - SH: Datos de contacto: Se modificó la transformación FullAddress para que incluya también el número cívico si está presente en los datos.
> - QY: Instrumentos de calibración: Herramientas de medida con artículos de sola naturaleza Equipos.
> - BI: Se resolvió la visualización del mensaje de ocupado que no desaparece después de completar la acción. Redimensionado HeaderCode (texto del grupo superior).

### Patch 606.1-0014: 09/01/2023

> - FI: Revisión de impresión de declaraciones de intención (#TT03407/22).
> - SH: Gestión del parámetro general para la configuración del widget de cuentas, para activar la nueva con 1 edición o volver a la anterior con 3 ediciones.
> - FI: Corrección de VatRegisterSale hr-HR por el nombre incorrecto de la propiedad en los scripts.
> - SD: Impresión de facturas HR: Se agregó informe para abono HR.
> - FI: Exportación de flujo de caja: el valor fijo debería ser '00001' mientras que ahora es '1' (#TT00034/23).
> - FI: Revisión del rollback de amortización de activos (#TT00024/23).
> - TT03324/22: Se permitió la posibilidad de realizar una transición sin cambiar el estado.
> - WM: La ayuda de los lotes ahora calcula la disminución de la disponibilidad de los mismos, incluso si el documento aún no ha sido almacenado en la base de datos (#TT00015/23).

### Patch 606.1-0013: 23/12/2022

> - FI: Se modificó condición en VAT_PdvS_HR de MBRI_Id a MBTM_TipoMov (#TT03391/22).
> - FI: VAT_PdvZP_HR, condición para convertir en estándar (#TT03392/22).
> - FI: Creación de archivo telemático de declaración de intención (#TT03407/22).
> - Se agregó la búsqueda de categorías de Blockly.

### Patch 606.1-0012: 22/12/2022

> - SH: Corrección de la visualización de Extradata de tipo simple en la cuadrícula (#TT03340/22).
> - Se resolvió problema de scripting para objetos de solo lectura y el módulo Informe.
> - Formateo de scripts alineado a la lógica de VisualStudio.
> - SD: Gestión de franjas de descuento incluso cuando no está presente la categoría de comisión (#TT03364/22).
> - CO: Revisión de la inserción de nodos de nivel inferior en los modelos de reclasificación de Fluentis2021 (#TT03334/22).

### Patch 606.1-0011: 15/12/2022

> - CO: Revisión del procesamiento de cierre interanual para datos de centros de costo, revisión de valoración de compras y ventas por filtro DDT de compra (#TT03149/22).
> - SH: Revisión del guardado de la fecha de referencia del cambio (#TT03327/22).
> - CO: Revisión del procesamiento de amortizaciones de control (#TT 3249/22).
> - CO: En las comparaciones de reclasificaciones de control, revisión de la visualización de detalles de periodos (#TT03251/22).
> - WM: Gestión de picking: Se estableció el ordenamiento predeterminado por ID de línea Artículo Picking (antes era por ID Artículo) y se habilitó la gestión de perfiles (#TT03315/22).
> - MES: En la lista de extracción de materiales, en caso de que se cree el picking, entonces con "Buscar los materiales de picking", para los materiales que son del "Tipo de extracción con lista" se establecerán en el picking la causa y el almacén que ya están presentes en la línea de los materiales de la orden de producción; mientras que, para los materiales con "Tipo de extracción Manual" se establecerán la causa y el almacén establecidos en el *Tipo de picking* del *Tipo de picking* utilizado.
> - MES: Se corrigió un bug en los reportes de producción que no permitía ingresar el lote de materiales gestionados por lotes.

### Patch 606.1-0010: 07/12/2022

> - BI: Tableros: Desactivación del indicador de ocupado cuando se anula/cierra el módulo de parámetros emergentes.
> - Se agregó un widget null para Blockly.
> - CO: Revisión del procesamiento de cierre interanual para datos de centros de costo, revisión de valoración de compras y ventas por filtro DDT de compra (#TT03149/22).

### Patch 606.1-0009: 29/11/2022

> - SCS: SubcontractorDeliveryNote Descarga - nuevos filtros número/fecha/puestos almacén.
> - Posibilidad de bloquear la creación de múltiples scripts para el mismo método de algoritmo.
> - Se agregó localización para Blockly y se configuró en modo offline.
> - PM: Se gestionó la propagación de extradata en los documentos relacionados con el WBS de proyecto para el cual se configuró el extradata (#TT02964/22).

### Patch 606.1-0008: 25/11/2022

> - Se resolvió el problema del usuario faltante en Supervisor en el planificador de eventos.
> - Se agregó un selector de widget desde xaml para Blockly.

### Patch 606.1-0007: 21/11/2022

> - WM: Configuración de la matriz de elementos en ExtraData basado en origen de datos SQL.
> - Generación del código de script actualizada con la lógica para saltar la función base.
> - FI: Reanudación de amortización de activos, revisión de gestión de procedimiento y procesamiento (#TT03100/22).
> - PM: En la valoración de intervenciones, al valorizar un único intervención con extradata en el encabezado de intervención propagado desde la base de datos de cliente, no se reportaba en la factura a pesar de la configuración activada. En la valoración de múltiples intervenciones el caso no se presentó. Resuelto (#TT03087/22).
> - SD: Se gestionó la eliminación de facturas generadas por la valorización de intervención, también directamente desde el formulario de búsqueda de factura y no solo a través del rollback del procedimiento. (TT03088/22).
> - PM: Pagos, se gestionaron casos específicos para las horas de viaje con indemnización de viaje (#TT03000/22).
> - FI: Campo tipo de documento en op.patrimoniales Activos (#TT03084/22).
> - FI: Revisión de guardado de registros contables con activos en Fluentis2021 (#TT03137/22).
> - FI: Comunicación de liquidaciones periódicas de IVA, revisiones de cálculo para prueba de empresas en grupo de IVA (#TT03134/22).

### Patch 606.1-0006: 11/11/2022

> - Actualización del script de categoría Supervisor con nuevos comentarios.
> - SCS: Retorno con materiales gestionados a lote: Se resolvió verificación de saldo de material por ubicación y tercerista.
> - FI: Revisión de recálculo de partidas en caso de creación en fecha de vencimiento y no por solución de pago (#TT02916/22).
> - Se agregó refactorización del código de script para expresiones Linq.
> - PM: Se agregó gestión "naturaleza" para tipos de origen de costo/ingreso; se corrigieron algunas anomalías en el procesamiento del SAL (#TT02617/22).
> - Se lanzó el script Supervisor para las actividades RegisterSignalItem, ExecuteMrp, CustomerRisks.
> - CRM: Se incluyó la posibilidad de actualizar las tareas directamente desde las actividades suspendidas de flujo de trabajo que las generaron. En caso de eliminación de la actividad suspendida, también se elimina la tarea vinculada (#TT03016/22).
> - PM: Nómina, en el procesamiento de recibo de sueldos se consideran las horas configuradas en el "Turno principal" si están presentes, de lo contrario se considera la configuración del horario laboral (#TT03019/22).

### Patch 606.1-0005: 07/11/2022

> - ARM: Se generó el método EnsureExtension. También se generó el segmento estándar cuando la entidad personalizada está publicada en el entorno personalizado; hacer referencia al objeto personalizado en lugar de al estándar de objeto de extensión; corregir la nueva propuesta de índice de ItemNature.   
> - SD: Corregir SalesInvoiceType y SalesInvoice Turnover: problemas de impresión.  
> - Se agregó la funcionalidad de completado de código en el editor de scripts.  
> - FI: Revisión de impresión de control de declaraciones de intención para signos en notas de crédito (#TT02829/22).  
> - FI: Revisión de eliminación de líneas en pagos de IVA (#TT02854/22).  
> - SD: Corrección de problemas de ejecución personalizada de ventas desde SalesOrder y desde SalesDeliveryNote.  
> - SCM: Importar listas de proveedores: Se eliminó la columna no utilizada en el esquema: Código de productor (#TT02932/22).  
> - SD: Importar autofacturas de venta: Se agregaron columnas de cuenta y subcuenta del cedente (#TT02954/22).  
> - SCS: Notas de entrega: El precio del material a entregar al tercerista siempre se propone a cero (#TT02973).  
> - FI: Revisión de importación de registros contables desde DocFinance (#TT02727/22 y #TT02859/22).  
> - FI: Sustitución de código de paga en el recibo: si está configurado: para las actividades con indicador de Trabajo Inteligente activo (#TT02923/22).  
> - FI: Se corrigió anomalía en eliminación de recibos de paga vinculado al saldo de días de vacaciones/permisos-rol (#TT02887/22).  
> - PM: Cambio de criterio de agrupación de líneas en los recibos: Recurso, Código de Paga en la actividad, Fecha de Actividad, Indicador Interno/Externo del tipo de intervención vinculado a la actividad (si está presente) #TT02869/22. 
> - PM: En los recibos de paga, en la cuadrícula "valores" se eliminó la lista resumen de valores de los movimientos con indicador "externo" habilitado (#TT02861/22).  
> - CRM: Se resolvieron anomalías relacionadas con drag&drop de actividades configuradas para estado del flujo de trabajo. Se hizo visible en el resumen de actividades la fecha de inicio/finalización del recordatorio (#TT02440/22).  
> - CRM: En caso de inserción de actividades a ejecutar desde WF con fecha de vencimiento indicada y habilitado el indicador "crear nueva actividad", la fecha de vencimiento también se reporta en la nueva actividad creada (#TT02999/22).  
> - SD: Se gestionó la propagación de extradata relativas a las líneas de proyecto también en el caso de inserción manual de líneas en factura con referencia a proyectos (#TT02964/22).  
> - PM: Se gestionó la propagación de extradata relativas a las líneas de proyecto, en los siguientes documentos: solicitudes de intervención, intervenciones programadas, intervenciones. Tanto en caso de inserción manual del documento como por la generación de documentos desde procedimientos (#TT02964/22).  

### Patch 606.1-0004: 27/10/2022

> - Actualización de porcentaje del tipo de operación fiscal para la versión RO.  
> - ARM: Corrección de GetMultipleObjectInformation, exclusión de las propiedades Collection de los objetos de la extensión.
> - Se actualizó el trigger para la actividad del script Supervisor.  
> - Se agregó el campo de licencia para el usuario de Solución.  
> - SH: Añadir NomenclatureHistoryOnDate: Corrección de filtro por fecha del documento (#TT02845/22).  
> - SCM: Los filtros de fecha en el rollback de la factura de compra no funcionan (#TT02929/22).  

### Patch 606.1-0003: 21/10/2022

> - ARM:   
>> - Corrección de bug cuando no está presente ningún objeto personalizado.    
>> - Personalización del formulario Ribbon desde el formulario estándar.     
> - Modificación del modelo ribbon en la base del nivel de modificación permitido.    
> - Dentro del editor de script se puede sobrescribir una función e insertar una sección en bloques.    
> - PM: Se introdujo gestión del cálculo de vacaciones/permisos/ROL en el procesamiento de datos para recibo (#TT02473/22).     
> - SCM: Corrección de error en la contabilidad de facturas de compra para la parte rumana (#TT02843/22).  
> - SH: Se agregó la propiedad calculada ContactHistoryOnDate para los documentos (#TT02848/22).  
> - PM: Generación e inserción manual de nuevos intervenciones planeados/intervenciones/actividades, valoriza el indicador "smart working" en función de la configuración de datos del recurso (#TT02695/22).  
> - SD: Revisión de contabilización de facturas de venta para gestión de obsequios (#TT02265/22).  
> - Se agregó la propiedad calculada NomenclatureHistoryOnDate en FSPosting y FSPostingLedger (#TT02845/22).  
> - Se agregó SignatureHelp al editor de script.  
> - PM: Se resolvió el caso en que la línea de abono WIP no se insertaba en la factura (#TT02755/22).  
> - PK: Corrección de problemas de posición y actualización de PickingItemDetail (#TT02833/22).  
> - Se resolvió el bug en el guardado del estado de los widgets de Workflow.  
> - PM: Corrección de control de fechas en solicitudes de vacaciones/permisos (fecha fin posterior a la fecha inicio) #TT02860/22.

### Patch 606.1-0002: 17/10/2022

> - ARM:
>> - Corrección de propuesta de código de objeto al personalizar una tabla en un objeto.   
>> - Corrección de objeto snapshot en enlaces a la tabla/aplicación snapshot en Linux.

### Patch 606.1-0001: 13/10/2022

ARM - corrección de enlaces de objeto snapshot a tabla/aplicar snapshot en Linux.