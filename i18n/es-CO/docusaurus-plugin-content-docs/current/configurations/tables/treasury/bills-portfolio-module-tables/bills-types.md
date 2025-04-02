---
title: tipi effetti
sidebar_position: 3
---

:::tip[Inicio Rápido (FAst Start)]
La tabla está relacionada con el procedimiento de [**Inicio Rápido (Fast Start)**](/docs/guide/fast-start)

En caso de que se desee configurar manualmente, consulte la lista de verificación de la página enlazada.
:::

La tabla se completa mediante la imposición de un código y una descripción del usuario, a los cuales se les asignará luego un numerador de referencia, un tipo de efecto entre los predefinidos y, finalmente, una subcuenta de movimiento: esta subcuenta se utilizará en contrapartida al cierre del cliente dentro del procedimiento de contabilización de efectos.

El tipo de efecto puede luego asociarse al tipo de pago en la tabla homónima.

Cabe señalar, finalmente, que solo los efectos de tipo cambiario podrán ser gestionados en el procedimiento de contabilización de morosidad por cesión del módulo de Morosidad.

El indicador **gestione importo parziale** permite crear efectos que consumen *parcialmente (parzialmente)* las partidas, indicando el importe. Requiere una gestión manual dentro del efecto.

:::danger[Atención (Attenzione)]
Al activar este indicador, el procedimiento de generación automática de efectos desde las partidas (/ facturas) no insertará en el efecto la referencia a la partida; en consecuencia, en la fase de contabilización del efecto no se realizará el cierre de la partida, la cual permanecerá abierta.

De hecho, la activación del indicador implica (está pensada para) una gestión manual.
:::

El enlace **cassa** no está en uso para la localización italiana; sirve para registrar efectos desde los registros de caja.

<iframe width="560" height="315" src="https://www.youtube.com/embed/pnRACKqZqvM" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>