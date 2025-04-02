---
title: acquisizione effetti dalle fatture
sidebar_position: 1
---

El procedimiento de adquisición de efectos de las facturas sigue el relacionado con las [**partite**](/docs/treasury/bills-holding/procedures/bills-acquisition-from-maturity-values), al que **se remite (si rinvia)**.

El dato de origen será, en lugar de las partidas abiertas, directamente las **vencimientos de las facturas del ciclo activo (scadenze delle fatture del ciclo attivo)**.

:::tip[Nota (Nota)]
Esto permite anticipar la creación y la presentación en el banco de los efectos (por ejemplo, los recibos bancarios que deben llevarse al salvo buen fin) incluso antes de haber contabilizado las facturas activas.

Se recomienda contabilizar las facturas activas antes de contabilizar la emisión de los efectos para poder gestionar el cierre automático de las partidas abiertas a través de la primera registro.
:::

:::danger[Atención (Attenzione)]
La **gestión de la adquisición de efectos de las facturas (gestione dell'acquisizione effetti dalle fatture)** es alternativa a la adquisición de las partidas.
:::

**Botones específicos:**

**ricerca**: Busca la lista de los vencimientos para los cuales crear los efectos.

**acquisizione**: Realiza la creación de los efectos para los vencimientos seleccionados.

### Pestaña Precedentes (Tab Precedenti)

Una vez realizada la creación, las filas desaparecerán de la cuadrícula del *filtro* y el resultado será visible en la pestaña **Precedentes**, dentro de la cual es posible anular la operación.

No es posible anular la creación de efectos si estos están contabilizados o presentados en la lista.

**Botones específicos:**

**ricerca**: Busca la lista de las creaciones realizadas.

**rollback acquisizione**: Con este botón se borrará toda la adquisición realizada, con todos los efectos asociados.

**rollback effetto**: Con este botón se borrará la creación del efecto individual seleccionado.