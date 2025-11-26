---
title: Notas de la versión Versión 802
sidebar_position: 1
ai_generated: true
---

### Patch 801.0027 - 23/10/2025

> - CO - recuperación de datos de producción del controlling, los valores de proyecto recuperados de los retornos del cuenta de trabajo<!-- conto lavoro --> ahora usan el precio neto de línea y no el bruto (#TT04478/25)
> - FI - completada la implementación del régimen de IVA Art 74 DPR 633/72 Trimestrales “por naturaleza”. Alineada la impresión de la liquidación periódica de IVA y el cálculo (sin intereses trimestrales) en la Comunicación trimestral de liquidaciones. (TT03154/25)
> - FI - corregido el cálculo de los intereses trimestrales de IVA en la comunicación periódica de las liquidaciones de IVA. Ya no se exponen en el cuarto trimestre según las instrucciones ministeriales. Ref. #TT00124/22
> - FI - corregido problema que no asociaba los datos de los centros de costo<!-- centri di costo --> referidos a las órdenes de trabajo<!-- commesse --> en los asientos de ajuste. (TT03979/25)
> - FI - Creación de compensación desde documentos de compra de entrada: Resuelto problema relativo a la creación de un nuevo contacto y al cálculo de las líneas dentro de la compensación (Ref. Ticket TT01805/25).
> - FI - Creación de compensación desde documentos de compra de entrada: resuelto error en la creación de la compensación debido a una descripción demasiado larga y revisados los cálculos en el resumen de datos de IVA (Ref. Ticket TT02622/25).
> - MES - Corregido bug que se producía cuando se liberaba una orden planificada de producción hija sin haber liberado también la orden padre; si se creaba un lote para esa orden de producción y luego se liberaba la orden padre planificada de producción, no se asociaban correctamente las referencias del campo SourceProductionOrder (#TT04449/25)
> - MES - Declaraciones de producción desde solución MES - Corregida anomalía que, al pulsar dos veces el botón [Avanza], creaba una doble declaración de producción. (#TT04436/25)
> - MS - Corregido bug en la costificación de órdenes de trabajo<!-- commesse --> que no calculaba correctamente el tiempo máquina si el centro de trabajo tenía tiempo fijo. (#TT04500/25)
> - MS - Corregido bug en la costificación de órdenes de trabajo<!-- commesse --> de producción que no valorizaba correctamente el coste de setup. (#TT04167/25)
> - MS - Corregido bug en la planificación general que en algunos casos generaba órdenes planificadas con cantidad doble. (#TT04502/25)
> - MS - Corregido bug en la cuadrícula de secuencia de fases top down que no permitía filtrar por la descripción del cliente después de arrastrarla a la cuadrícula desde el object navigator. (#TT04489/25)
> - MS - Corregido el cálculo del tiempo de inicio y fin en Secuencia de fases. (#TT03529/25)
> - MS - Recalculo de la capacidad diaria de los Centros de trabajo<!-- Centri di lavoro --> - Corregida anomalía en el cálculo de capacidades diarias si se gestionaban o no las excepciones. Cambio de diseño en el Calendario de capacidad productiva para la gestión de los Periodos de trabajo en sustitución de las Excepciones. (#TT03446/25)
> - PR - listas de anticipo, revisión de la gestión del tipo de importe 'imponible'. Las modificaciones en SalesInvoiceHelpFilterWidget y SalesInvoiceMaturityHelpAdvanceFilterWidget pueden impactar en el perfil (#TT04280/25)
> - PR - impresión de lista de facturas anticipadas/cobradas, revisión del método repositorio para la gestión del filtro de cobradas. Las modificaciones en la impresión de lista de facturas anticipadas/cobradas pueden impactar en el perfil (#TT04572/25)
> - Se propaga el código de nomenclatura de PurchaseDeliveryNoteItem y SubcontractorItem en el artículo de la factura de compra (TT04504/25)
> - Revisión de procedimientos de ingreso de almacén<!-- magazzino --> para la valoración de centros de costo<!-- centri di costo --> en múltiples dimensiones (#TT04277/25)
> - SCM - Detalle de líneas de pedidos: Resuelta anomalía que causaba la aplicación de los cambios también a líneas no seleccionadas, en caso de haber sido deseleccionadas tras la aplicación de un filtro en la cuadrícula. (#TT04404/25)
> - SCM - Al duplicar una orden de proveedor, la bandera de Precio manual ahora también se establece en la nueva orden, si estaba presente en la original. (#TT04446/25)
> - SCS - Resuelta anomalía en el cálculo del coste de los artículos durante el registro de un Retorno de Cuenta de trabajo<!-- Rientro di Conto Lavoro -->, en presencia de valoración de materiales a costo último y valoración por lote y orden de producción<!-- commessa di produzione -->. (#TT04474/25)
> - SD - Corregida la actualización del estado de cumplimiento de la Orden de cliente<!-- Ordine cliente --> tras la creación de una Lista de Recolección UDC y una Factura generada desde la lista de recolección. (#TT04412/25)
> - SD - Al duplicar DDT, Facturas o Pos, si no se encuentra una tasa de IVA válida entre la declaración de intención, los datos del cliente o del artículo, se propone el código de IVA presente en el documento de origen. (#TT03962/25)
> - SD - Órdenes de clientes<!-- Ordini Clienti -->: Dada la posibilidad de abrir Propiedades de Orden de Cliente<!-- Proprietà Ordine Cliente --> de diferentes órdenes (ref.ticket 4409/25)
> - SD - Resuelta anomalía en la duplicación de DDT y Facturas de Venta que aplicaba la tasa de IVA del cliente incluso a las líneas de tipo Nota. (#TT04147/25)
> - WM - Corregido bug que impedía insertar el lote económico en los parámetros MRP del artículo si la unidad de medida del mismo tenía cero decimales. (#TT04418/25)
> - WM - Corregida la falta de actualización del lote económico en los parámetros mrp si la unidad de medida no tiene decimales. (#TT04481/25)
> - WM - Duplicar artículos: crear la posibilidad de extender de forma personalizada para otras propiedades a duplicar (#TT04607/25)
> - WMS - Corregido error al recibir mercancía al guardar en el recálculo de los vencimientos. (#TT04454/25)

### Patch 801.0026 - 15/10/2025

> - MES - Verticalización Pharma - Órdenes de producción - Corregida anomalía que no realizaba un refresco del formulario al cambiar el estado del workflow a "Parcialmente asociado", no mostrando automáticamente la cuadrícula del detalle de los Lotes (#TT04063/25)
> - MES - Verticalización Pharma - Órdenes de producción - Corregida anomalía que no decrementaba la "Cantidad total" de consumo del material principal asignando una "Cantidad total" de consumo a los materiales alternativos (#TT04062/25)
> - SCM - Detalle de líneas de pedidos: Resuelta anomalía que causaba la aplicación de los cambios también a líneas no seleccionadas, en caso de haber sido deseleccionadas tras la aplicación de un filtro en la cuadrícula (#TT04404/25)
> - SCM Nir - corrección de las fuentes de lotes y de las cantidades residuales. TT04344/25
> - SH - Documentos Sdi: Habilitado el envío masivo de Documentos de Venta de salida también para archivos Sdi importados desde el exterior (#TT03619/25)
WMS - Corregido error al recibir mercancía al guardar en el recálculo de los vencimientos (#TT04454/25)

### Patch 801.0025 - 10/10/2025

> - CO - Valoración Lista de Materiales - Se corrigió el cálculo del Costo del artículo. El costo considera la distribución del Costo de preparación con base en la cantidad indicada en el parámetro Lote (parámetro requerido al ejecutar el informe) Costo materiales + Costo operaciones: máquina, mano de obra y externas + Costo de preparación / Lote (#TT04238/25)
> - FI - Corregido Cálculo LIPE erróneo en presencia de IVA no deducible y Pro-Rata (#TT03934/25)
> - FI - implementado traspaso automático del iva no deducible para pro-rata en la impresión definitiva y contabilización de la liquidación periódica. **¡Atención! Este cambio puede afectar los perfiles** (#TT04295/25)
> - FI - revisión de la contabilización de facturas para valoración de dimensión de proyectos (#TT04328/25)
> - FI - SafTGeneralLedgerEntryFilterResults - añadir opción "Agrupado" por defecto 0. **¡Atención! Este cambio puede afectar los perfiles** (#TT04178/25)
> - MES - Corregida anomalía en el registro de declaraciones de producción cuando se insertaba una cantidad desechada para un material (#TT04110/25)
> - MES - Corregidas anomalías en MES en la pestaña operadores, donde los operadores inactivos se volvían a proponer como activos en las declaraciones siguientes y a la orden de producción<!-- ordine di produzione --> que quedaba en algunos casos bloqueada (#TT04122/25)
> - MS - Generación de Órdenes de Producción desde previsional - Corregida anomalía (exception) generada durante la creación de la Orden de Producción desde prototipos de órdenes de trabajo<!-- prototipi commesse --> (#TT04284/25)
> - MS - Implementada en las órdenes de trabajo<!-- commesse --> independientes o previsionales (en estado no examinado o planificado) la posibilidad de modificar las fechas de inicio y fin previstos (#TT03335/25)
> - MS - En la pantalla de Gestión de Ciclos y Fases de trabajo hemos corregido el filtro predeterminado en el estado para cada pestaña del workflow y añadido también el filtro ExtraData, que permite visualizar los extra data relativos al ciclo, a las fases del ciclo y al artículo del ciclo. (#TT03893/25)
> - MS - Ahora, cuando se añade una fase manualmente en una orden planificada o de producción, se reporta correctamente también la bandera movilizable de la propia fase (#TT04269/25)
> - MS - Optimizado el refresco de las cuadrículas en el formulario de secuencia de fases en caso de que se modifique el campo notas. (#TT04306/25)
> - PR - Corregido error al agrupar notas de crédito con facturas en los recibos bancarios. (TT03636/25)
> - QY - Calibración de instrumentos - Corregido la anomalía reportada de mala gestión del número de decimales en los valores por detectar y detectados por la no presencia de la Unidad de medida del Instrumento verificado (#TT04371/25)
> - Resolver problemas de cierre de IVA versión RO (#TT04377/25)
> - SCM - La importación Web API de los DDT calcula correctamente los vencimientos (#TT04223/25)
> - SCS - Cuenta de trabajo<!-- Conto lavoro --> de fase: Corregida anomalía que actualizaba el estado de la Orden de Producción<!-- Commessa di Produzione --> tras la finalización de una Orden de Producción<!-- Ordine di Produzione --> con última fase externa, incluso en presencia de órdenes de nivel superior aún en estado ejecutivo (#TT03393/25)
> - SD - Impresión de Factura de Venta: Resuelta previsualización de impresión que aparecía vacía si no estaba ya activa la bandera impresa (#TT03536/25 y #TT03531/25)
> - SH - Corregida anomalía que a veces causaba el cambio de estado del Workflow al usar las flechas del teclado (#TT04285/25)
> - SH - webapi sobre el objeto FSLedgerAccount, revisión asignación de código de subcuenta<!-- sottoconto --> del archivo en cuentas con número máximo alcanzado (#TT04339/25)
> - WM - Diferencias de Inventario: añade artículos a 0 también para lotes sobre los que hay otros lotes del artículo en la lista (#TT03865/25)

### Patch 801.0024 - 03/10/2025

> - FI - Insertadas nuevas opciones para declaración fiscal Ro 394. **¡Atención! Este cambio puede afectar los perfiles** (#TT04183/25)
> - FI - Ahora el cambio de la categoría de bienes actualiza el subcuenta<!-- sottoconto --> patrimonial en cabecera de bien (#TT03931/25)
> - FI - Revisión de test de cuadre en contabilización de facturas con obsequios (#TT03708/25)
> - MS - Fase sujeta a control de calidad en un Ciclo de producción - Tipo de plan de control insertable aunque la fase haya sido sujeta a Control de Calidad sin confirmar los valores (cambio de línea). (#TT04190/25)
> - SCM - Verticalización Pharma - Ediciones - Ahora es posible modificar la información de: Comprable, Fecha de inicio, Fecha de fin y Observaciones, antes no editables.
> - SD - Gestión de anticipos: Corregida la actualización del residuo de anticipo en caso de cancelación parcial. Habilitado el cierre forzado del anticipo mediante la activación de la bandera Forzadamente cumplido también en facturas contabilizadas o con documento Sdi generado (#TT03759/25)
> - WM - Algoritmo de valoración de almacén<!-- magazzino --> optimizado para UDC (#TT04132/25)
> - WM - La tipología de retiro FIFO de los lotes ahora no considera las ubicaciones bloqueadas (#TT03598/24)

### Patch 801.0023 - 19/10/2025

> - CO - Corregida anomalía en el procedimiento de cálculo de coste en caso de listas de precios con UM diferente a la principal del artículo (#TT03766/25)
> - CO - revisión 'Recuperación de amortización de bienes' en cierres interanuales, optimización (se recomienda ejecutar el procedimiento con la opción 'registro único' activa) (#/25)
> - FI - causales automáticas, revisión de la gestión de subcuentas<!-- Sottoconti automatici --> automáticas (#TT03869/25)
> - FI - Corregido comportamiento del filtro Categoría administrativa en los formularios de generación de avisos y generación automática de avisos (#TT03618/25)
> - FI - Declaración 300 y 394 para RO - código iva 11 y 21 (#TT04041/25)
> - FI - revisión de importación desde DocFinance para exclusión de bloqueos en búsqueda de avisos (#TT03926/25)
> - FI - impresión Liquidaciones Agentes - vacía (#TT03928/25)
número orden de producción<!-- numero ordine di produzione --> - número de lote<!-- numero lotto -->" y en caso de una declaración de producción se visualiza: "número orden de producción<!-- numero ordine di produzione --> - número de lote<!-- numero lotto --> - número de declaración de producción<!-- numero dichiarazione di produzione -->" (#TT04069/25)
> - SH - Liberación del set de workflow base
> - SH - Corregido bug en exportaciones múltiples desde workflow (#TT03916/25)
> - SH - Fast start, valoración de la tabla de detalle de naturalezas de transacciones intrastat (#TT03930/25)
> - SH - Revisión webapi de importación del objeto FSLedgerAccount para gestión de agentes (#TT03911/25)
> - WM - Corregido bug en el procedimiento de cierre de almacén<!-- magazzino --> en caso de gestión con UDC. Corregido bug en el procedimiento “Añadir / mover artículos” presente en gestión UDC (#TT03596/25)
> - WM - Corregido filtro de almacén<!-- magazzino --> en la llamada API GetItemsAvailability (#TT03867/25)
> - WM - En análisis de disponibilidad<!-- disponibilità --> mejorada la legibilidad del campo número de documento, donde si se trata de una orden de producción<!-- ordini di produzione --> se visualiza:
> - WM - Renombradas las etiquetas relativas a existencias en el análisis de disponibilidad<!-- giacenza in analisi disponibilità -->, de: “Existencias, Existencias Disponibles, Existencias No Disponibles” a “Existencias Operativas, Existencias Operativas Disponibles, Existencias Operativas No Disponibles”.

### Patch 801.0022 - 19/09/2025

> - CO - Corregida anomalía en el procedimiento de cálculo de coste en caso de listas de precios con UM diferente a la principal del artículo. (#TT03766/25)
> - CO - revisión 'Recuperación de amortización de bienes' en cierres interanuales, optimización (se recomienda ejecutar el procedimiento con la opción 'registro único' activa) (#TT03929/25)
> - FI - causales automáticas, revisión de la gestión de subcuentas<!-- Sottoconti automatici --> automáticas (#TT03869/25)
> - FI - Corregido comportamiento del filtro Categoría administrativa en los formularios de generación de avisos y generación automática de avisos (#TT03618/25)
> - FI - Modificación declaración 300 y 394 para RO - código de IVA 11 y 21 (#TT04041/25)
> - FI - revisión de importación desde DocFinance para exclusión de bloqueos en búsqueda de avisos (#TT03926/25)
> - FI - impresión Liquidaciones Agentes - vacía (#TT03928/25)
número orden de producción<!-- numero ordine di produzione --> - número de lote<!-- numero lotto -->" y en caso de una declaración de producción se visualiza: "número orden de producción<!-- numero ordine di produzione --> - número de lote<!-- numero lotto --> - número de declaración de producción<!-- numero dichiarazione di produzione -->" (#TT04069/25)
> - Liberación del set de workflow base
> - Corregido bug en exportaciones múltiples desde workflow (#TT03916/25)
> - SH - fast start, valoración de la tabla de detalle de naturalezas de transacciones intrastat (#TT03930/25)
> - SH - revisión webapi de importación del objeto FSLedgerAccount para gestión de agentes (#TT03911/25)
> - WM - Corregido bug en el procedimiento de cierre de almacén<!-- magazzino --> en caso de gestión con UDC. Corregido bug en el procedimiento “Añadir / mover artículos” presente en gestión UDC (#TT03596/25)
> - WM - Corregido filtro de almacén<!-- magazzino --> en la llamada API GetItemsAvailability (#TT03867/25)
> - WM - En análisis de disponibilidad<!-- disponibilità --> mejorada la legibilidad del campo número de documento, donde si se trata de una orden de producción<!-- ordini di produzione --> se visualiza:
> - WM - Renombradas las etiquetas relativas a existencias en el análisis de disponibilidad<!-- giacenza in analisi disponibilità -->, de: “Existencias, Existencias Disponibles, Existencias No Disponibles” a “Existencias Operativas, Existencias Operativas Disponibles, Existencias Operativas No Disponibles”.

### Patch 801.0021 - 11/09/2025

> - Añadidas librerías comunes para Json en el editor de Script
> - BI - corregido algoritmo de llamada desde consulta basada en SWITCHBOARD (TT03876/25)
> - CO - modificado algoritmo de creación del cierre de privado a virtual. (#TT03923/25)
> - FI - importación desde DocFinance, si la partida a cerrar está ligada a una compensación de profesional con partidas gestionadas en neto ahora Fluentis añade automáticamente el registro que valoriza la deuda de la retención (#TT03211/25).
> - FI - Optimización de CalculateCustomerRiskOnDemand2 (TT03855/25)
> - FI - revisión de gestión de redondeos sobre movimientos de centros de costo<!-- movimenti dei centri di costo --> en contabilización de facturas en moneda extranjera, revisión gestión naturaleza de artículo, descuentos al bruto (#TT03742/25, #TT03840/25, #TT03845/25)
> - FI - Corregido error en el procedimiento de Creación de partida de anticipo. (#TT03779/25)
> - SCM - Corregida la propuesta de precios en las Órdenes de Cuenta de trabajo<!-- Ordini di Conto Lavoro --> generadas por Producción, en los casos en que la lista de precios prevea precios diferentes por fase de procesamiento. (#TT03418/25)
> - SCM - Corregido error en la generación de la Impresión de Vencimientos de Órdenes de proveedores. (#TT03881/25)
> - SCM - Facturas de Compra: habilitada la inserción de Extra data en facturas ya contabilizadas. (#TT03564/25)
> - SCM: El número de lote ha sido modificado después de ingresar manualmente el valor en la nota de entrega TT03872/25.
> - WM - Corregido bug en la importación webapi de artículos de almacén<!-- articoli di magazzino --> si también se importaba el código de barras de la variante. (#TT03765/25)
> - WM - Ahora, los valores en la columna "Estado Documento" de la cuadrícula de detalle del análisis de disponibilidad<!-- analisi disponibilità --> se visualizan correctamente. (#TT02367/25)
> - WM - Prototipos: En el cálculo del coste de los componentes ahora también se consideran los precios por cantidad definidos en la lista de precios del proveedor preferente. Para detalles, consulte la documentación. (#TT03843/24)
> - WMS - Recepción de mercancías: mejorada la propuesta de almacén<!-- magazzino --> y causa<!-- causale --> al crear el DDT (ver la documentación en línea para más detalles). (#TT03240/25)
Al crear el DDT, el almacén<!-- magazzino --> y la causa de almacén<!-- causale di magazzino --> se propondrán de la siguiente manera:
- Si el almacén<!-- magazzino --> informado en la orden de compra está entre los almacenes<!-- magazzini --> presentes en los [Parámetros de Entrada/Salida por usuario] para ese usuario, el procedimiento lo propone.
- Si el almacén<!-- magazzino --> informado en la orden de compra no está entre los almacenes<!-- magazzini --> presentes en los [Parámetros de Entrada/Salida por usuario] para ese usuario, el procedimiento deja vacíos tanto el campo del almacén<!-- magazzino --> como el de la causa de almacén<!-- causale di magazzino -->. En este caso, el usuario debe ingresarlos manualmente para continuar, y cuando intenta ingresarlos el procedimiento muestra un mensaje de confirmación antes de continuar: si hace clic en SÍ, puede ingresar uno de los almacenes<!-- magazzini --> presentes en los [Parámetros de Entrada/Salida por usuario] para ese usuario; de lo contrario, si hace clic en NO, los campos de almacén<!-- magazzino --> y tipo de almacén<!-- tipologia magazzino --> permanecen vacíos.
- Si en la orden de compra no se especifica el almacén<!-- magazzino --> y en los [Parámetros de Entrada/Salida por usuario] para ese usuario hay solo un almacén<!-- magazzino -->, el procedimiento propondrá automáticamente ese almacén<!-- magazzino --> y la causa relativa<!-- causale -->; mientras que, si en los [Parámetros de Entrada/Salida por usuario] para ese usuario hay varios almacenes<!-- magazzini -->, el procedimiento deja vacíos tanto el campo almacén<!-- magazzino --> como el de la causa, y cuando el usuario podrá elegir entre los presentes en los parámetros sin la necesidad de mostrar ningún mensaje.

### Patch 801.0020 - 04/09/2025

> - FI - contabilización de facturas de venta para autofacturas de servicios extranjeros, revisión de la gestión de “cuenta partner” en la causa automática de traspaso (#TT03556/25)
> - FI - F2021/2023 - Bug Extension - Fonderie Palmieri - cambio de clave primaria (TT03726/25)
> - FI - revisión de alineación de datos analíticos/partidas al cambiar el proyecto en la cabecera de registro contable. (#TT02577/24)
> - FI - revisión de creación de registros contables desde archivo Sdi (#TT03573/25)
> - FI - pestaña analítica en los registros contables, corregido caso en el que la asociación al proyecto guardaba la referencia solo en la cabecera y no en las líneas de proyecto (#TT03591/25)
> - PR - creación manual de movimientos de órdenes de clientes/proveedores en cash flow, optimización del procedimiento. Cuando las líneas a insertar son más de 100, Fluentis indica que es necesario guardar directamente el cash flow. Los cambios en el help subcontractor of cash flow pueden afectar el perfil (#TT01803/24)
> - SCM - Creación automática de Órdenes desde Órdenes de clientes: si en los parámetros del procedimiento está activo el flag "Explosión de nivel desde estructura de lista de materiales", la orden de compra generada contendrá el primer nivel de la lista de materiales del artículo presente en la orden de cliente. Las cantidades de los componentes se calcularán sobre la base de la cantidad confirmada al generar el prototipo, aplicando los coeficientes de uso indicados en la lista de materiales. (#TT02802/25)
> - SD - Asociación de Tipos de Lista de Precios de Venta: al presionar Nuevo se abrirá el formulario para ingresar una nueva asociación. Los cambios en ambos formularios Filter y Object pueden afectar el perfil (ref.ticket 3101/25)
> - WM - Corregido bug que en algunos formularios (ej. filtro de lista de materiales<!-- distinta base -->) generaba un error cuando el usuario usaba abrir formulario en uno de los elementos después de hacer clic en el + en el filtro. (#TT03495/25)