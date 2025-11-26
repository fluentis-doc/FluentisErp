--- 
title: Notas de la versión Versión 606
sidebar_position: 1
ai_generated: true
---

### Patch 606.1-0028: 06/04/2023   

> - PR: Solucionado problema en la creación de pagos a proveedores manualmente, cuando se creaba un nuevo pago y simultáneamente se intentaban llamar las partidas a insertar, no se completaban todos los datos relativos al banco, siendo necesario entrar y salir del pago para tener el detalle completado (#TT00916/23)
> - SCS: En caso de que la última fase movible y productiva sea externa, ahora el reingreso de trabajo a tercero actualiza correctamente la cantidad producida en la orden de producción<!-- ordine di produzione -->. (#TT00736/23)
> - SCS: En las órdenes de trabajo a terceros<!-- ordini di conto lavoro -->, el costo propuesto para los artículos sin lista de precios es igual a cero (#TT00978/23)
> - FI: Solucionado problema en la elaboración de la comunicación de liquidaciones periódicas de IVA, el crédito del año anterior se informaba erróneamente tomando el mismo valor que el crédito del periodo anterior, duplicando así el crédito (#TT00875/23)
> - FI: revisión de test sobre cuadratura de centros de coste/beneficio en caso de empresa sin controlling y sin gestión separada de cdc/cdp en la causa contable (#TT01055/23)   


### Patch 606.1-0027: 30/03/2023   

> - FI: revisión del cálculo de amortizaciones para localización serbia (#TT00682/23)
> - FI: Descargar tasas de cambio para HR cambios de divisas (#TT00795/23)
> - SD: Impresión de Factura: Arreglado script en reporte (#TT00816/23)
> - SH: Transformation: Modificada la prioridad sobre la transformación FullTextFiscalDescription para que funcione correctamente
> - SCS: Corregido error Cantidad residual en los Materiales de las órdenes de trabajo a terceros<!-- ordini di conto lavoro --> despachadas en ddt (#TT00459/23)
> - SCS: Añadida la posibilidad de despachar una cantidad decimal en las Entregas previstas (#TT00817/23)
> - SCS: Corregido el error al cambiar el Proveedor en una Orden de trabajo a terceros<!-- Ordine di conto lavoro --> derivada de la Liberación de órdenes planificadas (#TT00823/23)
> - PR: Corregido el error en la generación del archivo SDD (#TT00419/23)
> - SCM: Corrección del stock en caso de descarga de ddt de magazzino<!-- magazzino --> posterior a la valoración (#TT00804/23)
> - SCM: Los descuentos finales ingresados en factura se reportan en las líneas del ddt de compra y en el registro de magazzino<!-- registrazione di magazzino --> relacionado (#TT00417/23)
> - SD: En caso de Creación de factura desde DDT y posterior descarga del DDT, la Visualización de existencias se actualiza correctamente (#TT00802/23)
> - FI: revisión filtro de fechas liquidación iva periódica/anual
> - FI: excepción 4882/2023, truncamiento de una cadena en los pagos a proveedores
> - FI: Corregido reporte de certificación única: no se informaba el código fiscal del representante firmante de la comunicación  
> - Bizlink: revisión localización texto de referencias de la factura en archivo Riba (#TT00888/23)   


### Patch 606.1-0026: 09/03/2023   

> - Habilitada la modificación del campo 'Notas iniciales' en las facturas de venta incluso después de la creación de archivos ordinarios de facturas Sdi(#TT00593/23)
> - SD: Los pesos de los artículos se reportan correctamente desde la orden al ddt incluso pasando por picking (#TT00722/23)
> - FI: Descargar tasas de cambio para HR cambios de divisas (#TT00795/23) 


### Patch 606.1-0025: 02/03/2023   

> - Solución al problema de los vectores de migración.
> - PM: los clientes/proveedores para los que se ha insertado una fecha de fin de validez >= a la fecha de actividad en la declaración de actividad, no se proponen en el widget cliente/proveedor del documento (#TT00555/23)
> - Resuelto problema con el generador de fuentes Xaml
> - SD: Deshabilitado el doble clic en impresión de ticket POS (#TT00611/23)
> - SD: En la facturación de múltiples órdenes en una factura, solo se reporta el gasto de Transporte de la primera orden (#TT00631/23)
> - SD: El Peso de línea en ddt y facturas se recalcula también al variar la cantidad alternativa en el caso de UM alternativa Obligatoria (#TT00656/23)
> - PM: restablecida la posibilidad de insertar un artículo codificado en un nodo de proyecto work package node (#TT00643/23)
> - WM: Corrección de error de stock en caso de valoración de orden en ddt y luego en factura de compra (#TT00661/23) 


### Patch 606.1-0024: 23/02/2023   

> - FI: revisión de la máscara de amortización de activos para el cálculo de los días de posesión y asignación de la fecha de amortización en la elaboración (#TT03183/22)
> - Aplicación de la renombración de archivos en la exportación Intrastat
> - Importación de registros desde DocFinance, revisión de la inserción de pagos de partidas para exclusión de filas de descuento/bonificación
> - CO: revisión gestión fechas de competencia y cuentas utilizadas en contabilización de existencias, revisión de comparación de reclasificaciones por fórmulas y detalles de los datos de existencias iniciales/finales (#TT00554/23)
> - SD: Corrección del doble descuento de artículo en caso de cambio de tipo de ddt de venta (#TT00400/23)
> - FI: revisión gestión de signos de notas de crédito   


### Patch 606.1-0023: 20/02/2023   

> - Problema resuelto para la exportación de archivos txt desde documentos BizLink
> - FI: revisión exportación de archivo F24 (#TT00559/23)
> - SCM: Activados los filtros en la impresión de Calendario de Órdenes de proveedores (#TT00355/23) 


### Patch 606.1-0022: 15/02/2023   

> - La causale<!-- causale --> propuesta en las filas de embalaje en los documentos es la presente en la causale<!-- causale --> de movimiento de embalajes retornables (#TT00413/13)
> - SD: Corregido el problema de importación de vencimientos de facturas de venta y del cobro del IVA (#TT00482/23).
> - ARM: Corregido el nombre del script y ocultar el control del script dentro del grupo del flujo de trabajo (#TT00082/23)
> - WM: Resumen: añadidos filtros de búsqueda para picking y cliente (#TT00415/23)
> - SD: Solucionado problema de duplicación de filas Lote en el registro de magazzino<!-- Registrazione di magazzino --> de un ddt primero descargado y luego valorado
> - SD: Eliminación de espacios de la etiqueta Iban de las facturas electrónicas (#TT00502/23).
> - ARM: cambios para la ejecución de la transición (eliminación del token cuando la transición se ejecuta), cambio del nombre del widget para GenerateDocumentAction
> - añadir el avance para el proceso de actualización (#TT00082/23)
> - WM: revisión de contabilización de movimientos de magazzino<!-- magazzino -->, gestión de signos (#TT00504/23)   


### Patch 606.1-0021: 10/02/2023   

> - ARM: publicación de tipos de objeto de las propiedades de referencia de los objetos de extensión personalizados
> - WM: Bug solucionado. Corregido bug en el formulario de búsqueda de diferencias de inventario (#TT00274/23)
> - MPS: Bug solucionado. Corregido bug en la programación general (#TT00004/23)
> - ARM: corregida la propuesta del usuario para la cuenta de correo electrónico
> - ARM: corregida la generación de modelos MVVM personalizados (no generar la clase RW para los objetos sin módulo RW)
> - FI: revisión eliminación de registros en tabla Aportaciones Iva (#TT00056/23)
> - WM: Bug solucionado. Corregido bug en las diferencias de inventario en relación con la UM alternativa (#TT00292/23)
> - Alineación del widget Blockly para el flujo de trabajo a la nueva lógica
> - Añadido un gestor de contraseñas para los parámetros del supervisor
> - Control de artículos: Resolución de varias anomalías:
o	Planes de control: Artículos Asociados: No se guardaban los cambios;
o	Control de Artículos: Al visualizar o modificar un control de artículo, al cerrar se mostraba un error;
o	Parámetros de Control de Artículos: se mostraba un error al abrir.
> - Solucionado bug del uso del parámetro global para la actividad Email
> - SD:  Revisión del procedimiento de creación de archivo xml en caso de cantidad alternativa (#TT00397/23)
> - SCM: Resuelto error en la Valoración de DDT de compra que indicaba la apertura de los documentos por parte de otro usuario e impedía el procedimiento
> - SCM: Una factura creada a partir de varios DDT reporta una línea nota de referencia para cada DDT de origen  


### Patch 606.1-0020: 02/02/2023   

> - MPS: Bug Solucionado. Corregido bug en la generación de órdenes<!-- commesse --> por previsión en Definición MPS (#TT00284/23)
> - Solucionado el problema de la interfaz ReadWrite en BizLink Import para su detección automática
> - SD: La cantidad residual de un Proyecto no se modifica si despacho la orden relacionada en un DDT
> - Revisión del algoritmo de subdivisión de partidas (#TT00233/23)   


### Patch 606.1-0019: 31/01/2023   

> - FI: señalamiento URA en localización HR, exclusión del iva suspendida; separación de plantilla de tipos de movimiento (#TT00204/23)
> - FI: activación de flag “account reopening” en cierre automático de cuentas para Ro (#TT00254/23)
> - TT00082/23: añadir justo al nivel de la transición permitida
> - FI: Excepción de aplicación: 2074/2023: agregado un elemento con la misma clave
> - Añadido widget Html Blockly para crear un documento Html complejo
> - FI: Parámetro para ver el porcentaje de amortización de cada inmovilizado: Fluentis2021 (#TT00280/23)
> - SD: La creación DDT desde Orden reporta la Ubicación del Tipo de Orden incluso pasando por Picking (#TT00248/23)   


### Patch 606.1-0018: 24/01/2023   

> - PR: Solución de excepciones salientes en Contabilización de liquidación de anticipo (#TT00103/23)
> - Modelo de script actualizado para BizLink Intercompany
> - Actualización de la definición de scripts para los nuevos parsers BizLink
> - SCM: contabilización de facturas de compra, almacenamiento de parámetros de contabilización (#TT00126/23)
> - Añadida la exportación de PayRoll para TeamSystem
> - Añadida funcionalidad a Intercompany para la exportación
> - PM / Sprint: corregido el procedimiento de creación y apertura de sprint para: cliente, PM y periodo de tiempo   


### Patch 606.1-0017: 18/01/2023   

> - TT00050/23: Gestión de errores del flujo de trabajo durante la invocación de SP en transición
> - WM: Bug solucionado. Corregido bug en creación de lote a partir de lote, ahora la causale<!-- causale --> de descarga del lote de origen se propone correctamente : (#TT00122/23)
> - PR: generación de archivo Riba (#TT03061/22)
> - PackagesManagement: ordenamiento por código de artículo (#TT03156/22)
> - FI: Procedimiento Generación Requerimientos: Filtro Agente (#TT02762/22)
> - MES: Implementados como estándar en el MES el reporte de etiquetas de artículo (con o sin Lotes y/o Número de Serie) y el reporte de etiquetas UDC.
> - FI, PR: Diversas cuestiones sobre Gestión de Liquidez (#TT03247/22)   


### Patch 606.1-0016: 13/01/2023   

> - FI: Los registros de IVA que no deben estar en la declaración de IVA no deben ser bloqueados (#TT01902/19)
> - Script actualizado para crear un documento Html desde el recordset    

### Patch 606.1-0015: 12/01/2023   

> - Exportación de archivo Plan de Cuentas y Cash flow para DocFinance: gestión de los caracteres de fin de línea como CR+LF incluso para instalaciones del lado servidor de Fluentis en Linux (#TT00036/23)
> - FI: Revisión del rollback de la contabilización de pagos de compensación, mantenimiento del flag ‘contabilizado’ en cabecera de compensación; habilitación rollback contabilización de compensaciones aunque la causale<!-- causale --> tenga bloqueo de borrado si la partida está pagada (#TT00010/23)
> - WM: rollback accounting: el servidor soporta un máximo de 2100 parámetros
> - SD: Integrado cálculo automático de CONAI en la generación de DDT/Facturas desde Picking (#TT00057/23)
> - FI: implementación FA_RO_PreContabFattura y FA_RO_ContabFattura_PostProcessIVA (#TT00068/23)
> - SH: Anagráfica de contactos: Modificada transformación FullAddress para que reporte también el número cívico si está presente en la anagráfica
> - QY: Calibration Instruments: Instrumentos de medida con artículos de solo naturaleza Herramienta.
> - BI: Solucionado el mensaje de ocupado que no desaparece tras completar la acción. Redimensionado HeaderCode (texto del grupo superior)  


### Patch 606.1-0014: 09/01/2023   

> - FI: revisión impresión de declaraciones de intención (#TT03407/22)
> - SH: gestión del parámetro general de configuración widget para las cuentas, para activar el nuevo con 1 edit o volver al anterior a 3 edit
> - FI: Corregido VatRegisterSale hr-HR por el nombre erróneo de la propiedad en los scripts
> - SD: Impresión de facturas HR: Añadido informe para anulación HR
> - FI: Exportación cash flow: el valor fijo debería ser '00001' mientras ahora es '1' (#TT00034/23)
> - FI: revisión rollback de amortización de activos (#TT00024/23)
> - TT03324/22: permitida la posibilidad de ejecutar una transición sin modificar el estado
> - WM: La ayuda de los lotes ahora calcula la disminución de la disponibilità<!-- disponibilita --> de los mismos, aunque el documento no haya sido aún guardado en la base de datos (#TT00015/23)   


### Patch 606.1-0013: 23/12/2022   

> - FI: modificada condición en VAT_PdvS_HR de MBRI_Id a MBTM_TipoMov (#TT03391/22)
> - FI: VAT_PdvZP_HR, condición para convertir en estándar (#TT03392/22)
> - FI: creación de archivo telemático declaración de intención (#TT03407/22)
> - Añadida la búsqueda de categorías de Blockly   


### Patch 606.1-0012: 22/12/2022   

> - SH: Corregida la visualización de Extradata de tipo simple en la rejilla (#TT03340/22)
> - Solucionado problema de scripting para los objetos ReadOnly y el módulo Report
> - Formateo de scripts alineado a la lógica de VisualStudio
> - SD: Gestión de tramos de descuento incluso si no está presente la categoría de comisión (#TT03364/22)
> - CO: revisión inserción de nodos de nivel inferior en los modelos de reclasificación de Fluentis2021 (#TT03334/22)   


### Patch 606.1-0011: 15/12/2022   

> - CO: revisión de procesamiento de cierre interanual para datos de centros de coste, revisión Valoración de compras y ventas por filtro ddt de compra (#TT03149/22)
> - SH: revisión de guardado de la fecha de referencia del cambio (#TT03327/22)
> - CO: revisión del procesamiento de amortizaciones del controlling (#TT 3249/22)
> - CO: en las comparaciones de reclasificaciones del controlling, revisión de la visualización de los detalles de los periodos (#TT03251/22)
> - WM: Gestión picking: Orden de defecto establecida por ID de línea Artículo Picking (antes era por ID de Artículo) y disponible gestión de perfiles (#TT03315/22)
> - MES: En la lista de recolección de materiales, si se crea el picking, con "Buscar los materiales picking", para los materiales que están con "Tipo de recolección Con lista" se asignarán en el picking la causale<!-- causale --> y el magazzino<!-- magazzino --> que ya están presentes en la línea de materiales de la órden de producción; mientras que, para los materiales con "Tipo de recolección Manual" se asignarán la causale<!-- causale --> y el magazzino<!-- magazzino --> configurados en el *Tipo picking* del *Tipo picking* utilizado.
> - MES: Corregido bug en las señales de producción que no permitía ingresar el lote de materiales gestionados por lotes


### Patch 606.1-0010: 07/12/2022   

> - BI: Dashboards: Eliminación del indicador de ocupado al cancelar/cerrar el módulo de parámetros emergente
> - Añadido un widget null para Blockly
> - CO: revisión de la elaboración de cierre interanual para datos de centros de coste, revisión Valoración de compras y ventas por filtro ddt de compra (#TT03149/22)   


### Patch 606.1-0010: 07/12/2022   

> - BI: Dashboards: Eliminación del indicador de ocupado al cancelar/cerrar el módulo de parámetros emergente
> - Añadido un widget null para Blockly
> - CO: revisión de la elaboración de cierre interanual para datos de centros de coste, revisión Valoración de compras y ventas por filtro ddt de compra (#TT03149/22)   


### Patch 606.1-0009: 29/11/2022   

> - SCS: SubcontractorDeliveryNote Descarga-nuevos filtros número/fecha/posición de magazzino<!-- magazzino -->
> - Posibilidad de bloquear la creación de múltiples scripts para el mismo método de algoritmo
> - Añadida localización para Blockly y configurada en modo offline
> - PM: gestionada la propagación de extradata en los documentos relacionados con la wbs de proyecto para la que se ha configurado el extradata (#TT02964/22)   


### Patch 606.1-0008: 25/11/2022   

> - Solucionado el problema del usuario faltante en Supervisor en el planificador de eventos
> - Añadido un selector de widget desde xaml para Blockly  


### Patch 606.1-0007: 21/11/2022   

> - WM: Configuración de la matriz de elementos en ExtraData basado en origen de datos SQL
> - Generación de código de script actualizada con la lógica para saltar la función base
> - FI: reanudación de amortización de activos, revisión de gestión del procedimiento y procesamiento (#TT03100/22)
> - PM: En la valoración de intervenciones, valorando una sola intervención con extradata en cabecera de intervención propagada desde anagráfica de cliente, no se reportaba en factura a pesar de la configuración activada. En la valorización de varias intervenciones el caso no se presentaba. Solucionado (#TT03087/22)
> - SD: Gestionada eliminación de facturas generadas por valoración de intervención, incluso directamente desde el formulario de búsqueda de factura y no solo por rollback de procedimiento. ( TT03088/22)
> - PM: nómina, gestionados casos específicos para las horas de viaje con indemnización de desplazamiento (#TT03000/22)
> - FI: Campo tipo de documento en op.patrimoniales Activos (#TT03084/22)
> - FI: revisión guardado de registros contables con activos en Fluentis2021 (#TT03137/22)
> - FI: comunicación de liquidaciones periódicas de iva, revisiones en cálculo para test de empresa en grupo de iva (#TT03134/22)   


### Patch 606.1-0006: 11/11/2022   

> - Actualizado el script de la categoría Supervisor con los nuevos comentarios
> - SCS: Reingreso con materiales gestionados por lote: Solucionada comprobación de stock de material por ubicación y subcontratista
> - FI: revisión recálculo de partidas en caso de creación sobre fecha de vencimiento y no por solución de pago (#TT02916/22)
> - Añadida refactorización del código de script para expresiones Linq
> - PM: añadida gestión de "naturaleza" para los tipos de origen costo/ingreso; corregidas algunas anomalías en la elaboración del SAL (#TT02617/22)
> - Liberado el script Supervisor para actividades RegisterSignalItem, ExecuteMrp, CustomerRisks
> - CRM: añadida posibilidad de actualizar las tareas directamente desde las actividades suspendidas de workflow que las generaron. En caso de eliminación de la actividad suspendida, también se elimina la tarea relacionada (#TT03016/22)
> - PM: Payroll, en la elaboración de nómina de pago se consideran las horas configuradas en el "Turno principal" si están presentes, de lo contrario se considera la configuración del horario de trabajo (#TT03019/22)   


### Patch 606.1-0005: 07/11/2022   

> - ARM: generado el método EnsureExtension. También se generó el segmento estándar cuando la entidad personalizada está publicada en el entorno personalizado; hacer referencia al objeto personalizado en lugar de al estándar desde el objeto Extension; corregida la nueva propuesta de índice de ItemNature   
> - SD: Corregido tipo de factura de ventas y ventas por facturación: problemas de impresión.
> - añadido funcionalidad de autocompletado de código al editor de scripts  
> - FI: revisión control de impresión de declaraciones de intención para signos en notas de crédito (#TT02829/22)  
> - FI: revisión eliminación de líneas en Aportaciones iva (#TT02854/22)  
> - SD: Corregidos problemas de ejecución personalizada de ventas desde SalesOrder y desde SalesDeliveryNote.  
> - SCM: Importación de listas de precios de proveedores: Eliminada la columna no utilizada en el esquema: Código del productor (#TT02932/22)  
> - SD: Importación de autofacturas de venta: Añadidas las columnas cuenta y subcuenta<!-- sottoconto --> del cedente (#TT02954/22)  
> - SCS: Delivery Notes: El precio del material por entregar al subcontratista siempre se propone a cero (#TT02973)
> - FI: revisión importación de registros contables desde DocFinance (#TT02727/22 y #TT02859/22)  
> - FI: Sustitución de código de pago en el recibo de nómina: si está configurado: para actividades con flag Smart Working activo (#TT02923/22)  
> - FI: corregida anomalía en eliminación de nóminas vinculadas al saldo de vacaciones/permiso-rol (#TT02887/22)  
> - PM: cambiado el criterio de agrupación de líneas en los recibos de nómina: Recurso, Código de pago en la actividad, Fecha de Actividad, Flag Interno/Externo del tipo de intervención vinculado a la actividad (si está presente) #TT02869/22 
> - PM: en los recibos de nómina, en la cuadrícula "valores" eliminado listado de valores resumen de los movimientos con flag "externo" habilitado (#TT02861/22)  
> - CRM: solucionadas anomalías relacionadas con drag&drop de actividades configuradas por estado de workflow. Se visualiza en el resumen de actividades la fecha inicio/fin del recordatorio (#TT02440/22)  
> - CRM: en caso de inserción de actividad a ejecutar desde el WF con fecha de vencimiento indicada y flag "crear nueva actividad" habilitado, la fecha de vencimiento también se informa en la nueva actividad creada (#TT02999/22)
> - SD: Gestionada propagación de extradata relativa a las líneas de proyecto incluso cuando se insertan manualmente líneas en la factura con referencia a proyectos (#TT02964/22)  
> - PM: Gestionada propagación de extradata relativa a las líneas de proyecto, en los siguientes documentos: solicitudes de intervención, intervenciones planificadas, intervenciones. Tanto en caso de inserción manual como por generación de documentos mediante procedimientos (#TT02964/22)  

### Patch 606.1-0004: 27/10/2022

> - Actualización del porcentaje de tipo de operación fiscal para la versión RO  
> - ARM: Corrección GetMultipleObjectInformation, exclusión de las propiedades Collection de los objetos de la extensión
> - Actualizado el trigger para la actividad del script Supervisor  
> - añadido el campo de la licencia para el usuario Solución  
> - SH: Add NomenclatureHistoryOnDate: Corrección del filtro por fecha del documento (#TT02845/22)  
> - SCM: Los filtros de fecha en el rollback de la factura de compra no funcionan (#TT02929/22)  

### Patch 606.1-0003: 21/10/2022

> - Arm:   
>> - Corrección de bug cuando no hay ningún objeto personalizado    
>> - Formulario personalizado Ribbon a partir de formulario estándar     
> - Modificación del modelo ribbon en la base del nivel de modificación permitida    
> - Dentro del editor de script es posible sobrescribir una función e insertar una sección de bloques.    
> - PM: introducida gestión de cálculo de vacaciones/permisos/ROL en la preparación de datos para nómina (#TT02473/22)     
> - SCM: corrección error en la contabilidad de facturas de compra para la parte rumana (#TT02843/22)  
> - SH: Añadida propiedad calculada ContactHistoryOnDate para los documentos (#TT02848/22)  
> - PM: generación e inserción manual desde nuevo de intervenciones planificadas/intervenciones/actividades, valoran el flag "smart working" según la configuración de la ficha del recurso (#TT02695/22)  
> - SD: revisión contabilización de facturas de venta para gestión de regalos (#TT02265/22)  
> - Añadida propiedad calculada NomenclatureHistoryOnDate en FSPosting y FSPostingLedger (#TT02845/22)  
> - Añadido SignatureHelp al editor de scripts  
> - PM: resuelto caso en el que la línea de anulación WIP no se insertaba en factura (#TT02755/22)  
> - PK: Corrección de problemas de posición y actualización de PickingItemDetail(#TT02833/22)
> - Solucionado bug del guardado del estado de los widgets de WorkFlow  
> - PM: corregido el control de fechas en solicitudes de vacaciones/permisos (fecha fin posterior a la fecha de inicio)#TT02860/22


### Patch 606.1-0002: 17/10/2022

> - ARM:
>> - Corrección de propuesta de código de objeto cuando se personaliza una tabla en un objeto   
>> - Corrección de objeto snapshot en los enlaces a la tabla/aplicación snapshot en linux 

### Patch 606.1-0001: 13/10/2022

Arm - corregido enlace de objeto snapshot a tablas/aplicar snapshot en linux