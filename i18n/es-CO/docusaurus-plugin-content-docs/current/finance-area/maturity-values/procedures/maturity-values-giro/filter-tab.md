---
title: Pestaña Filtro
sidebar_position: 1
ai_generated: true
---

| Función | Significado |
| --- | --- |
| Buscar<!-- Ricerca --> | Botón para buscar las partidas relacionadas con el subcuenta<!-- sottoconto --> a traspasar a otro subcuenta<!-- sottoconto -->. |
| Contabilizar<!-- Contabilizza --> | Botón para realizar la contabilización del giro de partidas<!-- giroconto partite -->. |

### USO GENÉRICO<!-- UTILIZZO GENERICO -->

La pantalla consiste en una parte superior de filtro, en la que es obligatorio indicar el subcuenta<!-- sottoconto --> en el que buscar las partidas<!-- partite --> a traspasar, una cuadrícula de selección de partidas y, en la parte inferior, la configuración de la causal<!-- causale --> de contabilidad, las fechas de registro/competencia y el subcuenta<!-- sottoconto --> donde reabrir las partidas<!-- partite -->. En particular, la causal<!-- causale --> de contabilidad debe prever tanto el indicador de cierre de partidas como el de apertura. El resultado será la detección del cierre de las partidas seleccionadas para reabrirlas, manteniendo las mismas referencias de origen, pero en el subcuenta<!-- sottoconto --> de destino.

### USO EN EL ÁMBITO DEL IVA EN SUSPENSIÓN<!-- UTILIZZO NELL'AMBITO DELL'IVA IN SOSPENSIONE -->
Este procedimiento también puede utilizarse en casos de IVA en suspensión (llamada IVA por caja) que, como es sabido, prevé que, transcurrido un año desde la facturación de la operación activa o pasiva, si no ha ocurrido el cobro o el pago (que hubiera hecho exigible o deducible la correspondiente IVA), deba en todo caso hacerse imponible la IVA o deducirse el impuesto sobre la compra.

Marcando la casilla (en la parte inferior) **Mostrar vencimientos suspendidos no cerrados a la fecha<!-- Mostra scadenze sospese non chiuse alla data -->** y completando correctamente el campo **Fecha de iva suspendida<!-- Data iva sospesa -->**, se extraen solo las partidas abiertas relacionadas con operaciones con IVA en suspensión (identificadas mediante las causales contables<!-- causali contabili --> especialmente configuradas) a la fecha indicada en el campo mencionado.

En este punto, seleccionándolas e indicando la causal contable deseada, al presionar **Contabilizar<!-- Contabilizza -->**, se crea la registración de traspaso<!-- registrazione di giro --> desde las cuentas usadas para el IVA en suspensión a las cuentas para el IVA a débito o a crédito, dejando sin embargo (esta es la particularidad de este procedimiento comentado) las partidas abiertas.  
El registro contable de cobro o pago detectará automáticamente el traspaso realizado y no generará nuevamente el asiento automático por el traspaso del IVA.