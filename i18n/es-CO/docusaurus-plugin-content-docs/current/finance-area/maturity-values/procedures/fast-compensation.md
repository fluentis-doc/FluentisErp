---
title: compensazione veloce
sidebar_position: 3
---

:::note Ruta (Percorso)
**Administración>Partidas>Procedimientos>compensazione veloce (Amministrazione>Partite>Procedure>Compensazione veloce)**

Nota (Nota):
Para cualquier aspecto no detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).

:::

---

Este formulario permite, de una manera ligeramente simplificada en comparación con el equivalente *Compensación de partidas*, gestionar la compensación entre partidas abiertas de signo inverso (Debe / Haber) y con el mismo subcuenta (por ejemplo, un cliente o un proveedor).

Por lo tanto, se utiliza como alternativa a la maniobra de compensación que se ejecuta directamente en la fase de registro contable (por ejemplo, en el caso de registrar una factura emitida o recibida donde previamente ya se haya realizado un cobro o un pago anticipado) y, por ende, también en un segundo momento.

**Las partidas activas se representan en la cuadrícula superior, mientras que las pasivas en la cuadrícula inferior.**
Los botones para iniciar la búsqueda de partidas están ubicados, como es habitual, en la barra de ribbon y deben ser presionados ambos para obtener ambas tipologías de partida.

Para gestionar la búsqueda a través de los campos de filtro habituales (por ejemplo, para buscar solo las partidas activas y pasivas a nombre de un único proveedor), es necesario visualizar los campos de filtro (ocultos) desde **las pestañas correspondientes ubicadas a la derecha** (se vuelven visibles al pasar el mouse y se pueden fijar para que permanezcan visibles).

Las partidas que deben ser compensadas entre sí deben ser seleccionadas tanto en la cuadrícula superior como en la inferior.

![](/img/it-it/finance-area/maturity-values/fast-compensation.png)

Al presionar el botón ***Compensación de partidas*** (Compensazione partite), en la barra de ribbon, las partidas seleccionadas se compensan entre sí.

En caso de que los importes no coincidan, la partida de menor importe se cierra mientras que la mayor permanece abierta por el valor residual.

También es posible especificar un valor parcial según el cual realizar la compensación. En este caso, amplíe la sección de Contabilización y utilice el campo **valore** (ver la última imagen a continuación).

![](/img/it-it/finance-area/maturity-values/fast-compensation2.png)

---

La compensación puede dar lugar, automáticamente, a un asiento contable (por ejemplo, cuando se compensan partidas de un mismo sujeto pero con subcuentas distintas, ya que es tanto cliente como proveedor y, por lo tanto, también deben compensarse los saldos contables).

Para activar la contabilización, marque el indicador en el campo de contabilización en la parte superior correspondiente a las pestañas del formulario y amplíe la sección para establecer los parámetros necesarios (en particular, la causa de contabilidad).

![](/img/it-it/finance-area/maturity-values/fast-compensation3.png)