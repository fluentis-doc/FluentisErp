---
title: Diferencia de partidas abiertas saldo contable (Differenza partite aperte saldo contabile)
sidebar_position: 4
---

Los datos que se pueden extraer de este formulario corresponden al contenido de la impresión **Diferencia entre saldo contable y partidas.**

El significado de la búsqueda es verificar las diferencias (desajustes) entre los saldos contables y los saldos de las partidas para cada cliente y proveedor, con el fin de corregirlas. Dichas diferencias pueden originarse de errores en la gestión de las partidas o de los asientos contables (falta de alineación entre movimiento contable y apertura de partidas o cobro/pago y cierre de partida).

:::danger NOTA IMPORTANTE:
En el caso de los **perceptores**, si se adopta el criterio de exposición de las partidas abiertas netas de la retención (en los parámetros del [tipo de retención]( /docs/configurations/tables/finance/withholding-tax-types)), las diferencias que se evidencien deben ser ignoradas (y no consideradas como errores) teniendo además en cuenta que serán absorbidas en el momento del pago de la compensación y del cierre de la respectiva partida.
:::


### **ÁREA DE FILTRO**:

**conto**: filtro principal para extraer solo una subcuenta de cliente o proveedor. Si no se filtra, se mostrarán las subcuentas de todos los clientes y proveedores que presentan diferencias.

**Desde / A Fecha de registro (Da / A Data registrazione)**: filtro sobre las fechas de registro contable.

**escludi partite chiuse**: al activar el indicador, se ignorarán las partidas en estado Cerrada.

:::tip **ÚTIL**
**dettagli**: al activar este indicador, los resultados se descompondrán (en lugar de agruparse), destacando la posible diferencia para cada movimiento contable respecto a la partida correlacionada (o el pago relativo en caso de movimiento contable de cobro/pago); La opción es útil en combinación con el filtro sobre la subcuenta del cliente o proveedor específico para analizar cómo se formó el desajuste (sobre qué movimientos contables) y proceder a corregirlo.
:::

:::tip **MUY ÚTIL**
**Mostrar solo las subcuentas / registros con diferencia distinta de cero**: el indicador (recomendado) activo permite destacar solo las subcuentas que presentan diferencias a corregir, ocultando en cambio aquellas que resultan correctas.
:::

**raggruppa per divisa della società**: el indicador activo determina la exposición de los movimientos en moneda según la moneda de la empresa. Un ejemplo es que los movimientos en USD se mostrarán y convertirán a Euro.

### **REJILLA DE RESULTADOS**:

![](/img/it-it/finance-area/maturity-values/maturity-values/difference-between-maturity-value-and-ledger-balance/image1.png)

Para cada subcuenta relacionada con el cliente o proveedor se visualizan los totales, respectivamente, DEBE (DARE) y HABER (AVERE) tanto para la parte de los movimientos contables como para la parte de las partidas y, por último, el saldo contable y de partida. Entonces, aparece una columna con la diferencia.

De esta manera también es posible evaluar el posible origen del desajuste.

A modo de ejemplo: un total contable de debe positivo (y, por lo tanto, un saldo de debe contable positivo) y un total de debe partidas a cero en relación con la subcuenta de un cliente puede originarse de una apertura de cuentas para la cual no se ha procedido también a la apertura de las partidas.

---

### **TUTORIALS EN VIDEO**

:::important Ver También
[**TUTORIALS EN VIDEO SOBRE LAS PARTIDAS ABIERTAS**](/docs/video/finance/intro)
:::