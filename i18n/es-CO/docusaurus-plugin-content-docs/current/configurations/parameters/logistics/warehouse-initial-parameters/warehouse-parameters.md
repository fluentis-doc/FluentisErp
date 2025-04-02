---
title: parametri iniziali magazzino
sidebar_position: 2
---

:::important ¿Para qué sirve? (A cosa serve)  
La introducción a los parámetros iniciales de almacén de Fluentis sirve como un punto de referencia fundamental para la gestión de las operaciones logísticas dentro del sistema. Estos parámetros, accesibles a través de un formulario dedicado, permiten configurar de manera precisa las modalidades de gestión del almacén y definir normas operativas que influyen en toda la cadena de aprovisionamiento y distribución.

En el sistema Fluentis, los parámetros iniciales incluyen indicadores y configuraciones que regulan aspectos cruciales como la modificación de registros, la gestión de listas de materiales, y el cálculo de costos promedios y últimos. Por ejemplo, el indicador "Modificar registros de almacén vinculados con otros documentos" permite modificar movimientos creando una interacción directa entre diferentes documentos de movimiento, mientras que el indicador "Permitir existencias negativas" ofrece una flexibilidad adicional en las operaciones de descarga.

Es importante señalar que estos parámetros deben ser regenerados cada año para garantizar una gestión adecuada y la actualización de las operaciones de almacén. Además, es posible especificar para cada almacén si debe ser gestionado por ubicación, proyecto o cliente/proveedor, permitiendo una personalización de las operaciones según las necesidades específicas de la empresa.

Asimismo, es posible establecer períodos específicos en los que pueden realizarse registros, gestionando así de manera dinámica las operaciones de almacén según las necesidades empresariales. La configuración de estos parámetros no solo optimiza los procesos, sino que también juega un papel central en garantizar la eficacia operativa y la trazabilidad de las mercancías, elementos clave para el éxito en la gestión de la logística moderna.
:::

En el formulario de *Búsqueda de parametri iniziali magazzino* seleccione la fila deseada y ejecute un doble clic en la fila o haga clic en el botón *Nuevo*.

## 1. Datos

**anno**: representa el año para el cual se desea establecer los parámetros.

**Fecha del último cierre del ejercicio (Data ultima chiusura esercizio)**: representa la fecha en la que se realizó el último cierre de almacén con recuperación de saldos (ver [Valoración de almacén (Valorizzazione magazzino)](/docs/logistics/physical-inventory/warehouse-valorization)). En la mayoría de los casos, corresponde al 31-12 del año anterior. Al día siguiente, usualmente el 1 de enero, se ingresan los registros de carga de almacén para el inventario inicial, creados automáticamente por el procedimiento de *Valoración de Almacén*, a través del uso de la causal de carga *rimanenze*; esta causal debe tener el indicador *rimanenze* activado.

Para cada almacén presente en la empresa debe haber una y solo una causal de carga de las existencias iniciales. Las existencias cargadas con esa causal en el día de “apertura” del almacén representan las *existencias iniciales* del almacén mismo. Todos los movimientos posteriores a este registro de carga serán identificados como entradas o salidas de almacén dependiendo de si se trata de cargas o descargas.

## 2. Generales (Generali)

**Modificar registros de almacén conectados con otros documentos (Modifica registrazioni di magazzino collegati con altri documenti)**: permite modificar los registros de almacén vinculados a DDT de compra, facturas de compra, DDT de venta, facturas de venta, etc. La ausencia de este indicador significa que los documentos de almacén creados a partir de documentos de compra o venta no pueden ser modificados. En este caso, aparecerá un mensaje informando que la modificación no es posible.

