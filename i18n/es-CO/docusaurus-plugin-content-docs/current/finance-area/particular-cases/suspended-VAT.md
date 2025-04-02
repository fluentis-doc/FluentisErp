---
sidebar_position: 3
title: Régimen del IVA en efectivo (Regime dell'iva per cassa)
---

:::important **Fluentis Academy** 
Se define como 'IVA en suspensión' la IVA que se hace exigible no en la entrega del bien, sino en el pago de la factura. 
El contribuyente que adopta este régimen liquida el IVA de todas las operaciones, tanto activas como pasivas, con el criterio de caja.  
El momento impositivo del IVA se hace coincidir con el momento de la fecha de pago o del cobro de los precios.  
De este modo, se deroga el principio que considera exigible el IVA de un documento registrado en contabilidad.

En la práctica, el régimen del IVA en efectivo permite el pago del IVA a deber sobre las ventas o los servicios solo en el momento del pago de la factura por parte del cliente.  
Y al mismo tiempo, permite la deducción del IVA sobre las compras solo en el momento en que el sujeto pague la factura al proveedor.  

En cualquier caso, la liquidación del IVA deberá realizarse dentro de un año desde la venta o la prestación del servicio, salvo en casos de quiebra o de involucramiento del concesionario o del comitente en un procedimiento concursal.
:::

### CONFIGURACIONES Y CONFIGURACIÓN DE CAUSAS CONTABLES INVOLUCRADAS (IMPOSTAZIONI E CONFIGURAZIONE CAUSALI CONTABILI COINVOLTE)

Las configuraciones principales para la gestión de este régimen se realizan simplemente a través de la correcta configuración de las causas contables.

En particular, es fundamental seleccionar correctamente, dentro de las causas involucradas, en el campo **tipo movimento** (referido al IVA), la tipología exacta.

En detalle:

- La causa para el registro de la factura del proveedor tendrá el tipo *IVA compras en suspensión (IVA acquisti in sospensione)*.
- La causa para el registro de la factura del cliente tendrá el tipo *Venta con IVA en suspensión (Vendita con IVA in sospensione)*.
- Las causas para el cobro o el pago no tendrán un tipo particular, sino como de costumbre el tipo *No IVA (Non IVA)* (estarán conectadas a las causas ejecutadas automáticamente para el giroconto del IVA que se vuelve exigible a través del campo *Causale automatica*).
- La causa de giroconto del IVA de compras tendrá el tipo *Giroconto IVA compras en suspensión (Giroconto IVA acquisti in sospensione)*.
- La causa de giroconto del IVA de ventas tendrá el tipo *Giroconto IVA en suspensión (Giroconto IVA in sospensione)*.

El contenido (template) de las causas utilizadas para la factura de venta y de compra difiere típicamente de las causas ordinarias por el hecho de que el IVA se contabiliza en una cuenta específica para el IVA suspendido y distinta de aquellas ordinarias destinadas al IVA a crédito y a débito que luego se girarán a la cuenta del erario c/IVA en la etapa de liquidación periódica. En cuanto al registro de IVA movido, este puede permanecer el habitual sin necesidad de definir uno específico. El tipo particular de movimiento de IVA definido en la causa hace que el impuesto no se considere como crédito o débito hasta que se produzca el giroconto, aunque se visualice en los movimientos de IVA del período.

El contenido de las causas de cobro y pago es el habitual.

El contenido de las causas (ejecutadas automáticamente) de giroconto del IVA en suspensión, anula las cuentas específicas del IVA suspendido y contabiliza en las cuentas del IVA ordinario ya que desde ese momento el IVA es exigible o deducible respectivamente.

A continuación, algunas imágenes de detalle de las configuraciones. 

![](/img/it-it/finance-area/other/suspvat1.png)

![](/img/it-it/finance-area/other/suspvat2.png)

![](/img/it-it/finance-area/other/suspvat3.png)

![](/img/it-it/finance-area/other/suspvat4.png)

![](/img/it-it/finance-area/other/suspvat5.png)

### GESTIÓN DEL IVA TRANSCURRIDO UN AÑO DESDE LA OPERACIÓN SI NO SE HA PAGADO O NO SE HA COBRADO (GESTIONE IVA DECORSO UN ANNO DALL'OPERAZIONE SE NON PAGATA O NON INCASSATA)

La gestión permite identificar las partidas abiertas desde hace más de un año y contabilizar automáticamente el giroconto del IVA con el fin de hacerlo exigible o deducible respectivamente.

Para ello, es posible utilizar (con configuraciones específicas) el formulario [**giroconto partite**](/docs/finance-area/maturity-values/procedures/maturity-values-giro/filter-tab).

### CONFIGURACIONES EN CASO DE RECIBOS BANCARIOS E INCUMPLIMIENTOS (IMPOSTAZIONI IN PRESENZA DI RICEVUTE BANCARIE ED INSOLUTI)

Si, en el ámbito del ciclo activo, se prevé la emisión de recibos bancarios y la presentación de los mismos en el banco para el cobro o al salvo buen fin, la configuración de las causas será la siguiente:

1. Emisión de la factura: registrada con la causa configurada como se describió anteriormente;

2. Emisión efecto: registro normal con la causa habitual, se cierra la partida abierta por la factura pero no se lleva a cabo ningún giroconto de IVA.

3. Contabilización **distinta** de presentación de Ri.Ba: **la causa utilizada tiene el vínculo a aquella automática del giroconto de IVA**, el giroconto se contabiliza a la fecha de vencimiento de los efectos.

4. Contabilización de abonos: normal como de costumbre.

**En caso de contabilización de incumplimientos**: la causa contable utilizada no necesita configuraciones particulares, el procedimiento intercepta la partida cerrada por la Ri.Ba. y vinculada al IVA en efectivo y cancela la registración de giroconto y, en su lugar de reabrir la partida, realiza un pago con signo deudor para anular el pago de la partida efectuado por la emisión de Ri.Ba., de modo que la partida original (vinculada al IVA en suspensión) vuelva a abrirse.