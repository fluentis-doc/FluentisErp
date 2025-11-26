---
sidebar_position: 2
title: Reverse Charge Mixto
ai_generated: true
---

En el sistema existe una gestión especial para automatizar aún más la gestión de las llamadas situaciones de Reverse charge mixto<!-- Reverse charge misto -->, es decir, cuando en la misma factura de compra una parte está facturada en reverse charge y otra en régimen ordinario.

Este conjunto de configuraciones **se suma** a las ya existentes, con las cuales anteriormente se intentaba (de manera no completa) gestionar la situación mixta, en particular el flag *Excluir de causales automáticas<!-- Escludi da causali automatiche -->* presente en la tabla Aliquotas y modalidades de IVA<!-- Aliquote e modalità IVA -->.
Las presentes configuraciones pueden utilizarse en lugar del flag mencionado para una gestión más completa y funcional.

Las implementaciones específicas para esta gestión prevén:

- Un **flag** en la tabla **Aliquotas y modalidades de IVA<!-- Aliquote e modalità IVA -->**
- Un **Tipo importe<!-- Tipo importo -->** específico en la causa contable<!-- causale contabile -->

### Tabla Aliquotas y modalidades de IVA<!-- Tabella Aliquote e modalità IVA -->

En correspondencia con el código de IVA<!-- codice iva --> que se designará para la parte facturada en reverse charge, se habilitará el **flag** **Reverse Charge** que marca la alícuota a utilizar para el reverse charge. Esto significa que el IVA de esta línea no será incluido en el total de la registración<!-- totale registrazione --> ni será contabilizado para las partidas<!-- partite --> (la hipótesis es que el proveedor tenga la lógica de cálculo de partidas<!-- partite --> sobre *imponible + iva*).

:::tip Nota<!-- Nota -->
La lógica de las "nuevas configuraciones" para la situación mixta está por tanto invertida respecto a la anterior: en lugar de identificar la parte que no se debe traspasar porque está excluida del reverse charge, se indicará la parte que está en reverse charge.
El IVA en reverse por tanto no será añadido al total de la registración<!-- totale della registrazione --> como antes, ni pagado monetariamente al proveedor (lo que ya sucedía, pero sin necesidad de configurar el método de cálculo de la partida abierta<!-- partita aperta --> solo sobre imponible, ya que incluso dejando la configuración base en imponible + iva la parte en reverse no es añadida a la partida abierta<!-- partita aperta -->).
:::

### Causas contables<!-- Causali contabili -->: Tipo importe<!-- Tipo importo -->

En la causa contable<!-- causale contabile --> que se utilizará para contabilizar el reverse charge, el tipo importe<!-- tipo importo --> *Total doc/registración<!-- Totale doc/registrazione -->* se valoriza con imponible + IVA ordinaria - IVA reverse (porque el IVA reverse se resta mediante el flag anteriormente mencionado y en esta lógica no debe añadirse al total ya que no proviene de la factura del proveedor, por tanto no se debe pagar).

Se prevé un nuevo tipo importe<!-- tipo importo --> *Reverse charge* que se valoriza con el IVA en reverse y por lo tanto debe utilizarse para la línea de IVA transitorio y para las dos líneas de IVA de la registración<!-- reg. automatica --> automática.

:::note Nota<!-- Nota -->
El tipo importe *Reverse charge* no considera el IVA no deducible (también para cuadrar con el importe del proveedor). Por lo tanto, la parte no deducible pasa a ser un costo en la primera registración<!-- registrazione --> y luego pasa al IVA a débito del traspaso, como IVA a pagar.
:::

Las causas reverse<!-- causali reverse --> por lo tanto quedan así:

![](/img/it-it/finance-area/other/mixrev1.png)

![](/img/it-it/finance-area/other/mixrev2.png)