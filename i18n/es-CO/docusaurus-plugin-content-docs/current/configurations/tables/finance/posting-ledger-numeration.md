---
title: numerazione registrazioni contabili
sidebar_position: 19
---

Ruta del formulario: **Configuración > Administración > numerazione registrazioni contabili (Configurazione > Amministrazione > Numerazione registrazioni contabili)**

:::tip[Inicio Rápido (FAst Start)]
La tabla está relacionada con el procedimiento de [**Inicio Rápido (Fast Start)**](/docs/guide/fast-start).

Si se desea configurar manualmente, consulte la lista de verificación de la página enlazada.
:::

En esta tabla se define, a través de un **[*Numerador estándar de Fluentis*](/docs/configurations/tables/fluentis-numerations)**, la política para los registros contables definitivos y provisionales.

**<u>Se recomienda seguir las configuraciones visibles en las imágenes</u>** para una gestión óptima de la numeración. Es posible elegir una periodicidad diferente, por ejemplo, anual, o no adoptar la recuperación de números libres, o incluso vincular la numeración a un criterio de coherencia entre la fecha y el número (por ejemplo, no se puede tener el número 2 hoy y el número 1 mañana).

También es posible, en casos particulares o de necesidad específica, iniciar la numeración desde un número diferente de 1.

**NOTA:** para la numeración provisional es necesario que la numeración sea negativa.

![](/img/it-it/configurations/tables/finance/posting-ledger-numerations/posting-ledger-numerations.png)

![](/img/it-it/configurations/tables/finance/posting-ledger-numerations/posting-ledger-numerations-detail.png)

![](/img/it-it/configurations/tables/finance/posting-ledger-numerations/posting-ledger-numerations-detail-provisory.png)

:::danger ATENCIÓN
Se desaconseja establecer, en situaciones normales, más de un numerador, respectivamente para los registros definitivos y provisionales, simultáneamente. Si surge esta necesidad, consulte **[*el encabezado del motivo contable* campo *Numeración*](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)**.  
También se desaconseja insertar una fecha de finalización de validez para la numeración en curso si esto no está motivado por un cambio real en los detalles de la política misma. La periodicidad elegida en la numeración permite que el número se reinicie cada año, o cada día, etc. Para más detalles sobre la renovación de los numeradores al comienzo del año, [**aquí**](/docs/configurations/utility/new-year-counter-generation).
:::

:::important Ver También
[**TUTORIALES EN VIDEO SOBRE LAS TABLAS ADMINISTRATIVAS**](/docs/video/finance/intro)
:::