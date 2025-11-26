:::tip[A cosa serve]
El formulario permite **visualizar los movimientos<!-- movimenti -->** realizados en los **registros de IVA<!-- registri IVA -->** simultáneamente con los asientos contables (por ejemplo, para la recepción o emisión de facturas).

Útil para **controles** o **extracción de datos** relacionados con el IVA<!-- IVA -->.

La visualización en pantalla resulta especialmente flexible, permitiendo exportar rápidamente los datos extraídos o ingresar rápidamente a la edición de cada movimiento<!-- movimento --> con doble clic.
:::


## Encabezado<!-- Testata -->:

En la parte superior se encuentran los campos de **filtro**:

**Registros IVA<!-- Registri IVA -->:** para extraer los movimientos<!-- movimenti --> relativos a uno o más (seleccionando desde el menú desplegable manteniendo presionada la tecla Ctrl) seccionales IVA<!-- sezionali IVA -->.

**Código IVA<!-- Codice IVA -->:** para filtrar los movimientos<!-- movimenti --> realizados con una determinada tasa o código IVA<!-- IVA --> (exención, exclusión, etc.).

**Desde Fecha competencia IVA / Hasta Fecha competencia IVA<!-- DA Data competenza IVA / A Data competenza IVA -->:** para la búsqueda de movimientos<!-- movimenti --> según las fechas de competencia de IVA<!-- competenza iva -->, es decir, la fecha en la que el movimiento<!-- movimento --> tendrá efecto a los fines de la liquidación periódica de IVA<!-- iva -->.

:::tip[Nota]
**filtro principal** dado que está en el contexto del IVA<!-- iva -->, se buscan los movimientos<!-- movimenti --> en el periodo en que tienen efecto sobre la liquidación periódica de IVA<!-- IVA -->, más que por la fecha en que se realizó el asiento contable (como se sabe, la competencia de IVA<!-- competenza iva --> puede variar, generalmente retroactivamente).

Si se desea buscar también por una fecha determinada del asiento contable, siempre es posible intervenir en el filtro de la columna en la cuadrícula de resultados.
:::

**Operaciones:** filtra según las tres categorías (activas, pasivas y reverse charge) consideradas para la asociación entre los códigos IVA<!-- codici iva --> y las filas del impreso para la Declaración Anual de IVA<!-- Dichiarazione IVA Annuale -->. Consulte la tabla [**Tasas/ Modalidades de IVA<!-- Aliquote/ Modalità IVA -->**](/docs/configurations/tables/finance/vat-rates).

**Fila Declaración fiscal<!-- Riga Dichiarazione fiscale -->:** filtro para combinar con el anterior. Después de seleccionar el tipo de operaciones es posible detallar qué códigos IVA<!-- codici iva --> filtrar, en función de la asociación con una determinada fila del impreso para la Declaración Anual de IVA<!-- Dichiarazione IVA Annuale -->. Consulte la tabla [**Tasas/ Modalidades de IVA<!-- Aliquote/ Modalità IVA -->**](/docs/configurations/tables/finance/vat-rates).

**Tipo IVA<!-- Tipo IVA -->:** filtro relativo al tipo de operación de IVA<!-- operazione iva -->. El dato puede asociarse a los movimientos de IVA<!-- movimenti iva --> al crear los asientos contables<!-- registrazioni contabili -->, en la sección *detalles de IVA<!-- estremi iva del movimento -->*, mediante el campo homónimo.

**Cuenta / Subcuenta<!-- Conto / Sottoconto -->:** permite filtrar en relación a la cuenta de contrapartida utilizada en el asiento<!-- registrazione --> que generó los movimientos de IVA<!-- movimenti iva -->, por ejemplo en el caso de compras o ventas, normalmente se puede filtrar por la cuenta de costo o ingreso.

**Cuenta de encabezado<!-- Conto di testata -->:** permite filtrar por la subcuenta<!-- sottoconto --> introducida en el encabezado de los asientos<!-- registrazioni --> que generaron los movimientos de IVA<!-- movimenti iva -->, por ejemplo en caso de compras o ventas, normalmente se puede filtrar por proveedor o cliente.


## La cuadrícula de datos<!-- griglia dati -->:

Presenta algunas columnas fijas que contienen los valores de cada movimiento<!-- movimento --> como base imponible, impuesto, cuota no deducible y los totales.