En relación con la modificación de registros de almacén desde documentos, se tiene en cuenta que es posible elegir si modificar la cantidad, modificar el precio, modificar ambas o ninguna. Esto significa que cuando se modifica un documento ya registrado en el almacén, por ejemplo, un DDT de compra, la aplicación verifica si el indicador Modificar cantidad y el indicador Modificar precios están activos o no; en caso afirmativo, la modificación realizada en el documento se transmite también al registro de almacén con el que el documento está vinculado; de lo contrario, la modificación del documento no afecta al correspondiente registro de almacén. Es posible activar solo uno de los dos indicadores. Además, se puede habilitar la posibilidad de insertar o cancelar movimientos directamente desde el documento ingresando o eliminando las líneas individuales.

**permetti contropartita distinta base incompleta**: si está activo, permite modificar la lista de materiales del movimiento de contraparte; si está desactivado, el movimiento de contraparte se creará automáticamente para toda la lista de materiales sin posibilidad de modificación.

El movimiento de contraparte nace de una segunda causal de movimiento vinculada a la principal, que opera sobre los componentes de la lista de materiales; por ejemplo, puede utilizarse para gestionar los movimientos de almacén de los depósitos de producción (la descarga de los componentes de la lista de materiales) o los desensambles de material; así, en las realidades más simples, permite gestionar las cargas de productos terminados y las descargas de componentes sin utilizar el módulo de producción.

**valorizza per magazzino**: permite decidir si el cierre de almacén debe tener en cuenta los costos promedios (o últimos, o estándar, dependiendo del tipo de costo que se desee utilizar para el cierre de almacén) relacionados con los movimientos realizados durante el año en el almacén individual. Esto significa que si un artículo ha tenido movimientos en 3 almacenes, por ejemplo, en caso de indicador activo, tendrá 3 líneas diferentes en el Historial de Almacén para el año en que se realiza el cierre, probablemente con 3 costos promedios y 3 costos últimos diferentes.

**Permitir la modificación de las cuentas de los artículos ya utilizados (Permetti la modifica dei conti degli articoli già utilizzati)**: permite modificar los datos de “Facturación de compras” y “Facturación de ventas” de artículos que ya han tenido movimientos de almacén. Si el indicador está desactivado, esta modificación está, por supuesto, prohibida.

**gestione stato ciclo di lavoro tramite workflow**: si está activo, el estado del ciclo de trabajo solo puede modificarse a través de Workflow.

**controllo relazione articolo/fornitore tramite workflow**: si está activo, el indicador **blocco riga** presente en la pestaña **fornitori preferenziali** del registro del artículo solo puede modificarse a través de Workflow.

**Fecha de inicio del período y Fecha de fin del período (Data inizio periodo e Data fine periodo)**: permiten al usuario definir el período dentro del cual pueden ingresarse y/o modificarse y/o cancelarse registros de almacén. Usualmente se establece como fecha de inicio del período una fecha apenas anterior a la fecha de último cierre del almacén, y como fecha de fin del período el final del año calendario en curso.

### 2.1 Gestión de lotes y números de serie (Gestione lotti e numeri seriali)

**gestione lotti e numeri seriali**: permite decidir si se deben permitir movimientos de almacén por lotes y/o por números de serie. Si este indicador está desactivado, todos los demás indicadores presentes en la base de datos que gestionan opciones relacionadas con lotes y números de serie resultan ineficaces.

**lotti e numeri seriali obbligatori**: si se activa, obliga al usuario a ingresar en todos los documentos de compra y venta el lote del artículo ingresado en el documento mismo, siempre que el artículo se gestione por lotes o por números de serie.

**Habilitar unicidad de los lotes (Abilitata unicità dei lotti)**: si está activo, habilita la unicidad del lote para la empresa y división en la fase de creación del lote mismo; por lo tanto, en el caso de que varios artículos utilicen el mismo *tipo de código de lote*, el progresivo con el que se creará el lote continuará aumentando; si no está activo, en cambio, la unicidad es por artículo y variante; por lo que, cuando se crean nuevos lotes para artículos diferentes, pero que utilizan el mismo *tipo de código de lote*, el primer lote propuesto será el mismo para todos esos artículos.

