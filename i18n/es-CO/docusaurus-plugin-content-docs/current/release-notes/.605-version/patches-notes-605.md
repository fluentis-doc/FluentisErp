---
title: Notas de la versión Patch 605
sidebar_position: 1
ai_generated: true
---

## Patch 605.1-0013: 23/09/2022

> - FI: cierre automático de cuentas: cálculos erróneos (#TT02397/22)      
> - ARM: corrección para adjuntos en el workflow      
> - ARM: Nueva Validación de Tabla: El esquema antiguo no debe ser nulo cuando el nombre de la tabla antigua no está vacío.      
> - CO: Anomalía en el cálculo de balances reclasificados (#TT02427/22)      

## Patch 605.1-0012: 15/09/2022

> - SD: En la duplicación de facturas de venta, ahora también se transfiere la categoría de agente si está presente (#TT02409/22)      
> - Alineación de la exportación de CashFlow a las nuevas funcionalidades      
> - Extradata: Extradata basado en fuentes de datos con casos de propagación      
> - FI: Cambio en la lógica rumana para 390      
> - SD: Corregido el error al intentar abrir los elementos de la ficha en SalesDeliveryNote (#TT02485/22)      
> - SH: Datasources: eliminación de la propiedad "AdvancedClass" no utilizada desde la interfaz de usuario      
> - CO: cierre automático de cuentas: cálculos erróneos (#TT02397/22)      
> - FI: modificación en la impresión del libro de activos amortizables en Fluentis2021 para la gestión de la visualización de activos vendidos/destruidos (#TT02000/22)      
> - MPS: Corrección de MPS Definition: problema con el filtro de fecha (#TT02502/22)      
> - FI: recalculado el IVA y las rejillas del libro mayor al modificar el tipo de cambio de la transacción<!-- registrazione --> (#TT02481/22)      
> - SCM: NIr: Corregido el time out al abrir el módulo de modificación (#TT02512/22)      
> - CRM: resuelta la creación de actividad a partir de actividades suspendidas ingresadas en el Workflow (#TT02480/22)      

## Patch 605.1-0011: 09/09/2022

> - Resuelto el bug del parser datetime en la referencia al script      
> - Resuelto el bug de la actualización de la región de Blockly      
> - SCS: Bug corregido: Corregida la selección simple y múltiple en la ayuda de números de serie en los DDT de cuenta de trabajo<!-- conto lavoro -->.      
> - SH : company: aumentada la dimensión para SHC_PostalCode a 10 caracteres y SHC_VATOffice a 50 caracteres (#TT02238/22)      
> - PM: valorización de intervenciones, se gestiona el agrupamiento de líneas del invoice plan en factura también basado en la marca "precio con IVA" en factura. (#TT02309/22)      
> - FI: cierre automático de cuentas (#TT02397/22)      
> - Aumentados los tiempos de '2xTap' y añadidas correcciones para el scheduler 'Xamarin'      
> - FI: asientos de ajuste: resuelta excepción saliente al intentar controlar el cálculo de ajuste (#TT02401/22)      
> - Fi: resuelta anomalía en contabilización de honorarios con valores negativos, con flag deshabilitado para la inversión de signos para valores menores que cero. (#TT02356/22)      
> - CO: revisión de la gestión de recuperación de horas de proyecto para convertir según la configuración de la UM (#TT02157/22)      
> - FI: Declaraciones 300 y 3xx: modificaciones por la lógica RO (#TT02431/22)      
> - Corregida la creación de DDT desde Picking en algunos casos (#TT02416/22)      
> - FI, SCM: Error en la asignación de facturas de compra electrónicas a las transacciones contables<!-- registrazioni --> (#TT02350/22)      
> - FI, SCM: Vinculación xml de compra a transacciones contables<!-- registrazioni contabili --> (#TT01403/22)      
> - SCM: Problema de redondeo en la transacción del libro mayor<!-- registrazione del libro mastro --> en la contabilidad de facturas de compra para RO (#TT02445/22)      
> - SD: en la facturación electrónica italiana, en el paso 'Controlada' se ha insertado un nuevo control sobre la presencia del código iso y NIF del 'cedente prestatore' de las autofacturas (tanto en la ficha principal como en su posible dirección alternativa de tipo 'representante fiscal') (#TT02411/22)      
> - CO: revisión del filtro DDT de compra en Valorización de área compras/ventas (#TT02258/22)      
> - PR: gestión de riesgos: aumentada la dimensión de RSUE_Descr1 a 80 caracteres (#TT02392/22)      
> - Bizlink: Exportación cash flow para DocFinance: Fluentis2021 (#TT02451/22)  

## Patch 605.1-0010: 31/08/2022

> - SD: Bug corregido: corregido bug en la actualización del proyecto de la orden de producción al variar los datos presentes en la orden de cliente (#TT02232/22)      
> - CO: en controlling, revisión del cálculo ‘Recuperación de costes de proyecto’ para Fluentis2021      
> - SCS: Evacuación de proyecto de cuenta de trabajo<!-- conto lavoro -->      
“SCS : Corregida la evacuación de proyectos de cuenta de trabajo<!-- commesse di conto lavoro -->, el proyecto se considera evacuado una vez que la orden de cuenta de trabajo<!-- conto lavoro --> esté en estado “Evacuado” o “Forz. Evacuado”.”
> - SCM: Evacuación de proyecto de compra       
“SCM : Corregida la evacuación de proyectos de compra<!-- commesse di acquisto -->, el proyecto se considera evacuado cuando todos los documentos generados a partir de él estén en estado “Evacuado” o “Forz. Evacuado” (R.D.A. y Órdenes de proveedor).”      
> - PM: resuelta anomalía en el rollback de facturas generadas por intervenciones, reasignaba el estado "controlado" a todas las intervenciones no facturadas, no solo a las del rollback (#TT02233/22)      
> - PM: resuelta anomalía en rollback de facturas generadas por intervenciones, reasignaba el estado "controlado" a todas las intervenciones no facturadas, no solo a las del rollback (#TT02233/22)      
> - PM: en las intervenciones, para los gastos incurridos se ha añadido la previsualización de los adjuntos (#TT02187/22)      
> - PM: en las intervenciones, al completar el campo "descripción de la actividad realizada" de un servicio, si se superaba el máximo de caracteres admitidos el campo se reseteaba. Ahora se reemplaza por el bloqueo de inserción sin resetear el campo (#TT02186/22)      
> - ARM: Añadida dirección de envío por defecto para los emails enviados con una acción de Workflow. Si no se llena, se usará el correo del operador que avance el WF      
> - PM: al variar los campos "tiempo efectivo" y "redondeo" en el invoice plan de una intervención, el campo cantidad no se recalculaba. Resuelto. (#TT02067/22)      
> - PM: al insertar nueva actividad por recurso, la fecha propuesta automáticamente considera el horario laboral del recurso, proponiendo tramos horarios faltantes para el día. En caso de superposición de fechas con otra actividad, se preguntará si continuar. Si la fecha de la actividad no es laborable, se señalará. (#TT02104/22)      
> - PM: para algunas líneas de extratiempo (relativas a horas de viaje), el campo precio con IVA en el invoice plan no se rellenaba. Resuelto (#TT01592/22)      
> - PM: en el cálculo del invoice plan, en ciertos casos en los que el viaje se incluía parcialmente en los servicios, había anomalías en la conversión del tiempo efectivo. Resuelto (#TT01561/22)      
> - PM: en el cálculo invoice plan, en el caso de inclusión de horas de viaje en servicios donde todas van plenamente a extratiempo, quedaba una línea a 0. Resuelto (#TT01968/22)      
> - PM: mejorada la generación de actividad desde intervenciones, previendo la inserción automática de la actividad al cambiar el estado de intervención a “aprobado”. Añadido nuevo campo “categoría actividad” en los gastos, utilizado al generar actividades a partir de horas de viaje; en las actividades generadas por intervención solo se reportan los gastos incurridos y no los pendientes de facturar (#TT01516/22)      
> - PM: valorización intervenciones, en el caso de líneas de servicios con y sin wip en la misma intervención, los agrupamientos de líneas en factura tienen en cuenta el wip. Por ende, en factura habrá dos agrupamientos separados para líneas con wip y sin, con su correspondiente ajuste correcto (#TT02047/22)      
> - PM: en caso de cambio de recurso en una intervención, los gastos incurridos y por facturar y su correspondiente invoice plan se recalculan coherentemente con el recurso y las configuraciones previstas (#TT02319/22)      
> - FI: CashFlow: resuelto bug en la etapa de impresión del análisis cashflow que siempre resultaba en forma detallada (#TT02183/22)      
> - PM: en el rollback del procedimiento de generación de actividades desde intervención, insertados nuevos filtros para la búsqueda de documentos para el rollback: búsqueda por fecha/número/cliente/recurso de la intervención, por fecha/número/cliente/recurso de la actividad. (#TT02313/22)      
> - FI: error en el uso del procedimiento 'Comisiones contables' en el área Finanzas:-> profesional hombre (#TT02356/22)      
> - FI: cierre automático de cuentas (#TT02370/22)      
> - SCS: Bug corregido. Corregido bug en DDT y en Retornos de Cuenta de Trabajo<!-- Conto Lavoro --> que impedía visualizar las líneas para importar en “Evacuación desde órdenes”, si había sido eliminado respectivamente el DDT o el Retorno mismo (#TT02366/22)   

## Patch 605.1-0009: 05/08/2022

> - Resuelto bug en la gestión de descripción de movimientos contables<!-- movimento contabile --> desde Excel      
> - SD: Reglas de validación para e-Invoice Rumania para el estado Controlada (#TT01987/22)      
> - SD: Corregido SalesInvoice-agregados nuevos errores de artículo en los documentos (#TT02179/22)      
> - MRP: bug corregido: corregido un bug en el procedimiento MRP en caso de que el flag "Diferenciar demanda de producción confirmada" esté activado.      
> - FI: intrastat: modificación de asignación de gastos repartidos para excluir líneas de anticipo/reversión de anticipo. Revisión de la asignación de la sección bis/ter sobre la base de la fecha de referencia en la cabecera del documento (#TT02074/22)      
> - Xamarin: WM: El widget Código de entrada no obtenía el foco cuando estaba seleccionada la pestaña DetallesConfirmación; corregida la excepción al anular la creación de una nueva unidad de carga, en la pestaña DetallesConfirmación; corrección del botón "Abrir unidad de carga" (ubicado en la barra multifunción), no estaba habilitado cuando se seleccionaba una línea en la pestaña Detalles.      
> - añadido soporte para comandos en autocompletado      
> - SD: Corregido procedimiento de descarga de factura (#TT02239/22)       
> - Xamarin: SH: Corregido un bug que impedía guardar y tomar fotos en Xamarin      
> - Xamarin: Framework: Corregidas las autorizaciones para la cámara y localización del popup    

## Patch 605.1-0008: 27/07/2022

> - FI: comunicación liquidación de IVA periódica, revisión de exportación desde botón en formulario Fluentis2021 (#TT02094/22)      
> - WM: Cálculo de Costes: bug corregido para ejecución de Cálculo de Costes de Artículos Seleccionados.      
> - Resuelto bug en la importación de archivos de texto en sistemas Linux      
> - PM: añadida posibilidad de generar actividades a partir de intervenciones desde procedimiento, incluso para intervenciones con estado "aprobado" (#TT02059/22)      
> - Cambio en el módulo PM, módulo FI, módulo SH, módulo CRM, Xamarin framework, para corrección de formularios específicos CRM (solo mobile app)      
> - ModalFormParameter: añadido soporte para control PasswordBoxEdit  

## Patch 605.1-0007: 19/07/2022

> - FI: revisión de la gestión de caracteres de fin de línea para archivos Intrastat (#TT02075/22)      
> - MRP: El procedimiento MRP ahora genera correctamente las órdenes planificadas incluso si no todos los flags relativos a la creación de órdenes planificadas de: compra, cuenta de trabajo<!-- conto lavoro --> y producción están activos en los parámetros.      
> - PM: desde el procedimiento de rollback de "generación de actividades a partir de intervenciones", se permite el rollback de las actividades tanto de los servicios como de las horas de viaje relacionadas (#TT01999/22)      
> - PM: resuelta anomalía que los gastos incurridos en la intervención no se trasponían correctamente a las actividades correspondientes generadas desde la intervención (#TT02001/22)      
> - WM: Cálculo de Costes: bug corregido para ejecución de Cálculo de Costes de Artículos Seleccionados  

## Patch 605.1-0006: 15/07/2022

> - SalesInvoice: corrección de ejecución por SalesDeliveryNote: problema en líneas de notas.      
> - CO: recuperación de datos desde producción (#TT01956/22)      
> - PM: la búsqueda de intervenciones aplicando un filtro por artículo generaba una anomalía, que ha sido solucionada (#TT01967/22)      
> - PM: resuelta anomalía en la generación de actividad por cambio de estado de intervención a "aprobado". En presencia de parámetros de proyectos: por operador, funcionaba solo para la intervención especificada en los parámetros. Ahora funciona para todas las tipologías de intervenciones. (#TT01566/22)      
> - CO: revisión de impresiones de balance interanual en controlling      
> - SH: resuelta anomalía en la visualización de factura de compra electrónica, verificada para casos en que el archivo tenía extensión .XML en mayúsculas (#TT01855/22)      
> - PM: en intervenciones planificadas, al modificar la fecha de inicio se solicita si desea actualizar también las fechas siguientes (pausa y fin) en la pantalla. Al contestar afirmativamente, no siempre se proponían los horarios correctos según el turno de trabajo del recurso. El caso ha sido resuelto (#TT01594/22)      
> - PM: procedimiento de generación de intervenciones desde actividad, en idioma rumano daba un mensaje incompleto al hacer clic en el botón de crear intervención. Resuelto (#TT01894/22)      
> - MRP: Ahora el procedimiento elimina correctamente las órdenes planificadas no vinculadas a proyectos<!-- commesse --> en cada ejecución para luego recrearlas. También se ha corregido el funcionamiento del parámetro "GG agrupamiento" presente en los parámetros mrp.      
> - MPS: Programación: En caso de seleccionarse una o más proyectos<!-- commesse -->, el procedimiento programa correctamente solo las presentes en la selección.      
> - PM: mejorada la gestión de borrado de actividades/intervenciones vinculadas entre sí y con los sprints.       
>> 1. En caso de eliminación de una intervención ya incluida en el sprint, también se elimina la referencia a la intervención en el sprint.            
>> 2. En caso de eliminar horas de viaje presentes en la intervención para la que se generó una actividad asociada, también se elimina la actividad correspondiente.       
>> 3. En caso de eliminar una intervención que ha generado una o más actividades vinculadas, también se eliminan las actividades relacionadas.      
>> 4. En caso de eliminar una intervención que ha sido generada DESDE una o más actividades, solo se elimina la intervención, mientras que las actividades permanecen y se restablece el flag “facturado” = falso.          
> - Añadidas API scripting para la gestión de controles y widgets relacionados de Blockly      
> - PM: al eliminar las horas de viaje de intervenciones ya aprobadas, se producía un error si había una actividad vinculada a esas horas de viaje. El caso ha sido resuelto, eliminando también las actividades asociadas a las horas de viaje de la intervención (#TT01893/22)      
> - MRP: En la pestaña de resultados del MRP la fecha de los documentos presente en el campo "descripción acción a realizar" está correctamente en el formato del idioma seleccionado.      
> - PM: mejorada la generación de actividades por confirmación de periodo de vacaciones/permiso, no generaba correctamente todas las actividades si en el mismo periodo ya había otras declaraciones de actividades. (#TT01835/22)      
> - PM: la modificación de la fecha de actividad en la declaración de actividad, implica el recálculo de los otros campos "hora inicio/hora fin/hora inicio pausa/hora fin pausa". Igualmente, si se modifica el campo "hora inicio", el campo "fecha actividad" se actualiza (#TT02018/22)      
> - PM: cambio de estado de intervención desde la ribbon bar de "insertado" a "por aprobar", no lograba realizar el cálculo invoice plan. Resuelto. (#TT01997/22)      
> - PM: si una intervención ha sido aprobada y por tanto ha generado una actividad asociada, se bloquean para modificación los siguientes campos: cliente (en cabecera de intervención), recurso/fecha/horas/descripción/proyecto/categoría actividad/ticket (en los servicios). Los demás campos (ej. precio, iva, W.I.P., porcentaje de avance, etc) pueden ser modificados. (#TT02012/22)      
> - Sh: Gestión de propiedad StatiscticalAgent (#TT02005/22)  

## Patch 605.1-0005: 08/07/2022

> - PM: Resuelta eliminación de intervenciones, en el caso de intervenciones sin líneas de servicios o materiales, no se realizaba (#TT01789/22)      
> - PM: Resuelta anomalía de gastos incurridos en intervenciones, en caso de habilitar el flag "A reembolsar" el importe del gasto se establecía igual al campo "costo total" (puesto a cero). Ahora el valor se mantiene (#TT01939/22)      
> - SH: en el plan de cuentas<!-- piano dei conti -->, revisión de la gestión del botón nuevo subcuenta<!-- sottoconto --> cuando el anterior no está guardado y falta la descripción (#TT01936/22)      
> - PM: Creación de SalesInvoice desde Project Sal: modificación de pagos (#TT01515/22)      
> - PM: Resuelto el ingreso de nuevas líneas de WBS, en caso de proyecto con gestión gantt daba error. (#TT01922/22)      
> - PM: al variar el cliente titular de un proyecto con confirmación de actualización de listas de precios, artículos, etc, en caso de precio nulo para wbs no permitía el guardado sin dar mensaje de alerta (#TT01927/22)      
> - PM: en el caso de uso de corchetes en la descripción de un wbs, generaba error al abrir el proyecto luego de guardar (#TT01790/22)      
> - PM: al abrir una intervención con Fluentis en idioma distinto al italiano, en el invoice plan mostraba los campos relativos al precio con moneda extranjera específica para el idioma configurado.    

## Patch 605.1-0004: 06/07/2022

> - PM: Resuelta anomalía en el guardado de intervenciones, en caso de wbs sin precio o cantidad vinculados a las líneas de servicios (#TT01839/22)      
> - SH: fix de extradata basados en DataSource      
> - MPS: este mensaje de error "Error: Artículo de Producción Bloqueado o sin la Lista de Materiales requerida o Lista cíclica", será sustituido por mensajes con la indicación específica del error, es decir, sobre el flag "bloqueado para producción" entre parámetros rmrp y el flag "autorización no necesaria" en the "Error: Artículo de Producción Bloqueado o sin la Lista de Materiales requerida o Lista cíclica" lista de materiales.      
> - Alineación de Xamarin con la última versión de Trk            
> - Añadido CheckRowManagement (Gestión de Selecciones) formulario para la plataforma Xamarin y cambio de CheckRowManagement ViewModel para Wpf      
> - MES: Lanzamiento de órdenes planificadas: En caso de fases externas, el procedimiento no generaba correctamente las órdenes de cuenta de trabajo<!-- ordini di conto lavoro --> y no proponía correctamente los materiales a entregar y emplear      
> - Añadido script de recompilación automática para las nuevas versiones instaladas      
> - FI: Resuelta excepción saliente en la Descarga de tipos de cambio (#TT01880/22)      
> - SD: Al crear el archivo Sdi de facturas de ventas, gestión de la sección del 'representante fiscal' del cedente/prestatore (ej. caso de autofacturas TD19). La sección se completa si en la ficha del cedente/prestatore se define una dirección alternativa de tipo 'Representante fiscal' (#TT01915/22).      
> - MRP: Corregido el algoritmo que, en algunos casos, generaba órdenes planificadas con cantidades dobles.      
> - MRP: Ahora las órdenes de cliente no confirmadas y sin fechas de entrega y de mercancía lista ya no se consideran por el mrp, si en los parámetros mrp para órdenes de cliente está el flag en la voz "No considerar artículos sin fecha de entrega      
> - FI: Archivo para Declaraciones de Intención en Fluentis2021 (#TT01902/22)  

## Patch 605.1-0003: 01/07/2022  

> - Actualización de la plantilla para client script ObjectForm      
> - FI: 394 fix declaración

        etto lanzamiento de órdenes planificadas de ítem con lista de materiales con artículos ficticios.   

## Patch 605.1-0002: 29/06/2022 

> - PR: Revisión por campo nulo en los gastos por operación (#TT01774/22)        
> - Actualización de líneas de configuración huérfanas de BizLink         
> - Modificación para prevenir un error que se generaba al crear el archivo xml de la factura de compra  

## Patch 605.1-0001: 28/06/2022  

> - MPS: Resuelto problema al lanzar una orden de producción con solo una fase externa en el ciclo, ahora crea orden de producción y orden de cuenta de trabajo<!-- ordine di conto lavoro -->.         
> - MES: Corregido el lanzamiento de órdenes planificadas de ítem con lista de materiales con artículos ficticios.