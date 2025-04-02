---
title: Notas de la versión 605 (Patch notes Versione 605)
sidebar_position: 1
---

## Patch 605.1-0013: 23/09/2022

> - FI: cierre automático de cuentas: cálculos incorrectos (#TT02397/22)      
> - ARM: solución para archivos adjuntos del flujo de trabajo      
> - ARM: Nueva validación de tabla: el esquema antiguo no debe ser nulo cuando el nombre de la antigua tabla no está vacío.      
> - CO: anomalía en el cálculo de balances reclasificados (#TT02427/22)      

## Patch 605.1-0012: 15/09/2022

> - SD: En la duplicación de facturas de venta, ahora también se incluye la categoría de agente si está presente (#TT02409/22)      
> - Alineación de la exportación de CashFlow a las nuevas funciones      
> - Extradata: Extradatos basados en las fuentes de datos con caso de propagación      
> - FI: Cambio de lógica rumana para 390      
> - SD: Se corrigió el error al intentar abrir los elementos de la ficha en SalesDeliveryNote (#TT02485/22)      
> - SH: Datasources: eliminación de la propiedad "AdvancedClass" no utilizada por la interfaz de usuario      
> - CO: cierre automático de cuentas: cálculos incorrectos (#TT02397/22)      
> - FI: modificación de impresión del libro de activos amortizables en Fluentis2021 para gestionar la visualización de activos vendidos/destruidos (#TT02000/22)      
> - MPS: Corrección de definición MPS: problema con el filtro de fecha (#TT02502/22)      
> - FI: se recalcularon el IVA y las rejillas del libro mayor cuando se modifica la tasa de cambio de registro (#TT02481/22)      
> - SCM: NIr: Corrección del tiempo de espera al abrir el módulo de modificación (#TT02512/22)      
> - CRM: se resolvió la creación de tareas a partir de tareas suspendidas insertadas en el flujo de trabajo (#TT02480/22)      

## Patch 605.1-0011: 09/09/2022

> - Se resolvió el error del analizador de fecha y hora en la referencia al script      
> - Se resolvió el error de actualización de la región de Blockly      
> - SCS: Error corregido: se corrigió la selección única y múltiple en la ayuda de números de serie en DDT de cuenta de trabajo.      
> - SH: empresa: se aumentó el tamaño de SHC_PostalCode a 10 caracteres y SHC_VATOffice a 50 caracteres (#TT02238/22)      
> - PM: valorización de intervenciones, se gestionó el agrupamiento de líneas de invoice plan en la factura también en función del indicador "precio con IVA" en la factura. (#TT02309/22)      
> - FI: cierre automático de cuentas (#TT02397/22)      
> - Se aumentaron los tiempos de '2xTap' y se añadieron correcciones para el planner 'Xamarin'      
> - FI: ajustes contables: se resolvió la excepción que ocurría al intentar comprobar el cálculo del ajuste (#TT02401/22)      
> - FI: se corrigió la anomalía en la contabilización de compensaciones con valores negativos, con el indicador desactivado para la inversión de signos para valores menores que cero. (#TT02356/22)      
> - CO: revisión de la gestión de recuperación de horas de proyecto para convertir según las configuraciones de la UM (#TT02157/22)      
> - FI: Declaraciones 300 y 3xx: modificaciones a la lógica RO (#TT02431/22)      
> - Se corrigió la creación de DDT a partir de Picking en algunos casos (#TT02416/22)      
> - FI, SCM: Error en la asignación de facturas de compra electrónicas a los registros (#TT02350/22)      
> - FI, SCM: Conexión XML de compra a registros contables (#TT01403/22)      
> - SCM: Problema de redondeo en el registro del libro mayor en la contabilidad de facturas de compra para RO (#TT02445/22)      
> - SD: en la facturación electrónica italiana, en el paso 'Controlada' se ha añadido un nuevo control sobre la presencia de código ISO y NIF del 'cedente prestatore' de las autofacturas (tanto en el registro principal como en su posible dirección alternativa de tipo 'representante fiscal') (#TT02411/22)      
> - CO: revisión del filtro DDT de compra en valorización del área de compras/ventas (#TT02258/22)      
> - PR: gestión de riesgos: se aumentó el tamaño de RSUE_Descr1 a 80 caracteres (#TT02392/22)      
> - Bizlink: Exportar cash flow para DocFinance: Fluentis2021 (#TT02451/22)  

## Patch 605.1-0010: 31/08/2022

> - SD: Error corregido: se corrigió un error en la actualización del proyecto de producción al cambiar los datos presentes en el pedido del cliente (#TT02232/22)      
> - CO: en controlling, revisión del cálculo 'Recuperación de costos de proyecto' para Fluentis2021      
> - SCS: Cumplimiento de proyecto de cuenta de trabajo      
> “SCS: Se corrigió el cumplimiento de los proyectos de cuenta de trabajo, el proyecto se considera cumplido una vez que el pedido de cuenta de trabajo está en estado "Cumplido" o "Forzado Cumplido".”
> - SCM: Cumplimiento de proyecto de compra       
> “SCM: Se corrigió el cumplimiento del proyecto de compra, el proyecto se considera cumplido cuando todos los documentos generados de él están en estado "Cumplido" o "Forzado Cumplido" (R.D.A. y Pedidos de proveedor).”      
> - PM: se resolvió la anomalía en el rollback de facturas generadas por intervenciones, que reasignaba el estado "controlado" a todas las intervenciones no facturadas, no solo a aquellas objeto del rollback (#TT02233/22)      
> - PM: se resolvió la anomalía en el rollback de facturas generadas por intervenciones, que reasignaba el estado "controlado" a todas las intervenciones no facturadas, no solo a aquellas objeto del rollback (#TT02233/22)      
> - PM: en las intervenciones, para los gastos incurridos se añadió la visualización previa de los archivos adjuntos (#TT02187/22)      
> - PM: en las intervenciones, al llenar el campo "descripción de la actividad realizada" de un servicio, si se superaba el máximo de caracteres permitidos, el campo se reiniciaba. Ahora se reemplaza con un bloqueo de entrada sin reiniciar el campo (#TT02186/22)      
> - ARM: Se añadió la dirección de envío predeterminada para los correos electrónicos enviados con una acción de flujo de trabajo. Si no se establece, se utilizará la dirección de correo electrónico del operador que realiza el avance del WF.      
> - PM: al variar los campos "tiempo efectivo" y "redondeo" en el invoice plan de una intervención, el campo cantidad no se recalculaba. Resuelto. (#TT02067/22)      
> - PM: inserción de nueva actividad para recurso, la fecha propuesta automáticamente considera el horario laboral del recurso, proponiendo eventuales franjas horarias faltantes para el día. En caso de inserción de fecha solapada con otra actividad, se solicita si se debe continuar. En caso de inserción de fecha de actividad que resulta no laboral, se señala. (#TT02104/22)      
> - PM: para algunas líneas de extratime (referentes a horas de viaje), el campo precio con IVA en el invoice plan no se valoraba. Resuelto (#TT01592/22)      
> - PM: en el cálculo del invoice plan, para ciertos casos donde el viaje se incluye parcialmente en los servicios, había anomalías en la conversión del tiempo efectivo. Resuelto (#TT01561/22)      
> - PM: en el cálculo del invoice plan, en caso de inclusión de horas de viaje en los servicios para los cuales las horas de viaje van totalmente a extratime, quedaba una línea a 0. Resuelto (#TT01968/22)      
> - PM: se mejoró la generación de actividades a partir de intervenciones, previniendo la inserción automática de la actividad al cambiar el estado de la intervención a “aprobado”. Se añadió un nuevo campo “categoría de actividad” en los gastos, utilizado en caso de generación de actividad por horas de viaje; en las actividades generadas por intervención solo se reportan los gastos incurridos y no los que deben facturarse (#TT01516/22)      
> - PM: valorización de intervenciones, en caso de líneas de servicio con y sin WIP en la misma intervención, los agrupamientos de líneas en la factura tienen en cuenta el WIP. Por lo tanto, en la factura habrá dos agrupamientos separados para las líneas con WIP y sin WIP, con el correspondiente ajuste correcto (#TT02047/22)      
> - PM: en caso de cambio de recurso en una intervención, los gastos incurridos y por facturar, así como el correspondiente invoice plan se recalculan, coherentemente con el recurso y las configuraciones previstas (#TT02319/22)      
> - FI: CashFlow: se resolvió un error en la fase de impresión del análisis cashflow que resultaba siempre en forma detallada (#TT02183/22)      
> - PM: en el rollback de la generación de actividades a partir de intervenciones, se insertaron nuevos filtros para la búsqueda de documentos para realizar el rollback: búsqueda por fecha/número/cliente/recurso de la intervención, por fecha/número/cliente/recurso de la actividad. (#TT02313/22)      
> - FI: error en el uso del procedimiento 'Comisiones contables' en el área de Finanzas:-> profesional hombre (#TT02356/22)      
> - FI: cierre automático de cuentas (#TT02370/22)      
> - SCS: Error corregido. Se corrigió un error en los DDT y en los Registros de Cuenta de Trabajo que no permitía visualizar las líneas a importar en “Cumplimiento de pedidos”, en caso de que se hubiera eliminado respectivamente el DDT o el mismo Registro (#TT02366/22)   


## Patch 605.1-0009: 05/08/2022

> - Se resolvió un error en la gestión de descripción de movimiento contable desde Excel      
> - SD: Reglas de validación para e-Invoice Rumanía para el estado Controlada (#TT01987/22)      
> - SD: Corrección en SalesInvoice - se añadieron nuevos errores en los artículos en los documentos (#TT02179/22)      
> - MRP: error corregido: se corrigió un error en el procedimiento MRP en caso de que el indicador "Diferenciar demanda de producción confirmada" esté activado.      
> - FI: intrastat: se modificó la asignación de gastos prorrateados para excluir las líneas de anticipo/ajuste de anticipo. Revisión de asignación de la sección bis/ter basado en la fecha de referencia en la cabecera del documento (#TT02074/22)      
> - Xamarin: WM: El widget Código de entrada no obtenía foco cuando se seleccionaba la pestaña DetallesConfirmación; se corrigió la excepción que ocurría cuando se cancelaba la creación de una nueva unidad de carga, en la pestaña DetallesConfirmación; corrección del botón "Abrir unidad de carga" (ubicado en la barra multifunción), que no estaba habilitado cuando se seleccionaba una línea en la pestaña Detalles.      
> - se añadió soporte para comandos en el autocompletado      
> - SD: Procedimiento corregido para descargar factura (#TT02239/22)       
> - Xamarin: SH: Corrección de un error que impedía guardar y capturar fotos en Xamarin      
> - Xamarin: Framework: Corrección de los permisos para la cámara y la localización del popup    


## Patch 605.1-0008: 27/07/2022

> - FI: comunicación de liquidación del IVA periódica, revisión de la exportación desde el botón en el formulario Fluentis2021 (#TT02094/22)      
> - WM: Cálculo de Costos: error corregido para la ejecución del Cálculo de Costos de Artículos Seleccionados.      
> - Se resolvió un error en la importación de archivos de texto en sistemas Linux      
> - PM: se añadió la posibilidad de generar actividades a partir de intervenciones desde el procedimiento, incluso para intervenciones con estado "aprobado" (#TT02059/22)      
> - Cambio en el módulo PM, módulo FI, módulo SH, módulo CRM, framework Xamarin, para la corrección de formularios específicos de CRM (solo aplicación móvil)      
> - ModalFormParameter: se añadió soporte para el control PasswordBoxEdit  


## Patch 605.1-0007: 19/07/2022

> - FI: revisión de la gestión de caracteres de fin de línea para archivos Intrastat (#TT02075/22)      
> - MRP: El procedimiento MRP genera correctamente los pedidos planificados incluso si no están todos los indicadores relacionados con la creación de pedidos planificados de: compra, cuenta de trabajo y producción activos.      
> - PM: desde el procedimiento de rollback de "generación de actividades a partir de intervenciones", se hizo posible el rollback de las actividades relacionadas tanto con los servicios como con las horas de viaje (#TT01999/22)      
> - PM: se resolvió la anomalía en la cual los gastos incurridos en la intervención no se reportaban correctamente en las actividades correspondientes generadas por la intervención (#TT02001/22)      
> - WM: Cálculo de Costos: error corregido para la ejecución del Cálculo de Costos de Artículos Seleccionados  


## Patch 605.1-0006: 15/07/2022

> - SalesInvoice: corrección en la ejecución desde SalesDeliveryNote: problema con las líneas de notas.      
> - CO: recuperación de datos de la producción (#TT01956/22)      
> - PM: la búsqueda de intervenciones aplicando un filtro por artículo generaba una anomalía, que se ha resuelto (#TT01967/22)      
> - PM: se resolvió la anomalía en la generación de actividades al cambiar el estado de la intervención a "aprobada". En presencia de parámetros de proyecto: por operador, funcionaba solo para la intervención especificada en los parámetros. Ahora es funcional para todos los tipos de intervenciones. (#TT01566/22)      
> - CO: revisión de las impresiones del balance interanual en el controlling      
> - SH: se resolvió la anomalía en la visualización de la factura de compra electrónica, verificada para ciertos casos en los que el archivo tenía la extensión .XML escrita en mayúsculas (#TT01855/22)      
> - PM: en las intervenciones programadas, al modificar la fecha de inicio, se pregunta si se deben actualizar también las fechas siguientes (pausa y fin) en la pantalla. Al responder afirmativamente, no siempre se proponían los horarios correctos de acuerdo con el turno de trabajo del recurso. La casuística se ha resuelto (#TT01594/22)      
> - PM: el procedimiento de generación de intervenciones a partir de actividades, en idioma rumano daba un mensaje incompleto al hacer clic en el botón de crear intervención. Resuelto (#TT01894/22)      
> - MRP: Ahora el procedimiento cancela correctamente los pedidos planificados, no relacionados con proyectos, en cada ejecución para luego recrearlos. Además, se corrigió también el funcionamiento del parámetro "Días de agrupamiento" presente en los parámetros MRP.      
> - MPS: Programación: En caso de que se seleccionen uno o más proyectos, el procedimiento programa correctamente solo los presentes en la selección.      
> - PM: se mejoró la gestión de cancelación de actividades/intervenciones interconectadas y con los sprints.       
>> 1. En caso de cancelación de una intervención ya insertada en el sprint, se cancela también la referencia a la intervención en el sprint.            
>> 2. En caso de cancelación de horas de viaje presentes en la intervención para la cual se generó una actividad vinculada, se cancela también la actividad correspondiente.       
>> 3. En caso de cancelación de una intervención que ha generado una o más actividades vinculadas, también se cancelan las actividades correspondientes.      
>> 4. En caso de cancelación de una intervención que ha sido generada POR una o más actividades, solo se cancela la intervención, mientras que las actividades permanecen y se restablece el indicador “facturado” = falso.          
> - Se añadieron scripts de API para gestión de controles y widgets Blockly relacionados.      
> - PM: al eliminar las horas de viaje de intervenciones ya aprobadas, daba un error debido a que había una actividad vinculada a las horas de viaje. La casuística se ha resuelto al eliminar también las actividades vinculadas a las horas de viaje de la intervención (#TT01893/22)      
> - MRP: En la pestaña de resultados del MRP, la fecha de los documentos presente en el campo "descripción de acción a emprender" está correctamente en el formato del idioma seleccionado.      
> - PM: se mejoró la generación de actividades a partir de la confirmación del periodo de vacaciones/permisos, no se generaban correctamente todas las actividades si en el mismo periodo ya estaban presentes otras declaraciones de actividades. (#TT01835/22)      
> - PM: la modificación de la fecha de actividad en la declaración de actividad implica el recálculo de otros campos "hora de inicio/hora de fin/hora de inicio de pausa/hora de fin de pausa". Asimismo, si se modifica el campo "hora de inicio", el campo "fecha de actividad" se actualiza (#TT02018/22)      
> - PM: el cambio de estado de la intervención desde la barra de ribbon de "insertado" a "por aprobar", no lograba realizar el cálculo del invoice plan. Resuelto. (#TT01997/22)      
> - PM: si una intervención ha sido aprobada y, por tanto, ha generado una actividad relacionada, se bloquean para su modificación los siguientes campos: cliente (en la cabecera de la intervención), recurso/fecha/hora/descripcion/proyecto/categoría de actividad/ticket (en los servicios). Los otros campos (por ejemplo, precio, IVA, .W.I.P., porcentaje de avance, etc.) pueden ser modificados. (#TT02012/22)      
> - SH: Gestión de la propiedad StatiscticalAgent (#TT02005/22)  


## Patch 605.1-0005: 08/07/2022

> - PM: Se resolvió la eliminación de intervenciones, en caso de intervenciones sin líneas de servicios o materiales, no se realizaba (#TT01789/22)      
> - PM: Se resolvió la anomalía en los gastos incurridos en las intervenciones, en caso de habilitar el indicador "Por Reembolsar", el campo de importe del gasto se establecía igual al campo "costo total" (estaba en cero). Ahora el valor se mantiene (#TT01939/22)      
> - SH: en el plan de cuentas, revisión de la gestión del botón nuevo subtítulo cuando el anterior aún no se ha guardado y falta la descripción (#TT01936/22)      
> - PM: Creación de SalesInvoice desde Project Sal: modificación de pagos (#TT01515/22)      
> - PM: Se resolvió la inserción de nuevas líneas de WBS, en caso de proyecto con gestión Gantt daba error. (#TT01922/22)      
> - PM: al variar el cliente titular de un proyecto con la confirmación de actualización de listas de precios, artículos, etc., en caso de precio nulo para WBS no permitía el guardado sin dar ningún mensaje de alerta (#TT01927/22)      
> - PM: en caso de uso de corchetes dentro de la descripción de un WBS, generaba un error al abrir el proyecto después del guardado (#TT01790/22)      
> - PM: al abrir una intervención con Fluentis en un idioma diferente al italiano, en el invoice plan mostraba los campos relacionados con el precio en una moneda extranjera específica para el idioma configurado.    


## Patch 605.1-0004: 06/07/2022

> - PM: Se resolvió la anomalía en el guardado de intervenciones, en caso de WBS sin precio o cantidad vinculadas a las líneas de servicios (#TT01839/22)      
> - SH: corrección de extradata basada en DataSource      
> - MPS: este mensaje de error "Error: Artículo de Producción Bloqueado o sin la Lista de Materiales requerida o Lista cíclica", será reemplazado por mensajes que indican específicamente el error, por lo que en relación con el indicador "bloqueado para producción" entre parámetros MRP y el indicador "no se requiere autorización" en el "Error: Artículo de Producción Bloqueado o sin la Lista de Materiales requerida o Lista cíclica".      
> - Alineación de Xamarin con la última versión de Trk            
> - Se añadió CheckRowManagement (Gestión de Marcas) formulario para la plataforma Xamarin y se modificó CheckRowManagement ViewModel para Wpf      
> - MES: Liberación de pedidos planificados: En caso de fases externas, el procedimiento no generaba correctamente los pedidos de cuenta de trabajo y no proponía correctamente los materiales a entregar y a emplear.      
> - Se añadió un script de recompilación automática para las nuevas versiones instaladas.      
> - FI: Se resolvió la excepción que ocurría al descargar tasas de cambio (#TT01880/22)      
> - SD: En la creación del archivo Sdi para facturas de venta, gestión de la sección del 'representante fiscal' del cedente/prestatore (por ejemplo, en el caso de autofacturas TD19). La sección se valora si en el registro del cedente/prestatore se define una dirección alternativa de tipo 'Representante fiscal' (#TT01915/22).      
> - MRP: Se corrigió el algoritmo que, en algunos casos, generaba pedidos planificados con cantidades dobles.      
> - MRP: Ahora los pedidos de clientes no confirmados y sin fechas de entrega y mercancía lista ya no se consideran por el MRP, si en los parámetros MRP para los pedidos de clientes hay el indicador para "No considerar los artículos sin fecha de entrega".      
> - FI: Archivo para Declaraciones de Intención en Fluentis2021 (#TT01902/22)  

 
## Patch 605.1-0003: 01/07/2022  

> - Actualización de plantilla para script de cliente ObjectForm      
> - FI: corrección de 394 en la declaración

);

/** Se corrigió el lanzamiento de pedidos planificados de artículo con lista de materiales con artículos ficticios. **/   

## Patch 605.1-0002: 29/06/2022 

> - PR: Revisión del campo nulo en los gastos por operación (#TT01774/22)        
> - Actualización de líneas de configuración de BizLink huérfanas         
> - Modificación para prevenir un error que se generaba al crear el archivo XML de la factura de compra  


## Patch 605.1-0001: 28/06/2022  

> - MPS: Se resolvió el problema con el lanzamiento de un pedido de producción con solo una fase externa en el ciclo, ahora crea el pedido de producción y el pedido de cuenta de trabajo.         
> - MES: Se corrigió el lanzamiento de los pedidos planificados de artículos con lista de materiales con artículos ficticios.