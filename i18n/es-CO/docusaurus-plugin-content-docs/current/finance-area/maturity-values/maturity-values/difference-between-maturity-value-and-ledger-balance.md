---
title: Diferencia partidas abiertas saldo contable
sidebar_position: 4
ai_generated: true
---

Los datos que se pueden extraer de este formulario corresponden al contenido de la impresión **Diferencia entre saldo contable y partidas<!-- partite -->.**<!-- Differenza tra saldo contabile e partite. -->

El significado de la búsqueda es verificar las diferencias<!-- squadrature --> entre los saldos contables y los saldos del auxiliar<!-- partitario --> para cada cliente y proveedor, con el fin de corregirlas. Estas diferencias pueden originarse por errores en la gestión del auxiliar<!-- partitario --> o de los asientos contables<!-- scritture contabili --> (falta de alineación entre movimiento contable<!-- movimento contabile --> y apertura de partidas<!-- partite --> o cobro / pago y cierre de partida<!-- chiusura partita -->).

:::danger NOTA IMPORTANTE:
En el caso de los **perceptores<!-- percipienti -->**, si se adopta el criterio de exposición de las partidas<!-- partite --> abiertas netas de la retención de impuestos (en los parámetros del [tipo de retención de impuestos<!-- tipo ritenuta d'acconto -->](/docs/configurations/tables/finance/withholding-tax-types)), las diferencias que se destaquen deben ser ignoradas (y no consideradas como errores), teniendo también presente que serán absorbidas en el momento del pago de la remuneración y del cierre de la partida<!-- chiusura partita --> correspondiente.
:::

### **ÁREA DE FILTRO<!-- AREA DI FILTRO -->**:

**Cuenta<!-- Conto -->**: filtro principal para extraer solo una subcuenta<!-- sottoconto --> de cliente o proveedor. Si no se filtra, se mostrarán las subcuentas<!-- sottoconti --> de todos los clientes y proveedores que presenten diferencias.

**Desde /  Hasta fecha de registro<!-- Da /  A Data registrazione -->**: filtro sobre las fechas de registro contable<!-- registrazione contabile -->.

**Excluir partidas<!-- partite --> cerradas**: activando la casilla se ignorarán las partidas<!-- partite --> en estado Cerrada.

:::tip **ÚTIL<!-- UTILE -->**
**Detalles**: activando esta casilla, los resultados se descompondrán (en lugar de agruparse) resaltando la posible diferencia para cada movimiento contable<!-- movimento contabile --> en relación con la partida<!-- partita --> correlacionada (o con el pago relativo en caso de movimiento contable de cobro / pago); La opción es útil en combinación con el filtro sobre la subcuenta<!-- sottoconto --> del cliente o proveedor específico para analizar cómo se ha generado la diferencia<!-- squadratura --> (en qué movimientos contables<!-- movimenti contabili -->) y proceder a corregirla.
:::

:::tip **MUY ÚTIL<!-- MOLTO UTILE -->**
**Mostrar solo las subcuentas<!-- sottoconti --> / registros<!-- registrazioni --> con diferencia distinta de cero**: al activar esta casilla (recomendada), solo se resaltarán las subcuentas<!-- sottoconti --> que presenten diferencias a corregir, ocultando las que estén correctas.
:::

**Agrupar por divisa de la empresa**: cuando la casilla está activada, los movimientos se muestran en divisa según la moneda de la empresa. Por ejemplo, movimientos en USD se mostrarán y convertirán a Euros.

### **CUADRÍCULA DE RESULTADOS<!-- GRIGLIA DEI RISULTATI -->**:

![](/img/it-it/finance-area/maturity-values/maturity-values/difference-between-maturity-value-and-ledger-balance/image1.png)

Por cada subcuenta<!-- sottoconto --> de cliente o proveedor se visualizan los totales de DEBE y HABER, tanto para la parte de los movimientos contables<!-- movimenti contabili --> como para la parte del auxiliar<!-- partitario --> y finalmente el saldo contable y auxiliar. Así también una columna con la diferencia.

De esta forma también es posible evaluar el posible origen de la diferencia<!-- squadratura -->.

A modo de ejemplo: Un total de debe contable positivo (y por lo tanto un saldo de debe contable positivo) y un total de debe de partidas<!-- partite --> igual a cero con respecto a la subcuenta<!-- sottoconto --> de un cliente puede originarse por una apertura de cuentas para la cual no se realizó también la apertura de las partidas<!-- partite -->. 

---

### **VIDEO TUTORIALES<!-- VIDEO TUTORIALS -->**

:::important Ver también<!-- Vedi Anche -->
[**VIDEO TUTORIALES SOBRE PARTIDAS ABIERTAS<!-- VIDEO TUTORIALS SULLE PARTITE APERTE -->**](/docs/video/finance/intro)
:::