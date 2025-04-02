---
sidebar_position: 2
title: Cargo Inverso Misto (Reverse Charge Misto)
---

Hay una gestión particular en el sistema para automatizar aún más la gestión de las situaciones que se conocen como cargo inverso mixto, es decir, en la misma factura de compra, una parte facturada en cargo inverso y la otra en régimen ordinario.

Este conjunto de configuraciones **se añade** a las ya presentes, con las que previamente se resolvía (de manera no completa) la situación mixta, en particular al indicador *Excluir de causales automáticas (Escludi da causali automatiche)* presente en la tabla de Saldos y modalidades de IVA.  
Las configuraciones presentes pueden utilizarse en lugar de dicho indicador para una gestión más completa y funcional.

Las implementaciones específicas para esta gestión prevén:

- Un **indicador (flag)** en la tabla **Saldos y modalidades de IVA (Aliquote e modalità IVA)**  
- Un **tipo importo** específico en la causal contable

### Tabla de Saldos y modalidades de IVA (Tabella Aliquote e modalità IVA)

En correspondencia con el código de IVA que se designará para la parte facturada en cargo inverso, se habilitará el **indicador (flag)** **reverse charge** que marca el tipo de IVA a utilizar para el cargo inverso. Esto significa que el IVA de esta línea no se incluirá en el total de la registración ni se contabilizará para las partidas (la hipótesis es que el proveedor tenga la lógica de cálculo de partidas sobre *base imponible + IVA*).

:::tip Nota
La lógica de las "nuevas configuraciones" para la situación mixta es, por lo tanto, opuesta a la del pasado; en lugar de identificar la parte a no transferir porque está excluida del cargo inverso, se irá a indicar la parte que está en cargo inverso.  
El IVA en reversa, por lo tanto, no se añadirá al total de la registración como anteriormente, ni se pagará al proveedor monetariamente (algo que ya sucedía, pero sin necesidad de configurar el método de cálculo de la partida abierta solo sobre base imponible, ya que también dejando la configuración base en base imponible + IVA, la parte en reversa no se añade a la partida abierta).
:::

### Causales contables: Tipo de importe (Causali contabili: Tipo importo)

En la causal contable que se utilizará para contabilizar el cargo inverso, el tipo de importe *Total doc/registración (Totale doc/registrazione)* se valora con base imponible + IVA ordinaria - IVA en reversa (porque el IVA en reversa se resta mediante el indicador mencionado anteriormente y en esta lógica no debe añadirse al total, ya que no proviene de la factura del proveedor, por lo tanto no debe pagarse).

Se prevé un nuevo tipo de importe *reverse charge* que se valora con el IVA en reversa y debe utilizarse para la línea de IVA transitorio y para las dos líneas de IVA de la registración automática.

:::note Nota
El tipo de importe *reverse charge* no considera el IVA no deducible, (también para cuadrar con el importe que tengo en el proveedor). Por lo tanto, la cuota no deducible termina como costo en la primera registración y luego va al IVA a deber del girococonto, como IVA a pagar.
:::

Las causales de cargo inverso, por lo tanto, se convierten así:

![](/img/it-it/finance-area/other/mixrev1.png)

![](/img/it-it/finance-area/other/mixrev2.png)