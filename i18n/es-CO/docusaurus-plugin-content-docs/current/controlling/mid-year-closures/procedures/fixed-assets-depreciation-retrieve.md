---
title: Reanudación del amortización de activos fijos
sidebar_position: 3
ai_generated: true
---

Dentro del módulo de cierres intermedios<!-- chiusure infrannuali -->, después de crear un cierre intermedio<!-- chiusura infrannuale --> es posible valorizar automáticamente las amortizaciones correspondientes al periodo económico configurado en el mismo.

## Amortización<!-- Ammortamento -->

Al abrir el formulario, en la parte inferior será obligatorio configurar:

- el **Cierre de referencia<!-- Chiusura di riferimento -->** (desde el cual se lee el rango de fechas de competencia económica<!-- competenza economica -->);

- la **Fecha de registro<!-- Data di registrazione -->** del movimiento<!-- movimento --> en los asientos extracontables<!-- registrazioni extracontabili -->;

- la **Causal<!-- Causale -->** a utilizar (también aquí es necesario que la causal<!-- causale --> prevea la gestión de los cdc/job-orders para valorizarlos en el asiento<!-- registrazione -->).

La casilla **Registro único<!-- Singola registrazione -->** permite crear un solo asiento extracontable<!-- registrazione extracontabile --> que contenga las diferentes subcuentas<!-- sottoconti --> de amortización/fondo.

En la sección de filtros de búsqueda se encuentra la casilla **Operaciones incrementales<!-- Operazioni incrementali -->**. La amortización<!-- ammortamento --> debe realizarse entonces en dos fases, extrayendo los activos fijos<!-- cespiti --> que pertenecen a categorías CON la casilla activa y SIN ella. Este valor se define dentro de la tabla de las [**categorías de activos fijos<!-- categorie cespiti -->**](/docs/configurations/tables/finance/fixed-asset-category)

Al ejecutar la búsqueda de datos, el programa valoriza la cuadrícula del formulario con los datos de las amortizaciones<!-- ammortamenti --> a calcular, proporcionados según el número de días del cierre correspondiente. En particular, para cada activo fijo<!-- cespite --> se verificará si ya está presente la amortización<!-- ammortamento --> del año (del año configurado como parámetro del cierre); si existe, este valor se proporcionaliza según el número de días; si no está presente, se simulará un cálculo (con base en los parámetros de la categoría correspondiente y los remanentes disponibles) y este valor se proporcionará según el número de días correspondientes.

Se recuerda seleccionar todas las filas presentes en la cuadrícula para valorizarlas en el cierre<!-- chiusura -->.

### Amortización no deducible<!-- Ammortamento indeducibile -->
En la parte inferior del formulario se encuentra la casilla **Usar cuenta no deducible<!-- Usa conto non deducibile -->**.
El valor (ON / OFF) de la casilla puede ser predefinido en los [**parámetros de activos fijos<!-- parametri cespiti -->**](/docs/configurations/parameters/finance/fixed-assets-parameters).

Si está activa, la parte no deducible fiscalmente de la amortización<!-- ammortamento --> se contabilizará automáticamente en la cuenta específica<!-- conto specifico --> que ha sido definida dentro de la tabla de [**categorías de activos fijos<!-- categorie cespite -->**](/docs/configurations/tables/finance/fixed-asset-category).

El porcentaje de no deducibilidad de la amortización<!-- indeducibilità dell'ammortamento --> se define mediante el campo ***Tipo deducibilidad<!-- Tipo deducibilità -->*** también dentro de las categorías de activos fijos<!-- categorie cespiti -->.


## Anteriores<!-- Precedenti -->

En esta sección es posible anular la operación realizada en la pestaña anterior, *Amortización<!-- Ammortamento -->*.