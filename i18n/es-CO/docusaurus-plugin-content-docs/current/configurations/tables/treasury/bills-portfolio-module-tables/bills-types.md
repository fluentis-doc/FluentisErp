---
title: Tipos de efectos
sidebar_position: 3
---

:::tip[FAst Start]
La tabla está involucrada en el procedimiento de [**Fast Start**](/docs/guide/fast-start)

En caso de que se desee configurar manualmente, consulte la lista de verificación en la página enlazada
:::

La tabla se completa asignando un código y una descripción de usuario, a los cuales luego debe asignarse un numerador de referencia, un tipo de efecto entre los predefinidos y finalmente una cuenta detallada de movimientos: esta cuenta detallada se utilizará como contrapartida para el cierre de cliente dentro del procedimiento de contabilización de efectos.

El tipo de factura puede luego asociarse al tipo de pago en la tabla homónima.

Cabe señalar que solo los efectos de tipo cambiario podrán ser gestionados en los procedimientos de contabilidad no pagada por cesión del módulo de No Remunerado.

El flag **Gestionar monto parcial** permite crear efectos que consumen *parcialmente* los valores mat., indicando su importe. Prevista una gestión manual dentro del efecto.

:::danger[Atención]
Al activar este flag, el procedimiento de generación automática del efecto<!-- generazione automatica effetto --> desde los valores mat. (/ facturas) no incluirá en el efecto la referencia a a madurez, en consecuencia, en la fase de contabilidad de facturas no se cerrará la madurez la cual se mantendrá abierta.

De hecho, la activación del flag supone (está pensada para) una gestión manual
:::

El enlace **Caja** no está en uso para la localización italiana, sirve para registrar en los efectos desde la caja registradora.

<iframe width="560" height="315" src="https://www.youtube.com/embed/pnRACKqZqvM" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>