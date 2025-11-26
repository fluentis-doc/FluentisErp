---
title: Contabilización de depreciaciones
sidebar_position: 1
ai_generated: true
---

ENLACE:

** [Depreciación](/docs/finance-area/fixed-assets/accounting/depreciation) **<!-- Ammortamento -->

** [Restaurar](/docs/finance-area/fixed-assets/accounting/restore) **<!-- Ripristina -->

 

 

El procedimiento de contabilización actualizará las fichas de activos fijos<!-- cespiti --> (añadiendo la marca de Contabilizado y, por tanto, actualizando el valor del fondo de depreciación<!-- fondo ammortamento --> y del valor neto contable) y registrará en la contabilidad los correspondientes movimientos de depreciación<!-- ammortamento -->.

Para que el procedimiento se complete correctamente, es necesario que:

- Se hayan creado los ** [Parámetros de contabilidad general](/docs/configurations/parameters/finance/accounting-parameters) **<!-- Parametri contabilità generale --> para el año de referencia;

- Se hayan creado los ** [Parámetros de activos fijos](/docs/configurations/parameters/finance/fixed-assets-parameters) **<!-- Parametri cespiti -->;

- Dentro de la tabla ** [Categorías de activos fijos](/docs/configurations/tables/finance/fixed-asset-category) **<!-- Categorie Cespiti --> se hayan definido (para cada categoría) las cuentas correspondientes a la cuota de depreciación<!-- quota di ammortamento --> y del fondo de depreciación<!-- fondo ammortamento -->;

- Se defina la causale contable<!-- causale contabile --> que se desea utilizar para la contabilización de depreciaciones<!-- contabilizzazione ammortamenti -->.

 
### Depreciación no deducible<!-- Ammortamento indeducibile -->
En la parte inferior de la pantalla, está disponible la marca **Usar cuenta no deducible**.
El valor (ON / OFF) de la marca se puede predefinir en los [**parámetros de activos fijos**](/docs/configurations/parameters/finance/fixed-assets-parameters)<!-- parametri cespiti -->.

Si está activo, la parte fiscalmente no deducible de la depreciación<!-- ammortamento --> se contabilizará automáticamente en la cuenta específica que ha sido definida dentro de la tabla de [**categorías de activo fijo**](/docs/configurations/tables/finance/fixed-asset-category)<!-- categorie cespite -->.

El porcentaje de no deducibilidad de la depreciación<!-- indeducibilità dell'ammortamento --> se define a través del campo ***Tipo de deducibilidad<!-- Tipo deducibilità -->*** siempre dentro de las categorías de activos fijos<!-- categorie cespiti -->.