Las demás columnas son desplazables y presentan los siguientes datos:

- **Fecha y número del asiento** contable que generó el movimiento de IVA<!-- movimento IVA -->
- **Número del documento** registrado, por ejemplo el número de la factura de compra o venta
- **Causal contable<!-- Causale contabile -->** (código y descripción) utilizada para el asiento contable<!-- registrazione contabile --> que generó el movimiento de IVA<!-- movimento IVA -->
- **Seccional IVA<!-- Sezionale iva -->** (código y descripción) afectado
- **Protocolo IVA<!-- Protocollo iva -->** del movimiento<!-- movimento -->
- **Cuenta utilizada en el encabezado** del asiento<!-- registrazione --> (por ejemplo cliente o proveedor)
- **Cuenta de contrapartida** utilizada (por ejemplo de costo o ingreso) en el asiento contable<!-- registrazione contabile --> que generó el movimiento de IVA<!-- movimento IVA -->
- **Código IVA<!-- Codice IVA -->** (tasa, exención, exclusión, etc.) usado para el movimiento<!-- movimento -->
- **Porcentaje de no deducibilidad<!-- Percentuale di indetraibilità -->** presente en la línea de IVA<!-- riga iva --> del movimiento<!-- movimento --> en el asiento contable<!-- registrazione contabile -->; el valor podría ser forzado manualmente, pero generalmente está predefinido para el código IVA<!-- codice iva --> utilizado directamente en la tabla [**Tasas/ Modalidades de IVA<!-- Aliquote/ Modalità IVA -->**](/docs/configurations/tables/finance/vat-rates)
- **Desde / Hasta Fecha de competencia<!-- Da / A Data competenza -->**, se refiere a la competencia económica del costo / ingreso y por lo tanto no está estrictamente relacionada con el movimiento de IVA<!-- movimento iva -->, aunque figura y está definida en la sección de IVA<!-- iva --> del asiento contable<!-- registrazione contabile -->
- **Competencia de plafond<!-- Competenza plafond -->**, dato definido en la sección de IVA<!-- iva --> del asiento contable<!-- registrazione contabile --> y relacionado con la competencia del movimiento<!-- movimento --> a efectos del cálculo del [**plafond para exportadores habituales<!-- plafond per esportatori abituali -->**](/docs/finance-area/declarations/declarations/plafond/general-overview)
- **Competencia IVA<!-- Competenza IVA -->**, dato ya presente en los campos de filtro del encabezado del formulario y aquí mostrado para cada movimiento<!-- movimento -->
- **Descripción detallada<!-- Descrizione di dettaglio -->**, homónima presente en la sección de IVA<!-- iva --> del asiento contable<!-- registrazione contabile -->
- **Fecha de competencia<!-- Data competenza -->**, referida a la competencia contable presente en el encabezado del asiento contable<!-- registrazione contabile --> que generó el movimiento de IVA<!-- movimento IVA -->
- **Fecha de documento<!-- Data documento -->**, referida a la fecha de la factura presente en el encabezado del asiento contable<!-- registrazione contabile --> que generó el movimiento de IVA<!-- movimento IVA -->
- **Tipo de código<!-- Tipo codice -->**, referida al campo Tipo de documento presente en el encabezado del asiento contable<!-- registrazione contabile --> que generó el movimiento de IVA<!-- movimento IVA -->
- **Tipo de operación fiscal<!-- Tipo operazione fiscale -->** (código / descripción) campo presente en la sección de IVA<!-- iva --> del asiento contable<!-- registrazione contabile -->, útil para la asociación con el tipo de compra destinada a la información estadística a declarar en la declaración anual de IVA<!-- dichiarazione iva annuale -->. El campo es visible en los asientos<!-- registrazione --> si está habilitado previamente en los parámetros de las causales contables<!-- causali contabili -->.

## Totales en la parte inferior del formulario<!-- Totali alla base della maschera -->:

- Base imponible / Impuesto / Total **Seleccionado**: se refiere a la selección activada con el clic del ratón (una o más filas simultáneamente si se mantiene presionada Ctrl)

- Base imponible / Impuesto / Total: independientemente de la selección del ratón, muestra los datos relativos a todas las filas visibles en la cuadrícula de resultados (aplicando los filtros del encabezado y /o los de las columnas del encabezado de la propia cuadrícula)