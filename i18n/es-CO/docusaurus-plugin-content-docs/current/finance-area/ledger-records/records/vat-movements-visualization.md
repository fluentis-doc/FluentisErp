---
title: visualizzazione movimenti iva
sidebar_position: 5
---
:::tip[A qué sirve (A cosa serve)]
El formulario permite **visualizar los movimientos** realizados en los **registros de IVA** junto con las anotaciones contables (por ejemplo, por la recepción o emisión de facturas).

Útil para **controles** o **extracción de datos** relacionados con el IVA.

La visualización en pantalla es particularmente flexible, permitiendo exportar rápidamente los datos extraídos o modificar rápidamente cada movimiento con un doble clic.
:::


## Encabezado (Testata):
En la parte superior se encuentran los campos de **filtro**:

**Registros de IVA (Registri IVA):** para extraer los movimientos relacionados con uno o más (seleccionando desde el menú desplegable manteniendo presionada la tecla Ctrl) seccionales de IVA.  

**Código IVA (Codice IVA):** para filtrar los movimientos realizados con un determinado tipo impositivo o código de IVA (exención, exclusión, etc.).

**Desde Fecha de competencia IVA / Hasta Fecha de competencia IVA (DA Data competenza IVA / A Data competenza IVA):** para la búsqueda de movimientos según las fechas de competencia del IVA, es decir, la fecha a la que tendrá efecto el movimiento a efectos de la liquidación periódica del IVA.  

:::tip[Nota (Nota)]
**filtro principal** dado que en el contexto del IVA se busca en el período en el que el movimiento tiene efecto en la liquidación periódica del IVA, más que por la fecha en que se realizó la anotación contable (como es sabido, la competencia del IVA puede variar, generalmente retroactivamente).  

Si se desea buscar también por una determinada fecha de la anotación contable, siempre es posible intervenir en el filtro de la columna en la cuadrícula de resultados.
:::

**Operaciones (Operazioni):** filtra en base a las tres categorías (activas, pasivas y autoliquidación) consideradas para la coincidencia entre los códigos de IVA y las líneas de impresión de la Declaración de IVA Anual. Haga referencia a la tabla [**Tipos/ Modalidades de IVA (Aliquote/ Modalità IVA)**](/docs/configurations/tables/finance/vat-rates).

**Línea de declaración fiscal (Riga Dichiarazione fiscale):** filtro que debe coincidir con el anterior. Después de seleccionar la tipología de operaciones, es posible detallar qué códigos de IVA filtrar en cuanto vinculados a una determinada línea de impresión de la Declaración de IVA Anual. Haga referencia a la tabla [**Tipos/ Modalidades de IVA (Aliquote/ Modalità IVA)**](/docs/configurations/tables/finance/vat-rates).

**Tipo de IVA (Tipo IVA):** filtro relacionado con el tipo de operación del IVA. El dato puede asociarse a los movimientos de IVA al momento de crear las anotaciones contables, en la sección *detalles del IVA del movimiento*, a través del campo homónimo.

**Cuenta / Subcuenta (Conto / Sottoconto):** permite filtrar en relación a la cuenta de contrapartida utilizada en la anotación que ha generado los movimientos de IVA, por ejemplo, en caso de compras o ventas, típicamente se puede filtrar por la cuenta de costo o ingreso.

**Cuenta del encabezado (Conto di testata):** permite filtrar por la subcuenta ingresada en el encabezado de las anotaciones que han generado los movimientos de IVA, por ejemplo, en caso de compras o ventas, típicamente se puede filtrar por proveedor o cliente.


## La cuadrícula de datos (La griglia dati):

Presenta algunas columnas fijas que contienen los valores de cada movimiento como el imponible, el impuesto, la parte no deducible y los totales.

Las otras columnas se desplazan y presentan los siguientes datos:

- **Fecha y Número de la anotación (Data e Numero della registrazione)** contable que generó el movimiento de IVA.
- **numero del documento** registrado, por ejemplo, el número de la factura de compra o de venta.
- **causale contabile** (código y descripción) utilizada para la anotación contable que generó el movimiento de IVA.
- **Seccional de IVA (Sezionale iva)** (código y descripción) en movimiento.
- **protocollo iva** del movimiento.
- **Cuenta utilizada en el encabezado (Conto utilizzato nella testata)** de la anotación (por ejemplo, cliente o proveedor).
- **Cuenta de contrapartida (Conto di contropartita)** utilizada (por ejemplo, de costo o ingreso) en la anotación contable que generó el movimiento de IVA.
- **codice iva** (tipo impositivo, exención, exclusión, etc.) utilizado para el movimiento.
- **percentuale di indetraibilità** presente en la línea de IVA del movimiento en la anotación contable, el valor podría ser forzado manualmente, pero generalmente es predeterminado para el código de IVA utilizado directamente en la tabla [**Tipos/ Modalidades de IVA (Aliquote/ Modalità IVA)**](/docs/configurations/tables/finance/vat-rates).
- **Desde / Hasta Fecha de competencia (Da / A Data competenza)**, se refiere a la competencia económica del costo / ingreso y, por lo tanto, no está estrictamente relacionado con el movimiento de IVA, aunque esté presente y definido en la sección de IVA de la anotación contable.
- **competenza plafond**, dato definido en la sección de IVA de la anotación contable y relacionado con la competencia del movimiento a efectos del cálculo del [**plafond para exportadores habituales (plafond per esportatori abituali)**](/docs/finance-area/declarations/declarations/plafond/general-overview).
- **competenza iva**, dato ya presente en los campos de filtro en el encabezado de la máscara y aquí visualizado para cada movimiento.
- **Descripción de detalle (Descrizione di dettaglio)**, homónimo presente en la sección de IVA de la anotación contable.
- **data competenza**, referida a la competencia contable presente en el encabezado de la anotación contable que generó el movimiento de IVA.
- **data documento**, referida a la fecha de factura presente en el encabezado de la anotación contable que generó el movimiento de IVA.
- **tipo codice**, relacionado con el campo Tipo de documento presente en el encabezado de la anotación contable que generó el movimiento de IVA.
- **tipo operazione fiscale** (código / descripción) campo presente en la sección de IVA de la anotación contable, útil para la coincidencia con el tipo de compra con el fin de la información estadística que se debe proporcionar en la declaración de IVA anual. Este campo es visible en las anotaciones previa activación en los parámetros de las causas contables.

## Totales en la parte inferior del formulario (Totali alla base della maschera):

- Imponible / Impuesto / Total **selezionato**: se refiere a la selección activada con el clic del mouse (una o más filas simultáneamente si se mantiene presionada la tecla Ctrl).

- Imponible / Impuesto / Total: independientemente de la selección del mouse, muestra los datos relacionados con todas las filas visibles en la cuadrícula de resultados (aplicando los filtros del encabezado y/o aquellos de las columnas del encabezado de la cuadrícula misma).