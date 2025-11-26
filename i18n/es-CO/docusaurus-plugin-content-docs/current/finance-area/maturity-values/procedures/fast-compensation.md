---
title: Compensación rápida
sidebar_position: 3
ai_generated: true
---

:::note Ruta<!-- Percorso -->
**Administración>Partidas<!-- Amministrazione>Partite --> >Procedimientos<!-- Procedure --> >Compensación rápida<!-- Compensazione veloce -->**

Nota:  
Para todo lo que no se detalla en este documento respecto al funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidad, botones y campos comunes](/docs/guide/common).

:::

---

Este formulario permite, de manera ligeramente simplificada respecto a la análoga *Compensación de partidas<!-- Compensazione partite -->*, gestionar la compensación entre partidas abiertas<!-- partite aperte --> de signo contrario (Deudor / Acreedor<!-- Dare / Avere -->) y registradas a la misma subcuenta<!-- sottoconto --> (por ejemplo, un cliente o un proveedor<!-- fornitore -->).

Por lo tanto, se utiliza como alternativa a la operación de compensación a ejecutar directamente en el registro contable (por ejemplo, en el caso de registrar una factura emitida o recibida donde previamente ya se haya realizado un cobro o pago anticipado) y también puede ser utilizada en un momento posterior.

**Las partidas activas<!-- partite attive --> se muestran en la cuadrícula superior, mientras que las partidas pasivas<!-- passive --> en la cuadrícula inferior.**
Los botones para iniciar la búsqueda de partidas<!-- partite --> se colocan como de costumbre en la barra de opciones (ribbon bar) y deben ser pulsados ambos para obtener ambos tipos de partidas<!-- partite -->.

Para gestionar la búsqueda a través de los habituales campos de filtro (por ejemplo, para buscar solo las partidas activas y pasivas asignadas a un solo proveedor<!-- fornitore -->), es necesario visualizar los campos de filtro (ocultos/desplegables) desde las **pestañas correspondientes a la derecha** (se hacen visibles pasando el ratón por encima y se pueden fijar para que permanezcan visibles si se desea).

Las partidas<!-- partite --> que deban ser compensadas entre sí deben ser seleccionadas tanto en la cuadrícula superior como en la inferior

![](/img/it-it/finance-area/maturity-values/fast-compensation.png)

Al pulsar el botón ***Compensación de partidas<!-- Compensazione partite -->*** en la barra de opciones, las partidas<!-- partite --> seleccionadas se compensan entre sí.

En el caso de importes que no coincidan, la partida<!-- partita --> de menor valor se cierra, mientras que la de mayor valor queda abierta por el importe residual.

También es posible especificar un valor parcial según el cual ejecutar la compensación. En este caso, expanda la sección Contabilización y use el campo **Valor<!-- Valore -->** (véase la última imagen al final).

![](/img/it-it/finance-area/maturity-values/fast-compensation2.png)

---

La compensación puede generar, automáticamente, también un asiento contable (por ejemplo, cuando se compensan partidas<!-- partite --> de un mismo tercero pero con subcuentas<!-- sottoconti --> distintas, dado que es tanto cliente como proveedor<!-- fornitore --> y, por tanto, deben compensarse también los saldos contables).

Para activar el asiento contable, marque la opción de contabilización en la parte superior, junto a las pestañas del formulario, y expanda la sección para establecer los parámetros necesarios (en particular la causa contable<!-- causale di contabilità -->).

![](/img/it-it/finance-area/maturity-values/fast-compensation3.png)