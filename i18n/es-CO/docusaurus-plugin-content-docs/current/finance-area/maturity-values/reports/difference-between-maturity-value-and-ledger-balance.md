---
title: Diferencia entre saldo contable y partidas abiertas (Differenza tra saldo contabile e partite aperte)
sidebar_position: 5
---

La impresión que se puede lanzar desde este formulario corresponde al contenido de la visualización de pantalla obtenible con el formulario **[Diferencia partidas abiertas saldo contable (Differenza partite aperte saldo contabile.)](/docs/finance-area/maturity-values/maturity-values/difference-between-maturity-value-and-ledger-balance)**.

Reflejada en la visualización de pantalla, el significado de esta impresión es buscar las diferencias (discrepancias) entre los saldos contables y los saldos de las cuentas por cobrar (partitario) para cada cliente y proveedor con el fin de corregirlas. Dichas diferencias pueden surgir de errores en la gestión del partitario o de las entradas contables (falta de alineación entre movimiento contable y apertura de partidas o cobro/pago y cierre de partida).

:::danger NOTA:
En el caso de los **perceptores**, si se adopta el criterio de exposición de las partidas abiertas netas de la retención de impuesto (en los parámetros del [tipo de retención de impuesto (tipo ritenuta d'acconto)](/docs/configurations/tables/finance/withholding-tax-types)), las diferencias que se evidencien deben ser ignoradas (y no considerarse como errores), teniendo además en cuenta que serán absorbidas al momento del pago de la remuneración y del cierre de la partida correspondiente.
:::


**conto**: filtro principal para extraer solo un subcuenta de cliente o proveedor. Si no se filtra, se mostrarán los subcuentas de todos los clientes y proveedores que presenten diferencias.

**da/a data registrazione**: filtro sobre las fechas de registro contable.

**escludi partite chiuse**: al activar este indicador, se ignorarán las partidas en estado Cerrada.

**dettagli**: al activar este indicador, los resultados se desglosarán (en lugar de agruparse), destacando la posible diferencia para cada movimiento contable en relación con la partida correlacionada (o el pago relacionado en caso de movimiento contable de cobro/pago);

**Mostrar solo subcuentas / registros con diferencia diferente de cero (Visualizzare solo i sottoconti / registrazioni con differenza diversa da zero)**: el indicador (recomendado) activo permite resaltar solo las subcuentas que presentan diferencias a corregir, ocultando aquellas que son correctas.

**raggruppa per divisa della società**: el indicador activo determina la visualización de los movimientos en la moneda correspondiente según la divisa de la empresa. Por ejemplo, los movimientos en USD se mostrarán y convertirán a Euros.