---
title: Tipos de efectos
sidebar_position: 3
ai_generated: true
---

:::tip[FAst Start]
La tabla está involucrada en el procedimiento de [**Fast Start**](/docs/guide/fast-start)<!-- Fast Start -->

En caso de que se desee configurar manualmente, consulte la lista de verificación en la página enlazada<!-- check list della pagina linkata -->
:::

La tabla se completa asignando un código y una descripción de usuario<!-- utente -->, a los cuales luego debe asignarse un numerador de referencia, un tipo de efecto entre los predefinidos y finalmente un subcuenta<!-- sottoconto --> de movimientos<!-- movimentazione -->: esta subcuenta<!-- sottoconto --> se utilizará como contrapartida para el cierre de cliente dentro del procedimiento de contabilización de efectos<!-- procedura di contabilizzazione effetti -->.

El tipo de efecto<!-- tipo effetto --> puede luego asociarse al tipo de pago en la tabla homónima.

Cabe señalar que solo los efectos de tipo cambiario podrán ser gestionados en los procedimientos de contabilización de impagos<!-- contabilizzazione insoluti --> por cesión del módulo de Impagos<!-- modulo Insoluti -->.

El flag **Gestión de importe parcial<!-- Gestione importo parziale -->** permite crear efectos que consumen *parcialmente<!-- parzialmente -->* los documentos pendientes<!-- partite -->, indicando su importe. Prevista una gestión manual dentro del efecto<!-- effetto -->.

:::danger[Atención]<!-- Attenzione -->
Al activar este flag, el procedimiento de generación automática del efecto<!-- generazione automatica effetto --> desde los documentos pendientes<!-- partite --> (/ facturas) no incluirá en el efecto<!-- effetto --> la referencia al documento pendiente<!-- partita -->, en consecuencia, en la fase de contabilización del efecto<!-- contabilizzazione effetto --> no se cerrará el documento pendiente<!-- partita --> el cual se mantendrá abierto.

De hecho, la activación del flag supone (está pensada para) una gestión manual
:::

El enlace **Caja<!-- Cassa -->** no está en uso para la localización italiana, sirve para registrar en los efectos desde los registradores de caja<!-- registratori di cassa -->.

<iframe width="560" height="315" src="https://www.youtube.com/embed/pnRACKqZqvM" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>