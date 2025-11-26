---
title: Diferencia entre saldo contable y partidas abiertas
sidebar_position: 5
ai_generated: true
---

La impresión que se puede generar desde este formulario corresponde al contenido de la visualización en pantalla obtenible con el formulario **[Diferencia partidas abiertas saldo contable.](/docs/finance-area/maturity-values/maturity-values/difference-between-maturity-value-and-ledger-balance)**<!-- Differenza partite aperte saldo contabile. -->

De manera similar a la visualización en pantalla, el objetivo de esta impresión es buscar las diferencias (descuadres<!-- squadrature -->) entre los saldos contables<!-- saldi contabili --> y los saldos del auxiliar<!-- saldi del partitario --> para cada cliente y proveedor, con el fin de corregirlas. Dichas diferencias pueden originarse por errores en la gestión del auxiliar<!-- partitario --> o de los asientos contables<!-- scritture contabili --> (falta de alineación entre movimiento contable<!-- movimento contabile --> y apertura de partidas<!-- apertura partite --> o cobro/pago y cierre de partida<!-- chiusura partita -->).

:::danger NOTA:
En el caso de los **perceptores<!-- percipienti -->**, si se adopta el criterio de exposición de las partidas abiertas<!-- partite aperte --> netas de la retención de impuestos<!-- ritenuta d'acconto --> (en los parámetros del [tipo de retención de impuestos<!-- tipo ritenuta d'acconto -->](/docs/configurations/tables/finance/withholding-tax-types)), las diferencias que se evidenciarán deben ser ignoradas (y no se deben considerar como errores), teniendo en cuenta además que serán corregidas al momento del pago de la compensación y del cierre de la respectiva partida<!-- chiusura della relativa partita -->.
:::

**Cuenta<!-- Conto -->**: filtro principal para extraer solo un subcuenta<!-- sottoconto --> de cliente o proveedor. Si no se filtra, se mostrarán los subcuentas<!-- sottoconti --> de todos los clientes y proveedores que presenten diferencias.

**Desde/Hasta Fecha de registro<!-- Da/A Data registrazione -->**: filtro sobre las fechas de registro contable<!-- registrazione contabile -->.

**Excluir partidas cerradas<!-- Escludi partite chiuse -->**: activando la casilla se ignorarán las partidas<!-- partite --> en estado Cerrada.

**Detalles**: activando esta casilla los resultados se desglosarán (en lugar de agruparse), resaltando la posible diferencia para cada movimiento contable<!-- movimento contabile --> individual respecto a la partida asociada (o al pago correspondiente en caso de movimiento de cobro o pago<!-- movimento contabile di incasso / pagamento -->);

**Visualizar solo los subcuentas<!-- sottoconti --> / registros<!-- registrazioni --> con diferencia distinta de cero**: la casilla (recomendada) activa permite resaltar solo los subcuentas<!-- sottoconti --> que presentan diferencias por corregir, ocultando aquellos que resultan correctos.

**Agrupar por moneda de la compañía<!-- Raggruppa per divisa della società -->**: la casilla activa determina la visualización de los movimientos en moneda de acuerdo con la moneda de la compañía. Por ejemplo, los movimientos en USD se mostrarán y convertirán en euros.