**gestione stato lotto tramite workflow**: si está activo, el **Estado del lote**, los indicadores **lotto vendibile** y **chiuso** presentes en el registro de lotes son modificables únicamente a través de Workflow. Lo mismo aplica para los indicadores **annullato**, **chiuso forzatamente** y **prenotato** presentes en el registro de números de serie.

**Usar código de barras en los movimientos (Usa barcode movimenti)**: si está activo, en las líneas de los movimientos de almacén se visualizará la columna **barcode**.

## 3. Parámetros de cierre (Parametri chiusura)

En esta pestaña es posible decidir para qué **magazzini** deben realizarse los cierres por **Variante** (Variante), por **ubicazione**, por **lotti e serial number**, por **Órdenes de venta (Commesse di vendita)** y por **cliente/fornitore**. En la práctica, al activar uno de estos indicadores, se decide que el registro de carga para inventario inicial realizado por el procedimiento automático de *Valoración de almacén* debe crearse teniendo en cuenta la configuración realizada.

*Para cada almacén es posible habilitar las siguientes gestiones:*  

**varianti**: si está activo, el cierre y la recuperación de las existencias tendrán en cuenta las variantes;  

**ubicazioni**: si está activo, el cierre y la recuperación de las existencias tendrán en cuenta las ubicaciones;  

**lotti e serial number**: si está activo, el cierre y la recuperación de las existencias tendrán en cuenta los lotes y S/N;  

**commesse**: si está activo, el cierre y la recuperación de las existencias tendrán en cuenta las órdenes de venta (proyectos);  

**cliente/fornitore**: si está activo, el cierre y la recuperación de las existencias tendrán en cuenta al cliente/proveedor.  

*Ejemplo*  
En el almacén *conto lavoro*, usualmente se activa el indicador en la columna *Cliente/Proveedor*, ya que es útil que el procedimiento cree un registro de carga de almacén para inventario inicial en el almacén de trabajo por cuenta de terceros para cada contratista; en los almacenes donde se almacenan y mueven mercancías gestionadas por lotes, se recomienda activar el indicador *Lotes y Números de serie*, al igual que en los almacenes donde se almacenan y mueven mercancías gestionadas por variantes.

## 4. Parámetros de existencias (Parametri giacenza)

En esta pestaña, es posible decidir para cada almacén cómo debe gestionarse la *Existencia (Giacenza)*.

**permetti giacenza negativa**: permite que la existencia de un artículo esté por debajo de cero. En caso de que el indicador no esté activado, el sistema siempre impedirá guardar registros de almacén o realizar operaciones de descarga que lleven la existencia de cualquier artículo a un nivel negativo. Cabe señalar que si el artículo se gestiona por lotes o números de serie, activar este indicador no significa que se pueda llevar a un nivel negativo, ya que el artículo gestionado por lotes o números de serie nunca podrá descargarse si la existencia del lote o del número de serie que se desea descargar no existe.

*Para cada almacén es posible habilitar las siguientes gestiones:*  

**giacenza negativa**: permite en ese almacén la existencia negativa (solo si también está activo el indicador *Permitir existencia negativa* en los *Parámetros Generales*);

**Existencia por Ubicación (Giacenza Ubicazione)**: significa controlar la existencia también para la ubicación específica en el movimiento (si la existencia para esa ubicación no es suficiente, el movimiento no se crea);

**Existencia por proyecto (Giacenza progetto)**: significa controlar la existencia también para el proyecto específico en el movimiento (si la existencia para ese proyecto no es suficiente, el movimiento no se crea);  

**Existencia por cliente/proveedor (Giacenza cliente/fornitore)**: significa controlar la existencia también para el cliente/proveedor especificado en el registro (si la existencia para ese cliente/proveedor no es suficiente, el movimiento no se crea. Puede utilizarse para los almacenes de terceros).

Para todo lo no detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).