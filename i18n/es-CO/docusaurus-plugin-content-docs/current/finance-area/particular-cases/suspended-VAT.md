---
sidebar_position: 3
title: Régimen del IVA de caja
ai_generated: true
---

:::important **Fluentis Academy** 
Se define como 'IVA en suspensión' el IVA que se vuelve exigible no en la entrega del bien, sino en el pago de la factura.
El contribuyente que adopta este régimen liquida el IVA de todas las operaciones, tanto activas como pasivas, con el criterio de caja<!-- criterio di cassa -->.
El momento imponible del IVA coincide con la fecha del pago o del cobro de los importes. 
De este modo, se hace una excepción al principio que considera exigible el IVA de un documento registrado en la contabilidad<!-- contabilità -->.

En la práctica, el régimen del IVA de caja<!-- regime dell’Iva per cassa --> permite el pago del IVA a débito sobre las ventas o prestaciones de servicios solo en el momento del pago de la factura por parte del cliente. 
Y, al mismo tiempo, permite la deducción del IVA de las compras solamente cuando el sujeto pague la factura al proveedor. 

En cualquier caso, la liquidación del IVA deberá realizarse dentro de un año desde la venta o de la prestación del servicio, salvo en los casos de quiebra o de implicación del concesionario o del cliente en un procedimiento concursal.
:::

### CONFIGURACIÓN Y AJUSTES DE LAS CAUSALES CONTABLES INVOLUCRADAS<!-- IMPOSTAZIONI E CONFIGURAZIONE CAUSALI CONTABILI COINVOLTE -->

Los ajustes principales para la gestión de este régimen se realizan simplemente a través de la correcta configuración de las causales contables<!-- causali contabili -->.

En particular, es fundamental seleccionar correctamente, dentro de las causales involucradas, en el campo **Tipo movimiento<!-- Tipo movimento -->** (relativo al IVA), la tipología exacta.

En detalle:

- La causal para el registro de la factura de proveedor tendrá el tipo *IVA compras en suspensión*<!-- IVA acquisti in sospensione -->
- La causal para el registro de la factura de cliente tendrá el tipo *Venta con IVA en suspensión*<!-- Vendita con IVA in sospensione -->
- Las causales para el cobro o pago no tendrán un tipo particular, sino como de costumbre el tipo *No IVA*<!-- Non IVA --> (estarán vinculadas a las causales ejecutadas automáticamente para el girocontable del IVA que se vuelve exigible mediante el campo *Causal automática*<!-- Causale automatica -->)
- La causal de girocontable del IVA en compras tendrá el tipo *Girocontable IVA compras en suspensión*<!-- Giroconto IVA acquisti in sospensione -->
- La causal de girocontable del IVA en ventas tendrá el tipo *Girocontable IVA en suspensión*<!-- Giroconto IVA in sospensione -->

El contenido (plantilla) de las causales utilizadas para la factura de venta y de compra difiere típicamente de las causales ordinarias porque el IVA se contabiliza en una cuenta específica de IVA suspendido, distinta de las cuentas ordinarias destinadas al IVA a crédito y a débito que luego se transfieren a la cuenta del fisco c/IVA en la fase de liquidación periódica. En cuanto al registro de IVA movido<!-- registro iva movimentato -->, este puede seguir siendo el habitual sin necesidad de definir uno específico. El tipo particular de movimiento de IVA definido en la causal hace que el impuesto no se considere como crédito o débito hasta que no se realice el traslado<!-- giroconto -->, aunque se visualice en los movimientos de IVA del período. 

El contenido de las causales de cobro y pago es el habitual.

El contenido de las causales (ejecutadas automáticamente) de girocontable del IVA en suspensión revierte las cuentas específicas del IVA suspendido y contabiliza en las cuentas del IVA ordinario ya que, a partir de ese momento, el IVA es exigible o deducible respectivamente.

A continuación, algunas imágenes de detalle de la configuración:

![](/img/it-it/finance-area/other/suspvat1.png)

![](/img/it-it/finance-area/other/suspvat2.png)

![](/img/it-it/finance-area/other/suspvat3.png)

![](/img/it-it/finance-area/other/suspvat4.png)

![](/img/it-it/finance-area/other/suspvat5.png)

### GESTIÓN DEL IVA TRAS UN AÑO DE LA OPERACIÓN SI NO SE HA PAGADO NI COBRADO<!-- GESTIONE IVA DECORSO UN ANNO DALL'OPERAZIONE SE NON PAGATA O NON INCASSATA -->

La gestión permite identificar las partidas abiertas desde hace más de un año y contabilizar automáticamente el girocontable del IVA para hacerlo exigible o deducible respectivamente.

Para ello es posible utilizar (con configuraciones específicas) el formulario [**Girocontable de partidas**](/docs/finance-area/maturity-values/procedures/maturity-values-giro/filter-tab)<!-- Giroconto partite -->

### CONFIGURACIONES EN PRESENCIA DE RECIBOS BANCARIOS E IMPAGADOS<!-- IMPOSTAZIONI IN PRESENZA DI RICEVUTE BANCARIE ED INSOLUTI -->

Si, en el ámbito del ciclo activo, está prevista la emisión de recibos bancarios y la presentación de los mismos al cobro en el banco o al salvo buen fin, la configuración de las causales será la siguiente:

1. Emisión de la factura: registrada con la causal configurada como se describió arriba;

2. Emisión del efecto: registro normal con la causal habitual, se cierra la partida abierta por la factura pero no se realiza ningún girocontable del IVA

3. contabilización **distinta** de presentación Ri.Ba: **la causal utilizada está vinculada a la automática de girocontable de IVA**, el girocontable se contabiliza en la fecha de vencimiento de los efectos

4. contabilización de abonos: normal como de costumbre

**En el caso de contabilización de impagos**: la causal contable utilizada no requiere ajustes particulares, el procedimiento detecta la partida cerrada por la Ri.Ba. y vinculada al IVA de caja y elimina el registro del girocontable; al mismo tiempo, en lugar de reabrir la partida, realiza un pago con saldo deudor para revertir el pago de la partida realizado por la emisión de la Ri.Ba., de modo que la partida original (relacionada con el IVA en suspensión) vuelva a estar abierta.