---
title: Pestaña Filtro (Tab Filtro)
sidebar_position: 1
---

| Función (Funzione) | Significado (Significato) |
| --- | --- |
| Búsqueda (Ricerca) | Botón para buscar las transacciones relacionadas con la subcuenta a trasladar a otra subcuenta. |
| Contabilizar (Contabilizza) | Botón para realizar la contabilización del asiento de traslados. |

### USO GENÉRICO (UTILIZZO GENERICO)

La máscara se compone de una parte superior de filtro, dentro de la cual es obligatorio indicar la subcuenta sobre la cual buscar las transacciones a trasladar, una cuadrícula de selección de las transacciones y en la parte inferior la configuración de la causal contable, las fechas de registro/competencia y la subcuenta sobre la cual reabrir las transacciones. En particular, la causal contable debe prever tanto el indicador de cierre de transacciones como el de apertura. El resultado será la contabilización del cierre de las transacciones seleccionadas para reabrirlas, manteniendo las mismas referencias de origen, pero en la subcuenta de destino.

### USO EN EL ÁMBITO DEL IVA EN SUSPENSIÓN (UTILIZZO NELL'AMBITO DELL'IVA IN SOSPENSIONE)
Este procedimiento también puede utilizarse en los casos de IVA en suspensión (c.d. IVA por caja), que, como es bien sabido, prevé que, transcurrido un año desde la facturación de la operación activa o pasiva, si no ha ocurrido el cobro o el pago (que habrían hecho exigible o deducible el IVA correspondiente), se debe, en todo caso, considerar el IVA como imponible o deducir el impuesto sobre la compra.

Al marcar el indicador (en la parte inferior) **Mostrar vencimientos pendientes no cerrados a la fecha (Mostra scadenze sospese non chiuse alla data)** y valorando adecuadamente el campo **data iva sospesa**, se extraen únicamente las transacciones abiertas referidas a operaciones con IVA en suspensión (identificadas mediante las causas contables debidamente configuradas) a la fecha establecida en el campo mencionado.

En este punto, al seleccionarlas y establecer la causal contable deseada, al presionar **contabilizza**, se crea el registro de traslado desde las cuentas utilizadas para el IVA en suspensión a las cuentas para el IVA a pagar o a crédito, dejando, no obstante (aquí radica la particularidad del procedimiento en comentario), las transacciones abiertas.  
El registro contable de cobro o pago registrará automáticamente el traslado realizado y no volverá a activar la escritura automática para el traslado del IVA.